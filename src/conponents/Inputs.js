import React from "react";
import styled from "styled-components";

// import {
// 	AiFillFacebook,
// 	AiFillTwitterSquare,
// 	AiFillLinkedin,
// 	AiFillGoogleCircle,
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";

const Inputs = () => {
const navigate = useNavigate()
const formSchema = yup.object().shape({
    aspirants:yup.string().required("Enter candiates name"),
    politicalParty:yup.string().required("field cannot be empty"),
    ife: yup.number().integer().required(),
    ido: yup.number().integer().required(),
    ise: yup.number().integer().required(),
    ife: yup.number().integer().required(),
    oye: yup.number().integer().required(),
    ekitiSouth: yup.number().integer().required(),
    ekitiWest: yup.number().integer().required(),
    Efon: yup.number().integer().required(),
    Emure: yup.number().integer().required(),
    Ijero: yup.number().integer().required(),
    ikere: yup.number().integer().required(),
    illejemeje: yup.number().integer().required(),
    moba: yup.number().integer().required(),
    adoEkiti: yup.number().integer().required(),
    ikole: yup.number().integer().required(),
    gboyin: yup.number().integer().required(),
    ekitiEast: yup.number().integer().required(),

})

const { reset, register, handleSubmit, formState:{errors}}=useForm({
    resolvers:yupResolver(formSchema)
})
const onSubmit = handleSubmit(async (val)=>{
   console.log(val)
      

 const url= "https://ekitipoll.herokuapp.com/api/create"

 await axios.post(url,val).then((res)=>{
                console.log(res)
              
            }).catch((error)=>{
                console.log(error)
            })
            Swal.fire({
                position: "center",
                icon: "success",
                title: "vote uploaded successfully",
                showConfirmButton: false,
                timer: 2500})
       reset()
       navigate("/views")  
})
    

	return (
		<Container>
			<Wrapper>
				
				
				<MainCard onSubmit={onSubmit}>
					<LogoTitle1>Register Votes</LogoTitle1>
					<Name>
						<InputTitle>Aspirants</InputTitle>
						<Input
							placeholder="e.g: peter Obi"
					{...register("aspirants")}
						/>
					</Name>
					
					<br />
					<Name>
						<InputTitle>political party</InputTitle>
						<Input placeholder="e.g: APGA"
                        {...register("politicalParty")}
                        />
					</Name>
					<Error>{errors?.politicalParty?.message}</Error>
					<Hold>
						<PhoneData>
							<Phone>
								<InputTitle>Ifelodun/Irepodun LG</InputTitle>
								<Input
									placeholder="e.g: 5472"
                                    {...register("ife")}
								/>
							</Phone>
							<Error>{errors?.ife?.message}</Error>
						</PhoneData>

						<PhoneData>
							<Phone1>
								<InputTitle>Idi Osi LG</InputTitle>
								<Input
									placeholder="e.g: 55980"
									{...register("ido")}
								/>
							</Phone1>
							<Error>{errors?.ido?.message}</Error>
						</PhoneData>
					</Hold>
                    <Hold>
						<PhoneData>
							<Phone>
								<InputTitle>Ise Orun LG</InputTitle>
								<Input
									placeholder="e.g: 2348"
									{...register("ise")}
								/>
							</Phone>
							<Error>{errors?.ise?.message}</Error>
						</PhoneData>

						<PhoneData>
							<Phone1>
								<InputTitle>Oye LG</InputTitle>
								<Input
									placeholder="e.g: 6889"
									{...register("oye")}
								/>
							</Phone1>
							<Error>{errors?.oye?.message}</Error>
						</PhoneData>
					</Hold>
                    <Hold>
						<PhoneData>
							<Phone>
								<InputTitle>Ekiti South West LG</InputTitle>
								<Input
									placeholder="e.g: 55879"
									{...register("ekitiSouth")}
								/>
							</Phone>
							<Error>{errors?.ekitiSouth?.message}</Error>
						</PhoneData>

						<PhoneData>
							<Phone1>
								<InputTitle>Ekiti West LG</InputTitle>
								<Input
									placeholder="0000"
									{...register("ekitiWest")}
								/>
							</Phone1>
							<Error>{errors?.ekitiWest?.message}</Error>
						</PhoneData>
					</Hold>
                    <Hold>
						<PhoneData>
							<Phone>
								<InputTitle>Efon LG</InputTitle>
								<Input
									placeholder="e.g: 0000"
									{...register("Efon")}
								/>
							</Phone>
							<Error>{errors?.Efon?.message}</Error>
						</PhoneData>

						<PhoneData>
							<Phone1>
								<InputTitle>Emure LG</InputTitle>
								<Input
									placeholder="e.g: 0000"
									{...register("Emure")}
								/>
							</Phone1>
							<Error>{errors?.Emure?.message}</Error>
						</PhoneData>
					</Hold>
                    <Hold>
						<PhoneData>
							<Phone>
								<InputTitle>Ijero LG</InputTitle>
								<Input
									placeholder="e.g: 0000"
									{...register("ijero")}
								/>
							</Phone>
							<Error>{errors?.ijero?.message}</Error>
						</PhoneData>

						<PhoneData>
							<Phone1>
								<InputTitle>Ikere LG</InputTitle>
								<Input
									placeholder="e.g: 0000"
									{...register("ikere")}
								/>
							</Phone1>
							<Error>{errors?.ikere?.message}</Error>
						</PhoneData>
					</Hold>
					
					{/* <Error>{errors?.displayName?.message}</Error> */}
					<Hold>
						<PhoneData>
							<Phone>
								<InputTitle>Llegemeje LG</InputTitle>
								<Input
									placeholder="0000"
									{...register("illejemeje")}
									
								/>
							</Phone>
							{/* <Error>{errors?.password?.message}</Error> */}
						</PhoneData>

						<PhoneData>
							<Phone1>
								<InputTitle>Mogba LG</InputTitle>
								<Input
									placeholder="0000"
                                    {...register("moba")}
								
								/>
							</Phone1>
							<Error>{errors?.moba?.message}</Error>
						</PhoneData>
					</Hold>
                    <Hold>
						<PhoneData>
							<Phone>
								<InputTitle>Ado Ekiti</InputTitle>
								<Input
									placeholder="0000"
									{...register("adoEkiti")}
									
								/>
							</Phone>
							<Error>{errors?.adoEkiti?.message}</Error>
						</PhoneData>

						<PhoneData>
							<Phone1>
								<InputTitle>Ikole LG</InputTitle>
								<Input
									placeholder="0000"
									{...register("ikole")}
								
								/>
							</Phone1>
							<Error>{errors?.ikole?.message}</Error>
						</PhoneData>
					</Hold>
                    <Hold>
						<PhoneData>
							<Phone>
								<InputTitle>Gboyin LG</InputTitle>
								<Input
									placeholder="0000"
                                    {...register("gboyin")}
									
								/>
							</Phone>
							<Error>{errors?.gboyin?.message}</Error>
						</PhoneData>

						<PhoneData>
							<Phone1>
								<InputTitle>Ekiti East LG</InputTitle>
								<Input
									placeholder="0000"
                                    {...register("ekitiEast")}
								
								/>
							</Phone1>
							<Error>{errors?.ekitiEast?.message}</Error>
						</PhoneData>
					</Hold>
					<Button type="submit">Continue</Button>

				</MainCard>
			</Wrapper>
		</Container>
	);
};

export default Inputs;

const PhoneData = styled.div`
	width: 100%;
`;

const Error = styled.div`
	color: red;
	font-size: 12px;
	margin-top: 3px;
	display: flex;
	justify-content: flex-start;
	width: 100%;
	font-weight: 500;
`;

const Span = styled.div`
	margin: 0 5px;
	color: #742e9d;
	font-weight: 700;
	text-decoration: none;
`;
// const Icons = styled.div`
// 	display: flex;
// 	margin-top: 20px;
// `;

// const Icon3 = styled(AiFillLinkedin)`
// 	font-size: 35px;
// 	color: #0077b7;
// 	:hover {
// 		cursor: pointer;
// 	}
// `;

// const Icon2 = styled(AiFillTwitterSquare)`
// 	font-size: 35px;
// 	color: #50abf1;
// 	:hover {
// 		cursor: pointer;
// 	}
// `;

// const Icon1 = styled(AiFillFacebook)`
// 	font-size: 35px;
// 	color: #475993;
// 	:hover {
// 		cursor: pointer;
// 	}
// `;
// const Icon = styled(AiFillGoogleCircle)`
// 	font-size: 35px;
// 	color: red;
// 	:hover {
// 		cursor: pointer;
// 	}
// `;

const SocialText = styled.div`
	font-size: 12px;
	display: flex;
	margin-top: 50px;
`;

const Social = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Button = styled.button`
	outline: none;
	border: 0;
	font-family: Poppins;
	background-color: #742e9d;
	height: 45px;
	width: 100%;
	color: white;
	font-size: 13px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	transition: all 350ms;

	:hover {
		cursor: pointer;
		transform: scale(0.99);
	}
`;

const InputTitle = styled.div`
	font-size: 13px;
	position: absolute;
	top: -10px;
	left: 7px;
	padding: 0 3px;
	background-color: #f7eff1;
	/* background-clip: content-box; */
	font-weight: 700;
	color: #742e9d;
`;

const Input = styled.input`
	background-color: transparent;
	outline: none;
	border: 0;
	width: 100%;
	height: 100%;
	padding-left: 10px;

	::placeholder {
		color: lightgray;
		font-family: Poppins;
	}
`;

const Hold = styled.div`
	display: flex;
	margin: 0 10px;
	justify-content: space-between;
	width: 100%;
	margin: 17px 0;
`;

const Phone1 = styled.div`
	width: 100%;
	border: 1px solid silver;
	border-radius: 5px;
	height: 40px;
	position: relative;
	margin-left: 5px;
`;

const Phone = styled.div`
	width: 100%;
	border: 1px solid silver;
	border-radius: 5px;
	height: 40px;
	position: relative;
	margin-right: 5px;
`;

const Name = styled.div`
	width: 100%;
	border: 1px solid silver;
	border-radius: 5px;
	height: 40px;
	position: relative;
`;

const MainCard = styled.form`
	width: 600px;
	flex-direction: column;
	display: flex;
	align-items: center;
    height:100%
`;

const Line = styled.div`
	height: 400px;
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	margin: 0 50px;
`;

const Brief = styled.div`
	margin-top: 20px;
	color: gray;
	font-size: 10px;
	text-align: center;
`;

const Text = styled.div`
	font-weight: 700;
	margin-top: 25px;
	text-align: center;
	width: 300px;
	font-size: 25px;
	line-height: 1.2;
	color: #742e9d;
`;

const Logo = styled.div`
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 60px 0;
`;

const LogoTitle1 = styled.div`
	font-weight: 700;
	color: gray;
	margin-bottom: 50px;
	color: #742e9d;
	font-size: 30px;
	/* text-transform: uppercase; */
	font-family: Pacifico;
`;

const LogoTitle = styled.div`
	font-weight: 500;
	color: gray;
`;

const Bar = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 10px;
	margin-bottom: 15px;
	background-color: #fffbf8;
	box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
		rgba(17, 17, 26, 0.1) 0px 0px 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 50px;
	font-weight: 900;
	color: purple;
`;

const Brand = styled.div`
	width: 400px;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const Wrapper = styled.div`
	width: 900px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

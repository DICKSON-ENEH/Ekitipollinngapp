import React, {useState, useEffect} from "react";
import styled from "styled-components";
// import pix from "./babe.jpeg";
import axios from "axios"
const Views = () => {
    const [datas, setDatas] = useState([])

 const getAll = async()=>{
     const url ="https://ekitipoll.herokuapp.com/api/getall"
     await axios.get(url).then((res)=>{
         setDatas(res.data.data)
     })
 }
 useEffect(()=>{
getAll()
 },[])
	return (
		<Container>
			<Title>Candidate votes Reviews</Title>
			<TopLine>
				<Text>
					
				Aspirants
				</Text>
				<Text> party</Text>
				<Text>Ire/Ife LG</Text>
                <Text>Idi LG</Text>
				<Text>Ise Orun LG</Text>
				<Text>Oye LG</Text>
				<Text>Ekiti Sth LG</Text>
				<Text>Ekiti Wst LG</Text>
				<Text>Efon LG</Text>
				<Text>Emure LG</Text>
				<Text>Ijero LG</Text>
				<Text>Ikere LG</Text>
				<Text>llegemeje LG</Text>
				<Text>Mogba LG</Text>
				<Text>Ado Ekiti LG</Text>
				<Text>Ikole LG</Text>
				<Text>Gbonyin LG</Text>
				<Text>Ekiti East LG</Text>
				<Text>Total</Text>
				
			</TopLine>
			{
                datas?.map((props)=>(
                    <TopLine1 key={props.id}>
            <Text1 >
					
                    {props.aspirants}
                    </Text1>
                    <Text1>{props.politicalParty}</Text1>
                    <Text1>{props.ife}</Text1>
                    <Text1>{props.ido}</Text1>

                    <Text1>{props.ise}</Text1>
                    <Text1>{props.oye}</Text1>
                    <Text1>{props.ekitiSouth}</Text1>
                    <Text1>{props.ekitiWest}</Text1>
                    <Text1>{props.Efon}</Text1>
                    <Text1>{props.Emure}</Text1>
                    <Text1>{props.ijero}</Text1>
                    <Text1>{props.ikere}</Text1>
                    <Text1>{props.illejemeje}</Text1>
                    <Text1>{props.moba}</Text1>
                    <Text1>{props.adoEkiti} </Text1>
                    <Text1>{props.ikole}</Text1>
                    <Text1>{props.gboyin}</Text1>
                    <Text1>{props.ekitiEast}</Text1>
                    <Text1>{props.total}</Text1>
			</TopLine1>
                ))
            }
		</Container>
	);
};

export default Views;

const Image = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	object-fit: cover;
`;
const Title = styled.div`
	text-align: center;
	padding: 10px;
	font-weight: 700;
	text-transform: uppercase;
    background:#742e9d;
    color:#fff
`;
const Text1 = styled.div`
	padding: 0 15px;
	width: 200px;
    
    font-size:10px;
   
    /* text-transform:uppercase ; */
    /* text-align:center ; */
/* background:red */

`;
const Text = styled.div`
	/* padding: 0 1px; */
    /* margin:0 ; */
	width:100px;
    font-size:10px;
    text-transform:uppercase ;     
    text-align:center ;
  
    /* display:flex;
    justify-content:center;
    align-items: center; */
     /* background:red ; */
`;
const TopLine1 = styled.div`
	display: flex;
	padding: 10px 0 ;
	border-top: 1px solid silver;
	transition: all 350ms;
    /* display:flex;
    justify-content:center ;
    align-items: center; */

	:hover {
		background-color: whitesmoke;
	}
`;
const TopLine = styled.div`
	display: flex;
	padding: 10px 0;
    justify-content:center ;
    align-items: center;
`;
const Container = styled.div`
	background-color: white;
	margin: 10px;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

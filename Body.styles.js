import styled from "styled-components";
import {Container} from '../../GlobalStyle';
import {FaBuilding, FaUserSecret} from 'react-icons/fa';

export const BrokerIcon=styled(FaBuilding)`
margin-right:0.5rem;
`;

export const AdviserIcon=styled(FaUserSecret)`
margin-right:0.5rem;
`;


export const BodyContainer=styled(Container)`
display:flex;
justify-content:space-between;
height:80px;
${Container};
`;

 export const BodyLabel=styled.label`
 display:block;
 height:40px;
 width:500%;
 background-color:blue;
 color:white;
 border-radius:0.5rem;
 padding:10px;
 align-items:center;
 justify-content:center;
 text-align:center;
 `;

 export const BodyLabelText=styled.text`
 width:500%;
 cursor:pointer;
 padding:10px 200px;
 align-items:center;
 justify-content:center;
 text-align:center;
 `

 export const BodyContent=styled.div`
 padding:50px 100px;
 `

 export const Img=styled.img`
 /* padding-right:200px;
 border:0;
 max-width:100%;
 vertical-align:middle;
 display:inline-block;
 max-height:500px;
 height:100px; */

background-size: cover;
background-position: center;
background-repeat: no-repeat;
object-fit: cover;
border-radius: 4px;
height: 300px;
padding:10px 100px 10px 50px;
 `;
 
export const BodyLowerContent=styled.div`
 display:flex;
 padding:400px 100px 200px 300px;
 `
export const BodyLowerContentText=styled.text`
display:block;

`

export const LowerImg=styled.img`
background-size: cover;
background-position: center;
background-repeat: no-repeat;
object-fit: cover;
border-radius: 4px;
height: 300px;
padding:10px 100px 10px 50px;
`;

export const BodyLowerContent2=styled.div`
 display:flex;
 padding:700px 100px 200px 300px;
 `
export const BodyLowerContentText2=styled.text`
display:block;
padding:20px;

`

export const LowerImg2=styled.img`
background-size: cover;
background-position: center;
background-repeat: no-repeat;
object-fit: cover;
border-radius: 4px;
height: 300px;
padding:0px 50px 50px 50px;
`;

export const BodyFooter=styled.div`
 display:block;
 padding:900px 100px 200px 300px;
`

export const BodyFooterTitle=styled.div`
 display:block;
 padding:50px 100px 200px 300px;
 `

export const BodyFooterContent=styled.text`
display:flex;
padding:100px 10px;
`
export const BodyFooterContent1=styled.text`
display:block;
padding:20px 10px;

`
export const BodyFooterContent2=styled.text`
display:block;
padding:10px;

`

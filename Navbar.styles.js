import styled from 'styled-components';
import {FaBell, FaBookmark, FaBriefcase, FaHandHoldingUsd, FaHome, FaReceipt, FaThumbtack, FaUserCircle}from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { Container } from '../../GlobalStyle';

export const Nav=styled.nav`
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 999;
height: 80px;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
display: flex;
justify-content: space-between;
align-items: center;
background-color:black;
color:#fff;
`;

export const NavbarContainer=styled(Container)`
display:flex;
justify-content:space-between;
height:80px;
${Container};
`;

export const NavLogo=styled(Link)`
color:#fff;
justify-self:flex-start;
cursor: pointer;
text-decoration:none;
font-size:1.5rem;
display:flex;
align-items:center;
`;

export const NavIcon=styled(FaHandHoldingUsd)`
margin-right:1rem;
`;

export const NavIconHome=styled(FaHome)`
margin-right:0.5rem;
`;

export const NavIconWatchlist=styled(FaBookmark)`
margin-right:0.5rem;
`;

export const NavIconPositions=styled(FaBriefcase)`
margin-right:0.5rem;
`;

export const NavIconOrders=styled(FaReceipt)`
margin-right:0.5rem;
`;

export const NavIconAlerts=styled(FaBell)`
margin-right:0.5rem;
`;

export const NavIconExpertAdvice=styled(FaThumbtack)`
margin-right:0.5rem;
`;


export const MobileIcon=styled.div`
display:none;

@media screen and (max-width:960px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100%,60%);
    font-size:1.8rem;
    cursor: pointer;
}
`;

export const NavMenu=styled.ul`
display:flex;
align-items:center;
list-style:none;
text-align:center;
font-size:0.9rem;

&:hover{
    transition:all 0.3s ease-out;
}
@media screen and (max-width:960px){
    display:flex;
    flex-direction:column;
    width:100%;
    height:90vh;
    position:absolute;
    top:80px;
    left:${({click})=>(click?0:'-100%')};
    opacity:1;
    transition:all 0.5s ease;
    background:#101522;
}
`;

export const NavItem=styled.li`
height:80px;
border-bottom:2px solid transparent;

&:hover{
    transition:all 0.3s ease-out;
    border-bottom:2px solid #4b59f7;
}

@media screen and (max-width:960px){
    width:100%;

    &:hover{
        transition:all 0.3s ease-out;
        border:none;
    }
}
`;

export const NavLinks=styled(Link)`
color: #fff;
display:flex;
align-items:center;
text-decoration:none;
padding:0.5rem 1rem;
height:100%;

@media screen and (max-width: 960px){
    text-align:center;
    padding:2rem;
    width:100%;
    display:table;

    &:hover{
        color:#4b59f7;
        transition:all 0.3s ease-in-out;
    }

}
`;

export const UserLogo=styled(Link)`
color:#fff;
justify-self:flex-start;
cursor: pointer;
text-decoration:none;
font-size:1.5rem;
display:flex;
align-items:center;
`;

export const UserIcon=styled(FaUserCircle)`
margin-right:1rem;
`;

export const NavItemBtn=styled.li`
@media screen and (max-width:960px){
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:120px;
}`;

export const NavBtnLink=styled(Link)`
display:flex;
justify-content:center;
align-items:center;
text-decoration:none;
padding:8px 16px;
height:100%;
width:100%;
border:none;
outline:none;
`

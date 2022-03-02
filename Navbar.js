import React,{useEffect, useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {Button} from '../../GlobalStyle'
import { 
    MobileIcon, 
    Nav,
    NavbarContainer,
    NavIcon,
    NavIconHome,
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks,
    UserLogo,
    UserIcon,
    NavBtnLink,
    NavItemBtn,
    NavIconWatchlist,
    NavIconPositions,
    NavIconOrders,
    NavIconAlerts,
    NavIconExpertAdvice
 } from "./Navbar.styles";


const Navbar = () => {
    const [click,setclick]=useState(false)
    const [button,setButton]=useState(true)

    const handleClick=()=>setclick(!click)

    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(()=>{
        showButton()
    },[])

    window.addEventListener('resize',showButton);
    
        return (
            <div>
                <IconContext.Provider value={{color:'#fff'}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon/>Social Trading
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>{click?<FaTimes/>:<FaBars/>}</MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/'><NavIconExpertAdvice/>Expert Advice</NavLinks>
                            </NavItem>
                    
                            <NavItem>
                                <NavLinks to='/home'><NavIconHome/>Home</NavLinks>
                            </NavItem>
                    
                            <NavItem>
                                <NavLinks to='/watchlist'><NavIconWatchlist/>Watchlist</NavLinks>
                            </NavItem>
                        
                            <NavItem>
                                <NavLinks to='/positions'><NavIconPositions/>Positions</NavLinks>
                            </NavItem>
                        
                            <NavItem>
                                <NavLinks to='/orders'><NavIconOrders/>Orders</NavLinks>
                            </NavItem>
                        
                            <NavItem>
                                <NavLinks to='/alerts'><NavIconAlerts/>Alerts</NavLinks>
                            </NavItem>
                    
                            {/* <NavItem>
                                <NavLinks to='/user'><UserLogo to="/"><UserIcon/></UserLogo></NavLinks>
                            </NavItem> */}
                            <NavItemBtn>
                                {button?(
                                    <NavBtnLink to="/sign-up">
                                        <Button primary><UserIcon/>SIGN UP</Button>
                                    </NavBtnLink>
                                ):(
                                    <NavBtnLink to="/sign-up">
                                        <Button fontBig primary>
                                            SIGN UP
                                        </Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
                </IconContext.Provider>
            </div>
        )
    }    
    export default Navbar;
    
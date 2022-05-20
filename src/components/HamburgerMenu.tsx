import React from "react";

import styled from "styled-components";

export type Props = {
    open: boolean;
    setOpen: (v: boolean) => void;
}

const HamburgerMenu = (props: Props) => {
    return (
        <StyledHamburger
            className="hamburger-menu"
            open={props.open}
            onClick={() => props.setOpen(!props.open)
            }
        >
        <Line open={props.open}/>
        <Line open={props.open}/>
        <Line open={props.open}/>
        </StyledHamburger>
    )
}

export default HamburgerMenu;

const StyledHamburger = styled.div<{ open: boolean }>`
position:fixed;
left:1.5vw;
top:1vw;
width:2rem;
height:2rem;
padding:0;

display:flex;
flex-direction:column;
justify-content:space-around;
border:none;
cursor:pointer;
outline:none;
z-index:1;
background:none;
left:${({ open }) => open ? "0.5vw" : "0.5vw"}
`


const Line = styled.div<{ open: boolean }>`
position:relative;
    width:2rem;
    height:0.25rem;
    border-radius:10px;
    background-color:black;
    transition:all 0.3s linear;
    transform-origin: 1px;

    :first-child{
        transform:${({ open }) => open ? "rotate(45deg)" : "rotate(0)"};
    }
    :nth-child(2){
        opacity:${({ open }) => open ? "0" : "1"};
        transform:${({ open }) => open ? "translateX(20px)" : "translateX(0)"};
    }
    :nth-child(3){
        transform:${({ open }) => open ? "rotate(-45deg)" : "rotate(0)"};
    }
}
`
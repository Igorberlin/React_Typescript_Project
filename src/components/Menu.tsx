import React, { RefObject, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import HamburgerMenu from "./HamburgerMenu"
import { NavLink } from "react-router-dom";

const useOnClickOutside = (ref: RefObject<HTMLDivElement>, closeMenu: () => void) => {
    useEffect(() => {
        const listener = (event: MouseEvent) => {
            if (ref.current && event.target && ref.current.contains(event.target as Node)) {
                return;
            }
            closeMenu();
        }
        document.addEventListener("mousedown", listener);
        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [ref, closeMenu]);
}


const Menu:React.FC= () => {
    
    const [open, setOpen] = useState<boolean>(false)
    const close = () => setOpen(false)
    const node = useRef<HTMLDivElement>(null);
    useOnClickOutside(node, () => setOpen(false));

    return (
        <div ref={node}>
            <StyledMenu className="menu" open={open}>
                <StyledLink onClick={()=>close()}><NavLink to="/React_Typescript_Project">Home</NavLink></StyledLink>
                <StyledLink onClick={()=>close()}><NavLink to="/todoList">Todo List</NavLink></StyledLink>
                <StyledLink onClick={()=>close()}><NavLink to="/about">Info</NavLink></StyledLink>
            </StyledMenu>
            <HamburgerMenu open={open} setOpen={ setOpen}/>
        </div>
    )
}

export default Menu;
const StyledMenu = styled.nav<{ open: boolean }>`
top:0;
left:0;
height:100vh;
width:10vw;
position:fixed;
background-color:purple;
z-index:1;
padding:4rem 0;
flex-direction:column;
display: ${({ open }) => (open ? "flex" : "none")};
transition: transform 0.3s ease-in-out;
transform: ${({ open }) =>
    (open ? "translateX(0)" :"translateX(-150%)")};
`
const StyledLink = styled.div`
padding: 0 0.8rem;
font-size:1.5rem;
color:white;
text-decoration:none;
`
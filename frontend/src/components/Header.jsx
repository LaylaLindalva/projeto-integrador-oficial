import React from "react";
import { ContainerBusca, ContainerNav, Input, Nav } from "../style/Header.js";
import { Link } from 'react-router-dom'


const Header = () => {
    return(
        <>
        <Nav>
            <ContainerNav>
              <Link className="link">HOME</Link> 
              <Link className="link">PÁGINA DO COLABORADOR</Link> 
              <Link className="link">RELATÓRIO DE BUSCA</Link>
            </ContainerNav>
            <ContainerBusca>
             <Input type="text"/>
            </ContainerBusca>
        </Nav>
        </>
    )
}

export default Header;
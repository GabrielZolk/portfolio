import React from 'react'
import avatar from "../../imgs/avatar.png"
import { NavbarStyle } from './Navbar.style'
import {NavLink} from 'react-router-dom';
import { Affix } from 'antd';

export default function Navbar() {


    return (
        <NavbarStyle>
            <Affix offsetTop={0}>
                <div className='sidebar'>
                    <img src={avatar} alt="avatar photo" />
                    <nav className='nav-container'>
                        <ul>
                        <li><NavLink to="/" className="nav-item">INFOS</NavLink></li>
                            <li><NavLink to="/about" className="nav-item">SOBRE MIM</NavLink></li>
                            <li><NavLink to="/resume" className="nav-item">CURRÍCULO</NavLink></li>
                            <li><NavLink to="/projects" className="nav-item">PROJETOS</NavLink></li>
                            <li><NavLink to="/github" className="nav-item">GITHUB</NavLink></li>
                            <li><NavLink to="/contact" className="nav-item">CONTATO</NavLink></li>
                        </ul>
                    </nav>        
                    <footer>
                        <span>@2022 Portfolio - Todos direitos reservados</span>
                    </footer>
                </div>
                </Affix>
        </NavbarStyle>
    )
}

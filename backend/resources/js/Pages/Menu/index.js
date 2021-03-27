import React, {useEffect, useState} from 'react';
import {InertiaLink, usePage} from "@inertiajs/inertia-react";

const Menu = (props) => {

    const {logo, prefix, logout} = usePage().props

    useEffect(()=> {
        document.title = `${props.title}`
    },[props.title])
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div className="top-nav"></div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-logo" style={{margin: '-18px 0'}}>
                    <a className="navbar-brand">
                        <img src={logo} alt="logo"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label={props.aria}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse logout" id="navbarSupportedContent">

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <a id="navbarDropdown" className="nav-link dropdown-toggle" href="#" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {props.user} <span className="caret"></span>
                                </a>

                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item"
                                       href={props.rotaLogout}
                                       onClick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {logout}
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        <div style={{background : '#cccccc', display:'flex', height:'65px'}} className="shadow-sm">
            <nav className="header navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <ul className='navbar-nav mr-auto'>
                        <li>
                            <a className="menu-link nav-link" href="/">Início</a>
                        </li>
                        <li className="nav-item dropdown" data-toogle="dropdown">
                            <a className="menu-link nav-link" href='#'>Produtos</a>
                            <div className='dropdown-menu'>
                                <InertiaLink href={ route('tenant.categorias', prefix)} className='dropdown-item'>
                                    Categorias
                                </InertiaLink>
                                <InertiaLink href={ route('tenant.produtos.index', prefix)} className='dropdown-item' >
                                    Produtos
                                </InertiaLink>
                                <InertiaLink href={ route('tenant.departamentos.index', prefix)} className='dropdown-item' >
                                    Departamentos
                                </InertiaLink>
                                <InertiaLink href={ route('tenant.marcas.index', prefix)} className='dropdown-item' >
                                    Marcas
                                </InertiaLink>
                            </div>
                        </li>
                        <li className="nav-item dropdown" data-toogle="dropdown">
                            <a className="menu-link nav-link" href='#'>Pedidos</a>
                            <div className='dropdown-menu'>
                                <InertiaLink href={ route('tenant.categorias', prefix)} className='dropdown-item'>
                                    Pedidos
                                </InertiaLink>

                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
            <div className="container mt-5">
                <h1 className="mb-lg-12">{props.title}</h1>
                {props.children}
            </div>
        </div>
    );
};

export default Menu

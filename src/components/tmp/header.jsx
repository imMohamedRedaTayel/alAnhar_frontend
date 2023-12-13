import React, { useEffect, useState } from 'react'
import { Link as Scroll } from 'react-scroll';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ActiveLink from '../activeLink/activeLink';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';


const Header = () => {

    const { t } = useTranslation("home");

    const router = useRouter();
    const { locale, push, pathname, asPath } = useRouter();

    const [menu, setMenu] = useState(false);
    const handleChangeLanguage = (lang) => {
        console.log(lang);
        push(pathname, asPath, { locale: lang });
    };


    useEffect(() => {
        if (locale === "ar") {
            document.querySelector("body").classList.add("rtl");
        } else {
            document.querySelector("body").classList.remove("rtl");
        }
    }, [locale]);


    return <>
        <header className='main_header fixed-top  ' >
            <div className="container">
                <div className="header_upper">
                    <Navbar expand="lg" >
                        <Scroll smooth to="hero" className='navbar-brand' >
                            <img src="/Image/header/logo.webp" alt="logo" />
                            <h6> {t("header.title")} </h6>
                        </Scroll>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <ActiveLink href='/'> {t("header.home")} </ActiveLink>
                                <ActiveLink href='/aboutus'> {t("header.aboutUs")} </ActiveLink>
                                <ActiveLink href='/services' >{t("header.services")} </ActiveLink>
                                <ActiveLink href='/products' >{t("header.products")}</ActiveLink>
                                <ActiveLink href='/contact'> {t("header.contactUs")} </ActiveLink>
                            </Nav>
                            <NavDropdown title={ t('header.languages') } id="basic-nav-dropdown">
                                <NavDropdown.Item >
                                    {locale === "ar" ? "ar" : "en"}
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={() =>
                                            handleChangeLanguage(`${locale === "ar" ? "en" : "ar"}`)
                                        } >
                                        {locale === "ar" ? "en" : "ar"}
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </header>
    </>
}

export default Header
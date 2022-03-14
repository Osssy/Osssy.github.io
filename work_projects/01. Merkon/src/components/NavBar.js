import React, {Component} from 'react';

class NavBar extends Component{
    render(){
        return(
            <div>
                {/*====================  header area ====================*/}
                <div className="header-area header-sticky header-sticky--default">
                    <div className="header-area__desktop header-area__desktop--default">
                    {/*=======  header info area  =======*/}
                    <div className="header-info-area">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                <div className="header-info-wrapper align-items-center">
                                    {/* logo */}
                                    <div className="logo">
                                    <a href={`${process.env.PUBLIC_URL}/home`}>
                                        <img src="../../../assets/img/logo/merkon.png" className="img-fluid" alt="Logo" />
                                    </a>
                                    </div>
                                    {/* header contact info */}
                                    <div className="header-contact-info">
                                    <div className="header-info-single-item">
                                        <div className="header-info-single-item__icon">
                                        <i className="zmdi zmdi-smartphone-android" />
                                        </div>
                                        <div className="header-info-single-item__content">
                                        <h6 className="header-info-single-item__title">Телефон</h6>
                                        <p className="header-info-single-item__subtitle">+1(111)111-11-11</p>
                                        </div>
                                    </div>
                                    <div className="header-info-single-item">
                                        <div className="header-info-single-item__icon">
                                        <i className="zmdi zmdi-home" />
                                        </div>
                                        <div className="header-info-single-item__content">
                                        <h6 className="header-info-single-item__title">Адрес</h6>
                                        <p className="header-info-single-item__subtitle">111111, г.Москва, ул.Малиновая, д.10, к.1, э.1, пом.1, к.1, оф.11</p>
                                        </div>
                                    </div>
                                    </div>
                                    {/* mobile menu */}
                                    <div className="mobile-navigation-icon" id="mobile-menu-trigger">
                                        <i />
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                    </div>
                    {/*=======  End of header info area =======*/}
                    {/*=======  header navigation area  =======*/}
                    <div className="header-navigation-area default-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* header navigation */}
                                    <div className="header-navigation header-navigation--header-default position-relative">
                                        <div className="header-navigation__nav position-static">
                                        <nav>
                                            <ul>
                                            <li><a href={`${process.env.PUBLIC_URL}/home`}>ГЛАВНАЯ</a></li>
                                            <li><a href={`${process.env.PUBLIC_URL}/about-us`}>О НАС</a></li>
                                            <li><a href={`${process.env.PUBLIC_URL}/productions`}>ПРОДУКЦИЯ</a></li>
                                            <li><a href={`${process.env.PUBLIC_URL}/contact-us`}>КОНТАКТЫ</a> </li>
                                            </ul>
                                        </nav>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    {/*=======  End of header navigation area =======*/}
                    </div>
                </div>
                {/*====================  End of header area  ====================*/}
            </div>
        )
    }
}


export default NavBar;
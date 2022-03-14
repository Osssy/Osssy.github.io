import React, {Component} from 'react';


class MobileMenu extends Component{
    render(){
        return(
            <div>
                {/*=======  offcanvas mobile menu  =======*/}
                <div className="offcanvas-mobile-menu" id="mobile-menu-overlay">
                    <a href="#/" className="offcanvas-menu-close" id="mobile-menu-close-trigger">
                        <i className="ion-android-close" />
                    </a>
                    <div className="offcanvas-wrapper">
                        <div className="offcanvas-inner-content">
                        <div className="offcanvas-mobile-search-area">
                            <form action="#">
                            <input type="search" placeholder="Поиск ..." />
                            <button type="submit"><i className="fa fa-search" /></button>
                            </form>
                        </div>
                        <nav className="offcanvas-navigation">
                            <ul>
                            <li><a href={`${process.env.PUBLIC_URL}/home`}>ГЛАВНАЯ</a></li>
                            <li><a href={`${process.env.PUBLIC_URL}/about-us`}>О НАС</a></li>
                            <li><a href={`${process.env.PUBLIC_URL}/productions`}>ТОВАРЫ</a></li>
                            <li><a href={`${process.env.PUBLIC_URL}/contact-us`}>КОНТАКТЫ</a> </li>
                            </ul>
                        </nav>
                        <div className="offcanvas-widget-area">
                            <div className="off-canvas-contact-widget">
                            <div className="header-contact-info">
                                <ul className="header-contact-info__list">
                                <li><i className="ion-android-phone-portrait" /> <a href="tel:11111111111">1(111)111-11-11</a></li>
                                <li><i className="ion-android-mail" /> <a href="mailto:stroy.market@yandex.kz">stroy.market@yandex.kz</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/*=======  End of offcanvas mobile menu  =======*/}

            </div>
        )
    }
}

export default MobileMenu;
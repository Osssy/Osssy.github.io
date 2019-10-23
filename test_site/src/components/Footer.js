import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <div>
                {/*====================  footer area ====================*/}
                <div className="footer-area dark-bg">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-content-wrapper section-space--inner--100">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-12 d-md-flex d-sm-flex justify-content-center">
                                {/* footer intro wrapper */}
                                <div className="footer-intro-wrapper">
                                    <div className="footer-logo">
                                    <a href={`${process.env.PUBLIC_URL}/home`}>
                                        <img src="../../../assets/img/logo/merkon-white.png" className="img-fluid" alt="" />
                                    </a>
                                    </div>
                                    <div className="footer-desc text-md-center text-sm-center">
                                    Меркон — оптовая продажа лесоматериалов, стройматериалов и санитарно-технического оборудования
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-3 offset-xl-1 offset-lg-1 col-lg-3 col-md-6 text-sm-center">
                                {/* footer widget */}
                                <div className="footer-widget">
                                    <h4 className="footer-widget__title">НАВИГАЦИЯ</h4>
                                    <ul className="footer-widget__navigation">
                                    <li><a href={`${process.env.PUBLIC_URL}/home`}>ГЛАВНАЯ</a></li>
                                    <li><a href={`${process.env.PUBLIC_URL}/about-us`}>О НАС</a></li>
                                    <li><a href={`${process.env.PUBLIC_URL}/productions`}>ПРОДУКЦИЯ</a></li>
                                    <li><a href={`${process.env.PUBLIC_URL}/contact-us`}>КОНТАКТЫ</a></li>
                                    </ul>
                                </div>
                                </div>                                
                                <div className="col-xl-5 col-lg-5 col-md-6 text-sm-center">
                                {/* footer widget */}
                                <div className="footer-widget mb-0">
                                    <h4 className="footer-widget__title">КОНТАКТЫ</h4>
                                    <div className="footer-widget__content">
                                    <p className="address">107113, г.Москва, ул.Маленковская, д.14, к.3, э.1, пом.4, к.3, оф.99</p>
                                    <ul className="contact-details">
                                        <li><span>Телефон:</span>+7(985)624-28-52</li>
                                        <li><span>Электронная почта:</span>merkon-77@mail.ru</li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                        <div className="footer-copyright-wrapper">
                        <div className="footer-copyright text-center">
                    © 2019. МЕРКОН. Все права защищены
                        </div>
                    </div>
                </div>
                {/*====================  End of footer area  ====================*/}
                {/*====================  scroll top ====================*/}
                <button className="scroll-top" id="scroll-top">
                    <i className="ion-android-arrow-up" />
                </button>
                {/*====================  End of scroll top  ====================*/}
            </div>
        )
    }
}


export default Footer;
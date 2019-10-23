import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';

class Contact extends Component{
    render(){
        return(
            <div>
                {/* Navigation bar */}
                <NavBar/>

                {/* breadcrumb */}
                {/*====================  breadcrumb area ====================*/}
                <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-banner text-center">
                                    <h1>КОНТАКТЫ</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">ГЛАВНАЯ</a></li>
                                        <li>КОНТАКТЫ</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}

                {/*====================  content page content ====================*/}
                <div className="page-wrapper section-space--inner--120">
                {/*Contact section start*/}
                <div className="conact-section">
                    <div className="container">
                    <div className="row section-space--bottom--50">
                        <div className="col">
                            <div className="contact-map">
                            <iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.203454190582!2d37.67038351549042!3d55.78970499661331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5359ae4916b3f%3A0x2342be3807bb48a0!2z0JzQsNC70LXQvdC60L7QstGB0LrQsNGPINGD0LsuLCAxNCDQutC-0YDQv9GD0YEgMywg0JzQvtGB0LrQstCwLCAxMDcxMTM!5e0!3m2!1sru!2sru!4v1571741587243!5m2!1sru!2sru" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-12">
                        <div className="contact-information">
                            <h3>Контактная информация</h3>
                            <ul>
                                <li class="d-flex align-items-center">
                                    <span className="icon"><i className="ion-android-map" /></span>
                                    <span className="text"><span>107113, г.Москва, ул.Маленковская, д.14, к.3, э.1, пом.4, к.3, оф.99</span></span>
                                </li>
                                <li class="d-flex align-items-center">
                                    <span className="icon"><i className="ion-ios-telephone-outline" /></span>
                                    <span className="text"><a href="tel:1234567890">+7(985)624-28-52</a></span>
                                </li>
                                <li class="d-flex align-items-center">
                                    <span className="icon"><i className="ion-ios-email-outline" /></span>
                                    <span className="text"><a href="mailto:info@example.com">merkon-77@mail.ru</a></span>
                                </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-8 col-12">
                        <div className="contact-form">
                            <h3>Оставьте свое сообщение</h3>
                            <form id="contact-form" action="https://formspree.io/oleksandr.kryzhanivskyi90@gmail.com" method="POST">
                            <div className="row row-10">
                                <div className="col-md-6 col-12 section-space--bottom--20"><input name="con_name" type="text" placeholder="Ваше имя" /></div>
                                <div className="col-md-6 col-12 section-space--bottom--20"><input name="con_email" type="email" placeholder="Ваша почта" /></div>
                                <div className="col-12"><textarea name="con_message" placeholder="Ваше сообщение" defaultValue={""} /></div>
                                <div className="col-12"><button>ОТПРАВИТЬ ПИСЬМО</button></div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/*Contact section end*/}
                </div>
                {/*====================  End of content page content  ====================*/}
                
                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}


export default Contact;
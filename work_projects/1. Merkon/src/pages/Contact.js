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
                            <iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d479.0361427167248!2d37.62392984792654!3d55.74071853583765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afe0fd7ff61%3A0x41be3966d7932816!2z0JHQvtC70YzRiNC-0Lkg0KLQvtC70LzQsNGH0LXQstGB0LrQuNC5INC_0LXRgC4sIDQvNdCQINGB0YLRgNC-0LXQvdC40LUgNCwg0JzQvtGB0LrQstCwLCAxMTkwMTc!5e0!3m2!1sru!2sru!4v1645446613455!5m2!1sru!2sru" allowfullscreen></iframe>
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
                                    <span className="text"><span>111111, г.Москва, ул.Малиновая, д.10, к.1, э.1, пом.1, к.1, оф.11</span></span>
                                </li>
                                <li class="d-flex align-items-center">
                                    <span className="icon"><i className="ion-ios-telephone-outline" /></span>
                                    <span className="text"><a href="tel:+11111111111">+1(111)111-11-11</a></span>
                                </li>
                                <li class="d-flex align-items-center">
                                    <span className="icon"><i className="ion-ios-email-outline" /></span>
                                    <span className="text"><a href="mailto:merkon@mail.ru">merkon@mail.ru</a></span>
                                </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-8 col-12">
                        <div className="contact-form">
                            <h3>Оставьте свое сообщение</h3>
                            <form id="contact-form" action="https://formspree.io/merkon@mail.ru" method="POST">
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
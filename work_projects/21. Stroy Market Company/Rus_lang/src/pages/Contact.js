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
                            <div className="contact-map" id="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5151.337092696481!2d73.08417840596469!3d49.79229774422557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424347ee606c5797%3A0xb574d1c5609a882c!2z0JXRgNC80LXQutC-0LLQsCA2Mg!5e0!3m2!1sru!2sru!4v1645891672855!5m2!1sru!2sru"></iframe>
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
                                    <span className="text"><a href="#map">111111, Казахстан, г. Алматы, <br></br>проспект Космонавтов 11, офис 111</a></span>
                                </li>
                                <li class="d-flex align-items-center">
                                    <span className="icon"><i className="ion-ios-telephone-outline" /></span>
                                    <span className="text"><a href="tel:11111111111">+1(111)111-11-11</a></span>
                                </li>
                                <li class="d-flex align-items-center">
                                    <span className="icon"><i className="ion-ios-email-outline" /></span>
                                    <span className="text"><a href="mailto:stroy.market@yandex.kz">stroy.market@yandex.kz</a></span>
                                </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-8 col-12">
                        <div className="contact-form">
                            <h3>Оставьте сообщение</h3>
                            <form id="contact-form" action="https://formspree.io/stroy.market@yandex.kz" method="POST">
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
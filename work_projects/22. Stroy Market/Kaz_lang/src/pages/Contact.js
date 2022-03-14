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
                                    <h1>БАЙЛАНЫС</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">НЕГІЗГІ</a></li>
                                        <li>БАЙЛАНЫС</li>
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
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10302.63730823875!2d73.0866573!3d49.7924711!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424347ee606c5797%3A0xb574d1c5609a882c!2sYermekova%2062!5e0!3m2!1skk!2sru!4v1645892138879!5m2!1skk!2sru"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-12">
                        <div className="contact-information">
                            <h3>Байланыс ақпараты</h3>
                            <ul>
                                <li class="d-flex align-items-center">
                                    <span className="icon"><i className="ion-android-map" /></span>
                                    <span className="text"><a href="#map">111111, Қазақстан, Алматы, <br></br>Қосмонавт даңғылы, 11 ғимарат</a></span>
                                </li>
                                <li class="d-flex align-items-center">
                                    <span className="icon"><i className="ion-ios-telephone-outline" /></span>
                                    <span className="text"><a href="tel:11111111111">1(111)111-11-11</a></span>
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
                            <h3>Бізге Жазу</h3>
                            <form id="contact-form" action="https://formspree.io/stroy.market@yandex.kz" method="POST">
                            <div className="row row-10">
                                <div className="col-md-6 col-12 section-space--bottom--20"><input name="con_name" type="text" placeholder="Сіздің атыңыз" /></div>
                                <div className="col-md-6 col-12 section-space--bottom--20"><input name="con_email" type="email" placeholder="Сіздің электронды поштаңыз" /></div>
                                <div className="col-12"><textarea name="con_message" placeholder="Сенің хатың" defaultValue={""} /></div>
                                <div className="col-12"><button>ХАБАРЛАМА ЖІБЕРУ</button></div>
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
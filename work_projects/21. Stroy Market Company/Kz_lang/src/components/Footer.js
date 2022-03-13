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
                                        <img src="../../../assets/img/logo/st-mark-footer.png" className="img-fluid" alt="" />
                                    </a>
                                    </div>
                                    <div className="footer-desc text-md-center text-sm-center">
                                    «Строй Маркет Компани» — ағаш, құрылыс материалдары мен санитарлық жабдықтарды көтерме сату
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-3 offset-xl-1 offset-lg-1 col-lg-3 col-md-6 text-sm-center">
                                {/* footer widget */}
                                <div className="footer-widget">
                                    <h4 className="footer-widget__title">НАВИГАТИКА</h4>
                                    <ul className="footer-widget__navigation">
                                    <li><a href={`${process.env.PUBLIC_URL}/home`}>НЕГІЗГІ</a></li>
                                    <li><a href={`${process.env.PUBLIC_URL}/about-us`}>БІЗ ТУРАЛЫ</a></li>
                                    <li><a href={`${process.env.PUBLIC_URL}/productions`}>ТАУАРЛАР</a></li>
                                    <li><a href={`${process.env.PUBLIC_URL}/contact-us`}>БАЙЛАНЫС</a></li>
                                    </ul>
                                </div>
                                </div>                                
                                <div className="col-xl-5 col-lg-5 col-md-6 text-sm-center">
                                {/* footer widget */}
                                <div className="footer-widget mb-0">
                                    <h4 className="footer-widget__title">БАЙЛАНЫС</h4>
                                    <div className="footer-widget__content">
                                    <p className="address"><a href={`${process.env.PUBLIC_URL}/contact-us#map`}>111111, Қазақстан, Алматы, <br></br>Қосмонавт даңғылы, 11 ғимарат</a></p>
                                    <ul className="contact-details">
                                        <li><span>Телефон нөмірі:</span><a href="tel:11111111111">1(111)111-11-11</a></li>
                                        <li><span>Электрондық пошта:</span><a href="mailto:stroy.market@yandex.kz">stroy.market@yandex.kz</a></li>
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
                            © 2019-2020. <a href={`http://st-mark.kz`}>«Строй Маркет Компани»</a>. Барлық құқықтар сақталған
                        </div>
                        <div className="footer-copyright text-center">
                            <a href={`http://st-mark.ru`}>Орысша нұсқасы «Строй Маркет Компани»</a>
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
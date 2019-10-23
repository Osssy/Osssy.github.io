import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import FeatureIcon from '../components/FeatureIcon';
import Funfact from '../components/Funfact';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import ModalVideo from 'react-modal-video'

class About extends Component{

    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
      }
     
      openModal () {
        this.setState({isOpen: true})
      }

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
                                    <h1>О НАС</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">ГЛАВНАЯ</a></li>
                                        <li>О НАС</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}

                <div className="page-wrapper section-space--inner--top--120">
                {/*About section start*/}
                <div className="about-section section-space--inner--bottom--120">
                <div className="container">
                    <div className="row row-25 align-items-center">
                    <div className="col-lg-6 col-12 mb-30">
                        <div className="about-image-two">
                        <img src="assets/img/about/about-3.jpg" alt="" />
                            <span className="video-popup">
                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='6xSd9IpFnOI' onClose={() => this.setState({isOpen: false})} />
                                <button onClick={this.openModal}>
                                    <i className="ion-ios-play-outline" />
                                </button>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 mb-30">
                        <div className="about-content-two">
                        <h1>Выгодное строительство с &laquo;Меркон&raquo;</h1>
                        <h4>Меркон &mdash; российская компания, специализирующаяся на оптовой продаже лесоматериалов, стройматериалов и санитарно-технического оборудования.</h4>
                        <p>Мы &mdash; молодая, интенсивно набирающая обороты компания, которая использует современные методы ведения, построения и улучшения бизнеса.</p>
                        <p>Занимаемся продвижением компании как оффлайн, так и онлайн, так же используем различные рекламные кампании.</p>
                        <p>Активно развиваем сервис и обслуживание клиентов с помощью различных бонусных программ.</p>
                        <p>Приглашаем к сотрудничеству организации и строительные предприятия, заинтересованных частных лиц и индивидуальных предпринимателей.</p>
                        <a href="productions" className="ht-btn--default ht-btn--default--dark-hover section-space--top--20">ПРОДУКЦИЯ</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*About section end*/}

                {/* Fun fact */}
                <Funfact/>

                {/*About section start*/}
                <div className="about-section section-space--inner--120">
                <div className="container">
                    <div className="about-wrapper row">
                    <div className="col-sm-6 col-12 order-1 order-lg-2">
                        <div className="about-image about-image-1">
                        <img src="assets/img/about/about-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-12 order-2 order-lg-3">
                        <div className="about-image about-image-2">
                        <img src="assets/img/about/about-2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 order-3 order-lg-1">
                        <div className="about-content about-content-1">
                        <h1>Нам доверяют</h1>
                        <p>Для нас нет препятствий в решении задач, связанных с подбором строительных материалов. Каждый клиент, обратившийся к нам, получит гарантированно сервис высокого уровня, альтернативные предложения по выбору различных товаров, бесплатную консультацию, а так же индивидуальный подход в зависимости от разных ситуаций.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 order-4">
                        <div className="about-content about-content-2">
                        <h1>Наши преимущества:</h1>
                        <ol>
                            <li>Низкие и гибкие цены</li>
                            <li>Высокое качество товаров и продукции</li>
                            <li>Широкий ассортимент товаров и услуг</li>
                            <li>Лояльное отношение к клиенту</li>
                            <li>Консультация клиентов по любому интересующему их вопросу</li>
                            <li>Постоянное расширение компании</li>
                            <li>Оптимизация качества обслуживания</li>
                        </ol>
                        <a href={`${process.env.PUBLIC_URL}/contact-us`} className="ht-btn--default ht-btn--default--dark-hover section-space--top--20">СВЯЗАТЬСЯ</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*About section end*/}

                {/* Feature Icon */}
                <FeatureIcon background = "grey-bg"/>

                </div>

                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}


export default About;
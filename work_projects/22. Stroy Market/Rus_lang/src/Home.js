import React, {Component} from 'react';
import NavBar from './components/NavBar';
import HeroSlider from './components/HeroSlider';
import VideoCta from './components/VideoCta';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import ModalVideo from 'react-modal-video'

class Home extends Component{

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

        let data = [
            {pageLink: '#nowhere', img: '585_640.jpg', serviceTitle: 'Природные каменные материалы', serviceSubtitle: 'Горные породы, подвергнутые механической обработке (облицовочные плиты, стеновые камни, щебень, гравий, бутовый камень и др.).'},
            {pageLink: '#nowhere', img: 'pogonaz.jpg', serviceTitle: 'Лесные материалы и изделия', serviceSubtitle: 'Строительные материалы, получаемые главным образом механической обработкой древесины (круглый лес, пиломатериалы и заготовки, паркет, фанера и др.).'},
            {pageLink: '#nowhere', img: 'keramicheskie-materiali.jpg', serviceTitle: 'Керамические материалы и изделия', serviceSubtitle: 'Изготовляют из глиносодержащего сырья посредством его формования, сушки и обжига.'},
            {pageLink: '#nowhere', img: '92b4a5431391960735.jpg', serviceTitle: 'Неорганические вяжущие вещества', serviceSubtitle: 'Преимущественно порошкообразные материалы (цементы различных видов, гипс, известь и др.), образующие при смешении с водой пластичное тесто, приобретающее затем камневидное состояние.'},
            {pageLink: '#nowhere', img: 'smesi2-0_143065649554.jpg', serviceTitle: 'Бетоны и растворы', serviceSubtitle: 'Искусственные каменные материалы с широким диапазоном физико-механических и химических свойств, получаемые из смеси вяжущего вещества, воды и заполнителей.'},
            {pageLink: '#nowhere', img: 'metal-armatura.jpg', serviceTitle: 'Металлы', serviceSubtitle: 'В строительстве применяют в основном стальной прокат. Сталь используют для изготовления арматуры в железобетоне, каркасов зданий, пролётных строений мостов, трубопроводов, отопительных приборов, как кровельный материал (кровельная сталь) и т.д.'},
            {pageLink: '#nowhere', img: '2_19.jpg', serviceTitle: 'Теплоизоляционные материалы', serviceSubtitle: 'Cтроительные материалы, применяемые для теплоизоляции ограждающих конструкций зданий, сооружений, промышленного оборудования, трубопроводов.'},
            {pageLink: '#nowhere', img: 'tripleks-prozrachnoe-steklo.png', serviceTitle: 'Стекло', serviceSubtitle: 'Применяется главным образом для устройства светопрозрачных ограждений. Наряду с обычным листовым стеклом выпускаются стекло специального назначения (армированное, закалённое, теплозащитное и др.) и стеклянные изделия (стеклоблоки, стеклопрофилит, стеклянные облицовочные плитки и др.).'},
            {pageLink: '#nowhere', img: '360743_1.jpg', serviceTitle: 'Органические вяжущие вещества и гидроизоляционные материалы', serviceSubtitle: 'Битумы, дёгти и получаемые на их основе асфальтобетон, рубероид, толь и др. материалы; к этой группе строительных материалов относятся также полимерные вяжущие, используемые для получения полимербетонов.'},
            {pageLink: '#nowhere', img: '0411ww-62-720x426.jpg', serviceTitle: 'Полимерные строительные материалы', serviceSubtitle: 'Большая группа материалов, получаемых на основе синтетических полимеров.'},
            {pageLink: '#nowhere', img: 'kak-sdelat-kolerovku-kraski.jpg', serviceTitle: 'Лаки и краски', serviceSubtitle: 'отделочные строительные материалы на органических и неорганических связующих, образующие на поверхности окрашиваемой конструкции декоративное и защитное покрытия.'}
        ];

        let Datalist = data.map((val, i) => {
            return(
                <div className="col-lg-4 col-md-6 col-12 section-space--bottom--30" key={i}>
                    <div className="service-grid-item">
                    <div className="service-grid-item__image">
                        <div className="service-grid-item__image-wrapper">
                        <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>
                            <img src={`assets/img/service/${val.img}`} className="img-fluid" alt="Service Grid" />
                        </a>
                        </div>
                    </div>
                    <div className="service-grid-item__content">
                        <h3 className="title">
                        <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>{val.serviceTitle}</a>
                        </h3>
                        <p className="subtitle">{val.serviceSubtitle}</p>
                    </div>
                    </div>
                </div>
            )
        });
        
        return(
            <div>
                
                {/* Navigation bar */}
                <NavBar/>
                
                {/* Hero slider */}
                <HeroSlider/>

                <div className="page-wrapper section-space--inner--top--120">
                {/*About section start*/}
                <div className="about-section section-space--inner--bottom--120">
                <div className="container">
                    <div className="row row-25 align-items-center">
                    <div className="col-lg-6 col-12 mb-30">
                        <div className="about-image-two">
                        <img src="assets/img/about/about1.png" alt="" />
                            <span className="video-popup">
                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='Iz5dSf8FPno' onClose={() => this.setState({isOpen: false})} />
                                <button onClick={this.openModal}>
                                    <i className="ion-ios-play-outline" />
                                </button>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 mb-30">
                        <div className="about-content-two">
                        <h2 className="section-space--bottom--30">Строительные материалы</h2>
                        <p className="video-cta-content__text">Строительные материалы, природные и искусственные материалы и изделия, используемые при строительстве и ремонте зданий и сооружений.</p>
                        <p className="video-cta-content__text">По совокупности технологических и эксплуатационных признаков строительные материалы принято подразделять на следующие основные группы.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*About section end*/}
                </div>

                {/*====================  service page content ====================*/}
                <div className="page-wrapper section-space--inner--bottom--120">
                {/*Service section start*/}
                <div className="service-section">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="service-item-wrapper">
                            <div className="row">
                                {Datalist}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/*Service section end*/}
                </div>

                {/*====================  End of service page content  ====================*/}

                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}


export default Home;
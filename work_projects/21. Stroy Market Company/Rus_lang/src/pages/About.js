import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import FeatureIcon from '../components/FeatureIcon';
import Funfact from '../components/Funfact';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import ModalVideo from 'react-modal-video';
import VideoCta from '../components/VideoCta';

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



        let data = [
            {pageLink: '#nowhere', img: 'project-1.jpg', projectTitle: 'Низкие и гибкие цены', projectSubtitle: ''},
            {pageLink: '#nowhere', img: 'project-2.jpg', projectTitle: 'Широкий ассортимент товаров и услуг', projectSubtitle: ''},
            {pageLink: '#nowhere', img: 'project-4.jpg', projectTitle: 'Высокое качество товаров и продукции', projectSubtitle: ''},
            {pageLink: '#nowhere', img: 'project-5.jpg', projectTitle: 'Консультация клиентов по любому интересующему их вопросу', projectSubtitle: ''},
            {pageLink: '#nowhere', img: 'project-6.jpg', projectTitle: 'Лояльное отношение к клиенту', projectSubtitle: ''},
            {pageLink: '#nowhere', img: 'project-7.jpg', projectTitle: 'Оптимизация качества обслуживания', projectSubtitle: ''},
            {pageLink: '#nowhere', img: 'project-8.jpg', projectTitle: 'Постоянное расширение компании', projectSubtitle: ''}
        ];

        let Datalist = data.map((val, i)=> {
            return(
                <div className="col-lg-4 col-sm-6 col-12 section-space--bottom--30" key={i}>
                    <div className="service-grid-item service-grid-item--style2">
                    <div className="service-grid-item__image">
                        <div className="service-grid-item__image-wrapper">
                        <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>
                            <img src={`assets/img/projects/${val.img}`} className="img-fluid" alt="" />
                        </a>
                        </div>
                    </div>
                    <div className="service-grid-item__content">
                        <h3 className="title">
                        <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>{val.projectTitle}</a>
                        </h3>
                        <p className="subtitle">{val.projectSubtitle}</p>
                    </div>
                    </div>
                </div>
            )
        });



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

                {/* Video CTA */}
                <VideoCta/>
                

                {/* Fun fact */}
                <Funfact/>


                {/*====================  project page content ====================*/}
                <div className="page-wrapper section-space--inner--120">
                    {/*Projects section start*/}
                    <div className="project-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-item-wrapper">
                                        <h2 className="mb-50 text-center section-space--bottom--30">Наши преимущества</h2>
                                        <div className="row mt-60">
                                            {Datalist}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Projects section end*/}
                </div>

                {/*====================  End of project page content  ====================*/}


                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}


export default About;
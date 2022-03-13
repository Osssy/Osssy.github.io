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
            {pageLink: '#nowhere', img: 'project-1.jpg', projectTitle: 'Төмен және икемді бағалар', projectSubtitle: ''},
            {pageLink: '#nowhere', img: 'project-2.jpg', projectTitle: 'Тауарлар мен қызметтердің кең спектрі', projectSubtitle: ''},
            {pageLink: '#nowhere', img: 'project-4.jpg', projectTitle: 'Жоғары сапалы тауарлар мен өнімдер', projectSubtitle: ''},
            {pageLink: '#nowhere', img: 'project-5.jpg', projectTitle: 'Өздерін қызықтыратын кез келген мәселе бойынша тұтынушыларға кеңес беру', projectSubtitle: ''},
            {pageLink: '#nowhere', img: 'project-6.jpg', projectTitle: 'Клиенттердің адалдығы', projectSubtitle: ''},
            {pageLink: '#nowhere', img: 'project-7.jpg', projectTitle: 'Қызмет сапасын оңтайландыру', projectSubtitle: ''},
            {pageLink: '#nowhere', img: 'project-8.jpg', projectTitle: 'Компанияның үздіксіз кеңеюі', projectSubtitle: ''}
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
                                    <h1>БІЗ ТУРАЛЫ</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">НЕГІЗГІ</a></li>
                                        <li>БІЗ ТУРАЛЫ</li>
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
                                        <h2 className="mb-50 text-center section-space--bottom--30">Біздің артықшылығымыз</h2>
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
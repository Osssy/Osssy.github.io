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
            {pageLink: '#nowhere', img: '585_640.jpg', serviceTitle: 'Табиғи тастан жасалған материалдар', serviceSubtitle: 'Өңделген жыныстар (қапталған тақталар, қабырға тастар, қиыршықтас, қиыршықтас, қоқыс тас және т.б.).'},
            {pageLink: '#nowhere', img: 'pogonaz.jpg', serviceTitle: 'Орман материалдары мен бұйымдары', serviceSubtitle: 'Негізінен ағашты механикалық өңдеу арқылы алынған құрылыс материалдары (дөңгелек ағаш, сүрек және көрпе, паркет, фанера және т.б.).'},
            {pageLink: '#nowhere', img: 'keramicheskie-materiali.jpg', serviceTitle: 'Керамикалық материалдар мен бұйымдар', serviceSubtitle: 'Құрамында балшық бар шикізаттан қалыптау, кептіру және күйдіру арқылы жасалған.'},
            {pageLink: '#nowhere', img: '92b4a5431391960735.jpg', serviceTitle: 'Бейорганикалық байланыстырғыштар', serviceSubtitle: 'Көбінесе ұнтақ материалдар (әр түрлі цементтер, гипс, әк және т.б.), олар сумен араласқан кезде пластиктен жасалған қамыр түзеді, содан кейін ол тас тәрізді күйге ие болады.'},
            {pageLink: '#nowhere', img: 'smesi2-0_143065649554.jpg', serviceTitle: 'Бетон және ерітінді', serviceSubtitle: 'Тұндырғыштың, судың және агрегаттардың қоспасынан алынған физикалық, механикалық және химиялық қасиеттері бар жасанды тастан жасалған материалдар.'},
            {pageLink: '#nowhere', img: 'metal-armatura.jpg', serviceTitle: 'Металдар', serviceSubtitle: 'Құрылыста негізінен илектелген болаттар қолданылады. Болат темірбетонды, ғимараттардың қаңқаларын, көпірлердің аралықтарын, құбырларды, жылыту құрылғыларын, мысалы, шатыр материалы (шатырлы болат) және т.б. өндірісінде қолданылады.'},
            {pageLink: '#nowhere', img: '2_19.jpg', serviceTitle: 'Жылу оқшаулағыш материалдар', serviceSubtitle: 'Ғимараттардың, құрылыстардың, өндірістік жабдықтардың, құбырлардың қабырғаларын жылу оқшаулау үшін қолданылатын құрылыс материалдары.'},
            {pageLink: '#nowhere', img: 'tripleks-prozrachnoe-steklo.png', serviceTitle: 'Шыны', serviceSubtitle: 'Ол негізінен мөлдір қоршаулар салу үшін қолданылады. Кәдімгі табақты шыныдан басқа арнайы мақсаттағы әйнектер (арматураланған, температуралы, жылу қорғайтын және т.б.) және шыныдан жасалған бұйымдар (шыны блоктар, шыны талшықтар, әйнек қаптайтын тақтайшалар және т.б.) шығарылады.'},
            {pageLink: '#nowhere', img: '360743_1.jpg', serviceTitle: 'Органикалық байланыстырғыштар және гидрооқшаулағыш материалдар', serviceSubtitle: 'Битумдар, гранат және асфальтбетон, шатыр материалы, шатыр материалдары және олардың негізінде алынған басқа материалдар; Құрылыс материалдарының бұл тобына полимер бетонын өндіру үшін қолданылатын полимерлік байланыстырғыштар да кіреді.'},
            {pageLink: '#nowhere', img: '0411ww-62-720x426.jpg', serviceTitle: 'Полимерлі құрылыс материалдары', serviceSubtitle: 'Синтетикалық полимерлерге негізделген материалдардың үлкен тобы.'},
            {pageLink: '#nowhere', img: 'kak-sdelat-kolerovku-kraski.jpg', serviceTitle: 'Лактар ​​мен бояулар', serviceSubtitle: 'Боялған құрылым бетіне сәндік және қорғаныс жабындарын құрайтын органикалық және бейорганикалық байланыстырғыш материалдардағы әрлеу материалдары.'}
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
                        <h2 className="section-space--bottom--30">Құрылыс материалдары</h2>
                        <p className="video-cta-content__text">Ғимараттар мен құрылыстарды салу мен жөндеуде қолданылатын құрылыс материалдары, табиғи және жасанды материалдар мен бұйымдар.</p>
                        <p className="video-cta-content__text">Технологиялық және пайдалану ерекшеліктерінің жиынтығына сәйкес құрылыс материалдары әдетте келесі негізгі топтарға бөлінеді.</p>
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
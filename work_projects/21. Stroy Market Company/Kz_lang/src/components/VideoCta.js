import React, { Component } from 'react';
import ModalVideo from 'react-modal-video'

class VideoCta extends Component{

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
                {/*====================  video cta area ====================*/}
                <div className="video-cta-area section-space--inner--120">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-6 col-12 mb-30">
                        <div className="about-content-two">
                            <h1>Пайдалы құрылыс &laquo;Строй Маркет Компани&raquo;</h1>
                            <p>Біз бизнесті жүргізудің, құрудың және жетілдірудің заманауи әдістерін қолданатын, тез дамып келе жатқан компаниямыз.</p>
                            <p>Құрылғаннан бері біз бірнеше маңызды, өнеркәсіптік салаларда бизнесті жоғары тиімді дамыту мүмкіндігін дәлелдедік.</p>
                            <p>Ынтымақтастық ұйымдары мен құрылыс кәсіпорындарын, мүдделі тұлғалар мен жеке кәсіпкерлерді шақырамыз.</p>
                            <a href="productions" className="ht-btn--default ht-btn--default--dark-hover section-space--top--20">ТАУАРЛАР</a>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 col-md-6">
                            <div className="cta-video-image">
                            <div className="video-popup">
                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='6xSd9IpFnOI' onClose={() => this.setState({isOpen: false})} />
                                <button onClick={this.openModal}>
                                    <div className="cta-video-image__image">
                                        <img src="assets/img/backgrounds/video-cta.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className="cta-video-image__icon">
                                        <i className="ion-ios-play" />
                                    </div>
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of video cta area  ====================*/}
            </div>
        )
    }
}


export default VideoCta;
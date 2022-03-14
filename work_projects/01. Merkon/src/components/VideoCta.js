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
                        <div className="row align-items-flex-start">
                        <div className="col-lg-6 col-md-6">
                            <div className="video-cta-content">
                            <h3 className="video-cta-content__title">Строительные материалы. Их виды.</h3>
                            <p className="video-cta-content__text">Строительные материалы, природные и искусственные материалы и изделия, используемые при строительстве и ремонте зданий и сооружений.</p>
                            <p className="video-cta-content__text">По совокупности технологических и эксплуатационных признаков строительные материалы принято подразделять на следующие основные группы.</p>
                            <p className="video-cta-content__text"><strong>Природные каменные материалы</strong> — горные породы, подвергнутые механической обработке (облицовочные плиты, стеновые камни, щебень, гравий, бутовый камень и др.).</p>
                            <p className="video-cta-content__text"><strong>Лесные материалы и изделия</strong> — строительные материалы, получаемые главным образом механической обработкой древесины (круглый лес, пиломатериалы и заготовки, паркет, фанера и др.).</p>
                            <p className="video-cta-content__text"><strong>Керамические материалы и изделия</strong> изготовляют из глиносодержащего сырья посредством его формования, сушки и обжига.</p>
                            <p className="video-cta-content__text"><strong>Неорганические вяжущие вещества</strong> — преимущественно порошкообразные материалы (цементы различных видов, гипс, известь и др.), образующие при смешении с водой пластичное тесто, приобретающее затем камневидное состояние.</p>
                            <p className="video-cta-content__text"><strong>Бетоны и растворы</strong> — искусственные каменные материалы с широким диапазоном физико-механических и химических свойств, получаемые из смеси вяжущего вещества, воды и заполнителей.</p>
                            <p className="video-cta-content__text"><strong>Металлы.</strong> В строительстве применяют в основном стальной прокат. Сталь используют для изготовления арматуры в железобетоне, каркасов зданий, пролётных строений мостов, трубопроводов, отопительных приборов, как кровельный материал (кровельная сталь) и т.д.</p>
                            <p className="video-cta-content__text"><strong>Теплоизоляционные материалы</strong> — строительные материалы, применяемые для теплоизоляции ограждающих конструкций зданий, сооружений, промышленного оборудования, трубопроводов.</p>
                            <p className="video-cta-content__text"><strong>Стекло.</strong> Применяется главным образом для устройства светопрозрачных ограждений. Наряду с обычным листовым стеклом выпускаются стекло специального назначения (армированное, закалённое, теплозащитное и др.) и стеклянные изделия (стеклоблоки, стеклопрофилит, стеклянные облицовочные плитки и др.).</p>
                            <p className="video-cta-content__text"><strong>Органические вяжущие вещества и гидроизоляционные материалы</strong> — битумы, дёгти и получаемые на их основе асфальтобетон, рубероид, толь и др. материалы; к этой группе строительных материалов относятся также полимерные вяжущие, используемые для получения полимербетонов.</p>
                            <p className="video-cta-content__text"><strong>Полимерные строительные материалы</strong> — большая группа материалов, получаемых на основе синтетических полимеров.</p>
                            <p className="video-cta-content__text"><strong>Лаки и краски</strong> — отделочные строительные материалы на органических и неорганических связующих, образующие на поверхности окрашиваемой конструкции декоративное и защитное покрытия.</p>
                            <a href={`${process.env.PUBLIC_URL}/contact-us`} className="ht-btn ht-btn--round">СВЯЗАТЬСЯ</a>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 col-md-6">
                            <div className="cta-video-image">
                            <div className="video-popup">
                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='qBSgtPaSdPg' onClose={() => this.setState({isOpen: false})} />
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
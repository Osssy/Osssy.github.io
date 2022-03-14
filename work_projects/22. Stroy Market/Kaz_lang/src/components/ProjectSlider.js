import React, { Component } from 'react';
import Swiper from 'react-id-swiper';


class ProjectSlider extends Component{

    constructor(props) {
        super(props)
        this.goNext = this.goNext.bind(this)
        this.goPrev = this.goPrev.bind(this)
        this.swiper = null
      }
    
      goNext() {
        if (this.swiper) this.swiper.slideNext()
      }
    
      goPrev() {
        if (this.swiper) this.swiper.slidePrev()
      }
    
      
    render(){

        const params = {
            slidesPerView : 1,
            loop: true,
            speed: 1000,
            spaceBetween: 30
        
        };
        
        let data = [
            {img: 'BM2.jpg', sliderTitle: 'Ағаш', sliderShortDesc: 'Әр дәм мен түске арналған ағаш. Өңделмеген түрінде: бөренелер, ағаштар, тіректер; және өңделген: тақтайшалар, плиталар, арқалықтар, тастар, тақталар.', sliderLink: ''},
            {img: '1486129494_cm1.jpg', sliderTitle: 'Құрылыс материалдары', sliderShortDesc: 'Әр түрлі санаттағы құрылыс материалдары: металл негізінде: профильдер, тақталар, бұрыштар; тастан жасалған материалдар; ерітінділер, бетон; байланыстырғыштар: цемент, асфальт; арнайы құрылыс материалдары: әрлеу, оқшаулағыш, шатыр жабыны.', sliderLink: ''},
            {img: 'thumb_1576072018-c4cb332427.jpeg', sliderTitle: 'Санитарлық жабдықтар', sliderShortDesc: 'Санитарлық жабдықтар, элементтер мен қосалқы бөлшектер. Біз жеткіземіз: су жылытқыштар, ванналар, душ науалары, жуғыштар, раковиналар және басқа да жабдықтар. Сонымен қатар бізде әр түрлі элементтер бар: тістер, шынтақ, қысқыштар, муфталар, адаптерлер, жартылай иілімдер және т.б.', sliderLink: ''},
        ];


        let DataList = data.map((val, i)=>{

            return(
                <div className="swiper-slide latest-project-slider__single-slide" key={i}>
                    <div className="row row-30 align-items-center">
                        <div className="col-lg-6">
                            <div className="image">
                                <img src={`assets/img/projects/${val.img}`} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="content">
                                <h3 className="count">{'0'+(i+1)}</h3>
                                <h2 className="title">{val.sliderTitle}</h2>
                                <p className="desc">{val.sliderShortDesc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });

        return(
            <div>
               {/*====================  project slider area ====================*/}
                <div className="project-slider-area grey-bg section-space--inner--120">
                <div className="container">
                    <div className="row">
                    </div>
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="latest-project-slider">
                            <div className="latest-project-slider__container-area">
                                <Swiper {...params} ref={node => { if (node) this.swiper = node.swiper }}>
                                    {DataList}
                                </Swiper>
                            
                                <button className="ht-swiper-button-prev ht-swiper-button-nav" onClick={this.goPrev}><i className="ion-ios-arrow-left" /></button>
                                <button className="ht-swiper-button-next ht-swiper-button-nav" onClick={this.goNext}><i className="ion-ios-arrow-forward" /></button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/*====================  End of project slider area  ====================*/}
            </div>
        )
    }
}


export default ProjectSlider;
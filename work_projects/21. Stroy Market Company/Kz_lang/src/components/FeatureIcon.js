import React, { Component } from 'react';

class FeatureIcon extends Component{
    render(){

        let data = [
            {featureIcon: "feature-1.png", featureTitle: "Өсіп келе жатқан танымалдылық", featureDescription: "Күн сайын біз тұтынушылар саны артып келеді."},
            {featureIcon: "feature-2.png", featureTitle: "Ең жақсы сапа", featureDescription: "Жоғары сапалы өнімдер мен қызметтер."},
            {featureIcon: "feature-3.png", featureTitle: "Қол жетімді баға", featureDescription: "Біз сізге ең жақсы нарықтық баға мен тапсырыс мөлшеріне негізделген икемді жеңілдік жүйесін ұсынамыз."}
        ];

        let Datalist = data.map((val, i)=>{
            return(
                <div className="col-lg-4 col-md-6 col-12 section-space--bottom--30" key={i}>
                    <div className="feature">
                    <div className="icon">
                        <img src={`assets/img/icons/${val.featureIcon}`} className="img-fluid" alt="" />
                    </div>
                    <div className="content">
                        <h3>{val.featureTitle}</h3>
                        <p>{val.featureDescription}</p>
                    </div>
                    </div>
                </div>
            )
        });

        return(
            <div>
                {/*Feature section start*/}
                <div className={`feature-section section-space--inner--100 ${this.props.background}`}>
                    <div className="container">
                        <div className="col-lg-12">
                            <div className="feature-item-wrapper">
                                <div className="row">
                                    {Datalist}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Feature section end*/}
            </div>
        )
    }
}

export default FeatureIcon;
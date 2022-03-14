import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class ServiceTabExample extends Component{

    render(){
        
        /* service tab menu */
        let serviceTabMenuData = [
            {iconName: 'flaticon-015-cart', tabMenuName: 'Лесоматериалы'},
            {iconName: 'flaticon-002-welding', tabMenuName: 'Стройматериалы'},
            {iconName: 'flaticon-010-tank-1', tabMenuName: 'Санитарно-техническое оборудование'}
        ];

        let serviceTabMenuDatalist = serviceTabMenuData.map((val, i)=>{
            return(
                <Tab key={i}>  <span className="icon"><i className={val.iconName} /></span> <span className="text">{val.tabMenuName}</span></Tab>
            )
        });

        
        /* service tab content */
        
        let serviceTabContentData = [
            {bgUrl: "service-tab1.jpg", contentTitle: 'Лесоматериалы', contentDesc: 'Лесоматериалы на любой вкус и цвет. Имеются как необработанные: бревна, подтоварники, жерди; так и обработанные: пластины, горбыли, брусы, бруски, доски.', serviceLink: 'service-details-left-sidebar'},
            {bgUrl: "service-tab1.jpg", contentTitle: 'Стройматериалы', contentDesc: 'Стройматериалы различных категорий: на основе металла: профили, рейки, уголки; материалы из камня; растворы, бетоны; вяжущие: цемент, асфальт; специальные стройматериалы: отделочные, изоляицонные, кровельные.', serviceLink: 'service-details-left-sidebar'},
            {bgUrl: "service-tab1.jpg", contentTitle: 'Санитарно-техническое оборудование', contentDesc: 'Санитарно-техническое оборудование, элементы и запчасти. Поставляем: водогрейные колонки, ванны, душевые поддоны, умывальники, мойки и другие виды оборудования. Так же имеем в ассортименте различные элементы: тройники, угольники, хомуты, муфты, переходники, полуотводы и т.д.', serviceLink: 'service-details-left-sidebar'}
        ];

        let serviceTabContentDatalist = serviceTabContentData.map((val, i)=>{
            return(
                <TabPanel key={i}>
                    <div className="service-tab__single-content-wrapper" style={{ backgroundImage: `url(assets/img/backgrounds/${val.bgUrl})` }}>
                        <div className="service-tab__single-content">
                            <h3 className="service-tab__title">{val.contentTitle}</h3>
                            <p className="service-tab__text">{val.contentDesc}</p>
                        </div>
                    </div>
                </TabPanel>
            )
        });

        return(
            <div>

                {/*====================  service tab area ====================*/}
                <div className="service-tab-area section-space--bottom--80">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        {/* service tab wrapper */}
                        
                        <div className="service-tab-wrapper">
                        <Tabs>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <TabList>
                                        <div className="service-tab__link-wrapper">
                                            {serviceTabMenuDatalist}
                                        </div>
                                    </TabList>
                                </div>

                                <div className="col-md-8">
                                    {serviceTabContentDatalist}
                                </div>
                            </div>
                        </Tabs>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*====================  End of service tab area  ====================*/}
            </div>
        )
    }
}

export default ServiceTabExample;
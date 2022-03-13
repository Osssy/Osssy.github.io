import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Sidebar from './components/Sidebar';
import ServiceGallery from './components/ServiceGallery';
import ServiceTab from '../components/ServiceTab';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';

class Productions extends Component{
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
                                    <h1>ПРОДУКЦИЯ</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">ГЛАВНАЯ</a></li>
                                        <li>ПРОДУКЦИЯ</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}

                <div className="page-wrapper section-space--inner--120">
                    {/*Service section start*/}
                    <div className="service-section">
                        <div className="container">
                        {/* Service Tab */}
                        <ServiceTab/>
                        <div className="row">
                            <div className="col-lg-8 col-12 order-1 order-lg-2">
                            <div className="service-details">

                                {/* service gallery */}
                                <ServiceGallery/>

                                <div className="content section-space--top--30">
                                <div className="row m-0">

                                    <table className="col-12 mb-5" border="1" bordercolor="#F0542D">
                                      <tbody>
                                        <tr>
                                          <th colspan="3" height="50" className="text-center">Лесоматериалы</th>
                                        </tr>
                                        <tr className="text-center text-white" bgcolor="#F0542D">
                                          <th>№ п/п</th>
                                          <th>Товары</th>
                                          <th>Цена за упаковку, доллар США</th>
                                        </tr>

                                        <tr>
                                          <td className="text-center">1</td>
                                          <td>Брус пустотелый ДПК (50х50х4000)</td>
                                          <td className="text-center">12,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">2</td>
                                          <td>Брус пустотелый ДПК (100x100х4000)</td>
                                          <td className="text-center">43,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">3</td>
                                          <td>Планки декоративные из ДПК (70х10,5х4000)</td>
                                          <td className="text-center">7,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">4</td>
                                          <td>Рейки из ДПК (40х4,6х4000)</td>
                                          <td className="text-center">4,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">5</td>
                                          <td>Уголок из ДПК (40х40х4000)</td>
                                          <td className="text-center">8,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">6</td>
                                          <td>Террасная доска односторонняя ДПК (150х23,5х4000)</td>
                                          <td className="text-center">17,00</td>
                                        </tr>
                                      </tbody>
                                    </table>

                                    <table className="col-12" border="1" bordercolor="#F0542D">
                                      <tbody>
                                        <tr>
                                          <th colspan="3" height="50" className="text-center">Санитарно-техническое оборудование</th>
                                        </tr>
                                        <tr className="text-center text-white" bgcolor="#F0542D">
                                          <th>№ п/п</th>
                                          <th>Товары</th>
                                          <th>Цена за единицу, доллар США</th>
                                        </tr>

                                        <tr>
                                          <td className="text-center">1</td>
                                          <td>Тройник ПЭ 315 эл фузионный</td>
                                          <td className="text-center">480,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">2</td>
                                          <td>Угольник ПЭ 400 электросварной</td>
                                          <td className="text-center">947,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">3</td>
                                          <td>Хомут ПЭ 110х63 электросварной боковой</td>
                                          <td className="text-center">107,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">4</td>
                                          <td>Муфта 400 ПЭ электросварная</td>
                                          <td className="text-center">477,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">5</td>
                                          <td>Муфта 315 ПЭ электросварная</td>
                                          <td className="text-center">195,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">6</td>
                                          <td>Тройник ПЭ 250 стык спайка L490мм, L110мм, L110мм тс-22мм</td>
                                          <td className="text-center">60,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">7</td>
                                          <td>Тройник ПЭ 160 эл фузионный выход стык </td>
                                          <td className="text-center">97,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">8</td>
                                          <td>Угольник ПЭ 110 эл фузионный</td>
                                          <td className="text-center">33,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">9</td>
                                          <td>Полуотвод ПЭ 180 стык спайка  L300мм, L90мм тс-6,4мм  </td>
                                          <td className="text-center">19,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">10</td>
                                          <td>Переходник ПЭ 500х450 стык спайка L270мм, L110мм, L110мм  тс-32мм  </td>
                                          <td className="text-center">79,00</td>
                                        </tr>
                                      </tbody>
                                    </table>

                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-12 order-2 order-lg-1">
                                <Sidebar />
                            </div>
                        </div>
                        </div>
                    </div>
                    {/*Service section end*/}
                    </div>

                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}


export default Productions;
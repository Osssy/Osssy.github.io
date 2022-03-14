import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Sidebar from './components/Sidebar';
import ServiceGallery from './components/ServiceGallery';
import ServiceTab from '../components/ServiceTab';
import ProjectSlider from '../components/ProjectSlider';
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
                                    <h1>ТОВАРЫ</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">ГЛАВНАЯ</a></li>
                                        <li>ТОВАРЫ</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}

                {/* Project Slider */}
                <ProjectSlider/>

                <div className="page-wrapper section-space--inner--120">
                    {/*Service section start*/}
                    <div className="service-section">
                        <div className="container">

                        <div className="row">
                            <div className="col-lg-8 col-12 order-1 order-lg-2">
                            <div className="service-details">

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
                                          <th>Цена за м<sup>3</sup>, доллар США</th>
                                        </tr>

                                        <tr>
                                          <td className="text-center">1</td>
                                          <td>Бревно оцилиндрованное</td>
                                          <td className="text-center">от 124,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">2</td>
                                          <td>Брус естественной влажности (100x150х3000)</td>
                                          <td className="text-center">от 314,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">3</td>
                                          <td>Брусок сухой (50x70х3000)</td>
                                          <td className="text-center">от 136,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">4</td>
                                          <td>Доска пола (27x135х3000)</td>
                                          <td className="text-center">25,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">5</td>
                                          <td>Имитация бруса (20x130х3000)</td>
                                          <td className="text-center">26,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">6</td>
                                          <td>Планкен (20x130х3000)</td>
                                          <td className="text-center">22,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">7</td>
                                          <td>Блок-хаус (27x142х3000)</td>
                                          <td className="text-center">18,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">8</td>
                                          <td>Палубная доска (130x27х3000)</td>
                                          <td className="text-center">15,00</td>
                                        </tr>
                                      </tbody>
                                    </table>

                                    <table className="col-12 mb-5" border="1" bordercolor="#F0542D">
                                      <tbody>
                                        <tr>
                                          <th colspan="3" height="50" className="text-center">Стройматериалы</th>
                                        </tr>
                                        <tr className="text-center text-white" bgcolor="#F0542D">
                                          <th>№ п/п</th>
                                          <th>Товары</th>
                                          <th>Цена за упак., доллар США</th>
                                        </tr>

                                        <tr>
                                          <td className="text-center">1</td>
                                          <td>Панели</td>
                                          <td className="text-center">2,00 - 11,70</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">2</td>
                                          <td>Ламинат</td>
                                          <td className="text-center">7,80 - 61,10</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">3</td>
                                          <td>Линолеум</td>
                                          <td className="text-center">4,20 - 191,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">4</td>
                                          <td>Обои</td>
                                          <td className="text-center">11,00 - 48,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">5</td>
                                          <td>Плитка керамическая</td>
                                          <td className="text-center">4,90 - 57,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">6</td>
                                          <td>Керамогранит</td>
                                          <td className="text-center">до 25,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">7</td>
                                          <td>Монтажная пена, герметики и клей</td>
                                          <td className="text-center">до 58,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">8</td>
                                          <td>Метизы</td>
                                          <td className="text-center">до 31,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">9</td>
                                          <td>Сайдинг</td>
                                          <td className="text-center">7,50 - 24,0</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">10</td>
                                          <td>Брус пустотелый ДПК (50х50х4000)</td>
                                          <td className="text-center">12,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">11</td>
                                          <td>Уголок из ДПК (40х40х4000)</td>
                                          <td className="text-center">8,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">12</td>
                                          <td>Террасная доска односторонняя ДПК (150х23,5х4000)</td>
                                          <td className="text-center">17,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">13</td>
                                          <td>Брус пустотелый ДПК (100x100х4000) </td>
                                          <td className="text-center">43,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">14</td>
                                          <td>Планки декоративные из ДПК (70х10,5х4000)</td>
                                          <td className="text-center">7,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">15</td>
                                          <td>Рейки из ДПК (40х4,6х4000)</td>
                                          <td className="text-center">4,00</td>
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

                                <div className="page-wrapper section-space--inner--top--120">
                                  <div className="comment-wrapper">
                                  <h3>Закажите товар</h3>
                                  <div className="comment-form">
                                  <form action="#">
                                      <div className="row row-10">
                                      <div className="col-md-6 col-12 section-space--bottom--20"><input type="text" placeholder="ФИО" /></div>
                                      <div className="col-md-6 col-12 section-space--bottom--20"><input type="email" placeholder="Почта" /></div>
                                      <div className="col-12"><textarea placeholder="Сообщение" defaultValue={""} /></div>
                                      <div className="col-12"><input type="submit" defaultValue="Заказать" /></div>
                                      </div>
                                  </form>
                                  </div>
                                </div>
                            </div>
                            </div>
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
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
                                    <h1>ТАУАРЛАР</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">НЕГІЗГІ</a></li>
                                        <li>ТАУАРЛАР</li>
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
                                          <th colspan="3" height="50" className="text-center">Ағаш</th>
                                        </tr>
                                        <tr className="text-center text-white" bgcolor="#F0542D">
                                          <th>№ р / б</th>
                                          <th>Тауарлар</th>
                                          <th>Бір м<sup>3</sup> бағасы, АҚШ доллары</th>
                                        </tr>

                                        <tr>
                                          <td className="text-center">1</td>
                                          <td>Бөрене дөңгеленді</td>
                                          <td className="text-center">бастап 124,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">2</td>
                                          <td>Табиғи ылғалдылық (100x150х3000)</td>
                                          <td className="text-center">бастап 314,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">3</td>
                                          <td>Құрғақ жолақ (50x70х3000)</td>
                                          <td className="text-center">бастап 136,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">4</td>
                                          <td>Еден тақтасы (27x135х3000)</td>
                                          <td className="text-center">25,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">5</td>
                                          <td>Барға еліктеу (20x130х3000)</td>
                                          <td className="text-center">26,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">6</td>
                                          <td>Планкен (20x130х3000)</td>
                                          <td className="text-center">22,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">7</td>
                                          <td>Блок үй (27x142х3000)</td>
                                          <td className="text-center">18,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">8</td>
                                          <td>Палубалық тақта (130x27х3000)</td>
                                          <td className="text-center">15,00</td>
                                        </tr>
                                      </tbody>
                                    </table>

                                    <table className="col-12 mb-5" border="1" bordercolor="#F0542D">
                                      <tbody>
                                        <tr>
                                          <th colspan="3" height="50" className="text-center">Құрылыс материалдары</th>
                                        </tr>
                                        <tr className="text-center text-white" bgcolor="#F0542D">
                                          <th>№ р / б</th>
                                          <th>Тауарлар</th>
                                          <th>Қаптаманың бағасы, АҚШ доллары</th>
                                        </tr>

                                        <tr>
                                          <td className="text-center">1</td>
                                          <td>Панельдер</td>
                                          <td className="text-center">2,00 - 11,70</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">2</td>
                                          <td>Ламинаттан жасалған еден</td>
                                          <td className="text-center">7,80 - 61,10</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">3</td>
                                          <td>Линолеум</td>
                                          <td className="text-center">4,20 - 191,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">4</td>
                                          <td>Түсқағаздар</td>
                                          <td className="text-center">11,00 - 48,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">5</td>
                                          <td>Керамикалық плитка</td>
                                          <td className="text-center">4,90 - 57,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">6</td>
                                          <td>Фарфор плиткалары</td>
                                          <td className="text-center">дейін 25,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">7</td>
                                          <td>Көбік, герметиктер және желім</td>
                                          <td className="text-center">дейін 58,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">8</td>
                                          <td>Аппараттық құрал</td>
                                          <td className="text-center">дейін 31,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">9</td>
                                          <td>Сайдинг</td>
                                          <td className="text-center">7,50 - 24,0</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">10</td>
                                          <td>Шұңқырлы Ағаш-полимерлі композициялық (50х50х4000)</td>
                                          <td className="text-center">12,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">11</td>
                                          <td>Ағаш-полимерлі композициялықбұрышы (40х40х4000)</td>
                                          <td className="text-center">8,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">12</td>
                                          <td>Террасалық тақтайша бір жақты Ағаш-полимерлі композициялық (150х23,5х4000)</td>
                                          <td className="text-center">17,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">13</td>
                                          <td>Шұңқыр Ағаш-полимерлі композициялық (100x100x4000)</td>
                                          <td className="text-center">43,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">14</td>
                                          <td>Ағаш-полимерлі композициялықсәндік безендіргіштері (70x10.5x4000)</td>
                                          <td className="text-center">7,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">15</td>
                                          <td>Ағаш-полимерлі композиттен жасалған Рейки (40x4.6x4000)</td>
                                          <td className="text-center">4,00</td>
                                        </tr>
                                      </tbody>
                                    </table>

                                    <table className="col-12" border="1" bordercolor="#F0542D">
                                      <tbody>
                                        <tr>
                                          <th colspan="3" height="50" className="text-center">Санитарлық жабдықтар</th>
                                        </tr>
                                        <tr className="text-center text-white" bgcolor="#F0542D">
                                          <th>№ р / б</th>
                                          <th>Тауарлар</th>
                                          <th>Бірлік бағасы, АҚШ доллары</th>
                                        </tr>

                                        <tr>
                                          <td className="text-center">1</td>
                                          <td>Электрлік термоядролық ПЭ 315</td>
                                          <td className="text-center">480,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">2</td>
                                          <td>Шаршы дәнекерленген ПЭ 400</td>
                                          <td className="text-center">947,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">3</td>
                                          <td>Бүйірлік дәнекерлеу қысқышы ПЭ 110х63</td>
                                          <td className="text-center">107,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">4</td>
                                          <td>Электродтық муфта 400 ПЭ</td>
                                          <td className="text-center">477,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">5</td>
                                          <td>Электродтық муфта 315 ПЭ</td>
                                          <td className="text-center">195,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">6</td>
                                          <td>Жамбас буыны ПЭ 250 L490мм, L110мм, L110мм тс-22мм</td>
                                          <td className="text-center">60,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">7</td>
                                          <td>Жамбас буыны ПЭ 160</td>
                                          <td className="text-center">97,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">8</td>
                                          <td>Квадрат электронды термоядролық ПЭ 110</td>
                                          <td className="text-center">33,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">9</td>
                                          <td>Жартылай лақтыру ПЭ 180 L300мм, L90мм тс-6,4мм</td>
                                          <td className="text-center">19,00</td>
                                        </tr>

                                        <tr>
                                          <td className="text-center">10</td>
                                          <td>Айналмалы адаптер ПЭ 500х450 L270мм, L110мм, L110мм тс-32мм</td>
                                          <td className="text-center">79,00</td>
                                        </tr>
                                      </tbody>
                                    </table>

                                </div>
                                </div>

                                <div className="page-wrapper section-space--inner--top--120">
                                  <div className="comment-wrapper">
                                  <h3>Тауарларға тапсырыс беру</h3>
                                  <div className="comment-form">
                                  <form action="#">
                                      <div className="row row-10">
                                      <div className="col-md-6 col-12 section-space--bottom--20"><input type="text" placeholder="Аты-жөні" /></div>
                                      <div className="col-md-6 col-12 section-space--bottom--20"><input type="email" placeholder="Электронды пошта" /></div>
                                      <div className="col-12"><textarea placeholder="Хабарлама" defaultValue={""} /></div>
                                      <div className="col-12"><input type="submit" defaultValue="Тапсырыс" /></div>
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
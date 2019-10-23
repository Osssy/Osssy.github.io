import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';

class PageNotFound extends Component{
    render(){
        return(
            <div>
                {/* Navigation bar */}
                <NavBar/>

                {/*====================  404 page content ====================*/}
                <div>
                    <div className="error-page-wrapper d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-6 col-md-9 m-auto text-center">
                            <div className="error-content-centered d-flex align-items-center justfy-content-center">
                            <div className="error-page-content-wrap">
                                <h2>404</h2>
                                <h3>СТРАНИЦА НЕ НАЙДЕНА</h3>
                                <p>Извините, но страница, которую вы ищете не существует, изменена, либо временно не доступна.</p>
                                <a href="/" className="ht-btn ht-btn--default ht-btn--default--dark-hover">На главную</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                {/*====================  End of 404 page content  ====================*/}

                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}


export default PageNotFound;
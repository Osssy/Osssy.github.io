import React, {Component} from 'react';
import NavBar from './components/NavBar';
import HeroSlider from './components/HeroSlider';
import VideoCta from './components/VideoCta';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';

class Home extends Component{
    render(){
        
        return(
            <div>
                
                {/* Navigation bar */}
                <NavBar/>
                
                {/* Hero slider */}
                <HeroSlider/>
                
                {/* Video CTA */}
                <VideoCta/>

                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}


export default Home;
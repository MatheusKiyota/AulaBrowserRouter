import Header from "../components/Header";
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./../globals.css";
import Footer from "../components/Footer";



export default function Home() {
    return(
        <>
            <div className="Home">
                <img className="fotoStussy" src="src/fotos/bola8.png"/> 
           </div>
                  <Header/>

                    <Carousel 
                        infiniteLoop
                        useKeyboardArrows
                        autoPlay
                        showArrows={true}
                        showStatus={false}
                        showThumbs={false}
                    
                        dynamicHeight
                    >
                        <div>
                            <img src="src/fotos/foto.stussy.jpg"/>
                        </div>

                    
                    </Carousel>

                    <Footer/>
        </>
                    
    );
}
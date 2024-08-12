import Header from "../components/Header";
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./../globals.css";


export default function Home() {
    return(
        <>
                <h1 className="Home">Home</h1>
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
                            <img src="https://acdn.mitiendanube.com/stores/001/167/965/themes/new_linkedman/2-slide-1703944594918-4516444529-9f64ef0073396b62ffc4a2c72c6931721703944595-1920-1920.webp?257411524"/>
                        </div>

                        <div>
                            <img src="https://acdn.mitiendanube.com/stores/001/167/965/themes/new_linkedman/2-slide-1722260379840-8630136989-b285f3135c3be28d3f552e3eabf60dbb1722260380-1920-1920.webp?257411524"/>
                        </div>

                        <div>
                            <img src="https://acdn.mitiendanube.com/stores/001/167/965/themes/new_linkedman/2-slide-1717083598973-565208895-b3d411850afdbfeff7870647ef0c36771717083599-1920-1920.webp?257411524://acdn.mitiendanube.com/stores/001/167/965/themes/new_linkedman/2-slide-1703944594918-4516444529-9f64ef0073396b62ffc4a2c72c6931721703944595-1920-1920.webp?257411524"/>
                        </div>
                    </Carousel>
        </>
    );
}
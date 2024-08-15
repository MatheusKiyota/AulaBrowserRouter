import React, { useState } from "react";
import Header from "../components/Header";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./../globals.css";
import Footer from "../components/Footer";
import ListarProdutos from "../components/ListarProdutos";

export default function Home() {

    const [ValoresCamisas] = useState([
        {
            id: 1,
            titulo: "camisa 1",
            valor: "R$50,00"
        },
        {
            id: 2,
            titulo: "camisa 2",
            valor: "R$50,00"
        },
        {
            id: 3,
            titulo: "camisa 3",
            valor: "R$50,00"
        }
    ]);

    return (
        <>
            <div className="Home">
                <img className="fotoStussy" src="src/fotos/bola8.png" alt="Imagem de bola 8" />
            </div>
            <Header />

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
                    <img src="src/fotos/foto.stussy.jpg" alt="Imagem Stussy" />
                </div>
            </Carousel>

            <div>
                <ListarProdutos produtos={ValoresCamisas} />
            </div>

            <Footer />
        </>
    );
}



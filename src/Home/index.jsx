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
            valor: "R$50,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/1140283_FBLA_1.jpg?v=1723733130&width=1440"
        },
        {
            id: 2,
            titulo: "camisa 2",
            valor: "R$50,00",
            imagem: "src/fotos/camisab.jpg"
        },
        {
            id: 3,
            titulo: "camisa 3",
            valor: "R$50,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/1905000_WHIT_2.jpg?v=1721328968&width=1440"
        },
        {
            id: 4,
            titulo: "camisa 4",
            valor: "R$50,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/1905000_NAVY_2.jpg?v=1721328963&width=1440"
        },
        {
            id: 5,
            titulo: "camisa 5",
            valor: "R$50,00",
            imagem: "src/fotos/moleton.png"
        },
        {
            id: 6,
            titulo: "camisa 6",
            valor: "R$50,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/1975052_20_BLAC_2_40b6778a-796b-4c9b-bcdd-2513809f0c26.jpg?v=1723159250&width=1440"
        },
        {
            id: 7,
            titulo: "camisa 7",
            valor: "R$50,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/1975000_BLAC_1.jpg?v=1721329084&width=1440"
        },
        {
            id: 8,
            titulo: "camisa 8",
            valor: "R$50,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/115791_PINE_9.jpg?v=1723741227&width=1440"
        },
        {
            id: 9,
            titulo: "camisa 9",
            valor: "R$50,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/1975072_NAVY_2_f0229681-c1e3-42f8-bcd2-571651364954.jpg?v=1721329097&width=1440"
        },
        {
            id: 10,
            titulo: "camisa 10",
            valor: "R$50,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/115791_BLAC_9.jpg?v=1723741230&width=1440"
        },
        {
            id: 11,
            titulo: "camisa 11",
            valor: "R$50,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/115716_BONE_1_c7f15fcc-36c6-4dd4-8f50-b635177130ad.jpg?v=1723733073&width=1440"
        },
        {
            id: 12,
            titulo: "camisa 12",
            valor: "R$50,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/1915074_NAVY_1.jpg?v=1721329058&width=1440"
        },
        {
            id: 13,
            titulo: "camisa 13",
            valor: "R$50,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/1905022_NATL_1_4c157eed-6f27-47a2-a426-af661a11bee9.jpg?v=1723159159&width=1440"
        },
        {
            id: 14,
            titulo: "camisa 14",
            valor: "R$50,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/1905089_BLAC_1.jpg?v=1722963858&width=1440"
        },
        {
            id: 15,
            titulo: "camisa 15",
            valor: "R$50,00",
            imagem: "src/fotos/camisac.jpg"
        },
        {
            id: 16,
            titulo: "camisa 16",
            valor: "R$50,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/1905066_BLAC_1.jpg?v=1718038870&width=1440"
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

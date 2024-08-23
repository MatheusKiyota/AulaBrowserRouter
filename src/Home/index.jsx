import React, { useState } from "react";
import Header from "../components/Header";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./../globals.css";
import Footer from "../components/Footer";
import ListarProdutos from "../components/ListarProdutos";
import MetaDescription from "../components/MetaDescription";

export default function Home() {
    const [ValoresCamisas] = useState([
        {
            id: 1,
            titulo: "LAZY TEE",
            valor: "R$369,00",
            valorDescontado: "R$295,00", 
            imagem: "https://eu.stussy.com/cdn/shop/files/1140283_FBLA_1.jpg?v=1723733130&width=1440",
            cores: ["Cinza", "Azul"]
        },
        {
            id: 2,
            titulo: "BASIC STÜSSY TEE",
            valor: "R$296,00",
            valorDescontado: "R$237,00", 
            imagem: "src/fotos/camisab.jpg",
            cores: ["Preto", "Azul", "Branco"]
        },
        {
            id: 3,
            titulo: "BASIC STÜSSY TEE",
            valor: "R$296,00",
            valorDescontado: "R$237,00", 
            imagem: "https://eu.stussy.com/cdn/shop/files/1905000_WHIT_2.jpg?v=1721328968&width=1440",
            cores: ["Preto", "Azul", "Branco"]
        },
        {
            id: 4,
            titulo: "BASIC STÜSSY TEE",
            valor: "R$296,00",
            valorDescontado: "R$237,00", 
            imagem: "https://eu.stussy.com/cdn/shop/files/1905000_NAVY_2.jpg?v=1721328963&width=1440",
            cores: ["Preto", "Azul", "Branco"]
        },
        {
            id: 5,
            titulo: "BASIC STÜSSY LS TEE",
            valor: "R$358,00",
            valorDescontado: "R$286,00", 
            imagem: "src/fotos/moleton.png",
            cores: ["Azul", "Branco"]
        },
        {
            id: 6,
            titulo: "BUANA HODIE PIGMENT DYED",
            valor: "R$955,00",
            valorDescontado: "R$764,00", 
            imagem: "https://eu.stussy.com/cdn/shop/files/1975052_20_BLAC_2_40b6778a-796b-4c9b-bcdd-2513809f0c26.jpg?v=1723159250&width=1440",
            cores: ["Cinza", "Preto", "Azul"]
        },
        {
            id: 7,
            titulo: "BASIC STÜSSY ZIP HOODIE",
            valor: "R$955,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/1975000_BLAC_1.jpg?v=1721329084&width=1440",
            cores: ["Cinza", "Preto", "Azul"]
        },
        {
            id: 8,
            titulo: "SHORT MILITARY PARKA",
            valor: "R$2.033,00",
            valorDescontado: "R$1.626,00", 
            imagem: "https://eu.stussy.com/cdn/shop/files/115791_PINE_9.jpg?v=1723741227&width=1440",
            cores: ["Verde", "Preto"]
        },
        {
            id: 9,
            titulo: "BASIC STÜSSY ZIP HOODIE",
            valor: "R$955,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/1975072_NAVY_2_f0229681-c1e3-42f8-bcd2-571651364954.jpg?v=1721329097&width=1440",
            cores: ["Cinza", "Preto", "Azul"]
        },
        {
            id: 10,
            titulo: "SHORT MILITARY PARKA",
            valor: "R$2.033,00",
            valorDescontado: "R$1.626,00", 
            imagem: "https://eu.stussy.com/cdn/shop/files/115791_BLAC_9.jpg?v=1723741230&width=1440",
            cores: ["Verde", "Preto"]
        },
        {
            id: 11,
            titulo: "WORK JACKET INSULATED",
            valor: "R$1.478,00",
            valorDescontado: "R$1.182,00", 
            imagem: "https://eu.stussy.com/cdn/shop/files/115716_BONE_1_c7f15fcc-36c6-4dd4-8f50-b635177130ad.jpg?v=1723733073&width=1440",
            cores: ["Branco", "Bege"]
        },
        {
            id: 12,
            titulo: "BASIC STÜSSY LS TEE",
            valor: "R$358,00",
            valorDescontado: "R$286,00", 
            imagem: "https://eu.stussy.com/cdn/shop/files/1915074_NAVY_1.jpg?v=1721329058&width=1440",
            cores: ["Azul", "Branco"]
        },
        {
            id: 13,
            titulo: "8 BALL TEE PIGMENT DYED",
            valor: "R$50,00",
            valorDescontado: "R$40,00", 
            imagem: "https://eu.stussy.com/cdn/shop/files/1905022_NATL_1_4c157eed-6f27-47a2-a426-af661a11bee9.jpg?v=1723159159&width=1440",
            cores: ["Branco", "Preto", "Azul", "Verde"]
        },
        {
            id: 14,
            titulo: "SURFWALK TEE",
            valor: "R$296,00",
            imagem: "https://www.stussy.com/cdn/shop/files/1905089_BLAC_2.jpg?v=1720543319&width=1440",
            cores: ["Branco", "Preto", "Azul"]
        },
        {
            id: 15,
            titulo: "BETTER STÜSSY TEE",
            valor: "R$410,00",
            valorDescontado: "R$328,00", 
            imagem: "src/fotos/camisac.jpg",
            cores: ["Branco", "Preto"]
        },
        {
            id: 16,
            titulo: "BEACH ROOTS TEE PIGMENT",
            valor: "R$296,00",
            imagem: "https://www.stussy.com/cdn/shop/files/1905072_BLAC_1.jpg?v=1721328964&width=1440",
            cores: ["Branco", "Preto", "Azul"]
        }
    ]);

    return (
        <>
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
                    <img src="https://cdn.awsli.com.br/1920x1920/257/257889/banner/stussy-nov-r3z7iys4wo.jpg" alt="Imagem Stussy" />
                </div>
            </Carousel>
            <div>
                <ListarProdutos produtos={ValoresCamisas} />
            </div>
            <MetaDescription />
            <Footer />
        </>
    );
}

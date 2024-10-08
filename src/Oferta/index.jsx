import { Carousel } from "react-responsive-carousel";
import Header from "../components/Header";
import React, { useState } from "react";
import "./../globals.css";
import Footer from "../components/Footer";
import MetaDescription from "../components/MetaDescription";
import ListarProdutos from "../components/ListarProdutos";


export default function Oferta(){
  const [ValoresCamisas] = useState([
    {
      id: 1,
      titulo: "SHELLS TEE",
      valor: "R$410,00",
      valorDescontado: "R$390,00", 
      imagem: "https://eu.stussy.com/cdn/shop/files/1905067_WHIT_2_406bb629-6c42-4291-996d-628261dd9ee9.jpg?v=1718210041&width=1440",
      cores: ["Branco"]
  },
    {
        id: 2,
        titulo: "BETTER STÜSSY TEE",
        valor: "R$369,00",
        valorDescontado: "R$328,00", 
        imagem: "src/fotos/camisac.jpg",
        cores: ["Branco", "Preto"]
    },
    {
        id: 3,
        titulo: "LAZY TEE",
        valor: "R$369,00",
        valorDescontado: "R$295,00", 
        imagem: "https://eu.stussy.com/cdn/shop/files/1140283_FBLA_1.jpg?v=1723733130&width=1440",
        cores: ["Cinza", "Azul"]
    },
    {
        id: 4,
        titulo: "BASIC STÜSSY TEE",
        valor: "R$296,00",
        valorDescontado: "R$237,00", 
        imagem: "src/fotos/camisab.jpg",
        cores: ["Preto", "Azul", "Branco"]
    },
    {
        id: 5,
        titulo: "BASIC STÜSSY TEE",
        valor: "R$296,00",
        valorDescontado: "R$237,00", 
        imagem: "https://eu.stussy.com/cdn/shop/files/1905000_WHIT_2.jpg?v=1721328968&width=1440",
        cores: ["Preto", "Azul", "Branco"]
    },
    {
        id: 6,
        titulo: "BASIC STÜSSY TEE",
        valor: "R$296,00",
        valorDescontado: "R$237,00", 
        imagem: "https://eu.stussy.com/cdn/shop/files/1905000_NAVY_2.jpg?v=1721328963&width=1440",
        cores: ["Preto", "Azul", "Branco"]
    },
    {
        id: 7,
        titulo: "8 BALL TEE PIGMENT DYED",
        valor: "R$50,00",
        valorDescontado: "R$40,00", 
        imagem: "https://eu.stussy.com/cdn/shop/files/1905022_NATL_1_4c157eed-6f27-47a2-a426-af661a11bee9.jpg?v=1723159159&width=1440",
        cores: ["Branco", "Preto", "Azul", "Verde"]
    },
    {
        id: 8,
        titulo: "STÜSSY UNDERSHIRTS 3 PACK",
        valor: "R$369,00",
        valorDescontado: "R$319,00", 
        imagem: "https://eu.stussy.com/cdn/shop/files/1140355_MULT_1.jpg?v=1718205772&width=1440",
        cores: ["Branco", "Preto", "Cinza"]
    },
    {
        id: 9,
        titulo: "STÜSSY BLACK 3 PACK",
        valor: "R$369,00",
        valorDescontado: "R$319,00", 
        imagem: "https://eu.stussy.com/cdn/shop/files/1140199_BLAC_1.jpg?v=1718205743&width=1440",
        cores: ["Preto"]
    },
    {
        id: 10,
        titulo: "BUANA HODIE PIGMENT DYED",
        valor: "R$955,00",
        valorDescontado: "R$764,00", 
        imagem: "https://eu.stussy.com/cdn/shop/files/1975052_20_BLAC_2_40b6778a-796b-4c9b-bcdd-2513809f0c26.jpg?v=1723159250&width=1440",
        cores: ["Cinza", "Preto", "Azul"]
    },
    {
        id: 11,
        titulo: "SHORT MILITARY PARKA",
        valor: "R$2.033,00",
        valorDescontado: "R$1.626,00", 
        imagem: "https://eu.stussy.com/cdn/shop/files/115791_PINE_9.jpg?v=1723741227&width=1440",
        cores: ["Verde", "Preto"]
    },
    {
        id: 12,
        titulo: "SHORT MILITARY PARKA",
        valor: "R$2.033,00",
        valorDescontado: "R$1.626,00", 
        imagem: "https://eu.stussy.com/cdn/shop/files/115791_BLAC_9.jpg?v=1723741230&width=1440",
        cores: ["Verde", "Preto"]
    },
    {
        id: 13,
        titulo: "WORK JACKET INSULATED",
        valor: "R$1.478,00",
        valorDescontado: "R$1.182,00", 
        imagem: "https://eu.stussy.com/cdn/shop/files/115716_BONE_1_c7f15fcc-36c6-4dd4-8f50-b635177130ad.jpg?v=1723733073&width=1440",
        cores: ["Branco", "Beje"]
    },
    {
        id: 14,
        titulo: "BASIC STÜSSY LS TEE",
        valor: "R$358,00",
        valorDescontado: "R$286,00", 
        imagem: "https://eu.stussy.com/cdn/shop/files/1915074_NAVY_1.jpg?v=1721329058&width=1440",
        cores: ["Azul", "Branco"]
    }
]);



    return(
            <>
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
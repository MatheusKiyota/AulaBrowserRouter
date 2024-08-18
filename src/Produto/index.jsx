import Header from "../components/Header";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ListarProdutos from "../components/ListarProdutos";
import React, { useState } from 'react';
import Footer from "../components/Footer";
import MetaDescription from "../components/MetaDescription";




export default function Produto(){
 
    const [ValoresCamisas] = useState([
        {
            id: 1,
            titulo: "SURFWALK TEE",
            valor: "R$296,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/1905089_WHIT_1.jpg?v=1722964017&width=1440"
        },
        {
            id: 2,
            titulo: "DNA TEE PIGMENT DYED",
            valor: "R$110,00",
            imagem: "https://www.stussy.com/cdn/shop/files/1905038_SHAR_2_9c7636db-c5a8-40fe-b3d1-ccdb325921dc.jpg?v=1723674613&width=1440"
        },
        {
            id: 3,
            titulo: "MILK TEE",
            valor: "R$110,00",
            imagem: "https://www.stussy.com/cdn/shop/files/1905036_BLAC_1.jpg?v=1722969136&width=1440"
        },
        {
            id: 4,
            titulo: "BETTER STÜSSY TEE",
            valor: "R$369,00",
            imagem: "src/fotos/camisac.jpg"
        },
        {
            id: 5,
            titulo: "LAZY TEE",
            valor: "R$369,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/1140283_FBLA_1.jpg?v=1723733130&width=1440"
        },
        {
            id: 6,
            titulo: "BASIC STÜSSY TEE",
            valor: "R$296,00",
            imagem: "src/fotos/camisab.jpg"
        },
        {
            id: 7,
            titulo: "BASIC STÜSSY TEE",
            valor: "R$296,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/1905000_WHIT_2.jpg?v=1721328968&width=1440"
        },
        {
            id: 8,
            titulo: "BASIC STÜSSY TEE",
            valor: "R$296,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/1905000_NAVY_2.jpg?v=1721328963&width=1440"
        },
        {
            id: 9,
            titulo: "8 BALL TEE PIGMENT DYED",
            valor: "R$50,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/1905022_NATL_1_4c157eed-6f27-47a2-a426-af661a11bee9.jpg?v=1723159159&width=1440"
        },
        {
            id: 10,
            titulo: "SURFWALK TEE",
            valor: "R$296,00",
            imagem: "https://www.stussy.com/cdn/shop/files/1905089_BLAC_2.jpg?v=1720543319&width=1440"
        },
        {
            id: 11,
            titulo: "SHELLS TEE",
            valor: "R$410,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/1905067_WHIT_2_406bb629-6c42-4291-996d-628261dd9ee9.jpg?v=1718210041&width=1440"
        },
        {
            id: 12,
            titulo: "BEACH ROOTS TEE",
            valor: "R$296,00",
            imagem: "https://www.stussy.com/cdn/shop/files/1905072_BLAC_1.jpg?v=1721328964&width=1440"
        },
        {
            id: 13,
            titulo: "STÜSSY UNDERSHIRTS 3 PACK",
            valor: "R$369,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/1140355_MULT_1.jpg?v=1718205772&width=1440"
        },
        {
            id: 14,
            titulo: "STÜSSY BLACK 3 PACK",
            valor: "R$369,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/1140199_BLAC_1.jpg?v=1718205743&width=1440"
        },
        {
            id: 15,
            titulo: "STÜSSY GRAY 3 PACK",
            valor: "R$369,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/1140199_GHEA_1.jpg?v=1718205743&width=1440"
        },
        {
            id: 16,
            titulo: "STÜSSY WHITE 3 PACK",
            valor: "R$369,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/1140199_WHIT_1.jpg?v=1718205741&width=1440"
        },
        {
            id: 17,
            titulo: "BASIC STÜSSY LS TEE",
            valor: "R$358,00",
            imagem: "src/fotos/moleton.png"
        },
        {
            id: 18,
            titulo: "BUANA HODIE PIGMENT DYED",
            valor: "R$955,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/1975052_20_BLAC_2_40b6778a-796b-4c9b-bcdd-2513809f0c26.jpg?v=1723159250&width=1440"
        },
        {
            id: 19,
            titulo: "BASIC STÜSSY ZIP HOODIE",
            valor: "R$955,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/1975000_BLAC_1.jpg?v=1721329084&width=1440"
        },
        {
            id: 20,
            titulo: "SHORT MILITARY PARKA",
            valor: "R$2.033,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/115791_PINE_9.jpg?v=1723741227&width=1440"
        },
        {
            id: 21,
            titulo: "BASIC STÜSSY ZIP HOODIE",
            valor: "R$955,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/1975072_NAVY_2_f0229681-c1e3-42f8-bcd2-571651364954.jpg?v=1721329097&width=1440"
        },
        {
            id: 22,
            titulo: "SHORT MILITARY PARKA",
            valor: "R$2.033,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/115791_BLAC_9.jpg?v=1723741230&width=1440"
        },
        {
            id: 23,
            titulo: "WORK JACKET INSULATED",
            valor: "R$1.478,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/115716_BONE_1_c7f15fcc-36c6-4dd4-8f50-b635177130ad.jpg?v=1723733073&width=1440"
        },
        {
            id: 24,
            titulo: "BASIC STÜSSY LS TEE",
            valor: "R$358,00",
            imagem: "https://eu.stussy.com/cdn/shop/files/1915074_NAVY_1.jpg?v=1721329058&width=1440"
        }
    ]);
    

    return(
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
           
            <MetaDescription/>
            <Footer />

            </>
    );
}
import React from "react";
import { Link } from "react-router-dom";
import "../globals.css";

export default function ListarProdutos({ produtos }) {
    return (
        <div className="EstruturaProduto">
            {
                produtos.map((item) => (
                    <div className="container" key={item.id}>
                        <img className="imagem" src={item.imagem} alt={item.titulo} />

                            <div className="descricao">
                                <p>{item.titulo}</p>
                                <p>{item.valor}</p>
                                <button className="botao">Obter</button>
                            </div>
                    </div>
                ))
            }
        </div>
    );
}
 
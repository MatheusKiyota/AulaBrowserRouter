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
                                <p className="negrito">{item.titulo}</p>
                                <p className="cinza">{item.valor}</p>
                            </div>
                                <button className="botao">Obter</button>
                    </div>
                ))
            }
        </div>
    );
}
 
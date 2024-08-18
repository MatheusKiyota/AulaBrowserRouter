import React from "react";
import "../globals.css";

export default function ListarProdutos({ produtos }) {
    return (
        <div className="EstruturaProduto">
            {produtos.map((item) => (
                <div className="container" key={item.id}>
                    <img className="imagem" src={item.imagem} alt={item.titulo} />
                    <div className="descricao">
                        <p className="negrito">{item.titulo}</p>
                        <div className="precos">
                            {item.valorDescontado ? (
                                <>
                                    <p className="valor valor-original">{item.valor}</p>
                                    <p className="valor valor-descontado">{item.valorDescontado}</p>
                                </>
                            ) : (
                                <p className="valor">{item.valor}</p>
                            )}
                        </div>
                    </div>
                    <button className="botao">Obter</button>
                </div>
            ))}
        </div>
    );
}

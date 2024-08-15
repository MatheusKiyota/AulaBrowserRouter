import React from "react";
import { Link } from "react-router-dom";
import "../globals.css";

export default function ListarProdutos({ produtos }) {
    return (
        <div>
            {
                produtos.map((item) =>
                    <div className="container"key={item.id}>
                        <p>{item.titulo}</p>
                        <p>{item.valor}</p>
                    </div>
                )
            }
        </div>
    );
}
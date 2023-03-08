import React from 'react';
import './style.css';

export default function Card () {
    return (
        <div className='card-conteiner'>
            <header>
                <h1>Juan</h1>
                <span>Back-end</span>
            </header>
            <p>Java é uma linguagem back end muito odiada</p>
            <a href="">Ler mais</a>
        </div>
    );
}
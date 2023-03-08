import React from 'react';
import './style.css';

export default function Header() {
    return (
        <header className='Main-Header'>
            <h1>CODEWIKI</h1>
            <nav>
                <ul>
                    <li><a href='#'>Categorias</a></li>
                    <li><a href='#'>Linguagens</a></li>
                    <li><a href='#'>Tecnologias</a></li>
                </ul>
            </nav>
        </header>
    );
}
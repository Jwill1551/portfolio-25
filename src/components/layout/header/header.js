import React from 'react';
import './header-component.css';

export default function Header() {
    return (
        <header className="section portfolio-header py-6">
           <nav className="columns portfolio-header__nav">
               <ul class="column portfolio-header__nav-list d-flex justify-content-evenly mx-auto mb-0 col-6 col-md-8 col-sm-10">
                   <li className='nav-list__item'><a className="text-white" href="#hero">Hero</a></li>
                   <li className='nav-list__item'><a className="text-white" href="#projects">Projects</a></li>
                   <li className='nav-list__item'><a className="text-white" href="#skills">Skills</a></li>
                   <li className='nav-list__item'><a className="text-white" href="#contact">Contact</a></li>
               </ul>
           </nav> 
        </header>
    );
}


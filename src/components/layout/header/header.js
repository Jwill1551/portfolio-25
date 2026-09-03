import React from 'react';
import './header-component.css';
import MobileHeader from './mobile_header';

export default function Header() {
    return (
        <header className="portfolio-header">
           <nav className="columns is-flex is-justify-content-space-between mb-0 portfolio-header__nav is-hidden-mobile">
               <div className="column is-5 is-flex is-justify-content-start mb-0  portfolio-header__nav-name">
                  <span>Joshua Williams</span>
               </div>
               <ul class="column is-5 portfolio-header__nav-list is-flex is-justify-content-space-between mb-0 col-6 col-md-8 col-sm-10">
                   <li className='nav-list__item'><a href="#hero">About</a></li>
                   <li className='nav-list__item'><a href="#projects">Projects</a></li>
                   <li className='nav-list__item'><a href="#skills">Skills</a></li>
                   <li className='nav-list__item'><a href="#contact">Contact</a></li>
                   <li><button>Résumé</button></li>
               </ul>
           </nav> 
           <MobileHeader />
        </header>
    );
}


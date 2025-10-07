import React from 'react';
import './header-component.css';
import MobileHeader from './mobile_header';

export default function Header() {
    return (
        <header className="portfolio-header">
           <nav className="columns portfolio-header__nav is-hidden-mobile">
               <ul class="column is-three-quarters portfolio-header__nav-list is-flex is-justify-content-space-evenly mx-auto mb-0 col-6 col-md-8 col-sm-10">
                   <li className='nav-list__item'><a className="has-text-white" href="#hero">Hero</a></li>
                   <li className='nav-list__item'><a className="has-text-white" href="#projects">Projects</a></li>
                   <li className='nav-list__item'><a className="has-text-white" href="#skills">Skills</a></li>
                   <li className='nav-list__item'><a className="has-text-white" href="#contact">Contact</a></li>
               </ul>
           </nav> 
           <MobileHeader />
        </header>
    );
}


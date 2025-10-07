import React from 'react';
import './footer-component.css';

export default function Footer() {
    return (
        <footer className="section portfolio-footer">  
            <div className="column text-center py-4 is-flex is-justify-content-space-around">
                <span className="portfolio-footer__text text-white">©2025 - Joshua Willaims - Portfolio</span>
                <span className="portfolio-footer__text text-white">Made with React.Js</span>
            </div>
        </footer>
    );
}


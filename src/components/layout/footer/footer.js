import React from 'react';
import './footer-component.css';

export default function Footer() {
    return (
        <footer className="row portfolio-footer">  
            <div className="col text-center py-4 d-flex justify-content-around">
                <span className="portfolio-footer__text text-white">©2025 - Joshua Willaims - Portfolio</span>
                <span className="portfolio-footer__text text-white">Made with React.Js</span>
            </div>
        </footer>
    );
}


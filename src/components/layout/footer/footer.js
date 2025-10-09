import React from 'react';
import './footer-component.css';

export default function Footer() {
    return (
        <footer className="section portfolio-footer">  
            <div className="columns text-center py-4">
                <span className="column is-full-mobile  portfolio-footer__text has-text-white">©2025 - Joshua Willaims - Portfolio</span>
                <span className="column is-full-mobile portfolio-footer__text has-text-white">Special Thanks to <a className="project-card__link" href="https://malkinmade.com/" target="_blank" rel="noopener noreferrer">Malkin Made</a></span>
                <span className="column is-full-mobile portfolio-footer__text has-text-white">Made with React.Js and BulmaCSS</span>
            </div>
        </footer>
    );
}


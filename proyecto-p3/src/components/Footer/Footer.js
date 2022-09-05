import React from 'react';
import './Footer.css';

function Footer (){

    return (
        <footer className="footer-section">
            <ul className='footer-menu'> 
                <li><a href="https://www.linkedin.com/in/jana-catherina-fernandez/" > Jana Fernandez </a></li>
                <li><a href="https://www.linkedin.com/in/augusto-barral-a54a37207/" > Augusto Barral  </a> </li>
                <li> <a href="https://www.linkedin.com/in/solana-biblos-190919207/" > Solana Biblos </a></li>
            </ul>
            <p className='copyright'>Copyright © MoviePot 2022</p>
        </footer>
    )
}

export default Footer ;
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className='container erisa-credits'>
        <Link to='/'>
          <img src='images/logo.png' alt='State Of New Mexico Group logo' />
          State Of New Mexico Group Benefits Plan
        </Link>
        <div className='easi'>
          <a href='BenefitsInformation.html' target='_blank'>
            <img src='images/easi.png' width='118' alt='Erisa logo' />
          </a>
          <Link to='https://www.erisatrust.com/' target='_blank'>
            <img
              src='images/tree.png'
              width='72'
              alt='Erisa trust company logo'
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

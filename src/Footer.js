import React from "react";

function Footer() {
  return (
    <footer>
      <div className='container erisa-credits'>
        <a href='#'>
          <img src='images/logo.png' alt='State Of New Mexico Group logo' />
          State Of New Mexico Group Benefits Plan
        </a>
        <div className='easi'>
          <a href='BenefitsInformation.html' target='_blank'>
            <img src='images/easi.png' width='118' alt='Erisa logo' />
          </a>
          <a href='https://www.erisatrust.com/' target='_blank'>
            <img
              src='images/tree.png'
              width='72'
              alt='Erisa trust company logo'
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

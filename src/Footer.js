import React from "react";

export function Footer() {
  return (
    <footer id='contactSection'>
      <h4 className='text-center mb-2 pt-4'>CONTACT</h4>
      <a
        href='carrierContacts.html'
        target='_blank'
        className='centered-link text-center'
      >
        CARRIER PLAN CONTACTS
      </a>
      <div className='container'>
        <div className='contact-box'>
          <h6>Location</h6>
          <p>
            Erisa Administrative Services, Inc. Office
            <br />
            1200 San Pedro Drive NE <br />
            Albuquerque, NM 87110
          </p>
        </div>
        <div className='contact-box'>
          <h6>Phone</h6>
          <p>
            Albuquerque: (505) 244-6000
            <br />
            Toll Free: (855) 618-1800 <br />
            Fax: (505) 244-6009
          </p>
        </div>
        <div className='contact-box'>
          <h6>Email</h6>
          <p>
            <a href='mailto:SONM@easitpa.com'>SONM@easitpa.com</a>
            <br />
            <a href='mailto:FSA@easitpa.com'>FSA@easitpa.com</a>
          </p>
        </div>
        <div className='contact-box'>
          <h6>Business Hours</h6>
          <p>
            Monday - Friday: 8:00 AM - 5:00 PM
            <br />
            Saturday - Sunday: Closed <br />
            Erisa is closed for New Year Martin Luther King Day, Memorial Day
            Independence Day, Labor Day Thanksgiving (two days) and Christmas
            (two days)
          </p>
        </div>
      </div>
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

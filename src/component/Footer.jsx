import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start '>
      <section
        style={{ background: '#304146', padding: '0px 0px', color:"white" }}
        className=''
      >
        <MDBContainer className='p-4'>
          <MDBRow >
            {/* <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon='gem' className='' />
                Hommie Services
              </h6>
              <p style={{ textAlign: 'justify' }}>
                Services at your doorstep. Nowadays people have skills but they
                face difficulty to find job so our aim is to help both client
                and service provider by connecting them with one another.
              </p>
            </MDBCol> */}

            <MDBCol md='6' lg='3' xl='2' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color: "white"}}>SERVICES</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Maid
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Electrician
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Security Guard
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Home Tutor
                </a>
              </p>
            </MDBCol>

            <MDBCol md='6' lg='3' xl='2' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color: "white"}}>Useful links</h6>
              <p>
                <a href='/sign-up' className='text-reset'>
                  Register
                </a>
              </p>
              <p>
                <a href='/services' className='text-reset'>
                  Services
                </a>
              </p>
              <p>
                <a href='/about' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='/contact' className='text-reset'>
                  Contact Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md='6' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'style={{color: "white"}}>Contact</h6>
              <p>
                <MDBIcon icon='home' className='me-2' />
                Pakistan, Wah Cantt
              </p>
              <p>
                <MDBIcon icon='envelope' className='me-3' />
                abc@gmail.com
              </p>
              <p>
                <MDBIcon icon='phone' className='me-3' /> + 92 331 7634529
              </p>
              <p>
                <MDBIcon icon='print' className='me-3' /> + 92 331 7634529
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      
      <div className='text-center p-3' style={{ backgroundColor: 'white' }}>
        All Rights Reserved <br />
        {/* &copy;{new Date().getFullYear()} Copyright:{' '} */}
        <a
          className='text-reset fw-bold'
          style={{ paddingBottom: '0px' }}
          href='https://hommie-plum.vercel.app/'
        >
          HommieServices
        </a>
      </div>
    </MDBFooter>
     
  );
}

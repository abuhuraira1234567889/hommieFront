import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start '>
      <section
        style={{ background: '#304146', padding: '1px 10px', color: 'white' }}
        className=''
      >
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon='gem' className='' />
                Hommie Services
              </h6>
              <p style={{ textAlign: 'justify' }}>
                Services at your doorstep. Nowadays people have skills but they
                face difficulty to find job so our aim is to help both client
                and service provider by connecting them with one another.
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>SERVICES</h6>
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

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Register
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Services
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contact Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
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

      <div className='text-center p-2' style={{ backgroundColor: 'white' }}>
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

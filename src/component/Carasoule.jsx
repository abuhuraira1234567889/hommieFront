import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { H2, P } from './Typography';
import slider1 from "../images/slider1.png"
import slider3 from "../images/slider3.png"
import maid3 from "../images/maid3.png"
import slider4 from "../images/slider4.png"

function Carasoule() {
  return (
    <div style={{ height: '60vh' }}>
      <Carousel controls={false}>
        <Carousel.Item style={{ height: '60vh', background: '#D3f1f3' }}>
         
          <Carousel.Caption style={{ textAlign: 'left', top: '0%' }}>
            <Row style={{ alignItems: 'center' }}>
              <Col md={6}>
                <P color='#453c67'> Fast and Efficient Service</P>
                <H2 color='black' fontSize='60px' fontWeight='800'>
                  Hommie <br />
                  <span style={{ color: '#06ae5a' }}>
                    Services <br />
                  </span>
                </H2>
              </Col>
              <Col md={6}>
                <img width={'100%'} height={'100%'} src={slider1} />
              </Col>
            </Row>

          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '60vh', background: '#D3f1f3' }}>
         

          <Carousel.Caption style={{ textAlign: 'left', top: '0%' }}>
            <Row style={{ alignItems: 'center' }}>
              <Col md={6}>
                <P color='#453c67'> Fast and Efficient Service</P>
                <H2 color='black' fontSize='60px' fontWeight='800'>
                  Hommie <br />
                  <span style={{ color: '#06ae5a' }}>
                    Services <br />
                  </span>
                </H2>
              </Col>
              <Col md={6}>
                <img width={'70%'} height={'100%'} src={slider3} />
              </Col>
            </Row>

           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '60vh', background: '#D3f1f3' }}>
        

          <Carousel.Caption style={{ textAlign: 'left', top: '0%' }}>
            <Row style={{ alignItems: 'center' }}>
              <Col md={6}>
                <P color='#453c67'> Fast and Efficient Service</P>
                <H2 color='black' fontSize='60px' fontWeight='800'>
                  Hommie <br />
                  <span style={{ color: '#06ae5a' }}>
                    Services <br />
                  </span>
                </H2>
              </Col>
              <Col md={6}>
                <img width={'70%'} height={'50%'} src={maid3} />
              </Col>
            </Row>

            {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '60vh', background: '#D3f1f3' }}>
         

          <Carousel.Caption style={{ textAlign: 'left', top: '0%' }}>
            <Row style={{ alignItems: 'center' }}>
              <Col md={6}>
                <P color='#453c67'> Fast and Efficient Service</P>
                <H2 color='black' fontSize='60px' fontWeight='800'>
                  Hommie <br />
                  <span style={{ color: '#06ae5a' }}>
                    Services <br />
                  </span>
                </H2>
              </Col>
              <Col md={6}>
                <img width={'100%'} height={'50%'} src={slider4} />
              </Col>
            </Row>

            {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carasoule;

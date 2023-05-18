import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { H2, P } from './Typography';
import React, { useState, useEffect, useRef } from 'react';
const Wrapper = styled.div`
  background: #d3f1f3;
  padding: ${(props) => (props.padding ? props.padding : '0px')};
`;
const AboutHero = styled.div``;
export default function HeroSection({ page, image, padding, work }) {
  const [mount, setMount] = useState(false);
 
  return (
    <>
      <Wrapper padding={padding}>
        <Row>
          <Col md={6}>
            <div
              style={{ height: '100%', display: 'flex', alignItems: 'center' }}
            >
              <H2
                color='#09150f'
                style={{ textAlign: 'center' }}
                fontSize='50px'
                fontWeight='800'
              >
                {page}
                <span style={{ color: '#06ae5a' }}> Hommie</span>
              </H2>
            </div>
          </Col>
          <Col style={{ display: 'flex', alignItems: 'center' }} md={6}>
            <img width={'100%'} height={'100%'} src={image} />
          </Col>
        </Row>
      </Wrapper>
    </>
  );
}

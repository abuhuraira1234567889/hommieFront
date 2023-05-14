import styled, { css } from 'styled-components';
const Button = styled.button`
  background: #00d05e;
  border: none;
  box-shadow: none;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  height: 60px;
  line-height: 60px;
  outline: none;
  overflow: hidden;
  padding: 0 38px;
  position: relative;
  text-align: center;
  border-radius: 20px;

  :hover {
    opacity: 0.8;
  }
  a {
    color: black;
    text-decoration: none;
    :hover {
      color: black;
    }
  }
`;
export default Button;

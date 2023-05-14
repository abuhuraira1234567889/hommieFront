import styled, { css } from 'styled-components';

const Input = styled.input`
  height: ${(props) => (props.height ? props.height : '64px')};
  width: 100%;
  box-sizing: border-box;
  background: white;
  border: 1px solid grey;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '16px'};
  padding: 15px;
  margin: ${(props) => (props.margin ? props.margin : '10px')};
  color: black;
  margin-left: ${(props) => (props.fright ? 'auto' : 'initial')};
  margin-right: ${(props) => (props.fleft ? 'auto' : 'initial')};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default Input;

import styled from 'styled-components';
export const H2 = styled.h2`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '56px')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '72px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
  color: ${(props) => (props.color ? props.color : 'black')};
  width: 100%;
`;
export const P = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '1.5')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
  color: ${(props) => (props.color ? props.color : 'black')};
  width: 100%;
`;

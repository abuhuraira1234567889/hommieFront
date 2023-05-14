import styled from 'styled-components';

const Spacer = styled.div`
  height: ${(props) => (props.height || '50') + 'px'};
  width: ${(props) => (props.width || '50') + 'px'};
`;

export default Spacer;

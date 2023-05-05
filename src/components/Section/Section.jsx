import PropTypes from 'prop-types';
// import React from 'react';

// import { Container, Title} from './Section.styled'

// export const Section = ({ title, children }) => {
//   return (
//     <Container>
//       <Title>{title}</Title>
//       {children}
//     </Container>
//   );
// };

// Section.propTypes = {
//   title: PropTypes.string.isRequired,
// };

import { Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

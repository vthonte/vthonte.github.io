import React from 'react';
import { Container, Icon, Name } from './styles';
import '../../neostyle.css';

export default function Button({ icon, name, link }) {
  return (
    <Container href={link} target='_blank'>
      {/*<Icon src={icon} />*/}
      <Name className="neo_glass2">{name}</Name>
    </Container>
  );
}

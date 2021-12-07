import React from 'react';
import { Container, Picture, Title, Subtitle } from './styles';
import ProfileCard from '../ProfileCard';

export default function Header({ picture, title, subtitle }) {
  return (
    <Container>

    <ProfileCard></ProfileCard>
    </Container>
  )
}

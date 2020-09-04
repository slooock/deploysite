import React from 'react';
import { GrTwitter } from 'react-icons/gr';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';

import logoImg from '../../asseets/logo.svg';

import { Container } from './styles';

const SignIn: React.FC = () => (
  <>
    <Container>
    <a href="https://www.letras.mus.br/switchfoot/1247525/">
      <h1>Created for a place I've never known</h1>
    </a>
     <span>
       <a href="https://www.linkedin.com/in/slooock/">
        <AiFillLinkedin size={50}/>
      </a>
      <a href="https://github.com/slooock">
        <AiFillGithub size={50}/>
      </a>
      <a href="https://twitter.com/SloooCk">
        <GrTwitter size={50}/>
      </a>
      <a href="https://www.instagram.com/slooock/">
        <AiFillInstagram size={50}/>
      </a>
     </span>
    </Container>
  </>
)

export default SignIn;

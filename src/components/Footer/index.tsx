import React from 'react'

import Container from 'components/Container'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Container>
      <p>
        Desenvolvido por{' '}
        <a href="https://www.linkedin.com/in/jefferson-brandao-dev/">
          Jefferson Brandão
        </a>
      </p>
    </Container>
  </S.Wrapper>
)

export default Footer

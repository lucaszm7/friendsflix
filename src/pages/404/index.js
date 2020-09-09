import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

function Pagina404() {
    //const nome = "Lucas"
    return(
        <>
            <Title>
                Página 404
            </Title>
            {
                //Código JS que eu quiser
            }
        </>
    );
}

export default Pagina404;
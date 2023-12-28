import React from 'react'
import { ClientsWrapper } from './ClientsStyle';
import { Container } from '../../GlobalStyle';
import { myClient } from '../../constants';


const Clients = () => {
  return (
    <ClientsWrapper id='Clients'>
      <Container>
        <h1>Clients</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu scelerisque <br /> accumsan, a vestibulum eget velit.</p>

        <div className='clients'>
          {
            myClient.map((value) => (
              <ul>
                <img src={value.icon} alt="" width="100%" className='client_img' />
              </ul>
            ))
          }
        </div>
      </Container>
    </ClientsWrapper>
  )
}

export default Clients
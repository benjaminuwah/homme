import React from 'react'
import { ClientsWrapper } from './ClientsStyle';
import { Container } from '../../GlobalStyle';
// import { myClient } from '../../constants';
import { client1, client2, client3, client4, client5 } from '../../assets';
import { client6 } from '../../assets/client_images/lndex';


const Clients = () => {
  return (
    <ClientsWrapper id='Clients'>
      <Container>
        <h1>Clients</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu scelerisque <br /> accumsan, a vestibulum eget velit.</p>

        <div className='clients'>
          {/* {
            myClient.map((value) => (
              <ul>
                <img src={value.icon} alt="" width="100%" className='client_img' />
              </ul>
            ))
          } */}
          <img src={client1} alt='client_img' />
          <img src={client2} alt='client_img' />
          <img src={client3} alt='client_img' />
          <img src={client4} alt='client_img' />
          <img src={client5} alt='client_img' />
          <img src={client6} alt='client_img' />
        </div>
      </Container>
    </ClientsWrapper>
  )
}

export default Clients
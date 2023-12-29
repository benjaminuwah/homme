import React from 'react'
import { ClientsWrapper } from './ClientsStyle';
import { Container } from '../../GlobalStyle';
import { myClient } from '../../constants';
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
          <img src={client1} />
          <img src={client2} />
          <img src={client3} />
          <img src={client4} />
          <img src={client5} />
          <img src={client6} />
        </div>
      </Container>
    </ClientsWrapper>
  )
}

export default Clients
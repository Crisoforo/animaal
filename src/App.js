import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import logo from './logo.png';
import './style.css';
import mgnt from './images/aaa_mgnt.png';
import aaa from './images/aaa.png';


function App() {
  return (
    <div>
      <Navbar brand={ <a href='index.html' className="brand-logo"> <img src={ logo } alt='logo' width='150'/></a>} centerLogo alignLinks="right">
        <NavItem href="https://www.instagram.com/animaal.tv/?hl=es">
          Instagram
</NavItem>
        <NavItem href="#contact">
          Contact
</NavItem>
      </Navbar>
    <div className="card">
      <h3>Agencia consultora para el desarrollo musical</h3>
      <img src={aaa} alt='animaal logo'/>
    </div>
    <div className="card">
      <h3>MANAGEMENT BOOKING/ TOURING TALENT BUYERS</h3>
      <img src={aaa} alt='animaal logo'/>
    </div>
    <div className="card">
      <h3>Administración y representación del talento.</h3>
      <img src={aaa} alt='animaal logo'/>
    </div>
    <div className="card">
      <h3>Venta y comercialización del talento.</h3>
      <img src={aaa} alt='animaal logo'/>
    </div>
    <div className="card">
      <h3>Venta y comercialización del talento fuera de su ciudad.</h3>
      <img src={aaa} alt='animaal logo'/>
    </div>
    <div className="cardee">
      <h3>Nos encargamos de comprar y programar artistas y/o conciertos para un foro, marca o festival.</h3>
      <img src={aaa} alt='animaal logo'/>
    </div>
    <div className="cardee">
    <h2>Roster</h2>
      <ul>
        <a href="https://www.instagram.com/animaal.tv/?hl=es"><li>BOB DAZZLA (US)</li></a>
        <a href="https://www.instagram.com/animaal.tv/?hl=es"><li>COLLAPSING SCENERY (US)</li></a>
        <a href="https://www.instagram.com/animaal.tv/?hl=es"><li>JACQUES RENAULT (US)</li></a>
        <a href="https://www.instagram.com/animaal.tv/?hl=es"><li>JUAN SOTO (MX)</li></a>
        <a href="https://www.instagram.com/animaal.tv/?hl=es"><li>JERRY L (MX)</li></a>
        <a href="https://www.instagram.com/animaal.tv/?hl=es"><li>SELF SABOTAGE (MX)</li></a>
        <a href="https://www.instagram.com/animaal.tv/?hl=es"><li>PAURRO (MX)</li></a>
        <a href="https://www.instagram.com/animaal.tv/?hl=es"><li>OM BEACH (MX)</li></a>
        <a href="https://www.instagram.com/animaal.tv/?hl=es"><li>VIDEOCENTRO (MX)</li></a>
      </ul>
      <img src={mgnt} width='40%' alt='management'/>
    </div>
    </div>
  );
}

export default App;

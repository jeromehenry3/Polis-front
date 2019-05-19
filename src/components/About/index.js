import React from 'react';
import BurgerNav from '../../containers/BurgerNav';
import './about.scss';

import Logo from '../../styles/images/logo-saumon.png';
import Clement from '../../styles/images/CLE.png';
import Thomas from '../../styles/images/TOM.png';
import Jerome from '../../styles/images/JER.png';
import Fabien from '../../styles/images/FAB.png';

const About = () => (
  <div id="about">
    <BurgerNav />
    <div className="container">
      <div className="header">
        <img src={Logo} alt="" className="header-logo" />
        <p className="header-accroche">Du grec ancien πόλις la cité</p>
        <p className="header-description">Application de cartographie participative de données architecturales</p>
      </div>
      <div className="main">
        <div className="main-description">La version 1.0 de Polis que vous êtes en train de parcourir a été developpée en 3 semaines. <br />Ce projet valide une formation de 6 mois suivie par 4 aspirants developpeurs dans les salles de cours virtuelles <a href="https://oclock.io/" target="_blank">d'Oclock</a>. Outre le plaisir intense de créer "from scratch" un projet web, cette web app sert également de support au passage du Titre Professionnel de développeur web.
          <div className="main-description-team">
            <span className="cadre-passion">Polis est codé avec passion par :</span>
            <ul>
              <li><span className="team-name"><a href="#clement">Clément Eveillard</a></span>  <span className="team-job">Frontend</span>  <span className="team-role">Product Owner</span></li>
              <li><span className="team-name"><a href="#thomas">Thomas Gilet</a></span>  <span className="team-job">Backend</span>  <span className="team-role">Lead Back</span></li>
              <li><span className="team-name"><a href="#jerome">Jérome Henry</a></span>  <span className="team-job">Frontend</span>  <span className="team-role">Lead Front</span></li>
              <li><span className="team-name"><a href="#fabien">Fabien Mackowiak</a></span>  <span className="team-job">Frontend</span>  <span className="team-role">Project Manager</span></li>
            </ul>
          </div>
          <div className="main-description-techno">
            <span className="cadre-improve">Polis nous a permis de nous améliorer en :</span>
            <ul>
              <li><span className="col-1">HTML/SCSS</span>  <span className="col-2">JS</span>  <span className="col-3">REACT</span></li>
              <li><span className="col-1">PHP</span>  <span className="col-2">SYMFONY</span>  <span className="col-3">REACT-REDUX</span></li>
              <li><span className="col-1">SEMANTIC-UI</span>  <span className="col-2">CIRCLE-CI</span>  <span className="col-3">GITHUB</span></li>
              <li><span className="col-1">OPENSTREETMAP</span>  <span className="col-2">LEAFLET</span>  <span className="col-3">SLACK</span></li>
              <li><span className="col-1">SCRUM</span>  <span className="col-2">SQL</span>  <span className="col-3">UX</span></li>
            </ul>
          </div>
        </div>
        <div className="main-medaillons">
          <h2>Polis c'est :</h2>
          <hr />
          <div id="clement" className="main-medaillons-teamate">
            <img src={Clement} alt=""/>
            <div>
              <span className="teamate-name">Clement Eveillard</span>
              <span className="teamate-email">clement.evd.dev@gmail.com</span>
              <span className="teamate-web"><a href="http://www.koala-websites.fr" target="_blank">site web perso</a></span>
              <span className="teamate-linkedin">
                <a href="https://www.linkedin.com/in/clement-eveillard-%F0%9F%92%BE%F0%9F%85%B3%F0%9F%85%B4%F0%9F%86%85-076b53183/"> Linkedin
                </a>
              </span>
            </div>
          </div>
          <div id="thomas" className="main-medaillons-teamate">
            <img src={Thomas} alt="" />
            <div>
              <span className="teamate-name">Thomas GILLET</span>
              <span className="teamate-email">thomas.gillet44@gmail.com</span>
              <span className="teamate-linkedin">
                <a href="https://www.linkedin.com/in/thomas-gillet-32551317a/"> Linkedin
                </a>
              </span>
            </div>
          </div>
          <div id="jerome" className="main-medaillons-teamate">
            <img src={Jerome} alt="" />
            <div>
              <span className="teamate-name">Jerome Henry</span>
              <span className="teamate-email">jerome.henry3@gmail.com</span>
              <span className="teamate-linkedin">
                <a href="https://www.linkedin.com/in/jerome-henry-dev/"> Linkedin
                </a>
              </span>
            </div>
          </div>
          <div id="fabien" className="main-medaillons-teamate">
            <img src={Fabien} alt="" />
            <div>
              <span className="teamate-name">Fabien Mackowiak</span>
              <span className="teamate-email">fmackodev@gmail.com</span>
              <span className="teamate-web"><a href="https://www.fabienmackowiak.com" target="_blank">site web perso</a></span>
              <span className="teamate-linkedin">
                <a href="www.linkedin.com/in/fabienmacko"> Linkedin
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="main-credits">
          <h3 className="main-credits-title">Crédits</h3>
          <div className="main-credits-liste">
            <p>Map: OpenStreetMap & Leaflet-react</p> 
            <p>Photos: Wikipedia</p>
            <p>Design: Clément Eveillard</p>
            <p>O du logo: Oclock</p>
            <p>Formation: Oclock</p>         
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;

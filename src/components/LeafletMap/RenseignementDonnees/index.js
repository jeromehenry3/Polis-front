/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import Input from '../../Input';
import AppareilPhoto from '../../../styles/images/photo-camera.svg';

import './renseignement.scss';

const RenseignementDonnees = () => {

  return (
    <div className="renseignement-donnees">
      <div className="renseignement-donnees_relative">
        <a href="" className="renseignement-donnees_close">Fermer</a>
        <img src={AppareilPhoto} alt="Appareil" className="renseignement-donnees_appareil" />
        <form action="">
          <div className="renseignement-donnees_primary-infos">
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Nom"
            />

            <Input
              type="number"
              id="surface"
              name="surface"
              placeholder="m²"
            />
          </div>

          <Input
            type="text"
            id="adress"
            name="adress"
            placeholder="Adresse"
          />

          <Input
            type="text"
            id="style"
            name="style"
            placeholder="Style"
          />

          <Input
            type="number"
            id="date"
            name="date"
            placeholder="Année de livraison ou de livraison estimée"
          />

          <Input
            type="text"
            id="architect"
            name="architect"
            placeholder="Architecte"
          />

          <Input
            type="text"
            id="promotor"
            name="promotor"
            placeholder="Promoteur"
          />

          <Input
            type="text"
            id="constructor"
            name="constructor"
            placeholder="Constructeur"
          />

          <Input
            type="text"
            id="amenage"
            name="amenage"
            placeholder="Aménageur"
          />

          <Input
            type="text"
            id="urbanist"
            name="urbanist"
            placeholder="Urbaniste"
          />

          <Input
            type="text"
            id="you-know"
            name="you-know"
            placeholder="Le saviez-vous ?"
          />
        </form>
        <a href="#" className="renseignement-donnees_share">Partager</a>
      </div>
    </div>
  );
};

export default RenseignementDonnees;

/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import Input from '../../Input';
import AppareilPhoto from '../../../styles/images/photo-camera.svg';

import './renseignement.scss';

const RenseignementDonnees = ({
  isDataFormOpen,
  closeDataForm,
  addBuilding,
  updateFormField,
  nameInput,
  surfaceInput,
  adressInput,
  styleInput,
  dateInput,
  architectInput,
  promotorInput,
  constructorInput,
  amenageInput,
  urbanistInput,
  youknowInput,
}) => {
  console.log(updateFormField);
  
  const handleCloseDataForm = (e) => {
    // pourquoi preventDefault() ici? sinon la page se recharge? (clément)
    e.preventDefault();
    console.log('Dataform closed');
    closeDataForm();
  };

  const handleAddBuilding = (e) => {
    // pourquoi preventDefault() ici? (clément)
    e.preventDefault();
    console.log('building added');
    // addBuilding();
  };

  return (
    <div className={isDataFormOpen ? 'renseignement-donnees open' : 'renseignement-donnees'}>
      <div className="renseignement-donnees_relative">
        <a href="" className="renseignement-donnees_close" onClick={handleCloseDataForm}>Fermer</a>
// il faut faire un bouton de l'appareil photo
        <img src={AppareilPhoto} alt="Appareil" className="renseignement-donnees_appareil" />
        <form action="">
          <div className="renseignement-donnees_inputs">
            <div className="renseignement-donnees_primary-infos">
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Nom"
                value={nameInput}
                onChangeFunction={input => updateFormField('nameInput', input)}
              />

              <Input
                type="number"
                id="surface"
                name="surface"
                placeholder="m²"
                value={surfaceInput}
                onChangeFunction={input => updateFormField('surfaceInput', input)}
              />
            </div>

            <Input
              type="text"
              id="adress"
              name="adress"
              placeholder="Adresse"
              value={adressInput}
              onChangeFunction={input => updateFormField('adressInput', input)}
            />

            <Input
              type="text"
              id="style"
              name="style"
              placeholder="Style"
              value={styleInput}
              onChangeFunction={input => updateFormField('styleInput', input)}
            />

            <Input
              type="number"
              id="date"
              name="date"
              placeholder="Année de livraison ou de livraison estimée"
              value={dateInput}
              onChangeFunction={input => updateFormField('dateInput', input)}
            />

            <Input
              type="text"
              id="architect"
              name="architect"
              placeholder="Architecte"
              value={architectInput}
              onChangeFunction={input => updateFormField('architectInput', input)}
            />

            <Input
              type="text"
              id="promotor"
              name="promotor"
              placeholder="Promoteur"
              value={promotorInput}
              onChangeFunction={input => updateFormField('promotorInput', input)}
            />

            <Input
              type="text"
              id="constructor"
              name="constructor"
              placeholder="Constructeur"
              value={constructorInput}
              onChangeFunction={input => updateFormField('constructorInput', input)}
            />

            <Input
              type="text"
              id="amenage"
              name="amenage"
              placeholder="Aménageur"
              value={amenageInput}
              onChangeFunction={input => updateFormField('amenageInput', input)}
            />

            <Input
              type="text"
              id="urbanist"
              name="urbanist"
              placeholder="Urbaniste"
              value={urbanistInput}
              onChangeFunction={input => updateFormField('urbanistInput', input)}
            />

            <Input
              type="text"
              id="youknow"
              name="youknow"
              placeholder="Le saviez-vous ?"
              value={youknowInput}
              onChangeFunction={input => updateFormField('youknowInput', input)}
            />

          </div>
          <div className="renseignement-donnees_submit">
            <button type="submit" className="form-button" onClick={handleAddBuilding}>Ajouter</button>
          </div>
        </form>
        <a href="#" className="renseignement-donnees_share">Partager</a>
      </div>
    </div>
  );
};

export default RenseignementDonnees;

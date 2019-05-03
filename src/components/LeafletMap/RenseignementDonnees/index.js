/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Loader } from 'semantic-ui-react';
import Input from '../../Input';
import AppareilPhoto from '../../../styles/images/photo-camera.svg';

import './renseignement.scss';

const RenseignementDonnees = ({
  isDataFormOpen,
  closeDataForm,
  submitBuilding,
  updateFormField,
  nameInput,
  surfaceInput,
  addressInput,
  styleInput,
  dateInput,
  architectInput,
  promotorInput,
  constructorInput,
  amenageInput,
  urbanistInput,
  youknowInput,
  loading,
}) => {

  const handleCloseDataForm = (e) => {
    e.preventDefault();
    console.log('Dataform closed');
    closeDataForm();
  };

  const handleSubmitBuilding = (e) => {
    e.preventDefault();
    console.log('submitting building');
    submitBuilding();
  };

  return (
    <div className={isDataFormOpen ? 'renseignement-donnees open' : 'renseignement-donnees'}>
      <div className="renseignement-donnees_relative">
        <a href="#" className="renseignement-donnees_close" onClick={handleCloseDataForm}>Fermer</a>
        <label htmlFor="picture-building"><img src={AppareilPhoto} alt="Appareil" className="renseignement-donnees_appareil" /></label>
        <input type="file" id="picture-building" className="inputfile" />
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

            <div className="renseignement-donnees_address-container">
              <Dimmer active={loading} inverted>
                <Loader inverted />
              </Dimmer>
              <Input
                type="text"
                id={loading ? 'addressloading' : 'address'}
                name="address"
                placeholder="Adresse"
                value={addressInput}
                onChangeFunction={input => updateFormField('addressInput', input)}
              />
            </div>

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
            <button type="submit" className="form-button" onClick={handleSubmitBuilding}>Ajouter</button>
          </div>
        </form>
        <a href="#" className="renseignement-donnees_share">Partager</a>
      </div>
    </div>
  );
};

RenseignementDonnees.propTypes = {
  addBuilding: PropTypes.func.isRequired,
  addressInput: PropTypes.string.isRequired,
  amenageInput: PropTypes.string.isRequired,
  architectInput: PropTypes.string.isRequired,
  closeDataForm: PropTypes.func.isRequired,
  constructorInput: PropTypes.string.isRequired,
  dateInput: PropTypes.string.isRequired,
  isDataFormOpen: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  nameInput: PropTypes.string.isRequired,
  promotorInput: PropTypes.string.isRequired,
  styleInput: PropTypes.string.isRequired,
  surfaceInput: PropTypes.string.isRequired,
  updateFormField: PropTypes.func.isRequired,
  urbanistInput: PropTypes.string.isRequired,
  youknowInput: PropTypes.string.isRequired,
};

export default RenseignementDonnees;

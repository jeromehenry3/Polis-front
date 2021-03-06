/* eslint-disable radix */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimmer, Loader, List,
} from 'semantic-ui-react';
import Input from '../../Input';
import AppareilPhoto from '../../../styles/images/photo-camera.svg';
import './renseignement.scss';

const RenseignementDonnees = ({
  isDataFormOpen,
  closeAllModals,
  submitBuilding,
  updateFormField,
  nameInput,
  surfaceInput,
  addressInput,
  dateInput,
  architectInput,
  promoterInput,
  builderInput,
  plannerInput,
  urbanistInput,
  descriptionInput,
  loading,
  architectures,
  fileText,
  findAddress,
  resetFormBuilding,
}) => {
  const handleCloseDataForm = (e) => {
    e.preventDefault();
    resetFormBuilding();
    closeAllModals();
  };

  const handleSelectChange = (e) => {
    updateFormField('architectureInput', parseInt(e.target.value));
  };

  const handleFileChange = (e) => {
    if (e.target.files[0].type !== 'image/png' && e.target.files[0].type !== 'image/jpeg') {
      updateFormField('fileText', 'Formats acceptés: JPG, PNG');
    } else {
      updateFormField('fileText', e.target.files[0].name);
    }
    const readFile = () => {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        updateFormField('fileInput', reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    };

    if (readFile) {
      readFile(e.target.files[0]);
    }
  };

  const handleSubmitBuilding = (e) => {
    e.preventDefault();
    closeAllModals();
    submitBuilding();
  };

  const handleBlur = (e) => {
    findAddress();
  };

  return (
    <div className={isDataFormOpen ? 'renseignement-donnees open' : 'renseignement-donnees'}>
      <div className="renseignement-donnees_relative">
        <a href="#" className="renseignement-donnees_close" onClick={handleCloseDataForm}>Fermer</a>
        <div className="renseignement-donnees_files">
          <label htmlFor="picture-building"><img src={AppareilPhoto} alt="Appareil" className="renseignement-donnees_appareil" /></label>
          <input type="file" id="picture-building" className="inputfile" onChange={handleFileChange} accept="image/*" />
          <List>
            <List.Item>{fileText}</List.Item>
          </List>
        </div>
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
                disabled={false}
              />

              <Input
                type="number"
                id="surface"
                name="surface"
                placeholder="m²"
                value={surfaceInput}
                onChangeFunction={input => updateFormField('surfaceInput', input)}
                disabled={false}
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
                onBlur={handleBlur}
                onChangeFunction={input => updateFormField('addressInput', input)}
                disabled={false}
                required
              />
            </div>
            <div className="renseignement-donnees_secondary-infos">
              <div className="input-container">
                <select
                  id="style"
                  name="style"
                  className="input select-style"
                  onChange={handleSelectChange}
                  onFocus={(event) => {
                    event.target.classList.add('open');
                  }}
                >
                  <option value={0} defaultValue>-- Style Architectural --</option>
                  {
                    architectures.map(architecture => (
                      <option key={architecture.id} value={architecture.id}>{architecture.name}</option>
                    ))
                  }
                </select>
                <label htmlFor="style">Style</label>
              </div>

              <div className="input-container">
                <input
                  className="input"
                  type="number"
                  min="1900"
                  max="2099"
                  step="1"
                  value={dateInput}
                  id="date"
                  name="date"
                  placeholder="Année de livraison ou de livraison estimée"
                  onChange={(e) => {
                    updateFormField('dateInput', e.target.value);
                  }}
                  onFocus={(event) => {
                    event.target.classList.add('open');
                  }}
                />
                <label htmlFor="date">Date</label>
              </div>
            </div>
            <Input
              type="text"
              id="architect"
              name="architect"
              placeholder="Architecte"
              value={architectInput}
              onChangeFunction={input => updateFormField('architectInput', input)}
              disabled={false}
            />

            <Input
              type="text"
              id="promoter"
              name="promoter"
              placeholder="Promoteur"
              value={promoterInput}
              onChangeFunction={input => updateFormField('promoterInput', input)}
              disabled={false}
            />

            <Input
              type="text"
              id="builder"
              name="builder"
              placeholder="Constructeur"
              value={builderInput}
              onChangeFunction={input => updateFormField('builderInput', input)}
              disabled={false}
            />

            <Input
              type="text"
              id="planner"
              name="planner"
              placeholder="Aménageur"
              value={plannerInput}
              onChangeFunction={input => updateFormField('plannerInput', input)}
              disabled={false}
            />

            <Input
              type="text"
              id="urbanist"
              name="urbanist"
              placeholder="Urbaniste"
              value={urbanistInput}
              onChangeFunction={input => updateFormField('urbanistInput', input)}
              disabled={false}
            />

            <Input
              type="text"
              id="description"
              name="description"
              placeholder="Le saviez-vous ?"
              value={descriptionInput}
              onChangeFunction={input => updateFormField('descriptionInput', input)}
              disabled={false}
            />

          </div>
          {
            addressInput !== "Impossible de trouver l'adresse" && (
            <div className="renseignement-donnees_submit invisible-mobile">
              <button type="submit" className="form-button" onClick={handleSubmitBuilding}>Ajouter</button>
            </div>
            )
          }
        </form>
        {
          addressInput !== "Impossible de trouver l'adresse" && (
            <div className="footer-mobile">
              <a href="#" className="invisible-desktop btn-submit-mobile" onClick={handleSubmitBuilding}>Ajouter</a>
            </div>
          )
        }
      </div>
    </div>
  );
};

RenseignementDonnees.propTypes = {
  submitBuilding: PropTypes.func.isRequired,
  closeAllModals: PropTypes.func.isRequired,
  addressInput: PropTypes.string.isRequired,
  plannerInput: PropTypes.string.isRequired,
  architectInput: PropTypes.string.isRequired,
  builderInput: PropTypes.string.isRequired,
  dateInput: PropTypes.string.isRequired,
  isDataFormOpen: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  nameInput: PropTypes.string.isRequired,
  promoterInput: PropTypes.string.isRequired,
  surfaceInput: PropTypes.string.isRequired,
  updateFormField: PropTypes.func.isRequired,
  urbanistInput: PropTypes.string.isRequired,
  descriptionInput: PropTypes.string.isRequired,
  architectures: PropTypes.array.isRequired,
  fileText: PropTypes.string.isRequired,
  findAddress: PropTypes.func.isRequired,
  resetFormBuilding: PropTypes.func.isRequired,
};

export default RenseignementDonnees;

import React, { Component } from 'react';
import SearchBox from '@/components/custom/common/SearchBox';
import AdherentSearchMapper from '../../mappers/adherent/AdherentSearchMapper';

class AdherentSearchForm extends Component {
  hintMessage = {
    message: 'Pour rechercher un assuré veuilez saisir soit :',
    options: [
      'Catégorie, Num Contrat, Matricule',
      'Catégorie, Num Contrat , N° Assuré',
      'Catégorie, Num Contrat, Nom Assuré ',
      'N° Assuré',
    ],
  };

  render() {
    const { onSearch } = this.props;
    return (
      <SearchBox
        layout="horizontal"
        onSearch={onSearch}
        hintMessage={this.hintMessage}
        searchMapper={AdherentSearchMapper}
      />
    );
  }
}

export default AdherentSearchForm;

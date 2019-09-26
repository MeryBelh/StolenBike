import React, { Component } from 'react';
import SearchBox from '../../../../components/custom/common/SearchBox';
import { contratSearchMapper } from '../../../../mappers/contratMapper';

class SearchContratsForm extends Component {
  hintMessage = {
    message: 'Pour rechercher une contrat veuilez saisir',
    options: [
      'Catégorie, Num Contrat',
      'Catégorie, Num Contrat , Nom Client',
      'Catégorie, Nom Client',
    ],
  };

  render() {
    const { onSearch } = this.props;

    return (
      <SearchBox
        onSearch={onSearch}
        expand
        hintMessage={this.hintMessage}
        searchMapper={contratSearchMapper}
      />
    );
  }
}

export default SearchContratsForm;

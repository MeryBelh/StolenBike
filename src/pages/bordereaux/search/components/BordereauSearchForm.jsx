import React, { Component } from 'react';
import { Input } from 'antd';
import SearchBox from '../../../../components/custom/common/SearchBox';
import { bordereauSearchMapper } from '@/pages/bordereaux/search/mapper';

class BordereauSearchForm extends Component {
  hintMessage = {
    message: 'Pour rechercher un bordereau veuilez saisir soit :',
    options: ['Identifiant', 'Catégorie, Num Contrat , Date Cahcet'],
  };

  handleSearch = values => {
    const { onSearch } = this.props;
    onSearch(values);
  };

  render() {
    return (
      <SearchBox
        layout="horizontal"
        onSearch={this.handleSearch}
        hintMessage={this.hintMessage}
        searchMapper={bordereauSearchMapper}
      />
    );
  }
}

export default BordereauSearchForm;

import React, { Component } from 'react';
import { connect } from 'dva';
import SearchBox from '../../../components/custom/common/SearchBox';
import { adherentSearchMapper } from './mapper';

class ClassAdherentsList extends Component {
  hintMessage = {
    message: 'Pour rechercher la liste des adhérents veuilez saisir',
    options: ['Catégorie, Num Contrat'],
  };

  handleSearch = values => {
    const { dispatch } = this.props;
    dispatch({
      type: 'adherentsList/fetchAssures',
      payload: values,
    });
  };

  render() {
    return (
      <div>
        <h1>liste des adhérents</h1>
        <SearchBox
          layout="horizontal"
          onSearch={this.handleSearch}
          hintMessage={this.hintMessage}
          textButton="Télécharger"
          searchMapper={adherentSearchMapper}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ adherentsList }) => ({
  prestations: adherentsList.prestations,
});

export default connect(mapStateToProps)(ClassAdherentsList);

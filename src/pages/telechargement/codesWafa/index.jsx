import React, { Component } from 'react';
import SearchBox from '../../../components/custom/common/SearchBox';
import { codesWafaMapper } from './mapper';
import { connect } from 'dva';
import AddReclamationPage from '../../reclamations/add/components/AddReclamationPage';

class CodesWafa extends Component {
  hintMessage = {
    message: 'Pour rechercher les codes wafa santé veuilez saisir',
    options: ['Catégorie, Num Contrat'],
  };

  handleSearch = values => {
    const { dispatch } = this.props;
    dispatch({
      type: 'codesWafa/CleActivation',
      payload: values,
    });
  };

  render() {
    return (
      <div>
        <h1>Code Wafa Santé</h1>
        <SearchBox
          layout="horizontal"
          onSearch={this.handleSearch}
          hintMessage={this.hintMessage}
          searchMapper={codesWafaMapper}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ codesWafa }) => ({});

export default connect(mapStateToProps)(CodesWafa);

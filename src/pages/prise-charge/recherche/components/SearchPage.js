import React from 'react';
// import { Link } from 'react-router-dom';

import SearchForm from '@/pages/prise-charge/recherche/components/SearchForm';
import DataTable from '@//components/custom/common/DataTable';
import { pecSearchMapper } from '@/pages/prise-charge/recherche/mapper';

class SearchPage extends React.Component {
  formData = {};

  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'pecSearch/fetchPecStatus' });
  };

  onSearchSubmit = values => {
    // Change periode to dateSaisieDebut, dateSaisieFin
    const { periode, ...formData } = values;
    if (periode) {
      formData.dateSaisieDebut = periode[0].format('DD/MM/YYYY');
      formData.dateSaisieFin = periode[1].format('DD/MM/YYYY');
    }
    this.formData = formData;
    this.fetchPecs();
  };

  fetchPecs = (frontPagination = {}) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'pecSearch/fetchPecs',
      formData: this.formData,
      frontPagination,
    });
  };

  injectPecStatutsToMapper = pecStatuts => {
    if (pecStatuts) {
      pecSearchMapper[5].options = pecStatuts;
    }
    return pecSearchMapper;
  };

  render() {
    const { pecs, pecStatuts } = this.props;

    return (
      <>
        <SearchForm
          onSearchSubmit={this.onSearchSubmit}
          pecSearchMapper={this.injectPecStatutsToMapper(pecStatuts)}
        />
        <br />
        <DataTable dataSource={pecs} onChange={this.fetchPecs} />
      </>
    );
  }
}

export default SearchPage;

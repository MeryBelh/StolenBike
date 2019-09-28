import React, { Component } from 'react';
import DataTable from '../../../../components/custom/common/DataTable';

class StolenBikeCasePage extends Component {
  model = 'stolenBikeCases';
componentDidMount() {
    this.fetchData();
  }

  fetchData = (frontPagination = {}) => {
    const {
      dispatch,
      match: {
        params: { numero },
      },
    } = this.props;
    dispatch({ type: `${this.model}/fetchStolenBikeCases`, payload: { numero, frontPagination } });
  };

  render() {
    const {
      stolenBikeCase,
      match: {
        params: { numero },
      },
    } = this.props;

    return (
      <div>
        <h1> Stolen Bike Cases : {numero} </h1>
        {<DataTable dataSource={stolenBikeCase} onChange={this.fetchData} />}
      </div>
    );
  }
}
export default StolenBikeCasePage;

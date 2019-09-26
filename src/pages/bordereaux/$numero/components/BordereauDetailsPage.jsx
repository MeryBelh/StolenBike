import React, { Component } from 'react';
import DataTable from '../../../../components/custom/common/DataTable';

class BordereauDetailsPage extends Component {
  model = 'bordereauDetails';
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
    dispatch({ type: `${this.model}/fetchDeclarations`, payload: { numero, frontPagination } });
  };

  render() {
    const {
      declarations,
      match: {
        params: { numero },
      },
    } = this.props;

    return (
      <div>
        <h1> Bordereau : {numero} </h1>
        <DataTable dataSource={declarations} onChange={this.fetchData} />
      </div>
    );
  }
}
export default BordereauDetailsPage;

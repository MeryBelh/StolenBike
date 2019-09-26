import React, { Component } from 'react';
import { Tabs } from 'antd';
import DataTable from '../../../../components/custom/common/DataTable';
import AdherentDescription from './AdherentDescription';
import { getAuthority } from '../../../../utils/authority';
const { TabPane } = Tabs;

class AdherentDetailsPage extends Component {
  model = 'adherentDetails';

  componentDidMount() {
    this.fetchData('fetchBeneficiaires');
    this.fetchData('fetchAdherentHistoriques');
    this.fetchData('fetchAdherent');
  }

  fetchData = (effect, frontPagination = {}) => {
    const {
      dispatch,
      match: {
        params: { numero },
      },
    } = this.props;
    dispatch({ type: `${this.model}/${effect}`, payload: { numero, frontPagination } });
  };

  render() {
    const {
      beneficiaires,
      adherentHistoriques,
      adherent,
      match: {
        params: { numero },
      },
    } = this.props;

    console.log('adherent', adherent);
    const adherentDetails = adherent ? (adherent.content ? adherent.content[0] : {}) : {};
    console.log('adherent', adherentDetails);
    return (
      <div>
        <h1>
          {' '}
          {adherentDetails.nomAdherent} N° : {numero}{' '}
        </h1>
        <Tabs defaultActiveKey="1">
          {getAuthority().includes('ROLE_SANTE_PRESTATAIRE') ? null : (
            <TabPane tab="Assuré Details" key="1">
              <AdherentDescription adherent={adherentDetails} />
            </TabPane>
          )}
          <TabPane tab="Beneficiaires" key="2">
            <DataTable
              dataSource={beneficiaires}
              onChange={pagination => this.fetchData('fetchBeneficiaires', pagination)}
            />
          </TabPane>

          {getAuthority().includes('ROLE_SANTE_PRESTATAIRE') ? null : (
            <TabPane tab="Assuré Historiques" key="3">
              <DataTable
                dataSource={adherentHistoriques}
                onChange={pagination => this.fetchData('fetchAdherentHistoriques', pagination)}
              />
            </TabPane>
          )}
        </Tabs>
      </div>
    );
  }
}

export default AdherentDetailsPage;

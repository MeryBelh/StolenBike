import React, { Component } from 'react';
import { connect } from 'dva';
import { Button, Col, Form, Input, Row } from 'antd';
import SearchHint from '../../../components/custom/common/SearchHint';
import MoroccanDatePicker from '../../../components/custom/common/MoroccanDatePicker';
import { applyPolicy } from '../../../utils/utils';
const { Item } = Form;

@Form.create()
class DecomptesSearch extends Component {
  hintMessage = {
    message: 'Pour rechercher les décomptes veuilez saisir',
    options: ['Catégorie, Num Contrat, date Décompte'],
  };

  handleSearch = event => {
    event.preventDefault();

    const {
      form: { validateFields },
    } = this.props;
    validateFields((err, values) => {
      if (!err) {
        const { dispatch } = this.props;
        dispatch({
          type: 'decomptes/fetchEditCompte',
          payload: values,
        });
      }
    });
  };

  render() {
    // return (
    //   <SearchBox
    //     layout="horizontal"
    //     onSearch={this.handleSearch}
    //     hintMessage={this.hintMessage}
    //     textButton="Télécharger"
    //     searchMapper={decomptesMapper}
    //   />
    //
    //
    // );

    const decomptesMapper = applyPolicy([
      { name: 'categorie', label: 'Catégorie', rules: [{ required: true }] },
      { name: 'numContrat', label: 'N° Contrat', rules: [{ required: true }] },
      { name: 'dateDecompte', label: 'Date Décompte', rules: [{ required: true }] },
    ]);

    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Form
        style={{
          padding: '24px',
          background: '#fbfbfb',
          border: '1px solid #d9d9d9',
          borderRadius: '6px',
        }}
        onSubmit={this.handleSearch}
      >
        <Row gutter={24}>
          <Col span={8}>
            <Item label="Catégorie">
              {getFieldDecorator('categorie', {
                rules: [
                  {
                    required: true,
                    message: 'veuillez saisir',
                  },
                ],
              })(<Input />)}
            </Item>
          </Col>
          <Col span={8}>
            <Item label="N° Contrat">
              {getFieldDecorator('numContrat', {
                rules: [
                  {
                    required: true,
                    message: 'veuillez saisir',
                  },
                ],
              })(<Input />)}
            </Item>
          </Col>
          <Col span={8}>
            <Item label="Date Décompte">
              {getFieldDecorator('dateDecompte', {
                rules: [
                  {
                    required: true,
                    message: 'veuillez saisir',
                  },
                ],
              })(<MoroccanDatePicker />)}
            </Item>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <SearchHint data={this.hintMessage}>
              <Button type="primary" htmlType="submit">
                Lancer la recherche
              </Button>
            </SearchHint>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              Effacer
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

const mapStateToProps = ({ adherentsList }) => ({
  compte: adherentsList,
});

export default connect(mapStateToProps)(DecomptesSearch);

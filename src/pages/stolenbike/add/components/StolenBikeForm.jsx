import React, { Component } from 'react';
import { Form } from 'antd';
import Page from '../../../../components/Page';
import styled from '@emotion/styled';
import { Button, Col, Input, Row, Select, DatePicker } from 'antd';
import router from 'umi/router';


const { Item } = Form;
const { TextArea } = Input;
const { Option } = Select;

@Form.create()
export default class StolenBikeForm extends Component {
    values = {};

    handleSubmit = e => {
        e.preventDefault();
        const {
          form: { validateFields },
        } = this.props;
    
        validateFields((err, values) => {
          if (!err) {
            const { dispatch } = this.props;
            dispatch({
              type: 'stolenBikes/add',
              payload: {
                ...values,
              },
            });
            router.push(`/`);
          }
        });
      };

    render() {
        const {
            form: { getFieldDecorator },
          } = this.props;

          
        return (
          <Page inner>
           <h3>Report your stolen bike : </h3>

           <Form  onSubmit={this.handleSubmit}>
           <Bloc>
                <Row>
                    <Col span={12}>
                    <Item label="Model">
                        {getFieldDecorator('model', {
                        rules: [
                            {
                            required: true,
                            message: 'model is required',
                            },
                        ],
                        })(<Input />)}
                    </Item>
                    </Col>
                    <Col span={12}>
                    <Item label="Color">
                        {getFieldDecorator('color', {
                        rules: [],
                        })(<Input />)}
                    </Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                    <Item label="Frame Number">
                        {getFieldDecorator('frameNumber', {
                        rules: [
                            {
                            required: true,
                            message: 'frameNumber is required',
                            },
                        ],
                        })(<Input />)}
                    </Item>
                    </Col>
                    <Col span={12}>
                    <Item label="city">
                        {getFieldDecorator('city', {
                        rules: [],
                        })(<Input />)}
                    </Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                    <Item label="Stolen Date">
                        {getFieldDecorator('stolenDate', {
                        rules: [],
                        })(<DatePicker />)}
                    </Item>
                    </Col>
                    <Col span={12}>
                    <Item label="Description">
                        {getFieldDecorator('description', {
                        rules: [],
                        })(<Input />)}
                    </Item>
                    </Col>
                </Row>
                <Item>
                    <Button type="primary" htmlType="submit">
                        Enregistrer
                    </Button>
                </Item>
                </Bloc>               
               </Form>
          </Page>
        );
      }

};


const Bloc = styled.div`
  padding: 10px;
  border: 1px solid #afafb1;
  border-radius: 4px;
  margin-top: 40px;
  .estimationHeader {
    text-align: right;
    margin-bottom: 15px;
    button {
      margin-left: 8px;
    }
  }
  .textRight {
    text-align: right;
  }
`;
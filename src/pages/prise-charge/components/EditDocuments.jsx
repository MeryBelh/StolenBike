import React, { Component } from 'react';
import { Button, Form } from 'antd';
import UploadFiles from '../../../components/custom/common/UploadFiles';

const { Item } = Form;

@Form.create()
class EditDocuments extends Component {
  handleSubmit = event => {
    event.preventDefault()
    const {
      form: { validateFields },
    } = this.props;
    validateFields((err, values) => {
      if (!err) this.editDocuments(values);
    });
  };

  editDocuments = values => {
    const { pec, dispatch, refreshData } = this.props;
    dispatch({ type: 'editPec/editDocuments', payload: { pec, values } });
    if (refreshData) refreshData();
  };

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Item>
          {getFieldDecorator('files', {
            rules: [
              {
                required: false,
                message: 'veuillez saisir ',
              },
            ],
          })(<UploadFiles />)}
        </Item>
        <div>
          <Button type="primary" htmlType="submit">
            Modifier
          </Button>
        </div>
      </Form>
    );
  }
}

export default EditDocuments;

import React, { Component } from 'react';
import { Form, Modal, Input } from 'antd';
const { Item } = Form;
const { TextArea } = Input

@Form.create()
class ConfirmPecReject extends Component {
  handleSubmit = () => {
    // event.preventDefault()
    const {
      form: { validateFields },
      rejectPec
    } = this.props;
    validateFields((err, values) => {
      if (!err) {
        const { motif } = values
        rejectPec(motif)
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
      visible,
      hideRejectPecModal
    } = this.props;
    return (
      <Modal title="" visible={visible} onOk={this.handleSubmit} onCancel={hideRejectPecModal}>
        <Form>
          <h4>Etes vous sûr de vouloir rejeter cette demande</h4>
          <Item>
            {getFieldDecorator('motif', {
              rules: [
                {
                  required: true,
                  message: 'veuillez saisir ',
                },
              ],
            })(<TextArea rows={4} placeholder="Ecrire votre motif" />)}
          </Item>
        </Form>
      </Modal>
    );
  }
}

export default ConfirmPecReject;

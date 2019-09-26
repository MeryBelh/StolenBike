import React from 'react';
import { Input } from 'antd';
import AddForm from '@/components/custom/common/AddForm';

class AddReclamationForm extends React.Component {
  handleSave = values => {
    const { onSave } = this.props;
    onSave(values);
  };

  render() {
    const { numeroDeclaration } = this.props;

    return (
      <AddForm layout="vertical" onSave={this.handleSave}>
        <Input
          value={numeroDeclaration}
          label="Numéro Déclaration"
          name="numeroDeclaraion"
          required
          disabled={numeroDeclaration}
        />
        <Input.TextArea type="textarea" label="Commentaire" name="commentaire" required />
      </AddForm>
    );
  }
}

export default AddReclamationForm;

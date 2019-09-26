import React, { Component } from 'react';
import AddReclamationForm from './AddReclamationForm';

class AddReclamationPage extends Component {
  handleSave = values => {
    const { dispatch } = this.props;
    dispatch({ type: 'reclamations/saveReclamation', payload: values });
  };

  render() {
    const { numeroDeclaration } = this.props;
    return <AddReclamationForm onSave={this.handleSave} numeroDeclaration={numeroDeclaration}  />;
  }
}

export default AddReclamationPage;

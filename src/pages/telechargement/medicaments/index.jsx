import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MedicamentsListDownloader extends Component {
  render() {
    return (
      <React.Fragment>
        si le téléchargement ne démarre pas cliquez
        <Link to="/Guide_LISTE_Plusde2000.xlsx">ici</Link>
      </React.Fragment>
    );
  }
}

export default MedicamentsListDownloader;

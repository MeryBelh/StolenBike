import { Descriptions } from 'antd';
import React from 'react';
const { Item } = Descriptions;

const BeneficiaireView = ({ adherent, beneficiaire, contrat: { nomClient }, title,  showContact }) => {
  const {
    categorie,
    numeroContrat,
    numeroAdherent,
    dateEmbauche,
    nomAdherent,
    cin,
    telephone,
    email,
  } = adherent;



  const { nomBeneficiaire, numeroBeneficiaire } = beneficiaire;
  return (
    <Descriptions bordered title={`${ title || "Le detail de l'assuré et le bénéficiaire"}`}>
      <Item label="N° Police">{`${categorie}/${numeroContrat}`}</Item>
      <Item label="Raison sociale">{nomClient}</Item>
      <Item label="N° affiliation">{numeroAdherent}</Item>
      <Item label="Date demande:">{dateEmbauche}</Item>
      <Item label="Assuré Prénom & Nom:">{nomAdherent}</Item>
      <Item label="Bénéficiare Prénom & Nom">{nomBeneficiaire}</Item>
      <Item label="Rang">{numeroBeneficiaire}</Item>
      <Item label="N° CIN">{cin}</Item>
      { showContact && <Item label="téléphone">{telephone}</Item>}
      { showContact && <Item label="Email">{email}</Item>}



    </Descriptions>
  );
};

export default BeneficiaireView;

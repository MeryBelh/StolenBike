import mockjs from 'mockjs';

const primes = mockjs.mock({
  'content|100': [
    {
      'categorie|1-10': 0,
      codeIntermediaire: 'codeIntermediaire',
      commentaire: 'ras',
      commentaireBackOffice: 'ras',
      dateSaisie: '11/08/2018',
      dateTraitement: '13/09/2018',
      destinataire: 'destinataire',
      emetteur: 'emetteur',
      'etatId|1-5': 0,
      'id|1-100': 0,
      nomAdherent: 'john doe',
      notif: 'retard paiement',
      'numeroAdherent|1-50': 0,
      numeroClient: 'client 123',
      'numeroContrat|1-5': 0,
      'numeroDeclaraion|1-50': 0,
      typeDocument: 'normal',
      typeEmetteur: 'emetteur',
    },
  ],
});

export default {
  'POST /mock/reclamations': primes,
};

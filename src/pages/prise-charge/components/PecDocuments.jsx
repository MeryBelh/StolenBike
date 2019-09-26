import React from 'react';

const PecDocuments = ({ links }) => {
  return (
    <>
      <h3> Documents : </h3>
      <ul>
        {
          links.map((link, index)=><li key={index}><p>{link.label}</p><a href={link.href}>{link.text}</a></li>)
        }
      </ul>
    </>
  );
};

export default PecDocuments;

import React from 'react';
import ErrorTemplate from '../../templates/ErrorTemplate';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
  return (
    <ErrorTemplate message="Désolé, la page que vous recherchez n'existe pas.">
      <Link to="/">Retourner à l'Accueil</Link>
    </ErrorTemplate>
  );
}

export default ErrorPage;

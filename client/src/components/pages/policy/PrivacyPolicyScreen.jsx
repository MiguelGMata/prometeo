import React from 'react';
import './privacyPolicy.css';

const PrivacyPolicyScreen = () => {
  return (
    <main className="privacy-policy">
      <h1>Politique de Confidentialité</h1>
      <p>Date : 28/10/2024</p>
      <p>
        Relativement à ses activités, Prométéo est amené à traiter des données à caractère personnel vous concernant.
        A ces fins, nous nous engageons à respecter les réglementations en vigueur concernant la protection des données à
        caractère personnel, soit la loi informatique et libertés n°78-17 du 6 janvier 1978, ainsi que le Règlement
        (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016.
      </p>
      <h2>I. CONTACTS</h2>
      <h3>a. RESPONSABLE DU TRAITEMENT</h3>
      <p>
        Le responsable des traitements relatifs aux données à caractère personnel est l’établissement public Prométéo,
        73 avenue de Paris – 94 165 Saint-Mandé CEDEX, représenté par sa Présidente-directrice générale, Madame Virginie
        SCHWARZ.
      </p>
      <p>
        Pour toute question relative au traitement de vos données personnelles, vous pouvez contacter le responsable du
        traitement à l’adresse électronique suivante : <a href="mailto:dpo@meteo.fr">contact@prometeo.fr</a>
      </p>
      <h3>b. DÉLÉGUÉ A LA PROTECTION DES DONNÉES</h3>
      <p>
        Le Délégué à la Protection des Données personnelles au sein de Prométéo est Monsieur Emmanuel LEGRAND. Pour
        toute question relative au traitement de vos données personnelles, vous pouvez entrer en contact avec lui à
        l’adresse électronique suivante : <a href="mailto:dpo@meteo.fr">contact@prometeo.fr</a>
      </p>
      <h2>II. DONNÉES RECUEILLIES ET CIRCONSTANCES DE LA COLLECTE</h2>
      <h3>a. Données personnelles collectées et traitées sur les sites Internet de prévisions</h3>
      <p>
        L’utilisation des sites Internet des prévisions peut générer le traitement et la collecte des données personnelles
        suivantes : Adresse IP, lors de la navigation lors de l'utilisation des sites Internet de prévisions.
      </p>
      <h3>b. Exclusion des Données sensibles</h3>
      <p>
        Dans le cadre de son activité, Prométéo garantit ne traiter aucune donnée sensible. Sont considérées comme
        données sensibles au sens du RGPD les données qui révèlent l'origine raciale ou ethnique, les opinions politiques,
        les convictions religieuses ou philosophiques ou l'appartenance syndicale, ainsi que le traitement des données
        génétiques, des données biométriques aux fins d'identifier une personne physique de manière unique, des données
        concernant la santé ou des données concernant la vie sexuelle ou l'orientation sexuelle d'une personne physique.
      </p>
      <h2>III. FINALITÉS & DUREES DE CONSERVATION</h2>
      <table>
        <thead>
          <tr>
            <th>Catégorie</th>
            <th>Finalités</th>
            <th>Durée de conservation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cookies</td>
            <td>Fonctionnement et amélioration du site et des services</td>
            <td>13 mois</td>
          </tr>
          <tr>
            <td>Cookies</td>
            <td>Mesures d’audience</td>
            <td>13 mois</td>
          </tr>
          <tr>
            <td>Cookies</td>
            <td>Publicités ciblées (Pour Sites de Prévisions uniquement)</td>
            <td>13 mois</td>
          </tr>
          <tr>
            <td>Adresse IP</td>
            <td>Maintenance et supervision informatique de la plateforme d'alimentation</td>
            <td>2 jours</td>
          </tr>
          <tr>
            <td>Adresse IP</td>
            <td>Maintenance et supervision informatique du site Internet</td>
            <td>2 jours</td>
          </tr>
        </tbody>
      </table>
      <h2>IV. ACCÈS</h2>
      <h3>a. Accès aux Données personnelles au sein de Prométéo</h3>
      <p>
        Différentes personnes et/ou entités travaillant au sein de Prométéopeuvent avoir accès à vos données
        personnelles dans le cadre de leurs missions professionnelles.
      </p>
      <h3>b. Transmission des Données personnelles en cas de Sous-traitance</h3>
      <p>
        Prométéo est susceptible de sous-traiter certains traitements relatifs à vos données personnelles. Dans de
        telles circonstances, l’établissement s’engage à soumettre les éventuels sous-traitants à la politique de
        confidentialité de Prométéo.
      </p>

      <h2>VIII. COOKIES</h2>
      <p>
        Pour toutes les informations relatives à l'utilisation des cookies par Prométéo, vous pouvez consulter la
        page sur la gestion des cookies.
      </p>
    </main>
  );
};

export default PrivacyPolicyScreen;

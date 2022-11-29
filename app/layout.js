import "../styles/globals.css";
import Header from "./Header";

const RootLayout = ({ children }) => (
  <html lang="fr">
    <head>
      <title>KD Energie | Accueil</title>
      <meta
        name="description"
        content="KD Énergie située à Aywaille et ses alentours est une jeune
          entreprise spécialisée vous proposant ses services
          d'installation, dépannage et d'entretiens chauffage, sanitaire,
          ventilation (simple - double flux), pompe à chaleur et tous
          systèmes de chaudière à condensation gaz et mazout."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </head>
    <body>
      {/* <Header /> */}
      {children}
    </body>
  </html>
);

export default RootLayout;

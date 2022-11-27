import "/styles/globals.css";

const RootLayout = ({ children }) => (
  <html lang="fr">
    <head>
      <title>KD Energie | Sanitaire</title>
      <meta name="description" content="." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;

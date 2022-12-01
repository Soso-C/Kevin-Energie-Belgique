import "../styles/globals.css";

const RootLayout = ({ children }) => (
  <html lang="fr">
    <head></head>
    <body className="scroll-smooth">{children}</body>
  </html>
);

export default RootLayout;

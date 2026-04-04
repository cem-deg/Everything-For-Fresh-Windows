import '../index.css';
import '../App.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Providers from './providers';
import PageTransition from './PageTransition';

export const metadata = {
  title: 'Everything For Fresh Windows',
  description: 'Curated collection of must-have applications and steps for a fresh Windows install.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300..800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
        <link rel="icon" type="image/svg+xml" href="/logos/logo-icon-stamp-split-v1-premium_Version2.svg" />
      </head>
      <body>
        <Providers>
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

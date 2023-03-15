import Header from './components/Header';
import NavBar from './components/NavBar';
import './globals.css';
import Providers from './Providers';

export const metadata = {
  title: 'IMDB Clone',
  description: 'This is the IMDB clone page',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}
          <NavBar />

          {/* Searchbar */}

          {children}
        </Providers>
      </body>
    </html>
  );
}

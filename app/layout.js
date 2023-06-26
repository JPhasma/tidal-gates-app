import Header from './components/Header';
import './globals.scss';

import Providers from './libs/providers';
// import DataProvider from './libs/contexts/dataContext';

export const metadata = {
  title: 'Tidal Gates',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Providers>
        {/* <DataProvider> */}
        <body>
          <Header />
          {children}
        </body>
        {/* </DataProvider> */}
      </Providers>
    </html>
  );
}

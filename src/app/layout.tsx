import { ReactNode } from 'react';
import Header from '../components/Header';
import '../styles/globals.css'; // Import global CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export const metadata = {
  title: 'Glory Grandeur',
  description: 'Your one-stop solution for digital marketing and creative services.',
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body>
      <Header />
      <main>{children}</main>
    </body>
  </html>
);

export default RootLayout;

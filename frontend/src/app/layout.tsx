import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Advance Biotech',
  description: 'Futuristic multilingual website for biotech innovations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-mochaMousse text-sophisticatedBlue font-poppins pt-16 md:pt-20">
        <Header />
        <main className="container mx-auto px-6 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

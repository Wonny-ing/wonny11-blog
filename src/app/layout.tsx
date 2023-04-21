import Header from '@/components/Header';
import './globals.css';
import { Open_Sans } from 'next/font/google';
import Footer from '@/components/Footer';
const sans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: '워니의 블로그',
    template: '워니의 블로그 | %s',
  },
  description: '예비 프엔 개발자 워니의 블로그',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={sans.className}>
      <body className='flex flex-col w-full max-w-screen-2xl mx-auto'>
        <Header />
        <main className='grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

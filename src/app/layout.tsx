import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ankit Yadav | Full Stack Developer & Data Analyst',
  description:
    'MCA Graduate from CDAC-GGSIPU Noida. Full Stack Developer, Data Analyst, and ML Engineer based in Delhi NCR. Building intelligent, scalable systems with Python, React, SQL, and Power BI.',
  keywords: [
    'Ankit Yadav', 'Full Stack Developer', 'Data Analyst', 'React Developer',
    'Python Developer', 'Delhi NCR', 'MCA Graduate', 'Software Developer',
    'Machine Learning', 'Power BI', 'SQL', 'Next.js', 'CDAC Noida',
  ],
  authors: [{ name: 'Ankit Yadav' }],
  creator: 'Ankit Yadav',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    title: 'Ankit Yadav | Full Stack Developer & Data Analyst',
    description: 'MCA Graduate. Full Stack Developer & Data Analyst based in Delhi NCR.',
    siteName: 'Ankit Yadav folio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankit Yadav | Full Stack Developer',
    description: 'MCA Graduate. Full Stack Developer & Data Analyst based in Delhi NCR.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#050810',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

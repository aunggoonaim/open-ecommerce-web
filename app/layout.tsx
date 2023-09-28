import './globals.css';
import 'animate.css/animate.min.css';
import type { Metadata } from 'next';
import { Noto_Sans_Thai_Looped } from 'next/font/google';
import StyledComponentsRegistry from '../lib/AntdRegistry';

const natoFont = Noto_Sans_Thai_Looped({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Open E-Commerce',
  description: 'Free Open E-Commerce by Dev Friday',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body className={natoFont.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

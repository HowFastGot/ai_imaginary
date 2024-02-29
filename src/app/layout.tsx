import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ClerkProvider } from '@clerk/nextjs';

const ibmPlexSans = IBM_Plex_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--ibm_font',
});

export const metadata: Metadata = {
	title: 'AI Powered Image Maintainer',
	description: 'My own pet project',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<ClerkProvider
				appearance={{
					variables: {
						colorPrimary: '#4cdcf5',
						fontFamily: ibmPlexSans.className,
					},
				}}>
				<body className={cn(ibmPlexSans.variable, 'antialiased', 'bg-primary')}>
					{children}
				</body>
			</ClerkProvider>
		</html>
	);
}

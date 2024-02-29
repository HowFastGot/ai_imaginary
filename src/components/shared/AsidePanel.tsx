'use client';
import { useRouter } from 'next/navigation';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

import { navLinks } from '@constants/index';

import { Button } from '@components/shad_ui/button';
import AsideLinkComponet from './AsideLinkComponet';

function AsidePanel() {
	const router = useRouter();
	return (
		<aside className='sidebar'>
			<div className='flex sire-full flex-col gap-4'>
				<Link className='sidebar-logo' href='/'>
					<Image
						src='/assets/images/logo-text.svg'
						alt='User photo'
						width={180}
						height={28}
					/>
				</Link>

				<nav className='sidebar-nav'>
					<SignedIn>
						<ul className='sidebar-nav_elements'>
							{navLinks.slice(0, 6).map((l) => {
								return <AsideLinkComponet key={l.route} linkCofg={l} />;
							})}
						</ul>
						<ul className='sidebar-nav_elements'>
							{navLinks.slice(6).map((l) => {
								return <AsideLinkComponet key={l.route} linkCofg={l} />;
							})}

							<li className='flex-center cursor-pointer gap-2 p-4'>
								<UserButton afterSignOutUrl='/' showName />
							</li>
						</ul>
					</SignedIn>

					<SignedOut>
						<Button
							onClick={() => router.push('/sign-in')}
							className='bg-purple-gradient bg-cover button'>
							Sign In
						</Button>
					</SignedOut>
				</nav>
			</div>
		</aside>
	);
}
export default AsidePanel;

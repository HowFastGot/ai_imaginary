import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@components/shad_ui/sheet';
import { navLinks } from '@/constants/index';
import Image from 'next/image';
import Link from 'next/link';
import AsideLinkComponet from './AsideLinkComponet';
import { Button } from '../ui/button';

function MobileNavBar() {
	return (
		<header className='header'>
			<Link href='/' className='flex items-center gap-2 md:py-2'>
				<Image
					src='/assets/images/logo-text.svg'
					alt='Logo'
					width={180}
					height={28}
				/>
			</Link>

			<nav className='flex gap-2'>
				<SignedIn>
					<UserButton afterSignOutUrl='/' />

					<Sheet>
						<SheetTrigger>
							<Image
								src='/assets/icons/menu.svg'
								alt='menu'
								width={32}
								height={32}
								className='cursor-pointer'
							/>
						</SheetTrigger>
						<SheetContent className='sheet-content sm:w-64'>
							<>
								<Image
									src='/assets/images/logo-text.svg'
									alt='logo'
									width={152}
									height={23}
								/>
								<ul className='header-nav_elements'>
									{navLinks.map((l) => {
										return (
											<AsideLinkComponet
												key={l.route}
												linkCofg={l}
												isMobileDevice
											/>
										);
									})}
								</ul>
								<ul />
							</>
						</SheetContent>
					</Sheet>
				</SignedIn>

				<SignedOut>
					<Button className='bg-purple-gradient bg-cover button'>
						<Link href='/sign-in'>Login</Link>
					</Button>
				</SignedOut>
			</nav>
		</header>
	);
}
export default MobileNavBar;

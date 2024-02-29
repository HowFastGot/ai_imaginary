'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ILinkItemConfg {
	label: string;
	route: string;
	icon: string;
}

function AsideLinkComponet({
	linkCofg: { icon, route, label },
	isMobileDevice,
}: {
	linkCofg: ILinkItemConfg;
	isMobileDevice?: boolean;
}) {
	const pathname = usePathname();
	const isCurrentLink = route === pathname;

	const sideBarMobileClasses = `p-18 flex whitespace-nowrap text-dark-700 ${
		isCurrentLink && 'gradient-text'
	}`;

	isCurrentLink ? 'gradient-text' : 'text-grey-700';
	const sideBarDesctopClasses = `sidebar-nav_element group cursor-pointer ${
		isCurrentLink ? 'bg-purple-gradient' : 'text-grey-700'
	}`;

	const classNames = isMobileDevice
		? sideBarMobileClasses
		: sideBarDesctopClasses;

	return (
		<li key={route} className={classNames}>
			<Link href={route} className='sidebar-link cursor-pointer'>
				<Image
					src={icon}
					alt='logo'
					width={28}
					height={28}
					className={`${isCurrentLink && !isMobileDevice && 'brightness-200'}`}
				/>
				<span>{label}</span>
			</Link>
		</li>
	);
}
export default AsideLinkComponet;

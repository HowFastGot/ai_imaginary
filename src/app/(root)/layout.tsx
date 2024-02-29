import AsidePanel from '@/components/shared/AsidePanel';
import MobileNavBar from '@/components/shared/MobileNavBar';

function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className='root'>
			<AsidePanel />
			<MobileNavBar />

			<div className='root-container'>
				<div className='wrapper'>{children}</div>
			</div>
		</main>
	);
}
export default AuthLayout;

import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
	return (
		<div className='flex justify-start py-24'>
			<SignIn />
		</div>
	);
}

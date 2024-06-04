import Navbar from './_components/navbar';
import Footer from './_components/footer';
import { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Navbar />
			<div className='container' >{children}</div>
			<Footer />
		</>
	);
}
export default Layout;

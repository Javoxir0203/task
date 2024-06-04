import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Navbar() {
	return (
		<div className='h-[10vh] backdrop-blur-sm border-b z-40 bg-background'>
			<div className='container mx-auto h-[10vh] w-full flex items-center justify-between'>
				<Link href={'/'}>
					<Image width={200} height={50} src={'/Logo.svg'} alt={'logo'} />
				</Link>
				<div className='hidden lg:flex items-center gap-8'>
					<div>
						<Link href={'/about'}>About</Link>
					</div>
					<div>
						<Link href={'/services'}>Services</Link>
					</div>
					<div>
						<Link href={'/case-studies'}>Case Stdueis</Link>
					</div>
					<div>
						<Link href={'/blog'}>Blog</Link>
					</div>
					<div>
						<Link href={'/how-it-works'}>How it Works</Link>
					</div>
					<div>
						<Link href={'/hire'}>Hire</Link>
					</div>
				</div>
				<Button className='bg-primary'>
					<Link href={'/contact'}>Contact</Link>
				</Button>
			</div>
		</div>
	);
}

export default Navbar;

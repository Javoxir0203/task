import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const Baner = () => {
	return (
		<div className='w-full h-full flex items-center gap-4'>
			<div className='flex h-full w-full flex-col gap-4'>
				<h2 className='text-5xl'>
					Great <span className='text-[#DE4396]'>Product</span> is <br />
					<span className='font-bold'>built by great</span> <span className='text-[#DE4396]'>teams</span>
				</h2>
				<p className='text-gray-600 text-2xl'>We help build and manage a team of world-class developers to bring your vision to life</p>

				<Button className='bg-blue-500 w-max'>Let`s get started!</Button>
			</div>
			<div className='w-full h-full'>
				<Image src='/Hero-Wrapper__image.svg' width={500} height={500} alt='hero' />
			</div>
		</div>
	);
};

export default Baner;

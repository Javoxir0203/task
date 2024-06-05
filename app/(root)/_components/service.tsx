import Image from 'next/image';
import React from 'react';

const ServicePage = () => {
	return (
		<div className='bg-[#F9F9FF] py-6 rounded-xl p-8 '>
			<h2 className='text-5xl font-bold text-center py-5'> Services we offer</h2>
			<div className='grid grid-cols-4 gap-8'>
				<div className='p-4 space-y-2 border bg-white rounded-sm '>
					<Image src='/Ellipse 1 copy 2.svg' width={50} height={50} alt='logo' />
					<h3 className='text-xl font-bold'>Mobile App Development </h3>
					<p className='text-gray-500 dark:text-gray-400'>A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
				</div>
				<div className='p-4 space-y-2 border bg-white rounded-sm '>
					<Image src='/Ellipse 1.svg' width={50} height={50} alt='logo' />
					<h3 className='text-xl font-bold'>Web Design & Development</h3>
					<p className='text-gray-500 dark:text-gray-400'>A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
				</div>
				<div className='p-4 space-y-2 border bg-white rounded-sm '>
					<Image src='/Ellipse 1 copy.svg' width={50} height={50} alt='logo' />
					<h3 className='text-xl font-bold'>Software Testing Service </h3>
					<p className='text-gray-500 dark:text-gray-400'>A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
				</div>

				<div className='p-4 space-y-2 border bg-white rounded-sm '>
					<Image src='/Ellipse 1 copy 2.svg' width={50} height={50} alt='logo' />
					<h3 className='text-xl font-bold'>Mobile App Development </h3>
					<p className='text-gray-500 dark:text-gray-400'>A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
				</div>
			</div>
		</div>
	);
};

export default ServicePage;

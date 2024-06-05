import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Kurs = () => {
	return (
		<div className=' flex items-center justify-between  py-8 gap-4'>
			<div className='w-full flex flex-col gap-4'>
				<h2 className='text-4xl  '>
					Leading companies trust <span className='font-bold'>us to develop software</span>
				</h2>
				<p className='text-gray-600 text-2xl w-4/5 opacity-50 '>
					We <span className='text-[#DE4396]'>add development capacity </span>to tech teams. Our value isn’t limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.
				</p>
				<div className='flex gap-4'>
					<span>See more Informations</span>
					<ArrowRight className='w-6 h-6' />
				</div>
				<h3 className='text-4xl'>
					Meet the People <br /> <span className='font-bold'> We are Working With</span>
				</h3>
			</div>

			<div className='w-full'>
				<Image src='/Abou-us-Video.svg' width={500} height={500} alt='kurs' />
			</div>
		</div>
	);
};

export default Kurs;

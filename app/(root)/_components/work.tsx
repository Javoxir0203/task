import { authors } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Work = () => {
	return (
		<div className='flex items-center flex-col py-6 gap-8'>
			<h2 className='text-4xl text-center'>
				Why cutomers love <br />
				<span className='font-bold'>working with us</span>
			</h2>
			<p className='text-gray-600 w-2/5 text-xl opacity-50 text-center'>Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.</p>
			<div className='flex items-center w-full justify-between'>
				{authors.map(author => (
					<div key={author.name}>
						<Image src={author.img} width={100} height={100} alt={'work'} />
						<h2>{author.name}</h2>
						<p>{author.company}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Work;

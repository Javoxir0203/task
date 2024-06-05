import Image from 'next/image';
import React from 'react';

const Mark = () => {
	return (
		<div className='flex items-center bg-[#F7F7FA] gap-4 p-4'>
			<Image src={'/markyuvay/logo5.svg'} width={200} height={50} alt={'logo'} />
			<Image src={'markyuvay/Logo-6.svg'} width={200} height={50} alt={'logo'} />
			<Image src={'markyuvay/Logo-7.svg'} width={200} height={50} alt={'logo'} />
			<Image src={'markyuvay/logo8.svg'} width={200} height={50} alt={'logo'} />
			<Image src={'markyuvay/Logo-9.svg'} width={200} height={50} alt={'logo'} />
			<Image src={'markyuvay/logo9.svg'} width={200} height={50} alt={'logo'} />
		</div>
	);
};

export default Mark;

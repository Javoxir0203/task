import { Button } from '@/components/ui/button';
import { ArrowBigRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Cards = () => {
	return (
		<div className=' w-full flex flex-col py-12  gap-8'>
			<div
				className='flex gap-8 bg-[#F1F2FF] rounded-lg p-8'
			>
				<Image className='w-full' src={'/cards/Case-study__image.svg'} width={200} height={50} alt={'logo'} />

				<div className='w-full flex flex-col gap-4'>
					<div className='flex flex-col gap-4 my-8'>
						<h2 className='text-3xl font-bold'>Website Design for SCFC Canada</h2>
						<p className='text-gray-600 mt-6'>
							Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of
							over 20 years of rich and varied experience in the shipping and freight forwarding industry.
						</p>
					</div>

					<Button variant={'outline'} className='flex bg-transparent text-white border border-white w-max gap-2 items-center text-lg justify-center'>
						Raed more
						<ArrowBigRight className='w-5 h-5' />
					</Button>
				</div>
			</div>
			<div className='flex gap-8 bg-[#F0FFF7] rounded-lg p-8'>
				<Image className='w-full' src={'/cards/Case-study__image copy.svg'} width={200} height={50} alt={'logo'} />

				<div className='w-full flex flex-col gap-4'>
					<div className='flex flex-col gap-4 my-8'>
						<h2 className='text-3xl font-bold'>Website Design for SCFC Canada</h2>
						<p className='text-gray-600 mt-6'>
							Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of
							over 20 years of rich and varied experience in the shipping and freight forwarding industry.
						</p>
					</div>

					<Button variant={'outline'} className='flex bg-transparent text-white border border-white w-max gap-2 items-center text-lg justify-center'>
						Raed more
						<ArrowBigRight className='w-5 h-5' />
					</Button>
				</div>
			</div>
			<div className='flex gap-8 bg-[#FFF4F4] rounded-lg p-8'>
				<Image className='w-full' src={'/cards/Case-study__image copy 2.svg'} width={200} height={50} alt={'logo'} />

				<div className='w-full flex flex-col gap-4'>
					<div className='flex flex-col gap-4 my-8'>
						<h2 className='text-3xl font-bold'>Website Design for SCFC Canada</h2>
						<p className='text-gray-600 mt-6'>
							Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of
							over 20 years of rich and varied experience in the shipping and freight forwarding industry.
						</p>
					</div>

					<Button variant={'outline'} className='flex bg-transparent text-white border border-white w-max gap-2 items-center text-lg justify-center'>
						Raed more
						<ArrowBigRight className='w-5 h-5' />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Cards;

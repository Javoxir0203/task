import { exposure } from '@/constants';
import Image from 'next/image';

const Exposure = () => {
	return (
		<>
			<h2 className='text-4xl text-center '>
				Way of building <br />
				<span className='font-bold'>Great Software</span>
			</h2>
			<div className='flex py-6 gap-8'>
				<div className='flex flex-col w-full gap-6'>
					<h2 className='text-2xl text-gray-600 font-bold'>Build the right team to scale</h2>
					<p className=' text-gray-600 text-xl'>Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term not the case with freelancers</p>
					<p className=' text-gray-600 text-xl'>
						Our <span className='text-red-300'>delivery model</span> helps you cut costs and deliver within budget.
					</p>
					<p className='text-red-300 text-xl'>Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules</p>

					<div className='flex  gap-4 '>
						<Image src={'/people/Ellipse 185.svg'} width={70} height={70} alt={'logo'} />
						<div className='flex flex-col'>
							<h2>Jeewa markram</h2>
							<p>CEO</p>
						</div>
					</div>
				</div>
				<div className='w-full'>
					<Image src={'/exposure/Rectangle 17.svg'} width={450} height={450} alt={'logo'} />
				</div>
			</div>
			<div className='flex py-6 gap-8'>
				<div className='w-full'>
					<Image src={'/exposure/Rectangle 18.svg'} width={450} height={450} alt={'logo'} />
				</div>
				<div className='flex flex-col w-full gap-6'>
					<h2 className='text-2xl text-gray-600 font-bold'>Build the right team to scale</h2>
					<p className=' text-gray-600 text-xl'>Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term not the case with freelancers</p>
					<p className=' text-gray-600 text-xl'>
						Our <span className='text-red-300'>delivery model</span> helps you cut costs and deliver within budget.
					</p>
					<p className='text-red-300 text-xl'>Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules</p>

					<div className='flex  gap-4 '>
						<Image src={'/people/Ellipse 185 copy.svg'} width={70} height={70} alt={'logo'} />
						<div className='flex flex-col'>
							<h2>Jeewa markram</h2>
							<p>CEO</p>
						</div>
					</div>
				</div>
			</div>
			<div className='flex py-6 gap-8'>
				<div className='flex flex-col w-full gap-6'>
					<h2 className='text-2xl text-gray-600 font-bold'>Build the right team to scale</h2>
					<p className=' text-gray-600 text-xl'>Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term not the case with freelancers</p>
					<p className=' text-gray-600 text-xl'>
						Our <span className='text-red-300'>delivery model</span> helps you cut costs and deliver within budget.
					</p>
					<p className='text-red-300 text-xl'>Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules</p>

					<div className='flex  gap-4 '>
						<Image src={'/people/Ellipse 185 copy 2.svg'} width={70} height={70} alt={'logo'} />
						<div className='flex flex-col'>
							<h2>Jeewa markram</h2>
							<p>CEO</p>
						</div>
					</div>
				</div>
				<div className='w-full'>
					<Image src={'/exposure/Rectangle 19.svg'} width={450} height={450} alt={'logo'} />
				</div>
			</div>
		</>
	);
};

export default Exposure;

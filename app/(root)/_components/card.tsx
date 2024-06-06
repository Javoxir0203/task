import Image from 'next/image';

const Card = () => {
	return (
		<div className='py-12'>
			<h2 className='text-4xl text-center mb-5 '>
				Our design and <br />
				<span className='font-bold'>development approach</span>
			</h2>
			<div className='flex flex-col'>
				<div className='flex mb-5  gap-8'>
					<div className='flex p-8  rounded-md border gap-5  w-full'>
						<Image className='rounded-md' src={'/card/Rocket_perspective_matte.svg'} width={100} height={100} alt={'logo'} />
						<div className='flex flex-col'>
							<h2 className='text-xl font-bold'>UX Driven Engineering</h2>
							<p className='text-gray-600'>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</p>
						</div>
					</div>
					<div className='flex  rounded-md  p-8 border gap-5  w-full'>
						<Image className='rounded-md' src={'/card/Rocket_perspective_matte.svg'} width={100} height={100} alt={'logo'} />
						<div className='flex flex-col'>
							<h2 className='text-xl font-bold'>UX Driven Engineering</h2>
							<p className='text-gray-600'>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</p>
						</div>
					</div>
				</div>

				<div className='flex mb-5  gap-8'>
					<div className='flex p-8 rounded-md  border gap-5  w-full'>
						<Image className='rounded-md' src={'/card/Rocket_perspective_matte.svg'} width={100} height={100} alt={'logo'} />
						<div className='flex flex-col'>
							<h2 className='text-xl font-bold'>UX Driven Engineering</h2>
							<p className='text-gray-600'>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</p>
						</div>
					</div>
					<div className='flex  p-8 rounded-md  border gap-5  w-full'>
						<Image className='rounded-md' src={'/card/Rocket_perspective_matte.svg'} width={100} height={100} alt={'logo'} />
						<div className='flex flex-col'>
							<h2 className='text-xl font-bold'>UX Driven Engineering</h2>
							<p className='text-gray-600'>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</p>
						</div>
					</div>
				</div>

				<div className='flex  gap-8'>
					<div className='flex p-8 rounded-md  border gap-5  w-full'>
						<Image className='rounded-md' src={'/card/Rocket_perspective_matte.svg'} width={100} height={100} alt={'logo'} />
						<div className='flex flex-col'>
							<h2 className='text-xl font-bold'>UX Driven Engineering</h2>
							<p className='text-gray-600'>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</p>
						</div>
					</div>
					<div className='flex  p-8 rounded-md  border gap-5  w-full'>
						<Image className='rounded-md' src={'/card/Rocket_perspective_matte.svg'} width={100} height={100} alt={'logo'} />
						<div className='flex flex-col'>
							<h2 className='text-xl font-bold'>UX Driven Engineering</h2>
							<p className='text-gray-600'>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;

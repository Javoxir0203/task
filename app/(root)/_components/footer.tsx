import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

const Footer = () => (
	<>
		<div className='container mx-auto  py-8 flex items-center justify-between'>
			<div className='grid grid-cols-12'>
				<div className='col-span-4 flex flex-col gap-6'>
					<Image src='/Logo.svg' width={200} height={50} alt='logo' />
					<p className='text-sm text-gray-600 w-4/5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quae maxime, ad hic quia deserunt minus adipisci iusto? Repellat, ipsa?</p>
					<Image src='/google-page-speed 1.svg' width={200} height={50} alt='logo' />
				</div>

				<div className='col-span-2'>
					<h3 className='text-2xl font-bold mb-4'>Links</h3>
					<ul className='space-y-2 text-sm text-gray-600'>
						<li>About</li>
						<li>Services</li>
						<li>Case Studies</li>
						<li>How it works</li>
						<li>Blog</li>
						<li>Careers</li>
						<li>Areas We Serve</li>
					</ul>
				</div>

				<div className='col-span-6'>
					<h3 className='text-2xl font-bold mb-4'>Contact</h3>
					<p className='text-sm text-gray-600 mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quae maxime, Voluptate cum reiciendis obcaecati facilis veritatis id repudiandae odit aperiam molestiae?</p>
					<span className='text-sm text-gray-600 block mb-4'>+998 90 123 45 67</span>
					<div className='flex gap-4 justify-end'>
						<div className=' rounded-full bg-gray-200 p-2'>
							<Facebook className='w-8 h-6' />
						</div>
						<div className=' rounded-full bg-gray-200 p-2'>
							<Instagram className='w-8 h-6' />
						</div>
						<div className=' rounded-full bg-gray-200 p-2'>
							<Twitter className='w-8 h-6' />
						</div>
						<div className=' rounded-full bg-gray-200 p-2'>
							<Linkedin className='w-8 h-6' />
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
);

export default Footer;

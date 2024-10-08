"use client";

import { delay, motion } from "framer-motion";
function Footer() {
	return (
		<>
			<motion.footer
				className='w-full h-full bg-[#1D2130] z-0 p-8 space-y-8 md:space-y-0 items-center flex flex-col md:flex-row md:space-x-8 md:items-start md:justify-between lg:p-10 lg:space-x-20'
				initial={{ opacity: 0, y: 100 }}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: { delay: 0.2, duration: 0.5 },
				}}>
				<div className=' flex flex-row xl:flex-col xl:gap-y-8 text-white 2xl:flex-row 2xl:gap-x-10 '>
					<div className='flex flex-col space-y-2'>
						<div className='w-40 text-lg font-semibold capitalize leading-relaxed'>
							Company
						</div>
						<div className='opacity-60 text-base font-normal leading-normal space-y-2 xl:flex xl:flex-row xl:gap-x-12 xl:space-y-0 2xl:gap-x-6'>
							<div className=''>
								<a href=''>About Us</a>
							</div>
							<div className=''>
								<a href=''>Why Choose us</a>
							</div>
							<div className=''>
								<a href=''>Pricing</a>
							</div>
							<div className=''>
								<a href=''>Testimonial</a>
							</div>
						</div>
					</div>

					<div className='flex flex-col space-y-2'>
						<div className='w-40 text-lg font-semibold capitalize leading-relaxed'>
							Resources
						</div>
						<div className='opacity-60 text-base font-normal leading-normal space-y-2 xl:flex xl:flex-row xl:gap-x-12 xl:space-y-0 2xl:gap-x-6'>
							<div className=''>
								<a href=''>Privacy Policy</a>
							</div>
							<div className=''>
								<a href=''>Terms and Condition</a>
							</div>
							<div className=''>
								<a href=''>Blog</a>
							</div>
							<div className=''>
								<a href=''>Contact Us</a>
							</div>
						</div>
					</div>
				</div>

				<div className='text-white flex flex-col space-y-6 2xl:flex-row 2xl:space-y-0 2xl:gap-x-4'>
					<div>
						<h1 className='uppercase text-2xl font-black'>tasklight</h1>
						<h3 className='font-semibold text-md'>
							Subscribe to our Newsletter
						</h3>
					</div>
					<div className='h-14  flex flex-row'>
						<div className='flex flex-col'>
							<div className='w-96 h-14 relative'>
								<div className='flex flex-col' />
								<input
									className='w-72 h-14 pl-4 bg-gray-800 rounded-l-large focus:outline-none '
									placeholder='Enter your Email'></input>

								<button className='w-24 h-14 text-gray-800 text-base font-medium leading-normal bg-white rounded-r-large hover:bg-gray-800 hover:text-white'>
									Subscribe
								</button>
							</div>
						</div>
					</div>
				</div>
			</motion.footer>
			<div className='flex flex-col md:flex-row z-10 md:justify-center md:space-x-4 md:pb-8 md:pl-8 md:md:pr-8 items-center gap-y-4 text-[#888888] bg-[#1D2130]'>
				<hr className='w-[20%] md:w-[80%] rounded-xlarge opacity-45' />
				<h4 className='text-nowrap'>© Copyright TASKLIGHT 2024</h4>
				<ul className='flex flex-row gap-x-4 opacity-45'>
					<li>
						<a href=''>
							<svg
								width='20'
								height='21'
								viewBox='0 0 20 21'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<g clip-path='url(#clip0_42_88)'>
									<path
										d='M20 10.5659C20 5.04307 15.5229 0.565918 10 0.565918C4.47715 0.565918 0 5.04307 0 10.5659C0 15.5571 3.65684 19.6942 8.4375 20.4444V13.4565H5.89844V10.5659H8.4375V8.36279C8.4375 5.85654 9.93047 4.47217 12.2146 4.47217C13.3084 4.47217 14.4531 4.66748 14.4531 4.66748V7.12842H13.1922C11.95 7.12842 11.5625 7.89932 11.5625 8.69092V10.5659H14.3359L13.8926 13.4565H11.5625V20.4444C16.3432 19.6942 20 15.5571 20 10.5659Z'
										fill='white'
									/>
								</g>
								<defs>
									<clipPath id='clip0_42_88'>
										<rect
											width='20'
											height='20'
											fill='white'
											transform='translate(0 0.565918)'
										/>
									</clipPath>
								</defs>
							</svg>
						</a>
					</li>
					<li>
						<a href=''>
							<svg
								width='20'
								height='21'
								viewBox='0 0 20 21'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<g clip-path='url(#clip0_42_86)'>
									<path
										d='M6.2918 18.691C13.8371 18.691 17.9652 12.4383 17.9652 7.01759C17.9652 6.84181 17.9613 6.66212 17.9535 6.48634C18.7566 5.90559 19.4496 5.18625 20 4.36212C19.2521 4.69487 18.458 4.91219 17.6449 5.00665C18.5011 4.49346 19.1421 3.68727 19.4492 2.73751C18.6438 3.21484 17.763 3.55155 16.8445 3.73322C16.2257 3.07567 15.4075 2.6403 14.5164 2.49442C13.6253 2.34853 12.711 2.50025 11.9148 2.92612C11.1186 3.35199 10.4848 4.02829 10.1115 4.85047C9.73825 5.67264 9.64619 6.59489 9.84961 7.47462C8.21874 7.39278 6.62328 6.96913 5.16665 6.23112C3.71002 5.49312 2.42474 4.45724 1.39414 3.19064C0.870333 4.09374 0.710047 5.16241 0.945859 6.17945C1.18167 7.19649 1.79589 8.08558 2.66367 8.66603C2.01219 8.64534 1.37498 8.46994 0.804688 8.15431V8.20509C0.804104 9.15283 1.13175 10.0715 1.73192 10.805C2.3321 11.5385 3.16777 12.0415 4.09687 12.2285C3.49338 12.3936 2.85999 12.4177 2.2457 12.2988C2.50788 13.1139 3.01798 13.8268 3.70481 14.338C4.39164 14.8492 5.22093 15.1332 6.07695 15.1504C4.62369 16.292 2.82848 16.9111 0.980469 16.9082C0.652739 16.9077 0.325333 16.8876 0 16.8481C1.87738 18.0525 4.06128 18.6922 6.2918 18.691Z'
										fill='white'
									/>
								</g>
								<defs>
									<clipPath id='clip0_42_86'>
										<rect
											width='20'
											height='20'
											fill='white'
											transform='translate(0 0.565918)'
										/>
									</clipPath>
								</defs>
							</svg>
						</a>
					</li>
					<li>
						<a href=''>
							<svg
								width='20'
								height='21'
								viewBox='0 0 20 21'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<g clip-path='url(#clip0_42_81)'>
									<path
										d='M10 2.3667C12.6719 2.3667 12.9883 2.37842 14.0391 2.42529C15.0156 2.46826 15.543 2.63232 15.8945 2.76904C16.3594 2.94873 16.6953 3.16748 17.043 3.51514C17.3945 3.8667 17.6094 4.19873 17.7891 4.66357C17.9258 5.01514 18.0898 5.54639 18.1328 6.51904C18.1797 7.57373 18.1914 7.89014 18.1914 10.5581C18.1914 13.23 18.1797 13.5464 18.1328 14.5972C18.0898 15.5737 17.9258 16.1011 17.7891 16.4526C17.6094 16.9175 17.3906 17.2534 17.043 17.6011C16.6914 17.9526 16.3594 18.1675 15.8945 18.3472C15.543 18.4839 15.0117 18.6479 14.0391 18.6909C12.9844 18.7378 12.668 18.7495 10 18.7495C7.32813 18.7495 7.01172 18.7378 5.96094 18.6909C4.98438 18.6479 4.45703 18.4839 4.10547 18.3472C3.64063 18.1675 3.30469 17.9487 2.95703 17.6011C2.60547 17.2495 2.39063 16.9175 2.21094 16.4526C2.07422 16.1011 1.91016 15.5698 1.86719 14.5972C1.82031 13.5425 1.80859 13.2261 1.80859 10.5581C1.80859 7.88623 1.82031 7.56982 1.86719 6.51904C1.91016 5.54248 2.07422 5.01514 2.21094 4.66357C2.39063 4.19873 2.60938 3.86279 2.95703 3.51514C3.30859 3.16357 3.64063 2.94873 4.10547 2.76904C4.45703 2.63232 4.98828 2.46826 5.96094 2.42529C7.01172 2.37842 7.32813 2.3667 10 2.3667ZM10 0.565918C7.28516 0.565918 6.94531 0.577637 5.87891 0.624512C4.81641 0.671387 4.08594 0.843262 3.45313 1.08936C2.79297 1.34717 2.23438 1.68701 1.67969 2.24561C1.12109 2.80029 0.78125 3.35889 0.523438 4.01514C0.277344 4.65186 0.105469 5.37842 0.0585938 6.44092C0.0117188 7.51123 0 7.85107 0 10.5659C0 13.2808 0.0117188 13.6206 0.0585938 14.687C0.105469 15.7495 0.277344 16.48 0.523438 17.1128C0.78125 17.773 1.12109 18.3315 1.67969 18.8862C2.23438 19.4409 2.79297 19.7847 3.44922 20.0386C4.08594 20.2847 4.8125 20.4565 5.875 20.5034C6.94141 20.5503 7.28125 20.562 9.99609 20.562C12.7109 20.562 13.0508 20.5503 14.1172 20.5034C15.1797 20.4565 15.9102 20.2847 16.543 20.0386C17.1992 19.7847 17.7578 19.4409 18.3125 18.8862C18.8672 18.3315 19.2109 17.773 19.4648 17.1167C19.7109 16.48 19.8828 15.7534 19.9297 14.6909C19.9766 13.6245 19.9883 13.2847 19.9883 10.5698C19.9883 7.85498 19.9766 7.51514 19.9297 6.44873C19.8828 5.38623 19.7109 4.65576 19.4648 4.02295C19.2188 3.35889 18.8789 2.80029 18.3203 2.24561C17.7656 1.69092 17.207 1.34717 16.5508 1.09326C15.9141 0.847168 15.1875 0.675293 14.125 0.628418C13.0547 0.577637 12.7148 0.565918 10 0.565918Z'
										fill='white'
									/>
									<path
										d='M10 5.4292C7.16406 5.4292 4.86328 7.72998 4.86328 10.5659C4.86328 13.4019 7.16406 15.7026 10 15.7026C12.8359 15.7026 15.1367 13.4019 15.1367 10.5659C15.1367 7.72998 12.8359 5.4292 10 5.4292ZM10 13.8979C8.16016 13.8979 6.66797 12.4058 6.66797 10.5659C6.66797 8.72607 8.16016 7.23389 10 7.23389C11.8398 7.23389 13.332 8.72607 13.332 10.5659C13.332 12.4058 11.8398 13.8979 10 13.8979Z'
										fill='white'
									/>
									<path
										d='M16.5391 5.22608C16.5391 5.89014 16 6.4253 15.3398 6.4253C14.6758 6.4253 14.1406 5.88623 14.1406 5.22608C14.1406 4.56201 14.6797 4.02686 15.3398 4.02686C16 4.02686 16.5391 4.56592 16.5391 5.22608Z'
										fill='white'
									/>
								</g>
								<defs>
									<clipPath id='clip0_42_81'>
										<rect
											width='20'
											height='20'
											fill='white'
											transform='translate(0 0.565918)'
										/>
									</clipPath>
								</defs>
							</svg>
						</a>
					</li>
					<li>
						<a href=''>
							<svg
								width='20'
								height='21'
								viewBox='0 0 20 21'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<g clip-path='url(#clip0_42_78)'>
									<path
										d='M18.5195 0.565918H1.47656C0.660156 0.565918 0 1.21045 0 2.00732V19.1206C0 19.9175 0.660156 20.5659 1.47656 20.5659H18.5195C19.3359 20.5659 20 19.9175 20 19.1245V2.00732C20 1.21045 19.3359 0.565918 18.5195 0.565918ZM5.93359 17.6089H2.96484V8.06201H5.93359V17.6089ZM4.44922 6.76123C3.49609 6.76123 2.72656 5.9917 2.72656 5.04248C2.72656 4.09326 3.49609 3.32373 4.44922 3.32373C5.39844 3.32373 6.16797 4.09326 6.16797 5.04248C6.16797 5.98779 5.39844 6.76123 4.44922 6.76123ZM17.043 17.6089H14.0781V12.9683C14.0781 11.8628 14.0586 10.437 12.5352 10.437C10.9922 10.437 10.7578 11.644 10.7578 12.8901V17.6089H7.79688V8.06201H10.6406V9.3667H10.6797C11.0742 8.6167 12.043 7.82373 13.4844 7.82373C16.4883 7.82373 17.043 9.80029 17.043 12.3706V17.6089Z'
										fill='white'
									/>
								</g>
								<defs>
									<clipPath id='clip0_42_78'>
										<rect
											width='20'
											height='20'
											fill='white'
											transform='translate(0 0.565918)'
										/>
									</clipPath>
								</defs>
							</svg>
						</a>
					</li>
				</ul>
				<hr className='w-[20%] md:w-[80%] rounded-xlarge opacity-45 mb-4 md:mb-0' />
			</div>
		</>
	);
}

export default Footer;

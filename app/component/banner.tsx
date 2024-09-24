"use client";

import { motion } from "framer-motion";

const heroVariants = {
	hidden: {
		opacity: 0,
		x: -100,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			delay: 0.6,
			duration: 0.8,
			type: "easeIn",
		},
	},
};

const inputVariants = {
	initial: {
		borderWidth: "0px",
		borderColor: "transparent",
	},
	hover: {
		borderWidth: "2px",
		borderColor: "#000",
		scale: 1.1,
		transition: {
			duration: 0.4,
			ease: "easeInOut",
		},
	},
};

function Banner() {
	return (
		<header className='w-full flex flex-col gap-y-10 bg-fixed bg-cover bg-center pb-10'>
			<motion.div
				variants={heroVariants}
				initial='hidden'
				animate='visible'
				id='#home'
				className='mt-52 w-[70%] flex flex-col items-center ml-[15%] mr-[15%] space-y-10 justify-center'>
				<h1 className='text-black text-6xl font-bold'>Streamline Your Tasks</h1>
				<p className='text-[#454546]'>
					Start accomplishing more with less effort. Simplify your tasks today
					with &quot;<strong>TASKLIGHT</strong>&quot;
				</p>
				<motion.div
					className='flex flex-col sm:flex-row md:w-[573px] sm:justify-between items-center h-[144px] sm:h-[72px] rounded-xlarge border-[#CACACA] border-2 bg-white'
					variants={inputVariants}
					initial='initial'
					whileHover='hover'>
					<input
						className='h-[56px] my-2 text-gray-950 pl-4 focus:outline-none rounded-lg'
						type='text'
						placeholder='Enter your Email'
					/>
					<button className='bg-[#74d3ff71] h-[56px] w-[144px] font-bold rounded-large mt-2 mb-2 sm:mr-2'>
						Get started
					</button>
				</motion.div>
			</motion.div>
			<motion.img
				initial={{ opacity: 0, y: "100vh" }}
				animate={{
					opacity: 1,
					y: 0,
					transition: { duration: 1, delay: 0.6, type: "easeIn" },
				}}
				className='w-[70%] sm:hidden h-[100%] m-auto rounded-xlarge'
				src='./Snippest_Page_sm.png'
				alt='web app banner'
			/>
			<motion.img
				initial={{ opacity: 0, y: "100vh" }}
				animate={{
					opacity: 1,
					y: 0,
					transition: { duration: 1, delay: 0.6, type: "easeIn" },
				}}
				className='hidden xl:block w-[80%] h-[100%]  m-auto rounded-xlarge'
				src='./Snippest_Page_lg.png'
				alt='web app banner'
			/>
			<motion.img
				initial={{ opacity: 0, y: "100vh" }}
				animate={{
					opacity: 1,
					y: 0,
					transition: { duration: 1, delay: 0.6, type: "easeIn" },
				}}
				className='hidden sm:block xl:hidden w-[70%] h-[100%]  m-auto rounded-xlarge'
				src='./Snippest_Page_md.png'
				alt='web app banner'
			/>
		</header>
	);
}

export default Banner;

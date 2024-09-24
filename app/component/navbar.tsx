"use client";
import { animate, easeIn, easeInOut, motion } from "framer-motion";

const navVariants = {
	hidden: {
		opacity: 0,
		x: -100,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			delay: 0.3,
			duration: 0.8,
			type: "easeIn",
		},
	},
};
const borderVariants = {
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

function NavBar() {
	return (
		<motion.div
			variants={navVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'>
			<nav className='h-20 md:h-[116px] z-50 w-full fixed bg-white flex justify-center items-center flex-col gap-y-2 shadow-md pt-16 pb-16 md:flex-row md:justify-between md:pt-8 md:pb-8'>
				<h1 className='font-mono font-bold tracking-wider uppercase text-black text-xl md:ml-[5%] md:text-3xl'>
					tasklight
				</h1>

				<ul className='flex -flex-col items-center justify-center md:gap-x-12 md:mr-[5%] h-[56px]'>
					<motion.li
						whileHover={{
							scale: 1.4,
							originX: 0,
							color: "#6366F1",
							shadow: "0px 0px 8px 2px #6366F1",
						}}>
						<a
							className='text-gray-900 font-medium mr-12 md:mr-0 '
							href='#home'>
							Home
						</a>
					</motion.li>
					<motion.li
						whileHover={{
							scale: 1.4,
							originX: 0,
							color: "#6366F1",
							shadow: "0px 0px 8px 2px #6366F1",
						}}>
						<a
							className='text-gray-900 font-medium mr-12 md:mr-0'
							href='#feature'>
							Feature
						</a>
					</motion.li>
					<motion.li
						whileHover={{
							scale: 1.4,
							originX: 0,
							color: "#6366F1",
							shadow: "0px 0px 8px 2px #6366F1",
						}}>
						<a className='text-gray-900 font-medium' href='#about'>
							About
						</a>
					</motion.li>
					<li>
						<motion.button
							variants={borderVariants}
							initial='initial'
							whileHover='hover'
							className='hidden md:block bg-white h-[56px] w-[134px] font-bold'>
							Get started
						</motion.button>
					</li>
				</ul>
			</nav>
		</motion.div>
	);
}

export default NavBar;

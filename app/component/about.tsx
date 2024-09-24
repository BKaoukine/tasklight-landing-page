"use client";

import { motion } from "framer-motion";
function About() {
	return (
		<section id='#about'>
			<motion.div
				className=' w-[90%] md:w1/2 lg:w-1/3 mb-20 m-auto p-8 flex flex-col items-center bg-slate-500/5 rounded-xlarge'
				initial={{ opacity: 0, scale: 1 }}
				whileInView={{
					opacity: 1,
					scale: [1, 1.1, 1.1, 1],
					transition: { duration: 2 },
				}}>
				<h1 className='text-[#1D2130] text-xl underline decoration-[#5bdeff] decoration-2 underline-offset-4 mb-6'>
					<strong>About</strong>
				</h1>

				<h1 className='text-[#1D2130] text-lg mb-12'>
					{" "}
					Welcome to our task management web app! We&apos;re on a mission to
					simplify task management for individuals and teams without
					compromising on privacy or usability. At <strong>TASKLIGHT</strong>,
					we believe in the power of simplicity. Our platform is designed to
					streamline your workflow, whether you&apos;re a busy professional, a
					student with deadlines, or someone managing multiple projects.
				</h1>
			</motion.div>

			<ul className='lg:w-full text-[#1D2130] lg:space-x-16 flex  flex-col md:flex-row justify-center items-start m-auto'>
				<motion.div
					className='w-[500px] items-center bg-slate-500/5 rounded-xlarge p-8'
					initial={{ opacity: 0, scale: 1 }}
					whileInView={{
						opacity: 1,
						scale: [1, 1.1, 1.1, 1],
						transition: { duration: 2 },
					}}>
					<li className='list-disc font-bold text-lg '>
						<h1 className='text-[#1D2130] text-xl underline decoration-[#5bdeff] decoration-2 underline-offset-4 mb-6'>
							Privacy and Security{" "}
						</h1>
					</li>
					<p>
						Your privacy is our top priority. Unlike other task management
						tools, we don&apos;t require any personal information to register.
						With just a username and email, you can create an account and start
						using our platform immediately. Rest assured, we do not collect any
						user data. Your tasks remain private and secure at all times.
					</p>
				</motion.div>
				<motion.div
					className='w-[500px] items-center bg-slate-500/5 rounded-xlarge p-8'
					initial={{ opacity: 0, scale: 1 }}
					whileInView={{
						opacity: 1,
						scale: [1, 1.1, 1.1, 1],
						transition: { duration: 2 },
					}}>
					<li className='list-disc font-bold text-lg items-center bg-slate-500/5 rounded-xlarge'>
						<h1 className='text-[#1D2130] text-xl underline decoration-[#5bdeff] decoration-2 underline-offset-4 mb-6'>
							Our Philosophy
						</h1>
					</li>
					<p>
						We believe that staying organized should be effortless and
						accessible to everyone. That&apos;s why our web app is completely
						free to use, with no subscriptions or hidden costs. Whether
						you&apos;re managing personal projects or collaborating with a team,
						our platform is built to adapt to your needs.
					</p>
				</motion.div>
			</ul>
		</section>
	);
}

export default About;

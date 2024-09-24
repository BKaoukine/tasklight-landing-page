import NavBar from "./component/navbar";
import Banner from "./component/banner";
import Features from "./component/features";
import About from "./component/about";
import Reviews from "./component/reviews";
import Footer from "./component/footer";

export default function Home() {
	return (
		<>
			<main className='w-full bg-white h-full flex flex-col'>
				<NavBar />
				<Banner />
				<Features />
				<About />
				<Reviews />
				<Footer />
			</main>
		</>
	);
}

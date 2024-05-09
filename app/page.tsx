import Image from "next/image";
import NavBar from "./component/navbar";
import { Roboto } from "next/font/google";
import Banner from "./component/banner";
import Features from "./component/features";


export default function Home() {
  return (
   <main className="w-full bg-white h-full flex flex-row">
    <NavBar/>
    <Banner/>
    <Features/>
   </main>
  );
}

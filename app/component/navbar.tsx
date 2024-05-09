
function NavBar()
{
    return(
        <nav className="h-20 md:h-[116px]  w-full fixed bg-white flex justify-center items-center flex-col gap-y-2 shadow-md pt-16 pb-16 md:flex-row md:justify-between md:pt-8 md:pb-8">
                <h1 className="font-mono font-bold tracking-wider uppercase text-black text-xl md:ml-[5%] md:text-3xl">tasklight</h1>

                <ul className="flex -flex-col items-center justify-center md:gap-x-12 md:mr-[5%] h-[56px]">
                    <li><a className="text-gray-900 font-medium mr-12 md:mr-0 md:hover:shadow-indigo-500 md:hover:shadow-md md:p-4 md:rounded-large" href="#home">Home</a></li>
                    <li><a className="text-gray-900 font-medium mr-12 md:mr-0 md:hover:shadow-indigo-500 md:hover:shadow-md md:p-4 md:rounded-large" href="#feature">Feature</a></li>
                    <li><a className="text-gray-900 font-medium md:hover:shadow-indigo-500 md:hover:shadow-md md:p-4 md:rounded-large" href="#about">About</a></li>
                    <li><button className="hidden md:block bg-[#1D2130] h-[56px] w-[144px] font-bold rounded-large hover:shadow-indigo-500 hover:shadow-md">Get started</button></li>

                </ul>
        </nav>
    )
}

export default NavBar;
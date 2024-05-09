
function Banner()
{
    return(
        <header className="w-full flex flex-col gap-y-10 bg-fixed bg-cover bg-center" style={{backgroundImage: "url('./bannerBG.png')"}}>

            <div id="#home" className="mt-52  w-[70%] flex  flex-col items-center ml-[15%] mr-[15%] space-y-10 justify-center">
                <h1 className="text-black text-6xl font-bold">
                    Streamline Your Tasks
                </h1>
                <p className="text-[#454546]">
                Start accomplishing more with less effort. Simplify your tasks today with &quot;TASKLIGHT&quot;
                </p>
                <div className="flex md:w-[573px] justify-between items-center h-[72px] rounded-xlarge border-[#CACACA] border-2 bg-white">
                    <input className="h-[56px] mt-2 mb-2 ml-[21px]" type="text" placeholder="Enter your Email" />
                    <button className="bg-[#1D2130] h-[56px] w-[144px] font-bold rounded-large mt-2 mb-2 mr-2">Get started</button>
                </div>
            </div>
            <img className="w-[70%] sm:hidden h-[100%] m-auto rounded-xlarge" src="./Snippest_Page_sm.png" alt="web app baneer" />
            <img className="hidden xl:block w-[80%] h-[100%]  m-auto rounded-xlarge" src="./Snippest_Page_lg.png" alt="web app baneer" />
            <img className="hidden sm:block xl:hidden w-[70%] h-[100%]  m-auto rounded-xlarge" src="./Snippest_Page_md.png" alt="web app baneer" />
            

        </header>


    )
}

export default Banner;
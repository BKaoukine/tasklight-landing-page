
function Reviews()
{
    return(
            <section id="#about">
                <div className="mb-20 ml-20 mr-20 p-8 flex flex-col items-center  space-y-12 text-center">
                
                <h1 className="text-black text-3xl font-bold text-wrap">
                The stunning results our
                users have experienced
                </h1>

                <div className="space-y-6 xl:space-y-0 xl:space-x-6 xl:flex xl:flex-row">
                    <div className="w-[411px] h-[403px] md:w-[611px] md:h-[303px] xl:w-[350px] xl:h-[403px] rounded-xlarge border-[#6199ED]/50 border-solid border-2 p-16 md:p-8 text-[#1D2130] space-y-3 shadow-sm">
                        <p className="font-semibold text-[18px] text-wrap m-auto">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                         sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                          sed diam voluptua.
                        </p>

                        <img className="h-[70px] w-[70px] rounded-full m-auto" src="./reviewer1.jpg" alt="photography of a guy wearing green shirt" />

                        <h1 className="font-medium text-[20px] m-auto">Ron Wood</h1>
                        <h4 className="font-normal uppercase text-[12px] m-auto">CEO</h4>
                    </div>

                    <div className="w-[411px] h-[403px] md:w-[611px] md:h-[303px] xl:w-[350px] xl:h-[403px] rounded-xlarge border-[#6199ED]/50 border-solid border-2 p-16 md:p-8 text-[#1D2130] space-y-3 shadow-sm">
                        <p className="font-semibold text-[18px] text-wrap m-auto">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                         sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                          sed diam voluptua.
                        </p>

                        <img className="h-[70px] w-[70px] rounded-full m-auto" src="./reviewer2.jpg" alt="photography of a guy wearing green shirt" />

                        <h1 className="font-medium text-[20px] m-auto">Mark Mason</h1>
                        <h4 className="font-normal uppercase text-[12px] m-auto">Marketing Manager</h4>
                    </div>

                    <div className="w-[411px] h-[403px] md:w-[611px] md:h-[303px] xl:w-[350px] xl:h-[403px] rounded-xlarge border-[#6199ED]/50 border-solid border-2 p-16 md:p-8 text-[#1D2130] space-y-3 shadow-sm">
                        <p className="font-semibold text-[18px] text-wrap m-auto">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                         sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                          sed diam voluptua.
                        </p>

                        <img className="h-[70px] w-[70px] rounded-full m-auto" src="./reviewer3.png" alt="photography of a guy wearing green shirt" />

                        <h1 className="font-medium text-[20px] m-auto">Sam Preston</h1>
                        <h4 className="font-normal uppercase text-[12px] m-auto">CTO</h4>
                    </div>
                </div>
                
                    </div>
                </section>
    )
}

export default Reviews;
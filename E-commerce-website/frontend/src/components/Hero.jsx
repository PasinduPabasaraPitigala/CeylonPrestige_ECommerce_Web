/*
import {NavLink} from "react-router-dom";


const Hero = () => {
    return(
        <section className={'relative bg-wallpaper bg-center bg-no-repeat h-screen w-full  '}>

            <div className="absolute w-full top-[113px] h-[640px] sm:h-[600px] md:h-[560px] lg:h-[520px] xl:h-[480px] 2xl:h-[440px] mt-4 mb-6 ml-8 mr-10 sm:mt-6 sm:mb-8 sm:ml-10 sm:mr-12 md:mt-8 md:mb-10 md:ml-12 md:mr-14 lg:mt-10 lg:mb-12 lg:ml-14 lg:mr-16 xl:mt-12 xl:mb-14 xl:ml-16 xl:mr-18 2xl:mt-14 2xl:mb-16 2xl:ml-18 2xl:mr-20 bg-teal-200 bg-opacity-50">
                <div >
                    <h1 className={'bold-16 sm:bold-20 text-secondary'}>Welcome to LAVISHLY - Your Oasis of Beauty and Style!</h1>
                    <p className={'regular-16 sm:regular-20 text-tertiary'}>Hello Beautiful Souls!<br/>
                        Step into a world where beauty knows no bounds and style is an art form. We<br/>
                        are thrilled to welcome you to LAVISHLY, your ultimate destination for all<br/>
                        things glamorous, chic, and utterly fabulous!</p>
                    <div className={'max-xs:flex-col flex'}>
                        <NavLink to={''} className={'btn_dark_rounded flexCenter'}>Shop Now</NavLink>

                    </div>
                </div>
            </div>




        </section>
    )
}
export default Hero*/

import { NavLink } from "react-router-dom";

const Hero = () => {
    return (
        <section className="relative bg-wallpaper bg-cover bg-center bg-no-repeat h-screen w-full flex items-center justify-start">
            {/*<div className="absolute w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px] bg-center bg-no-repeat h-[500px] top-[113px] sm:h-[600px] md:h-[560px] lg:h-[450px] 2xl:h-[540px] mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 2xl:mt-14 mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16 bg-teal-200 bg-opacity-50 text-center border border-solid border-gray-300 rounded-md">*/}
                <div className="mt-32">
                    <h1 className="font-bold ml-20 text-3xl sm:text-4xl lg:text-4xl xl:text-8xl text-white uppercase">Limited Stock <br/> Fashion</h1>
                    <p className="text-lg ml-20 sm:text-xl lg:text-4xl mt-6 text-white uppercase">Do Not Miss the <br /> Product you want</p>
                    <div className="flex justify-start mt-6 ml-32">
                        <NavLink to="/" className="btn_dark_rounded  ">Shop Now</NavLink>
                    </div>
                </div>


            {/*</div>*/}
        </section>
    );
}

export default Hero;

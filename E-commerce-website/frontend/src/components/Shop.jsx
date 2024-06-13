import {OFFERS} from "../assets/data";
import Item from "./Item";

const Shop = () => {
    return(
        <section className={'bg-teal-50 '}>
            <div className={'max_padd_container py-12 xl:py-28 xl:w-[88%]'}>
                <h3 className={'h3 text-start mr-1 font-bold'}>SHOP</h3>
                <h4 className={' text-lg sm:text-xl lg:text-2xl text-tertiary mt-4  text-center'}>Shop effortlessly from the comfort of your home with our seamless online shopping<br/>experience, bringing convenience and style to your fingertips.</h4>
                <hr className={'h-[3px]  max-auto bg-gradient-to-l from-transparent  to-transparent md-16'}/>
                {/*container*/}
            </div>
        </section>
    )
}

export default Shop



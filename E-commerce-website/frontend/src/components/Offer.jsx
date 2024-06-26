import {OFFERS} from "../assets/data";
import Item from "./Item";

const Offer = () => {
    return(
       <section className={'bg-white '}>
           <div className={'max_padd_container py-12 xl:py-28 xl:w-[88%]'}>
               <h3 className={'h3 text-start mr-1 font-bold'}>OFFERS</h3>
               <h4 className={' text-lg sm:text-xl lg:text-2xl text-tertiary mt-4  text-center'}>Unleash savings like never before! Explore our exclusive web offers now – your shortcut to <br/>incredible deals!</h4>
               <hr className={'h-[3px]  max-auto bg-gradient-to-l from-transparent  to-transparent md-16'}/>
               {/*container*/}
               <div className={'grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'}>
                   {OFFERS.map((item) => (
                       <Item key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
                   ))}
               </div>
           </div>
       </section>
    )
}

export default Offer
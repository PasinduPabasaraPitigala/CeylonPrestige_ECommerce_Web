import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import {all_product} from "../assets/all_product";

import Item from "../components/Item";

const Category = ({category}) => {
  return(
       <section className={'max_padd_container py-12 xl:py-28 bg-teal-50'}>
         <div>
           <div className={'flexBetween my-8 mx-2'}>
            <h5><span className={'font-bold'}>Showing 1-12</span> out of products</h5>
               <div className={'flexBetween max-sm:p-4 gap-x-4 px-8 py-3 rounded-5xl ring-1 ring-slate-900/15'}>Sort by <MdOutlineKeyboardArrowDown/></div>
           </div>

             <div className={'grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'}>
                 {all_product.map((item)=>{
                     if (category === item.category){
                         return <Item key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>

                     }
                 })}
             </div>

             <div className={'mt-16 text-center'}>
                 <button className={'btn_white_rounded'}>Load More</button>
             </div>
         </div>
       </section>
  );
};
export default Category;

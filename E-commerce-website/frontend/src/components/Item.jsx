/*
import {Link} from "react-router-dom";
import {FaSearch} from "react-icons/fa";

const Item = ({id,name,image,old_price, new_price}) => {
    return(
        <div className={'rounded-xl overflow-hidden shadow-lg'}>
            <div className={'relative flexCenter group overflow-hidden transition-all duration-100'}>
                <Link to={`product/${id}`} className={'h-12 w-12  flexCenter absolute top-1/2 bottom-1/2 !py-2 z-20 transition-all duration-700'}>{/!*<FaSearch className={'hover:rotate-90 hover:scale-125 transition-all duration-200'}/>*!/}</Link>
                <img src={image} alt={'productImage'} className={'w-full block object-cover group-hover:scale-110 transition-all duration-1000'} />
            </div>
            <div className={'p-4 overflow-hidden'}>
                <h4 className={'my-[6px] medium-16 line-clamp-2 text-tertiary'}>{name}</h4>
                <div className={'flex gap-5'}>
                    <div className={'bold-16 font-sans'}>RS {new_price}.00</div>
                    <div className={'text-red-800 bold-16 line-through font-sans'}>RS {old_price}.00</div>
                </div>
            </div>
        </div>
    )
}
export default Item*/
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Item = ({ id, name, image, old_price, new_price }) => {
  return (
    <div className={"rounded-xl overflow-hidden shadow-lg"}>
      <div
        className={
          "relative flexCenter group overflow-hidden transition-all duration-100"
        }
      >
        <Link
          to={`/product/${id}`}
          className={
            "h-full w-full absolute top-0 left-0 flexCenter z-20 transition-all duration-700"
          }
        >
          {/* <FaSearch className={'hover:rotate-90 hover:scale-125 transition-all duration-200'}/> */}
        </Link>
        <img
          onClick={window.scrollTo(0, 0)}
          src={image}
          alt={"productImage"}
          className={
            "w-full block object-cover group-hover:scale-110 transition-all duration-1000"
          }
        />
      </div>
      <div className={"p-4 overflow-hidden"}>
        <h4 className={"my-[6px] medium-16 line-clamp-2 text-tertiary"}>
          {name}
        </h4>
        <div className={"flex gap-5"}>
          <div className={"bold-16 font-sans"}>RS {new_price}.00</div>
          <div className={"text-red-800 bold-16 line-through font-sans"}>
            RS {old_price}.00
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

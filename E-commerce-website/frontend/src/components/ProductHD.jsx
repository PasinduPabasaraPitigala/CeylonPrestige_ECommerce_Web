import {TbArrowRight, TbBabyBottle} from "react-icons/tb";

const ProductHD =(props) => {
    const {product} = props;
    return(
        <div className={'flex items-center flex-wrap gap-x-2 medium-16 my-4 capitalize'}>
            Home <TbArrowRight/> shop <TbArrowRight/> {product.category}
            <TbArrowRight/> {product.name}
        </div>
    )
}

export default ProductHD
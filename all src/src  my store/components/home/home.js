import Product from "../product/product/product"
import Slider from "./slider/slider"

export default ({abc})=>{


return <div>

    <Slider />
    <div className="flex">
    {
        abc.map(function(product){
            return <Product data={product} />
        })
    }
    </div>
    
    {/* Category UI with a react plugin */}


</div>

}
const ProductCard = ({product}) => {
    return (

        <div className="productCard">
            <img className="productCard_Image" src='https://image.flaticon.com/icons/png/512/1794/1794228.png' alt="product placeholder"></img>
            <div className="productCard_Text">
                <div className="productCard_cashaz">
                    Navn: "{product.name}" | CAS#: {product.cas_number} | Hazard-Class: {product.hazard_class}
                </div>
                <div className="productCard_Description">{product.description}</div>
            </div>

            {/* if logged in then show button */}
            <button className="productCard_Button"> 
                Add to cart
            </button>
            
        </div>
    )
}

ProductCard.defaultProps={
    product: {
    name: "DefaultProp",
    type: "DefaultProp",
    id:1111,
    description: "DefaultPropDefaultPropDefaultPropDefaultPropDefaultPropDefaultPropDefaultProp",
    hazard_class: "DefaultClass",
    cas_number: 1,
    volume: 1,
    price: 1,
    type_fk: 1}

}

export default ProductCard

import ProductCard from './components/ProductCard.js'

const ProductPage = () => {
    const products =
    [
        {
            name: "Coop Superlim",
            type: "Adhesive",
            id:12,
            description: "Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            hazard_class: "Class B",
            cas_number: 40,
            volume: 950,
            price: 16,
            type_fk: 1
        },        {
            name: "Vores Superlim",
            type: "Adhesive",
            id:13,
            description: "Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            hazard_class: "Class B",
            cas_number: 40,
            volume: 950,
            price: 16,
            type_fk: 1
        },        {
            name: "Bilka Superlim",
            type: "Adhesive",
            id:14,
            description: "Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            hazard_class: "Class B",
            cas_number: 40,
            volume: 950,
            price: 16,
            type_fk: 1
        },        {
            name: "JemOgFix trælim",
            type: "Adhesive",
            id:15,
            description: "Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            hazard_class: "Class B",
            cas_number: 40,
            volume: 950,
            price: 16,
            type_fk: 1
        },        {
            name: "Harald Nyborg trælim",
            type: "Adhesive",
            id:16,
            description: "Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            hazard_class: "Class B",
            cas_number: 40,
            volume: 950,
            price: 16,
            type_fk: 1
        },{
            name: "Fakta universal lim",
            type: "Adhesive",
            id:17,
            description: "Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            hazard_class: "Class B",
            cas_number: 40,
            volume: 950,
            price: 16,
            type_fk: 1
        },
    ]



    return (
        <div className="productLanding">
            {products.map(product=>
            <ProductCard product={product}>

            </ProductCard>
            )}
            
            
        </div>
    )
}

export default ProductPage

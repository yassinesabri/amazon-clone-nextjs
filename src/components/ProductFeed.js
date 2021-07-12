import Product from "./Product"

function ProductFeed({products}) {
    return (
        <div className="stock-grid">
            {products?.slice(0,4).map(
                ({id, title, price, description, category, image}) => 
                <Product 
                    key={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
            )}   
            <img className="md:col-span-full" src="https://t.ly/cH1v" />
            <div className="md:col-span-2">
                {products?.slice(4,5).map(
                ({id, title, price, description, category, image}) => 
                <Product 
                    key={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
                )}
            </div>
            {products?.slice(5, products.length).map(
                ({id, title, price, description, category, image}) => 
                <Product 
                    key={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
                )}         
        </div>
    )
}

export default ProductFeed

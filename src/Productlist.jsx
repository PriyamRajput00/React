
const Products = () => {
    const products = [
        {id:  1 , name: "Phone"  , price: "$546"},
        {id:  2 , name: "Laptop"  , price: "$767"},
        {id:  3 , name: "Headphone"  , price: "$555"},
    ]
  return (
    <div>
        {products.map((product) => (
            <section key = {Math.random()}>
                <h1>Name : {product.namme}</h1>
                <h2>Price : {product.price}</h2>
            </section>
        ))}
    </div>
    
  )
}

export default Products
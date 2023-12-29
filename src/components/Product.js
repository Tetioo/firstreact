//map element loops through the array and performs what it is suppose to do
//inside the map function, you have access to individual products
//list rendering logic
export default function Product() {
    //const products = ["Laptop", "Phone", "Modem", "Computer"]
    const products = [
        {id:1, name:"Laptop", price:500}, 
        {id:2, name:"Phone", price:1500},
        {id:3, name:"Laptop", price:2000}]
    const fruits = ["Apple", "Mango", "Banana"]
    const fruitsList = fruits.map((fruit, index) => 
          <h3 key = {index}> {fruit} </h3>
    )
    return <div>{fruitsList}</div>
    /*const productList = products.map((product) =>
     ( <h3 key = {product.id}>{product.id}.{product.name}: ${product.price}</h3>))
    return <div>  {productList} </div>*/
}
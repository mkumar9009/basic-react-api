import { useReducer } from "react";

function Products(props) {

    const displayProds = () => {
        console.log('abc',props);
       const {prods} = props;
        //console.log(prods);
        
       if (prods &&  prods.length > 0){
            return (
                prods.map((prod,index) => {
                    //console.log(prod);
                    return (
                        <div>
                            <h3> {prod.title} </h3>
                        </div>
                    )
                })
            )
        }
       else {
           return ( <h3>no products found</h3>)
       }
    }

return(
    <>
    {displayProds()}
    </>
)

}




export default Products;

// use useReducer
// context api 
// use memo
// custom hooks
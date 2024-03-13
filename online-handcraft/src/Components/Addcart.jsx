import { useParams } from "react-router-dom";

const Addcart = ()=>{
    const {image}=useParams();
    console.log(image);
    return(
        <>
        <h1>hello</h1>
        </>
    )
}
export default Addcart;
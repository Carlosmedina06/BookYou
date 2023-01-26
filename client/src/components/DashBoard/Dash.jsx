import { GraphicBooksFreeToSubs } from "./BookGraph/BookGraph"
import { useSelector } from "react-redux"
import { quantityOfFreeBooks, quantityOFPayBooks } from "../../utils/Hooks/dashFunctions/bookFunctions"
export const Dash = () =>{

   

const booksSubs = quantityOFPayBooks()
const booksFree = quantityOfFreeBooks()
console.log(booksSubs, booksFree)
    
    return(
        <div>

            <GraphicBooksFreeToSubs />

        </div>
    )
}
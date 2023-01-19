import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../redux/userActions'
import { getBooks } from '../../redux/bookActions'
import { Link } from 'react-router-dom'
export const Landing = ()=>{

const users = useSelector(state=>state.users.users)

const books = useSelector(state=>state.books.books)

const dispatch = useDispatch()

if(users.length<1) dispatch(getUsers())
if(books.length<1) dispatch(getBooks())


    return(

        <div>
            <h1>Landing</h1>
            <Link to='/home'>
                <button type='button' value='enter'>Enter</button>
            </Link>
        </div>
    )
}
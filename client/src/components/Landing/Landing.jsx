import { useDispatch, useSelector } from 'react-redux'
import { getBooks, getUsers } from '../../redux/actions'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export const Landing = ()=>{

const users = useSelector(state=>state.users)

const books = useSelector(state=>state.books)

const dispatch = useDispatch()
useEffect(()=>{
    dispatch(getUsers())
    dispatch(getBooks())
},[])

//==== si no hay datos en db las dos lineas de abajo generan un loop complicado ======
// if(users.length<1) dispatch(getUsers())
// if(books.length<1) dispatch(getBooks())


    return(

        
        <div className="< bg-cover bg-no-repeat z-0grid w-full h-screen bg-lime-300 place-content-center self-center bg-[url('https://res.cloudinary.com/dn8jxsqka/image/upload/v1674164802/6489756157_37880f0bcc_pcxa0r.jpg')]">
            <div className=" <z-40 grid bg-white text-black rounded place-items-center self-center  px-32 py-20">
            <div className="text-4xl font-extrabold mt-8 mb-5 mx-5">
                <span className="text-black">
                    BOOKYOU
                </span>
                </div >
             <h2 className="grid font-lg place-items-center"><p className='font-lg'>Accede a una comunidad con cientos </p> <p>de libros donde puedes compartir</p><p>y publicar tus propios escritos.</p> </h2>
             <div>
        <Link to="/home">
            <div>
        <button className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 mt-7 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">ENTER</button>
        </div>
        </Link>
        </div>
        </div>
        </div>
    )
}
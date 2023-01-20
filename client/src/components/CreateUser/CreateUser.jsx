import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from "../../redux/actions"
import { validate, check } from "./utils"
import axios from 'axios'
import NavBar from "../NavBar/NavBar"
export const CreateUser = ()=>{

const dispatch = useDispatch()
const allUsers = useSelector(state=>state.users)
//======= si no hay nada en la db genera loop =======
// if(allUsers.length<1){
//     dispatch(getUsers())
// }

const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    
})
const [response, setResponse] = useState('')

const [errorButton, setErrorButton] = useState(true)

const [errorForm, setErrorForm] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
})

const userSend = {
    name: user.name,
    username: user.username,
    email: user.email,
    password: user.password
   
}

const [available, setAvailable]= useState(false)

useEffect(()=>{
    setAvailable(check(user, allUsers))
},[user])


const handleChange = (e) =>{

 setUser ( {
    ...user,
    [e.target.name] : e.target.value })
 setErrorForm(validate(user, available))

 }
 
const handleSubmit = async (e)=>{
    e.preventDefault()
    setErrorForm(validate(user, available)) 
    const info = await axios.post('http://localhost:3001/user/create',userSend)
    const res = info.data
    setResponse(res)
    
}


function handleReset (e){
    setUser({
        name: '',
        username: '',
        email: '',
        password: '',

    })
}
function handleClear (){
    setResponse('')
}

useEffect(()=>{
    setErrorForm(validate(user, available))
},[user, available])

useEffect(()=>{
    if(Object.values(errorForm).length<1){
        setErrorButton(false)
    }else{
        setErrorButton(true)
    }
},[errorForm])

//------------------------------------ RENDER ------------------------------//
if((response)!==''){
    
    if(!response.message){
        
    return(
        <section >
            <div >
                <h1>Created succesfully!</h1>
                <button type="button" onClick={handleClear}>Noted</button>
            </div>
        </section>
    )
    }else{
        return(
            <div >
            <h1>Request failed with status code 400</h1>
            <h2>{response.message}</h2>
            <button type="button" onClick={handleClear}>Noted</button>
            </div>
        )
    }
} else {
    return(
        <div className="grid grid-cols-12">
        <div className=" grid col-span-3">
        <NavBar/>
        </div>
        <div className="grid bg-white mt-16 ml-16 col-span-7 px-32 pt-10">
            
        <form clasName=" grid  place-content-center grid px-16  bg-black "onSubmit={handleSubmit}>
            <div>
                <div className="flex  text-lg font-bold  self-center"><h1>Register new User</h1></div>
                <div className="w-24 bg-whit flex flex-row">
            <label className="ml-1" >Name</label>
            </div>
            <input  
                className="w-4/5 border-lg  border border-black rounded"
                name='name' 
                value={user.name}
                type= 'text' 
                onChange={(e)=>handleChange(e)} 
                placeholder=' Name is required' /> 
                {errorForm.name? (<h5><small>{errorForm.name}</small></h5>) : false}
            </div>
            <div>
            <div className="w-24  flex flex-row">
            <label className="ml-1" >Username</label>
            </div>
            
            <input 
                 className="w-4/5 border-lg  border border-black rounded"
                name='username' 
                value={user.username} 
                onChange={(e)=>handleChange(e)} 
                placeholder='  Pick an alias' />
                {errorForm.username? (<h5><small>{errorForm.username}</small></h5>) : false} 
            </div>
            <div>
            <div className="w-24  flex flex-row">
            <label className="ml-1" >Email</label>
            </div>
            <input 
                className="w-4/5 border-lg  border border-black rounded"
                name='email' 
                value={user.email} 
                onChange={(e)=>handleChange(e)} 
                placeholder=' jhon@doe.com' />
                {errorForm.email? (<h5><small>{errorForm.email}</small></h5>) : false} 
            </div>
            <div>
            <div className="w-24  flex flex-row">
            <label className="ml-1" >Password</label>
            </div>
            <input 
                className="w-4/5 border-lg  border border-black rounded"
                name='password' 
                value={user.password} 
                type='password'
                onChange={(e)=>handleChange(e)} 
                placeholder=' Password here' />
                {errorForm.password? (<h5><small>{errorForm.password}</small></h5>) : false}
            </div>
                        
           <br></br>
           <div className=" flex flex-row px-14  mb-12">
            <button className="bg-transparent border border-black text-black font-bold py-2 px-4 rounded mx-3" type='button' 
                 
                onClick={(e)=>handleReset(e)}>RESET</button>
            <button type='submit' 
            className="bg-black border border-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mx-3"
                disabled={errorButton} 
                onSubmit={(e)=>handleSubmit(e)}>CREATE!</button>
                </div>
        </form>
        </div>
        </div>
       
    )}
}
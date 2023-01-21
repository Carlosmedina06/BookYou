import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from "../../redux/actions"
import { validate, check } from "./utils"
import axios from 'axios'
import NavBar from "../NavBar/NavBar"
export const CreateUser = () => {

  const dispatch = useDispatch()
  const allUsers = useSelector(state => state.users)
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

  const [available, setAvailable] = useState(false)

  useEffect(() => {
    setAvailable(check(user, allUsers))
  }, [user])


  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
    setErrorForm(validate(user, available))

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorForm(validate(user, available))
    const info = await axios.post('http://localhost:3001/user/create', userSend)
    const res = info.data
    setResponse(res)

  }


  function handleReset(e) {
    setUser({
      name: '',
      username: '',
      email: '',
      password: '',

    })
  }
  function handleClear() {
    setResponse('')
  }

  useEffect(() => {
    setErrorForm(validate(user, available))
  }, [user, available])

  useEffect(() => {
    if (Object.values(errorForm).length < 1) {
      setErrorButton(false)
    } else {
      setErrorButton(true)
    }
  }, [errorForm])

  //------------------------------------ RENDER ------------------------------//
  if ((response) !== '') {

    if (!response.message) {

      return (
        <section >
          <div >
            <h1>Created succesfully!</h1>
            <button type="button" onClick={handleClear}>Noted</button>
          </div>
        </section>
      )
    } else {
      return (
        <div >
          <h1>Request failed with status code 400</h1>
          <h2>{response.message}</h2>
          <button type="button" onClick={handleClear}>Noted</button>
        </div>
      )
    }
  } else {
    return (
      <div >
        <div >
          <NavBar />
        </div>
        <div >

          <form onSubmit={handleSubmit}>
            <div>
              <div ><h1>Register new User</h1></div>
              <div >
                <label  >Name</label>
              </div>
              <input

                name='name'
                value={user.name}
                type='text'
                onChange={(e) => handleChange(e)}
                placeholder=' Name is required' />
              {errorForm.name ? (<h5><small>{errorForm.name}</small></h5>) : false}
            </div>
            <div>
              <div>
                <label >Username</label>
              </div>

              <input

                name='username'
                value={user.username}
                onChange={(e) => handleChange(e)}
                placeholder='  Pick an alias' />
              {errorForm.username ? (<h5><small>{errorForm.username}</small></h5>) : false}
            </div>
            <div>
              <div >
                <label >Email</label>
              </div>
              <input

                name='email'
                value={user.email}
                onChange={(e) => handleChange(e)}
                placeholder=' jhon@doe.com' />
              {errorForm.email ? (<h5><small>{errorForm.email}</small></h5>) : false}
            </div>
            <div>
              <div >
                <label >Password</label>
              </div>
              <input

                name='password'
                value={user.password}
                type='password'
                onChange={(e) => handleChange(e)}
                placeholder=' Password here' />
              {errorForm.password ? (<h5><small>{errorForm.password}</small></h5>) : false}
            </div>

            <br></br>
            <div >
              <button type='button'

                onClick={(e) => handleReset(e)}>RESET</button>
              <button type='submit'

                disabled={errorButton}
                onSubmit={(e) => handleSubmit(e)}>CREATE!</button>
            </div>
          </form>
        </div>
      </div>

    )
  }
}
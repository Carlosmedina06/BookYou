import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <div className="containerxl items-center text-center flex mx-auto px-4 bg-hero-landing h-screen w-screen bg-cover bg-center">
      <div className="container sm:w-3/4 md:w-max  mx-auto items-center border-2 rounded p-10 shadow-lg">
        <h1 className="text-7xl text-center text-black font-bold border-white-4 mx-auto my-3 rounded sm:w-3/4 md:w-2/4 py-4 mb-5 bg-white shadow-lg">
          BOOK YOU
        </h1>
        <p className=" text-gray-200 font-semibold text-4xl">Welcome!</p>
        <p className=" text-gray-200 font-semibold text-2xl">
          Enter and connect with thousands of people around the world
        </p>
        <p className=" text-gray-200 font-semibold text-2xl">who share your birth for reading.</p>
        <p className=" text-gray-200 font-semibold text-2xl">What are you waiting for! ❤️</p>
        <Link to="/home">
          <button className="border-2 hover:bg-white text-white hover:text-black font-bold rounded-full px-4 mt-5 py-2 w-32 transition ease-in-out delay-150 ">
            Home
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Landing

import { Link } from 'react-router-dom'

export const DashNav = () =>{


    return (

        <div>
            <Link to='/userEdit'>
                <button type="button" >Edit User</button>
            </Link>
            <Link to='/bookEdit'>
                <button type="button">Edit Book</button>
            </Link>
            <Link to='/statistics'>
                <button type="button">Statistics</button>
            </Link>
        </div>
    )
}
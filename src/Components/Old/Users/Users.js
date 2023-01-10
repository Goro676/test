import {useState} from "react"
import "./Users.css"
const Users = () => {
    const [users, setUser] = useState([
        {id:1, name:"Jhon"},
        {id:2, name:"Ash"},
        {id:3, name:"Valod"},
        {id:4, name:"Gago"},
        {id:5, name:"Vardan"},
        {id:6, name:"Jane"}

    ])
    return(
        <div>
            <ol>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ol>
        </div>
    )
}
export default Users;
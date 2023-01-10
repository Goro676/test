import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const UserDetails = ()=> {
    const params = useParams();
    const navigate = useNavigate();

    const[user, setUser] = useState({});
    const[isFetch, setIsFetch] = useState(true);
    
    useEffect(()=> {
        if(isFetch) {
            axios.get(`https://reqres.in/api/users/${params.id}`).then(response=> {
                setUser(response.data.data);
            }).finally (()=> {
                setIsFetch(false)
            });
        }
    }, [isFetch])
    return (
        <div>
            <button  
                onClick ={() => {
                    navigate("/users")
                }}
                className="btn-btn-secondary mt-2 mb-2" >
            Back</button>
            <h1>{user.first_name} {user.last_name}</h1>
            <img src={user.avatar} />
        </div>
    )
}
export default UserDetails;

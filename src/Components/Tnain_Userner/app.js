import "./User.css"

const User = ({id, name, age, active}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td style={{color:active?"green" : "red"}}>{active? "Yes" : "No"}</td>
        </tr>
    )
}
export default User;
import { useState } from "react"
import "./User.css"
import User from "./app"
const users = [
    {id:1, name:'John', age:23, active:true},
    {id:2, name:'Tom', age:21, active:false},
    {id:3, name:'Erik', age:18, active:true},
    {id:4, name:'Sarah', age:19, active:false},
    {id:5, name:'Mikle', age:34, active:false},
    {id:6, name:'Jack', age:26, active:true}
] 


const Users = () => {
    

return (
    <div className="div_table">
        <table>
  <thead>
    <tr> 
      <th>#Id</th>
      <th>Name</th>
      <th>Age</th>
      <th>Active</th>
    </tr>
  </thead>
    <tbody>
    <tr>
      <td>
      {users.map((user) => (
        <User
        key = {user.id}
        id = {user.id}
        name = {user.name}
        age = {user.age}
        active = {user.active}
        />
      ))}
      </td>
    </tr>
    </tbody>
    </table>
    </div>
)
}
export default Users;
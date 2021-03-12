import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function UserSection() {
    const [users, setUsers] = useState()

    const loadUsers = async() => {
        const response = await axios.get("https://randomuser.me/api/?results=20")
        if(response){
            setUsers(response)
            console.log(response.data.results)}
        
    }

    useEffect(() => {
        loadUsers()
    }, [])


    return (
        <div>
            
        </div>
    )
}
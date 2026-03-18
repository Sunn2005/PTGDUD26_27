import React, { useEffect, useState } from 'react'

 function Bai1(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );
                const data = await response.json();
                setUsers(data)
            } catch (error) {
                console.log("Error", error)
            }

        }
        fetchUsers();

    })
    /*
    useEffect(() => {
        var url = "https://jsonplaceholder.typicode.com/users";
        var res = fetch(url);

        res.then((response) => {
            return response.json();
        }).then((data) => {
            setUsers(data);
            console.log(data);
        })

    }, [])
    */


    return (
        <div>
            <h2>User List</h2>
            {users.map((user) => (
                <div key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ))}
        </div>
    )
}

export default Bai1

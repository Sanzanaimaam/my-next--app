import React from 'react';

const UserPage = async ({ params }) => {
    const { userId } = await params
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const user = await res.json()
    return (
        <div>

            <h1>Page details</h1>
            <h3>{user.name}</h3>
            <p>Username: {user.username}</p> 
            <p>Email: {user.email}</p> 
            <p>Phone: {user.phone}</p> 
            <p>Website: {user.website}</p>

        </div>
    );
};

export default UserPage;
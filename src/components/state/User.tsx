import { useState } from "react";
type AuthUser = {
    name: string, 
    email: string
}

export const User = (props: AuthUser) => {
    const [user, setUser] = useState< AuthUser | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleInput = () => {
        setUser({
            name: 'dung nguyen',
            email: 'dung@gmail.com'
        })
    }
    const handleOutput = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleInput}>LoggedIn</button>
            <button onClick={handleOutput}>LoggedOut</button>
            <div>User is name {props.name}</div>
            <div>User is email {props.email}</div>
        </div>
    )
}
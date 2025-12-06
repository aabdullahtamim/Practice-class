import { Button } from "@/components/ui/button";
import { useState } from "react";


function User() {

    const [user, setUser] = useState({
        id: 1,
        name: 'user name',
        email: "useremail@gmail.com"
    });

    const [count, setCount] = useState(0);

    const handleClick = () => {
        const newObj = {
            id: 2,
            name: ' name-02',
            email: "useremail2@gmail.com"

        }

        setUser(newObj)

    }

    return (
        <div>

            {user.name}

            <Button onClick={handleClick}>Change user </Button>


            <Button onClick={() => setCount(prev => prev + 1)}>Click to Change{count} </Button>


        </div>
    )
}

export default User
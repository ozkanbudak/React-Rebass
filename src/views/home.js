import React from "react";
import { Link } from "react-router-dom";

const Home = ({children}) => {
    return (
        <div>
            {children}
            <Link to="profile/test">Go to Profile</Link>
        </div>
    )
}

export default Home
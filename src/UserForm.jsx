import { useState } from "react";
import axios from "axios";

const UserForm = () => {
    const [submit, setSubmit] = useState(0);
    const [user, setUser] = useState({
        name: "",
        email: "",
    });

    const handleUser = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.name == "" || user.email == "") return;

        axios.post("http://localhost:5000/form", user);
        // .then((result) => console.log(result))
        // .catch((err) => console.log(err));

        setSubmit(1);
        // setTimeout(() => {
        //     window.location.reload();
        // }, 2000);
    };

    return (
        <>
            {submit ? (
                <>
                    <h3>Submitted</h3>
                </>
            ) : (
                <form onSubmit={handleSubmit} className="form">
                    <h1>User Details</h1>
                    <h3>Name</h3>
                    <input
                        value={user.name}
                        name="name"
                        type="text"
                        onChange={handleUser}
                        placeholder="Enter your Name..."
                    />
                    <h3>Email</h3>
                    <input
                        value={user.email}
                        name="email"
                        type="email"
                        onChange={handleUser}
                        placeholder="Enter your Email..."
                    />
                    <button type="submit" className="submit-btn">
                        Submit
                    </button>
                </form>
            )}
        </>
    );
};

export default UserForm;

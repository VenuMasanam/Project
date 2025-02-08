    import React, { useState } from "react";
    import { useNavigate } from "react-router-dom";
    import "./Auth.css";

    const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
        }

        console.log("Signup attempted with:", name, email, password);
        navigate("/login"); // Redirect after signup
    };

    return (
        <div className="auth-container">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
            <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            />
            <button type="submit">Sign Up</button>
            <p>
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Log In</span>
            </p>
        </form>
        </div>
    );
    };

    export default Signup;

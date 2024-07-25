import React, { useState } from "react";
import Register from "./Register";
import Login1 from "./Login1";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const showLogin = () => setIsLogin(true);
    const showRegister = () => setIsLogin(false);

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <div>
                <button onClick={showLogin} style={{ marginRight: '10px', padding: '10px' }}>
                    Login
                </button>
                <button onClick={showRegister} style={{ padding: '10px' }}>
                    Register
                </button>
            </div>
            {isLogin ? 
                <div style={{ marginTop: '20px' }}>
                    <Login1 />
                </div>
                : 
                <div style={{ marginTop: '20px' }}>
                    <Register />
                </div>
            }
        </div>
    );
};

export default Login;
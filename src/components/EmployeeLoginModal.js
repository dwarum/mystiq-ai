import {useState} from "react";
import Link from "next/link";

const EmployeeLoginModal = ({show, onClose}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    //hardcoded creds
    const VALID_EMAIL = "43991@mystiq.ai"
    const VALID_PASSWORD = "Universal12!@"


    const onHandleSubmit = (e) => {
        e.preventDefault();

        if (email === VALID_EMAIL && password === VALID_PASSWORD){
            //store login status in session
            sessionStorage.setItem("isLoggedIn", "true");

            //redirect to employee-info page
            window.location.href = "/employee-info";
        }
        else{
            setError("Invalid email or password");
            setTimeout(()=> setError(""),3000);
        }
    };

    if (!show) return null;

    return(
        <>
        {/** Backdrop */}
        <div
            className="login-modalbackdrop"
            onClick={onClose}
        />

        {/** Modal */}
        <div className={`employee-login-modal ${show ? 'show' : ''}`}>
            <div className="modal-content">
                <div className="modal-header">
                    <h3>Mystiq Labs</h3>
                    <button className="close-btn" onClick={onClose}>
                        <i className="far fa-times" />
                    </button>
                </div>

                <form onSubmit={onHandleSubmit}>
                    <div className="form-group">
                       <input 
                            type="email"
                            className="form-control"
                            placeholder="employeeID@mystiq.ai"
                            value={email}
                            onChange = {(e)=> setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="main-btn btn-block">
                        Login
                    </button>

                    {error && (<div className="error-message">
                        {error}
                    </div>
                    )}
                </form>
            </div>
        </div>
        </>
    );
};

export default EmployeeLoginModal;


import {auth, provider} from "../firebase-config.js";
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();
export const Auth = () =>{
    //const navigate = useNavigate();
    const SignInWithGoogle = async (props) =>{
        try {
           const result = await signInWithPopup(auth, provider);
           cookies.set("auth-token", result.user.refreshToken);
           props.setIsAuth(true);
           //navigate("./Chat")
        } catch (error) {
            console.error("Error signing in with Google: ", error);
        }
    };
    return(
        <div className="auth">
            <h1 className="logo">HitUp</h1>
            <p>Sign in with Google to continue</p>
            <button onClick={SignInWithGoogle} className="login">Sign in with Google</button>
        </div>
    );
    
};
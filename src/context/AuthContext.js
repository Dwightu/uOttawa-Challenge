import { createContext } from "react";

import axios from "axios";
import { flash } from "react-universal-flash";

import { useNavigate } from "react-router-dom";




const AuthContext = createContext()


export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const validateMFA = async (email, MFA) => {
        console.log('context is doing')
        const res = await axios.post(`https://interview.outstem.io/auth/mfa`,
            {
                email: email,
                code: MFA,
            }).catch((err) => {
                flash("You entered a wrong MFA code, try again!", 2000, "green")
            })
        if (res.status === 200) {
            window.location.replace(`https://interview.outstem.io/oauth?identity=${res.data.identity}`);
        } else {
        }
    }

    const validateLogin = async (email, password) => {
        await axios.post(`https://interview.outstem.io/auth`,
            {
                email: email,
                password: password,

            })
            .then((res) => {
                if (res.data.challenge == null) {
                    window.location.replace(`https://interview.outstem.io/oauth?identity=${res.data.identity}`);
                }

                console.log(res.data.challenge === "MFA")
                if (res.data.challenge == "MFA") {
                    navigate(`/MFA/${email}`);
                }
            })
            .catch((err) => {
                flash("You entered a wrong Password or information, try again!", 2000, "green")
            })
        // const response = await fetch(`https://interview.outstem.io/auth`, {
        // method: 'POST',
        // body: `{
        //     "email": "${email}",
        //     "password": "${password}"
        // }`
        // })s
        // console.log(response)
        // console.log(res.status === 200);

    }



    return <AuthContext.Provider value={{ validateLogin, validateMFA }}>{children}</AuthContext.Provider>
}
export default AuthContext
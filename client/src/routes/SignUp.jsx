import React, {useState, useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function SignUp() {
    const history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e){
        e.preventDefault();

        try {
            await axios.post("http://localhost:3001/SignUp", {
                email, password
            }).then(res=>{
                if (res.data=="exist") {
                    console.log("already signed up");
                }else if (res.data=="notExist") {
                    history("/Home",{state:{id:email}})
                }
            }).catch(e=>console.log(e))
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div>
            <h1>    SignUp</h1>
            <form>
                <input type="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="email" id=""/>
                <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="password" id=""/>
           
            <input type="submit" onClick={submit}/>
            </form>
        </div>
    )
}
import React, {useState, useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    
    const history = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e){
        e.preventDefault();

        try {
            await axios.post("http://localhost:3001/Login", {
                email, password
            }).then(res=>{
                if (res.data=="exist") {
                    history("/Home",{state:{id:email}})
                }else if (res.data=="notExist") {
                    console.log("hasnt signed up");
                }
            }).catch(e=>console.log(e))
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div>
            <h1>login</h1>
            <form>
                <input type="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="email" id=""/>
                <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="password" id=""/>
           
            <input type="submit" onClick={submit}/>
            </form>
            <br/>
            <p>OR</p>
            <br/>
            <Link to="/SignUp">SignUp page</Link>
        </div>
    )
}
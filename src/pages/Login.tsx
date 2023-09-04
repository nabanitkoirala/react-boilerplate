import { useState } from "react"
import HttpBrowsing from "../utils/HttpBrowsing"
import { useNavigate } from "react-router-dom"


const Login = () => {
    const navigate = useNavigate()
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')


    const handleSubmit = (e) => {
        e.preventDefault()

        HttpBrowsing.post('/account/obtain-token/', { username: name, password }, false)
            .then(res => {
                localStorage.setItem("access_token", res.data.token);
                // localStorage.setItem("refreshToken", res.data.refreshToken);
                navigate('/dashboard');
            })
            .catch(err => {
                console.log("this is error", err.response);
            })
    }
    return (
        <div>
            <input type="text" name="name" placeholder="name" onChange={(e) => setName(e.target.value)} />
            <input type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <button type="button" onClick={handleSubmit} >Submit</button>
        </div>
    )
}

export default Login
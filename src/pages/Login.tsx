import { useContext, useState } from "react"
import HttpBrowsing from "../baseRouting_network_call/HttpBrowsing"
import { useNavigate } from "react-router-dom"
import { TokenStore_Context } from "../baseRouting_network_call/Store"



const Login = () => {
    const navigate = useNavigate()
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [tokenStore, setTokenStore] = useContext(TokenStore_Context)



    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("access_token", 'asdasdaskjdlajsldjlasjdl');
        navigate('/dashboard');
        // HttpBrowsing.post('/login/', { username: name, password }, true)
        //     .then(res => {

        //         setTokenStore(res.data.token)
        //         localStorage.setItem("access_token", res.data.token);
        //         // localStorage.setItem("refreshToken", res.data.refreshToken);
        //         navigate('/dashboard');
        //     })
        //     .catch(err => {
        //         console.log("this is error", err.response);
        //     })
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
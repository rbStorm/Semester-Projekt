import {useState, useContext} from 'react'
import { Switch } from 'react-router'
import {GlobalContext} from '../../context/GlobalState'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(GlobalContext)
    const [tempText, setTempText] = useState('')

    const fetchUser = async()=>
    {
        //Rigtig skidt løsning
        const res = await fetch(`http://localhost:5001/users?email=${email}&password=${password}&_limit=1`)
        const data = await res.json()
        return data
    }

    const onSubmit=e=>{
        e.preventDefault();

 
        const usersFromServer = fetchUser().then((usersFromServer)=>
        {
            if(Object.keys(usersFromServer).length===0){
                return alert("Forkert email eller password")
            }else if(typeof usersFromServer === Array){
                setUser(usersFromServer[0])
                //redirect to homepage
            }else{
                setUser(usersFromServer[0])
                //redirect to homepage
            }
        }
        ).catch((message)=>{return alert("Forkert email eller password")})
        
    }


    return (
        <div className="account-form">
        <form onSubmit={onSubmit}>
            <h1 className="">Please sign in</h1>
            <input type="email" className="form-input" placeholder="Email address" required onChange={(e) => setEmail(e.target.value)}/>

            <input type="password" className="form-input" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)} />

            <button className="form-submit" type="submit">Sign in</button>
        </form>
        </div>
    )
}

export default Login

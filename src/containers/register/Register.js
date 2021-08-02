import {useState} from 'react';
import {Redirect} from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const cart = []
    const [redirect, setRedirect] = useState(false)

    const submit=(e)=>{
    e.preventDefault();

        fetch('http://localhost:5001/users', {
        method: 'POST',
        headers:{
        'Content-type': 'application/json'
        },
        body: JSON.stringify({name, lastName, email, password, cart})
    })

    setRedirect(true)
}

    if(redirect){
        return <Redirect to="/login"/>
    }

    return (
        <div className="account-form">
        <form onSubmit={submit}>
            <h1 className="">Fill in your details</h1>

            <input type="name" className="form-input" placeholder="First name" required
                onChange={e=>setName(e.target.value)}
            />
            <input type="name" className="form-input" placeholder="Last name" required
                onChange={e=>setLastName(e.target.value)}
            />
            <input type="email" className="form-input" placeholder="Email address" required
                onChange={e=>setEmail(e.target.value)}
            />
            <input type="password" className="form-input" placeholder="Password" required
                onChange={e=>setPassword(e.target.value)}    
            />

            <button className="form-submit" type="submit">Register</button>
        </form>
        </div>
    )
}

export default Register

// const saveUser = async (user) =>{
//     await fetch('http://localhost:5001/users', {
//       method: 'POST',
//       headers:{
//         'Content-type': 'application/json'
//       },
//       body: JSON.stringify({user})
//     })
//     console.log(user);
//   }
  


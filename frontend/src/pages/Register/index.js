import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom' //reload page without reload the whole document
import './styles.css'
import logoImg from '../../assets/logo.svg'
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api'
export default function Register(){
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [whatsapp,setWhatsapp] = useState('')
    const [city,setCity] = useState('')
    const [uf,setUf] = useState('')
    
    const history = useHistory()
    async function handleRegister(e){
        e.preventDefault()
        const data={
            name,
            email,
            whatsapp,
            city,
            uf,
        }
        try{
            const response = await api.post('ongs',data)
            alert(`Your ID ${response.data.id}`)
            history.push('/')
        }
        catch(err){
            alert('error')
        }
        
    }
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>
                    <h1>Sign in</h1>
                    <p>Create your account, join in the plataform and help people to find the cases of your NGO</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Don't have an account
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Name of the NGO" type="text"
                        value = {name}
                        onChange = {e=>setName(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value = {email}
                        onChange = {e=>setEmail(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="WhatsApp"
                        value = {whatsapp}
                        onChange = {e=>setWhatsapp(e.target.value)}
                    />
                    <div className="input-group">
                        <input 
                            type="text" 
                            placeholder="City"
                            value = {city}
                            onChange = {e=>setCity(e.target.value)}
                        
                        />
                        <input 
                            placeholder="NSW" 
                            style={{width:100}}
                            value = {uf}
                            onChange = {e=>setUf(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
        
    )
}
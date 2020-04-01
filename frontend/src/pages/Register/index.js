import React from 'react'
import {Link} from 'react-router-dom' //reload page without reload the whole document
import './styles.css'
import logoImg from '../../assets/logo.svg'
import {FiArrowLeft} from 'react-icons/fi'
//import api from '../../services'
export default function Register(){
    /*function handleRegister(){
        
    }*/
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
                <form action="">
                    <input placeholder="Name of the NGO" type="text"/>
                    <input type="email" placeholder="E-mail"/>
                    <input type="text" placeholder="WhatsApp"/>
                    <div className="input-group">
                        <input type="text" placeholder="City"/>
                        <input placeholder="NSW" style={{width:100}}/>
                    </div>
                    <button className="button" type="submit">register</button>
                </form>
            </div>
        </div>
        
    )
}
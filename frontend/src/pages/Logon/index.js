import React from 'react'
import {Link} from 'react-router-dom' //reload page without reload the whole document
import {FiLogIn} from 'react-icons/fi'
import './styles.css'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
export default function Logon(){
    return (
        
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the hero" />

                <form>
                    <h1>Login</h1>
                    <input placeholder="Your ID" type="text"/>
                    <button className="button" type="submit">Sign in</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Don't have an account
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    )
}


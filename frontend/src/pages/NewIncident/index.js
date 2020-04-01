import React from 'react'
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import './styles.css'
import logoImg from '../../assets/logo.svg'
export default function NewIncident(){
    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>
                    <h1>Register a new case</h1>
                    <p>Make a detailed descripition of the case to find a hero to solve it</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Return to home
                    </Link>
                </section>
                <form action="">
                    <input placeholder="Name of the case" type="text"/>
                    <textarea placeholder="Description"/>
                    <input placeholder="Cost"/>
                    <button className="button" type="submit">Register the Case</button>
                </form>
            </div>
        </div>
        
    )
}
import React from 'react'
import logoImg from '../../assets/logo.svg'
import {Link} from 'react-router-dom'
import {FiPower,FiTrash2} from 'react-icons/fi'
import './styles.css'
export default function Profile(){
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span> Welcome</span>
                <Link className="button" to="/incidents/new"> Register a new case</Link>
                <button type="button">
                    <FiPower size={18}/>
                </button>
            </header>
            <h1>Cases</h1>
            <ul>
                <li>
                    <strong>CASE:</strong>
                    <p>Test Case</p>
                    
                    <strong>DESCRIPTION</strong>
                    <p>Test Description</p>

                    <strong>Cost:</strong>
                    <p>$120.00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>CASE:</strong>
                    <p>Test Case</p>
                    
                    <strong>DESCRIPTION</strong>
                    <p>Test Description</p>

                    <strong>Cost:</strong>
                    <p>$120.00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li><li>
                    <strong>CASE:</strong>
                    <p>Test Case</p>
                    
                    <strong>DESCRIPTION</strong>
                    <p>Test Description</p>

                    <strong>Cost:</strong>
                    <p>$120.00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li><li>
                    <strong>CASE:</strong>
                    <p>Test Case</p>
                    
                    <strong>DESCRIPTION</strong>
                    <p>Test Description</p>

                    <strong>Cost:</strong>
                    <p>$120.00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                
            </ul>

        </div>
    )
}
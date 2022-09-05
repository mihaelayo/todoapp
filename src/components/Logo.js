import React from 'react'
import logo from '../assets/logo_impactly.svg'
import { Link } from 'react-router-dom'

export default function Logo() {
    return (
      <div className='logo-main'>
        <Link to='/'>
        <img src={logo} alt='Impactly logo'></img>
        </Link>
      </div>
    )
  }

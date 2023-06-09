import React from 'react'
import Logo from '../../assets/logo.png'
import s from './Header.module.scss'

const Header = () => {
	return <img className={s.logo} src={Logo} alt='Логотип' />
}

export default Header

import React, { useState } from 'react'
import { FaEye, FaUserAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'
import Particl from '../Layout/particles'

const Login = () => {
	const [user, setUser] = useState('')
	const [pass, setPass] = useState('')
	const isAuthenticated = localStorage.getItem('token')

	const GetLogin = () => {
		try {
			if (!user) {
				toast.error('Username kiriting iltimos!')
				return
			}
			if (!pass) {
				toast.error('Password kiriting iltimos!')
				return
			}

			// LocalStorage-ga ma'lumotni saqlash
			localStorage.setItem('token', JSON.stringify({ user, pass }))

			toast.success('Tizimga muvaffaqiyatli kirdingiz!')
			window.location.pathname = '/' // Sahifani yangilash
		} catch (error) {
			toast.error('Xatolik yuz berdi! Qayta urinib ko‘ring.')
		}
	}

	return (
		<div className=''>
			<Particl />
			<div className='container h-[100vh] relative z-20 flex justify-center items-center'>
				<div className='bg-white/30 w-[700px] h-[550px] rounded-lg flex flex-col justify-center items-center gap-[20px]'>
					<h2 className='font-bold text-white text-[30px]'>
						Welcome to our sales site
					</h2>
					<div className='w-[80%] border border-white/30 flex relative h-[40px] rounded-md'>
						<input
							type='text'
							placeholder='Username'
							className='w-full h-full px-3 text-white outline-none bg-transparent'
							value={user}
							onChange={e => setUser(e.target.value)}
						/>
						<FaUserAlt className='absolute right-2 top-2.5 text-white' />
					</div>
					<div className='w-[80%] border border-white/30 flex relative h-[40px] rounded-md'>
						<input
							type='password'
							placeholder='Password'
							className='w-full h-full px-3 text-white outline-none bg-transparent'
							value={pass}
							onChange={e => setPass(e.target.value)}
						/>
						<FaEye className='absolute right-2 top-2.5 text-white' />
					</div>

					<button
						onClick={GetLogin}
						className='w-[80%] border border-white/30 text-[20px] text-white font-bold bg-white/30 active:bg-white/10 border-none outline-none h-[40px] rounded-md'
					>
						Login
					</button>
				</div>
			</div>
		</div>
	)
}

export default Login

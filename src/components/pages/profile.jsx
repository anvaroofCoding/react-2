import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Profile = () => {
	const [profile, setProfile] = useState({
		fullName: '',
		email: '',
		phone: '',
	})

	// LocalStorage-dan ma'lumotlarni yuklash
	useEffect(() => {
		const savedProfile = localStorage.getItem('userProfile')
		if (savedProfile) {
			setProfile(JSON.parse(savedProfile))
		}
	}, [])

	// Inputlar uchun o'zgarishlarni kuzatish
	const handleChange = e => {
		const { name, value } = e.target
		setProfile(prev => ({ ...prev, [name]: value }))
	}

	// Ma'lumotlarni saqlash
	const saveProfile = () => {
		localStorage.setItem('userProfile', JSON.stringify(profile))
		toast.success('saqlandi')
	}

	return (
		<div className='max-w-md mx-auto mt-10 p-6 h-[50vh] bg-white shadow-lg rounded-lg'>
			<h2 className='text-2xl font-bold mb-4'>Shaxsiy kabinet</h2>
			<div className='mb-4'>
				<label className='block text-sm font-medium'>Ism Familiya:</label>
				<input
					type='text'
					name='fullName'
					value={profile.fullName}
					onChange={handleChange}
					className='w-full border p-2 rounded'
				/>
			</div>
			<div className='mb-4'>
				<label className='block text-sm font-medium'>Email:</label>
				<input
					type='email'
					name='email'
					value={profile.email}
					onChange={handleChange}
					className='w-full border p-2 rounded'
				/>
			</div>
			<div className='mb-4'>
				<label className='block text-sm font-medium'>Telefon:</label>
				<input
					type='text'
					name='phone'
					value={profile.phone}
					onChange={handleChange}
					className='w-full border p-2 rounded'
				/>
			</div>
			<button
				onClick={saveProfile}
				className='w-full bg-black text-white p-2 rounded hover:bg-black/40'
			>
				Saqlash
			</button>
		</div>
	)
}

export default Profile

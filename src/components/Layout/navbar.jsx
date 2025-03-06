import React, { useContext } from 'react'
import { FaRegStar, FaSearch, FaUserAlt } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { cardContext } from '../../context/cardList'

const Navbar = () => {
	const { count, setCount } = useContext(cardContext)
	return (
		<div className='sticky z-10 top-0'>
			<nav className='bg-black text-white '>
				<div className='container  h-[100px] flex flex-row justify-between items-center'>
					<ul className='flex gap-[30px]'>
						<Link to={'/'}>
							<li className='hover:text-blue-400 cursor-pointer font-bold'>
								Home
							</li>
						</Link>
						<Link to={'/login'}>
							<li className='hover:text-blue-400 cursor-pointer font-bold'>
								Login
							</li>
						</Link>
					</ul>
					<div className='flex gap-[20px] items-center'>
						<div className='flex items-center border border-white/30 p-2 rounded-xl'>
							<input type='search' className='border-none outline-none' />
							<FaSearch />
						</div>
						<FaRegStar />
						<Link to={'/profile'}>
							<FaUserAlt />
						</Link>
						<Link to={'/shopping'}>
							<div className='flex items-center gap-[5px]'>
								<FaCartShopping />
								<sup>{count.length}</sup>
							</div>
						</Link>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Navbar

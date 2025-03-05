import React, { useContext } from 'react'
import { FaRegStar, FaSearch, FaUserAlt } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { cardContext } from '../../context/cardList'

const Navbar = () => {
	const { count, setCount } = useContext(cardContext)
	console.log(count.length)
	return (
		<div className='sticky z-10 top-0'>
			<nav className='bg-black text-white '>
				<div className='container  h-[100px] flex flex-row justify-between items-center'>
					<ul className='flex gap-[30px]'>
						<li className='hover:text-blue-400 cursor-pointer'>Сувениры</li>
						<li className='hover:text-blue-400 cursor-pointer'>
							Красота и здоровье
						</li>
						<li className='hover:text-blue-400 cursor-pointer'>Электроника</li>
						<li className='hover:text-blue-400 cursor-pointer'>Бренды</li>
						<li className='hover:text-blue-400 cursor-pointer'>Обувь</li>
						<li className='hover:text-blue-400 cursor-pointer'>Хоз. товары</li>
						<li className='hover:text-blue-400 cursor-pointer'>Авто товары</li>
					</ul>
					<div className='flex gap-[20px] items-center'>
						<div className='flex items-center border border-white/30 p-2 rounded-xl'>
							<input type='search' className='border-none outline-none' />
							<FaSearch />
						</div>
						<FaRegStar />
						<FaUserAlt />
						<div className='flex items-center gap-[5px]'>
							<FaCartShopping />
							<sup>{count.length}</sup>
						</div>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Navbar

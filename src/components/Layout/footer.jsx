import React from 'react'
import { FaChevronRight, FaInstagramSquare, FaTelegram } from 'react-icons/fa'

const Footer = () => {
	return (
		<div>
			<footer className='bg-black relative w-full bottom-0'>
				<div className='container  border-white min-h-[300px] pt-10 text-white flex justify-between p-3'>
					<ul className='flex flex-col gap-[10px]'>
						<li className='font-bold text-[18px]'>Каталог</li>
						<li>Одежда</li>
						<li>Обувь</li>
						<li>Аксессуары</li>
						<li>Расчет стоимости</li>
					</ul>
					<ul className='flex flex-col gap-[10px]'>
						<li className='font-bold text-[18px]'>Информация</li>
						<li>Блог</li>
						<li>Контакты</li>
						<li>Доставка</li>
						<li>Оплата</li>
						<li>FAQ</li>
					</ul>
					<ul className='flex flex-col gap-[10px]'>
						<li className='font-bold text-[18px]'>Контакты</li>
						<li>info@grafus.info</li>
						<li>+998 00 000 00 00</li>
						<li>Мессенджеры</li>
						<li>
							<FaTelegram className='text-[20px]' />
						</li>
						<li>Наши соц.сети</li>
						<li>
							<FaInstagramSquare className='text-[20px]' />
						</li>
					</ul>
					<ul className='flex flex-col gap-[20px]'>
						<li className='font-bold text-[18px]'>Подписка на новости</li>
						<li>Будьте в курсе скидок и новостей</li>
						<li className='flex gap-2'>
							<input
								type='email'
								placeholder='Ваш email'
								className=' border-b outline-none border-b-white'
							/>
							<button className='border w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'>
								<FaChevronRight />
							</button>
						</li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</footer>
		</div>
	)
}

export default Footer

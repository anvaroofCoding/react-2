import React from 'react'
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Autoplay, Navigation, Pagination } from 'swiper/modules'

export default function SwiperComponent() {
	return (
		<>
			<div className='container min-h-[100vh] flex justify-between items-center'>
				<SwiperReact
					autoplay={{
						delay: 3000, // Har 3 soniyada slayder almashinadi
						disableOnInteraction: false, // Foydalanuvchi o‘zaro aloqada bo‘lsa ham davom etadi
					}}
					pagination={{ clickable: true }}
					navigation={true}
					modules={[Pagination, Navigation, Autoplay]}
					className='mySwiper w-full h-[700px] flex justify-center items-center relative z-0'
				>
					<SwiperSlide>
						<img
							src='https://png.pngtree.com/png-clipart/20221223/original/pngtree-mega-sale-promotion-banner-png-image_8799988.png'
							alt='sale'
							className='w-full h-full object-cover'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src='https://cdn.hswstatic.com/gif/web-advertising.jpg'
							alt='advertising'
							className='w-full h-full object-cover'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src='https://st.depositphotos.com/50311198/51553/i/450/depositphotos_515536192-stock-photo-special-offer-sale-discount-number.jpg'
							alt='discount'
							className='w-full h-full object-cover'
						/>
					</SwiperSlide>
				</SwiperReact>
			</div>
		</>
	)
}

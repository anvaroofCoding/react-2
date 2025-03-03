import React, { useEffect, useState } from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { apiCleint } from '../../utils/apiServis'
import { productsUrl } from '../../utils/urls'
import SwiperComponent from '../shared/swiper'

const Products = () => {
	const [data, setData] = useState([])

	const getProducts = async () => {
		let res = await apiCleint({
			method: 'GET',
			url: productsUrl,
		})
		console.log(res)

		if (res.is_seccess) {
			setData(res?.data.products)
		}
		// axios('https://dummyjson.com/products')
		// 	.then(res => {
		// 		setData(res?.data.products)
		// 	})
		// 	.catch(err => {
		// 		console.log(err.message)
		// 	})
	}

	useEffect(() => {
		getProducts()
	}, [])

	return (
		<div>
			<SwiperComponent />
			<div className='container min-h-[1000px] pb-[200px]'>
				<div className='catalog w-full h-[100px]'></div>
				<div className='products w-full min-h-[900px] grid grid-cols-4 gap-[30px]'>
					{data?.map(product => (
						<Link to={`/products-detail/${product.id}`}>
							<div
								key={product.id}
								className='border h-[500px] shadow-xl border-black/30 rounded-md p-4'
							>
								<div className='w-full h-[70%]'>
									<img
										src={product.thumbnail}
										alt={product.title}
										className='object-cover w-full h-full'
									/>
								</div>
								<div className='w-full h-[30%] flex flex-col justify-between items-start gap-[5px]'>
									<h2 className='font-bold text-[20px]'>
										{product.title.length < 20
											? product.title
											: product.title.slice(0, 20) + '...'}
									</h2>
									<p className='font-bold'>{product.category}</p>
									<p className='font-bold'>${product.price}</p>
									<button className='bg-black text-white w-full gap-[5px] h-[40px] rounded-xl flex justify-center items-center uppercase text-[15px] cursor-pointer'>
										купить
										<FaCartShopping />
									</button>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default Products

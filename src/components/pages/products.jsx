import { Empty, Select, Space, Typography } from 'antd'

import React, { useContext, useEffect, useState } from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { cardContext } from '../../context/cardList'
import { apiCleint } from '../../utils/apiServis'
import { categroiya, productsCategry, productsUrl } from '../../utils/urls'
import SwiperComponent from '../shared/swiper'

const Products = () => {
	const [data, setData] = useState([])
	const [categry, SetCategry] = useState([])
	const [NetCotegries, SetNetCategories] = useState('')
	const [page, SetPage] = useState([])
	const [skip, setSkip] = useState(1)
	const { pushCard } = useContext(cardContext)

	const getCategry = async () => {
		let res = await apiCleint({
			method: 'GET',
			url: `${productsUrl}${productsCategry}`,
		})
		if (res.is_seccess) {
			SetCategry(res.data)
		}
	}

	const getProducts = async () => {
		let res = await apiCleint({
			method: 'GET',
			url: NetCotegries
				? `${productsUrl}${categroiya}/${NetCotegries}/?limit=20&skip=${
						(skip - 1) * 20
				  }`
				: `${productsUrl}/?limit=20&skip=${(skip - 1) * 20}`,
		})

		if (res) {
			setData(res?.data.products)
			// console.log(res.data.total)
			getPagination(res.data.total)
		}
	}

	const searchHanlde = async search => {
		if (search.length > 3) {
			let res = await apiCleint({
				method: 'GET',
				url: `${productsUrl}/search?q=${search}`,
			})
			console.log(res)
			if (res.is_seccess) {
				setData(res.data.products)
				getPagination(res.data.total)
			}

			// if (search.length == 0) {
			// 	setData(res.data.products)
			// }
		}
	}

	function getPagination(totals) {
		let current_page = []
		for (let i = 1; i <= Math.ceil(totals / 20); i++) {
			current_page.push(i)
		}
		SetPage(current_page)
	}

	useEffect(() => {
		getCategry()
	}, [])

	useEffect(() => {
		getProducts()
	}, [NetCotegries, skip])

	return (
		<div>
			<SwiperComponent />
			<div className='container min-h-[1000px] pb-[200px]'>
				<div className='catalog w-full h-[100px] overflow-scroll flex justify-start items-center'>
					<div className='w-[300px] '>
						<Space>
							<Typography.Text className='font-bold'>Category:</Typography.Text>
							<Select
								className='custom-select'
								placeholder='Category Name'
								options={categry.map(cate => ({
									label: cate,
									value: cate,
								}))}
								onChange={value => {
									SetNetCategories(value)
								}}
							/>
						</Space>
					</div>
					<input
						type='text'
						className='w-[300px] p-1 border border-black/30 rounded-2xl px-3'
						placeholder='Search Products'
						onChange={value => {
							searchHanlde(value.target.value)
							// SetSearch(value.target.value)
						}}
					/>
				</div>
				<div className='products w-full min-h-[900px] grid grid-cols-4 gap-[30px]'>
					{data.length > 0 ? (
						<>
							{data?.map(product => (
								<div
									key={product.id}
									className='border h-[500px] shadow-xl border-black/30 rounded-md p-4'
								>
									<div className='w-full h-[70%]'>
										<Link to={`/products-detail/${product.id}`}>
											<img
												src={product.thumbnail}
												alt={product.title}
												className='object-cover w-full h-full'
											/>
										</Link>
									</div>
									<div className='w-full h-[30%] flex flex-col justify-between items-start gap-[5px]'>
										<h2 className='font-bold text-[20px]'>
											{product.title.length < 20
												? product.title
												: product.title.slice(0, 20) + '...'}
										</h2>
										<p className='font-bold'>{product.category}</p>
										<p className='font-bold'>${product.price}</p>

										<button
											onClick={() => {
												pushCard(product)
											}}
											className='bg-black text-white w-full gap-[5px] h-[40px] rounded-xl flex justify-center items-center uppercase text-[15px] cursor-pointer active:bg-black/40'
										>
											купить
											<FaCartShopping />
										</button>
									</div>
								</div>
							))}
						</>
					) : (
						<div className='w-full h-[500px] flex justify-center items-center  col-span-4'>
							<Empty />;
						</div>
					)}
				</div>
				<div className='mt-10'>
					{page.map(item => {
						return (
							<button
								key={item}
								onClick={() => {
									setSkip(item)
									// setSkip(1)
								}}
								className={`px-3 py-1 border  ml-1 ${
									skip == item && 'bg-black text-white'
								}`}
							>
								{item}
							</button>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Products

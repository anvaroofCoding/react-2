import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiCleint } from '../../utils/apiServis'
import { productsUrl } from '../../utils/urls'

const ProductsDetail = () => {
	const [param, Setparam] = useState([])
	const params = useParams()

	const getProductDetail = async () => {
		let res = await apiCleint({
			method: 'GET',
			url: `${productsUrl}/${params.id}`,
		})
		console.log(res)
		if (res.is_seccess) {
			Setparam(res.data)
		}
		// axios(`https://dummyjson.com/products/${params.id}`)
		// 	.then(res => {
		// 		Setparam(res.data)
		// 	})
		// 	.catch(err => {
		// 		alert(err.message)
		// 	})
	}

	console.log(param)
	useEffect(() => {
		getProductDetail()
	}, [])
	return (
		<div>
			<div className='container min-h-[700px]  grid grid-cols-2 '>
				<div className=' flex justify-center items-center'>
					<div className='w-[500px] h-[500px]  border flex justify-center items-center overflow-hidden real-shadow border-black/20 p-3 rounded-[20px]'>
						<img
							src={param.thumbnail}
							alt={param.title}
							className='object-cover w-full h-full'
						/>
					</div>
				</div>
				<div className=' flex justify-center items-center'>
					<div className='w-[500px] min-h-[500px]  flex flex-col gap-[15px]'>
						<p className='font-bold text-[40px]'>{param.title}</p>
						<p className='text-black flex gap-[10px]'>
							Brend:
							<span className='font-bold text-black'>{param.brand}</span>
						</p>
						<p className='text-black flex gap-[10px]'>
							Categry:
							<span className='font-bold text-black'>{param.category}</span>
						</p>
						<p className='text-black flex gap-[10px]'>
							Count:
							<span className='font-bold text-black'>{param.stock} sht</span>
						</p>
						<p className='text-black flex gap-[10px]'>
							Sku:
							<span className='font-bold text-black'>{param.sku}</span>
						</p>
						<p className='text-black flex gap-[10px]'>
							Barcode:
							<span className='font-bold text-black'>
								{param?.meta?.barcode}
							</span>
						</p>
						<p className='text-black flex gap-[10px]'>
							<span className=' text-black'>{param.description}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductsDetail

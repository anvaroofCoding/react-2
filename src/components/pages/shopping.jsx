import { Empty } from 'antd'
import React, { useContext } from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
import { cardContext } from '../../context/cardList'

const Shopping = () => {
	const context = useContext(cardContext)

	const getAllSum = () => {
		let sum = 0
		context.count.forEach(element => {
			sum += element.soni * element.price
		})
		return sum
	}

	// useEffect(() => {
	// 	getAllSum()
	// }, [])

	return (
		<div>
			<div className='container h-[700px] grid grid-cols-2'>
				<div className='shopping  h-[700px] flex justify-center items-center flex-col gap-[20px]'>
					<h1 className='font-bold text-[30px] uppercase'>your orders</h1>
					<div className='w-full h-[80%] rounded-md end-shadow relative flex justify-center items-center flex-col'>
						<div className='w-full h-[80%] overflow-y-scroll  p-3 flex flex-col items-center gap-[20px]'>
							{context.count.length > 0 ? (
								context.count.map((item, index) => {
									return (
										<div
											key={item?.id}
											className='w-full h-[200px] flex gap-[20px] p-3 border border-black/30'
										>
											<div className='w-[200px] h-full '>
												<img
													src={item?.thumbnail}
													alt={item?.title}
													className='w-full h-full object-cover'
												/>
											</div>
											<div className=' w-full flex flex-col justify-between'>
												<h2 className='font-bold text-[20px]'>{item?.title}</h2>
												<div className='p-2 bg-black w-[100px] flex justify-between items-center rounded-lg'>
													<button
														className='bg-white text-black px-2 rounded-lg font-bold'
														onClick={() => {
															context.dikr(index)
														}}
													>
														-
													</button>
													<span className='font-bold text-white'>
														{item?.soni}
													</span>
													<button
														className='bg-white text-black px-2 rounded-lg font-bold'
														onClick={() => {
															context.incr(index)
														}}
													>
														+
													</button>
												</div>
												<p>
													Color: <span className='font-bold '>Red</span>
												</p>
												<div className='flex justify-between items-center'>
													<p>
														Price :
														<span className='font-bold '>{item?.price}$</span>
													</p>
													<RiDeleteBinLine
														className='font-bold text-[20px]'
														onClick={() => {
															context.del(index)
														}}
													/>
												</div>
											</div>
										</div>
									)
								})
							) : (
								<div className='w-full h-full flex justify-center items-center'>
									<Empty />
								</div>
							)}
						</div>
						{context.count.length > 0 ? (
							<div className='w-full  flex justify-between mt-10 items-center px-3'>
								<p className='font-bold'>All Price:</p>
								<p className='font-bold'>{getAllSum()} $</p>
							</div>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Shopping

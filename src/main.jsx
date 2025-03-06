import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import App from './App'
import Blog from './components/pages/blog'
import Login from './components/pages/login'
import Products from './components/pages/products'
import ProductsDetail from './components/pages/productsDetail'
import Profile from './components/pages/profile'
import Shopping from './components/pages/shopping'
import CardList from './context/cardList'
import './index.css'

const isAuthenticated = localStorage.getItem('token') // Login bo'lgan foydalanuvchini tekshirish

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ToastContainer />
		<CardList>
			<BrowserRouter>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/' element={<App />}>
						<Route path='/' element={<Products />} />
						<Route path='/products-detail/:id' element={<ProductsDetail />} />
						<Route path='/blog' element={<Blog />} />
						<Route path='/shopping' element={<Shopping />} />
						<Route path='/profile' element={<Profile />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</CardList>
	</StrictMode>
)

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify'
// import App from './App'
// import Blog from './components/pages/blog'
// import Login from './components/pages/login'
// import Products from './components/pages/products'
// import ProductsDetail from './components/pages/productsDetail'
// import Shopping from './components/pages/shopping'
// import CardList from './context/cardList'
// import './index.css'

// createRoot(document.getElementById('root')).render(
// 	<StrictMode>
// 		<ToastContainer />
// 		<CardList>
// 			<BrowserRouter>
// 				<Routes>
// 					<Route path='/login' element={<Login />} />
// 					<Route path='/' element={<Navigate to='/login' replace />} />
// 					<Route path='/' element={<App />}>
// 						{/* <Route path='/' element={<SwiperComponent />} /> */}
// 						<Route path='/' element={<Products />} />
// 						<Route path='/products-detail/:id' element={<ProductsDetail />} />
// 						<Route path='/blog' element={<Blog />} />
// 						<Route path='/shopping' element={<Shopping />} />
// 					</Route>
// 				</Routes>
// 			</BrowserRouter>
// 		</CardList>
// 	</StrictMode>
// )

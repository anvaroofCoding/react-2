import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Blog from './components/pages/blog'
import Products from './components/pages/products'
import ProductsDetail from './components/pages/productsDetail'
import './index.css'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}>
					{/* <Route path='/' element={<SwiperComponent />} /> */}
					<Route path='/' element={<Products />} />
					<Route path='/products-detail/:id' element={<ProductsDetail />} />
					<Route path='/blog' element={<Blog />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
)

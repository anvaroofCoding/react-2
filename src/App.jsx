import { Outlet } from 'react-router-dom'
import Footer from './components/Layout/footer'
import Navbar from './components/Layout/navbar'

function App() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	)
}

export default App

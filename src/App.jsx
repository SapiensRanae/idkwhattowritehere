import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'
import About from './pages/About'
import Layout from './components/Layout'
import Home from './pages/Home'
import Product from './pages/Product'
import ProductList from './components/ProductList'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children:[
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/about',
				element: <About />
			},
			{
				path: '/contact',
				element: <Contact />
			},
			{
				path: '/products',
				element: <ProductList />
			},
			{
				path: '/products/:id',
				element: <Product />
			},
			{
				path: '*',
				element: <NotFound />
			}
		]
	}
])

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	)
}

export default App

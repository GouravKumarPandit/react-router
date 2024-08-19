import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import MyAccountDetail, { githubInfoLoader } from './Components/MyAccountDetail/MyAccountDetail.jsx'

// First way to create routes in React JS 
/* const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <Home />
			},
			{
				path: "about-us",
				element: <About />
			},
			{
				path: "contact-us",
				element: <Contact />
			},
		]
	},
]) */

// Another way to create the routes in React JS 
const router = createBrowserRouter(createRoutesFromElements(
	<Route path='' element={<Layout />}>
		{/* All these below files will go in place of Outlet */}
		<Route path='' element={<Home />} />
		<Route path='about-us' element={<About />} />
		<Route path='contact-us' element={<Contact />} />
		<Route loader={githubInfoLoader} path='my-account/:myId' element={<MyAccountDetail />} />
	</Route>
));

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)

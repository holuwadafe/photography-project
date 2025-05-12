import React, { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import './Pages/Home
import './App.css'
import Layout from './component/layout/Layout'
import Home from './Pages/home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import Learn from './Pages/Learn'
import Portfolio from './Pages/Portfolio'
import DropDown from './component/DropDown'
// import Home from './Pages/Home'

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          index: true,
          element: <Home />
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "portfolio",
          element: <Portfolio />,
        },
        {
          path: "blog",
          element: <Blog />,
          children: [
            {
            path: "portraits",
            element: <Blog/>,
            },
            {
            path: "wedding",
            element: <Blog/>,
            },
            {
            path: "fashion",
            element: <Blog/>,
            },
            {
            path: "commercial",
            element: <Blog/>,
            },
            {
            path: "book-a-season",
            element: <Blog/>,
            },
            {
            path: "architecture",
            element: <Blog/>,
            },
          ]
        },
        {
          path: "learn",
          // element: <Learn />,
          children: [
          {
           path: "photography",
           element: <DropDown />,
          },
          {
            path: "lighting-course",
            element: <DropDown />,
          },
          {
            path: "revealed",
            element: <DropDown/>,
          },
          ]
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ]
    }
  ])

function App(){
  return <RouterProvider router={router} />
}

export default App;

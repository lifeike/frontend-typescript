import React, { useState, useRef, useEffect, memo } from "react"
import HomeLayout from "./components/HomeLayout"
import { BrowserRouter } from "react-router-dom"

const App = (props: {}) => {
  return (
    <BrowserRouter>
      <HomeLayout>
        <h2 className="text-red-800">App</h2>
      </HomeLayout>
    </BrowserRouter>
  )
}

export default App

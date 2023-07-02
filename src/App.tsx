import React, { useState, useRef, useEffect, memo } from "react"
import HomeLayout from "./components/HomeLayout"
import { BrowserRouter } from "react-router-dom"
import RouteTable from "@/routes"

const App = (props: {}) => {
  return (
    <BrowserRouter>
      <HomeLayout>
        <RouteTable />
      </HomeLayout>
    </BrowserRouter>
  )
}

export default App

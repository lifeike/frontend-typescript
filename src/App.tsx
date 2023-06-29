import React, { useState, useRef, useEffect, memo } from "react"
import HomeLayout from "./components/HomeLayout"

const App = (props: {}) => {
  return (
    <HomeLayout>
      <h2 className="text-red-800">App</h2>
    </HomeLayout>
  )
}

export default App

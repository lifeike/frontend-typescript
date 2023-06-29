import React, { useState, useRef, useEffect, memo } from "react"
import AppBar from "./AppBar"

type ContainerProps = {
  children: React.ReactNode
}

const HomeLayout = (props: ContainerProps) => {
  return (
    <>
      <AppBar />
      <h2>HomeLayout</h2>
    </>
  )
}

export default HomeLayout

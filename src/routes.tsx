import React, { useState, useRef, useEffect, memo } from "react"
import { Routes, Route, Link, useNavigate, useLocation, Navigate, Outlet } from "react-router-dom"
import * as session from "@/utils/session"
import { ContainerProps } from "./types/common"
import Dashboard from "@/pages/dashboard"
import ViewAllMovies from "@/pages/movie/ViewAllMovies"

function RequireAuth(props: ContainerProps) {
  const location = useLocation()
  if (!session.isAuthenticated()) <Navigate to="/" state={{ from: location }} replace />
  return props.children
}

const RouteTable = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      {/* <Route path="/sign-up" element={<SignUp />} /> */}
      <Route
        path="/movies"
        element={
          <RequireAuth>
            <ViewAllMovies />
          </RequireAuth>
        }
      />
    </Routes>
  )
}

export default RouteTable

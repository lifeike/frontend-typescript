import HomeLayout from "./components/HomeLayout"
import { BrowserRouter } from "react-router-dom"
import RouteTable from "@/routes"

const App = () => {
  return (
    <BrowserRouter>
      <HomeLayout>
        <RouteTable />
      </HomeLayout>
    </BrowserRouter>
  )
}

export default App

import HomeLayout from "./components/HomeLayout"
import { BrowserRouter } from "react-router-dom"
import RouteTable from "@/routes"
import Loading from "@/components/Loading"
import { Toaster } from "react-hot-toast"
import { Provider } from "react-redux"
import store from "@/store"

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HomeLayout>
          <RouteTable />
          <Toaster position="top-center" reverseOrder={false} />
          <Loading />
        </HomeLayout>
      </BrowserRouter>
    </Provider>
  )
}

export default App

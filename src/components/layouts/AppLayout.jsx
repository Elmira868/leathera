
import { Outlet } from "react-router"

import Header from "../Common/Header/Header.jsx"
import Footer from "../Common/Footer.jsx"


const AppLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}


export default AppLayout
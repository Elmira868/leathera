
import ShoppingCart from "./Fragmenta/ShoppingCart"
import Topbar from "./Fragmenta/Topbar"
import UserAccount from "./Fragmenta/UserAccount"

const Header = () => {
  return (
    <>
      <Topbar />
      <div className="grid min-h-20 w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 border-b border-gray-100 px-3 sm:gap-4 sm:px-6 lg:px-8">
        <div className="min-w-0 justify-self-start">
          <UserAccount />
        </div>
        <img
          src="/assets/static/logo.png"
          alt="Leather home"
          className="h-auto w-24 object-contain sm:w-36 lg:w-44"
        />
        <div className="min-w-0 justify-self-end">
          <ShoppingCart />
        </div>
      </div>
    </>
  )
}

export default Header
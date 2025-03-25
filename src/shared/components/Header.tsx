import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {Link, NavLink} from "react-router-dom"
import Avatar from "../../assets/avatars/minato.jpg"
const Header = () => {
    return (
        <header className="bg-amber-200 shadow-md relative">
            <nav className="navbar flex justify-between w-4/5 items-center m-auto">
            {/* Dung flex = ngag hang */}
                <Link to="/" className="items-center flex gap-2 transition hover:scale-105">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Naruto_logo.svg" alt="" className="w-28"/>
                    <span className="font-bold text-2xl">Name</span>
                </Link>
                <div className="flex justify-center items-center *:block *:py-6 *:px-2">
                    <NavLink to="/" className="font-bold hover:bg-amber-300 transition hover:shadow-md">
                        Product Management
                    </NavLink>
                    <NavLink to="/add" className="font-bold hover:bg-amber-300 transition hover:shadow-md">
                        Dashboard
                    </NavLink>
                    <NavLink to="/add" className="font-bold hover:bg-amber-300 transition hover:shadow-md">
                        Notes
                    </NavLink>
                    <NavLink to="/add" className="font-bold hover:bg-amber-300 transition hover:shadow-md">
                        Tasks
                    </NavLink>
                </div>
                <label className="relative" htmlFor="Search">
                    {/* rounded là thêm độ cong cho viền */}
                    <input className="peer rounded border border-black p-2 w-full shadow-md" type="text" placeholder="" />
                    <span className="absolute inset-y-1 start-4 translate-y-2 px-0.5 text-sm font-medium
                    text-gray-700 transition-transform peer-placeholder-shown:translate-y-1 peer-focus:-translate-x-17">Search</span>
                    <FontAwesomeIcon className="absolute inset-y-3 end-1.5" icon={faMagnifyingGlass} />
                </label>
                <div className="user m-1">
                    <img src={Avatar} alt="" className="w-15 translate-x-0 border-2 rounded-full shadow-lg cursor-pointer
                    transition hover:scale-105"/>
                </div>
            </nav>
        </header>
    )
}

export default Header 
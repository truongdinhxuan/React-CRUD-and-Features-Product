import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Background from "../../assets/2656211.jpg"
import Footer from "../components/Footer";
const ProductLayout = () => {
    return (
        <div>
            <Header/>
            <main>
                <img src={Background} alt="" className="w-screen blur-sm"/>
                <div>
                    <Outlet />
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default ProductLayout
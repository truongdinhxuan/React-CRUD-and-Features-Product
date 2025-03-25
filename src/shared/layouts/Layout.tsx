import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Header/>
            <main>
                <Sidebar/>
                <div>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default Layout
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage"
import ProfilePage from "../pages/ProfilePage"
import LoginPage from "../pages/LoginPage"

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/profile/:name" element={<ProfilePage/>}/>
            <Route path="/LoginPage" element={<LoginPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router
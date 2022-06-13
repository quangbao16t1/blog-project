import ProfilePage from 'features/Profile/ProfilePage'
import {Route, Routes } from 'react-router-dom'
export const UserRoutes = () => {
    return (
        <div className="">
            <Routes>
                <Route path="/profile" element={<ProfilePage/>}></Route>
            </Routes>
        </div>
    )
}
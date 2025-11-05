import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/navbar'
import { Outlet } from 'react-router'

export default function AppLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            < Navbar />
            <div className="flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

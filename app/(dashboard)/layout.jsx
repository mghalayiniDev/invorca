import Sidebar from "@/components/dashboard/Sidebar"
import Navbar from "@/components/dashboard/Navbar"

export default function DashboardLayout({ children }) {
    return (
        <main className="h-screen w-full flex box-border">
            <Sidebar />
            <div className="w-full h-full">
                <Navbar />
                <div className="p-6 lg:p-9 h-[calc(100vh-64px)] overflow-y-auto overflow-x-hidden">
                    {children}
                </div>
            </div>
        </main>
    )
}
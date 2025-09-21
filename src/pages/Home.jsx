import { Link, Outlet } from "react-router";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Link to="/">
                <h1 className="text-3xl font-bold mb-4">
                    Meal Planner
                </h1>
            </Link>
            <div className="mt-4">
                <a href="/register" className="text-blue-500 mr-4">Register</a>
                <a href="/login" className="text-blue-500">Login</a>
            </div>
            <div className="mt-8 w-full max-w-md p-4 bg-white rounded shadow">
                <Outlet />
            </div>
        </div>
    )
}

export default Home;
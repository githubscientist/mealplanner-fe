import { useEffect } from "react";
import authServices from "../services/authServices";
import { useNavigate } from "react-router";

const Logout = () => {

    const navigate = useNavigate();

    useEffect(() => {
        authServices.logout()
            .then(() => {
                setTimeout(() => {
                    alert("Logout successful!");
                    navigate("/login");
                }, 500);
            })
            .catch(err => {
                alert(err.message || "Logout failed!");
            })
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-center">
            <p className="mt-2 text-lg font-small text-gray-700 text-center max-w-md px-4">
                Logging out...
            </p>
        </div>
    )
}

export default Logout;
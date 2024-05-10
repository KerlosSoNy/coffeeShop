import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axiosInstance from "../lib/Instance";


const useDelete = () => {
    const navigate = useNavigate();
    const deleteSomething = async (id , api  , backLink,) => {
        try {
            const token = localStorage.getItem('token');
            await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axiosInstance.delete(`${api}${id}`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    }).then(() => {
                        navigate(`${backLink}`);
                    });
                    location.reload();
                }
            });
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return { deleteSomething };
};

export default useDelete;
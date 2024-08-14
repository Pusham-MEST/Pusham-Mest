import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { apiLogin } from "../../services/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";

const LogIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await apiLogin({
        username: data.username,
        password: data.password,
      });

      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("userRole", res.data.role); // Save user role
      toast.success(res.data.message);

      // Redirect based on user role
      if (res.data.role === 'admin') {
        navigate("/admin-dashboard");
      } else {
        navigate("/alert"); // Redirect to alert page for normal users
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-200 via-yellow-200 to-teal-200">
      <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-teal-600 mb-2">Log In</h1>
        <p className="text-gray-600 mb-4">Access your account to continue.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
          <div>
            <label htmlFor="username" className="block text-gray-700 text-xs mb-1">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="bg-gray-100 px-2 border border-gray-300 rounded-md h-8 w-full text-xs"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 text-xs mb-1">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="bg-gray-100 px-2 border border-gray-300 rounded-md h-8 w-full text-xs"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="bg-teal-500 text-white h-10 rounded-md hover:bg-teal-600 transition duration-300 w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Loader /> : "Log In"}
          </button>
          <p className="text-center text-gray-600 text-xs mt-2">
            Don't have an account? <Link to="/signup" className="text-teal-500 hover:underline">Sign Up</Link>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;

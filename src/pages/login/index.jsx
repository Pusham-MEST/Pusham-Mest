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
      toast.success(res.data.message);

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-200">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto my-8 bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Form Section */}
        <div className="flex-1 p-8 md:w-1/2 bg-gradient-to-r from-blue-500 to-teal-500 text-white">
          <h1 className="text-3xl font-bold mb-6">Log In</h1>
          <p className="mb-6">Please enter your credentials to access your account.</p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
            <button
              type="submit"
              className={`w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? <Loader /> : "Log In"}
            </button>
            <p className="text-center text-gray-700 mt-4">
              Don't have an account? <Link to="/signup" className="text-blue-500 font-semibold hover:underline">Sign Up</Link>.
            </p>
          </form>
        </div>
        {/* Image Section */}
        <div className="hidden md:flex flex-1 bg-blue-600 items-center justify-center p-8 text-center text-white">
          <div>
            <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
            <p className="mb-4">Log in to continue where you left off.</p>
            <Link to="/signup" className="text-blue-200 underline">Create an Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

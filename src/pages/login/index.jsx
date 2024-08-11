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
      }, 5000);
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto my-8 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex-1 p-6 md:w-1/2">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <p className="mb-4">Use your account to log in.</p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-gray-700 font-semibold mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Loader /> : "login"}
            </button>
            <p className="text-center text-gray-600 mt-4">
              Don't have an account? <Link to="/signup" className="text-blue-500 font-semibold">Login</Link>.
            </p>
          </form>
        </div>
        <div className="hidden md:flex flex-1 bg-blue-500 items-center justify-center p-6">
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Hello, Friend!</h2>
            <p className="mb-4">Enter your personal details to start your journey with us.</p>
            <Link to="/signup" className="text-blue-200 underline">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

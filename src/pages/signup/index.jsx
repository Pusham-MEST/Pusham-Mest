import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { apiSignUp } from "../../services/auth";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const { firstName, lastName, phoneNumber, email, password, confirmPassword, address, role } = data;

    try {
      const res = await apiSignUp({ firstName, lastName, phoneNumber, email, password, confirmPassword, address, role });
      toast.success("Sign Up Successful");

      // Redirect based on role
      if (role === 'admin') {
        navigate("/admin-dashboard");
      } else {
        navigate("/alert");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-200 via-yellow-200 to-teal-200">
      <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-teal-600 mb-2">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 w-full">
          {/* Combined Name Field */}
          <div className="flex space-x-2 mb-2">
            <div className="flex-1">
              <label htmlFor="firstName" className="block text-gray-700 text-xs mb-1">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                className="bg-gray-100 px-2 border border-gray-300 rounded-md h-8 w-full text-xs"
                {...register("firstName", { required: "First name is required" })}
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="block text-gray-700 text-xs mb-1">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="bg-gray-100 px-2 border border-gray-300 rounded-md h-8 w-full text-xs"
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
            </div>
          </div>
          
          {/* Phone and Email Field */}
          <div className="flex space-x-2 mb-2">
            <div className="flex-1">
              <label htmlFor="phoneNumber" className="block text-gray-700 text-xs mb-1">Phone</label>
              <input
                type="text"
                id="phoneNumber"
                placeholder="Phone Number"
                className="bg-gray-100 px-2 border border-gray-300 rounded-md h-8 w-full text-xs"
                {...register("phoneNumber", { required: "Phone number is required" })}
              />
              {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>}
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block text-gray-700 text-xs mb-1">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="bg-gray-100 px-2 border border-gray-300 rounded-md h-8 w-full text-xs"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
          </div>
          
          {/* Password Fields */}
          <div className="mb-2">
            <label htmlFor="password" className="block text-gray-700 text-xs mb-1">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="bg-gray-100 px-2 border border-gray-300 rounded-md h-8 w-full text-xs"
              {...register("password", { required: "Password is required", minLength: 8 })}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>
          <div className="mb-2">
            <label htmlFor="confirmPassword" className="block text-gray-700 text-xs mb-1">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="bg-gray-100 px-2 border border-gray-300 rounded-md h-8 w-full text-xs"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: value => value === watch('password') || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
          </div>
          
          {/* Address and Role Field */}
          <div className="flex flex-col space-y-2 mb-2">
            <div>
              <label htmlFor="address" className="block text-gray-700 text-xs mb-1">Address</label>
              <input
                type="text"
                id="address"
                placeholder="Address"
                className="bg-gray-100 px-2 border border-gray-300 rounded-md h-8 w-full text-xs"
                {...register("address", { required: "Address is required" })}
              />
              {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
            </div>
            <div>
              <label htmlFor="role" className="block text-gray-700 text-xs mb-1">Role</label>
              <select
                id="role"
                className="bg-gray-100 px-2 border border-gray-300 rounded-md h-8 w-full text-xs"
                {...register("role", { required: "Role is required" })}
              >
                <option value="">Select Role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
              {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>}
            </div>
          </div>
          
          <button
            type="submit"
            className="bg-blue-500 text-white h-10 rounded-md hover:bg-blue-600 transition duration-300 w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Loader /> : "Sign Up"}
          </button>
          <p className="text-center text-gray-600 text-xs mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

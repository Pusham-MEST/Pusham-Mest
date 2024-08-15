import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { apiCheckUsernameExists, apiSignUp } from "../../services/auth";
import { toast } from "react-toastify";
import { debounce } from "lodash";
import Loader from '../../components/Loader';

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState(false);
  const [usernameNotAvailable, setUsernameNotAvailable] = useState(false);
  const [isUsernameLoading, setIsUsernameLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const checkUserName = async (userName) => {
    setIsUsernameLoading(true);
    try {
      const res = await apiCheckUsernameExists(userName);
      const user = res.data.user;
      if (user) {
        setUsernameNotAvailable(true);
        setUsernameAvailable(false);
      } else {
        setUsernameAvailable(true);
        setUsernameNotAvailable(false);
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setIsUsernameLoading(false);
    }
  };

  const userNameWatch = watch("userName");

  useEffect(() => {
    const debouncedSearch = debounce(async () => {
      if (userNameWatch) {
        await checkUserName(userNameWatch);
      }
    }, 500);
    debouncedSearch();
    return () => {
      debouncedSearch.cancel();
    };
  }, [userNameWatch]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    let payload = {
      userName: data.userName,
      firstName: data.firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      address: data.address,
    };

    try {
      await apiSignUp(payload);
      toast.success("Sign Up Successful");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-md">
        <div className="p-6">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Welcome!</h1>
            <p className="text-gray-600">To keep connected with us please login with your info!</p>
            <Link to="/login" className="text-blue-500 underline">Sign In Here</Link>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="userName" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                id="userName"
                placeholder="Enter your username"
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${isUsernameLoading ? 'bg-gray-200' : 'bg-gray-50'} border-gray-300`}
                {...register("userName", { required: "Username is required" })}
              />
              {errors.userName && <p className="text-red-500 text-sm">{errors.userName.message}</p>}
              {isUsernameLoading && <Loader />}
              {usernameAvailable && <p className="text-green-500 text-sm">Username is available!</p>}
              {usernameNotAvailable && <p className="text-red-500 text-sm">Username is already taken!</p>}
            </div>
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm bg-gray-50 border-gray-300"
                {...register("firstName", { required: "First name is required" })}
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
            </div>
            <div>
              <label htmlFor="middleName" className="block text-sm font-medium text-gray-700">Middle Name</label>
              <input
                type="text"
                id="middleName"
                placeholder="Enter your middle name"
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm bg-gray-50 border-gray-300"
                {...register("middleName")}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm bg-gray-50 border-gray-300"
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                placeholder="Enter your phone number"
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm bg-gray-50 border-gray-300"
                {...register("phoneNumber", { required: "Phone number is required" })}
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm bg-gray-50 border-gray-300"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm bg-gray-50 border-gray-300"
                {...register("password", { required: "Password is required", minLength: 8 })}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm bg-gray-50 border-gray-300"
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: value =>
                    value === watch('password') || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                id="address"
                placeholder="Enter your address"
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm bg-gray-50 border-gray-300"
                {...register("address", { required: "Address is required" })}
              />
              {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
            </div>
            <button
              type="submit"
              className={`w-full py-2 px-4 rounded-md text-white ${isSubmitting ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

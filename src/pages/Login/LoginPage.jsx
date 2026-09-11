
import { useState } from "react";
import { Link, useNavigate } from "react-router";

import { AuthLayout } from "../../components/layouts/AuthLayout";
import NewCustomer from "./Fragments/NewCustomer";
import Button from "../../components/Common/Button";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    // Validation
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    // Fake loading
    setLoading(true);

    setTimeout(() => {
      // Fake user
      const fakeUser = {
        email: "test@example.com",
        password: "123456",
      };

      // Fake authentication
      if (
        formData.email === fakeUser.email &&
        formData.password === fakeUser.password
      ) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", formData.email);

        navigate("/account");
      } else {
        setError("Invalid email or password.");
      }

      setLoading(false);
    }, 800);
  };

  return (
    <AuthLayout currentPage="Login">
      <section className="flex w-full justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex w-full max-w-5xl flex-col gap-6 md:flex-row md:items-stretch lg:gap-8">

          {/* Login */}
          <div className="w-full border border-gray-100 bg-white p-5 shadow-sm sm:p-6 md:flex-1 lg:p-8">

            {/* Header */}
            <div className="mb-7 text-center sm:mb-8">
              <h1 className="font-roboto-Bold text-2xl text-gray-800 sm:text-3xl">
                Login
              </h1>

              <p className="mt-2 font-roboto-Light text-sm text-gray-500 sm:text-base">
                Welcome back to Leathera
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Email */}
              <label className="block">
                <span className="mb-2 block font-roboto-Medium text-sm text-gray-700">
                  Email
                </span>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-gray-200 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </label>

              {/* Password */}
              <label className="block">
                <span className="mb-2 block font-roboto-Medium text-sm text-gray-700">
                  Password
                </span>

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="w-full rounded-md border border-gray-200 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </label>

              {/* Error */}
              {error && (
                <p className="text-sm text-red-500">
                  {error}
                </p>
              )}

              {/* Forgot Password */}
              <div className="flex justify-end">
                <Link
                  to="/forget-password"
                  className="font-roboto-Light text-sm text-gray-500 transition hover:text-primary hover:underline"
                >
                  Forgotten Password?
                </Link>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Logging in..." : "Login"}
              </Button>
            </form>

            {/* Register */}
            <p className="mt-6 text-center font-roboto-Light text-sm text-gray-500">
              Don&apos;t have an account?{" "}

              <Link
                to="/register"
                className="font-roboto-Medium text-primary transition hover:underline"
              >
                Register
              </Link>
            </p>
          </div>

          {/* New Customer */}
          <div className="flex w-full md:flex-1">
            <NewCustomer />
          </div>

        </div>
      </section>
    </AuthLayout>
  );
};

export default LoginPage;


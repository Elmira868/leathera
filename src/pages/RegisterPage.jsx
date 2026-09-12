import { useState } from "react";
import { Link } from "react-router";

import { AuthLayout } from "../components/layouts/AuthLayout";
import { supabase, supabaseConfigError } from "../lib/supabase";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
      general: "",
    }));

    setSuccess("");
  };

  const validateForm = () => {
    const newErrors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    // Password
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    // Confirm password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");

    const isValid = validateForm();

    if (!isValid) return;

    setLoading(true);

    if (!supabase) {
      setLoading(false);
      setErrors({ general: supabaseConfigError });
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,

      options: {
        data: {
          full_name: formData.name,
        },
      },
    });

    setLoading(false);

    if (error) {
      setErrors({
        general: error.message,
      });

      return;
    }

    console.log("Registered user:", data.user);

    setSuccess(
      "Account created successfully. Please check your email to confirm your account."
    );

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <AuthLayout currentPage="Register">
      <section className="flex min-h-[70vh] items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-8">
          
          {/* Header */}
          <div className="mb-7 text-center">
            <h1 className="font-roboto-Bold text-2xl text-gray-800 sm:text-3xl">
              Create Account
            </h1>

            <p className="mt-2 font-roboto-Light text-sm text-gray-500">
              Create your Leathera account
            </p>
          </div>

          {/* Success */}
          {success && (
            <div className="mb-5 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-600">
              {success}
            </div>
          )}

          {/* General Error */}
          {errors.general && (
            <div className="mb-5 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-500">
              {errors.general}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-roboto-Medium text-sm text-gray-700"
              >
                Full name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                placeholder="Your full name"
                className={`w-full rounded-lg border px-3.5 py-3 text-sm outline-none transition
                  ${
                    errors.name
                      ? "border-red-400"
                      : "border-gray-200 focus:border-primary"
                  }`}
              />

              {errors.name && (
                <p className="mt-1.5 text-xs text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-roboto-Medium text-sm text-gray-700"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                placeholder="you@example.com"
                className={`w-full rounded-lg border px-3.5 py-3 text-sm outline-none transition
                  ${
                    errors.email
                      ? "border-red-400"
                      : "border-gray-200 focus:border-primary"
                  }`}
              />

              {errors.email && (
                <p className="mt-1.5 text-xs text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block font-roboto-Medium text-sm text-gray-700"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  placeholder="Create a password"
                  className={`w-full rounded-lg border px-3.5 py-3 pr-16 text-sm outline-none transition
                    ${
                      errors.password
                        ? "border-red-400"
                        : "border-gray-200 focus:border-primary"
                    }`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-primary"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              {errors.password ? (
                <p className="mt-1.5 text-xs text-red-500">
                  {errors.password}
                </p>
              ) : (
                <p className="mt-1.5 text-xs text-gray-400">
                  Minimum 8 characters
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block font-roboto-Medium text-sm text-gray-700"
              >
                Confirm password
              </label>

              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                  placeholder="Repeat your password"
                  className={`w-full rounded-lg border px-3.5 py-3 pr-16 text-sm outline-none transition
                    ${
                      errors.confirmPassword
                        ? "border-red-400"
                        : "border-gray-200 focus:border-primary"
                    }`}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword((prev) => !prev)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-primary"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>

              {errors.confirmPassword && (
                <p className="mt-1.5 text-xs text-red-500">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2 text-xs text-gray-500">
              <input
                type="checkbox"
                required
                className="mt-0.5 h-4 w-4 accent-primary"
              />

              <span className="font-roboto-Light leading-5">
                I agree to the Terms & Conditions and Privacy Policy.
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 font-roboto-Medium text-sm text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          {/* Login */}
          <p className="mt-7 text-center font-roboto-Light text-sm text-gray-500">
            Already have an account?{" "}

            <Link
              to="/login"
              className="font-roboto-Medium text-primary hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </section>
    </AuthLayout>
  );
};

export default RegisterPage;
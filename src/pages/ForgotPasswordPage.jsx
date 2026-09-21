import { useState } from "react";
import { Link } from "react-router";
import { AuthLayout } from "../components/layouts/AuthLayout";
import Button from "../components/Common/Button";
import { supabase, supabaseConfigError } from "../lib/supabase";
import Loading from "../components/Common/Loading";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!supabase) {
      setError(supabaseConfigError);
      return;
    }

    setLoading(true);
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/login`,
    });
    setLoading(false);

    if (resetError) {
      setError(resetError.message);
      return;
    }

    setSuccess("If an account exists for this email, a reset link has been sent.");
  };

  return (
    <AuthLayout currentPage="Forgot Password">
      <section className="flex w-full justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="w-full max-w-md border border-gray-100 bg-white p-5 shadow-sm sm:p-8">
          <div className="mb-7 text-center">
            <h1 className="font-roboto-Bold text-2xl text-gray-800 sm:text-3xl">
              Forgot Password
            </h1>
            <p className="mt-2 font-roboto-Light text-sm text-gray-500">
              Enter your email to receive a reset link.
            </p>
          </div>

          {error && <p className="mb-5 text-sm text-red-500">{error}</p>}
          {success && <p className="mb-5 text-sm text-green-600">{success}</p>}

          <form onSubmit={handleSubmit} className="space-y-5">
            <label className="block">
              <span className="mb-2 block font-roboto-Medium text-sm text-gray-700">
                Email
              </span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full rounded-md border border-gray-200 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </label>
            <Button type="submit" disabled={loading} className="w-full disabled:cursor-not-allowed disabled:opacity-60">
              {loading ? <Loading size="sm" label="Sending..." className="text-white" /> : "Send Reset Link"}
            </Button>
          </form>

          <p className="mt-6 text-center font-roboto-Light text-sm text-gray-500">
            Remembered your password?{" "}
            <Link to="/login" className="font-roboto-Medium text-primary hover:underline">
              Login
            </Link>
          </p>
        </div>
      </section>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;

import { Link } from "react-router";

const LoginPage = () => {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md rounded-xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-8 text-center">
          <h1 className="font-roboto-Bold text-2xl text-gray-800 sm:text-3xl">Login</h1>
          <p className="mt-2 font-roboto-Light text-sm text-gray-500">Welcome back to Leathera</p>
        </div>
        <form className="space-y-5">
          <label className="block">
            <span className="mb-2 block font-roboto-Medium text-sm text-gray-700">Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              className="w-full rounded-md border border-gray-200 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
              placeholder="you@example.com"
            />
          </label>
          <label className="block">
            <span className="mb-2 block font-roboto-Medium text-sm text-gray-700">Password</span>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              required
              className="w-full rounded-md border border-gray-200 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
              placeholder="Enter your password"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-md bg-primary px-4 py-2.5 font-roboto-Medium text-sm text-white transition-opacity hover:opacity-90"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center font-roboto-Light text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="font-roboto-Medium text-primary hover:underline">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;

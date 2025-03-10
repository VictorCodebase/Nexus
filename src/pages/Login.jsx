import React, { useState } from "react";

const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup && (!firstName || !lastName || !email || !password)) {
      setError("All fields are required for signup");
    } else if (!isSignup && (!email || !password)) {
      setError("Email and password are required for login");
    } else {
      setError("");
      console.log(
        isSignup
          ? `Signup - First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Password: ${password}`
          : `Login - Email: ${email}, Password: ${password}`
      );
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignup ? "Signup" : "Login"}
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <div className="flex flex-row gap-2">
              <div className="mb-4 w-1/2">
                <label className="block text-gray-700 mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-3 py-2 border rounded-md"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required={isSignup}
                />
              </div>
              <div className="mb-4 w-1/2">
                <label className="block text-gray-700 mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-3 py-2 border rounded-md"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required={isSignup}
                />
              </div>
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            {isSignup ? "Signup" : "Login"}
          </button>
        </form>

        <p className="text-center mt-4">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-blue-500 font-semibold"
          >
            {isSignup ? "Login" : "Signup"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;

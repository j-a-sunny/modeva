// components/RegisterForm.js

"use client"; // This is crucial for client-side components in Next.js App Router

import React, { useState, useMemo } from "react"; // useMemo for optimizing password rules
import Link from "next/link"; // For navigation to login page
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; // Import icons from react-icons/fa

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Define password rules and checks, including the password match
  const passwordRulesConfig = useMemo(() => [
    {
      label: 'Minimum 8 characters',
      check: (p) => p.length >= 8,
      errorMessage: 'Password must be at least 8 characters long.',
    },
    {
      label: 'At least 1 uppercase letter',
      check: (p) => /[A-Z]/.test(p),
      errorMessage: 'Password must contain at least one uppercase letter.',
    },
    {
      label: 'At least 1 lowercase letter',
      check: (p) => /[a-z]/.test(p),
      errorMessage: 'Password must contain at least one lowercase letter.',
    },
    {
      label: 'At least 1 number',
      check: (p) => /[0-9]/.test(p),
      errorMessage: 'Password must contain at least one number.',
    },
    {
      label: 'At least 1 special character',
      check: (p) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(p),
      errorMessage: 'Password must contain at least one special character.',
    },
    {
      label: 'Passwords match', // New rule for matching passwords
      check: (p, cp) => p === cp && p.length > 0, // Ensure password is not empty
      errorMessage: 'Passwords do not match.',
    },
  ], []); // Depend on nothing as these rules are static

  const validateForm = () => {
    setError(""); // Clear previous errors

    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    // Validate password using the same rules configuration
    // Pass both password and confirmPassword to checks that need it
    for (const rule of passwordRulesConfig) {
      if (!rule.check(password, confirmPassword)) {
        setError(rule.errorMessage); // Use the error message defined in the rule
        return false;
      }
    }

    if (!termsAccepted) {
      setError("You must accept the terms and conditions.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      console.log("Attempting registration with:", { name, email, password });
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Registration successful!");
      setSuccess(true);
      setError("");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setTermsAccepted(false);
    } catch (apiError) {
      console.error("Registration API error:", apiError);
      setError("An unexpected error occurred during registration. Please try again.");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Create an account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Or{" "}
            <Link
              href="/login"
              className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >
              sign in to your existing account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <p className="text-red-500 text-sm text-center font-medium">
              {error}
            </p>
          )}
          {success && (
            <p className="text-green-500 text-sm text-center font-medium">
              Registration successful! You can now log in.
            </p>
          )}

          <div className="rounded-md shadow-sm -space-y-px">
            {/* Full Name */}
            <div>
              <label htmlFor="full-name" className="sr-only">Full Name</label>
              <input
                id="full-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
              />
            </div>
            {/* Email Address */}
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
            {/* Password */}
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>
            {/* Confirm Password */}
            <div>
              <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>

          {/* Inlined Password Strength Indicator (moved here) */}
          {(password.length > 0 || confirmPassword.length > 0) && ( // Show if either password field has input
            <div className="mt-2 text-sm space-y-1 pl-3">
              {passwordRulesConfig.map((rule, index) => {
                // Pass confirmPassword to checks that need it
                const isValid = rule.check(password, confirmPassword);
                return (
                  <div
                    key={index}
                    className={`flex items-center ${isValid ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}
                  >
                    {isValid ? (
                      <FaCheckCircle className="h-4 w-4 mr-2" />
                    ) : (
                      <FaTimesCircle className="h-4 w-4 mr-2" />
                    )}
                    <span>{rule.label}</span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Terms and Conditions Checkbox */}
          <div className="flex items-center mt-6"> {/* Added mt-6 for spacing from password indicator */}
            <input
              id="terms-conditions"
              name="terms-conditions"
              type="checkbox"
              required
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:checked:bg-blue-600"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              disabled={loading}
            />
            <label
              htmlFor="terms-conditions"
              className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
            >
              I agree to the{" "}
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms and Conditions
              </a>
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-offset-gray-900"
              disabled={loading || success}
            >
              {loading ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Register"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
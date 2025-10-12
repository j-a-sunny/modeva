'use client';
import React, { useState } from 'react';

// Define the main App component for the Login Form
const App = () => {
  // State for form data (only username and password needed for login)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // State for submission status
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(null);

  // Constants for API call (Updated to login endpoint)
  const url = 'https://api.freeapi.app/api/v1/users/login';
  const apiKey = "" // API Key is left blank as per instructions.

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Utility to handle retry logic with exponential backoff
  const fetchWithRetry = async (apiCall, retries = 3) => {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await apiCall();
        return response;
      } catch (error) {
        if (i < retries - 1) {
          const delay = Math.pow(2, i) * 1000; // 1s, 2s, 4s...
          console.warn(`Attempt ${i + 1} failed. Retrying in ${delay / 1000}s...`);
          await new Promise(resolve => setTimeout(resolve, delay));
        } else {
          throw error;
        }
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setIsSuccess(null);

    // The payload for login only requires username and password
    const options = {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(formData),
    };

    try {
      const apiCall = () => fetch(
        `${url}?key=${apiKey}`,
        options
      );

      const response = await fetchWithRetry(apiCall);
      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        // Assuming a successful login returns data like a token or user info
        setMessage(data.message || 'Login successful! Redirecting...');
        // In a real app, you would save the token and redirect here.
      } else {
        setIsSuccess(false);
        // Display a specific error message if available from the API
        const errorMessage = data.message || data.error || 'Login failed due to an unknown API error.';
        setMessage(errorMessage);
        console.error('API Error Response:', data);
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage(`Network error: ${error.message}. Please check your connection.`);
      console.error('Fetch Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Determine the color class for the message box
  const messageClass = isSuccess === true
    ? 'bg-green-100 border-green-400 text-green-700'
    : isSuccess === false
      ? 'bg-red-100 border-red-400 text-red-700'
      : '';

  return (
    <div className="container flex">
      <div className="w-1/2 bg-[url('/heroBanner.png')] bg-cover bg-center"></div>
      <div className="w-1/2 min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
        <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-2xl border border-gray-100">

          {/* Header */}
          <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-2">
            Log In to Your Account
          </h1>
          <p className="text-gray-500 text-center mb-8">
            Welcome back! Please enter your credentials.
          </p>

          {/* Status Message Area */}
          {message && (
            <div
              className={`p-4 mb-6 border-l-4 rounded-lg transition-opacity duration-300 ${messageClass}`}
              role="alert"
            >
              <p className="font-semibold">{isSuccess ? 'Success' : 'Error'}</p>
              <p className="text-sm">{message}</p>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Username Input */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="doejohn"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-bold text-white transition duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 ${isLoading
                  ? 'bg-blue-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 hover:scale-[1.01]'
                }`}
            >
              {isLoading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                'Log In'
              )}
            </button>
          </form>

        </div>
      </div>

    </div>);
};

export default App;

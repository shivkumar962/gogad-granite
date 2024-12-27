'use client'
import React from 'react';

export default function CheckEmail() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/446/446017.png"
          alt="Email Sent"
          className="mx-auto mb-4 w-16 h-16"
        />
        <h2 className="text-2xl font-semibold text-gray-800">Check Your Email</h2>
        <p className="text-gray-600 mt-4">
          A verification email has been sent to your email address. Please check your inbox and click the link to verify your account.
        </p>
        <p className="text-gray-600 mt-2">Once verified, you can proceed to the login page.</p>
        {/* <button
          onClick={() => window.location.href = '/login'}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Go to Login
        </button> */}
      </div>
    </div>
  );
}

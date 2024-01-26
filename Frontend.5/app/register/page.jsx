// pages/register.js
'use client'
import { useState } from 'react';

const Register = () => {
  const [companyInfo, setCompanyInfo] = useState({
    companyName: '',
    description: '',
    regNumber: '',
    email: '',
    // Add more fields as needed
  });

  const [isRegistrationValid, setIsRegistrationValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleVerification = async () => {
    const { regNumber } = companyInfo;
    const authToken = "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5hcHBydXZlLmNvIiwianRpIjoiMmFjZDEyN2EtY2E1ZC00MDJkLWI2YTctNDEyZWE5MDdiMDJjIiwiYXVkIjoiZTc3NzI4ODMtOWIwYS00YTk1LWI4NTMtOWJiMDY3NWZkZDcyIiwic3ViIjoiMmJmYmZlOTUtZjg4MC00MDdhLTgzODAtNWJmYTYxZjIxYjIzIiwibmJmIjowLCJzY29wZXMiOlsidmVyaWZpY2F0aW9uX3ZpZXciLCJ2ZXJpZmljYXRpb25fbGlzdCIsInZlcmlmaWNhdGlvbl9kb2N1bWVudCIsInZlcmlmaWNhdGlvbl9pZGVudGl0eSJdLCJleHAiOjMyODQwNTgxNzMsImlhdCI6MTcwNjEzNDk3M30.gvLIaNL0Gb9_54R5y6WtZ9wWK5dFpwU2hhgRHGK2w_Q";
  
    try {
      const response = await fetch('https://api.appruve.co/v1/verifications/ng/business_info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({ search_term: regNumber }),
      });
  
      if (response.ok) {
        const result = await response.json();
        setIsRegistrationValid(result.status === 'verified');
      } else {
        setIsRegistrationValid(false);
      }
    } catch (error) {
      console.error('Error verifying registration number:', error);
      setIsRegistrationValid(false);
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Process the registration data
      const { companyName, description, regNumber, email } = companyInfo;

      // Check if the registration number is valid before submitting
      if (isRegistrationValid) {
        // Example: Save data to a database or perform other registration logic
        console.log('Company registered successfully!');
        // Redirect or show success message as needed
      } else {
        console.error('Invalid Registration Number');
      }
    } catch (error) {
      console.error('Error registering company:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Company Registration</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4 relative">
          <label className="block text-sm font-semibold mb-2" htmlFor="regNumber">
            Registration Number:
          </label>
          <input
            type="text"
            id="regNumber"
            name="regNumber"
            value={companyInfo.regNumber}
            onChange={handleChange}
            className="w-full  text-black px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            type="button"
            onClick={handleVerification}
            className="absolute top-0 right-0 mt-2 mr-2 px-3 py-1 bg-blue-500 text-white rounded-md text-sm focus:outline-none"
          >
            Verify
          </button>
        </div>

        {/* Display a message based on verification status */}
        {isRegistrationValid && (
          <p className="text-green-500 mb-4">Registration number is verified. You can proceed.</p>
        )}
        {!isRegistrationValid && (
          <p className="text-red-500 mb-4">Invalid registration number. Please verify.</p>
        )}

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={companyInfo.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className={`bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 focus:outline-none ${
            isRegistrationValid ? '' : 'opacity-50 cursor-not-allowed'
          }`}
          disabled={!isRegistrationValid}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    sn: '',
    name: '',
    dateIn: '',
    dateOut: '',
    customer: '',
    number: '',
    address: '',
    purpose: '',
    noOfDays: '',
    transport: '',
    remarks: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send data to backend
      await axios.post('http://localhost:5000/api/form/submit', formData);
      alert('Form submitted successfully!');
      // Redirect to preview page
      navigate('/preview');
    } catch (err) {
      console.error(err);
      alert('Failed to submit form. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Booking / Record Form
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* SN */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium">SN</label>
            <input
              type="text"
              name="sn"
              value={formData.sn}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter SN"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter name"
            />
          </div>

          {/* Date In */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Date In</label>
            <input
              type="date"
              name="dateIn"
              value={formData.dateIn}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Date Out */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Date Out</label>
            <input
              type="date"
              name="dateOut"
              value={formData.dateOut}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Customer */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Customer</label>
            <input
              type="text"
              name="customer"
              value={formData.customer}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Customer name"
            />
          </div>

          {/* Number */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Number</label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Contact number"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Customer address"
            />
          </div>

          {/* Purpose */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Purpose</label>
            <input
              type="text"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Purpose of booking"
            />
          </div>

          {/* No of Days */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium">No. of Days</label>
            <input
              type="number"
              name="noOfDays"
              value={formData.noOfDays}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Number of days"
            />
          </div>

          {/* Transport */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Transport</label>
            <input
              type="text"
              name="transport"
              value={formData.transport}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Transport details"
            />
          </div>

          {/* Remarks */}
          <div className="md:col-span-2">
            <label className="block mb-1 text-gray-700 font-medium">Remarks</label>
            <textarea
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Any additional remarks"
            />
          </div>

          {/* Submit button */}
          <div className="md:col-span-2 space-y-3">
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition-all duration-300"
            >
              Submit
            </button>

            {/* Go to Preview button */}
            <button
              type="button"
              onClick={() => navigate('/preview')}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-all duration-300"
            >
              Go to Preview
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;

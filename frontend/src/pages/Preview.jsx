import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigate

const Preview = () => {
  const [forms, setForms] = useState([]);
  const navigate = useNavigate(); // ✅ Initialize navigate

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/form/all');
        setForms(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchForms();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800 drop-shadow-md">
          All Form Submissions
        </h2>

        {/* Go Home Button */}
        <div className="flex justify-center mb-6">
          <button
            type="button"
            onClick={() => navigate('/home')}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 
                       hover:from-blue-600 hover:to-indigo-700 text-white font-semibold 
                       px-6 py-3 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            ⬅ Go to Home
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-lg rounded-2xl overflow-hidden">
            <thead className="bg-gradient-to-r from-green-500 to-green-600 text-white">
              <tr>
                {[
                  'SN', 'Name', 'Date In', 'Date Out', 'Customer', 'Number',
                  'Address', 'Purpose', 'No. of Days', 'Transport', 'Remarks'
                ].map((header) => (
                  <th
                    key={header}
                    className="px-4 py-3 text-left font-semibold text-sm uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {forms.length > 0 ? (
                forms.map((form) => (
                  <tr
                    key={form._id}
                    className="hover:bg-green-50 transition-colors duration-200"
                  >
                    <td className="px-4 py-2">{form.sn}</td>
                    {/* <td className="px-4 py-2">{form._id}</td> */}
                    <td className="px-4 py-2">{form.name}</td>
                    <td className="px-4 py-2">{form.dateIn}</td>
                    <td className="px-4 py-2">{form.dateOut}</td>
                    <td className="px-4 py-2">{form.customer}</td>
                    <td className="px-4 py-2">{form.number}</td>
                    <td className="px-4 py-2">{form.address}</td>
                    <td className="px-4 py-2">{form.purpose}</td>
                    <td className="px-4 py-2">{form.noOfDays}</td>
                    <td className="px-4 py-2">{form.transport}</td>
                    <td className="px-4 py-2">{form.remarks}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="11"
                    className="text-center py-4 text-gray-500 font-medium"
                  >
                    No form submissions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="mt-6 text-right">
          <p className="text-sm text-gray-600">
            Total submissions: <span className="font-bold">{forms.length}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preview;

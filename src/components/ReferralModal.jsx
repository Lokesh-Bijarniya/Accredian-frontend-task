import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { submitReferral } from '../api';

const ReferralModal = ({ isOpen, onClose }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);

  const onSubmit = async (data) => {
    try {
      // Convert terms checkbox value to boolean
      data.terms = data.terms === 'true';

      // Submit referral to the server
      await submitReferral(data);
      console.log('Referral submitted successfully');

      // Reset the form and show success popup
      reset();
      setIsSuccessPopupOpen(true);
    } catch (error) {
      console.error('Error submitting referral:', error.message);
      alert(error.message); // Show an error message to the user
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Success Popup */}
      {isSuccessPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 text-center max-w-sm">
            <h3 className="text-xl font-bold text-green-600 mb-4">Success!</h3>
            <p className="text-gray-700 mb-6">Your referral has been submitted successfully.</p>
            <button
              onClick={() => {
                setIsSuccessPopupOpen(false); // Close the success popup
                onClose(); // Close the modal
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Referral Modal */}
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 relative z-40">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Refer a Friend</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Referrer Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">Your Details</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  {...register("referrerName", { required: "Full name is required" })}
                  className={`mt-1 block w-full rounded-md border ${errors.referrerName ? 'border-red-500' : 'border-gray-300'} shadow-sm p-2`}
                />
                {errors.referrerName && <span className="text-red-500 text-sm">{errors.referrerName.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  {...register("referrerEmail", { required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" } })}
                  className={`mt-1 block w-full rounded-md border ${errors.referrerEmail ? 'border-red-500' : 'border-gray-300'} shadow-sm p-2`}
                />
                {errors.referrerEmail && <span className="text-red-500 text-sm">{errors.referrerEmail.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  {...register("referrerPhone", { required: "Phone number is required", pattern: { value: /^\+?[1-9]\d{1,14}$/, message: "Invalid phone number format" } })}
                  className={`mt-1 block w-full rounded-md border ${errors.referrerPhone ? 'border-red-500' : 'border-gray-300'} shadow-sm p-2`}
                />
                {errors.referrerPhone && <span className="text-red-500 text-sm">{errors.referrerPhone.message}</span>}
              </div>
            </div>

            {/* Referee Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">Friend's Details</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700">Friend's Name</label>
                <input
                  {...register("refereeName", { required: "Friend's name is required" })}
                  className={`mt-1 block w-full rounded-md border ${errors.refereeName ? 'border-red-500' : 'border-gray-300'} shadow-sm p-2`}
                />
                {errors.refereeName && <span className="text-red-500 text-sm">{errors.refereeName.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Friend's Email</label>
                <input
                  type="email"
                  {...register("refereeEmail", { required: "Friend's email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" } })}
                  className={`mt-1 block w-full rounded-md border ${errors.refereeEmail ? 'border-red-500' : 'border-gray-300'} shadow-sm p-2`}
                />
                {errors.refereeEmail && <span className="text-red-500 text-sm">{errors.refereeEmail.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Course</label>
                <input
                  {...register("course", { required: "Course selection is required" })}
                  className={`mt-1 block w-full rounded-md border ${errors.course ? 'border-red-500' : 'border-gray-300'} shadow-sm p-2`}
                />
                {errors.course && <span className="text-red-500 text-sm">{errors.course.message}</span>}
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register("terms", { required: "Must accept terms and conditions" })}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">I agree to the terms and conditions</span>
            </label>
            {errors.terms && <span className="text-red-500 text-sm block mt-1">{errors.terms.message}</span>}
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:text-gray-900 border border-gray-300 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Submit Referral
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReferralModal;
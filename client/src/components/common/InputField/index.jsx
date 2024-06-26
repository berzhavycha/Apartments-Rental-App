export const InputField = ({ label, value, onChange, placeholder, errorMessage }) => (
  <div className="w-full">
    <label htmlFor={label} className="block text-gray-700 text-sm font-bold mb-2">
      {label}
    </label>
    <input
      type="text"
      id={label}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-white w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
    />
    <p className="mt-2 h-4 text-red-500 text-sm">{errorMessage}</p>
  </div>
);

export const SelectField = ({ label, value, onChange, options }) => (
    <div className="w-full">
        <label htmlFor={label} className="block text-gray-700 text-sm font-bold mb-2">
            {label}
        </label>
        <select
            id={label}
            value={value}
            onChange={onChange}
            className="custom-select w-full px-3 border border-gray-300 py-2 rounded focus:outline-none"
        >
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
);
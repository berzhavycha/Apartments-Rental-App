export const SelectField = ({ label, value, onChange, options }) => (
    <div>
        {label && <label htmlFor={label} className="block text-gray-700 text-sm font-bold mb-2">
            {label}
        </label>}
        <select
            id={label}
            value={value}
            onChange={onChange}
            className="custom-select w-48 px-3 border border-gray-300 py-2 rounded focus:outline-none"
        >
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
);
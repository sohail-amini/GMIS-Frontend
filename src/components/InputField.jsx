import PropTypes from "prop-types"; // Import PropTypes

const InputField = ({
  name,
  label,
  type = "text",
  register,
  rules,
  errors,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...register(name, rules)}
        className={`mt-1 block w-full rounded-md border ${
          errors[name] ? "border-red-500" : "border-gray-300"
        } shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none p-2`}
      />
      {errors[name] && (
        <p className="mt-1 text-sm text-red-600">{errors[name]?.message}</p>
      )}
    </div>
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  register: PropTypes.func.isRequired,
  rules: PropTypes.object,
  errors: PropTypes.object.isRequired,
};

export default InputField;

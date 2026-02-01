function FormInput({ label, type = "text" , name, value, onChange }) {
  return (
    <label className="w-ful max-w-md ">
      <h1 className="text-white text-lg mb-2 text-center">
        {label}
      </h1>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="bg-white p-1 w-full rounded-md outline-none focus:ring-2 focus:ring-white"
      />
    </label>
  );
}
export default FormInput;
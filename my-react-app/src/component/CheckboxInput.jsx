
function CheckboxInput({ label }) {
  return (
    <label className="w-full mt-4 text-white flex flex-col items-center">
      <span className="text-lg mb-2 text-center">{label}</span>
      <input type="checkbox" className="w-7 h-7" />
    </label>
  );
} 
export default CheckboxInput;
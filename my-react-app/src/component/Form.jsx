import FormInput from "./FormInput";
import CheckboxInput from "./CheckboxInput";  
import Popup from "./Popup";
import { useState } from "react";

export default function Form() {  

  const [FormData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",  
    salary: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  function Getstatus(DataForm) {
    if (DataForm.age < 18 || DataForm.age > 100) {
      return "ageError";
    }

    if (DataForm.phone.length !== 10) { 
      return "phoneError";
    }

    return "success";
  }

  function getMessageByStatus(status) {
    switch (status) {
      case "ageError": 
        return "Age must be between 18 and 100.";
      case "phoneError": 
        return "Phone number must be 10 digits long."; 
      case "success": 
        return "Form submitted successfully!";
      default:
        return "";
    }
  }

 const [status, setStatus] = useState(null);

  const message = getMessageByStatus(status);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  function togglePopup(e) { 
    e.preventDefault(); 
  const newStatus = Getstatus(FormData);
  setStatus(newStatus);
    setShowPopup(!showPopup);
  }

  const isFormValid =
    FormData.name &&
    FormData.age &&
    FormData.phone &&
    FormData.salary; 
function resetForm() {
  setFormData({
    name: "",
    age: "",
    phone: "",
    salary: "",
  });
}
  return (
    <>
      <form className="bg-violet-700 h-auto  w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] rounded-3xl flex flex-col items-center px-4 sm:px-8 py-6 ">

        <label className="py-10 w-full pb-0">
          <h1 className="text-white text-xl mb-2 text-center font-bold">
            Requesting a loan
          </h1>
          <hr className="border-t border-white w-full my-4" />
        </label>

        <FormInput label="Name:" name="name" value={FormData.name} onChange={handleChange} />
        <FormInput label="Phone Number:" name="phone" value={FormData.phone} onChange={handleChange} />
        <FormInput label="Age:" name="age" value={FormData.age} onChange={handleChange} />

        <CheckboxInput label="Are you an employee?" />

        <FormInput label="Salary:" name="salary" value={FormData.salary} onChange={handleChange} />

        <button
          disabled={!isFormValid}
          onClick={(e) => {
            togglePopup(e);
            resetForm();
          }}
          className={`${isFormValid ? "bg-pink-600" : "bg-gray-500"} text-white font-bold py-2 px-4 rounded-lg mt-4`}
        >
          Submit
        </button>

      </form>

      {showPopup && <Popup message={message} status={status} onClick={(e)=>togglePopup(e)} />}
    </>
  );
}

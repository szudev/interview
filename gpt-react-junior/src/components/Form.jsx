import { useState } from "react";
import "../style.css";

function Form() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });
  const [fullName, setFullName] = useState();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName) return;
    setFullName(`${formData.firstName} ${formData.lastName}`);
    setFormData({ firstName: "", lastName: "" });
  };

  return (
    <>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <p style={{ color: "white", fontSize: "1.5rem" }}>Form</p>
        <input
          className="form-item"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={(e) => handleChange(e)}
        />
        <input
          className="form-item"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={(e) => handleChange(e)}
        />
        <button
          type="submit"
          className="form-item"
          style={{ cursor: "pointer" }}
          disabled={!formData.firstName || !formData.lastName ? true : false}
        >
          Submit
        </button>
      </form>
      <div style={{ display: "flex", textAlign: "center" }}>
        {fullName && <p style={{ fontSize: "2rem" }}>{fullName}</p>}
      </div>
    </>
  );
}

export default Form;

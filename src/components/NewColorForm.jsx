import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewColorForm({ addColor }) {
  const [form, setForm] = useState({ name: "", color: "#000000" });
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addColor(form);
    navigate("/colors");
  }

  return (
    <div>
      <h1>Add a New Color</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Color Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="color">Color Value:</label>
          <input
            type="color"
            id="color"
            name="color"
            value={form.color}
            onChange={handleChange}
            required
          />
        </div>
        <button>Add Color</button>
      </form>
    </div>
  );
}

export default NewColorForm;

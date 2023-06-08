import React from "react";
import { useState } from "react";

function BookForm({ array, setArray }) {
  const initialFormValues = {
    name: "",
    description: "",
    image: "",
    purchaseUrl: "",
  };

  const [formData, setFormData] = useState(initialFormValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      name: formData.name,
      description: formData.description,
      image: formData.image,
      purchaseUrl: formData.purchaseUrl,
      likes: 0,
    };

    const resourceExists = array.some(
      (item) => item.purchaseUrl === formData.link
    );

    if (resourceExists) {
      alert("This resource already exists!");
    } else {
      fetch("http://localhost:3000/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify(newBook),
      })
        .then((resp) => resp.json())
        .then((newBook) => setArray([newBook, ...array]));
    }

    setFormData(initialFormValues);
  };

  return (
    <div className="form-section">
      <div className="form container m-auto px-8 mt-10 mb-10" id="contribute">
        <h2>Add Books</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Title"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="purchaseUrl"
            placeholder="Purchase Link"
            value={formData.purchaseUrl}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default BookForm;

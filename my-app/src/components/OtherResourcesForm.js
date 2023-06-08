import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function failureAlert() {
    toast.warning("This resource already exists!", {
      position: "bottom-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
    })
}

function OtherResourcesForm({ linksArray, setLinksArray }) {
  const initialFormValues = {
    name: "",
    description: "",
    image: "",
    link: "",
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

    const newLink = {
      name: formData.name,
      description: formData.description,
      image: formData.image,
      link: formData.link,
      likes: 0,
    };

    const resourceExists = linksArray.some(
      (item) => item.link === formData.link
    );

    if (resourceExists) {
      failureAlert();
    } else {
      fetch("http://localhost:3000/other", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify(newLink),
      })
        .then((resp) => resp.json())
        .then((newLink) => setLinksArray([newLink, ...linksArray]));
    }

    setFormData(initialFormValues);
  };

  return (
    <div className="form-section">
      <div className="form container m-auto px-8 mt-10 mb-10" id="contribute">
        <h2>Add Another Resource</h2>
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
            name="link"
            placeholder="Resource Link"
            value={formData.link}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default OtherResourcesForm;

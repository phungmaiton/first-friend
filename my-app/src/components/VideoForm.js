import React from "react";
import { useState } from "react";

function VideoForm({ array, setArray }) {
  const initialFormValues = {
    name: "",
    videoUrl: "",
    category: "select",
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

    const newVideo = {
      name: formData.name,
      videoUrl: formData.videoUrl,
      likes: 0,
      category: formData.category,
    };

    const resourceExists = array.some(
      (item) => item.link === formData.videoUrl
    );

    if (resourceExists) {
      alert("This video already exists!");
    } else {
      fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify(newVideo),
      })
        .then((resp) => resp.json())
        .then((newVideo) => setArray([newVideo, ...array]));
    }

    setFormData(initialFormValues);
  };

  return (
    <div className="form-section">
      <div className="form container m-auto px-8 mt-10 mb-10" id="contribute">
        <h2>Add Videos</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Title"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="videoUrl"
            placeholder="Embed URL"
            value={formData.videoUrl}
            onChange={handleInputChange}
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="select" disabled>
              Select Category
            </option>
            <option value="motivational">Motivational</option>
            <option value="listening">Listening Practice</option>
            <option value="entertainment">Entertainment</option>
          </select>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default VideoForm;

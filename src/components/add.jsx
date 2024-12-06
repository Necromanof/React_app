import React, { useState } from 'react';

function FormComponent({ onAddComponent }) {
  const [formData, setFormData] = useState({ name: '', type: '', price: '', url: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddComponent(formData);
    setFormData({ name: '', type: '', price: '', url: '' });
  };

  return (
<>
    <h1 className='page_h1'>Add a component</h1>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="Name">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
            <label htmlFor="type">Type</label>
            <input type="text" name="type" placeholder='(CPU, GPU, RAM...)' value={formData.type} onChange={handleChange} required />
        </div>
        <div>
            <label htmlFor="price">Price</label>
            <input type="number" name="price"  value={formData.price} onChange={handleChange} required />
        </div>
        <div>
            <label htmlFor="url">URL</label>
            <input type="url" name='url' value={formData.url} onChange={handleChange}/>
        </div>
        <button type="submit">Add</button>
    </form>
</>
  );
}

export default FormComponent;

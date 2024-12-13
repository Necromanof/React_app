import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'

function Add({ onAddComponent }) {
  const [formData, setFormData] = useState({ name: '', type: '', price: '', url: '', image: ''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddComponent(formData);
    setFormData({ name: '', type: '', price: '', url: '', image: ''});
    navigate('/List');
  };

  //Debug Machine (faut pas faire attention)
  console.log(`Data detect : name : ${formData.name} \n and type : ${formData.type} \n and price : ${formData.price} \n and url : ${formData.url}`)

  return (
<>

    {/* Form add new component */}
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
        {/* <div>
            <label htmlFor="image">Image (Link)</label>
            <input type="url" name="image_url" value={formData.image} onChange={handleChange}/>
        </div> */}
        <button type="submit">Add</button>
    </form>

    <Link to="/List"><button>List of components</button></Link>
</>
  );
}

export default Add;

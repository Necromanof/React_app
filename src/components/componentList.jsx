import React, { useState } from 'react';

function ComponentList({ components, onUpdateComponent, onDeleteComponent }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({ name: '', type: '', price: '', url: '' });

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditData(components[index]);
  };

  const handleUpdate = () => {
    onUpdateComponent(editIndex, editData);
    setEditIndex(null);
  };

  return (
    <div>
      {components.map((component, index) => (
        <div key={index}>
          {editIndex === index ? (
            <div>
              <input 
                type="text" 
                name="name" 
                value={editData.name} 
                onChange={(e) => setEditData({ ...editData, name: e.target.value })} 
              />
              <input 
                type="text" 
                name="type" 
                value={editData.type} 
                onChange={(e) => setEditData({ ...editData, type: e.target.value })} 
              />
              <input 
                type="number" 
                name="price" 
                value={editData.price} 
                onChange={(e) => setEditData({ ...editData, price: e.target.value })} 
              />
              <input 
                type="url" 
                name="url" 
                value={editData.url} 
                onChange={(e) => setEditData({ ...editData, url: e.target.value })} 
              />
              <button onClick={handleUpdate}>Sauvegarder</button>
            </div>
          ) : (
            <div>
              <p>{component.name} - {component.type} - {component.price}€</p>
              <button onClick={() => handleEdit(index)}>Modifier</button>
              <button onClick={() => onDeleteComponent(index)}>Supprimer</button>
              {component.url && (
                <a href={component.url} target="_blank" rel="noopener noreferrer">
                  <button style={{ backgroundColor: 'green', color: 'white', borderRadius: '5px', padding: '5px 10px' }}>
                    Acheter
                  </button>
                </a>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ComponentList;

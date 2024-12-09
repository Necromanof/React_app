import React, { useState } from 'react';

function ComponentList({ components = [], onUpdateComponent, onDeleteComponent }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({ name: '', type: '', price: '', url: '', image:'' });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedComponents, setSelectedComponents] = useState([]); // Liste des composants sélectionnés
  const sortedIndices = [...selectedComponents].sort((a,b) => b - a);

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditData(components[index]);
  };

  const handleUpdate = () => {
    onUpdateComponent(editIndex, editData);
    setEditIndex(null);
  };

  // Gérer la sélection ou déselection d'un composant
  const toggleSelectComponent = (index) => {
    setSelectedComponents((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((i) => i !== index) // Retirer si déjà sélectionné
        : [...prevSelected, index] 
    );
  };

  // Supprimer les composants sélectionnés
  const handleDeleteSelected = () => {
    sortedIndices.forEach((componentIndex) => onDeleteComponent(componentIndex));
    setSelectedComponents([]); // Réinitialiser la sélection
  };

  // Filtrer les composants avec la barre de recherche
  const componentsFilter = components.filter(
    (component) =>
      component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      component.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Search Bar */}
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search your component..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Bouton de suppression multiple */}
      {selectedComponents.length > 0 && (
        <button
          onClick={handleDeleteSelected}
          style={{ backgroundColor: 'red', color: 'white', margin: '10px', padding: '10px' }}
        >
          Supprimer les composants sélectionnés ({selectedComponents.length})
        </button>
      )}

      {/* Components List */}
      <div>
        {componentsFilter.map((component, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={selectedComponents.includes(index)} // Vérifie si l'index est sélectionné
              onChange={() => toggleSelectComponent(index)} // Ajoute ou retire de la sélection
            />

            {editIndex === index ? (
              <div>
                <input 
                  type="image" 
                  src={editData.image} 
                  onChange={(e) => setEditData({...editData, image: e.target.value})} />
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
                <p>
                  {component.name} - {component.type} - {component.price}€
                </p>
                <button onClick={() => handleEdit(index)}>Modifier</button>
                <button onClick={() => onDeleteComponent(index)}>Supprimer</button>
                {component.url && (
                  <a href={component.url} target="_blank" rel="noopener noreferrer">
                    <button
                      style={{
                        backgroundColor: 'green',
                        color: 'white',
                        borderRadius: '5px',
                        padding: '5px 10px',
                      }}
                    >
                      Acheter
                    </button>
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default ComponentList;

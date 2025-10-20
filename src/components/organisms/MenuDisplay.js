// src/components/organisms/MenuDisplay.js
'use client'; // Necesario para filtrar en el cliente

import MenuCategory from './MenuCategory'; // Importa el componente existente

export default function MenuDisplay({ menuData, categoryOrder, searchTerm }) {
  if (!menuData) return <p className="text-center text-muted">Cargando menú...</p>;

  // Función de filtrado (busca en nombre y descripción)
  const filterItems = (items, term) => {
    if (!term) return items; // Si no hay búsqueda, retorna todos
    const lowerCaseTerm = term.toLowerCase();
    return items.filter(item =>
      (item.name && item.name.toLowerCase().includes(lowerCaseTerm)) ||
      (item.description && item.description.toLowerCase().includes(lowerCaseTerm))
    );
  };

  // Filtra las categorías y sus ítems
  const filteredCategories = categoryOrder
    .map(key => {
      const category = menuData[key];
      if (!category || !category.items) return null; // Ignora si la categoría no existe

      const filtered = filterItems(category.items, searchTerm);

      // Solo incluye la categoría si tiene ítems después de filtrar (o si no hay búsqueda)
      if (filtered.length > 0) {
        return {
          ...category, // Mantiene título, notas, etc.
          items: filtered, // Usa los ítems filtrados
          key: key // Añade la clave original para el 'key' prop
        };
      }
      return null; // Si no hay ítems coincidentes, omite la categoría
    })
    .filter(Boolean); // Elimina las categorías nulas

  return (
    <div>
      {filteredCategories.length > 0 ? (
        filteredCategories.map((categoryData) => (
          <MenuCategory
            key={categoryData.key} // Usa la clave original
            categoryData={categoryData}
            categoryKey={categoryData.key} // Pasa la clave para el ID interno
          />
        ))
      ) : (
        <p className="text-center text-muted italic">
          No se encontraron platillos para &quot;{searchTerm}&quot;.
        </p> // Mensaje si no hay resultados
      )}
    </div>
  );
}
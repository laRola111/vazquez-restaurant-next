// src/components/organisms/MenuDisplay.js
'use client';

import MenuCategory from './MenuCategory';

export default function MenuDisplay({ menuData, categoryOrder, searchTerm }) {
  // console.log("MenuDisplay Props:", { menuData, categoryOrder, searchTerm }); // DEBUG: Ver props recibidos

  if (!menuData || Object.keys(menuData).length === 0) {
    console.error("MenuDisplay: menuData está vacío o no es un objeto válido.");
    return <p className="text-center text-muted">Error al cargar datos del menú.</p>;
  }
// Dentro de MenuDisplay.js
if (!categoryOrder || categoryOrder.length === 0) {
    console.error("MenuDisplay: categoryOrder está vacío."); // Mantenemos el log por ahora
    return <p className="text-center text-muted">Error en la configuración de categorías.</p>;
}


  const lowerCaseTerm = searchTerm?.trim().toLowerCase() || ''; // Quitar espacios extra

  const categoriesToDisplay = categoryOrder
    .map(key => {
      const category = menuData[key];

      // Verificar si la categoría existe y tiene un array 'items'
      if (!category || !Array.isArray(category.items)) {
        // console.log(`Skipping category "${key}": Invalid data or missing 'items' array.`); // DEBUG
        return null;
      }

      let itemsToDisplay = category.items;

      // Aplicar filtro SOLO si hay un término de búsqueda
      if (lowerCaseTerm) {
        itemsToDisplay = category.items.filter(item =>
          (item.name && item.name.toLowerCase().includes(lowerCaseTerm)) ||
          (item.description && item.description.toLowerCase().includes(lowerCaseTerm))
        );
        // console.log(`Filtering "${key}" for "${lowerCaseTerm}". Found: ${itemsToDisplay.length}`); // DEBUG
      }

      // Devolver la categoría solo si tiene items (originales o filtrados)
      if (itemsToDisplay.length > 0) {
        return {
          ...category,
          items: itemsToDisplay, // Usar los items correspondientes
          key: key // React key prop
        };
      }

      // console.log(`Skipping category "${key}": No items to display (after filter or originally empty).`); // DEBUG
      return null; // Si no hay items, no mostrar la categoría
    })
    .filter(Boolean); // Limpiar nulos

  // console.log(`Final categories to display: ${categoriesToDisplay.length}`); // DEBUG

  return (
    <div>
      {categoriesToDisplay.length > 0 ? (
        categoriesToDisplay.map((categoryData) => (
          <MenuCategory
            key={categoryData.key}
            categoryData={categoryData}
            categoryKey={categoryData.key}
          />
        ))
      ) : (
        // Mostrar mensaje adecuado según si hubo búsqueda o no
        searchTerm ? ( // O usar lowerCaseTerm aquí
          <p className="text-center text-muted italic">
            No se encontraron platillos para &quot;{searchTerm}&quot;.
          </p>
        ) : (
          <p className="text-center text-muted italic">
             No hay platillos disponibles en esta sección por el momento.
          </p>
        )
      )}
    </div>
  );
}
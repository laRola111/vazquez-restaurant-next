// src/components/organisms/MenuSection.js
import MenuCategory from './MenuCategory'; // Importa el componente de categoría

// NOTE: Lista de claves de categorías a mostrar y su orden
// Ajusta este orden según prefieras
const categoryOrder = [
  // Desayunos
  'breakfastTacos',
  'breakfastPlates',
  'omelettes',
  // Almuerzos/Cenas
  'tacosALaCarta',
  'gorditasALaCarta',
  'enchiladasPlates',
  'lunchDinnerPlates',
  // Otros
  'newItems',
  'appetizers',
  'salads',
  'soupsAndMore',
  'sideOrders',
  // Bebidas
  'drinks',
  'aguasFrescas',
  'beer',
  'wines',
  // Infantil
  'childMenu',
];

export default function MenuSection({ lang, dict }) {
  const menuData = dict; // El diccionario 'menu' completo

  if (!menuData) return null; // No renderizar si no hay datos

  return (
    // NOTE: Sección principal del menú con ID
    <section id="menu-digital" className="py-16 md:py-24 bg-background"> {/* Fondo crema */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título General del Menú */}
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-primary mb-12 md:mb-16">
          Nuestro Menú
        </h2>

        {/* Renderizar cada categoría en el orden definido */}
        {categoryOrder.map((key) => (
           menuData[key] ? // Verifica si la categoría existe en el diccionario
            <MenuCategory key={key} categoryData={menuData[key]} categoryKey={key} />
           : null
        ))}

         {/* Notas Generales al final */}
         {menuData.notes && (
             <div className="mt-12 pt-8 border-t border-secondary/20 text-center text-xs text-muted italic space-y-2">
                 {menuData.notes.rawFoodWarning && <p>{menuData.notes.rawFoodWarning}</p>}
                 {menuData.notes.bonesWarning && <p>{menuData.notes.bonesWarning}</p>}
             </div>
         )}
      </div>
    </section>
  );
}
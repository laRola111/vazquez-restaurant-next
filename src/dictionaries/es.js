// src/dictionaries/es.js
export const dictionary = {
  navbar: {
    home: 'Inicio',
    breakfast: 'Desayunos',
    lunchDinner: 'Almuerzos y Cenas',
    drinks: 'Bebidas',
    contact: 'Contacto', // Mantenido por si se usa en otro lugar
  },
hero: {
   title: "Bienvenidos a Vazquez Restaurant #3 ❤️",
    subtitle: "Explora nuestra selección de tacos, enchiladas, gorditas, menudo y más, cada uno elaborado para llevar un sabor auténtico de México a tu mesa e inspirar una sensación de alegría y conexión.",
    button: "Ver Menú Completo",
    imageAlt: "Restaurante mexicano sirviendo comida tradicional",
  },
  about: {
   since: "Desde 2007",
    mainTextKey: "thankYouMessage",
    thankYouMessage: "Nos gustaría tomar un momento para expresar nuestra más profunda gratitud a todos ustedes. Nuestros corazones están llenos de agradecimiento por su continuo apoyo a nuestro negocio. Nuestro restaurante, no solo un establecimiento comercial, es un restaurante familiar. Gracias por compartir sus historias con nosotros en cada mesa, por su apoyo inquebrantable a través de cada desafío y por ser más que solo clientes para mí y mis hijos. Dios los bendiga a todos ustedes y a sus familias. Gracias, muchas gracias. ❤️",
    // description: "Nuestro restaurante es una familia, no solo un establecimiento comercial. Gracias por compartir sus historias.", // Descripción corta
    imageAlt: "Mascota de Vazquez Restaurant #3",
  },
    hoursContact: {
    title: "Hours - Horas",
    mondayWed: "Lunes a Miércoles",
    mondayWedTime: "6:00 am to 3:00 pm",
    thursdayFri: "Jueves y Viernes",
    thursdayFriTime: "6:00 am to 9:00 pm",
    saturday: "Sábado",
    saturdayTime: "7:00 am to 9:00 pm",
    sunday: "Domingo",
    sundayTime: "7:00 am to 4:00 pm",
    contactTitle: "CONTACTO",
    locationTitle: "UBICACIÓN",
    
  },
  featuredItems: { // <--- AÑADIDO
    title: "Nuestros Favoritos",
    item1Name: "Menudo", // Ejemplo, usa nombres reales del menú
    item2Name: "Chilaquiles", // Ejemplo
    item3Name: "Tacos al Pastor", // Ejemplo
    item4Name: "Enchiladas", // Ejemplo
    viewMenuButton: "Ver Menú Completo"
  },
  reviews: { // <--- AÑADIDO (Placeholder)
      title: "Lo Que Dicen Nuestros Clientes",
      review1: "¡La comida es deliciosa y auténtica! El servicio siempre es amable.",
      author1: "Cliente Feliz",
      review2: "El mejor menudo de Austin, sin duda. ¡Perfecto para la cruda!",
      author2: "Visitante Regular",
      review3: "Nos encantan los tacos y el ambiente familiar. ¡Muy recomendado!",
      author3: "Familia G.",
  },
  footer: {
    rights: 'Todos los derechos reservados.',
    quickLinks: 'Enlaces Rápidos',
    contactInfo: 'Información de Contacto',
    followUs: 'Síguenos',
  },
  gallery: { // <-- AÑADIR ESTA SECCIÓN
    title: "Nuestra Cocina",
  },
  menu: {
    // --- Desayunos ---
    breakfastTacos: {
      categoryTitle: 'Tacos de Desayuno',
      note: '(Ingredientes extra $.75)',
      items: [
        { name: 'BACON EGG', price: 3.00 },
        { name: 'CHORIZO EGG', price: 3.00 },
        { name: 'BEANS EGG', price: 3.00 },
        { name: 'MEXICANO', price: 3.00 },
        { name: 'MIGAS', price: 3.00 },
        { name: 'FAJITA AND EGG', price: 6.00 },
        { name: 'BEAN CHEESE', price: 3.00 },
        { name: 'POTATOES EGG', price: 3.00 },
        { name: 'SAUSAGE EGG', price: 3.00 },
        { name: 'HAM EGG', price: 3.00 },
        { name: 'NOPALES EGG OR BEANS', price: 5.00 },
        { name: 'CHICHARRON EGG OR BEANS', price: 5.00 },
        { name: 'COMBO', description: '(egg, bacon, sausage, ham, bell pepper, onions and cheese)', price: 5.00 },
        { name: 'CHILAQUILES', description: '(home made tortillas chips, hot sauce and queso fresco)', price: 5.00 },
        { name: 'CAMPECHANO', description: '(Steak, chorizo and nopales)', price: 7.00 },
      ],
      burroNote: 'BREAKFAST BURRO 2 ingredientes $6 (extra ingredient $1.00)'
    },
    breakfastPlates: {
      categoryTitle: 'Platillos de Desayuno',
      note: 'Todos los platillos vienen con dos tortillas o una orden de pan tostado. Chips $2 antes de las 11:00 AM.',
      items: [
        { name: 'CLASSIC BREAKFAST', description: 'Dos huevos (cualquier estilo) con elección de: jamón, tocino, salchicha o chorizo, servido con frijoles y papas.', price: 12.00, image: 'eggs.jpg' },
        { name: 'HUEVOS RANCHEROS', description: 'Dos huevos (cualquier estilo) bañados en salsa ranchera, con elección de tocino, salchicha o jamón, servido con papas y frijoles.', price: 12.00, image: 'Image00019.jpg' },
        { name: 'HUEVOS DIVORCIADOS', description: 'Dos huevos (cualquier estilo), uno bañado en salsa verde y otro en salsa roja, servido con frijoles y papas.', price: 15.00, image: 'eggs-separated.jpg' },
        { name: 'NOPALITOS', description: 'Nopalitos frescos mezclados con dos huevos, servido con frijoles y papas.', price: 13.00, image: 'Image00008.jpg' },
        { name: 'FAJITA AND EGG', description: 'Dos huevos (cualquier estilo) con fajita, servido con frijoles y papas.', price: 17.00 },
        { name: 'MIGAS RANCHERAS', description: 'Dos huevos revueltos con totopos, jalapeños frescos picados, cebolla y tomate, bañados en salsa ranchera y queso, servido con frijoles y papas.', price: 13.00, image: 'Image00012.jpg' },
        { name: 'MIGAS', description: 'Dos huevos revueltos con totopos, jalapeños picados, cebolla y tomate, servido con frijoles y papas.', price: 12.00, image: 'Image00011.jpg' },
        { name: 'CHILAQUILES', description: 'Totopos caseros y salsa, cubiertos con queso fresco, servido con dos huevos y elección de frijoles o papas.', price: 13.00, addBarbacoa: '$6 extra', addFajita: '$7 extra', image: 'Image00021.jpg' },
        { name: 'VAZQUEZ DELUXE', description: 'Dos huevos (cualquier estilo), con elección de picadillo, barbacoa o chicharron, servido con frijoles y papas.', price: 16.00 },
        { name: 'PANCAKE MEAL', description: '2 pancakes, 2 huevos, y elección de jamón, tocino o salchicha, servido con papas.', price: 13.00 },
      ]
    },
    omelettes: {
        categoryTitle: 'Omelettes',
        items: [
            { name: 'CLASSIC OMELETTE', description: 'Tres huevos con elección de: tocino, jamón picado, salchicha o chorizo y queso. Servido con frijoles y papas.', price: 13.00 },
            { name: 'COMBO OMELETTE', description: 'Tres huevos, jamón picado, salchicha, tocino, pimiento morrón, cebolla y queso, servido con frijoles y papas.', price: 15.00 },
            { name: 'BEEF OR CHICKEN FAJITA OMELETTE', description: 'Tres huevos, bañados en salsa ranchera y queso, servido con papas y frijoles.', price: 17.00 },
            { name: 'VEGETABLE OMELETTE', description: 'Tres huevos, con tomate, pimiento morrón, cebolla, champiñones y queso, servido con papas y frijoles.', price: 12.00 },
        ]
    },
    // --- Almuerzos y Cenas ---
    tacosALaCarta: {
        categoryTitle: 'Tacos a la Carta',
        note: 'Ingredientes extra (Lechuga, tomate, jalapeños o queso) $.75 | Guacamole $1 extra | Cilantro y Cebolla (Sin cargo extra)',
        items: [
            { name: 'BEEF OR CHICKEN FAJITA', description: '(Bell pepper and onions)', price: 6.00 },
            { name: 'STEAK', description: '(Tender strips of steak, serranos peppers, tomatoes and onions)', price: 5.00 },
            { name: 'AL PASTOR', description: '(Marinated pork with onions and cilantro)', price: 5.00 },
            { name: 'BARBACOA', description: '(onions and cilantro)', price: 5.00 },
            { name: 'PICADILLO', description: '(ground beef, potatoes, beans and cheese)', price: 4.50 },
            { name: 'CARNE GUISADA', price: 4.50 },
            { name: 'CHICHARRON', description: '(Pork skin in spicy red sauce)', price: 4.50 },
            { name: 'CHICKEN RICE', description: '(spice shredded chicken and rice)', price: 4.50 },
            { name: 'ADOBADO', description: '(pork with red sauce)', price: 4.50 },
            { name: 'SOFT TACO', description: '(ground beef, lettuce, tomatoe and cheese)', price: 5.00, image: 'Image00005.jpg' }, // Imagen de crispy taco usada como ejemplo
            { name: 'TACO MADRE!', description: '(Beef fajita, bell pepper, onions, lettuce, tomato, guacamole, and cheese)', price: 7.00 },
        ]
    },
    gorditasALaCarta: {
        categoryTitle: 'Gorditas a la Carta',
        note: 'Añadir Guacamole $1 extra | Añadir Queso $.75',
        items: [
            { name: 'CARNE GUISADA', price: 6.00 },
            { name: 'CHICKEN RICE', price: 6.00 },
            { name: 'PICADILLO', price: 6.00 },
            { name: 'CHICHARRON', price: 6.00 },
            { name: 'ADOBADO', price: 6.00 },
            { name: 'BARBACOA', price: 6.50 },
            { name: 'CHICKEN OR BEEF FAJITA', price: 6.75 },
            { name: 'STEAK', price: 6.50 },
            { name: 'PASTOR', price: 6.50 },
            { name: 'GORDIBUENA', price: 6.00 },
        ]
    },
    enchiladasPlates: {
        categoryTitle: 'Enchiladas',
        items: [
            { name: 'ENCHILADAS (BEEF, CHEESE OR CHICKEN)', description: 'Dos enchiladas, servido con arroz y frijoles.', price: 13.00, image: '28.jpg' },
            { name: 'ENCHILADAS VERDES', description: 'Dos enchiladas de pollo bañadas en salsa tomatillo y queso blanco, servido con arroz y frijoles.', price: 13.00 },
            { name: 'FAJITA ENCHILADAS', description: 'Dos enchiladas servido con arroz y frijoles.', price: 15.00 },
            { name: 'CHILE CON QUESO FAJITA ENCHILADAS', description: 'Dos enchiladas servido con arroz, frijoles y tortilla.', price: 16.00 },
            { name: 'CHILE CON QUESO ENCHILADAS', description: 'Dos enchiladas de res o pollo, bañadas en chile con queso, servido con arroz y frijoles.', price: 14.00 },
            { name: 'LA RIELERA ENCHILADAS', description: '2 enchiladas de adobado con aguacate y crema agria, servido con arroz y frijoles.', price: 14.00 },
            { name: 'SARITA\'S ENCHILADAS', description: 'Dos enchiladas de queso, bañadas en gravy de carne guisada y queso, servido con arroz y frijoles.', price: 14.00 },
        ]
    },
    lunchDinnerPlates: {
        categoryTitle: 'Almuerzos y Cenas',
        note: 'Salsa y Chips son cortesía para clientes cenando en el restaurante.',
        items: [
            { name: 'MEXICAN STEAK', description: 'Tiras tiernas de bistec, asadas con cebolla, chiles serranos y tomate, servido con arroz, frijoles, ensalada de guacamole y dos tortillas.', price: 18.00, image: '27.jpg' },
            { name: 'ARRE! BURRITO', description: 'Tortilla grande de harina rellena de fajita, lechuga, tomate, jalapeños, guacamole, crema agria y queso, servido con arroz y frijoles.', price: 15.00 },
            { name: 'BARBACOA', description: 'Servido con arroz, frijoles, pico de gallo y dos tortillas.', price: 16.00 },
            { name: 'CHICHARRON', description: 'Piel de cerdo en salsa picante, servido con arroz, frijoles, ensalada y dos tortillas.', price: 14.00 },
            { name: 'CARLITO\'S PLATE', description: 'Una enchilada (cualquier estilo), un taco crujiente de res, servido con arroz y frijoles.', price: 13.00 },
            { name: 'PICADILLO', description: 'Servido con arroz y frijoles.', price: 14.00 },
            { name: 'RICKY\'S PLATE', description: '2 Tacos de Fajita con lechuga, tomate, guacamole y queso.', price: 18.00 },
            { name: 'ADOBADO', description: 'Trozos de cerdo tierno cocidos a fuego lento en salsa roja, servido con frijoles, arroz, ensalada y dos tortillas.', price: 15.00 },
            { name: 'CARNE GUISADA', description: 'Trozos de res tierna cocidos a fuego lento en salsa especial con papas, servido con arroz, frijoles, ensalada y dos tortillas.', price: 15.00 },
            { name: 'AL PASTOR', description: 'Cerdo marinado, servido con arroz, frijoles, cilantro, cebolla y dos tortillas.', price: 16.00, image: 'Image00009.jpg' },
            { name: 'BEEF OR CHICKEN FAJITA', description: 'Asado con pimiento morrón y cebolla, servido con arroz, frijoles y guarnición de guacamole, crema agria, pico de gallo y dos tortillas.', price: 20.00 },
            { name: 'FIESTA FAJITAS', description: 'Fajitas mixtas (pollo y res) con salchicha, pimiento morrón y cebolla asados, chile toreado, servido con arroz y frijoles charros y guarnición de guacamole, crema agria, pico de gallo, queso y dos tortillas.', price: 22.00 },
            { name: 'MI TIERRA BURRITO', description: 'Tortilla grande de harina rellena de adobado picante (cerdo) y arroz, bañada en salsa de adobado, queso blanco, crema agria, rodajas de aguacate, servido con arroz y frijoles.', price: 15.00, image: 'Image00018.jpg' },
            { name: 'VAZQUEZ BURRITO', description: 'Tortilla grande de harina rellena de carne molida, pico de gallo, bañada en gravy y queso, servido con arroz y frijoles.', price: 14.00 },
            { name: 'CRISPY TACO PLATE (3)', description: '3 tacos crujientes con lechuga, tomate, queso, servido con arroz y frijoles.', price: 13.00, image: 'Image00005.jpg' }, // Reusando imagen
            { name: 'GORDITA PLATE (2)', description: 'Tortilla gruesa de maíz hecha a mano, rellena con elección de: picadillo, barbacoa, chicharron o adobado, lechuga y tomate, servido con arroz y frijoles.', price: 16.00 },
            { name: 'FAJITA OR STEAK GORDITA PLATE', description: 'Servido con lechuga y tomate, servido con arroz y frijoles.', price: 20.00 },
            { name: 'CALDO DE RES', description: 'Sopa de res con vegetales, servido con arroz y guarnición de jalapeños frescos, cebolla y lima.', priceLg: 16.00, priceSm: 14.00, sizeNote: '(Lg 32oz) (Sm 20oz.)', image: 'Image00002.jpg' },
        ]
    },
    // --- Aperitivos y Otros ---
    appetizers: {
        categoryTitle: 'Aperitivos',
        items: [
            { name: 'CHILE CON QUESO', priceLg: 6.00, priceSm: 4.00, sizeNote: '(Lg. 8 oz.) (Sm. 4 oz.)' },
            { name: 'GUACAMOLE WITH PICO DE GALLO', price: 6.00, sizeNote: '(SMALL)' },
            { name: 'FAJITA NACHOS (8)', description: 'Elección de res o pollo, cubiertos con frijoles y queso, servido con crema agria, guacamole y jalapeño al lado.', price: 15.00, image: 'Image00010.jpg' },
            { name: 'DELUXE NACHOS (8)', description: 'Cubiertos con frijoles, carne molida, queso, tomate, jalapeño, guacamole y crema agria.', price: 13.00 },
            { name: 'BEAN AND CHEESE NACHOS', price: 10.00 },
            { name: 'FAJITA QUESADILLA', description: 'Elección de res o pollo, servido con ensalada de guacamole.', price: 15.00 },
            { name: 'CHEESE QUESADILLA', description: 'Servido con ensalada de guacamole.', price: 11.00 },
        ]
    },
    salads: {
        categoryTitle: 'Ensaladas',
        items: [
            { name: 'GARDEN SALAD', description: 'Lechuga fresca picada, tomate y pepino, mezclado con queso, crutones y elección de aderezo.', price: 7.50 },
            { name: 'FAJITA SALAD', description: 'Ensalada Garden cubierta con crema agria, guacamole, queso y crutones.', price: 14.00 },
            { name: 'GUACAMOLE SALAD', description: 'Lechuga fresca picada, tomate y guacamole.', price: 5.00 },
        ]
    },
    soupsAndMore: {
        categoryTitle: 'Sopas y Más',
        items: [
            { name: 'MENUDO (PARA CURAR LA CRUDA)', description: 'Caldo casero de pancita de res con maíz pozolero y guarnición de jalapeño, cebolla, lima y dos tortillas.', priceLg: 16.00, priceSm: 13.00, sizeNote: 'LARGE 32oz / SMALL 20 oz', image: 'Image00013.jpg' },
            { name: 'BARBACOA (POR LIBRA)', description: '(8 Tortillas y guarnición de pico de gallo)', price: 22.00 },
            { name: 'FAJITAS (POR LIBRA)', description: '(8 Tortillas y guarnición de pico de gallo)', price: 25.00 },
        ]
    },
     sideOrders: {
        categoryTitle: 'Órdenes Extras',
        items: [
            { name: 'ARROZ (8 oz)', price: 4.00 }, { name: 'FRIJOLES REFRITOS (8 oz)', price: 4.00 }, { name: 'FRIJOLES CHARROS (8 oz)', price: 4.00 },
            { name: 'PAPAS', price: 4.00 }, { name: 'SALCHICHA', price: 5.00 }, { name: 'CHORIZO', price: 5.00 },
            { name: 'TOCINO (4)', price: 5.00 }, { name: 'JAMÓN', price: 5.00 }, { name: 'AGUACATE EN RODAJAS (1)', price: 4.00 },
            { name: 'QUESO (4oz.)', price: 2.00 }, { name: 'QUESO FRESCO (4 oz)', price: 2.50 }, { name: 'CREMA AGRIA (2 oz)', price: 1.00 },
            { name: 'PANCAKE', price: 2.00 }, { name: 'HUEVO', price: 2.00 }, { name: 'CHIPS (Bolsa Mediana)', price: 2.00 },
            { name: 'JALAPEÑOS (2 oz)', price: 1.00 }, { name: 'JALAPEÑOS "TOREADO"', price: 0.75 }, { name: 'SERRANO', price: 0.50 },
            { name: 'CEBOLLA (2 oz)', price: 1.00 }, { name: 'TOMATE (2 oz)', price: 1.00 }, { name: 'LIMA (1)', price: 1.00 },
            { name: 'PICO DE GALLO (2 oz)', price: 1.00 }, { name: 'PICO DE GALLO (4 oz)', price: 2.00 },
            { name: 'SALSA VERDE (8 oz)', price: 2.50 }, { name: 'SALSA RANCHERA (8 oz)', price: 2.50 },
            { name: 'SALSA PICANTE (8 Oz Para Llevar)', price: 2.50 }, { name: 'SALSA PICANTE (16 Oz Para Llevar)', price: 4.50 }, { name: 'SALSA PICANTE (32 oz Para Llevar)', price: 8.50 },
            { name: 'CHIPS-SALSA', price: 4.00 }, { name: 'TACO CRUJIENTE', price: 5.00 },
            { name: 'ENCHILADA', description: '(Queso, pollo y carne molida)', price: 3.50 },
            { name: 'FAJITA ENCHILADA', price: 6.00 }, { name: 'CHILE CON QUESO FAJITA ENCHILADA', price: 6.25 },
            { name: 'MINI MENUDO (8 OZ)', price: 5.00 },
        ]
    },
    // --- Nuevos Items (Página 7) ---
    newItems: {
        categoryTitle: 'Nuevos Platillos',
        items: [
            { name: 'QUESABIRRIA', price: 14.00 },
            { name: 'FLAUTAS', price: 13.00 },
            { name: 'TOSTADAS', price: 13.00 },
            { name: 'TORTAS', price: 11.00 },
            { name: 'STREET TACOS', price: 13.00, image: 'Image00007.jpg' }, // Ejemplo de imagen
        ]
    },
    // --- Bebidas ---
    drinks: {
        categoryTitle: 'Bebidas',
        items: [
            { name: 'MEXICAN COCA-COLA', price: 4.00 }, { name: 'TOPO CHICO', price: 4.00 }, { name: 'JARRITOS', price: 4.00 },
            { name: 'SODAS DE BOTELLA (16.9 oz)', price: 3.50 }, { name: 'SODA DE LATA (12 oz)', price: 2.00 },
            { name: 'AGUA DE BOTELLA (16.9 oz)', price: 2.00 }, { name: 'TÉ HELADO (En Restaurante)', price: 3.00 },
            { name: 'JUGO DE NARANJA', price: 4.00 }, { name: 'JUGO DE MANZANA', price: 4.00 },
            { name: 'CAFÉ', price: 3.00 }, { name: 'LECHE CON CHOCOLATE', price: 4.00 },
        ]
    },
    aguasFrescas: {
        categoryTitle: 'Aguas Frescas',
        items: [
            { name: 'GRANDE (32 oz)', price: 5.00 },
            { name: 'PEQUEÑA (16 oz)', price: 3.50 },
        ]
    },
    beer: {
        categoryTitle: 'Cerveza',
        items: [
            { name: 'CERVEZA DOMÉSTICA', price: 4.75 },
            { name: 'CERVEZA IMPORTADA', price: 5.25 },
            { name: 'MICHELADAS', price: 7.00 },
            { name: 'MIMOSA', price: 5.00 },
        ]
    },
    wines: {
        categoryTitle: 'Vinos (Mini Botellas)',
        items: [
            { name: 'PINOT GRIGIO (BLANCO)', price: 7.00 },
            { name: 'CABERNET SAUVIGNON (TINTO)', price: 7.00 },
            { name: 'REAL SANGRIA', price: 7.00 },
        ]
    },
     // --- Menú Infantil ---
    childMenu: {
        categoryTitle: 'Menú Infantil',
        note: '$6.00 (Menores de 10 años, mayores de 10 añadir $2)',
        items: [
            { name: 'GAEL\'S PLATE', description: '1 huevo, papas y frijoles.' },
            { name: 'MINI CHEESE QUESADILLA', description: 'arroz y frijoles.' },
            { name: 'CRISPY TACO', description: 'arroz y frijoles.' },
            { name: 'ENCHILADA PLATE', description: '1 enchilada, arroz y frijoles.' },
            { name: 'MIA\'S PLATE', description: '2 tacos de frijol con queso servido con arroz.' },
            { name: 'KJ PLATE', description: 'Un pancake, un huevo, con elección de jamón, salchicha o tocino.' },
        ]
    },
    // --- Notas Adicionales ---
    notes: {
      rawFoodWarning: "Consumir carnes, aves o huevos crudos o poco cocidos puede aumentar el riesgo de enfermedades transmitidas por alimentos, especialmente si tiene ciertas condiciones médicas.",
      bonesWarning: "Barbacoa y pollo pueden contener HUESOS."
    }
  }
};
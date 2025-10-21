// src/dictionaries/en.js
export const dictionary = {
  navbar: {
    home: 'Home',
    breakfast: 'Breakfast',
    lunchDinner: 'Lunch & Dinner',
    drinks: 'Drinks',
    contact: 'Contact',
  },
   hero: {
    title: "Welcome to Vazquez Restaurant #3 ❤️",
    subtitle: "Explore our selection of tacos, enchiladas, gorditas, menudo and more, each crafted to bring a taste of authentic Mexico to your table, and inspire a sense of joy and connection.",
    button: "View Full Menu",
    imageAlt: "Mexican restaurant serving traditional food",
  },
   about: {
    since: "Since 2007",
    mainTextKey: "thankYouMessage",
    thankYouMessage: "We would like to take a moment to express our deepest gratitude to all of you. Our hearts are filled with thankfulness for your ongoing support of our business. Our restaurant not just a business establishment is a family owned restaurant ,Thank you for sharing your stories with us at every table, for your unwavering support through every challenge, and for being more than just customers to me and my children. God bless you all and your families. Gracias, muchas gracias. ❤️",
    // description: "Our restaurant is a family, not just a business establishment. Thank you for sharing your stories.", // Descripción más corta o se puede quitar si el texto principal es suficiente
    imageAlt: "Mascota de Vazquez Restaurant #3",
  },
  hoursContact: {
    title: "Hours - Horas",
    mondayWed: "Monday thru Wednesday",
    mondayWedTime: "6:00 am to 3:00 pm",
    thursdayFri: "Thursday & Friday",
    thursdayFriTime: "6:00 am to 9:00 pm",
    saturday: "Saturday",
    saturdayTime: "7:00 am to 9:00 pm",
    sunday: "Sunday",
    sundayTime: "7:00 am to 4:00 pm",
    contactTitle: "CONTACT",
    locationTitle: "LOCATION",
   
  },
  featuredItems: { // <--- ADDED
    title: "Our Favorites",
    item1Name: "Menudo", // Example, use real menu item names
    item2Name: "Chilaquiles", // Example
    item3Name: "Tacos al Pastor", // Example
    item4Name: "Enchiladas", // Example
    viewMenuButton: "View Full Menu"
  },
  reviews: { // <--- ADDED (Placeholder)
      title: "What Our Customers Say",
      review1: "The food is delicious and authentic! Service is always friendly.",
      author1: "Happy Customer",
      review2: "Best menudo in Austin, hands down. Perfect hangover cure!",
      author2: "Regular Visitor",
      review3: "We love the tacos and the family atmosphere. Highly recommended!",
      author3: "The G. Family",
  },
  footer: {
    rights: 'All rights reserved.',
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Info',
    followUs: 'Follow Us',
  },
  gallery: { // <-- AÑADIR ESTA SECCIÓN
    title: "Our Kitchen",
  },
  menu: {
    // --- Breakfast ---
    breakfastTacos: {
      categoryTitle: 'Breakfast Tacos',
      note: '(Extra ingredients $.75)',
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
       burroNote: 'BREAKFAST BURRO 2 ingredients $6 (extra ingredient $1.00)'
    },
     breakfastPlates: {
      categoryTitle: 'Breakfast Plates',
      note: 'All breakfast plates come with two tortillas or an order of toast. Chips $2 before 11:00 AM.',
      items: [
        { name: 'CLASSIC BREAKFAST', description: 'Two fresh eggs (any style) with your choice of: ham, bacon, sausage or chorizo, served with beans and potatoes.', price: 12.00, image: 'eggs.jpg' },
        { name: 'HUEVOS RANCHEROS', description: 'Two fresh eggs (any style) topped with ranchera sauce, with your choice of bacon, sausage or ham, served with potatoes and beans.', price: 12.00, image: 'Image00019.jpg' },
        { name: 'HUEVOS DIVORCIADOS', description: 'Two fresh eggs (any style), one egg topped with green sauce and one with red sauce served with beans and potatoes.', price: 15.00, image: 'eggs-separated.jpg' },
        { name: 'NOPALITOS', description: 'Fresh nopalitos mix with two eggs served with beans and potatoes.', price: 13.00, image: 'Image00008.jpg' },
        { name: 'FAJITA AND EGG', description: 'Two fresh eggs (any style) with fajita served with beans and potatoes.', price: 17.00 },
        { name: 'MIGAS RANCHERAS', description: 'Two fresh eggs scrambles with corn chips freshly diced jalapeños, onions and tomatoes topped with ranchera sauce and cheese, served with beans and potatoes.', price: 13.00, image: 'Image00012.jpg' },
        { name: 'MIGAS', description: 'Two fresh eggs scrambled with corn chips diced jalapeños, onions and tomatoes served with beans and potatoes.', price: 12.00, image: 'Image00011.jpg' },
        { name: 'CHILAQUILES', description: 'Home made tortilla chips and salsa, topped with queso fresco served with two eggs your choice of beans or potatoes.', price: 13.00, addBarbacoa: '$6 extra', addFajita: '$7 extra', image: 'Image00021.jpg' },
        { name: 'VAZQUEZ DELUXE', description: 'Two eggs (any style), with your choice picadillo, barbacoa or chicharron, served with beans and potatoes.', price: 16.00 },
        { name: 'PANCAKE MEAL', description: '2 pancakes, 2 eggs, and a choice of ham, bacon, or sausage served with potatoes.', price: 13.00 },
      ]
    },
     omelettes: {
        categoryTitle: 'Omelettes',
        items: [
            { name: 'CLASSIC OMELETTE', description: 'Three fresh eggs with your choice of: bacon, diced ham, sausage, or chorizo and cheese. Served with beans and potatoes.', price: 13.00 },
            { name: 'COMBO OMELETTE', description: 'Three fresh eggs, diced ham, sausage, bacon bell pepper, onion and cheese served with beans and potatoes.', price: 15.00 },
            { name: 'BEEF OR CHICKEN FAJITA OMELETTE', description: 'Three fresh eggs, topped with ranchera sauce and cheese, served with potatoes and beans.', price: 17.00 },
            { name: 'VEGETABLE OMELETTE', description: 'Three fresh eggs, with tomatoes, bell pepper onions, mushrooms and cheese, served with potatoes and beans.', price: 12.00 },
        ]
    },
    // --- Lunch & Dinner ---
     tacosALaCarta: {
        categoryTitle: 'Tacos a la Carta',
        note: 'Extra ingredients (Lettuce, tomatoes, jalapeños or cheese) $.75 | Guacamole $1 extra | Cilantro and Onions (No extra charge)',
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
            { name: 'SOFT TACO', description: '(ground beef, lettuce, tomatoe and cheese)', price: 5.00, image: 'Image00005.jpg' },
            { name: 'TACO MADRE!', description: '(Beef fajita, bell pepper, onions, lettuce, tomato, guacamole, and cheese)', price: 7.00 },
        ]
    },
    gorditasALaCarta: {
        categoryTitle: 'Gorditas a la Carta',
        note: 'Add Guacamole $1 extra | Add Cheese $.75',
        items: [
            { name: 'CARNE GUISADA', price: 6.00 }, { name: 'CHICKEN RICE', price: 6.00 }, { name: 'PICADILLO', price: 6.00 },
            { name: 'CHICHARRON', price: 6.00 }, { name: 'ADOBADO', price: 6.00 }, { name: 'BARBACOA', price: 6.50 },
            { name: 'CHICKEN OR BEEF FAJITA', price: 6.75 }, { name: 'STEAK', price: 6.50 }, { name: 'PASTOR', price: 6.50 },
            { name: 'GORDIBUENA', price: 6.00 },
        ]
    },
     enchiladasPlates: {
        categoryTitle: 'Enchiladas',
        items: [
            { name: 'ENCHILADAS (BEEF, CHEESE OR CHICKEN)', description: 'Two enchiladas, served with rice, beans.', price: 13.00, image: '28.jpg' },
            { name: 'ENCHILADAS VERDES', description: 'Two chicken enchiladas topped with tomatillo sauce and white cheese, served with rice, beans.', price: 13.00 },
            { name: 'FAJITA ENCHILADAS', description: 'Two Enchiladas Served with rice, beans.', price: 15.00 },
            { name: 'CHILE CON QUESO FAJITA ENCHILADAS', description: 'Two Enchiladas Served with rice, beans and tortilla.', price: 16.00 },
            { name: 'CHILE CON QUESO ENCHILADAS', description: 'Two beef or chicken enchiladas, topped with chile con queso, served with rice and beans.', price: 14.00 },
            { name: 'LA RIELERA ENCHILADAS', description: '2 adobado enchiladas with avocado and sour cream, served with rice and beans.', price: 14.00 },
            { name: 'SARITA\'S ENCHILADAS', description: 'Two cheese enchiladas, topped with carne guisada gravy and cheese, served with rice and beans.', price: 14.00 },
        ]
    },
    lunchDinnerPlates: {
        categoryTitle: 'Lunch and Dinner',
        note: 'Salsa and Chips are complementary for those dining in.',
        items: [
            { name: 'MEXICAN STEAK', description: 'Tender strips of steak, grilled with onions, serranos peppers and tomatoes, served with rice, beans, guacamole salad and two tortillas.', price: 18.00, image: '27.jpg' },
            { name: 'ARRE! BURRITO', description: 'A big flour tortilla filled with fajita, lettuce tomatoes, jalapeños, guacamole, sour cream, and cheese served with rice and beans.', price: 15.00 },
            { name: 'BARBACOA', description: 'Served with rice, beans, pico de gallo and two tortillas.', price: 16.00 },
            { name: 'CHICHARRON', description: 'Pork skin with spicy sauce, served with rice, beans salad and two tortillas.', price: 14.00 },
            { name: 'CARLITO\'S PLATE', description: 'One enchilada (any style) one beef crispy taco, served wiht rice and beans.', price: 13.00 },
            { name: 'PICADILLO', description: 'Served with rice and beans.', price: 14.00 },
            { name: 'RICKY\'S PLATE', description: '2 Fajita tacos with lettuce, tomatoes guacamole and cheese.', price: 18.00 },
            { name: 'ADOBADO', description: 'Chunks of tender pork simmered in red sauce, served with beans, rice, salad and two tortillas.', price: 15.00 },
            { name: 'CARNE GUISADA', description: 'Chunks of tender beef simmered in special sauce with potatoes, served with rice, beans, salad and two tortillas.', price: 15.00 },
            { name: 'AL PASTOR', description: 'Marinated pork, served with rice beans, cilantro, onions and two tortillas.', price: 16.00, image: 'Image00009.jpg' },
            { name: 'BEEF OR CHICKEN FAJITA', description: 'Grilled with bell pepper and onions served with rice, beans and your side of guacamole, sour cream pico de gallo and two tortillas.', price: 20.00 },
            { name: 'FIESTA FAJITAS', description: 'Mix fajitas (chicken and beef) with sausage, grilled Bell pepper and onions, chile toreado, served with rice and charro beans and your side of guacamole, sour cream, pico de gallo, cheese and two tortillas.', price: 22.00 },
            { name: 'MI TIERRA BURRITO', description: 'A big flour tortilla filled with spicy adobado (pork) and rice topped with adobado sauce, white cheese, sour cream, avocado slices served with rice and beans.', price: 15.00, image: 'Image00018.jpg' },
            { name: 'VAZQUEZ BURRITO', description: 'A big flour tortilla filled with ground beef, pico de gallo, topped with gravy and cheese served with rice and beans.', price: 14.00 },
            { name: 'CRISPY TACO PLATE (3)', description: '3 crispy tacos with lettuce Tomatoes, cheese, served with rice and beans.', price: 13.00, image: 'Image00005.jpg' },
            { name: 'GORDITA PLATE (2)', description: 'A hand made thick corn tortilla split a pocket purse filled with your choice of: picadillo barbacoa, chicharron, or adobado lettuce and tomatoes, served with rice and beans.', price: 16.00 },
            { name: 'FAJITA OR STEAK GORDITA PLATE', description: 'Served with lettuce and tomatoes, served with rice and beans.', price: 20.00 },
            { name: 'CALDO DE RES', description: 'Beef soup with vegetables, served with rice and side of fresh jalapeños, onions and lime.', priceLg: 16.00, priceSm: 14.00, sizeNote: '(Lg 32oz) (Sm 20oz.)', image: 'Image00002.jpg' },
        ]
    },
    // --- Appetizers & Others ---
    appetizers: {
        categoryTitle: 'Appetizers',
        items: [
            { name: 'CHILE CON QUESO', priceLg: 6.00, priceSm: 4.00, sizeNote: '(Lg. 8 oz.) (Sm. 4 oz.)' },
            { name: 'GUACAMOLE WITH PICO DE GALLO', price: 6.00, sizeNote: '(SMALL)' },
            { name: 'FAJITA NACHOS (8)', description: 'Your choice of beef or chicken topped with beans and cheese, served with sour cream, guacamole jalapeño on the side.', price: 15.00, image: 'Image00010.jpg' },
            { name: 'DELUXE NACHOS (8)', description: 'Topped with beans, ground beef, cheese, tomato, jalapeño, guacamole and sour cream.', price: 13.00 },
            { name: 'BEAN AND CHEESE NACHOS', price: 10.00 },
            { name: 'FAJITA QUESADILLA', description: 'Your choice of beef or chicken served with guacamole salad.', price: 15.00 },
            { name: 'CHEESE QUESADILLA', description: 'Served with guacamole salad.', price: 11.00 },
        ]
    },
    salads: {
        categoryTitle: 'Salads',
        items: [
            { name: 'GARDEN SALAD', description: 'Fresh chopped lettuce, tomatoes and cucumbers, tossed with cheese, croutons and your choice of dressing.', price: 7.50 },
            { name: 'FAJITA SALAD', description: 'Garden salad topped with sour cream guacamole, cheese and croutons.', price: 14.00 },
            { name: 'GUACAMOLE SALAD', description: 'Fresh chopped lettuce, tomatoes and guacamole.', price: 5.00 },
        ]
    },
    soupsAndMore: {
        categoryTitle: 'Soups & More',
        items: [
            { name: 'MENUDO (THE HANGOVER CURE)', description: 'Homemade beef tripe stew with hominy and your side jalapeño, onions, lime and two tortillas.', priceLg: 16.00, priceSm: 13.00, sizeNote: 'LARGE 32oz / SMALL 20 oz', image: 'Image00013.jpg' },
            { name: 'BARBACOA (BY POUND)', description: '(8 Tortillas and side of pico de gallo)', price: 22.00 },
            { name: 'FAJITAS (BY POUND)', description: '(8 Tortillas and side of pico de gallo)', price: 25.00 },
        ]
    },
     sideOrders: {
        categoryTitle: 'Side Orders',
        items: [
             { name: 'RICE (8 oz)', price: 4.00 }, { name: 'REFRIED BEANS (8 oz)', price: 4.00 }, { name: 'CHARRO BEANS (8 oz)', price: 4.00 },
            { name: 'POTATOES', price: 4.00 }, { name: 'SAUSAGE', price: 5.00 }, { name: 'CHORIZO', price: 5.00 },
            { name: 'BACON (4)', price: 5.00 }, { name: 'HAM', price: 5.00 }, { name: 'SLICED AVOCADO (1)', price: 4.00 },
            { name: 'CHEESE (4oz.)', price: 2.00 }, { name: 'QUESO FRESCO (4 oz)', price: 2.50 }, { name: 'SOUR CREAM (2 oz)', price: 1.00 },
            { name: 'PANCAKE', price: 2.00 }, { name: 'EGG', price: 2.00 }, { name: 'CHIPS (Medium bag)', price: 2.00 },
            { name: 'JALAPEÑOS (2 oz)', price: 1.00 }, { name: 'JALAPEÑOS "TOREADO"', price: 0.75 }, { name: 'SERRANO', price: 0.50 },
            { name: 'ONIONS (2 oz)', price: 1.00 }, { name: 'TOMATOES (2 oz)', price: 1.00 }, { name: 'LIME (1)', price: 1.00 },
            { name: 'PICO DE GALLO (2 oz)', price: 1.00 }, { name: 'PICO DE GALLO (4 oz)', price: 2.00 },
            { name: 'SALSA VERDE (8 oz)', price: 2.50 }, { name: 'SALSA RANCHERA (8 oz)', price: 2.50 },
            { name: 'HOT SAUCE (8 Oz To Go)', price: 2.50 }, { name: 'HOT SAUCE (16 Oz To Go)', price: 4.50 }, { name: 'HOT SAUCE (32 oz To Go)', price: 8.50 },
            { name: 'CHIPS-SALSA', price: 4.00 }, { name: 'CRISPY TACO', price: 5.00 },
            { name: 'ENCHILADA', description: '(Cheese, chicken and ground Beef)', price: 3.50 },
            { name: 'FAJITA ENCHILADA', price: 6.00 }, { name: 'CHILE CON QUESO FAJITA ENCHILADA', price: 6.25 },
            { name: 'MINI MENUDO (8 OZ)', price: 5.00 },
        ]
    },
    // --- New Items (Page 7) ---
    newItems: {
        categoryTitle: 'New Items in the Menu',
        items: [
            { name: 'QUESABIRRIA', price: 14.00 },
            { name: 'FLAUTAS', price: 13.00 },
            { name: 'TOSTADAS', price: 13.00 },
            { name: 'TORTAS', price: 11.00 },
            { name: 'STREET TACOS', price: 13.00, image: 'Image00007.jpg' },
        ]
    },
    // --- Drinks ---
    drinks: {
        categoryTitle: 'Drinks',
        items: [
            { name: 'MEXICAN COCA-COLA', price: 4.00 }, { name: 'TOPO CHICO', price: 4.00 }, { name: 'JARRITOS', price: 4.00 },
            { name: 'BOTTLE SODAS (16.9 oz)', price: 3.50 }, { name: 'CAN SODA (12 oz)', price: 2.00 },
            { name: 'BOTTLE WATER (16.9 oz)', price: 2.00 }, { name: 'ICE TEA FOR HERE', price: 3.00 },
            { name: 'ORANGE JUICE', price: 4.00 }, { name: 'APPLE JUICE', price: 4.00 },
            { name: 'COFFEE', price: 3.00 }, { name: 'CHOCO MILK', price: 4.00 },
        ]
    },
    aguasFrescas: {
        categoryTitle: 'Aguas Frescas',
        items: [
            { name: 'LARGE (32 oz)', price: 5.00 },
            { name: 'SMALL (16 oz)', price: 3.50 },
        ]
    },
     beer: {
        categoryTitle: 'Beer',
        items: [
            { name: 'DOMESTIC BEER', price: 4.75 },
            { name: 'IMPORTED BEER', price: 5.25 },
            { name: 'MICHELADAS', price: 7.00 },
            { name: 'MIMOSA', price: 5.00 },
        ]
    },
    wines: {
        categoryTitle: 'Wines (Mini Wine Bottles)',
        items: [
            { name: 'PINOT GRIGIO (WHITE)', price: 7.00 },
            { name: 'CABERNET SAUVIGNON (RED)', price: 7.00 },
            { name: 'REAL SANGRIA', price: 7.00 },
        ]
    },
    // --- Child's Menu ---
    childMenu: {
        categoryTitle: 'Child\'s Menu',
        note: '$6.00 (10 years old under, older than 10 add $2)',
        items: [
            { name: 'GAEL\'S PLATE', description: '1 egg, potatoes, and beans.' },
            { name: 'MINI CHEESE QUESADILLA', description: 'rice and beans.' },
            { name: 'CRISPY TACO', description: 'rice and beans.' },
            { name: 'ENCHILADA PLATE', description: '1 enchilada, rice and beans.' },
            { name: 'MIA\'S PLATE', description: '2 bean cheese tacos Served with rice.' },
            { name: 'KJ PLATE', description: 'One pancake one egg, with a choice of ham, sausage or bacon.' },
        ]
    },
     // --- Notes ---
    notes: {
      rawFoodWarning: "Consuming raw or under cooked meats, poultry or egg's may increase your risk of foodborne illness especially if you have certain medical conditions.",
      bonesWarning: "Barbacoa and chicken may contain BONES."
    }
  }
};
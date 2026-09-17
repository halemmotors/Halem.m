// Only Mustang has full spec/gallery content in the original site. Every
// other model tile (Challenger, Durango, Q50, QX60, SF90, Purosangue,
// Expedition, F-150, Taurus, Bronco) links here by id too, and ModelPage
// shows a "full details coming soon" panel for any id not listed below,
// instead of the old bug of silently pointing every model at Mustang's page.
export const models = {
  mustang: {
    id: 'mustang',
    title: '2023 Ford Mustang®',
    tagline: "Here's Your Daily Dose of Dopamine",
    intro:
      'From the roar of the engine to its unmistakable style, a 2023 Mustang® coupe or convertible will raise your heart rate and stir your soul. Drawing on deep performance roots, every model features precise handling, high-powered engines and iconic design.',
    gallery: [
      { image: 'halemphotos/mustang1.png', alt: 'Mustang1' },
      { image: 'halemphotos/mustang2.png', alt: 'Mustang2' },
      { image: 'halemphotos/mustang3.png', alt: 'Mustang3' },
      { image: 'halemphotos/mustang4.png', alt: 'Mustang4' },
    ],
    colorPreview: {
      colors: [
        { id: 1, image: 'halemphotos/cmustang1.png', swatch: '#750b19' },
        { id: 2, image: 'halemphotos/cmustang2.png', swatch: '#f9f7f7', textDark: true },
        { id: 3, image: 'halemphotos/cmustang3.png', swatch: '#08111a' },
        { id: 4, image: 'halemphotos/cmustang4.png', swatch: '#02b4ea', textDark: true },
      ],
    },
    specs: {
      caption: 'Classes & Specifications',
      trims: ['EcoBoost Fastback A/T', 'Fastback GT Premium', 'Mach 1 Premium Fastback'],
      rows: [
        ['Classes', 'EcoBoost Fastback A/T', 'Fastback GT Premium', 'Mach 1 Premium Fastback'],
        ['Engine Capacity (liters)', '2.3', '5.0', '5.0'],
        ['Cylinders', '4', '8', '8'],
        ['Drive Type', 'Rear Wheel Drive', 'Rear Wheel Drive', 'Rear Wheel Drive'],
        ['Fuel Tank Capacity (liters)', '58', '60', '60'],
        ['Fuel Economy (L/100 Km)', '10.2', '12.3', '11.7'],
        ['Fuel Type', 'Petrol', 'Petrol', 'Petrol'],
        ['Horsepower (bhp)', '310', '460', '460'],
        ['Torque (Nm)', '434', '570', '529'],
        ['Transmission', 'Automatic', 'Automatic', 'Automatic'],
        ['Top Speed (Km/h)', '240', '240', '249'],
        ['Seating Capacity', '4 Seater', '4 Seater', '4 Seater'],
        ['Acceleration 0-100 Km/h (sec)', '5.4', '4.7', '4.4'],
      ],
    },
  },
};

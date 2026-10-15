const skins = [
  ['Awakening', 'Frosted glass', '01-awakening'], ['Ripples', 'Liquid caustics', '02-ripples'],
  ['Biolume', 'Neon flora', '03-biolume'], ['Pulse', 'Audio waves', '04-pulse'],
  ['Cosmic', 'Nebula starfield', '05-cosmic'], ['Voltage', 'Electric circuits', '06-voltage'],
  ['Origami', 'Folded paper', '07-origami'], ['Cyber-Hive', 'Sci-fi honeycomb', '08-cyber-hive'],
  ['Magma', 'Tectonic fissures', '09-magma'], ['Blackout', 'Neon ultraviolet', '10-blackout'],
  ['Echo', 'Radar hologram', '11-echo'], ['Facet', 'Refractive gems', '12-facet'],
  ['Retro Arcade', 'Pixel art', '13-retro-arcade'], ['Toy Brick', 'Plastic studs', '14-toy-brick'],
  ['Stained Glass', 'Kaleidoscope mosaic', '15-stained-glass'],
];
const strip = document.getElementById('skin-strip');
for (const [name, material, filename] of skins) {
  const figure = document.createElement('figure');
  const image = document.createElement('img');
  image.src = `assets/skins/${filename}.webp?v=4223abdd2bf4`;
  image.alt = `Actual ${name} crystal-skin gameplay — ${material}.`;
  image.width = 750;
  image.height = 1334;
  image.loading = 'lazy';
  const caption = document.createElement('figcaption');
  caption.textContent = name;
  const detail = document.createElement('small');
  detail.textContent = material;
  caption.append(detail);
  figure.append(image, caption);
  strip.append(figure);
}

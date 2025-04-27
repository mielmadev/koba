import { bandasLogo } from '@imagenes/imagenes.js';
import resumenesBandas from './resumenesBandas2025.js';
import { bandasSpotifyUrls } from './bandasUrls2025.js';

const bandasDatos2025 = [
  { // Asgarth
    nombre: 'Asgarth',
    imagen: bandasLogo.asgarthLogo,
    spotify: bandasSpotifyUrls.asgarth,
    estilo: 'Hard Rock, Power Metal',
    origen: { pais: 'España', provincia: 'Gipuzkoa', ciudad: 'Donosti' },
    año: 1998,
    resumen: resumenesBandas.Asgarth,
    integrantes: {
      cantante: 'Asier Enbil',
      guitarra: ['Ander Cañas', 'Unai Zabala'],
      bajo: 'Mikel Yarza',
      bateria: 'Etxahun Urkizu',
      teclado: 'Asier Enbil', // Opcional según la banda
    },
    albums: [
      { nombre: 'Asgarth Zuzenean', año: 2024 },
      { nombre: 'Zeldatik', año: 2021 },
      { nombre: 'Garrasia...', año: 2006 },
      { nombre: 'III', año: 2002 },
      { nombre: 'Etorkizunaren sustraia', año: 2000 },
      { nombre: 'Jainkoen egoitza', año: 1999 },
    ],
  },
  { // Before The Dawn
    nombre: 'Before The Dawn',
    imagen: bandasLogo.beforeTheDawnLogo,
    spotify: bandasSpotifyUrls.beforeTheDawn,
    estilo: 'Melodic Death Metal',
    origen: { pais: 'Finlandia', provincia: 'Päijänne Tavastia', ciudad: 'Nastola' },
    año: 1999,
    resumen: resumenesBandas.BeforeTheDawn,
    integrantes: {
      cantante: 'Paavo Laapotti',
      guitarra: ['Juho Räihä'],
      bajo: 'Pyry Hanski',
      bateria: 'Tuomas Saukonen',
      teclado: 'Saku Moilanen', // Opcional según la banda
    },
    albums: [
      { nombre: 'Stormbringers', año: 2023 },
      { nombre: 'Rise of the Phoenix', año: 2012 },
      { nombre: 'Deathstar Rising', año: 2011 },
      { nombre: 'Soundscape of Silence', año: 2008 },
      { nombre: 'Deadlight', año: 2007 },
      { nombre: 'The Ghost', año: 2006 },
      { nombre: '4:17 am', año: 2004 },
      { nombre: 'My Darkness', año: 2003 },
    ],
  },
  { // Eclipse
    nombre: 'Eclipse',
    imagen: bandasLogo.eclipseLogo,
    spotify: bandasSpotifyUrls.eclipse,
    estilo: '',
    origen: { pais: '', provincia: '', ciudad: '' },
    año: null,
    resumen: '',
    integrantes: {
      cantante: '',
      guitarra: '',
      bajo: '',
      bateria: '',
      teclado: '', // Opcional según la banda
    },
    albums: [
      { nombre: '', año: null },
      { nombre: '', año: null },
    ],
  },
  { // Ehun Kilo
    nombre: 'Ehun Kilo',
    imagen: bandasLogo.ehunKiloLogo,
    spotify: bandasSpotifyUrls.ehunKilo,
    estilo: '',
    origen: { pais: '', provincia: '', ciudad: '' },
    año: null,
    resumen: '',
    integrantes: {
      cantante: '',
      guitarra: '',
      bajo: '',
      bateria: '',
      teclado: '', // Opcional según la banda
    },
    albums: [
      { nombre: '', año: null },
      { nombre: '', año: null },
    ],
  },
  { // Moonshinerds
    nombre: 'Moonshinerds',
    imagen: bandasLogo.moonshinerdsLogo,
    spotify: bandasSpotifyUrls.moonshinerds,
    estilo: '',
    origen: { pais: '', provincia: '', ciudad: '' },
    año: null,
    resumen: '',
    integrantes: {
      cantante: '',
      guitarra: '',
      bajo: '',
      bateria: '',
      teclado: '', // Opcional según la banda
    },
    albums: [
      { nombre: '', año: null },
      { nombre: '', año: null },
    ],
  },
  { // Suicidal Angels
    nombre: 'Suicidal Angels',
    imagen: bandasLogo.suicidalsAngelsLogo,
    spotify: bandasSpotifyUrls.suicidalAngels,
    estilo: '',
    origen: { pais: '', provincia: '', ciudad: '' },
    año: null,
    resumen: '',
    integrantes: {
      cantante: '',
      guitarra: '',
      bajo: '',
      bateria: '',
      teclado: '', // Opcional según la banda
    },
    albums: [
      { nombre: '', año: null },
      { nombre: '', año: null },
    ],
  },
  { // The Electric Alley
    nombre: 'The Electric Alley',
    imagen: bandasLogo.theElectricAlleyLogo,
    spotify: bandasSpotifyUrls.theElectricAlley,
    estilo: '',
    origen: { pais: '', provincia: '', ciudad: '' },
    año: null,
    resumen: '',
    integrantes: {
      cantante: '',
      guitarra: '',
      bajo: '',
      bateria: '',
      teclado: '', // Opcional según la banda
    },
    albums: [
      { nombre: '', año: null },
      { nombre: '', año: null },
    ],
  },
  { // Wolfheart Angels
    nombre: 'Wolfheart Angels',
    imagen: bandasLogo.wolfhearthLogo,
    spotify: bandasSpotifyUrls.wolfheartAngels,
    estilo: '',
    origen: { pais: '', provincia: '', ciudad: '' },
    año: null,
    resumen: '',
    integrantes: {
      cantante: '',
      guitarra: '',
      bajo: '',
      bateria: '',
      teclado: '', // Opcional según la banda
    },
    albums: [
      { nombre: '', año: null },
      { nombre: '', año: null },
    ],
  },
];

export default bandasDatos2025;

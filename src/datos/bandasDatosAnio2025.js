import { bandasLogo } from "@imagenes/imagenes.js"
import resumenesBandas from "./resumenesBandas2025.js"
import { bandasSpotifyUrls } from "./bandasSpotify2025.js"

const bandasDatos2025 = [
  {
    // Asgarth
    nombre: "Asgarth",
    imagen: bandasLogo.asgarthLogo,
    spotify: bandasSpotifyUrls.asgarth,
    estilo: "Melodic Power Metal",
    origen: { pais: "España", provincia: "Gipuzkoa", ciudad: "Donosti" },
    anio: 1998,
    resumen: resumenesBandas.Asgarth,
    integrantes: {
      cantante: "Asier Enbil",
      guitarra: ["Ander Cañas", "Unai Zabala"],
      bajo: "Mikel Yarza",
      bateria: "Etxahun Urkizu"
    },
    albums: [
      { nombre: "Asgarth Zuzenean", anio: 2024 },
      { nombre: "Zeldatik", anio: 2021 },
      { nombre: "Garrasia...", anio: 2006 },
      { nombre: "III", anio: 2002 },
      { nombre: "Etorkizunaren sustraia", anio: 2000 },
      { nombre: "Jainkoen egoitza", anio: 1999 }
    ]
  },
  {
    // Before The Dawn
    nombre: "Before The Dawn",
    imagen: bandasLogo.beforeTheDawnLogo,
    spotify: bandasSpotifyUrls.beforeTheDawn,
    estilo: "Melodic Death Metal",
    origen: {
      pais: "Finlandia",
      provincia: "Päijänne Tavastia",
      ciudad: "Nastola"
    },
    anio: 1999,
    resumen: resumenesBandas.BeforeTheDawn,
    integrantes: {
      cantante: "Paavo Laapotti",
      guitarra: ["Juho Räihä"],
      bajo: "Pyry Hanski",
      bateria: "Tuomas Saukonen"
    },
    albums: [
      { nombre: "Stormbringers", anio: 2023 },
      { nombre: "Rise of the Phoenix", anio: 2012 },
      { nombre: "Deathstar Rising", anio: 2011 },
      { nombre: "Soundscape of Silence", anio: 2008 },
      { nombre: "Deadlight", anio: 2007 },
      { nombre: "The Ghost", anio: 2006 },
      { nombre: "4:17 am", anio: 2004 },
      { nombre: "My Darkness", anio: 2003 }
    ]
  },
  {
    // Eclipse
    nombre: "Eclipse",
    imagen: bandasLogo.eclipseLogo,
    spotify: bandasSpotifyUrls.eclipse,
    estilo: "Melodic Hard Rock",
    origen: { pais: "Suecia", provincia: "Estocolmo", ciudad: "Estocolmo" },
    anio: 1999,
    resumen: resumenesBandas.Eclipse,
    integrantes: {
      cantante: "Erik Mårtensson",
      guitarra: ["Magnus Henriksson"],
      bajo: "Victor Crusner",
      bateria: "Philip Crusner"
    },
    albums: [
      { nombre: "Megalomanium II", anio: 2024 },
      { nombre: "Megalomanium", anio: 2023 },
      { nombre: "Wired", anio: 2021 },
      { nombre: "Viva La Victoria", anio: 2021 },
      { nombre: "Paradigm", anio: 2019 },
      { nombre: "Monumentum", anio: 2017 },
      { nombre: "Armageddonize", anio: 2015 },
      { nombre: "Bleed & Scream", anio: 2012 },
      { nombre: "Are You Ready to Rock", anio: 2008 },
      { nombre: "Second to None", anio: 2004 },
      { nombre: "The Truth and a Little More", anio: 2001 }
    ]
  },
  {
    // Ehun Kilo
    nombre: "Ehun Kilo",
    imagen: bandasLogo.ehunKiloLogo,
    spotify: bandasSpotifyUrls.ehunKilo,
    estilo: "Melodic Heavy Metal",
    origen: { pais: "España", provincia: "Gipuzkoa", ciudad: "Elgoibar" },
    anio: 1991,
    resumen: resumenesBandas.EhunKilo || "",
    integrantes: {
      cantante: "Jon Zabala",
      guitarra: ["Jon Iturrino", "Patxi Zabaleta"],
      bajo: "Kristian Etxabe",
      bateria: "Iñigo “Fiñi” Barrenetxea"
    },
    albums: [
      { nombre: "Esaiek... Esaien", anio: 1995 },
      { nombre: "Euli artean", anio: 1994 }
    ]
  },
  {
    // Moonshinerds
    nombre: "Moonshinerds",
    imagen: bandasLogo.moonshinerdsLogo,
    spotify: bandasSpotifyUrls.moonshinerds,
    estilo: "Melodic Hard Rock",
    origen: { pais: "España", provincia: "Bizkaia", ciudad: "Durango" },
    anio: 2009,
    resumen: resumenesBandas.Moonshinerds || "",
    integrantes: {
      cantante: "Joseba Irigoras",
      guitarra: ["Joseba Irigoras", "Jon Sánchez"],
      bajo: "Liher Granados",
      bateria: "Antonio Cantero"
    },
    albums: [{ nombre: "Moonshinerds", anio: 2019 }]
  },
  {
    // Suicidal Angels
    nombre: "Suicidal Angels",
    imagen: bandasLogo.suicidalsAngelsLogo,
    spotify: bandasSpotifyUrls.suicidalAngels,
    estilo: "Thrash Metal",
    origen: { pais: "Grecia", provincia: "Atica", ciudad: "Atenas" },
    anio: 2001,
    resumen: resumenesBandas.SuicidalAngels || "",
    integrantes: {
      cantante: "Nick Melissourgos",
      guitarra: ["Nick Melissourgos"],
      bajo: "Angel Lelikakis",
      bateria: "Orfeas Tzortzopoulos"
    },
    albums: [
      { nombre: "Profane Prayer", anio: 2024 },
      { nombre: "Years of Aggression", anio: 2019 },
      { nombre: "Division of Blood", anio: 2016 },
      { nombre: "Divide and Conquer", anio: 2014 },
      { nombre: "Bloodbath", anio: 2012 },
      { nombre: "Dead Again", anio: 2010 },
      { nombre: "Sanctify the Darkness", anio: 2009 },
      { nombre: "Eternal Domination", anio: 2007 }
    ]
  },
  {
    // The Electric Alley
    nombre: "The Electric Alley",
    imagen: bandasLogo.theElectricAlleyLogo,
    spotify: bandasSpotifyUrls.theElectricAlley,
    estilo: "Hard Rock",
    origen: { pais: "España", provincia: "Cadiz", ciudad: "Cadiz" },
    anio: 2012,
    resumen: resumenesBandas.TheElectricAlley || "",
    integrantes: {
      cantante: "Jaime Moreno",
      guitarra: ["Jaime Moreno (rítmica)", "Nando Perfumo (principal)"],
      bajo: "Sergio Reyes Gamaza",
      bateria: "Rafa G. Benítez"
    },
    albums: [
      { nombre: "Apache", anio: 2022 },
      { nombre: "Turning Wheels", anio: 2018 },
      { nombre: "Get Electrified!", anio: 2015 },
      { nombre: "Backward States of Society", anio: 2013 }
    ]
  },
  {
    // Wolfheart
    nombre: "Wolfheart ",
    imagen: bandasLogo.wolfhearthLogo,
    spotify: bandasSpotifyUrls.wolfheart,
    estilo: "Melodic Death Metal",
    origen: { pais: "Finlandia", provincia: "Päijät-Häme", ciudad: "Lahti" },
    anio: 2013,
    resumen: resumenesBandas.Wolfheart || "",
    integrantes: {
      cantante: "Tuomas Saukkonen",
      guitarra: ["Tuomas Saukkonen", "Vagelis Karzis"],
      bajo: "Lauri Silvonen",
      bateria: "Joonas Kauppinen"
    },
    albums: [
      { nombre: "Draconian Darkness", anio: 2024 },
      { nombre: "King of the North", anio: 2022 },
      { nombre: "Skull Soldiers (EP)", anio: 2021 },
      { nombre: "Wolves of Karelia", anio: 2020 },
      { nombre: "Constellation of the Black Light", anio: 2018 },
      { nombre: "Tyhjyys", anio: 2017 },
      { nombre: "Shadow World", anio: 2015 },
      { nombre: "Winterborn", anio: 2013 }
    ]
  }
]

export default bandasDatos2025

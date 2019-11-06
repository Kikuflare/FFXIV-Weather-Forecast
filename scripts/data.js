/**
 * @author Kiku
 * 
 * Weather data for each area
 * 
 * The order in which each weather is listed for an area is important.
 * 
 * The chance value in each object for an area should sum up to 100.
 */

const weatherData = {
  "limsaLominsa": [
    { "name": "clouds", "chance": 20 },
    { "name": "clearSkies", "chance": 30 },
    { "name": "fairSkies", "chance": 30 },
    { "name": "fog", "chance": 10 },
    { "name": "rain", "chance": 10 }
  ],
  "middleLaNoscea": [
    { "name": "clouds", "chance": 20 },
    { "name": "clearSkies", "chance": 30 },
    { "name": "fairSkies", "chance": 20 },
    { "name": "wind", "chance": 10 },
    { "name": "fog", "chance": 10 },
    { "name": "rain", "chance": 10 }
  ],
  "lowerLaNoscea": [
    { "name": "clouds", "chance": 20 },
    { "name": "clearSkies", "chance": 30 },
    { "name": "fairSkies", "chance": 20 },
    { "name": "wind", "chance": 10 },
    { "name": "fog", "chance": 10 },
    { "name": "rain", "chance": 10 }
  ],
  "easternLaNoscea": [
    { "name": "fog", "chance": 5 },
    { "name": "clearSkies", "chance": 45 },
    { "name": "fairSkies", "chance": 30 },
    { "name": "clouds", "chance": 10 },
    { "name": "rain", "chance": 5 },
    { "name": "showers", "chance": 5 }
  ],
  "westernLaNoscea": [
    { "name": "fog", "chance": 10 },
    { "name": "clearSkies", "chance": 30 },
    { "name": "fairSkies", "chance": 20 },
    { "name": "clouds", "chance": 20 },
    { "name": "wind", "chance": 10 },
    { "name": "gales", "chance": 10 }
  ],
  "upperLaNoscea": [
    { "name": "clearSkies", "chance": 30 },
    { "name": "fairSkies", "chance": 20 },
    { "name": "clouds", "chance": 20 },
    { "name": "fog", "chance": 10 },
    { "name": "thunder", "chance": 10 },
    { "name": "thunderstorms", "chance": 10 }
  ],
  "outerLaNoscea": [
    { "name": "clearSkies", "chance": 30 },
    { "name": "fairSkies", "chance": 20 },
    { "name": "clouds", "chance": 20 },
    { "name": "fog", "chance": 15 },
    { "name": "rain", "chance": 15 }
  ],
  "wolvesDenPier": [
    { "name": "clouds", "chance": 20 },
    { "name": "clearSkies", "chance": 30 },
    { "name": "fairSkies", "chance": 30 },
    { "name": "fog", "chance": 10 },
    { "name": "thunderstorms", "chance": 10 }
  ],
  "mist": [
    { "name": "clouds", "chance": 20 },
    { "name": "clearSkies", "chance": 30 },
    { "name": "fairSkies", "chance": 30 },
    { "name": "fog", "chance": 10 },
    { "name": "rain", "chance": 10 }
  ],
  "gridania": [
    { "name": "rain", "chance": 20 },
    { "name": "fog", "chance": 10 },
    { "name": "clouds", "chance": 10 },
    { "name": "fairSkies", "chance": 15 },
    { "name": "clearSkies", "chance": 30 },
    { "name": "fairSkies", "chance": 15 }
  ],
  "centralShroud": [
    { "name": "thunder", "chance": 5 },
    { "name": "rain", "chance": 15 },
    { "name": "fog", "chance": 10 },
    { "name": "clouds", "chance": 10 },
    { "name": "fairSkies", "chance": 15 },
    { "name": "clearSkies", "chance": 30 },
    { "name": "fairSkies", "chance": 15 }
  ],
  "eastShroud": [
    { "name": "thunder", "chance": 5 },
    { "name": "rain", "chance": 15 },
    { "name": "fog", "chance": 10 },
    { "name": "clouds", "chance": 10 },
    { "name": "fairSkies", "chance": 15 },
    { "name": "clearSkies", "chance": 30 },
    { "name": "fairSkies", "chance": 15 }
  ],
  "southShroud": [
    { "name": "fog", "chance": 5 },
    { "name": "thunderstorms", "chance": 5 },
    { "name": "thunder", "chance": 15 },
    { "name": "fog", "chance": 5 },
    { "name": "clouds", "chance": 10 },
    { "name": "fairSkies", "chance": 30 },
    { "name": "clearSkies", "chance": 30 }
  ],
  "northShroud": [
    { "name": "fog", "chance": 5 },
    { "name": "showers", "chance": 5 },
    { "name": "rain", "chance": 15 },
    { "name": "fog", "chance": 5 },
    { "name": "clouds", "chance": 10 },
    { "name": "fairSkies", "chance": 30 },
    { "name": "clearSkies", "chance": 30 }
  ],
  "theLavenderBeds": [
    { "name": "clouds", "chance": 5 },
    { "name": "rain", "chance": 15 },
    { "name": "fog", "chance": 10 },
    { "name": "clouds", "chance": 10 },
    { "name": "fairSkies", "chance": 15 },
    { "name": "clearSkies", "chance": 30 },
    { "name": "fairSkies", "chance": 15 }
  ],
  "uldah": [
    { "name": "clearSkies", "chance": 40 },
    { "name": "fairSkies", "chance": 20 },
    { "name": "clouds", "chance": 25 },
    { "name": "fog", "chance": 10 },
    { "name": "rain", "chance": 5 }
  ],
  "westernThanalan": [
    { "name": "clearSkies", "chance": 40 },
    { "name": "fairSkies", "chance": 20 },
    { "name": "clouds", "chance": 25 },
    { "name": "fog", "chance": 10 },
    { "name": "rain", "chance": 5 }
  ],
  "centralThanalan": [
    { "name": "dustStorms", "chance": 15 },
    { "name": "clearSkies", "chance": 40 },
    { "name": "fairSkies", "chance": 20 },
    { "name": "clouds", "chance": 10 },
    { "name": "fog", "chance": 10 },
    { "name": "rain", "chance": 5 }
  ],
  "easternThanalan":[
    { "name": "clearSkies", "chance": 40 },
    { "name": "fairSkies", "chance": 20 },
    { "name": "clouds", "chance": 10 },
    { "name": "fog", "chance": 10 },
    { "name": "rain", "chance": 5 },
    { "name": "showers", "chance": 15 }
  ],
  "southernThanalan": [
    { "name": "heatWaves", "chance": 20 },
    { "name": "clearSkies", "chance": 40 },
    { "name": "fairSkies", "chance": 20 },
    { "name": "clouds", "chance": 10 },
    { "name": "fog", "chance": 10 }
  ],
  "northernThanalan": [
    { "name": "clearSkies", "chance": 5 },
    { "name": "fairSkies", "chance": 15 },
    { "name": "clouds", "chance": 30 },
    { "name": "fog", "chance": 50 }
  ],
  "theGoblet": [
    { "name": "clearSkies", "chance": 40 },
    { "name": "fairSkies", "chance": 20 },
    { "name": "clouds", "chance": 25 },
    { "name": "fog", "chance": 10 },
    { "name": "rain", "chance": 5 }
  ],
  "morDhona": [
    { "name": "clouds", "chance": 15 },
    { "name": "fog", "chance": 15 },
    { "name": "gloom", "chance": 30 },
    { "name": "clearSkies", "chance": 15 },
    { "name": "fairSkies", "chance": 25 }
  ],
  "ishgard": [
    { "name": "snow", "chance": 60 },
    { "name": "fairSkies", "chance": 10 },
    { "name": "clearSkies", "chance": 5 },
    { "name": "clouds", "chance": 15 },
    { "name": "fog", "chance": 10 }
  ],
  "coerthasCentralHighlands": [
    { "name": "blizzard", "chance": 20 },
    { "name": "snow", "chance": 40 },
    { "name": "fairSkies", "chance": 10 },
    { "name": "clearSkies", "chance": 5 },
    { "name": "clouds", "chance": 15 },
    { "name": "fog", "chance": 10 }
  ],
  "coerthasWesternHighlands": [
    { "name": "blizzard", "chance": 20 },
    { "name": "snow", "chance": 40 },
    { "name": "fairSkies", "chance": 10 },
    { "name": "clearSkies", "chance": 5 },
    { "name": "clouds", "chance": 15 },
    { "name": "fog", "chance": 10 }
  ],
  "theSeaOfclouds": [
    { "name": "clearSkies", "chance": 30 },
    { "name": "fairSkies", "chance": 30 },
    { "name": "clouds", "chance": 10 },
    { "name": "fog", "chance": 10 },
    { "name": "wind", "chance": 10 },
    { "name": "umbralWind", "chance": 10 }
  ],
  "azysLla": [
    { "name": "fairSkies", "chance": 35 },
    { "name": "clouds", "chance": 35 },
    { "name": "thunder", "chance": 30 }
  ],
  "theDravanianForelands": [
    { "name": "clouds", "chance": 10 },
    { "name": "fog", "chance": 10 },
    { "name": "thunder", "chance": 10 },
    { "name": "dustStorms", "chance": 10 },
    { "name": "clearSkies", "chance": 30 },
    { "name": "fairSkies", "chance": 30 }
  ],
  "theDravanianHinterlands": [
    { "name": "clouds", "chance": 10 },
    { "name": "fog", "chance": 10 },
    { "name": "rain", "chance": 10 },
    { "name": "showers", "chance": 10 },
    { "name": "clearSkies", "chance": 30 },
    { "name": "fairSkies", "chance": 30 }
  ],
  "theChurningMists": [
    { "name": "clouds", "chance": 10 },
    { "name": "gales", "chance": 10 },
    { "name": "umbralStatic", "chance": 20 },
    { "name": "clearSkies", "chance": 30 },
    { "name": "fairSkies", "chance": 30 }
  ],
  "idyllshire": [
    { "name": "clouds", "chance": 10 },
    { "name": "fog", "chance": 10 },
    { "name": "rain", "chance": 10 },
    { "name": "showers", "chance": 10 },
    { "name": "clearSkies", "chance": 30 },
    { "name": "fairSkies", "chance": 30 }
  ],
  "rhalgrsReach": [
    { "name": "clearSkies", "chance": 15 },
    { "name": "fairSkies", "chance": 45 },
    { "name": "clouds", "chance": 20 },
    { "name": "fog", "chance": 10 },
    { "name": "thunder", "chance": 10 }
  ],
  "theFringes": [
    { "name": "clearSkies", "chance": 15 },
    { "name": "fairSkies", "chance": 45 },
    { "name": "clouds", "chance": 20 },
    { "name": "fog", "chance": 10 },
    { "name": "thunder", "chance": 10 }
  ],
  "thePeaks": [
    { "name": "clearSkies", "chance": 10 },
    { "name": "fairSkies", "chance": 50 },
    { "name": "clouds", "chance": 15 },
    { "name": "fog", "chance": 10 },
    { "name": "wind", "chance": 10 },
    { "name": "dustStorms", "chance": 5 }
  ],
  "theLochs": [
    { "name": "clearSkies", "chance": 20 },
    { "name": "fairSkies", "chance": 40 },
    { "name": "clouds", "chance": 20 },
    { "name": "fog", "chance": 10 },
    { "name": "thunderstorms", "chance": 10 }
  ],
  "kugane": [
    { "name": "rain", "chance": 10 },
    { "name": "fog", "chance": 10 },
    { "name": "clouds", "chance": 20 },
    { "name": "fairSkies", "chance": 40 },
    { "name": "clearSkies", "chance": 20 }
  ],
  "shirogane": [
    { "name": "rain", "chance": 10 },
    { "name": "fog", "chance": 10 },
    { "name": "clouds", "chance": 20 },
    { "name": "fairSkies", "chance": 40 },
    { "name": "clearSkies", "chance": 20 }
  ],
  "theRubySea": [
    { "name": "thunder", "chance": 10 },
    { "name": "wind", "chance": 10 },
    { "name": "clouds", "chance": 15 },
    { "name": "fairSkies", "chance": 40 },
    { "name": "clearSkies", "chance": 25 }
  ],
  "yanxia": [
    { "name": "showers", "chance": 5 },
    { "name": "rain", "chance": 10 },
    { "name": "fog", "chance": 10 },
    { "name": "clouds", "chance": 15 },
    { "name": "fairSkies", "chance": 40 },
    { "name": "clearSkies", "chance": 20 }
  ],
  "theAzimSteppe": [
    { "name": "gales", "chance": 5 },
    { "name": "wind", "chance": 5 },
    { "name": "rain", "chance": 7 },
    { "name": "fog", "chance": 8 },
    { "name": "clouds", "chance": 10 },
    { "name": "fairSkies", "chance": 40 },
    { "name": "clearSkies", "chance": 25 }
  ],
  "eurekaAnemos": [
    { "name": "fairSkies", "chance": 30 },
    { "name": "gales", "chance": 30 },
    { "name": "showers", "chance": 30 },
    { "name": "snow", "chance": 10 }
  ],
  "eurekaPagos": [
    { "name": "clearSkies", "chance": 10 },
    { "name": "fog", "chance": 18 },
    { "name": "heatWaves", "chance": 18 },
    { "name": "snow", "chance": 18 },
    { "name": "thunder", "chance": 18 },
    { "name": "blizzard", "chance": 18 }
  ],
  "eurekaPyros": [
    { "name": "fairSkies", "chance": 10 },
    { "name": "heatWaves", "chance": 18 },
    { "name": "thunder", "chance": 18 },
    { "name": "blizzard", "chance": 18 },
    { "name": "umbralWind", "chance": 18 },
    { "name": "snow", "chance": 18 }
  ],
  "eurekaHydatos": [
    { "name": "fairSkies", "chance": 12 },
    { "name": "showers", "chance": 22 },
    { "name": "gloom", "chance": 22 },
    { "name": "thunderstorms", "chance": 22 },
    { "name": "snow", "chance": 22 }
  ],
  "theCrystarium": [
    { "name": "clearSkies", "chance": 20 },
    { "name": "fairSkies", "chance": 40 },
    { "name": "clouds", "chance": 15 },
    { "name": "fog", "chance": 10 },
    { "name": "rain", "chance": 10 },
    { "name": "thunderstorms", "chance": 5 }
  ],
  "eulmore": [
    { "name": "gales", "chance": 10 },
    { "name": "rain", "chance": 10 },
    { "name": "fog", "chance": 10 },
    { "name": "clouds", "chance": 15 },
    { "name": "fairSkies", "chance": 40 },
    { "name": "clearSkies", "chance": 15 }
  ],
  "lakeland": [
    { "name": "clearSkies", "chance": 20 },
    { "name": "fairSkies", "chance": 40 },
    { "name": "clouds", "chance": 15 },
    { "name": "fog", "chance": 10 },
    { "name": "rain", "chance": 10 },
    { "name": "thunderstorms", "chance": 5 }
  ],
  "kholusia": [
    { "name": "gales", "chance": 10 },
    { "name": "rain", "chance": 10 },
    { "name": "fog", "chance": 10 },
    { "name": "clouds", "chance": 15 },
    { "name": "fairSkies", "chance": 40 },
    { "name": "clearSkies", "chance": 15 }
  ],
  "amhAraeng": [
    { "name": "fairSkies", "chance": 45 },
    { "name": "clouds", "chance": 15 },
    { "name": "dustStorms", "chance": 10 },
    { "name": "heatWaves", "chance": 10 },
    { "name": "clearSkies", "chance": 20 }
  ],
  "ilMheg": [
    { "name": "rain", "chance": 10 },
    { "name": "fog", "chance": 10 },
    { "name": "clouds", "chance": 15 },
    { "name": "thunderstorms", "chance": 10 },
    { "name": "clearSkies", "chance": 15 },
    { "name": "fairSkies", "chance": 40 }
  ],
  "theRaktikaGreatwood": [
    { "name": "fog", "chance": 10 },
    { "name": "rain", "chance": 10 },
    { "name": "umbralWind", "chance": 10 },
    { "name": "clearSkies", "chance": 15 },
    { "name": "fairSkies", "chance": 40 },
    { "name": "clouds", "chance": 15 }
  ],
  "theTempest": [
    { "name": "clouds", "chance": 20 },
    { "name": "fairSkies", "chance": 60 },
    { "name": "clearSkies", "chance": 20 }
  ]
};
/**
 * @author Kiku
 * 
 * Weather calculating algorithm borrowed from
 * https://github.com/Rogueadyn/SaintCoinach/blob/master/SaintCoinach/Xiv/WeatherRate.cs
 */

const EORZEA_HOUR = 175 * 1000; // number of real life milliseconds in an Eorzean hour
const EORZEA_8_HOUR = 8 * 175 * 1000; // number of real life milliseconds in 8 Eorzean hours
const EORZEA_DAY = 24 * 175 * 1000; // number of real life milliseconds in an Eorzean day

/**
 * Calulates the weather value given a timestamp
 * @param {number} time A unix timestamp in milliseconds
 */
const calculateWeatherValue = (time, tableSize = 100) => {
  const eorzeanHoursFromEpoch = time / EORZEA_HOUR;
  const eorzeanDaysFromEpoch = time / EORZEA_DAY;

  const increment = getIncrement(eorzeanHoursFromEpoch);

  const step1 = (eorzeanDaysFromEpoch << 32) >>> 0;
  const step2 = step1 * 100 + increment;
  const step3 = ((step2 << 11) ^ step2) >>> 0;
  const step4 = ((step3 >>> 8) ^ step3) >>> 0;

  return step4 % tableSize;
};

// 00:00~07:59 is 8
// 08:00~15:59 is 16
// 16:00~23:59 is 0
const getIncrement = time => {
  return (time + 8 - (time % 8)) % 24;
};

/**
 * Returns the date corresponding to the nearest 00:00, 08:00 or 16:00 Eorzea Time
 * 
 * @param {*} time A unix timestamp in milliseconds
 */
const convertToNearestRealIntervalStart = time => {
  const result = time - time % EORZEA_8_HOUR;

  return new Date(result);
};

/**
 * Calculates the nearest eorzea time interval start corresponding to a unix timestamp
 * 
 * Returns one of 00:00, 08:00, and 16:00
 * 
 * @param {number} time A unix timestamp in milliseconds
 */
const convertToNearestEorzeanIntervalStart = time => {
  const eorzeanHoursFromEpoch = time / EORZEA_HOUR;
  const eorzeaTimeHour = (eorzeanHoursFromEpoch - (eorzeanHoursFromEpoch % 8)) % 24;

  return eorzeaTimeHour + ':00';
};
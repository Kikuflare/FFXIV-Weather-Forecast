/**
 * @author Kiku
 * 
 * Script for rendering the UI
 */

// Selected language from the localStorage
let selectedLang = localStorage.getItem('selectedLang') ? localStorage.getItem('selectedLang') : 'en';

/**
 * Creates various HTML elements and adds them to the page
 * @param {string} lang The language id
 */
const render = lang => {
  renderAreaSelect(lang);
  renderLabels(lang);

  renderWeatherCheckboxes('targetWeatherOptions', lang, document.getElementById('areaSelect').value);
  renderWeatherCheckboxes('precedingWeatherOptions', lang, document.getElementById('areaSelect').value);
};

/**
 * Adds text to the page based on the selected language
 * @param {string} lang The language id
 */
const renderLabels = lang => {
  document.title = langMap[lang].web.ffxivWeatherForecastLabel;

  document.getElementById('ffxivWeatherForecastLabel').innerHTML = langMap[lang].web.ffxivWeatherForecastLabel;
  document.getElementById('areaLabel').innerHTML = langMap[lang].web.areaLabel + ': ';
  document.getElementById('timeLabel').innerHTML = langMap[lang].web.timeLabel + ': ';
  document.getElementById('findWeatherButton').innerHTML = langMap[lang].web.findWeather;

  document.getElementById('previousWeatherHeader').innerHTML = langMap[lang].web.previousWeatherHeader;
  document.getElementById('currentWeatherHeader').innerHTML = langMap[lang].web.currentWeatherHeader;
  document.getElementById('eorzeaTimeHeader').innerHTML = langMap[lang].web.eorzeaTimeHeader;
  document.getElementById('localTimeHeader').innerHTML = langMap[lang].web.localTimeHeader;

  document.getElementById('advancedOptionsLabel').innerHTML = langMap[lang].web.advancedOptionsLabel;
  document.getElementById('maximumNumberLabel').innerHTML = langMap[lang].web.maximumNumberLabel;
  document.getElementById('maximumCyclesLabel').innerHTML = langMap[lang].web.maximumCyclesLabel;

  // Don't render these if the area hasn't been selected yet
  if (document.getElementById('areaSelect').value) {
    document.getElementById('targetWeatherLabel').innerHTML = langMap[lang].web.targetWeatherLabel + ': ';
    document.getElementById('precedingWeatherLabel').innerHTML = langMap[lang].web.precedingWeatherLabel + ': ';
  }
};

/**
 * Adds options to the area select dropdown based on the selected language
 * @param {*} lang The language id
 */
const renderAreaSelect = lang => {
  // Reset the element before rendering it
  const selectElement =  document.getElementById('areaSelect');

  while (selectElement.hasChildNodes()) {
    selectElement.removeChild(selectElement.firstChild);
  }

  const selectedArea = localStorage.getItem('selectedArea') ? localStorage.getItem('selectedArea') : 'limsaLominsa'; // Default to limsaLominsa
  let selectedIndex = 0; // For setting the option to display after rendering

  const optgroupElement = document.createElement('optgroup');
  optgroupElement.label = langMap[lang].web.selectAnArea;

  let index = 0;
  for (const area of Object.keys(langMap[lang].area)) {
    // Determine the index to set select target
    if (area === selectedArea) {
      selectedIndex = index;
    }

    const optionElement = document.createElement('option');

    optionElement.value = area;
    optionElement.innerHTML = langMap[lang].area[area];

    optgroupElement.appendChild(optionElement);
    index++;
  }

  selectElement.appendChild(optgroupElement);
  selectElement.options[selectedIndex].selected = true; // Set the first item as the default selected option
};

/**
 * Looks up the weather patterns associated to an area and renders corresponding checkboxes
 * @param {*} id The id of the weather group
 * @param {*} lang The language id
 * @param {*} area The selected area
 */
const renderWeatherCheckboxes = (id, lang, area) => {
  // Reset the element before rendering it
  const divElement = document.getElementById(id);

  while (divElement.hasChildNodes()) {
    divElement.removeChild(divElement.firstChild);
  }

  // Add the weather options if an area has been selected
  if (area) {
    const seen = {}; // prevent duplicates

    for (const weather of weatherData[area]) {
      const weatherName = weather.name;
      const name = id + weatherName; // Unique identifier for the checkbox

      // Check if the weather has already appeared and skip it
      if (seen[weatherName]) {
        continue;
      }
      else {
        seen[weatherName] = true;
      }

      // Create the checkbox
      const checkboxElement = document.createElement('input');
      checkboxElement.type = 'checkbox';
      checkboxElement.id = name;
      checkboxElement.name = name;
      checkboxElement.classList.add('small-margin-right', id);
      id === 'precedingWeatherOptions' ? checkboxElement.setAttribute('checked', true) : null;

      // Grab the weather icon
      const imageElement = document.createElement('img');
      imageElement.src = `./images/${weatherName}.png`;
      imageElement.classList.add('small-margin-right');

      // Create the label
      const labelElement = document.createElement('label');
      labelElement.htmlFor = name;
      labelElement.classList.add('default-margin-right', 'flexbox');
      labelElement.appendChild(checkboxElement);
      labelElement.appendChild(imageElement);
      labelElement.innerHTML = labelElement.innerHTML + langMap[lang].weather[weatherName];

      // Add it to the page
      divElement.appendChild(labelElement);
    }
  }
};

/**
 * Re-renders weather checkboxes after selecting a different area
 * @param {*} event The HTML element of the area select
 */
const onAreaChangeHandler = event => {
  localStorage.setItem('selectedArea', event.value); // Save this so that it will be selected by default on a fresh page load
  renderWeatherCheckboxes('targetWeatherOptions', selectedLang, event.value);
  renderWeatherCheckboxes('precedingWeatherOptions', selectedLang, event.value);
};

/**
 * Changes the language of the web page and saves the change to localStorage
 * @param {string} lang The language id
 */
const langChangeHandler = lang => {
  if (lang !== selectedLang) {
    localStorage.setItem('selectedLang', lang);
    selectedLang = lang;

    render(lang);
  }
};

/**
 * Returns an array of weather strings that have been checked on the page
 * @param {*} collection A group of checkbox elements
 * @param {*} id The weather group
 */
const getWeatherList = (collection, id) => {
  const weatherList = [];

  for (const element of collection) {
    if (element.checked) {
      weatherList.push(element.id.replace(id, ''));
    }
  }

  return weatherList;
};

/**
 * Returns an array of time interval start strings that have been checked on the page
 */
const getTargetTimeList = () => {
  const targetTimeList = [];
  
  document.getElementById('start00').checked ? targetTimeList.push('0:00') : null;
  document.getElementById('start08').checked ? targetTimeList.push('8:00') : null;
  document.getElementById('start16').checked ? targetTimeList.push('16:00') : null;

  return targetTimeList;
}

/**
 * Renders the search results into a table on the page
 * @param {*} results An array of objects with the following structure:
 * {
      previousWeather: string,
      currentWeather: string,
      eorzeaTime: string,
      localTime: Date
    }
 */
const renderResults = results => {
  // Reset the element before rendering it
  const resultBody = document.getElementById('resultBody');

  while (resultBody.hasChildNodes()) {
    resultBody.removeChild(resultBody.firstChild);
  }

  if (results.length > 0) {
    for (const entry of results) {
      const tableRow = document.createElement('tr');
      
      // Previous Weather
      const previousWeatherCell = document.createElement('td');
      const previousWeatherImageElement = document.createElement('img');
      const previousWeatherCellContents = document.createElement('div');
      previousWeatherImageElement.src = `./images/${entry.previousWeather}.png`;
      previousWeatherImageElement.classList.add('small-margin-right');
      previousWeatherCellContents.appendChild(previousWeatherImageElement);
      previousWeatherCellContents.innerHTML = previousWeatherCellContents.innerHTML + langMap[selectedLang].weather[entry.previousWeather];
      previousWeatherCellContents.classList.add('flexbox');
      previousWeatherCell.appendChild(previousWeatherCellContents);
  
      // Current Weather
      const currentWeatherCell = document.createElement('td');
      const currentWeatherImageElement = document.createElement('img');
      const currentWeatherCellContents = document.createElement('div');
      currentWeatherImageElement.src = `./images/${entry.currentWeather}.png`;
      currentWeatherImageElement.classList.add('small-margin-right');
      currentWeatherCellContents.appendChild(currentWeatherImageElement);
      currentWeatherCellContents.innerHTML = currentWeatherCellContents.innerHTML + langMap[selectedLang].weather[entry.currentWeather];
      currentWeatherCellContents.classList.add('flexbox');
      currentWeatherCell.appendChild(currentWeatherCellContents);
  
      // Eorzea Time
      const eorzeaTimeCell = document.createElement('td');
      eorzeaTimeCell.innerHTML = entry.eorzeaTime;
  
      // Local Time
      const localTimeCell = document.createElement('td');
      localTimeCell.innerHTML = entry.localTime;
  
      tableRow.appendChild(previousWeatherCell);
      tableRow.appendChild(currentWeatherCell);
      tableRow.appendChild(eorzeaTimeCell);
      tableRow.appendChild(localTimeCell);
  
      resultBody.appendChild(tableRow);
    }
  }
  else {
    // Put a message in the table if there weren't any entries in the result
    const tableRow = document.createElement('tr');
    const noResultsFound = document.createElement('td');
    noResultsFound.colSpan = 4;
    noResultsFound.classList.add('centerText');
    noResultsFound.innerHTML = langMap[selectedLang].web.noResultsFoundLabel;

    tableRow.appendChild(noResultsFound);
    resultBody.appendChild(tableRow);
  }
};

/**
 * Performs a search for weather patterns that match the conditions set by the user
 * and returns an array containing the results
 */
const findWeather = () => {
  const area = document.getElementById('areaSelect').value;
  const targetWeather = getWeatherList(document.getElementsByClassName('targetWeatherOptions'), 'targetWeatherOptions');
  const precedingWeather = getWeatherList(document.getElementsByClassName('precedingWeatherOptions'), 'precedingWeatherOptions');
  const targetTime = getTargetTimeList();

  const data = weatherData[area];

  let weatherMap = []; // An array mapping index to weather names

  for (const weather of data) {
    weatherMap = weatherMap.concat(Array(weather.chance).fill(weather.name));
  }

  let timestamp = Date.now();

  const results = [];

  let previousWeather = weatherMap[calculateWeatherValue(timestamp - EORZEA_8_HOUR)];

  let count = 0;
  const maximumNumber = document.getElementById('maximumNumber').value;
  const maximumCycles = document.getElementById('maximumCycles').value;

  for (var i = 0; i < maximumCycles; i++) {
    const weatherValue = calculateWeatherValue(timestamp);
    const weather = weatherMap[weatherValue];
    const eorzeaIntervalStart = convertToNearestEorzeanIntervalStart(timestamp);

    if (targetWeather.includes(weather) && precedingWeather.includes(previousWeather) && targetTime.includes(eorzeaIntervalStart)) {
      count++;

      results.push({
        previousWeather: previousWeather,
        currentWeather: weather,
        eorzeaTime: eorzeaIntervalStart,
        localTime: convertToNearestRealIntervalStart(timestamp)
      });

      // Terminate early once the maximum is reached
      if (count >= maximumNumber) {
        break;
      }
    }

    previousWeather = weather;
    timestamp += EORZEA_8_HOUR;
  }

  return results;
};

/**
 * Handler for the find weather button
 */
const findWeatherOnClickHandler = () => {
  renderResults(findWeather());
};

render(selectedLang);
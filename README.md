# FFXIV-Weather-Forecast

[Link to FFXIV Weather Forecast Website](https://kikuflare.github.io/FFXIV-Weather-Forecast/)


Finds and displays weather in the game Final Fantasy XIV. This project was inspired by super-aardvark's [Weather Finder](https://super-aardvark.github.io/weather/) tool.

Currently looking for French, German, and Korean translations. Interested translators should look in the [/scripts/lang.js](https://github.com/Kikuflare/FFXIV-Weather-Forecast/blob/2f39d5576a5032eb31e14466a917f83f9050a130/scripts/lang.js) file for the text to be translated.

# User Guide
## Standard Options
### Expansion
Filters the area select to display only areas from the selected expansion.

### Area
Selects an area to search weather windows in.

### Target Weather
Selects 1 or more types of weather to transition into. Leaving all options unchecked automatically specifies all options.

### Preceding Weather
Selects 1 or more types of weather to transition from. Leaving all options unchecked automatically specifies all options.

### Eorzea Time
Selects 1 or more time periods in Eorzea Time to search for windows with the specified target weather. Leaving all options unchecked automatically specifies all options.

### Add Weather Conditions
Adds the desired conditions to a list. Multiple sets of conditions may be added.

### Find Weather
Performs the search using the specified conditions to find desired windows. If the search takes too long to complete (this can happen when the specified conditions are extremely rare), reduce the value of Maximum Number and/or Maximum Cycles under Advanced Options.

## Advanced Options
### Maximum Number
The maximum number of results to display in the table.

### Maximum Cycles
The maximum number of windows in which to search for the specified conditions.

### Custom Start Date
Optionally sets a date at which to beginning searching windows from. If this option is unchecked or if the date is unspecified, the search will default to the current time when the "Find Weather" button is pressed.

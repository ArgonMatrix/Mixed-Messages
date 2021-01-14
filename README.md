# Mixed Messages - Potion Recipe Generator
A random message generator created for Codecademy's Mixed Messages portfolio project in the Back-End Engineer Career Path.  

## Description
The script is designed to generate a new, random potion recipe every time it's run, pulling from several data sets to generate each section of the recipe.  

The randomized elements are: 
* The name of the potion
* The required fantastical ingredients
* The largely non-sensical steps for brewing the potion

Currently the data sets for each element are rather small, so repetition is to be expected when the script is run many times in a row. Future versions of this script will likely include larger data sets.

## Technologies
* JavaScript ES6 (ECMAScript 2018)
* Node.js v14.15.4

## Usage
* Open a terminal window such as Git Bash.
* Navigate (using `cd`) to the directory where the `potion_recipes.js` script is stored.
* Run the script with the command: `node potion_recipes.js`
### Example:
```
$ node potion_recipes.js
HOW TO BREW: Elixir of Invisibility

INGREDIENTS
1 Mahogany Barrel Full of Shadow Syrup
A calcified Spirits' Bane Leaf
A 52-year-old Ice Diamond
Several shavings of Flaked Toadskin
A single Black Toadstool

1. Freeze the shadow syrup into one solid piece, then reheat it to a liquid state via geothermal vent.
2. Allow the spirits' bane leaf to rest under direct moonlight for 3 hours. Add it to the liquid base and do not mix.
3. Offer the ice diamond as a gift to a loved one. If they accept, you must restart the brewing process. Otherwise, add the ice diamond to your mixture.
4. In your palms, hold the flaked toadskin several inches above your mixture for 20 minutes. If any of the flaked toadskin falls in, you must restart the brewing process.
5. Chop the black toadstool into fine pieces and scatter over the potion before consumption.

Enjoy!
```
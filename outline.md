# Mixed Messages – Project Outline

## **GOAL**
Write a script using JavaScript that creates a new message for the user every time it's run. The script should be run in the terminal with Node, and the message should print directly to the console.

## **OBJECTIVES**
- Build a message generator program using JavaScript.
- Use Git version control.
- Use command line.
- Develop locally on my own computer.

## **TOPIC**
Provide the user with a random potion recipe complete with fantasy ingredients and steps for brewing it.

## **TIMELINE**
- Generate a random name for the potion from a subset of possible options.
  * Have different names for "potion" too so that it isn't just "Potion of X" every time. Examples: elixir, essence of, liquid, distilled, etc.
- Generate a list of random ingredients from a subset of possible options. Randomize the quantities of each ingredient as well.
  * The ingredients should be divided into distinct categories, and each recipe should pull from the same categories for each ingredient. For instance, every potion should have a liquid base, followed by one or two solid ingredients, then a spice, and finally a garnish.
- Using the generated ingredients, formulate a list of steps to follow to create the potion.
  * To reduce the complexity of this part, the number of steps should be limited. I'll start with a maximum of 5 possible steps for a recipe and may reduce that amount if it proves too complicated to implement.
  * While the steps themselves should be random, their order matters. As such, each of the six possible steps should correlate to a specific aspect of the process. Some steps may be skipped depending on whether it makes sense for the current recipe. The current step logic is as follows:
    1. Prepare the liquid base.
    2. Process the first solid ingredient, then add it in if there's not a second solid ingredient.
    3. If applicable, process the second solid ingredient and mix it in.
    4. Add in the spice and brew it for a set amount of time/in a specific way.
    5. Top with a garnish and serve.
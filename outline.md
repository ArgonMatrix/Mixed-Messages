# Mixed Messages – Project Outline

## **GOAL**
Write a script using JavaScript that creates a new message for the user every time it's run. The script should be run in the terminal with Node, and the message should print directly to the console.

## **OBJECTIVES**
- Build a message generator program using JavaScript.
- Use Git version control.
- Use command line.
- Develop locally on my own computer.

## **TOPIC**
Provide the user with a random recipe for some kind of fantasy/nonsense food. It should be formatted as a standard recipe: stating the name of the food, list the ingredients needed, and follow the steps to cook/bake the dish. The food itself should be entirely random, and the ingredients & steps should follow some kind of logic that makes sense for that food.

## **TIMELINE**
- Generate a random name for the dish.
  * The dish name will be a combination of two elements: an adjective/descriptor followed by the name of the dish. Examples could include: Lunar Cake, Bloody Omelette, Electric Sausages, etc.
  * Maybe implement side dishes into the recipe in the future.
- Generate a list of ingredients for the recipe. These ingredients should make some kind of sense for the recipe in question.
  * To accomplish this, each food/descriptor should have a selection of viable ingredients associated with it—perhaps in the form of an array.
- Using the generated ingredients, formulate a list of steps to follow to create the recipe. Again, these steps should make some sense for the food in question.
  * To reduce the complexity of this part, the number of steps should be limited. I'll start with a maximum of 6 possible steps for a recipe and may reduce that amount if it proves too complicated to implement.
  * While the steps themselves should be random, their order matters. As such, each of the six possible steps should correlate to a specific aspect of the process. Some steps may be skipped depending on whether it makes sense for the current recipe. The current step logic is as follows:
    1. Prep & preheat.
    2. Combine raw ingredients.
    3. Add further ingredients.
    4. Process ingredients.
    5. Prepare final mixture for baking/cooking.
    6. Bake & serve.
// -- HELPER FUNCTIONS --
// Returns a random element of a given array.
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}


// -- DATA SETS --
// Elements of Potion Name
const potionDescriptors = ["Potion of", "Essence of", "Elixir of", "Distilled", "Liquid"];
const potionTypes = ["Invisibility", "Strength", "Love", "Dexterity", "Luck"];


// Ingredients & Preparation Methods
const ingredients = {
    // Raw Ingredients
    liquids: ["Unicorn's Milk", "Shadow Syrup", "Cosmic Water", "Ambrosia", "Nymph's Blood"],
    primaries: ["Vampire's Tooth", "Basilisk's Eye", "Root of a 1,000-Year-Old Tree", "Shard of Brimstone", "Spirits' Bane Leaf"],
    secondaries: ["Cockatrice Egg", "Strand of Lunar Seaweed", "Leprechaun's Toe", "Golden Apricot", "Ice Diamond"],
    spices: ["Powdered Pig's Feet", "Salamander Salt", "Flaked Toadskin", "Pulverized Dragon Scales", "Red Starlight"],
    garnishes: ["Black Toadstool", "Ogre's Finger Bone", "Tuft of Garnakk Fur", "Lily from a Sacred Garden", "Nightmare Globule"],

    // Ingredient Measurements
    liquidAmounts: ["4L", "1 Mahogany Barrel Full", "2 Pints", "3 Bovine Stomachs Full", "An 18th-Century Golden Chalice Full"],
    primaryAmounts: ["One", "A fossilized", "A formerly beloved", "A large", "A calcified"],
    secondaryAmounts: ["One", "A petrified", "A waterlogged", "A 52-year-old", "A tiny"],
    spiceAmounts: ["A dash", "A pinch", "Several shavings", "A dusting", "A small pouch"],
    garnishAmounts: ["A single", "An ancient", "One", "A demonsblood-soaked", "A charred"],

    // Preparation Methods
    prepLiquid(baseLiquid) {
        baseLiquid = baseLiquid.toLowerCase();
        const liquidPrepMethods = [`In a cauldron lubricated with cobra oil, bring the ${baseLiquid} to a boil.`,
    `Strain the ${baseLiquid} through a marshwood collinder, then bring it to a light simmer.`,
    `Heat the ${baseLiquid} under direct sunlight for 8 hours before brewing.`,
    `Freeze the ${baseLiquid} into one solid piece, then reheat it to a liquid state via geothermal vent.`,
    `Fill a shallow lead basin with the ${baseLiquid} and heat it over a caldera.`];
        
        return getRandomElement(liquidPrepMethods);
    },
    prepPrimary(primarySolid) {
        primarySolid = primarySolid.toLowerCase();
        const primarySolidPrepMethods = [`Crush the ${primarySolid} into a fine powder and mix it into your liquid base.`,
    `Allow the ${primarySolid} to rest under direct moonlight for 3 hours. Add it to the liquid base and do not mix.`,
    `Feed the ${primarySolid} to a three-headed narcolept. Once it is processed, add the narcolept excrement to your liquid base.`,
    `Use the ${primarySolid} as an offering to any eldritch god. Cleave the resulting object in two and add only one half to the mixture.`,
    `Bury the ${primarySolid} in a pet cemetery for 1 week before brewing, then have an accomplice retrieve it. Add it to the mixture yourself.`];

        return getRandomElement(primarySolidPrepMethods);
    },
    prepSecondary(secondarySolid) {
        secondarySolid = secondarySolid.toLowerCase();
        const secondarySolidPrepMethods = [`Allow the ${secondarySolid} to soak in the mixture for 5 minutes. Retrieve the ${secondarySolid} and discard it immediately.`,
    `Separate the ${secondarySolid} into its quantum elements via a 3" spacetime refraction lens. Add any two of these elements to your mixture and discard the third.`,
    `Offer the ${secondarySolid} as a gift to a loved one. If they accept, you must restart the brewing process. Otherwise, add the ${secondarySolid} to your mixture.`,
    `Gather a second ${secondarySolid} from a different source than the first. Add only the second one to the mixture.`,
    `Ascend to a minimum of 40,000 feet above sea level and hold the ${secondarySolid} aloft in open air for 30 seconds. Return to the ground and add it to your mixture.`];

        return getRandomElement(secondarySolidPrepMethods);
    },
    prepSpice(potionSpice) {
        potionSpice = potionSpice.toLowerCase();
        const spicePrepMethods = [`While blindfolded, sprinkle the ${potionSpice} over your mixture. Stir well, still while blindfolded.`,
    `Scoop your mixture into a small vial. Add the ${potionSpice} to this vial and discard the rest of your mixture. Shake well.`,
    `Over the next three days, add equivalent amounts of ${potionSpice} to the mixture. Do not stir.`,
    `Keep the ${potionSpice} near the prepared mixture. Do not add it in until 2 minutes before the potion is to be consumed.`,
    `In your palms, hold the ${potionSpice} several inches above your mixture for 20 minutes. If any of the ${potionSpice} falls in, you must restart the brewing process.`];

        return getRandomElement(spicePrepMethods);
    },
    prepGarnish(potionGarnish) {
        potionGarnish = potionGarnish.toLowerCase();
        const garnishPrepMethods = [`Top the potion with your ${potionGarnish} and serve chilled.`,
    `Soak your ${potionGarnish} in the final mixture for a minimum of 48 hours. To effectively use the potion, you must consume the entire ${potionGarnish} before drinking.`,
    `When ready to use the potion, hold your ${potionGarnish} in one hand and drink your mixture from the other.`,
    `Chop the ${potionGarnish} into fine pieces and scatter over the potion before consumption.`,
    `Perform a seance, using the ${potionGarnish} as your focus. In the midst of the spirit manifesting, consume the potion immediately.`];

        return getRandomElement(garnishPrepMethods);
    }
}

// -- FINAL FUNCTION --
// Generates a random recipe from the data sets above and prints it to the console in a specific format.
function generateRecipe() {
    // Potion Name
    const randPotionDescriptor = getRandomElement(potionDescriptors);
    const randPotionType = getRandomElement(potionTypes);

    // Potion Ingredients
    const randLiquid = getRandomElement(ingredients.liquids);
    const randPrimary = getRandomElement(ingredients.primaries);
    const randSecondary = getRandomElement(ingredients.secondaries);
    const randSpice = getRandomElement(ingredients.spices);
    const randGarnish = getRandomElement(ingredients.garnishes);

    // Ingredient Amounts
    const randLiquidAmount = getRandomElement(ingredients.liquidAmounts);
    const randPrimaryAmount = getRandomElement(ingredients.primaryAmounts);
    const randSecondaryAmount = getRandomElement(ingredients.secondaryAmounts);
    const randSpiceAmount = getRandomElement(ingredients.spiceAmounts);
    const randGarnishAmount = getRandomElement(ingredients.garnishAmounts);

    // Print Recipe
    console.log(
`HOW TO BREW: ${randPotionDescriptor} ${randPotionType}

INGREDIENTS
${randLiquidAmount} of ${randLiquid}
${randPrimaryAmount} ${randPrimary}
${randSecondaryAmount} ${randSecondary}
${randSpiceAmount} of ${randSpice}
${randGarnishAmount} ${randGarnish}

1. ${ingredients.prepLiquid(randLiquid)}
2. ${ingredients.prepPrimary(randPrimary)}
3. ${ingredients.prepSecondary(randSecondary)}
4. ${ingredients.prepSpice(randSpice)}
5. ${ingredients.prepGarnish(randGarnish)}

Enjoy!`);
}

// -- FUNCTION CALL --
generateRecipe();
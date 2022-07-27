import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavR from './Components/NavR.js'
import RecipeCard from './Components/RecipeCard.js'
import avacado from './images/AvacadoBlackBean.jpg'
import bibimpap from './images/bibimpap.jpg'
import chili from './images/Chili.jpg'
import cococurry from './images/cococurry.jpg'
import eggplant from './images/EggplantLasagna.jpg'
import ench from './images/Enchiladas.jpeg'
import matcha from './images/MatchaCake.jpg'
import pancake from './images/pancake.jpg'
import pesto from './images/pesto.jpg'
import redwne from './images/redwne.jpg'
import spanish from './images/SpanishRice.jpg'
import sundried from './images/Sundried.jpeg'
import tabo from './images/Tabouli.jpg'
import tofulet from './images/TofuCup.jpg'
import tofustir from './images/tofustir.jpg'
import tomato from './images/tomatosauce.jpg'
import background from './images/background.jpg'


function App() {
  return (
    <div className="App" style={{ 
     /*  backgroundImage: `url(${background})`,
      backgroundSize: "20%",
      backgroundRepeat: 'repeat', */
      backgroundColor: "whitesmoke"
    }}>
      <NavR />
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap' }}>
      <RecipeCard recipe="Avacado Black Bean Salad" src={avacado} 
          ingredients={
          <ul>
              <li>2 15oz Cans of Black Beans, drained</li>
              <li>2 Avacados</li>
              <li>2 Cups Corn</li>
              <li>2 Tomatoes, chopped</li>
              <li>1 1/2 Cup uncooked Quiona</li>
              <li>4 Green Onions, chopped</li>
              <li>1 4oz Can Green Chili Peppers</li>
              <li>1/3 Cup Lime Juice</li>
              <li>1/4 Cup Fresh Cilantro, chopped</li>
              <li>1 Tsp Honey</li>
              <li>1 Tbsp Salt</li>
              <li>1 Tbsp Pepper</li>
              <li>1/4 Cup Olive Oil</li>
          </ul>
  } 
        directions={
        <ol>
          <li>Prepare 1 1/2 Cups of uncooked Quiona</li>
          <li>While Quiona cooks add frozen corn in a non-stick pan with olive oil until tender.</li>
          <li>In a large bowl mix Lime Juice, Honey, Chilis, Cilantro, Salt, and Pepper.</li>
          <li>Add in Chopped Tomatoes, Green Onion, Black Beans, Cubed Avacado and Corn.</li>
          <li>Add in cooked Quiona.</li>
          <li>Mix well and serve.</li>
      </ol>
    }/>
      <RecipeCard recipe="Bibimpap" src={bibimpap}
        ingredients={
          <ul>
            <li>1 Cup Rice</li>
            <li>1.5 Cup Water</li>
            <li>2-3 Tbsp Sesame Oil</li>
            <li>3 Cup Mixed Veggies</li>
            <li>1 Cup Bean Sprouts</li>
            <li>2 Stalks Green Onion</li>
            <li>2 Cloves Garlic</li>
            <li>2 Tbsp Cocount Aminos or Soy Sauce</li>
            <li>2-3 Eggs</li>
            <li>2-4 Tbsp Gocujang Sauce (store bought)</li>
            <li>Kimchi</li>
          </ul>
        }
        directions={
          <ol>
            <li>Prepare Rice and set aside</li>
            <li>Coat pan with sesame oil and heat at medium</li>
            <li>Add veggies of choice to pan seasoning with minced garlic and cocount aminos (or soy sauce)</li>
            <li>Set veggies aside</li>
            <li>Cook eggs in same pan adding more oil if necessary</li>
            <li>Add rice to a stone/glass bowl</li>
            <li>Top with veggies and egg</li>
            <li>Add gocujang sauce, kimchi, and any other desired toppings</li>
            <li>Mix and enjoy</li>
        </ol>
        }
        />
      <RecipeCard recipe="Chili" src={chili}
      ingredients={
        <ul>
          <li>2 28oz cans Whole Peeled Tomatoes, crushed</li>
          <li>2 4oz cans Chopped Green Chili Peppers, drained</li>
          <li>2 Cups uncooked Quiona</li>
          <li>1 15oz can Black Beans</li>
          <li>1 15oz can Kidney Beans, drained</li>
          <li>1 15oz can Garbanzo Beans, drained</li>
          <li>1 15oz can Corn</li>
          <li>2 Bell Peppers, chopped</li>
          <li>2 Stalks Celery, chopped</li>
          <li>1/2 Onion, chopped</li>
          <li>3 Cloves Garlic, minced</li>
          <li>1/4 Cup Chili Powder</li>            
          <li>1 Tbsp Olive Olive</li>
          <li>2 Tbsp Oregano</li>
          <li>1 Tbsp Salt</li>
          <li>1 Tbsp Ground Pepper</li>
          <li>1 Tsp Cumin</li>
          <li>2 Bay Leaves</li>
        </ul>
      }
      directions={
        <ol>
          <li>Prepare 2 cups of Quiona.</li>
          <li>Heat Olive Oil in Large Pot over medium heat</li>
          <li>Stir in Onion, Bay Leaves, Cumin, Oregano, and Salt. Cook until onion is tender.</li>
          <li>Mix in Celery, Bell Peppers, Garlic, Chili Peppers. Reduce to low heat, simmer with pot covered for 5 mins.</li>
          <li>Mix in Tomatoes, Chili Powder, Pepper, Kidney Beans, Garbanzo Beans, and Black Beans.</li>
          <li>Add Quiona to pot, bring to boil, reduce to low heat, simmer for 45 minutes.</li>
          <li>Stir in corn. Cook for 5 more minutes.</li>
          <li>Serve topped with Avacado, Shredded Cheese, or as is.</li>
        </ol>
      }
      />
      <RecipeCard recipe="Coconut Curry" src={cococurry}
      ingredients={
        <ul>
          
          <li>1 Tbsp Curry Powder</li>
          <li>1 Cup Vegetable Broth</li>
          <li>2 14oz Can Coconut Milk</li>
          <li>Broccoli</li>
          <li>Snow Peas</li>
          <li>Carrots</li>
          <li>Red Peppers</li>
          <li>1 Can Chickpeas</li>
          <li>1 Tbsp coconut oil</li>
          <li>1 Tbsp grated ginger</li>
          <li>1 White Onion</li>
          <li>4 Cloves Garlic</li>
          <li>Salt and Pepper</li>
      </ul>
      }
      directions={
        <ol>
          <li>Prepare rice or quiona.</li>
          <li>Add onions and coconut oil in pan and saute onions.</li>
          <li>Add in vegetables and heat covered until softened.</li>
          <li>Add curry powder, grated ginger, coconut milk, and spices, and bring to simmer..</li>
          <li>Serve over rice or quiona.</li>
        </ol>
      }
      />
      <RecipeCard recipe="Eggplant Lasagna" src={eggplant}
      ingredients={
        <ul>
          <li>2-3 Large Eggplants</li>
          <li>1 Jar Tomato Sauce</li>
          <li>1 White Onion</li>
          <li>2 Cloves Garlic</li>
          <li>1 Tbsp Salt</li>
          <li>1 Tbsp Ground Pepper</li>
          <li>1 Tbsp Oregano</li>
          <li>1 bag of shredded mozzarella cheese</li>
      </ul>
      }
      directions={
        <ol>
          <li>Cut Eggplant into small discs and salt generiously.</li>
          <li>Line eggplants on stacks of paper towel to absorb exess water. Allow to sit for 20-30 minutes.</li>
          <li>Pat eggplant dry, brush with olive oil and bake at 325 until tender.</li>
          <li>Meanwhile add olive oil, chopped onion, and minced garlic into a sauce pan and cook on medium heat until onion is translucent.</li>
          <li>Add jar of tomato sauce into pan, cover and reduce heat to low.</li>
          <li>Prepare lasgna by layering tomato sauce, eggplant, cheese, until all eggplant is used.</li>
          <li>Bake for 20 minutes at 325 and serve.</li>
        </ol>
      }
      />
      <RecipeCard recipe="Enchiladas" src={ench}
      ingredients={
        <ul>
          <li>4 medium Sweet Potatoes</li>
          <li>1 15oz can of Black Beans</li>
          <li>1 Bottle of Enchilada Sauce</li>
          <li>1 Jar of Tomato Sauce</li>
          <li>8-10 Corn Tortillas</li>
          <li>1 Red Onion</li>
          <li>3 Cloves Garlic</li>
          <li>Pepper to taste</li>
          <li>Salt to taste</li>
        </ul>
      }
      directions={
        <ol>
          <li>Cut Sweet Potato into small cubes, cover with oil, spice with salt and pepper. Bake at 325 until soft.</li>
          <li>Meanwhile add 1 chopped onion and minced garlic into a large sauce pan on medium heat.</li>
          <li>Cook until onions are translucent, add in tomato sauce.</li>
          <li>Add can of black beans, lower heat, and cover.</li>
          <li>Once sweet potatoes are soft, add into the sauce pan and mix well.</li>
          <li>Add a thin layer of sauce into a glass pan.</li>
          <li>Scoop an equal amount of Enchilada filling into a tortilla and line tortillas until pan is full.</li>
          <li>Cover enchiladas with lines of enchilada sauce and bake for 10-15 minutes.</li>
          <li>Serve with sliced avacado.</li>
        </ol>
      }
      />
      <RecipeCard recipe="Matcha Cheesecake" src={matcha}
      ingredients={
        <ul>
          <li>1 1/2 Cups Raw Cashews</li>
          <li>1/2 Cup Maple Syrup</li>
          <li>1/4 Cup Coconut Milk</li>
          <li>1/4 Cup Coconut Oil</li>
          <li>1/4 Cup Vanilla Cocount Yogurt</li>
          <li>Juice from 1 Medium Lemon</li>
          <li>2 Tsp Matcha Powder</li>
          <li>1 Tsp Vanilla Extract</li>
          <li>1/4 Tsp Salt</li>
        </ul>
      }
      directions={
        <ol>
          <li>Soak Cashews overnight (or 8 hours) in warm water.</li>
          <li>Add all Ingredients to a high-powered blender.</li>
          <li>Pour ingredients into store bought pie crust.</li>
          <li>Freeze for at least 4 hours.</li>
          <li>Slice into sixths and enjoy!</li>
        </ol>
      }
      />
      <RecipeCard recipe="Pancakes" src={pancake}
      ingredients={
        <ul>
          <li>1.5 cups flour</li>
          <li>3.5 tsp baking powder</li>
          <li>1/4 tsp salt</li>
          <li>1 tbsp white sugar</li>
          <li>1 1/4 cup milk</li>
          <li>1 egg</li>
          <li>3 tbsp butter, melted</li>
        </ul>
      }
      directions={
        <ol>
          <li>Mix together flour, baking powder, salt, and sugar in a large bowl.</li>
          <li>Add in milk, egg, and melted butter.</li>
          <li>Mix until mostly smooth</li>
          <li>Heat butter on medium heat in an empty pan</li>
          <li>Pour in about a cup of batter</li>
          <li>Flip when upper surface bubbles</li>
          <li>Cook until both sides are golden brown</li>
        </ol>
      }
      />
      <RecipeCard recipe="Pesto Tomato Pasta" src={pesto}
      ingredients={
        <ul>
          <li>2 cups fresh basil</li>
          <li>2 tbsp pine nuts</li>
          <li>2 gloves garlic</li>
          <li>1/2 cup olive oil</li>
          <li>1/2 cup parmesan cheese</li>
          <li>1 cup cherry tomatoes</li>
        </ul>
      }
      directions={
        <ol>
          <li>Toast pine nuts under a medium heat until golden.</li>
          <li>Combine basil, toasted pine nuts and garlic in a blender or food processor.</li>
          <li>Dribble in oil as mixing until smooth.</li>
          <li>Add cheese and process breifly.</li>
          <li>Prepare pasta and add in sauce, sliced roasted cherry tomatoes.</li>
          <li>Top with cheese if desired.</li>
        </ol>
      }
      />
      <RecipeCard recipe="Red Wine Sangria" src={redwne}
      ingredients={
        <ul>
          <li>1 Bottle Merlot/Malbec</li>
          <li>1/4 Cup Triple Sec</li>
          <li>1/4 Cup Brandy</li>
          <li>2 Tbsp Lime Juice</li>
          <li>2 Tbsp Orange Juice</li>
          <li>Apples, Oranges, Peaches, etc for Garnish</li>
        </ul>
      }
      directions={
        <ol>
          <li>Mix all ingredients in a large pitcher</li>
        </ol>
      }
      />
      <RecipeCard recipe="Spanish Rice" src={spanish}
      ingredients={
        <ul>
          <li>1.5 - 2 cups Brown Rice</li>
          <li>1 small jar of Tomato Sauce</li>
          <li>1 Onion, chopped</li>
          <li>2-3 cloves of garlic, chopped</li>
          <li>2 Tbsp Chili Powder</li>
          <li>1 Head of Broccoli</li>
          <li>1 Tbsp Garlic Powder</li>
          <li>1 Tbsp Salt</li>
          <li>1 Tbsp Pepper</li>
          <li>2 Tbsp Olive Oil</li>
        </ul>
      }
      directions={
        <ol>
          <li>Prepare Broccoli by chopping it, coating it with olive oil, and seasoning with salt, pepper, and garlic powder.</li>
          <li>Bake at 325 until crispy.</li>
          <li>Meanwhile in a large sauce pan add 1 Tbsp of olive oil, chopped onion, and minced garlic and heat over medium until onions are translucent.</li>
          <li>Add rice into the pan and mix to cover rice. Heat for about 5 more minutes.</li>
          <li>Add an equal amount of water to the amount of rice you put in including the tomato sauce.</li>
          <li>Heat covered on low heat, occasionally mixing until all the liquid is absorbed.</li>
          <li>Add the now cooked broccoli into the pan and mix well.</li>
          <li>Serve rice topped with slice avacado and cheese.</li>
</ol>
      }
      />
      <RecipeCard recipe="Sundried Tomato Pesto" src={sundried}
      ingredients={
        <ul>
          <li>20oz Whole Wheat Pasta</li>
          <li>1 Jar Sundried Tomatoes</li>
          <li>1 Cup Fresh Basil</li>
          <li>1/2 Onion</li>
          <li>4 Cloves Garlic</li>
          <li>2 Tbsp Parmesan Cheese</li>
        </ul>
      }
      directions={
        <ol>
          <li>Set Pasta to boil. When ready drain and add back into pot.</li>
          <li>Blend all ingridents in a High-Speed Blender until chunky but smooth.</li>
          <li>Mix sauce into pot with Pasta.</li>
          <li>Add Parmesan Cheese, mix, and serve!</li>
        </ol>
      }
      />
      <RecipeCard recipe="Tabouli" src={tabo}
      ingredients={
        <ul>
          <li>2 Cups of uncooked Quiona</li>
          <li>2-3 bunches of Fresh Parsley</li>
          <li>1 Cucumber</li>
          <li>1-2 Tomatoes</li>
          <li>4-5 Green Onions</li>
          <li>Lemon Juice from 2-3 medium Lemons</li>
          <li>2 Tbsp Olive Oil</li>
          <li>1 Tbsp Salt</li>
          <li>1 Tbsp Pepper</li>
        </ul>
      }
      directions={
        <ol>
          <li>Rinse Quiona and prepare by adding equal volume of water and uncooked quiona into a large sauce pan.</li>
          <li>Once water is fully absorbed add into large bowl.</li>
          <li>Finley chop the cucumbers, tomatoes, and parsley.</li>
          <li>Add all ingridients into the bowl, mix well.</li>
          <li>Chill for about 20 minutes and serve.</li>
        </ol>
      }
      />
      <RecipeCard recipe="Tofu Lettuce Cups" src={tofulet}
      ingredients={
        <ul>
          <li>1 1/2 Cups uncooked rice</li>
          <li>14oz Extra-Firm Tofu</li>
          <li>2 Cups Fresh Basil</li>
          <li>1 4oz Can Green Chilis</li>
          <li>3 Garlic Cloves</li>
          <li>2 Tbsp Soy Sauce</li>
          <li>1 Tbsp Vegeterain Oyster Sauce</li>
          <li>1 Tbsp Maple Syrup</li>
          <li>3 Green Onions</li>
          <li>2 Tbsp Olive Oil</li>
          <li>1/2 Cup Dry Roasted Peanuts</li>
          <li>1 Head of Lettuce</li>
          <li>1 Tsp White Vinegar</li>
        </ul>
      }
      directions={
        <ol>
          <li>Drain Tofu and slice thin, season with Salt and Pepper, cover with paper towels to absorb liquid.</li>
          <li>Prepare Rice.</li>
          <li>Meanwhile mix all other Ingredients (except olive oil) in a high-speed blender to make the sauce.</li>
          <li>Once Tofu is dry, chop into small pieces and coat with olive oil in a non-stick pan.</li>
          <li>Cook until golden brown.</li>
          <li>Pour prepared sauce into the tofu and cook for about 5-10 minutes.</li>
          <li>Once heated, serve over rice in cup of lettuce.</li>
        </ol>
      }
      />
      <RecipeCard recipe="Tofu Stir Fry" src={tofustir}
      ingredients={
        <ul>
          <li>1 Block Extra Firm Tofu</li>
          <li>4 Tbsp Soy Sauce</li>
          <li>2 Tsp Chili Garic Sauce</li>
          <li>2 Tsp Sesame Oil</li>
          <li>2 Tbsp Peanut Butter</li>
          <li>1 Tbsp Maple Syrup</li>
          <li>1 Tbsp Lime Juice</li>
          <li>Mixed Veggies (mushrooms, carrots, peppers, green onion, etc)</li>
          <li>2 Cloves Garlic</li>
          <li>1 Tbsp Miced Ginger</li>
          <li>Fresh Cilantro (to serve)</li>
        </ul>
      }
      directions={
        <ol>
          <li>Prepare Rice and set aside</li>
          <li>Press Tofu Dry for about 1 hour</li>
          <li>Cut into cubes and mix into a bowl with Peanut Butter, Soy Sauce, Maple Syrup, Lime Juice, and Chili Garlic Sauce to season</li>
          <li>Heat tofu in a large pan over medium heat until slighly brown</li>
          <li>Remove from heat and set aside</li>
          <li>In the same pan add veggies, garlic, and ginger and cook covered</li>
          <li>Return tofu to pan and mix for 1-2 mins</li>
          <li>Place ingridents over rice, add cilantro if desired and serve</li>
        </ol>
      }
      />
      <RecipeCard recipe="Tomato Sauce" src={tomato}
      ingredients={
        <ul>
          <li>1 28oz Jar of San Marizo Tomatoes</li>
          <li>4oz Butter</li>
          <li>1/3 Cup of Parmasean Cheese</li>
          <li>Fresh Basil</li>
          <li>3/4 Onion</li>
          <li>3-4 Cloves MincedGarlic</li>
          <li>16oz Bag of Whole Wheat Pasta</li>
          <li>1/2 Tbsp Chili Powder</li>
          <li>1 Tbsp Tomato Paste</li>
          <li>Salt and Pepper</li>
        </ul>
      }
      directions={
        <ol>
          <li>Place Butter, chopped onions, garlic and tomato pase in a large sauce pan on medium heat.</li>
          <li>Cook until butter is completely melted and onions are transluscent.</li>
          <li>In the meantime blend the jar of San Marizino tomatoes, salt, pepper, chopped basil, chili powder, and half the can of water.</li>
          <li>Pour the blended sauce into the sauce pan, simmer on medium for about an hour or longer.</li>
          <li>Transfer sauce from sauce pan to a large bowl with cooked and drained pasta.</li>
          <li>Add about 1/3 cup of parm cheese, mix, and enjoy.</li>
        </ol>
      }
      />
      </div>
    </div>
  );
}

export default App;

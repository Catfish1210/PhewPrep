const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}

let name = ''


const recipies = {
    0:{
        name: 'Korean Chicken With Rice',
        time: '35 minutes',
        kcal: '450 kcal',
        ingredients: {

            0:{
            name: 'Ketchup',
            amount: '25',
            unit: 'g'
            },
            
            1:{
            name: 'Soy Sauce',
            amount: '45',
            unit: 'g'
            },

            2:{
                name: 'Garlic powder',
                amount: '2',
                unit: 'g'
            },

            3:{
                name: 'Apple vinegar',
                amount: '15',
                unit: 'g'
            },

            4:{
                name: 'Sweet Chilli sauce',
                amount: '30',
                unit: 'g'
            },

            5:{
                name: 'Garlic Cloves',
                amount: '2',
                unit: 'g'
            },

            6:{
                name: 'Ginger',
                amount: '10',
                unit: 'g'
            },

            7:{
                name: 'Red Paprika',
                amount: '200',
                unit: 'g'
            },

            8:{
                name: 'White rice',
                amount: '125',
                unit: 'g'
            },

            9:{
                name: 'Sessame seeds',
                amount: '8',
                unit: 'g'
            },

            10:{
                name: 'Olive oil',
                amount: '8',
                unit: 'g'
            },

            11:{
                name: 'Sugar',
                amount: '50',
                unit: 'g'
            },

            12:{
                name: 'Chicken fillet',
                amount: '200',
                unit: 'g'
            },

            13:{
                name: 'Cornstarch',
                amount: '20',
                unit: 'g'
            },
 
        },
        Instructions: 'Chop ginger, garlic and paprika. Slice the chicken. Boil water in a pot and place a bag of rice in it. Boil for 10-15 minutes until the rice is soft. Mix together the sauce. To do this, mix ketchup, soy sauce, garlic powder, apple cider vinegar, 50 g of sugar, sweet chili sauce (spicy!), ginger and garlic. Heat oil in a pan. Coat chicken in cornstarch and place in pan. Fry on high heat for a few minutes, stirring occasionally. Add paprika and fry. Then add the mixed sauce and 50 ml of water. Cook for 5 minutes until the sauce is sticky. Serve the chicken with rice and sprinkle with sesame seeds. '

    },

}

function addCondiment() {
    var card = document.createElement("condiment-section");
  
    var closeButton = document.createElement("button");
    closeButton.innerText = "X";
    closeButton.addEventListener("click", function() {
      card.remove();
    });
    card.appendChild(closeButton);
  
    var condimentInput = document.createElement("input");
    condimentInput.type = "text";
    condimentInput.placeholder = "Ingredient";
    card.appendChild(condimentInput);
  
    var amountInput = document.createElement("input");
    amountInput.type = "text";
    amountInput.placeholder = "Amount";
    card.appendChild(amountInput);
  
    var unitInput = document.createElement("input");
    unitInput.type = "text";
    unitInput.placeholder = "unit(s)";
    card.appendChild(unitInput);
  
    var element = document.getElementById("here");
    element.appendChild(card);
  }

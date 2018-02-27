var update = [{pizzaName: "The Main Event",description: "A delightful combination of organic onions, peppers and tomatoes mixed with grass-fed 100% wagyu beef makes this pizza, dare we say.....Dynamic!", price: 39.99},{pizzaName: "My Subways",description: "Paying homage to our favorite sandwich shop Subways, we create your favorite sub as a pizza! Don't you dare miss this train!",price: 21.99},{pizzaName: "Panda Express",description: "East definitely meets West in this terrific union. Enjoy your favorite Panda Express flavors of Orange Chicken, Broccoli Beef, Kung Pao Chicken or Honey Walnut Shrimp in a different way.",price: 16.88},{pizzaName: "Tex Mex",description: "Build pizzas not walls is the theme for this mex. We draw inspiration from your local cantina to create this masterpiece.",price: 21.21}];

for(var i=0; i<update.length; i++){
	var pElem = document.createElement('p');
	var pText = document.createTextNode('==========');
	pElem.appendChild(pText);
	document.getElementsByClassName('pizza')[0].appendChild(pElem);

	var pElem0 = document.createElement('p');
	var pText0 = document.createTextNode(update[i].pizzaName);
	pElem0.appendChild(pText0);
	document.getElementsByClassName('pizza')[0].appendChild(pElem0);

	var pElem1 = document.createElement('p');
	var pText1 = document.createTextNode(update[i].description);
	pElem1.appendChild(pText1);
	document.getElementsByClassName('pizza')[0].appendChild(pElem1);

	var pElem2 = document.createElement('p');
	var pText2 = document.createTextNode(update[i].price);
	pElem2.appendChild(pText2);
	document.getElementsByClassName('pizza')[0].appendChild(pElem2);
}
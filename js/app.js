// Array of cats
var catInitialArr = [
	{
		"name": "Blackie",
		"clickCount": 0,
		"imgSrc": "img/blacky.jpg",
		"nicknames": ["Scary","Brrr"]
	},
	{
		"name": "Chewie",
		"clickCount": 0,
		"imgSrc": "img/chewie.jpg",
		"nicknames": ["Woowie","Louie"]
	},
	{
		"name": "Snow",
		"clickCount": 0,
		"imgSrc": "img/snow.jpg",
		"nicknames": ["Blow","Glow","Slow"]
	},
	{
		"name": "Olive",
		"clickCount": 0,
		"imgSrc": "img/olive.jpg",
		"nicknames": ["Bolive","Dolive"]
	},
	{
		"name": "Pickle",
		"clickCount": 0,
		"imgSrc": "img/jetske.jpg",
		"nicknames": ["Jiggle","Ripple"]
	}
];

// Cat function
var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.nicknames = ko.observableArray(data.nicknames);
	this.imgSrc = ko.observable(data.imgSrc);

	this.title = ko.computed(function(){
		var title;
		var clicks = this.clickCount();
		if(clicks < 5) {
			title = 'Newborn';
		} else if(clicks < 10) {
			title = 'Infant';
		} else if (clicks < 20) {
			title = 'Child';
		} else if (clicks < 30) {
			title = 'Teen';
		} else {
			title = 'Adult';
		}
		return title;
	},this);
};


// KO viewmodel i.e. our controller
var ViewModel = function() {
	var self = this;
	this.catList = ko.observableArray([]);

	// initialize catList using catInitialArr
	catInitialArr.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});

	this.currentCat = ko.observable(this.catList()[0]);

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());
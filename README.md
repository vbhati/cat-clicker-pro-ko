Cat Clicker Pro - Knockout.js
============================

Cat Clicker Pro is developed using Knockout.js as VM (Viewmodel i.e. controller) in MVC.

Note: No styling is used for this app.

About Application
=================
	The application displays:
	-> a list of cats by name
	-> an area to display the selected cat
	-> In the cat display area, the following will be displayed
		==> the cat's name
		==> a picture of the cat
		==> text showing the number of clicks
		==> title of the cat
		==> nicknames of cat 
		
	Interaction:
	-> On page load first cat is displayed as default.
	-> When a cat name is clicked in the list, the cat display area update to show the data for the selected cat along with title, name and nicknames.
	-> The number of clicks in the cat area is unique to each cat, and increments when the cat's picture is clicked.

Implementation
==============
Model: Data is stored in "catInitialArr" array.
View: Stuff that user sees and interact with is implemented using HTML. HTML bindings are used to connect view with viewModel (controller).
VM(View model): controller helps connect model with view using Knockout.js

Components used from Knockout.js
================================
	Observables
	Computed Observables
	Observable Arrays
	Bindings
	Control Flow
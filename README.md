# OutfrontChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0.

Giphy Search was built in: 

Angular 4
Bootstrap
HTML
CSS

With help from: 

angular2-flash-messages
ngx-pagination

Technical Explanation: 

	Giphy Search uses two-way binding to capture user input for a query. The search input and quantity are bound to TypeScript models in the search bar component. When a user submits a query, these values are collected and a quick validation is performed on the search term to make sure it contains only word characters, integers, and whitespace. If this validation fails, the user is presented with an error message and is prompted to try again.

	If the validation passes, the search term, along with the quantity selected from the select box, is passed to a service. Once inside the service, the search term is passed to another function which prepares it for the query. This includes stripping out white space and joining the words together with plus '(+)' symbols.

	Once the search term and quantity are prepared, they are concatenated with the known url for the Giphy API, the result of which is passed into an HTTP 'get' request. This observable is returned to where it was called from, the search bar component. Here, the search bar component subscribes to this observable and hopefully receives some data back from the API.

	Once inside the subscription with access to the json data that was returned, the json is parsed into an object, with the relevant array of image objects being extracted. This array is passed into a data service Subject's 'next' function, which is expecting such an array.

	Meanwhile the 'display' component subscribes to that same subject upon initialization, and when this component gets word that the array has been passed to it, it sets its own "photoSet" property to the incoming array. The view for this component has a conditional which will display these photos in an organized way, along with some other conditionals that will determine the style of the page. I took care to choose the best low-resolution option for the thumbnails, while retaining access to the original images url for the full size overlay. Here I also used the pagination package to paginate the results.

	The 'Clear' function simply sets the searchTerm model to an empty string, cleans up any errors, and passes the data service function an empty array, which clears out the view.

	The program also makes use of the angular router to toggle between the 'home' and 'about' routes. The routes are defined in a seperate module, where they are exported and subsequently imported into the main module.

	Also used were custom media queries to style elements in the collapsed Bootstrap Navbar, and a hand-written overlay in vanilla TypeScript to display full size images.

	The app was deployed to Heroku on a simple Node/Express server. To run the program locally, clone it down, run npm install to install the dependencies, and run ng serve to start the Angular server. Then, visit http://localhost:4200.



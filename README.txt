Hello! This is an app that gets and displays local weather information.

It's really simple and the code is messy, at best. 

The API I used:
https://www.weatherapi.com/

Source for cloud icon:
https://www.flaticon.com/

Source for page loader:
https://redstapler.co/add-loading-animation-to-website/

!!!
This code currently has a jquery error so the API key has been removed for privacy >>details>> ( The API will not get called because the npm will not build the project, it won't build because of an reference error with jquery)
If you wish to use this code, 
navigate to the main.js file
at the top under the /// API call /// comment
change the last parameter to inclue the key like so:
"x-rapidapi-key": "<!--KEY-->"

Set up to open on local host and you're good to go!

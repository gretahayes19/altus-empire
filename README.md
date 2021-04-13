# Altus Empire

## Background and Overview
Welcome to the altus-empire wiki!

Altus Empire is a web app that allows a user (21+) to search and locate cannabis dispensaries in NYC. In addition, users can leave reviews on the website for other users to see, or remove their reviews.

## Authors
Greta Hayes (Team Lead)
Christine Yang (Frontend Developer)
Hank Chen (Backend Developer)
Kevin Mao (Flex Developer)

## Functionality and MVP
In `Altus Empire`, users will be able to:
  * sign up, sign in, log out
  * use a demo login to try the site
  * use certain features without logging in (leaving reviews)
  * navigate a map to locate dispensaries near them
  * see the results of their search displayed on the map
  * leave reviews for specific businesses
  
In addition, this project will include:
  * click on map markers to expand more information about a specific business
  * use the search bar and see their results displayed on the map
  * text search for dispensaries near them
  * text search for specific products

## Wireframe

<img width="500" alt="Screen Shot 2021-04-13 at 10 49 23 AM" src="https://user-images.githubusercontent.com/72277593/114572962-f1e62380-9c45-11eb-8edb-b3d30d818d8a.png">
<img width="500" alt="Screen Shot 2021-04-13 at 10 47 17 AM" src="https://user-images.githubusercontent.com/72277593/114572812-d3802800-9c45-11eb-907b-e244b56a37ea.png">
<img width="500" alt="Screen Shot 2021-04-13 at 10 47 43 AM" src="https://user-images.githubusercontent.com/72277593/114572822-d549eb80-9c45-11eb-86d6-c7ca21abfb52.png">


## Architecture and Technology

  * MongoDB
  * Express
  * React
  * Node.js
  * Google Maps API
  * AWS

## Implementation Timeline

  * Day 0 - Database Schema → Hank, Frontend Routes → Christine, Backend Routes → Greta, State → Kevin
  * Day 1 - Generate db/models → Hank, User auth → Greta/Kevin, Splash/Login → Christine
  * Day 2 - Connect map API → Greta/Kevin, Build map layout → Kevin/Christine, Business list index from database(images/business names and info) → Hank
  * Day 3 - Render search results on map and list → Greta/Kevin, Frontend rendering/styling of search bar → Christine, Fetch info from database(items index) → Hank
  * Day 4 - Review Form → Greta, Business Info Page → Christine, Store Reviews inside database (reviews index) → Hank/Kevin
  * Day 5 - Bug/fix/styling → everyone

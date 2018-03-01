# FriendFinder - Node and Express Servers

### Overview

In this activity, built a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. Used Express to handle routing.


* Directory Structure:

  ```
  FriendFinder
    - app
      - data
        - friends.js
      - public
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js
  ```

### Instructions

1.Survey contains 10 questions. Each answer falls on a scale from 1 to 5 based on how much the user agrees or disagrees with a question.

2. The `server.js` file requires the basic npm packages: `express`, `body-parser` and `path`.

3. `htmlRoutes.js` file include two routes:

   * A GET Route to `/survey` which should display the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page. 

4. `apiRoutes.js` file contains two routes:

   * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

5. Application data is stored inside of `app/data/friends.js` as an array of objects. Each of these objects follow the following format below.

```json
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}
```

- - -

### Hosting on Heroku

https://shrouded-lake-86849.herokuapp.com/survey

- - -

# Travelling

<br>

## Description

This is an app to manage unofficial trips within communities. The app helps to organize, manage and track competitions.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start playing into competition
-  **Login:** As a user I can login to the platform so that I can play competitions
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **City list:** As a user I want to see all the cities so that I can choose where I want to travel.
-  **People list:** As a user I want to see all people so that I can find persons with the same preferences.
-  **User card:** As a user I want to show my preferences so that other people can see the information.




## Backlog

User profile:
-Geo location:
To see your and other's people location.
To see where is the city

List cities:
To create more cities to visitg


<br>


## Routes (React App)
| Path                      | Component            | Permissions | Behavior                                                     |
| ------------------------- | -------------------- | ----------- | ------------------------------------------------------------ |
| `/`                       | HomePage             | anon only   | Home page. link to login and signup                          |
| `/login`                  | LoginPage            | anon only   | Login form, link to signup, navigate to homepage after login |
| `/signup`                 | SignUpPage           | anon only   | Signup form, link to login, navigate to homepage after signup|
| `/countries`              | CountriesPage        | user only   | Show contry and link to country detail                       |
| `/countries/:id`          | CountryPage          | user only   | Show country detail and add to favorites                     |
| `/travel/:id`             | TravelPage           | user only   | Show travel                                                  |
| `/me`                     | ProfilePage          | user only   | Show my profile                          |
| 
Signup form, link to login, navigate to homepage after signup

## Components
- HomePage
- LoginPage
- SignUpPage
- CountriesPAge
- CountryPage
- TravelPage
- ProfilePage 
- Navbar

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  
- Country Service
  - country.list()
  - country.detail(id)
  - country.delete(id)
  
- Trip Service

  - trip.detail(id)
  - trip.add(id)
  - trip.delete(id)

<br>

# Server / Backend


## Models

User model

```javascript
{
  username: {type: String, required: true, unique: true, },
  hobbies: {type: String},
  password: {type: String, required: true},
  preference: {type:String}
  description : {type:String}
  image:{type:String}
}
```
Country Model:
```javascript
{
    name: {type: String},
    image: {type: String},
    description: {type: String},
    users: {type: Array}
}
```

Trip Model: 

```javascript
 {
   tripsharer: {type: ObjectId,ref:'User'},
   country: {type: ObjectId,ref:'Country'}, 
   description: {type: String}
 }
```

<br>


## API Endpoints (backend routes)

  | HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
  | ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
  | GET         | `/auth/profile    `           | Saved session                | 200            | 404          | Check if user is logged in and return profile page           |
  | POST        | `/auth/signup`                | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
  | POST        | `/auth/login`                 | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
  | POST        | `/auth/logout`                | (empty)                      | 204            | 400          | Logs out the user                                |
  | GET         | `/country`                |                              |                | 400          | Show all countries                                         |
  | GET         | `/countries/:id`            | {}                         |                |              | Show specific country                                      |
  | POST        | `/countries/new ` | {id,description}                           | 201            | 400          | Create and save a new tournament                       |
  | PUT         | `/countries/:id`       | {description}           | 200            | 400          | edit countries                                              |
  | DELETE      | `/countries/:id`     | {}                         | 201            | 400          | delete countries                                            |


<br>


## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/PBqtkUFX/curasan) 
or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/screeeen/project-client)

[Server repository Link](https://github.com/screeeen/project-server)

[Deployed App Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)
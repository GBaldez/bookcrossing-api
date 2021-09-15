
<h1 align="center">
  <img alt="croosbooking" title="crossbooking" src="https://www.elconsejo.org/wp-content/uploads/2019/01/banner-bookcrossing-portada.png" width="300px" /><br>
    BookCrossing
</h1>

<h2 style="color:yellow; background:black" align="center"> Node.js Practice </h3>
<h3 align="center">
  The Rest API that registers shared books, reviews of those who have read it, and location of points where you can find books that are part of this social network.
</h3>
<p align="center">
  <a href="#rocket-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#checkered_flag-installation">Installation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#incoming_envelope-routes">Routes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licence">Licence</a>
</p>

## :rocket: About the project
An API Rest made with Node.js,Express and MongoDB to register books, users and the database will grow with the insertion of records from several users in various geographic locations. With a simple click, the app will return points of releasing books closest to you within a radius of 300 km.

## :checkered_flag: Installation 
First of all, make sure that you have Node.js installed on your machine.
Choose a package manager (NPM or Yarn). You will need to create a mongoDB database too. Follow this link to create one:
(https://www.mongodb.com/try/download/community).

<br>

Now, to install the dependencies

```
npm install
```

To start the application with nodemon
```
  npm run dev
  
```
To start the application with node
```
  npm start
  
```
## API Test
You will need a API Client,you can use:
* Postman
* Insomnia
* Thunder Client (extension for vsCode)

## :incoming_envelope: Routes
Every URL starting with ‘/api’ .
Example:
```
http://localhost:3000/api/books
```
To search by Id, update or delete
```
http://localhost:3000/api/books/:id
```
To filter results by query parameters
```
http://localhost:3000/api/nearby/?lng=-80&lat=2
```
<h4 style="background:pink">If you are interested in more information about bookcrossing, access:<a> https://www.bookcrossing.com/</a></h4>
Create a JSON object to pass in the Body field

```json
{
    "name": "Taz - Temporary Autonomous Zone",
    "auth": "Hakim Bey"
}
```
## :memo: Licence
Mozilla Public License Version 2 [LICENSE](LICENSE.md) for more details.

Made with ♥ by Gabriel :wave: [See my linkedin!](https://www.linkedin.com/in/gabriel-baldez/)

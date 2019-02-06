# LibraryApi

API hosted on HerokuApp, with clearDB mySql add-on.<br>
Language: Node.js, mySQL DB.<br>
GET, POST methods <br>
Live link: https://damianlibrary.herokuapp.com/ <br>

<b>Endpoints:</b><br>
<b>Books:</b><br>
https://damianlibrary.herokuapp.com/library - GET all books, post new one with parameters: <br>
-name <br>
-author <br>
-isbn <br>
https://damianlibrary.herokuapp.com/library - POST book info (name, author, isbn) to DB, response: error.
https://damianlibrary.herokuapp.com/library/:id - Delete user record with corresponding id.<br>

<b>Users:</b>
https://damianlibrary.herokuapp.com/users/login - POST method with user_name and password values. Response is proper status/jwt token.<br>
https://damianlibrary.herokuapp.com/users/register - POST method with user_name, password, first_name, last_name, email. Response is proper status/error.<br>


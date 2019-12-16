# JSON Born 2 ("The JSON Supremacy"?)

Exploring accessing local JSON files.


### Introduction

We'll be exploring how to read and write to the local file system.


### Setup

Our user will run our node app with `node main.js` and get the result in the console. We'll be using mock "routes" to describe what data we want to act on and how we want to act on it. Use `process.argv` to parse what the user's input is, `fs.readFile` to grab it (or `fs.writeFile` to write it), and `console.log` to output the raw data back.


### Routes You'll Need

It's recommended you go in this order, which is from easiest to hardest. But if you find one of the later ones particularly difficult, feel free to skip around!

1. `GET users` - print out all users
2. `GET user [index]` - print out the user with that index value.
3. `GET friends [index]` - print out all the friends from the user with that index value.
4. `POST users [name] [age] [eye color]` - add a new user to the data with those attributes. As a stretch goal, add an index value that doesn't conflict with any other user. Print out that you have added a user, and double check by running the first route again.
5. `POST friends [index] [name]` - add a new friend with that name property to the user with that index. As a stretch goal, add an index value that doesn't conflict with any other friend of that user.
6. `PUT user [index] [property name] [new value]` - update the given property of the  user at that index to have the new value.
7. `DELETE user [index]` - delete the user with that index from the data.
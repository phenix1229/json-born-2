const fs = require('fs')

const getUsers = () => {
    fs.readFile('users.json', function(err, data){
    if (err){
        console.log(err);
    } else {
        let users = JSON.parse(data);
        console.log(users)
    }
})}

getUsers()

const getUser = function(i){
    fs.readFile('users.json', function(err, data){
        if (err){
            console.log(err);
        } else {
            let users = [...JSON.parse(data)];
            console.log(users[i]);
}})}

getUser(2)

const getFriends = function(i){
    fs.readFile('users.json', function(err, data){
        if (err){
            console.log(err);
        } else {
            let users = [...JSON.parse(data)];
            console.log(users[i].friends);
        }})
}

getFriends(1)


// readline.question("What is your birth date (mmddyyyy)?\n",
//   (birthDate) => {
//     readline.setPrompt("What would you like to know?\n1 = Age\n2 = Zodiac sign\n3 = Birthstone\n4 = All of the above\nPress any other key and 'Enter' to exit\n");
//     readline.prompt();
//     readline.on('line', (userInput) => {
//       if (userInput.trim() == "1"){
//         console.log(age(birthDate));
//       } else if (userInput.trim() == "2"){
//         console.log(zodiacSign(birthDate));
//       } else if (userInput.trim() == "3"){
//         console.log(birthStone(birthDate));
//       } else if(userInput.trim() == '4'){
//         console.log(age(birthDate), zodiacSign(birthDate), birthStone(birthDate));
//       } else {
//         console.log("Goodbye")}
//       readline.close()})
//   })
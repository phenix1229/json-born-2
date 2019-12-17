const fs = require('fs')

const getUsers = () => {
    fs.readFile('users.json', function(err, data){
    if (err){
        console.log(err);
    } else {
        let users = JSON.parse(data);
        console.log(users)
    }
    })
}

// getUsers()

const getUser = (i) => {
    fs.readFile('users.json', function(err, data){
        if (err){
            console.log(err);
        } else {
            let users = [...JSON.parse(data)];
            console.log(users[i]);
}})}

// getUser(2)

const getFriends = (i) => {
    fs.readFile('users.json', function(err, data){
        if (err){
            console.log(err);
        } else {
            let users = [...JSON.parse(data)];
            console.log(users[i].friends);
        }})
}

// getFriends(1)

const postUser = (name, age, eyeColor) => {
    fs.readFile('users.json', function(err, data){
        if (err){
            console.log(err);
        } else {
            let users = [...JSON.parse(data)];
            const user = {
                "index": users.length,
                "age": age,
                "eyeColor": eyeColor,
                "name": name
            };
            users.push(user);
        
            const data2 = JSON.stringify(users, null, 2);
            fs.writeFile('users.json', data2, function(){
                console.log('Added new user');
            })
        }
    })   
    // console.log(getUsers());
}

// postUser("Alice Um", "18", "green")

const postNewFriend = (index, name) => {
    fs.readFile('users.json', function(err, data){
        if (err){
            console.log(err);
        } else {
            let users = [...JSON.parse(data)];
            if (!users[index]["friends"]){
                users[index]["friends"] = [];
            }
            const newFriend = {
                "id": users[index].friends.length,
                "name": name
            };
            users[index].friends.push(newFriend);
            const data2 = JSON.stringify(users, null, 2);
            fs.writeFile('users.json', data2, function(){
                // console.log('Added new user');
            })
        }
    })   
    // console.log(getUsers());
}

postNewFriend(10, "Mad Hatter")
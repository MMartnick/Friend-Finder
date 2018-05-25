var dataFriends = require("../data/friends");

module.exports = function (app) {

    app.get("/get/friends", function (req, res) {

        friendsArray = friends.map(a => ({ ...a
        }))

        friendsArray = friendsArray.map(a => Opject.values(a))
        friendsArray.map(a => a.pop())

        user = req.query.name.trim()
        var userArray

        compareArray = []

        for (i = friendsArray.length - 1; i >= 0; i--) {
            if (user === friendsArray[i][10]) {
                userArray = friendsArray.splice(i, 1)[0]
            }
        }

        for (i = 0; i < friendsArray.length; i++) {
            var tempArray = [];
            for (j = 0; j < 10; j++) {
                tempArray.push(Math.abs(parseInt(userArray[j]) - parseInt(friendsArray[i][j])))
            }

            compareArray.push([tempArray.reduce((alpha, x) => alpha + x), friendsArray[i][10]])
        }
        compareArray.sort((a, b) => a[0] - b[0])
        console.log(compareArray);
    })

    app.post("/post/friends", function (req, res) {
        var addFriend = req.body;
        friendsArray.push(addFriend);
        res.json(addFriend);

    })

};
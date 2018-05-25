// Create New Friends - takes in JSON input


app.get("/find/friend", function(req,res){
    // Deep Clone of Data
    arrFriendsClone= arrFriends.map(a => ({...a}))
    // Change Nested Objects to Nested Arrays
    arrFriendsClone= arrFriendsClone.map(a=>Object.values(a))
    arrFriendsClone.map(a=>a.pop())

    userName= req.query.Wholename.trim()
    var arrUser
    compArr=[]

    for (i = arrFriends.length-1; i >=0 ; i--) {
      if (userName === arrFriendsClone[i][10]) {
        arrUser= arrFriendsClone.splice(i,1)[0]
      }
    }
    for ( i = 0;i < arrFriendsClone.length; i++){
      var tempArr=[];
        for (j = 0; j<10 ; j++){
        
          tempArr.push(Math.abs(parseInt(arrUser[j])-parseInt(arrFriendsClone[i][j])))
        }

        compArr.push([tempArr.reduce((acc,x)=>acc+x),arrFriendsClone[i][10]])
    }
  compArr.sort((a,b)=>a[0]-b[0])
  console.log(compArr)
})

app.post("/send/friend", function(req, res) {
    var newfriend = req.body;
    arrFriends.push(newfriend);
    res.json(newfriend);
  });

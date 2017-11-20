var users =[
 {
    "name":"Kim Jong Un",
    "photo":"http://i0.kym-cdn.com/photos/images/original/001/121/975/43b.jpg",
    "scores":[
        5,
        1,
        4
      ]
  },
  {
    "name":"Neo",
    "photo":"https://i.ytimg.com/vi/8PVeLqWnaXk/maxresdefault.jpg",
    "scores":[
        2,
        2,
        4
      ]
  },
  {
    "name":"XZIBIT",
    "photo":"http://img2-ak.lst.fm/i/u/arO/2a6031c9d53d48fda501d84bac7089ff",
    "scores":[
        5,
        4,
        2
      ]
  },
  {
    "name":"Deez Nutz",
    "photo":"https://i.ytimg.com/vi/R2ZwuP4HrK0/hqdefault.jpg",
    "scores":[
        3,
        3,
        4
      ]
  }
]

  
  var pushUser = function (x){
      users.push(x);
  }

  module.exports = {users:users, pushUser:pushUser};
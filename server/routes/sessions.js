var sessions = [
    {id:0 , title:"Introduction to Ionic", speaker:"CHRISTOPHE COENRAETS", time:"9:40am", room:"Ballroom A", description: "In this session, you'll learn how to build a native-like mobile application using the Ionic Framework, AngularJS, and Cordova."},
    {id:1 , title:"AngularJS in 50 Minutes", speaker:"LISA SMITH", time:"10:10am", room:"Ballroom B", description: "In this session, you'll learn everything you need to know to start building next-gen JavaScript applications using AngularJS."},
    {id:2 , title:"Contributing to Apache Cordova", speaker:"JOHN SMITH", time:"11:10am", room:"Ballroom A", description: "In this session, John will tell you all you need to know to start contributing to Apache Cordova and become an Open Source Rock Star."},
    {id:3 , title:"Mobile Performance Techniques", speaker:"JESSICA WONG", time:"3:10Pm", room:"Ballroom B", description: "In this session, you will learn performance techniques to speed up your mobile application."},
    {id:4 , title:"Building Modular Applications", speaker:"LAURA TAYLOR", time:"2:00pm", room:"Ballroom A", description: "Join Laura to learn different approaches to build modular JavaScript applications."},
    {id:5 , title:"Do Androids Dream of Electric Sheep?", speaker:"Philip K. Dick ", time:"2:00pm", room:"Ballroom C", description: "This was published in 1968. Grim and foreboding, even today it is a masterpiece ahead of its time."},
    {id:6 , title:"Something Wicked This Way Comes", speaker:"Ray Bradbury", time:"4:00pm", room:"Ballroom A", description: "A carnival rolls in sometime after the midnight hour on a chill Midwestern October eve, ushering in Halloween a week before its time."},
    {id:7 , title:"Pride and Prejudice and Zombies", speaker:"Seth Grahame-Smith", time:"5:00pm", room:"Ballroom B", description: "So begins Pride and Prejudice and Zombies, an expanded edition of the beloved Jane Austen novel featuring all-new scenes of bone-crunching zombie mayhem."}
];

exports.findAll = function (req, res, next) {
    res.send(sessions);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(sessions[id]);
};
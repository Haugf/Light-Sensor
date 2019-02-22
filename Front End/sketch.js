//Frederick Haug
//Feb 22, 2019
//GOAL: Send data from Particle Electron to Firebase Relational Database and display that data with JavaScript

/*DISCLAIMER */
//This code is all based off of the work of John Kuiphoff
//After about 4 hours I was able to recreate his video in 2019

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCveCQQwLdDu-6kgcEKRgYYlAeHOTapJps",
    authDomain: "particlefirebasetest.firebaseapp.com",
    databaseURL: "https://particlefirebasetest.firebaseio.com",
    projectId: "particlefirebasetest",
    storageBucket: "particlefirebasetest.appspot.com",
    messagingSenderId: "685726503481"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  var counter = 0;
  
  function setup() {
      createCanvas(1440, 900);
      background(255);
  }
  
  function draw() {
      // do nothing
  }
  
  database.ref('particleFB').limitToLast(80).on('child_added', function(snapshot)
  {
      var data = snapshot.val();
      var normalizedLight = map(data.light, 0, 800, 0, 255);
      print(normalizedLight);
      
      // draw a graph
      noStroke();
      fill(normalizedLight);
      rect(counter * 5, 0, 5, height);
      
      fill(255);
      ellipse(width/2, height/2, 200, 200);
      
      fill(normalizedLight);
      textSize(72);
      textAlign(CENTER);
      text(data.light, width/2, height/2);
      
      if(counter < 160)
      {    
          counter++;
      } else {
          background(255);
          counter = 0;
      }
      
  })
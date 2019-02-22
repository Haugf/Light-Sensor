//Frederick Haug
//Feb 22, 2019
//GOAL: Send data from Particle Electron to Firebase Relational Database and display that data with JavaScript

/*DISCLAIMER */
//This code is all based off of the work of John Kuiphoff
//After about 4 hours I was able to recreate his video in 2019


int photoResistor = A0;
int power = A5;

void setup() {
    pinMode(photoResistor,INPUT);
    pinMode(power,OUTPUT);
    digitalWrite(power,HIGH);
}

void loop() {
    int lightValue = analogRead(photoResistor);
    Particle.publish("light", String(lightValue));
    delay(2000); //2 second delay
}
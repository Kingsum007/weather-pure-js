//https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=c42bfed6b117803c71404df773a9a4ed

const apiKey = "c42bfed6b117803c71404df773a9a4ed";

document.getElementById("btnSearch").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();
  if (city) {
    getWeather(city);
  } else {
    alert("Please Enter City Name");
  }
});

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not Found");
    const data = await res.json();
    showWeather(data);
  } catch (error) {
    document.getElementById(
      "output"
    ).innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
function showWeather(data) {
  const weatherInfo = document.getElementById("output");
  //please convert the number from sunrise and sunset to time also the Fahrenheit to Celcius
  weatherInfo.innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <h4>Lat: ${data.coord.lat}</h4>
        <h4>Sunrise ${data.sys.sunrise}</h4>
        <img src="https://openweathermap.org/img/wn/${
          data.weather[0].icon
        }@2x.png" alt="Weather Icon" />
        <div class="temp">Temprature: ${Math.round(data.main.temp)}F</div>
        <div class="desc" >Decription: ${data.weather[0].description}</div>
        <div >Wind Speed: ${data.wind.speed}</div>
    `;
}



//OOP - Object Oriented Programming برنامه نویسی شی گرا 
//Concept programming => Simple, Maintainable, Further Development 
// Everything is Object
// Object => Property (ویژه‌گی ها), Method  (رفتار ها یا کارکرد)
// Class, Object, Polymorphism, Encapsulation, Inheritance, Abstraction
// Code Reuasability
// Person (Color, Height, Name, Weight....)
// Animal ( Color, Height, Name, Weight...)
// Class is the Blueprint, Object is the Instance

//example car

// class Car {
//     constructor(color, model)
//     {
//       this.color=color; //Property
//       this.model=model;
//     }
//     // constructor(color,model,manfucturer)
//     // {
//     //   this.model = model;
//     //   this.color = color;
//     //   this.manfucturer = manfucturer;
//     // }
//   start()
//   {
//     console.log("The Car started");
//   }
//   stop (){
//     console.log("The Car Stopped");
//   }
// }

// let myCar = new Car("White","BMW");
// let myCar1 = new Car("Black","AUDI A1");

// console.log("Method :", myCar1.start());

// Exampl Person

class Person {
  constructor( name,age)
  {
this.name = name;
this.age = age;
  }
  greet()
  {
    console.log(`Hello My Name is: ${this.name} and I have ${this.age} years age`);
  }
}
class African extends Person {

}

let p1 = new Person("Ahmad",28);
p1.greet();

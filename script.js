let image = 0;

let imageArr = ["https://www.abendzeitung-muenchen.de/media.media.080bd87f-70e3-41ef-bad0-ee8e8fb1ac63.normalized.jpg","https://imgr1.auto-motor-und-sport.de/Porsche-Cayenne-E-Hybrid-2018-169FullWidth-ea8ce94-1164219.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bright_red_tomato_and_cross_section02.jpg/800px-Bright_red_tomato_and_cross_section02.jpg","https://www.cremundo.de/magazin/wp-content/uploads/2018/01/nespresso-erfolgsstory.jpg"];

document.getElementById("active-image").classList.add("pos");

function next() {

      
    if(image < imageArr.length-1) {
    image += 1;
    document.getElementById(image-1).style.backgroundColor = "rgb(221, 221, 221)";
    document.getElementById(image).style.backgroundColor = "black";
    }
    else {
        image = 0;
        document.getElementById(imageArr.length-1).style.backgroundColor = "rgb(221, 221, 221)";
        document.getElementById(image).style.backgroundColor = "black";
    }

moveSlider();

}

function moveSlider() {
    let sliderPosition = image * -500;



    const sheet = (function() {
        var style = document.createElement("style");  
        style.appendChild(document.createTextNode(""));
        document.head.appendChild(style);
      
        return style.sheet;
      })();
    
   



      console.log(sliderPosition);
      sheet.insertRule(`.pos {transform: translateY(${sliderPosition}px); transition: all 2s;}`);
};


function previous() {

    if(image > 0) {
        image -= 1;
        document.getElementById(image+1).style.backgroundColor = "rgb(221, 221, 221)";
        document.getElementById(image).style.backgroundColor = "black";
        }
        else {
            image = imageArr.length-1;
            document.getElementById(0).style.backgroundColor = "rgb(221, 221, 221)";
            document.getElementById(image).style.backgroundColor = "black";

        }
   
        moveSlider();
        // let sliderPosition = image * -500;


        // const sheet = (function() {
        //     var style = document.createElement("style");  
        //     style.appendChild(document.createTextNode(""));
        //     document.head.appendChild(style);
          
        //     return style.sheet;
        //   })();

    
        //   console.log(sliderPosition);
        //   sheet.insertRule(`.pos {transform: translateY(${sliderPosition}px); transition: all 2s;}`);

        // document.getElementById("active-image").classList.add("pos");

        // sheet.insertRule(`.pos {transform: translateY(500px); transition: all 2s;}`);




}

let activeImage = document.getElementById("active-image");
let circleNav = document.getElementById("circle-nav");

imageArr.forEach((el, index) => {
    let newListItem = document.createElement("div");
    newListItem.setAttribute("class", "individual-image");
    newListItem.innerHTML = `<img src="${el}">`;
    activeImage.append(newListItem);

    let newCircle = document.createElement("span");
    newCircle.setAttribute("class", "dot");
    newCircle.setAttribute("id", `${index}`)
    
    
    newCircle.addEventListener("click", function(ev) {
        document.getElementById(image).style.backgroundColor = "rgb(221, 221, 221)";
        
        image = index;

        document.getElementById(image).style.backgroundColor = "black";

        moveSlider();

    })
    
    circleNav.append(newCircle);


})


let sliderInterval = setInterval(function(){ next(); }, 5000);

window.onclick = function() {

    clearInterval(sliderInterval);
    sliderInterval = setInterval(function(){ next(); }, 5000);

}








// let activeImage = document.getElementById("active-image");

// let imageArr = ["https://www.abendzeitung-muenchen.de/media.media.080bd87f-70e3-41ef-bad0-ee8e8fb1ac63.normalized.jpg","https://imgr1.auto-motor-und-sport.de/Porsche-Cayenne-E-Hybrid-2018-169FullWidth-ea8ce94-1164219.jpg"];

// let newListItem = document.createElement("img");

// newListItem.setAttribute("src",`${imageArr[0]}`);

// activeImage.append(newListItem);

// let newListItem2 = document.createElement("img");

// newListItem2.setAttribute("src",`${imageArr[1]}`);

// activeImage.append(newListItem2);
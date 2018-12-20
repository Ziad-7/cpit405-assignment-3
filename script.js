
// Step 1: Images data
var images = [
    {
        name: "FireWorks",
        likes: 20,
        views: 37,
        dateUploaded: '10 December 2018',
        src: "images/1.jpg"
    },
    {
        name: "Camels",
        likes: 25,
        views: 28,
        dateUploaded: '19 December 2018',
        src: "images/2.jpg"
    },
    {
        name: "Lights",
        likes: 45,
        views: 65,
        dateUploaded: '20 April 2018',
        src: "images/3.jpg"
    },
    {
        name: "Sign",
        likes: 15,
        views: 18,
        dateUploaded: '27 September 2018',
        src: "images/4.jpg"
    },
    {
        name: "skyscrapers",
        likes: 33,
        views: 46,
        dateUploaded: '6 December 2018',
        src: "images/5.jpg"
    },
    {
        name: "Road",
        likes: 20,
        views: 100,
        dateUploaded: '19 December 2018',
        src: "images/6.jpg"
    },
    {
        name: "Bulbs",
        likes: 34,
        views: 48,
        dateUploaded: '6 December 2018',
        src: "images/7.jpg"
    },
    {
        name: "Reflection",
        likes: 28,
        views: 60,
        dateUploaded: '1 December 2018',
        src: "images/8.jpg"
    }

]
// Step 2: Generate the HTML Page using the DOM API

// use the DOM API
   createDomElem();

// Step 3: Handle mouse events
// When the user changes the drop down menu item, do:
var dropList = document.getElementById("sort");


// 1. Sort your array (images) by the selected key
function sortElements() {
   if(dropList.value != "none"){
    if(dropList.value == "name")
    images.sort(name);

    if(dropList.value == "likes")
    images.sort(likes);

    if(dropList.value == "views")
    images.sort(views);

    if(dropList.value == "recent"){
    images.sort(dates);
    }

   reCreateDomElem();
   }
}

  function name(a, b) {
    var nameA = a.name.toLowerCase()
    var nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
}

  function likes(a,b) {
    if (a.likes < b.likes)
      return 1;
    if (a.likes > b.likes)
      return -1;
    return 0;
  }
  function views(a,b) {
    if (a.views < b.views)
      return 1;
    if (a.views > b.views)
      return -1;
    return 0;
  }
  
  function dates(a, b) {
    var dateA = new Date(a.dateUploaded);
    var dateB = new Date(b.dateUploaded);
    return dateB - dateA;
  }

// 2. Regenerate your HTML elements using the new sorted array
function createDomElem(){

    var ulElement = document.getElementById("my-list");
        
    for(var i=0; i<images.length; i++){

        var liElement1=document.createElement("li");
        var imageElemnt = document.createElement("IMG");
        imageElemnt.src = images[i].src;
        
        liElement1.appendChild(imageElemnt);
        ulElement.appendChild(liElement1);
    }
}
function reCreateDomElem(){

    var ulElement = document.getElementById("my-list");
        
    for(var i=0; i<images.length; i++){

        var liElement1=document.createElement("li");
        var imageElemnt = document.createElement("IMG");
        imageElemnt.src = images[i].src;
        
        liElement1.appendChild(imageElemnt);
        ulElement.replaceChild(liElement1, ulElement.children[i]);
    }
    console.log("1111");
}
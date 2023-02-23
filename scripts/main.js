function setUserName(){
    const new_name = prompt("Please enter your name");
    //check if new name is empty
    if(!new_name){
        setUserName();
    }
    else{
        localStorage.setItem("name", new_name);
        myHeading.textContent = `COSC 302/307, ${new_name}`;
    }
    
}

//variables
const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");
myHeading.textContent = "COSC 302/307";

// set name based on local storage status
if (!localStorage.getItem("name")){
    setUserName();
}
else{
    const stored_name = localStorage.getItem("name");
    myHeading.textContent = `COSC 302/307, ${stored_name}`;
}

//set onclick for changing the user
myButton.onclick = () => {
    setUserName();
};

const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "../assets/images/Susremaster.webp"){
        myImage.setAttribute("src", "../assets/images/me.jpg");
    }
    else{
        myImage.setAttribute("src", "../assets/images/Susremaster.webp");
    }
}
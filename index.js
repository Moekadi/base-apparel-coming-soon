window.onload = function(){
    //so this will get the img tage by the ID  and display the image
    document.getElementById('logo').src="./assets/logo.svg"
    

    //main content
    let commingSoonTitle = "WE'RE<br> COMING<br>SOON";
    let about ="Hello fellow shoppers! We're currently building our new fashion<br> store. Add your email below to stay up-to-date with<br> announcements and our launch deals."
    document.getElementById("coming-soon-title").innerHTML = commingSoonTitle;
    document.getElementById("about").innerHTML = about;
    document.getElementById("hero-image").src="./assets/hero-desktop.jpg";


}
$(document).ready(function(){

$("#first_one").click(function(){
    $(".modal-body").text("Implementing the map proved to be demanding but I got it to work after a few adjustments. I\'m proud that it searches for you the closest observatories near your location incase you ever wanted to look at the stars yourself. This site taught me more about implementing responsive elements to create a comfortable user experience across viewport sizes.");
    $(".clsBtn").text("I Love Space!");
});

$("#second_one").click(function(){
    $(".modal-body").text("This was my first full responsive project; learning to design and position certain elements was crucial. However, The most challenging parts of this project was implementing the slideshow into one of my app tabs. Also adjusting properties to have the perfect CSS animations as you first load up the page. Finally, I learned that compressing large images for the web really helped to boost performance for mobile devices.");
    $(".clsBtn").text("Responsive Design <3");
});

$("#third_one").click(function(){
    $(".modal-body").text("The App design itself wasn't too difficult. It was learning how to use AJAX and call temperature data from another source that was a pain. Eventually I figured out the syntax and was able to get not only IP location from an API but send that to the weather API and get customized weather data for the users. The rest is just simple changes in color and background to reflect the temperature outside.");
    $(".clsBtn").text("Look Outside Instead!");
});

$("#fourth_one").click(function(){
    $(".modal-body").text("Another attempt at using AJAX to call a quote API. The challenge in this App actually was synchronising the random colors on the different elements. I knew that the colors were going to be random, but I wanted the elements to be the same color regardless of what random number I got. Also, the quotes are randomly selected as well.");
    $(".clsBtn").text("We all need help sometimes.");
});

$("#fifth_one").click(function(){
    $(".modal-body").text("Learning to use the Twitch API was rather difficult. They have certain rules you have to abide by to be able to use it. Which makes sense considering they hold sensitive data. Aquiring and sending the required information held me back for quite some time. But I was able to figure it out and now I have an app that tells me when my favorite streamers are online!");
    $(".clsBtn").text("Do you watch Twitch?");
});

$("#sixth_one").click(function(){
    $(".modal-body").text("Finding and entering the specific key code of each key press was tedious and not even the hardest part. The keypress plugin I get from jQuery fires repeatedly after a key is held down after sometime. I had to figure out a way to prevent that from happening so that the background would solidly stay white as long as I held the key. Instead of flickering back and forth. I was able to program a way around the default behavior of the keypress and now it works as planned.");
    $(".clsBtn").text("Coming for Firefox and IE soon...");
});

$("#seventh_one").click(function(){
    $(".modal-body").text("At first I tried designing from a desktop first approach. That did not work as I ran into format issue into format issue. So I scrapped it and started from the bottom up. Mobile first design. And I tell you, it's the best decision ever. I used flex box on some items to experiment with it. And I slightly up-sized the font on certain break points to make the text easy to read for users. I really kept in mind mobile devices all the way as I designed this site.");
    $(".clsBtn").text("Mission Complete!");  
});

});

var searchBox = document.getElementById("search_box");
var searchButton = document.getElementById("search_button");

 
searchButton.addEventListener("click", function() 
{
  redirectToPage();
}
);
 
searchBox.addEventListener("keypress", function(event) {
 
    if (event.key === 'Enter') {
 
        event.preventDefault();
 
        redirectToPage();
    }
}
);

 
function redirectToPage() {
  
    var searchText = searchBox.value.toLowerCase();
    
 
    if (searchText === "food") 
    {
        window.location.href = "#food_map";
    } 
    else if (searchText === "healthcare") 
    {
        window.location.href = "#healthcare_map";
    } 
    else if (searchText === "education") 
    {
        window.location.href = "https://www.baidu.com";
    } 
    else 
    {
        alert("Please type 'food', 'healthcare', or 'education' in the search box.");
    }
}
$(document).ready(function() { 
$("#search-button").on("click", function(){
    let searchValue = $("#search-value").val()
    weatherApi(searchValue)
})
    // var date = moment().format('MMMM Do YYYY');
    function weatherApi(searchValue){
        $.ajax({
            type: "GET", 
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=2ff2dd415875a1faba755e2921d80210&units=imperial",
            dataType: "json"
        }).then(function(response){
            console.log(response)
        })
    }


    // $("#search-button").on("click", function(){
    //     searchValue  = $("#search-value").val()
    //     searchWeather(searchValue);
    //     searchHistory.push(searchValue);
    //     localStorage.setItem("search",JSON.stringify(searchHistory));
    //     renderSearchHistory();
          
    // })
    
    // $("#clear-history").on("click",function() {
    //     searchHistory = [];
    //     renderSearchHistory();
    //     localStorage.clear();
    // })

})

let getBox = document.querySelector("#box");

let checkWeather = () => {
    let getSearch = document.querySelector("#search");

    fetch(`https://api.openweathermap.org/data/2.5/weather?&q=${getSearch.value}&units=metric&appid=2f567e77a9babdb9ef54f8faa085c865`)
    .then(data => data.json())
    .then(data => {
        console.log(data);
        
      getBox.innerHTML = `
        <div class="card" style="width: 18rem;">
  <img src="https://plus.unsplash.com/premium_photo-1677593850639-9f1e14e4524b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlciUyMGZvcmVjYXN0fGVufDB8fDB8fHww" class="card-img-top" alt="...">
  <div class="card-body">
  <br> 
    <h5 class="card-title"><b>${data.name}</b></h5>
    <hr>
    <p class="card-text"><strong>Temperature: </strong> ${data.main.temp}</p>
    <p class="card-text"><strong>Wind: </strong> ${data.main.feels_like}</p>
    <p class="card-text"><strong>Humidity: </strong> ${data.main.humidity}</p>
    
  </div>
</div>
      `
})
.catch(error => console.log(error))
getSearch.value = '';
}
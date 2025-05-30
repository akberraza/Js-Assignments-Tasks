var gatproduct = document.querySelector("#card-container");

var products = [
    {
        p_id: "01",
        p_Name: "Samsung Galxy s24 ultra",
        p_price: "40000",
        p_img: "https://images.samsung.com/is/image/samsung/p6pim/pk/sm-s928bztcpkd/gallery/pk-galaxy-s24-s928-489293-sm-s928bztcpkd-thumb-539796755"
    },

    {
        p_id: "02",
        p_Name: "TCL LED",
        p_price: "1000",
        p_img: "https://subhanelectronics.pk/wp-content/uploads/2024/06/Tcl-43-Inch-L5A-Smart-Android-TV-1.webp"
    },

    {
        p_id: "03",
        p_Name: "Buggit",
        p_price: "10000000",
        p_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRej5J5_xNSs9qoCDWFVG_WtPHXJtkFWtw71Q&s"
    }
]

for(var i = 0; i < products.length; i++){
    var getItem = products[i]
    gatproduct.innerHTML += `
    <div class="card" style="width: 18rem;">
  <img src="${getItem.p_img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${getItem.p_id}</h5>
    <p class="card-text">${getItem.p_Name}</p>
    <p class="card-text">${getItem.p_price}</p>
  </div>
</div>
    ` 
}
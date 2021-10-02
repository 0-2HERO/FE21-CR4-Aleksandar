

var movies2 = JSON.parse(movies);
console.table(movies2);

var button = 0;
for (let val of movies2) {



    document.getElementById("moviesect").innerHTML += `
    <div class="card m-1 mt-5 mb-5 text-light" style="max-width: 400px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${val.img}" class="img-fluid rounded-start w-100" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${val.title}</h5>
          <p class="card-text">${val.description}</p>
          <button class="btn-success rounded border-0" onclick="btnlikes();">Like</button>
        <input class="text-white" type="text" id="output" value="${val.likes}"> </input>


    
         
        </div>
      </div>
    </div>
  </div>
     `



    var i = 0;
    function btnlikes() {
        i++;
        document.getElementById("output").value = i;
    }




}







/* couldnt solve this  */

// var x = document.getElementsByid("likes");
// var x = document.getElementById("btns").value;
// var button = document.getElementsByClassName("likes");
// let count = x.innerHTML;
// button.addEventListener("click", function () {
//     count++;
//     likes.innerHTML = count;
// })




let x = JSON.parse(movies);
console.table(typeof (x));

const output = document.getElementById("moviesect")

for (val of x) {



  output.innerHTML += `
    <div class="card m-1 mt-5 mb-5 text-light" style="max-width: 400px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${val.img}" class="img-fluid rounded-start w-100" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${val.title}</h5>
          <p class="card-text">${val.description}</p>
          <button class ="btn btn-primary myBtn" id="btn"><img src="../Images/like.png" style="width: 1rem; height:1rem; alt=""> Like</button> 
     <span class="ms-4 likes " id="likes">  ${val.likes} likes </span>


    
         
        </div>
      </div>
    </div>
  </div>
     `

};

var button = document.getElementsByClassName("myBtn");
var likes = document.getElementsByClassName("likes");
var count = likes.innerHTML;

for (let i in button) {
  button[i].addEventListener("click", function () {
    x[i].likes++;
    likes[i].innerHTML = `${x[i].likes}`
  })
}






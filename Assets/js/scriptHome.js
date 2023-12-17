const key =
"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTdmMjIwMDhhZDJmMjAwMTg1ZjNkMTMiLCJpYXQiOjE3MDI4MzA1OTIsImV4cCI6MTcwNDA0MDE5Mn0.eBEB9lYVrMcbIQA0cg-2zupz38b8WYvGZLd4kUli2dw";
const url = "https://striveschool-api.herokuapp.com/api/product/";

function createIndex(obj) {
    obj.forEach((product) => {
      document.querySelector("#content").innerHTML += `
      <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3 my-2">
            <div class="card">
                <img src="${product.img}" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text badge rounded-pill bg-dark mb-2">${product.brand}</p>
                    <p class="fs-4">${product.price} &euro; </p>
                    <div class="d-flex">
                        <a href="#" class="btn btn-danger">Compra Ora</a>
                        <a href="#" class="btn btn-outline-danger ms-1">Scarta</a>
                    </div>
                </div>
            </div>
        </div>`
      ;
    });
  }
 function readProduct() {
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: key,
      },
    })
      .then((response) => response.json())
      .then((obj) => {
        console.log(obj);
        createIndex(obj);
      })
     .catch((error) => console.log("Error: " + error));
  }
  readProduct();


/* 
async function resetProduct() {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/product/0",
      {
        method: "DELETE",
        headers: {
          Authorization: key,
        },
      }
    );

    const obj = await response.json();
    console.log(obj);
    createIndex(obj);
  } catch (error) {
    console.log("Error!! " + error);
  }
}
  resetProduct(); */
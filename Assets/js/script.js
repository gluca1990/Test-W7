
/* costruttore Classe Phone*/
class Phone {
    constructor(name, description, brand, imageUrl, price) {
      this.productName= name;
      this.description = description || '';
      this.brand = brand;
      this.imageurl = imageUrl || '';
      this.price = price;
      this.id = '';
      this.userId = '';
      this.createdAt = '';
      this.updatedAt = '';
      this.__v = 0;
    }
  };


let productList = []
const nokia3310 = new Phone('Nokia 3310','Indestructible phone','Nokia','#',400)
productList.push(nokia3310)

const galaxyS20 = new Phone('Galaxy S20','Incredible phone','Samsung','#',700)
productList.push(galaxyS20)




  
  function validateForm() {
    
    document.querySelector("#btn").addEventListener("click", (e) => {
      
      if (
        document.querySelector("#product-name").value.trim().length >= 2 &&
        document.querySelector("#product-brand").value.trim().length >= 2 &&
        parseInt(document.querySelector("#product-price").value) >= 2 &&
        document.querySelector("#product-description").value.trim().length >=
          2 &&
        document.querySelector("#product-img").value.trim().length >= 2
      ) {
        
        for (let i = 0; i < document.querySelectorAll(".p-error").length; i++) {
          document.querySelectorAll(".p-error")[i].innerText = " ";
        }
        
        declareAndAddProduct();
      } else {
       
        for (let i = 0; i < document.querySelectorAll(".p-error").length; i++) {
          document.querySelectorAll(".p-error")[i].innerText =
            "ATTENZIONE: il valore non è valido.";
        }
      }
      e.preventDefault();
    });
  }
  
  validateForm();
  const key =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTdmMjIwMDhhZDJmMjAwMTg1ZjNkMTMiLCJpYXQiOjE3MDI4MzA1OTIsImV4cCI6MTcwNDA0MDE5Mn0.eBEB9lYVrMcbIQA0cg-2zupz38b8WYvGZLd4kUli2dw";
  const url = "https://striveschool-api.herokuapp.com/api/product/";
  const type = "application/json";

  function sendProduct(product) {
    console.log(product);
    fetch(url, {
      headers: {
        "Content-Type": type, 
        Authorization: key,
      },
      
      method: "POST", 
      body: JSON.stringify(product), 
    });
  }
  
  function declareAndAddProduct() {
    let product = {
      name: document.querySelector("#product-name").value.trim(),
      brand: document.querySelector("#product-brand").value.trim(),
      imageUrl: document.querySelector("#product-img").value.trim(),
      price: parseInt(document.querySelector("#product-price").value),
      description: document.querySelector("#product-description").value.trim(),
    };
    sendProduct(product);
    console.log(product);
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
      })
      .catch((error) => console.log("Error!! " + error));
  }
  readProduct();


const cacheKey = "NUMBER";
       if (typeof(Storage) !== "undefined") {
           if (sessionStorage.getItem(cacheKey) === "undefined") {
               sessionStorage.setItem(cacheKey, 0);
           }
 
           const button = document.querySelector("#button");
           const count = document.querySelector("#count");
           button.addEventListener('click', function(event) {
               let number = sessionStorage.getItem(cacheKey);
               number++;
               sessionStorage.setItem(cacheKey, number);
               count.innerText = sessionStorage.getItem(cacheKey);
           })
       } else {
           alert("Browser tidak mendukung Web Storage")
       }

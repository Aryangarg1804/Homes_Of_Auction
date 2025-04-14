let but = document.getElementById("flexSwitchCheckChecked2")
let ans=true;
but.addEventListener("click", () => {
    if (ans){
        alert("Now you get updated when auction is about to end");
        ans=false;
    }
    else{
        alert("You removed your marked house");
        ans=true;
    }
});

function goto(page,scroll) {
    window.location.href = `${page}#${scroll}`;
    }
   document.getElementById("drag1").addEventListener('click' ,function(){
   goto("../online_auction_platform.html", "recomended-properties_in_another_page");
   }); 



const targetDate = new Date("2025-04-01T01:19:55").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;
  if (distance < 0) {
    return;
  }
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("innerTimer").innerHTML = `
      <div class="row text-center" id="innerTimer">
            <div class="col px-1 px-sm-3">
                <div class="row">
                    <div class="col-12 fs-4 text-primary card-text" style="font-weight: 400;">
                        ${days}
                    </div>
                    <div class="col-12 text-body-secondary card-text">
                        Days
                    </div>
                </div>
            </div>
            <div class="col px-1">
                <span class="fw-bold fs-4">:</span>
            </div>
            <div class="col px-1 px-sm-3">
                <div class="row">
                    <div class="col-12 fs-4 text-primary card-text"  style="font-weight: 400;">
                        ${hours}
                    </div>
                    <div class="col-12 text-body-secondary card-text">
                        Hours
                    </div>
                </div>
            </div>
            <div class="col px-1">
                <span class="fw-bold fs-4">:</span>
            </div>
            <div class="col px-1 px-sm-3">
                <div class="row">
                    <div class="col-12 fs-4 text-primary card-text"  style="font-weight: 400;">
                    ${minutes}
                    </div>
                    <div class="col-12 text-body-secondary card-text">
                        Mins
                    </div>
                </div>
            </div>
            <div class="col px-1">
                <span class="fw-bold fs-4">:</span>
            </div>
            <div class="col px-1 px-sm-3">
                <div class="row">
                    <div class="col-12 fs-4 text-primary card-text"  style="font-weight: 400;">
                        ${seconds}
                    </div>
                    <div class="col-12 text-body-secondary card-text">
                        Secs
                    </div>
                </div>
            </div>
        </div>

     `;
},1000);


let incre = document.getElementById("increment");
let decre = document.getElementById("decrement");
let price = document.getElementById("price_of_bid");

decre.setAttribute("disabled","disabled")

incre.addEventListener("click", () => {
    let valuecount = price.value;
    
    valuecount = parseInt(valuecount);
    valuecount+=2500;

    price.value = valuecount;
    if (valuecount > 90000){
        decre.removeAttribute("disabled")
        decre.classList.remove("disabled");
    }
    if (valuecount >130000){
        alert("Warning: You are approaching the maximum bid limit. Please review your bid to avoid overbidding.");
    }
})

decre.addEventListener("click", () => {
    let valuecount = price.value;
    
    valuecount = parseInt(valuecount);
    valuecount-=2500;
  
    price.value = valuecount;

    if (valuecount == 90000){
        decre.setAttribute("disabled","disabled");
    }
  
})

let bid = document.getElementById("Place_bid");

bid.addEventListener("click", () => {
    decre.classList.add("disabled");
    let valuecount = price.value;
    if (valuecount >130000){
        alert("You are proceeding toward an overbid. Please ensure to review your bid next time.");
        alert("Your Bid has been placed successfully");

    }
    else{
        alert("Your Bid has been placed successfully");
    }
})


let overview = document.getElementById("Overview");
let PropertyDetails = document.getElementById("PropertyDetails");
let PropertyTax = document.getElementById("PropertyTax");

overview.addEventListener("click", () => {
    overview.classList.add("active");
    PropertyDetails.classList.remove("active");
    PropertyTax.classList.remove("active");
})

PropertyDetails.addEventListener("click", () => {
    overview.classList.remove("active");
    PropertyDetails.classList.add("active");
    PropertyTax.classList.remove("active");
})

PropertyTax.addEventListener("click", () => {
    overview.classList.remove("active");
    PropertyDetails.classList.remove("active");
    PropertyTax.classList.add("active");
})


function goto(page, scroll) {
    window.location.href = `${page}#${scroll}`;
  }
document.getElementById("recomendedProperty").addEventListener("click", function () {
      
    goto("../online_auction_platform.html", "recomended-properties_in_another_page");
});
document.getElementById("LuxuryHouses").addEventListener("click", function () {
      
    goto("../online_auction_platform.html", "Luxury_houses_in_another_page");
});
document.getElementById("AffordableHouses").addEventListener("click", function () {
      
    goto("../online_auction_platform.html", "Affordable_Houses_in other_page");
});
document.getElementById("BudgetFriendlyHouses").addEventListener("click", function () {
      
    goto("../online_auction_platform.html", "Budget_friendly_Houses_in other_page");
});
// local reviews data
const reviews = [
  {
    id: 1,
    name: "Dannush",
    job: "Doli Simp",
    img:
      "dan.jpg",
    text:
      "Kallarayil⚰️Kooda Jannal Ondru Veithu.. Undhan Mugam👰🏻 Parpen Adi!. Wommaleee Yaara da Otha-ndra🤼 Kai Adi, Rasam Kudi, Dolis Varum Unai Thedi😎",
  },
  { 
    id: 2,
    name: "KathirNilavan",
    job: "Pick-Up Artist",
    img:
      "/kthab.jpg",
    text:
      "Habibi Come to Dubaii!🔥. Lets go Party With Bitches👯‍♀️.AdangaMaru AthuMeeru Doligalai👅 potu vaalvu kudu. DM for Porn Videos 👉👌",
  },
  {
    id: 3,
    name: "Kishore",
    job: "Boomer",
    img:
      "/kishore.jpg",
    text:
      "Boomer Ungle🤡!, Na Our Alien! and I'm Just Having Fun👽 PaanParak Saapdunga Frens🧡 Divyaa....Divyaaa....😚",
  },
  {
    id: 4,
    name: "Pool Sappi",
    job: "Intern Bha!",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Blow Job Expert👄, Dannush Supremacy🛐, DM for Low Budget Ool💦, Pool-uh Perusa irundha Discount Bha🍆 ",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let current = 0;


window.addEventListener("DOMContentLoaded", function(){
  ShowPer(current);
});

nextBtn.addEventListener("click", function(){
  current++;
  if(current > reviews.length - 1 ){
    current = 0;
  }
  ShowPer(current);
});

prevBtn.addEventListener("click", function(){
  current--;
  if(current < 0){
    current = reviews.length - 1;
  }
  ShowPer(current);
});

function ShowPer(person){
  const item = reviews[current];
  img.src = item.img;
  author.innerText = item.name;
  job.innerText = item.job;
  info.innerText = item.text;
} 


// local reviews data
const reviews = [
  {
    id: 1,
    name: "Dannush",
    job: "Doli Simp",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "KathirNilavan",
    job: "Pick-Up Artist",
    img:
      "/kthab.jpg",
    text:
      "Habibi Come to Dubaii!!. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Kishore",
    job: "Boomer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Boomer Ungle!, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Pool Sappi",
    job: "Intern Bha!",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
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


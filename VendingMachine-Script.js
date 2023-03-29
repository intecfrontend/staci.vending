const submit = document.getElementById("check");
const text = document.querySelector("#textBox");

const drinks = [{
  name: "lime soda",
  price: 1.5,
  code: "B1"
},
{
  name: "pineapple soda",
  price: 1.5,
  code: "B2"
},
{
  name: "cola drink",
  price: 1.5,
  code: "B3"
},
{
  name: "energy drink",
  price: 2.0,
  code: "B4"
},
{
  name: "jungle drink",
  price: 2.0,
  code: "B5"
},
]


// gets buttons to output their value to text container

document.addEventListener("DOMContentLoaded", function () {
  let textbox = document.querySelector("#textInput");
  let buttons = document.querySelectorAll(".btn");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      textbox.value += this.value;
    });
  });
});


// enables number buttons after letter button is clicked

function enabler() {
  var x = document.getElementsByClassName("number");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].disabled = false;
  }
}


// puts value's into specified strings

function getValue(event) {
  let input = document.getElementsByTagName("input")[0];
  const output = document.getElementById("textBox");

  console.log("IV", input.value);
  // .find(element=> (element.code === input.value)))
  event.preventDefault();
  $("#textInput").hide();

  let match = (drinks.find(element => (element.code === input.value)))
  console.log("match1", match.code);
  console.log("match2", match.name);

  if (input.value === match.code); console.log("match3", `${(match.name)}`);

  output.innerHTML = `You have selected: <br/> ${(match.name) + " :"}  <br/>     ${(match.price) + " euro"}`;
}
// else {
//   output.innerHTML = "Out of stock" ;
// }
// } 




// item description on hover toggle

$("#item1").hover(
  function () {
    $("#des1").show();
  },
  function () {
    $("#des1").hide();
  }
);
$("#item2").hover(
  function () {
    $("#des2").show();
  },
  function () {
    $("#des2").hide();
  }
);
$("#item3").hover(
  function () {
    $("#des3").show();
  },
  function () {
    $("#des3").hide();
  }
);
$("#item4").hover(
  function () {
    $("#des4").show();
  },
  function () {
    $("#des4").hide();
  }
);
$("#item5").hover(
  function () {
    $("#des5").show();
  },
  function () {
    $("#des5").hide();
  }
);

// reloads screen

$("#delete").click(function () {
  location.reload(true);
});

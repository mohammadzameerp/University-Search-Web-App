let url = "http://universities.hipolabs.com/search?name="; //hear the country will be atached

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let contry = document.querySelector("input").value;
  console.log(contry);

  let clgs = await getclg(contry);
  //console.log(clgs);
  show(clgs);
});

function show(clgs, contry) {
  let list = document.querySelector("#list");
  list.innerText = "";
  let len = document.querySelector("#len");
  len.innerText = `${clgs.length} university's found`;

  for (col of clgs) {
    // console.log(col.name);
    let li = document.createElement("li");
    li.innerHTML = `${col.name}<br/><br/>`;
    list.appendChild(li);
  }
}

async function getclg(contry) {
  try {
    let res = await axios.get(url + contry);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

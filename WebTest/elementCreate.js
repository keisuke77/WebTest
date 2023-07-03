
let checkButton = document.getElementById('CreateCard');
checkButton.addEventListener('click', Creates);


function Creates() {

    let names = document.getElementById('inputname');
Create(names.value);
}

function Create(name) {
const el = document.createElement("div");
//属性を追加する
el.setAttribute("class", "card drag");
//テキストを追加する


el.textContent = name;
//要素を「body」に追加する
document.body.appendChild(el);
dragSet(el);


}

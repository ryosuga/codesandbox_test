import "./styles.css";

/*
let result = 78;
if (result >= 70) {
  console.log("合格です");
  console.log("おめでとうございます");
}

let result = 68;
if (result >= 70) {
  console.log("合格です");
  console.log("おめでとうございます");
} else {
  console.log("不合格です");
  console.log("残念です。");
}

function passCheck(result) {
  if (result > 90) {
    console.log("チッ、合格だ。");
    console.log("まあ普通のことよ");
  } else if (result > 80) {
    console.log("修正しておけよカス");
  } else {
    console.log("不合格っすねー！！！");
    console.log("どんまいっす^^;");
  }
}

function passCheck(result) {
  if (result > 80) {
    if (result > 90) {
      console.log("チッ、合格だ。");
      console.log("まあ普通のことよ");
    } else {
      console.log("修正して再提出してください");
    }else{
      console.log('不合格です');
      console.log('残念でした');
    }
  }
}


let result = new Array(85, 75, 92);
let sum = 0;

for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
  sum + result[i];
}

console.log("ave = " + sum / result.length);


let result = [78, 69, 84, 50];
let fruit = ["apple", "lemon"];

let profile = ["Yamada", 24, "Tokyo", true];

let data = [];
console.log(data);

let data = [84, , 76];

console.log(data);
console.log(data[1]);


let result = [10, 42, 52];
let user = { name: "Yamada", old: 28 };

console.log(typeof result);
console.log(typeof user);

let result = [43, 22, 76];
let user = { name: "Yamada", old: 65 };

console.log(Array.isArray(result));
console.log(Array.isArray(user));
*/

let fruit = ["A", "B", "C"];
fruit.shift();

console.log(fruit);

document.getElementById("app").innerHTML = `
<h1>ja Vanilla!</h1>
<div>AAA
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

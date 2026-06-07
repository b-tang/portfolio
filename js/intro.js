let header = document.querySelector("#intro");
let anim = [
  { t: "{ }", ms: 200 },
  { t: "{_}", ms: 200 },
  { t: "{ }", ms: 200 },
  { t: "{_}", ms: 200 },
  { t: "{B_}", ms: 100 },
  { t: "{BR_}", ms: 100 },
  { t: "{BRI_}", ms: 100 },
  { t: "{BRIA_}", ms: 100 },
  { t: "{BRIAN_}", ms: 100 },
  { t: "{BRIAN__}", ms: 100 },
  { t: "{BRIAN_T_}", ms: 100 },
  { t: "{BRIAN_TA_}", ms: 100 },
  { t: "{BRIAN_TAN_}", ms: 100 },
  { t: "{BRIAN_TANG_}", ms: 100 },
  { t: "{BRIAN_TANG }", ms: 200 },
  { t: "{BRIAN_TANG_}", ms: 200 },
  { t: "{BRIAN_TANG }", ms: 200 },
  { t: "{BRIAN_TANG_}", ms: 200 },
  { t: "{BRIAN_TANG}", ms: 200 },
  { t: "{BRIAN_TANG}", ms: 200 },
];
// let anim = [
//   { t: "> _", ms: 200 },
//   { t: ">__", ms: 200 },
//   { t: "> _", ms: 200 },
//   { t: ">__", ms: 200 },
//   { t: ">B__", ms: 100 },
//   { t: ">BR__", ms: 100 },
//   { t: ">BRI__", ms: 100 },
//   { t: ">BRIA__", ms: 100 },
//   { t: ">BRIAN__", ms: 100 },
//   { t: ">BRIAN___", ms: 100 },
//   { t: ">BRIAN_T__", ms: 100 },
//   { t: ">BRIAN_TA__", ms: 100 },
//   { t: ">BRIAN_TAN__", ms: 100 },
//   { t: ">BRIAN_TANG__", ms: 100 },
//   { t: ">BRIAN_TANG _", ms: 200 },
//   { t: ">BRIAN_TANG__", ms: 200 },
//   { t: ">BRIAN_TANG _", ms: 200 },
//   { t: ">BRIAN_TANG__", ms: 200 },
//   { t: "{BRIAN_TANG}", ms: 200 },
//   { t: "{BRIAN_TANG}", ms: 200 },
// ];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
  stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
  let step = anim[i];
  header.innerText = step.t;
  i++;

  if (i < anim.length) setTimeout(update, step.ms / stepDenominator);
  else {
    header.classList.add("top");
    setTimeout(() => {
      const main = document.getElementById("main");
      main.style.opacity = 1;
      main.style.pointerEvents = "auto";
    }, 500);
    window.localStorage.stepDenominator = 2;
  }
};
update();

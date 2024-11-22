let header = document.querySelector('#intro');
// let anim = [
//     { t: "{ }", ms: 200 },
//     { t: "{_}", ms: 200 },
//     { t: "{ }", ms: 200 },
//     { t: "{_}", ms: 200 },
//     { t: "{B_}", ms: 100 },
//     { t: "{Br_}", ms: 100 },
//     { t: "{Bri_}", ms: 100 },
//     { t: "{Bria_}", ms: 100 },
//     { t: "{Brian_}", ms: 100 },
//     { t: "{Brian _}", ms: 100 },
//     { t: "{Brian T_}", ms: 100 },
//     { t: "{Brian Ta_}", ms: 100 },
//     { t: "{Brian Tan_}", ms: 100 },
//     { t: "{Brian Tang_}", ms: 100 },
//     { t: "{Brian Tang }", ms: 200 },
//     { t: "{Brian Tang_}", ms: 200 },
//     { t: "{Brian Tang }", ms: 200 },
//     { t: "{Brian Tang_}", ms: 200 },
//     { t: "{Brian Tang}", ms: 200 },
//     { t: "{Brian Tang}", ms: 200 }
// ];
let anim = [
    { t: ">", ms: 200 },
    { t: ">_", ms: 200 },
    { t: ">", ms: 200 },
    { t: ">_", ms: 200 },
    { t: ">b_", ms: 100 },
    { t: ">br_", ms: 100 },
    { t: ">bri_", ms: 100 },
    { t: ">bria_", ms: 100 },
    { t: ">brian_", ms: 100 },
    { t: ">brian_", ms: 100 },
    { t: ">brian__", ms: 100 },
    { t: ">brian_t_", ms: 100 },
    { t: ">brian_ta_", ms: 100 },
    { t: ">brian_tan_", ms: 100 },
    { t: ">brian_tang_", ms: 100 },
    { t: ">brian_tang", ms: 200 },
    { t: ">brian_tang_", ms: 200 },
    { t: ">brian_tang", ms: 200 },
    { t: ">brian_tang_", ms: 200 },
    { t: "{brian_tang}", ms: 200 },
    { t: "{brian_tang}", ms: 200 }
];

// Check if the page is being refreshed
if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    playAnimation();
} else {
    skipAnimation();
}

function playAnimation() {
    let stepDenominator = 1;
    if (window.localStorage.stepDenominator)
        stepDenominator = window.localStorage.stepDenominator;

    let i = 0;
    let update = () => {
        let step = anim[i];
        header.innerText = step.t;
        i++;

        if (i < anim.length)
            setTimeout(update, step.ms / stepDenominator);
        else {
            header.classList.add('top');
            setTimeout(() => {
                document.getElementById('main').style.opacity = 1;
                initGlobe();
            }, 500);
            window.localStorage.stepDenominator = 2;
        }
    }
    update();
}

function skipAnimation() {
    header.innerText = "{brian_tang}";
    document.getElementById('main').style.opacity = 1;
    header.classList.add('top');
    initGlobe(); // Ensure this still runs without the animation
}
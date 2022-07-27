//#region - start of - number counter animation
const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
 const target = document.querySelector(qSelector);
 let startTimestamp = null;
 const step = (timestamp) => {
  if (!startTimestamp) startTimestamp = timestamp;
  const progress = Math.min((timestamp - startTimestamp) / duration, 1);
  target.innerText = Math.floor(progress * (end - start) + start);
  if (progress < 1) {
   window.requestAnimationFrame(step);
  }
 };
 window.requestAnimationFrame(step);
};
//#endregion - end of - number counter animation

    isLoadCounter = 0;

window.onload = function() {
    const ob = new IntersectionObserver((e) => {

        if (e[0].isIntersecting > 0 && isLoadCounter == 0){
                isLoadCounter = 1;
                counterAnim("#count1", 0, 300, 1000);
                counterAnim("#count2", 0, 25, 1500);
                counterAnim("#count3", 0, 5000, 2000);
        } 
    });

    const tar = document.querySelector('.number-count');
    ob.observe(tar);

};

// MY SOLUTION

const chkBox = document.querySelector('input[type="checkbox"]')

const chkBoxes = document.querySelector('figure')

console.log(chkBoxes.children)

let boxIsChecked = chkBoxes.children
console.log(boxIsChecked)

for (let i = 0; i <= boxIsChecked.length; i++) {
  console.log(boxIsChecked[i])
}




























// WES BOS SOLUTION

//
//
// const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
//
// let lastChecked;
//
// function handleCheck(e) {
//   console.log(e)
//   console.log(this)
//   // Check if they had the shift key down
//   // AND check that they are checking it
//   let inBetween = false;
//   if (e.shiftKey && this.checked) {
//     // go ahead and do what we please
//     // loop over every single checkbox
//     checkboxes.forEach(checkbox => {
//       console.log(checkbox);
//       if (checkbox === this || checkbox === lastChecked) {
//         inBetween = !inBetween;
//         console.log('Starting to check them in between!');
//       }
//
//       if (inBetween) {
//         checkbox.checked = true;
//       }
//     });
//   }
//   lastChecked = this;
// }
//
// checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

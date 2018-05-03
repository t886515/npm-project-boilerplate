const button = document.createElement('button');
button.innerText = 'Click Me';

button.onclick = () => {
  //part of es2016 - would take some times
  //this returns a promise
  System.import('./image-viewer/image-viewer.js').then(module => {
    //this import the defult image viewer funciton. Note that this doesn't have to be a function to
    //work. It's really just for easier to understand what's going on.
    console.log(module.default());
  });
};

document.body.appendChild(button);

// import sum from './sum.js';
// //why this? beacause we just simply needs these code to RUN, don't need to get anything from there
// //for further implementation.
// import './image-viewer/image-viewer.js';
//
// const x = () => {
//   console.log(sum(1, 2));
// };
//
// x();

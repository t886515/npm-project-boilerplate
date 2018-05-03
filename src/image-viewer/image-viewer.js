import HomeIcon from '../../assets/home.png';
// import BlackWhite from '../../assets/black-white.jpg';
import './image-viewer.css';

// const image = document.createElement('img');
//
// image.src = HomeIcon;
//
// document.body.appendChild(image);

// const bigImage = document.createElement('img');
//
// image.src = BlackWhite;
//
// document.body.appendChild(bigImage);

export default () => {
  const image = document.createElement('img');

  image.src = HomeIcon;

  document.body.appendChild(image);
};

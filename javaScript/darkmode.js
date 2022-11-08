
const $html = document.querySelector('html');

const $checkbox = document.querySelector('#switch');

const elementsImgColor1 = document.querySelector('#elementsImg1');

const elementsImgColor2 = document.querySelector('#elementsImg2');

const elementsImgColor3 = document.querySelector('#elementsImg3');

const elementsImgColor4 = document.querySelector('#elementsImg4');

const elementsImgColor5 = document.querySelector('#elementsImg5');

const icoTop1 = document.querySelector('#icoTop1');

const icoTop2 = document.querySelector('#icoTop2');

const icoTopLogo = document.querySelector('#icoTopLogo');

$checkbox.addEventListener('change', function(){
  $html.classList.toggle('darkMode');
  if (document.getElementById('elementsImg1').style.display === 'block') {
    document.getElementById('elementsImg1').style.display = 'none';
  }else {
    document.getElementById('elementsImg1').style.display = 'block';
  }
  if (document.getElementById('elementsImg2').style.display === 'block') {
    document.getElementById('elementsImg2').style.display = 'none';
  }else {
    document.getElementById('elementsImg2').style.display = 'block';
  }
  if (document.getElementById('elementsImg3').style.display === 'block') {
    document.getElementById('elementsImg3').style.display = 'none';
  }else {
    document.getElementById('elementsImg3').style.display = 'block';
  }
  if (document.getElementById('elementsImg4').style.display === 'block') {
    document.getElementById('elementsImg4').style.display = 'none';
  }else {
    document.getElementById('elementsImg4').style.display = 'block';
  }
  if (document.getElementById('elementsImg5').style.display === 'block') {
    document.getElementById('elementsImg5').style.display = 'none';
  }else {
    document.getElementById('elementsImg5').style.display = 'block';
  }
  if (document.getElementById('icoTop1').style.display === 'block') {
    document.getElementById('icoTop1').style.display = 'none';
  }else {
    document.getElementById('icoTop1').style.display = 'block';
  }
  if (document.getElementById('icoTop2').style.display === 'block') {
    document.getElementById('icoTop2').style.display = 'none';
  }else {
    document.getElementById('icoTop2').style.display = 'block';
  }
  if (document.getElementById('icoTopLogo').style.display === 'block') {
    document.getElementById('icoTopLogo').style.display = 'none';
  }else {
    document.getElementById('icoTopLogo').style.display = 'block';
  }
});




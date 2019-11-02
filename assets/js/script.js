
// Je récupère la source de mon image et j'indique dans une fonction
let pictureChange = function() {
  //Changement de la source de l'image en fonction de l'ID de l'image
  this.src = 'assets/img/' + this.id + '_2.jpg';
}
let pictureChangeBack = function () {
  //Changement de la source vers l'originale de l'image en fonction de l'ID de l'image
  this.src = 'assets/img/' + this.id + '.jpg';
}

// j'appelle mon événement
document.getElementById('image1').onmouseenter = pictureChange ;
document.getElementById('image2').onmouseenter = pictureChange ;
document.getElementById('image3').onmouseenter = pictureChange ;
document.getElementById('image4').onmouseenter = pictureChange ;
document.getElementById('image5').onmouseenter = pictureChange ;

document.getElementById('image1').onmouseout = pictureChangeBack ;
document.getElementById('image2').onmouseout = pictureChangeBack ;
document.getElementById('image3').onmouseout = pictureChangeBack ;
document.getElementById('image4').onmouseout = pictureChangeBack ;
document.getElementById('image5').onmouseout = pictureChangeBack ;

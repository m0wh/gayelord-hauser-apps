var a = [0, 0, 0];
$('.form span').each(function(i) {
  $(this).text( $(this).data('options')[0] );
  $(this).click(function() {
    a[i] = (a[i] + 1)%$(this).data('options').length;
    $(this).text($(this).data('options')[a[i]]);
    console.log(a[i]);
  });
});



$('section').hide();
var link = function(from = '', to = '', speed = 300) {
  $(from + ' button[type=submit]').click(function () {
    $(from).fadeOut(speed, function() {
      $(this).hide;
      $(to).delay(speed).fadeIn(speed*2);
    });
  });
}

$('#form-feature').show();
link('#form-feature', '#result');
link('#result', '#form-feature');



var src;
$('#form-feature button[type=submit]').click(function () {
  if (a[2] === 1) {                               // pour les allergiques
    src = '/img/assets-gamme-allergenes.png';
  } else {                                        // pour les autres
    if (a[1] === 0) {                               // fonctionnels
      src = '/img/GH-Levure-de-Biere_3D.png';
    } else if (a[1] === 1) {                        // boissons
      src = '/img/bg-slider-jus3.png';
    } else if (a[1] === 2) {                        // snacks
      src = '/img/visuel-galette-froment-chocolat-noir-teneur-reduite-en-sucres.png';
    } else if (a[1] === 3) {                        // petit dej
      src = '/img/bg-muesli.png';
    } else if (a[1] === 4) {                        // repas
      src = '/img/assets-3-plats-1.png';
    }
  }

  $('#product').attr('src', src);
});


var allergens = []
$('#rayon #form .icon').click(function () {
  $(this).toggleClass('active');
  $(this).each(function(i) {
    if ($(this).hasClass('active')) {
      allergens.push($(this).data('allergen'));
    } else {
      var index = allergens.indexOf($(this).data('allergen'));
      if (index !== -1) {
          allergens.splice(index, 1);
      }
    }
  });

  updateSVG();

  if (allergens.length === 0) {
    $('button[name=reset-allergens]').addClass('useless');
  } else {
    $('button[name=reset-allergens]').removeClass('useless');
  }
});

$('button[name=reset-allergens]').click(function () {
  $('#rayon #form .icon').removeClass('active');
  allergens = [];
  updateSVG();
});

function updateSVG() {
  $('#rayon svg g').show();
  for (var allergen of allergens) {
    $('#rayon svg g.' + allergen).hide();
  }
}

$(function() {
  var $productList = $('.js-products_list');
  var $top = $('.js-top');
  var $topLogo = $('.js-top__logo');
  var $topNav = $('.js-top__nav');
  var $purpose = $('.js-purpose');
  var $category = $('.js-category');
  var $icon = $('.p-products__icon');
  var $scroll = $('.js-scroll').height();
  var $movieBtn = $('.js-movie__btn');

  $(window).on('reload resize', function() {
    $scroll = $('.js-scroll').height();
    console.log($scroll);
  });

  $(window).on('scroll', function() {

    if ($(this).scrollTop() > $scroll) {
      $top.addClass('is-position-top');
      $topLogo.addClass('is-position-top__logo');
      $topNav.addClass('is-position-top__nav');
      $purpose.addClass('is-position__purpose');
    } else {
      $top.removeClass('is-position-top');
      $topLogo.removeClass('is-position-top__logo');
      $topNav.removeClass('is-position-top__nav');
      $purpose.removeClass('is-position__purpose');
    }
});

  $.ajax({
    url: '../../api/open_sohko_design.json',
    dataType: 'json',
  })
  .done(function(data) {
    showProducts(data);
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });

  function showProducts(data) {
    $productList.children().remove();

    data.products.forEach(function(products) {
      var items =
        '<li value="'+ products.categoryId +'">'+
          '<a href="">'+
            '<figure class="p-products__img u-fs-13">'+
              '<div class="p-products__img-trim">'+
                '<img src="'+ products.image +'" alt="products">'+
                '</div>'+
              '<figcaption class="p-products__cap">'+
                '<div class="p-products__item__icon" style="background-image: url(http://opensohko.com/admin/wp-content/themes/opensohkodesign/images/icon/category/icon_'+ products.category +'.png)"></div>'+
                '<p class="p-products__category u-txt-brand">'+ products.categoryname +'</p>'+
                '<p class="p-products__name u-txt-brand">'+ products.name +'</p>'+
                '<p class="p-products__design u-txt-brand">デザイン: '+ products.design +'</p>'+
              '</figcaption>'+
            '</figure>'+
           '</a>'+
        '</li>';

        $productList.append(items);
    });
  };

  $category.on('mouseenter', function() {
    switch($(this).val()) {
      case 1:
        $icon.css({'background-image': 'url(http://opensohko.com/admin/wp-content/themes/opensohkodesign/images/icon/category/icon_all.png)'});
      break;
      case 2:
        $icon.css({'background-image': 'url(http://opensohko.com/admin/wp-content/themes/opensohkodesign/images/icon/category/icon_door.png)'});
      break;
      case 3:
        $icon.css({'background-image': 'url(http://opensohko.com/admin/wp-content/themes/opensohkodesign/images/icon/category/icon_stair.png)'});
      break;
      case 4:
        $icon.css({'background-image': 'url(http://opensohko.com/admin/wp-content/themes/opensohkodesign/images/icon/category/icon_ramp.png)'});
      break;
      case 5:
        $icon.css({'background-image': 'url(http://opensohko.com/admin/wp-content/themes/opensohkodesign/images/icon/category/icon_shelf.png)'});
      break;
      case 6:
        $icon.css({'background-image': 'url(http://opensohko.com/admin/wp-content/themes/opensohkodesign/images/icon/category/icon_table.png)'});
      break;
      case 7:
        $icon.css({'background-image': 'url(http://opensohko.com/admin/wp-content/themes/opensohkodesign/images/icon/category/icon_chair.png)'});
      break;
      case 8:
        $icon.css({'background-image': 'url(http://opensohko.com/admin/wp-content/themes/opensohkodesign/images/icon/category/icon_plant.png)'});
      break;
      case 9:
        $icon.css({'background-image': 'url(http://opensohko.com/admin/wp-content/themes/opensohkodesign/images/icon/category/icon_facade.png)'});
      break;
      case 10:
        $icon.css({'background-image': 'url(http://opensohko.com/admin/wp-content/themes/opensohkodesign/images/icon/category/icon_roof.png)'});
      break;
      case 11:
        $icon.css({'background-image': 'url(http://opensohko.com/admin/wp-content/themes/opensohkodesign/images/icon/category/icon_wall.png)'});
      break;
      case 12:
        $icon.css({'background-image': 'url(http://opensohko.com/admin/wp-content/themes/opensohkodesign/images/icon/category/icon_floor.png)'});
      break;
      case 13:
        $icon.css({'background-image': 'url(http://opensohko.com/admin/wp-content/themes/opensohkodesign/images/icon/category/icon_window.png)'});
      break;

      default:
      break;
    };
  });

  $category.on('click', function() {
    var value = $(this).val();

    $productList.find('li').each(function() {
      var categoryId = $(this).val();

      if (value === categoryId) {
        $(this).show();
      } else if(value === 1) {
        $(this).show();
      } else {
        $(this).hide();
      }
    })
  });



  $movieBtn.on('click', function() {
    $movieBtn.hide();
    console.log($('.js-movie'));
    $('.js-movie')[0].play();
  });
});
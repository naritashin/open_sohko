$(function() {
  var $productList = $('.js-products_list'),
      $top = $('.js-top'),
      $topLogo = $('.js-top__logo'),
      $topNav = $('.js-top__nav'),
      $purpose = $('.js-purpose'),
      $icon = $('.p-products__icon'),
      $scroll = $('.js-scroll').height();

  $(window).on('resize', function() {
    $scroll = $('.js-scroll').height();
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

  $('.js-category').on({
    'mouseenter': function() {
      $icon.removeClass()
      .addClass('p-products__icon u-fr js-category_icon js-icon-' + $(this).val());
    },
    'click': function() {
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
      });
    }
  });

  $('.js-movie__btn').on('click', function() {
    $(this).hide();
    console.log($('.js-movie'));
    $('.js-movie')[0].play();
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
                '<img src="'+ products.image +'" alt="products" class="p-products__img__item">'+
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
});

    $(function () {
      $(".team_mate_items .vw_team_single_item").slice(0, 3).show();
      var total_teams = $('.team_mate_items .vw_team_single_item');

      // If there are less than 3 elements, add a new class to them
      if (total_teams.length < 3) {
        $('.common_show_more').addClass('d-none');
      }

      $("body").on('click touchstart', '.common_show_more', function (e) {
        e.preventDefault();
        $(".vw_team_single_item:hidden").slice(0, 3).slideDown();
        if ($(".vw_team_single_item:hidden").length == 0) {
          $(".common_show_more").css('visibility', 'hidden');
        }
        // 			$('html,body').animate({
        // 				scrollTop: $(this).offset().top-100,
        // 			}, 1000);
      });
    });

// <!-- owl-carousel -->
		<script>
			$(function() {

				// asasasas
				var owl = $('.hd-carousel .owl-carousel').owlCarousel({
					loop:true,
					items:1,
					nav: true,
					dots:false,
					navText: ["<img src='img/left-btn.png'>","<img src='img/right-btn.png'>"],
					// autoplay: 2000,
				});
				

				$('.news-carousel').owlCarousel({
					loop: true,
					dots:true,
					// nav:true,
					center:true,
					items:3,
					margin: 10,
					autoplay: 2000,
					responsive:{
						2560:{
							items:3,
						},
						1024:{
							items:3,
						},
						768:{
							items:2,
							center:false,
						},
						730:{
							items:2,
							center:false,
						},
						425:{
							items:1,
							center:false,
						},
   		 		}

				});

			});
		</script>
		
		<!-- slick -->
		<script src="js/slick.min.js"></script>
		<script>
			$(document).ready(function(){
				$('.popular-slick').slick({
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					autoplay: true,
					autoplaySpeed: 3000,
					responsive: [
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
								infinite: true,
							}
						},
					]
				});
			});
		</script>
		<!-- responsive menu-->
		<script>
			var menuToggler = $('#menu'),
				menu = $('.menu_about');
			


			menuToggler.click(function( e ) {
				e.preventDefault();
				menu.toggleClass('open');
			});

			$('body').on('click', function(e) {
				if( e.target != menuToggler[0]
					&& e.target != menuToggler.find('i')[0]
				) {
					menu.removeClass('open');
				}
			});

			/*
			menu.onclick = function toggleMenu() {
				var x = document.getElementById('Mymenu_about');
				if (x.className === 'menu_about'){
					x.className += ' open';
				} 
				else{
					x.className = 'menu_about';
				}
			};
			*/
		</script>
<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package colinbooks
 */

?>

</div><!-- #content -->

<footer class="footer">
	<!-- <ul class="footer__links"> -->
		<?php
		wp_nav_menu(array(
			'theme_location' => 'footer-menu',
			'container_class' => 'footer__links',
		));
		?>

		<!-- <li><a href="https://www.flickr.com/pandadumpster" rel="noopener">Flickr</a></li>
		<li><a href="https://github.com/brooksco" rel="noopener">GitHub</a></li>
		<li><a href="https://instagram.com/colinbooks" rel="noopener">Instagram</a></li>
		<li><a href="https://www.linkedin.com/in/brooksco" rel="noopener">LinkedIn</a></li>
		<li><a href="https://medium.com/@colinbooks" rel="noopener">Medium</a></li>
		<li><a href="https://www.twitter.com/colinbooks" rel="noopener">Twitter</a></li> -->

	<div class="footer__wrapper">
		<p class="footer__email">colinbooks[at]gmail.com</p>
	</div>
</footer>

<?php wp_footer(); ?>

</body>

</html>

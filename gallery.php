<?php /* Template Name: Gallery */
/**
 * The template for displaying galleries
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package colinbooks
 */

get_header();
?>

    <main class="main">

        <?php
        while (have_posts()) :
            the_post();

            the_content();

        endwhile; // End of the loop.

        edit_post_link('Edit');
        ?>

    </main><!-- #main -->

<?php
get_sidebar();
get_footer();

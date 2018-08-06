<?php /* Template Name: Home */
/**
 * The template for displaying all pages
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
            the_post(); ?>

            <div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <div class="hero-text">
                    <?php the_content(); ?>
                </div>
            </div><!-- #post-<?php the_ID(); ?> -->

        <?php endwhile; // End of the loop. ?>

        <h2 class="posts__title">Recent work</h2>

        <ul class="posts">
            <?php
            $post_query = new WP_Query(['post_type' => 'post', 'posts_per_page' => -1]);

            if ($post_query->have_posts()) {
                while ($post_query->have_posts()) {
                    $post_query->the_post(); ?>

                    <li class="post">
                        <?php if (has_post_thumbnail()) { ?>
                            <a class="post__thumb" href="<?php echo get_permalink(); ?>">
                                <?php the_post_thumbnail(); ?>
                            </a>
                        <?php } ?>


                        <a href="<?php echo get_permalink(); ?>">
                            <h3 class="post__title"><?php the_title(); ?></h3>
                        </a>

                        <div class="post__content">
                            <?php the_excerpt(); ?>
                        </div>
                    </li>
                <?php }
            } ?>
        </ul>

        <?php edit_post_link('Edit', '', '', get_option('page_on_front')); ?>
    </main><!-- #main -->
<?php
get_sidebar();
get_footer();

<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package colinbooks
 */

?>
<!doctype html>
<!--
            `-://///////::-.`  `.:+yddmdhs/.
        `-ohmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmds+:-``
      .+dmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmds/-``.-
    `+dmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmhms
   `ymmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmy`
   smmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm+
  .mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmo
  /mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmy
  /mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmh+::/+osyhdmmmmo
  :mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmy`        `.+yys+
  +mmmmmmmmmmhmmmmmmmmmhdyo/:hmmmmmmmmmmmmm-             `
 +dmmmmmmmmh/`+mmmmmmmm:``   .sdmmmmmmmmmmm/
+mmmmmmmmmo`   ommmmmmd`     .odmmdshmmmmmms
dmmmmmmd+.      hmmmmm:     +dmdo-` .hmmmmmd.
/hmmmmh:.       -hmmmmdhs/``o+-`     `/ydmmmh+/:.
  -+osyyo.        .--::::.              `-+yhhhdho
-->
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#000000">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>

    <script>
        // Setup color mode handling
        // colorMode must be stored on the window for the p5 sketches
        function setColorMode(mode) {
            window.colorMode = mode;

            const metaThemeColor = document.querySelector('meta[name=theme-color]');
            if (metaThemeColor) {
                if (mode === 'dark') {
                    metaThemeColor.setAttribute('content', '#000000');
                } else {
                    metaThemeColor.setAttribute('content', '#ffffff');
                }
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            const colorMode = document.body.classList.contains('dark') ? 'dark' : 'light';
            setColorMode(colorMode);
        });
    </script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-41574595-2"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-41574595-2');
    </script>
</head>

<body <?php body_class(); ?>>
    <header class="header">
        <?php the_custom_logo(); ?>
        <h2 class="header__title">
            <a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?><?php if (!(is_front_page())) { ?> ↰<?php } ?></a>
            <?php if (is_front_page()) { ?><br><?php bloginfo('description'); ?><?php } ?>
        </h2>
        <?php
        $colinbooks_description = get_bloginfo('description', 'display');
        if ($colinbooks_description || is_customize_preview()) :
        ?>
            <p class="site-description"><?php echo $colinbooks_description; /* WPCS: xss ok. */ ?></p>
        <?php endif; ?>

        <nav class="main-navigation">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'menu-1',
                'menu_id' => 'primary-menu',
            ));
            ?>
        </nav><!-- #site-navigation -->
    </header><!-- #masthead -->

    <div id="p5" class="p5"></div>

    <div id="content" class="site-content">

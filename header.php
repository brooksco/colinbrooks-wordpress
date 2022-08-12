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

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-41574595-2"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-41574595-2');

        // Setup color mode handling
        // ..."storage" determines if we save the setting or not (only if it was a choice)
        // ...and colorMode must be stored on the window for the p5 sketches
        function setColorMode(mode, storage = false) {
            window.colorMode = mode;
            document.body.classList.remove('light', 'dark');
            document.body.classList.add(mode);
            if (storage) localStorage.setItem('colorMode', mode);

            const colorModeEl = document.querySelector('.footer__color-mode');
            const metaThemeColor = document.querySelector('meta[name=theme-color]');
            if (mode === 'light') {
                colorModeEl.innerHTML = '🌑';
                if (metaThemeColor) metaThemeColor.setAttribute('content', '#ffffff');
            } else {
                colorModeEl.innerHTML = '💡';
                if (metaThemeColor) metaThemeColor.setAttribute('content', '#000000');
            }
        }

        // Set initial color as soon as possible so there's no flash of the wrong colors
        const previousColorMode = localStorage.getItem('colorMode');
        document.addEventListener('DOMContentLoaded', () => {
            if (previousColorMode) {
                setColorMode(previousColorMode);
            } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setColorMode('dark', false);
            } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                setColorMode('light', false);
            }

            // Set up listener for changing color mode
            const colorModeEl = document.querySelector('.footer__color-mode');
            if (colorModeEl) {
                colorModeEl.addEventListener('click', () => {
                    const newColorMode = window.colorMode === 'light' ? 'dark' : 'light';
                    setColorMode(newColorMode, true);
                });
            }
        });
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

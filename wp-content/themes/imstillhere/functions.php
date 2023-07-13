<?php

// Enqueue styles and js
include(get_theme_file_path('/functions/enqueue.php'));

// Styles for the edito
include(get_theme_file_path('/functions/editor.php'));

// ACF
require_once get_template_directory() . '/functions/acf.php';

// ACF Blocks
require_once get_template_directory() . '/functions/fn-blocks.php';


// add_theme_support('wp-block-styles');
// add_theme_support('align-wide');
// remove_theme_support('core-block-patterns');

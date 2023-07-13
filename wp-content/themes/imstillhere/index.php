<?php get_header(); ?>
<?php $block_content = do_blocks('<!-- wp:post-content {"layout":{"type":"constrained"}} /-->'); ?>
  <?php echo $block_content ?>
<?php get_footer(); ?>



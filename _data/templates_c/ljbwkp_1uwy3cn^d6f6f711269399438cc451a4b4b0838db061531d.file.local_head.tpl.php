<?php /* Smarty version Smarty-3.1.13, created on 2015-07-31 10:46:14
         compiled from "/var/www/themes/default/local_head.tpl" */ ?>
<?php /*%%SmartyHeaderCode:183509410355bbb46645faf2-72865144%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'd6f6f711269399438cc451a4b4b0838db061531d' => 
    array (
      0 => '/var/www/themes/default/local_head.tpl',
      1 => 1333082040,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '183509410355bbb46645faf2-72865144',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'load_css' => 0,
    'ROOT_URL' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_55bbb46649c819_21005597',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_55bbb46649c819_21005597')) {function content_55bbb46649c819_21005597($_smarty_tpl) {?><?php if ($_smarty_tpl->tpl_vars['load_css']->value){?> 
	<!--[if lt IE 7]>
		<link rel="stylesheet" type="text/css" href="<?php echo $_smarty_tpl->tpl_vars['ROOT_URL']->value;?>
themes/default/fix-ie5-ie6.css">
	<![endif]-->
	<!--[if IE 7]>
		<link rel="stylesheet" type="text/css" href="<?php echo $_smarty_tpl->tpl_vars['ROOT_URL']->value;?>
themes/default/fix-ie7.css">
	<![endif]-->
	<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['combine_css'][0][0]->func_combine_css(array('path'=>"themes/default/print.css",'order'=>-10),$_smarty_tpl);?>

<?php }?>
<?php }} ?>
<?php /* Smarty version Smarty-3.1.13, created on 2015-07-31 10:46:12
         compiled from "plugins/TakeATour/tpl/js_css.tpl" */ ?>
<?php /*%%SmartyHeaderCode:128603043955bbb464844570-55971407%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'bbd2e927d63dfdb26870c5a9d67a5a79a5221adb' => 
    array (
      0 => 'plugins/TakeATour/tpl/js_css.tpl',
      1 => 1404870106,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '128603043955bbb464844570-55971407',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'ADMIN_THEME' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_55bbb4648c08c2_54927114',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_55bbb4648c08c2_54927114')) {function content_55bbb4648c08c2_54927114($_smarty_tpl) {?><?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['combine_script'][0][0]->func_combine_script(array('id'=>'jquery.bootstrap-tour','load'=>'header','require'=>'jquery','path'=>'plugins/TakeATour/js/custom-bootstrap-tour-standalone.js'),$_smarty_tpl);?>

<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['combine_css'][0][0]->func_combine_css(array('path'=>"plugins/TakeATour/css/bootstrap-tour-standalone.css"),$_smarty_tpl);?>

<?php if ($_smarty_tpl->tpl_vars['ADMIN_THEME']->value=='clear'){?><?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['combine_css'][0][0]->func_combine_css(array('path'=>"plugins/TakeATour/css/clear.css"),$_smarty_tpl);?>
<?php }?>
<?php if ($_smarty_tpl->tpl_vars['ADMIN_THEME']->value=='roma'){?><?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['combine_css'][0][0]->func_combine_css(array('path'=>"plugins/TakeATour/css/roma.css"),$_smarty_tpl);?>
<?php }?><?php }} ?>
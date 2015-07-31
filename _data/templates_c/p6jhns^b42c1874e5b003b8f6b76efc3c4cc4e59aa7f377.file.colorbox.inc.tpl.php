<?php /* Smarty version Smarty-3.1.13, created on 2015-07-31 10:47:22
         compiled from "./admin/themes/default/template/include/colorbox.inc.tpl" */ ?>
<?php /*%%SmartyHeaderCode:10311354555bbb4aacbe1f5-37070422%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'b42c1874e5b003b8f6b76efc3c4cc4e59aa7f377' => 
    array (
      0 => './admin/themes/default/template/include/colorbox.inc.tpl',
      1 => 1403846630,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '10311354555bbb4aacbe1f5-37070422',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'load_mode' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_55bbb4aad21492_47156997',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_55bbb4aad21492_47156997')) {function content_55bbb4aad21492_47156997($_smarty_tpl) {?><?php if (empty($_smarty_tpl->tpl_vars['load_mode']->value)){?><?php $_smarty_tpl->tpl_vars['load_mode'] = new Smarty_variable('footer', null, 0);?><?php }?>
<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['combine_script'][0][0]->func_combine_script(array('id'=>'jquery.colorbox','load'=>$_smarty_tpl->tpl_vars['load_mode']->value,'require'=>'jquery','path'=>'themes/default/js/plugins/jquery.colorbox.min.js'),$_smarty_tpl);?>

<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['combine_css'][0][0]->func_combine_css(array('id'=>'jquery.colorbox','path'=>"themes/default/js/plugins/colorbox/style2/colorbox.css"),$_smarty_tpl);?>

<?php }} ?>
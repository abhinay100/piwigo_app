<?php /* Smarty version Smarty-3.1.13, created on 2015-07-31 10:46:13
         compiled from "./themes/default/template/menubar_specials.tpl" */ ?>
<?php /*%%SmartyHeaderCode:183415858455bbb465701657-84863889%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '890b3c06a98935702ba9794fea499c812e06c84e' => 
    array (
      0 => './themes/default/template/menubar_specials.tpl',
      1 => 1295504326,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '183415858455bbb465701657-84863889',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'block' => 0,
    'link' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_55bbb46576e718_08061042',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_55bbb46576e718_08061042')) {function content_55bbb46576e718_08061042($_smarty_tpl) {?><dt><?php echo l10n('Specials');?>
</dt>
<dd>
	<ul> <?php  $_smarty_tpl->tpl_vars['link'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['link']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['block']->value->data; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['link']->key => $_smarty_tpl->tpl_vars['link']->value){
$_smarty_tpl->tpl_vars['link']->_loop = true;
?> <li><a href="<?php echo $_smarty_tpl->tpl_vars['link']->value['URL'];?>
" title="<?php echo $_smarty_tpl->tpl_vars['link']->value['TITLE'];?>
"<?php if (isset($_smarty_tpl->tpl_vars['link']->value['REL'])){?> <?php echo $_smarty_tpl->tpl_vars['link']->value['REL'];?>
<?php }?>><?php echo $_smarty_tpl->tpl_vars['link']->value['NAME'];?>
</a></li> <?php } ?> </ul>
</dd>
<?php }} ?>
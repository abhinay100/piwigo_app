<?php /* Smarty version Smarty-3.1.13, created on 2015-07-31 10:46:13
         compiled from "./themes/default/template/menubar_menu.tpl" */ ?>
<?php /*%%SmartyHeaderCode:175859802955bbb46578ed34-09677461%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '90127e92e2948ffa98567bf59303e94ca651407e' => 
    array (
      0 => './themes/default/template/menubar_menu.tpl',
      1 => 1395581886,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '175859802955bbb46578ed34-09677461',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'block' => 0,
    'ROOT_URL' => 0,
    'QUERY_SEARCH' => 0,
    'link' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_55bbb4658f32a1_33720486',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_55bbb4658f32a1_33720486')) {function content_55bbb4658f32a1_33720486($_smarty_tpl) {?><dt><?php echo l10n('Menu');?>
</dt>
<dd>
<?php if (isset($_smarty_tpl->tpl_vars['block']->value->data['qsearch'])&&$_smarty_tpl->tpl_vars['block']->value->data['qsearch']==true){?>
	<form action="<?php echo $_smarty_tpl->tpl_vars['ROOT_URL']->value;?>
qsearch.php" method="get" id="quicksearch" onsubmit="return this.q.value!='' && this.q.value!=qsearch_prompt;">
		<p style="margin:0;padding:0">
			<input type="text" name="q" id="qsearchInput" onfocus="if (value==qsearch_prompt) value='';" onblur="if (value=='') value=qsearch_prompt;" style="width:90%"<?php if (!empty($_smarty_tpl->tpl_vars['QUERY_SEARCH']->value)){?> value="<?php echo $_smarty_tpl->tpl_vars['QUERY_SEARCH']->value;?>
"<?php }?>>
		</p>
	</form>
	<script type="text/javascript">var qsearch_prompt="<?php echo strtr(l10n('Quick search'), array("\\" => "\\\\", "'" => "\\'", "\"" => "\\\"", "\r" => "\\r", "\n" => "\\n", "</" => "<\/" ));?>
";<?php if (empty($_smarty_tpl->tpl_vars['QUERY_SEARCH']->value)){?>document.getElementById('qsearchInput').value=qsearch_prompt;<?php }?></script>
<?php }?>
	<ul> <?php  $_smarty_tpl->tpl_vars['link'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['link']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['block']->value->data; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['link']->key => $_smarty_tpl->tpl_vars['link']->value){
$_smarty_tpl->tpl_vars['link']->_loop = true;
?> <?php if (is_array($_smarty_tpl->tpl_vars['link']->value)){?> <li><a href="<?php echo $_smarty_tpl->tpl_vars['link']->value['URL'];?>
" title="<?php echo $_smarty_tpl->tpl_vars['link']->value['TITLE'];?>
"<?php if (isset($_smarty_tpl->tpl_vars['link']->value['REL'])){?> <?php echo $_smarty_tpl->tpl_vars['link']->value['REL'];?>
<?php }?>><?php echo $_smarty_tpl->tpl_vars['link']->value['NAME'];?>
</a><?php if (isset($_smarty_tpl->tpl_vars['link']->value['COUNTER'])){?> (<?php echo $_smarty_tpl->tpl_vars['link']->value['COUNTER'];?>
)<?php }?></li> <?php }?> <?php } ?> </ul>
</dd>
<?php }} ?>
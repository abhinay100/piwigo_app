<?php /* Smarty version Smarty-3.1.13, created on 2015-07-31 10:47:15
         compiled from "./admin/themes/default/template/include/add_album.inc.tpl" */ ?>
<?php /*%%SmartyHeaderCode:75104198655bbb4a3860642-02733205%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'b19c913f95548d36adef1d980c1ad76b8772c4a0' => 
    array (
      0 => './admin/themes/default/template/include/add_album.inc.tpl',
      1 => 1417401738,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '75104198655bbb4a3860642-02733205',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'load_mode' => 0,
    'themeconf' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_55bbb4a38f51d5_13758895',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_55bbb4a38f51d5_13758895')) {function content_55bbb4a38f51d5_13758895($_smarty_tpl) {?><?php if (empty($_smarty_tpl->tpl_vars['load_mode']->value)){?><?php $_smarty_tpl->tpl_vars['load_mode'] = new Smarty_variable('footer', null, 0);?><?php }?>
<?php echo $_smarty_tpl->getSubTemplate ('include/colorbox.inc.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array('load_mode'=>$_smarty_tpl->tpl_vars['load_mode']->value), 0);?>


<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['combine_script'][0][0]->func_combine_script(array('id'=>'jquery.selectize','load'=>'footer','path'=>'themes/default/js/plugins/selectize.min.js'),$_smarty_tpl);?>

<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['combine_css'][0][0]->func_combine_css(array('id'=>'jquery.selectize','path'=>"themes/default/js/plugins/selectize.".((string)$_smarty_tpl->tpl_vars['themeconf']->value['colorscheme']).".css"),$_smarty_tpl);?>


<?php echo $_smarty_tpl->smarty->registered_plugins[Smarty::PLUGIN_FUNCTION]['combine_script'][0][0]->func_combine_script(array('id'=>'addAlbum','load'=>$_smarty_tpl->tpl_vars['load_mode']->value,'path'=>'admin/themes/default/js/addAlbum.js'),$_smarty_tpl);?>


<div style="display:none">
  <div id="addAlbumForm">
    <form>
      <?php echo l10n('Parent album');?>
<br>
      <select name="category_parent"></select>
      <br><br>
      
      <?php echo l10n('Album name');?>
<br>
      <input name="category_name" type="text" maxlength="255">
      <span id="categoryNameError" style="color:red;"><?php echo l10n('The name of an album must not be empty');?>
</span>
      <br><br><br>
      
      <input type="submit" value="<?php echo l10n('Create');?>
">
      <span id="albumCreationLoading" style="display:none"><img src="themes/default/images/ajax-loader-small.gif"></span>
    </form>
  </div>
</div>
<?php }} ?>
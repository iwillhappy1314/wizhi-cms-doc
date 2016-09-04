## 快速添加文章类型和分类法

### 为什么要使用文章类型和分类法

- 每种类型的文章都会有不同的字段，使用文档类型区分开，上传的时候问题比较少。
- 显示子菜单的时候比较方便

### 添加文章类型和分类法的方法

添加之前，首先判断功能时是否存在，以免禁用或未安装插件时出现错误。

其中`pro`是保存在数据库中的文章类型的名称，通过这个字段区分不同的文章类型。‘产品’是显示在后台菜单中的名称。

```php
if ( function_exists ("wizhi_create_types") and function_exists ("wizhi_create_taxs") ) {
        wizhi_create_types( "pro", "产品", array( 'title', 'editor', 'author', 'thumbnail', 'comments' ), true );
        wizhi_create_taxs( "procat", 'pro', "产品分类" );

        wizhi_create_types( "slider", "幻灯", array( 'title', 'thumbnail' ), true );
}
```

把以上代码加入到主题的function.php即可。

### 添加已注册的分类方法到文章类型

有时候，两个文章类型可能需要共用一个分类方法，而分类方法只能注册一次，这种情况下，我们只需要把已经注册的分类方法添加到现有的文章类型就可以了。

```php
add_action('init','wizhi_add_categories_to_page');
function wizhi_add_categories_to_page(){
	register_taxonomy_for_object_type('category', 'page');
}
```

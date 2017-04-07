## 快速添加文章（内容）类型

### 为什么要使用内容类型

每种类型的内容都会有不同的数据，比如“图书”有作者和出版社、“产品”有定价和产地等。

对于WordPress 的内容管理者来说，使用内容类型把这些不同的内容区分开，在WordPress后台管理的时候会比较容易。

对于开发者来说，内容类型存档模板和详情模板可以非常的使用 archive-* 和 single-* 自定义，代码上会更容易区分，更清晰。

### 添加文章类型的方法

添加之前，首先判断功能时是否存在，以免禁用或未安装插件时出现错误。

其中`pro`是保存在数据库中的文章类型的名称，通过这个字段区分不同的文章类型。‘产品’是显示在后台菜单中的名称。

```php
if ( function_exists ("wizhi_create_types") and function_exists ("wizhi_create_taxs") ) {
  // 创建自定义文章类型      
  wizhi_create_types( "pro", "产品", array( 'title', 'editor', 'author', 'thumbnail', 'custom-fields', 'comments' ), true );
  wizhi_create_types( "slider", "幻灯", array( 'title', 'thumbnail' ), true );
  
  // 创建字段一分类方法
  wizhi_create_taxs( "procat", 'pro', "产品分类" );
}
```

把以上代码加入到主题的function.php即可。

### 添加文章类型支持

如果默认的文章类型不支持我们需要的功能，我们可以自己添加, 如下面的例子就是给页面添加摘要。

```php
function wizhi_add_excerpt_support_for_pages() {
	add_post_type_support( 'page', 'excerpt' );
}
add_action( 'init', 'wizhi_add_excerpt_support_for_pages' );
```

可以添加就可以移除，相反的函数是 `remove_post_type_support`。

## 文章类型设置

内置的文章类型均支持文章类型设置，目前支持的设置选项有:

- 封面图像
- 每页显示的文章数量
- 文章类型自定义标题
- 文章类型存档页模板
- 文章类型描述

### 获取文章类型设置

文章类型设置是保存在 WordPress 选项数据表中的，可以用 WordPress 标准的 `get_option` 函数获取设置值，也可以用插件增加的快捷方式：

```php
get_archive_option($type)
```

- $type 字符串，文章类型别名

### 目前各选项的名称

设置选项完整的名称为：$type\_archive\_$name

- 标题：title
- 封面图像：banner
- 模板：template
- 每页文章数：per_page
- 描述：description

## 为自定义文章类型添加设置选项支持

```php
add_filter( 'wizhi_archive_setting_supports', 'enter_add_archive_settings', 10, 3 );
function enter_add_archive_settings( $types ) {
	$types[] = 'bulletin';
	$types[] = 'course';
	$types[] = 'show';

	return $types;
}
```
## 添加更多表单项目

可以添加更多的 Form Manager 表单项目到文章类型自定义设置中。

````php
add_filter( 'wizhi_archive_setting_fields', 'enter_add_archive_setting_fields', 10, 3 );
function enter_add_archive_setting_fields( $fields ) {
	$fields[] = new Fieldmanager_Media( __( 'Cover image', 'wizhi' ) ),;
  
	return $fields;
}
````


## Formmanager

Formbuilder 已改用 WordPress FieldManager 的方案, 请参考文档 [Fieldmanager](http://fieldmanager.org/docs/)

Formbuilder 的数据结构中，很多类型的数据都是以数组的方式保存的，这种方式可能会在获取和更新数据的时候带来一些不便，不过好处在于可以提高性能。

Frommanager 插件支持以 tab 的形式显示自定义字段，对于自定义字段比较多的站点，可以提升后台的用户体验。

## 支持的字段类型

### Text 文本字段

```php
add_action( 'fm_post_post', function() {
    $fm = new Fieldmanager_TextField( array(
        'name' => 'demo-field',
    ) );
    $fm->add_meta_box( 'TextField Demo', array( 'post' ) );
} );
```

**html5**

```php
add_action( 'fm_post_post', function() {
    $fm = new Fieldmanager_TextField( array(
        'name' => 'demo-field',
        'input_type' => 'color',
    ) );
    $fm->add_meta_box( 'TextField Demo', array( 'post' ) );
} );
```

### Media 文件上传

```php
add_action( 'fm_post_post', function() {
    $fm = new Fieldmanager_Media( array(
        'name' => 'demo-media',
    ) );
    $fm->add_meta_box( 'Media Field', array( 'post' ) );
} );
```

**带选项**

```php
add_action( 'fm_post_post', function() {
    $fm = new Fieldmanager_Media( array(
        'name' => 'demo-media',
        'button_label' => 'Add Icon',
        'modal_title' => 'Select Icon',
        'modal_button_label' => 'Use Image as Icon',
        'preview_size' => 'icon',
    ) );
    $fm->add_meta_box( 'Media Field', array( 'post' ) );
} );
```

### TextArea 多段文本

```php
add_action( 'fm_post_post', function() {
    $fm = new Fieldmanager_TextArea( array(
        'name' => 'demo-field',
    ) );
    $fm->add_meta_box( 'TextArea Demo', array( 'post' ) );
} );
```

**自定义尺寸**

```php
add_action( 'fm_post_post', function() {
    $fm = new Fieldmanager_TextArea( array(
        'name' => 'demo-field',
        'attributes' => array(
            'rows' => 3,
            'cols' => 30,
        ),
    ) );
    $fm->add_meta_box( 'TextArea Demo', array( 'post' ) );
} );
```

### RichTextArea 富文本编辑器

```php
add_action( 'fm_post_post', function() {
    $fm = new Fieldmanager_RichTextArea( array(
        'name' => 'demo-field',
    ) );
    $fm->add_meta_box( 'RichTextArea Demo', array( 'post' ) );
} );
```

**编辑器设置**

```php
add_action( 'fm_post_post', function() {
    $fm = new Fieldmanager_RichTextArea( array(
        'name' => 'demo-field',
        'editor_settings' => array(
            'media_buttons' => false,
        ),
    ) );
    $fm->add_meta_box( 'RichTextArea Demo', array( 'post' ) );
} );
```

可视化编辑器可用选项参考 ：https://codex.wordpress.org/Function_Reference/wp_editor#Arguments

**简单编辑器**

```php
add_action( 'fm_post_post', function() {
    $fm = new Fieldmanager_RichTextArea( array(
        'name' => 'demo-mini-field',
        'buttons_1' => array( 'bold', 'italic', 'bullist', 'numlist', 'link' ),
        'buttons_2' => array(),
        'editor_settings' => array(
            'quicktags' => false,
            'media_buttons' => false,
        ),
    ) );
    $fm->add_meta_box( 'RichTextArea Demo', array( 'post' ), 'side' );
} );
```

### Radios 单选项

```php
add_action( 'fm_post_post', function() {
    $fm = new Fieldmanager_Radios( array(
        'name' => 'demo-field',
        'options' => array(
            'red' => 'Red',
            'green' => 'Green',
            'blue' => 'Blue',
        ),
    ) );
    $fm->add_meta_box( 'Radio Fields', array( 'post' ) );
} );
```

**数据来源**

```php
add_action( 'fm_post_post', function() {
    $fm = new Fieldmanager_Radios( array(
        'name' => 'demo-field',
        'datasource' => new Fieldmanager_Datasource_User,
    ) );
    $fm->add_meta_box( 'Radio Buttons Demo', array( 'post' ) );
} );
```



### Checkbox 选项

```php
add_action( 'fm_post_post', function() {
    $fm = new Fieldmanager_Checkbox( array(
        'name' => 'demo-field',
        'label' => 'Checkbox Label',
    ) );
    $fm->add_meta_box( 'Basic Checkbox', array( 'post' ) );
} );
```

设置选中项值

```php
add_action( 'fm_post_post', function() {
    $fm = new Fieldmanager_Checkbox( array(
        'name' => 'demo-field',
        'label' => 'Sample Checkbox',
        'checked_value' => 'yes',
        'unchecked_value' => 'no',
    ) );
    $fm->add_meta_box( 'Custom Checkbox Values', array( 'post' ) );
} );
```

### CheckBoxes 多选项

```php
add_action( 'fm_post_post', function() {
    $fm = new Fieldmanager_Checkboxes( array(
        'name' => 'demo-field',
        'options' => array(
            'red' => 'Red',
            'green' => 'Green',
            'blue' => 'Blue',
        ),
    ) );
    $fm->add_meta_box( 'Checkboxes Demo', array( 'post' ) );
} );
```

**数据来源**

```php
add_action( 'fm_post_post', function() {
    $fm = new Fieldmanager_Checkboxes( array(
        'name' => 'demo-field',
        'datasource' => new Fieldmanager_Datasource_User,
    ) );
    $fm->add_meta_box( 'Checkboxes Demo', array( 'post' ) );
} );
```



### Select 下拉选择

```php
add_action( 'fm_post_post', function() {
    $fm = new Fieldmanager_Select( array(
        'name' => 'demo-field',
        'options' => array(
            'red' => 'Red',
            'green' => 'Green',
            'blue' => 'Blue',
        ),
    ) );
    $fm->add_meta_box( 'Select Demo', array( 'post' ) );
} );
```

**第一项为空**

```php
add_action( 'fm_post_post', function() {
    $fm = new Fieldmanager_Select( array(
        'name' => 'demo-field',
        'first_empty' => true,
        'options' => array(
            'red' => 'Red',
            'green' => 'Green',
            'blue' => 'Blue',
        ),
    ) );
    $fm->add_meta_box( 'Select Demo', array( 'post' ) );
} );
```

**数据来源**

```php
add_action( 'fm_post_post', function() {
    $fm = new Fieldmanager_Select( array(
        'name' => 'demo-field',
        'datasource' => new Fieldmanager_Datasource_User,
    ) );
    $fm->add_meta_box( 'Select Demo', array( 'post' ) );
} );
```

**下拉选择多选**

```php
add_action( 'fm_post_post', function() {
    $fm = new Fieldmanager_Select( array(
        'name' => 'demo-field',
        'multiple' => true,
        'attributes' => array(
            'size' => 3,
        ),
        'options' => array(
            'red' => 'Red',
            'green' => 'Green',
            'blue' => 'Blue',
        ),
    ) );
    $fm->add_meta_box( 'Select Demo', array( 'post' ) );
} );
```

### Color Picker 颜色选择

```php
$fm = new Fieldmanager_Colorpicker( array(
    'name' => 'basic_colorpicker',
) );
$fm->add_meta_box( 'Basic Colorpicker', 'post' );
```

### Date Picker 日期选择

```php
add_action( 'fm_post_post', function() {
    $fm = new Fieldmanager_Datepicker( array(
        'name' => 'demo-field',
    ) );
    $fm->add_meta_box( 'Datepicker Demo', array( 'post' ) );
} );
```

**带时间**

```php
add_action( 'fm_post_post', function() {
    $fm = new Fieldmanager_Datepicker( array(
        'name' => 'demo-field',
        'use_time' => true,
    ) );
    $fm->add_meta_box( 'Datepicker Demo', array( 'post' ) );
} );
```

**自定义日期格式**

```php
add_action( 'fm_post_post', function() {
    $fm = new Fieldmanager_Datepicker( array(
        'name' => 'demo-field',
        'date_format' => 'Y-m-d',
        'js_opts' => array(
            'dateFormat' => 'yy-mm-dd',
        ),
    ) );
    $fm->add_meta_box( 'Datepicker Demo', array( 'post' ) );
} );
```



### Hidden 隐藏字段

```php
add_action( 'fm_post_post', function() {
    $fm = new Fieldmanager_Hidden( array(
        'name' => 'demo-field',
    ) );
    $fm->add_meta_box( 'Uninteresting Demo', array( 'post' ) );
} );
```

### Link 链接

```php
add_action( 'fm_post_post', function() {
    $fm = new Fieldmanager_Link( array(
        'name' => 'demo-link',
    ) );
    $fm->add_meta_box( 'Basic Link Field', array( 'post' ) );
} );
```

### Password 密码

```php
add_action( 'fm_post_post', function() {
    $fm = new Fieldmanager_Password( array(
        'name' => 'demo-password',
    ) );
    $fm->add_meta_box( 'Password Field', array( 'post' ) );
} );
```


###  Autocomplete 自动完成

```php
$fm = new Fieldmanager_Autocomplete( array(
    'name' => 'size',
    'datasource'  => new Fieldmanager_Datasource( array(
        'options' => array( 'Small', 'Medium', 'Large' ),
    ) ),
) );
$fm->add_meta_box( 'Autocomplete Field', 'post' );
```

**数据来源**

```php
$fm = new Fieldmanager_Autocomplete( array(
    'name' => 'related_post',
    'show_edit_link' => true,
    'datasource' => new Fieldmanager_Datasource_Post( array(
        'query_args' => array( 'post_type' => 'post' ),
    ) ),
) );
$fm->add_meta_box( 'Related Post', 'post' );
```

## 元数据盒子显示的位置

### 文章类型

```php
$fm->add_meta_box( 'Basic Field', 'post' );
```

### 分类项目

```php
$fm->add_term_meta_box( 'Basic Field', 'category' );
```

### 子菜单页面

```php
if ( function_exists( 'fm_register_submenu_page' ) ) {
    fm_register_submenu_page( 'my_fields', 'tools.php', 'Meta Fields' );
}
add_action( 'fm_submenu_my_fields', function() {
    $fm = new Fieldmanager_TextField( array(
        'name' => 'my_fields',
    ) );
    $fm->activate_submenu_page();
} );
```

### 用户资料

```php
$fm-> add_user_form( 'Basic Field' );
```

### 文章快速编辑

```php
$fm->add_quickedit_box( 'Basic Field', 'post', function( $values ) {
    return ! empty( $values['demo'] ) ? $values['demo'] : '';
} );
```

## 字段组

```php
add_action( 'fm_post_post', function() {
    $fm = new Fieldmanager_Group( array(
        'name' => 'demo-group',
        'serialize_data' => false,
        'add_to_prefix'  => false,
        'children' => array(
            'field-one' => new Fieldmanager_TextField( 'First Field' ),
            'field-two' => new Fieldmanager_TextField( 'Second Field' ),
        ),
    ) );
    $fm->add_meta_box( 'Basic Group', array( 'post' ) );
} );
```

上面的代码中：

- name: 字段组的名称，children 以数组的形式保存为自定义字段。
- serialize_data: 是否序列化字段组的数据，不序列化方便访问自断组中的数据，序列化提高访问效率，酌情使用。
- add_to_prefix: 序列化后，是否添加前缀。
- children: 字段组中的字段
- array('post'): 字段支持的自定义文章类型 

## 带选项卡的自定义字段盒子

```php
add_action( 'fm_post_post', function() {
    $fm = new Fieldmanager_Group( array(
        'name'           => 'tabbed_meta_fields',
        'tabbed'         => 'vertical',
        //'tabbed'         => 'horizontal',
        'serialize_data' => false,
        'add_to_prefix'  => false,
        'children'       => array(
            'tab-1' => new Fieldmanager_Group( array(
		       'serialize_data' => false,
		       'add_to_prefix'  => false,
                'label'          => 'First Tab',
                'children'       => array(
                    'text' => new Fieldmanager_Textfield( 'Text Field' ),
                )
            ) ),
            'tab-2' => new Fieldmanager_Group( array(
                'label'          => 'Second Tab',
			   'serialize_data' => false,
		       'add_to_prefix'  => false,
                'children'       => array(
                    'textarea' => new Fieldmanager_TextArea( 'TextArea' ),
                    'media'    => new Fieldmanager_Media( 'Media File' ),
                )
            ) ),
        )
    ) );
    $fm->add_meta_box( 'Tabbed Group', 'post' );
} );
```
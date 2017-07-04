## Formmanager

Formbuilder 已改用 WordPress FieldManager 的方案, 请参考文档 [Fieldmanager](http://fieldmanager.org/docs/)

Formbuilder 的数据结构中，很多类型的数据都是以数组的方式保存的，这种方式可能会在获取和更新数据的时候带来一些不便，不过好处在于可以提高性能。

Frommanager 插件支持以 tab 的形式显示自定义字段，对于自定义字段比较多的站点，可以提升后台的用户体

验。

## 自定默认支持的属性

所有自定义字段类型都继承自 Fieldmanager_Field 字段，Fieldmanager_Field 字段的属性也会被自动继承。

| `public static boolean`          | [$debug](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#12-16) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$debug)如果设置为 true，显示调试信息 |
| -------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `public integer`                 | [$limit](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#18-22) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$limit)显示多少字段，不限制设置为 0 |
| `public integer`                 | [$minimum_count](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#32-38) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$minimum_count)How many of these fields to display at a minimum, if $limit != 1. If $limit == $minimum_count, the "add another" button and the remove tool will be hidden. |
| `public integer`                 | [$extra_elements](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#40-45) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$extra_elements)How many empty fields to display if $limit != 1 when the total fields in the loaded data + $extra_elements > $minimum_count. |
| `public string`                  | [$add_more_label](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#47-51) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$add_more_label)添加更多按钮的文本 |
| `public string`                  | [$name](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#53-57) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$name)表单元素的名称 |
| `public string`                  | [$label](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#59-63) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$label)表单元素的标签 |
| `public boolean`                 | [$inline_label](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#65-69) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$inline_label)如果设置为 true，标签将和元素显示在一行 |
| `public boolean`                 | [$label_after_element](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#71-75) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$label_after_element)如果为 true，标签在表单元素后面 |
| `public string`                  | [$description](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#77-81) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$description)表单元素的描述 |
| `public boolean`                 | [$description_after_element](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#83-87) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$description_after_element)如果为 true，描述在表单元素后面 |
| `public string or boolean[]`     | [$attributes](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#89-93) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$attributes)附加 HTML 元素，设置为 true 应用独立属性，如：'required' => true |
| `public string`                  | [$field_class](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#95-99) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$field_class)表单元素的 CSS 类 |
| `public boolean`                 | [$one_label_per_item](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#101-105) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$one_label_per_item)如果是可重复项，是否为每个重复项显示标签 |
| `public boolean`                 | [$sortable](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#107-111) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$sortable)是否允许为可重复项排序 |
| `public string`                  | [$label_element](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#113-117) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$label_element)表单标签的 HTML 元素 |
| `public callable`                | [$sanitize](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#119-123) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$sanitize)净化输入的函数 |
| `public callback[]`              | [$validate](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#125-129) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$validate)验证输入的函数 |
| `public string or array`         | [$validation_rules](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#131-137) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$validation_rules)jQuery validation rule(s) used to validate this field, entered as a string or associative array. These rules will be automatically converted to the appropriate Javascript format. For more information see [http://jqueryvalidation.org/documentation/](http://jqueryvalidation.org/documentation/) |
| `public string or array`         | [$validation_messages](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#139-146) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$validation_messages)jQuery validation messages used by the rule(s) defined for this field, entered as a string or associative array. These rules will be automatically converted to the appropriate Javascript format. Any messages without a corresponding rule will be ignored. For more information see [http://jqueryvalidation.org/documentation/](http://jqueryvalidation.org/documentation/) |
| `public boolean`                 | [$required](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#148-153) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$required)Makes the field required on WordPress context forms that already have built-in validation. This is necessary only for the fields used with the term add context. |
| `public string or null`          | [$data_type](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#155-159) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$data_type)表单元素的数据类型，一般会自动设置好 |
| `public integer or null`         | [$data_id](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#161-165) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$data_id)$this->data_type 的 ID, 如 $post->ID, 一般会默认设置好 |
| `public boolean`                 | [$save_empty](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#167-171) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$save_empty)如果设置为 true，保存空元素到数据库中 (如果 $this->limit != 1; 单元素值永远保存) |
| `public boolean`                 | [$skip_save](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#173-177) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$skip_save)不保存此项目 (自定处理数据时使用) |
| `public boolean`                 | [$index](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#179-183) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$index)Save this field additionally to an index |
| `public boolean`                 | [$serialize_data](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#185-190) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$serialize_data)保存字段的值到他们自己的键中（只在某些情况下有用），默认为 true |
| `public Fieldmanager_Datasource` | [$datasource](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#192-196) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$datasource)从数据源中获取数据，Fieldmanager_Autocomplete 和 Fieldmanager_Options 使用 |
| `public array[]`                 | [$display_if](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#198-206) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$display_if)Field name and value on which to display element. Sample: $element->display_if = array( 'src' => 'display-if-src-element', 'value' => 'display-if-src-value' ); |
| `public string`                  | [$add_more_position](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#208-213) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$add_more_position)Where the new item should to added ( top or bottom ) of the stack. Used by Add Another button "top or bottom" |
| `public boolean`                 | [$remove_default_meta_boxes](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#215-219) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$remove_default_meta_boxes)如果设置为 true, 移除被 Fieldmanager 字段覆盖的默认元数据盒子 |
| `public string`                  | [$template](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#221-225) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$template)字段的模板路径 |
| `public array`                   | [$meta_boxes_to_remove](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#227-231) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$meta_boxes_to_remove)如果 $remove_default_meta_boxes 为 true, 这个数组将指定被移除的默认元数据盒子 |
| `public mixed`                   | [$default_value](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#233-237) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$default_value)表单元素的默认值 |
| `public callable or null`        | [$index_filter](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#239-243) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$index_filter)Function that parses an index value and returns an optionally modified value. |
| `public string`                  | [$input_type](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#245-249) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$input_type)输入类型，支持所有HTML 5 类型 |
| `public array`                   | [$escape](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#251-259) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$escape)Custom escaping for labels, descriptions, etc. Associative array of $field => $callable arguments, for example: |
| `public boolean`                 | [$is_attachment](http://api.fieldmanager.org/source-class-Fieldmanager_Field.html#291-295) | [#](http://api.fieldmanager.org/class-Fieldmanager_Field.html#$is_attachment)是否在编辑媒体页面显示 |

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

**html5 支持**

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

**使用 Choosen 效果**

````php
add_action( 'fm_post_post', function() {
    $fm = new Fieldmanager_Select( array(
        'name' => 'demo-field',
        'type_ahead' => true,
        'options' => array(
            'red' => 'Red',
            'green' => 'Green',
            'blue' => 'Blue',
        ),
    ) );
    $fm->add_meta_box( 'Select Demo', array( 'post' ) );
} );
````

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
add_action( 'after_setup_theme', function() {
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

## 字段组字段带选项

````php
add_action( 'after_setup_theme', function() {
    $fm = new Fieldmanager_Group( array(
        'name' => 'demo-group',
        'serialize_data' => false,
        'add_to_prefix'  => false,
        'children' => array(
            'field-one' => new Fieldmanager_TextField( 'First Field' ),
            'field-two' => new Fieldmanager_RichTextArea( [
						'label'      => '使用方法',
						'attributes' => [
							'rows'     => 5,
							'cols'     => 50,
							'readonly' => true,
						],
					] ),
        ),
    ) );
    $fm->add_meta_box( 'Basic Group', array( 'post' ) );
} );
````



## 带选项卡的自定义字段盒子

```php
add_action( 'after_setup_theme', function() {
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
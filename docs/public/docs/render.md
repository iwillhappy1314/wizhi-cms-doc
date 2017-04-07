## 带参数的模板包含

WordPress 默认的模板包含函数无法传递参数到包含的模板，这会为 WordPress 开发带来很多不便。

include 函数可以实现一样的效果，但是include 函数没有错误处理。

## 使用方法

### 基本使用方法

render_template_part 和 get_template_part函数类似，这是多了多三个参数作为变量数组。而参数数组中的变量可以直接在被包含的模板中使用。

变量名为数组的键，值为该键对应的值。

```php
render_template_part( 'shop/views/menu', 'all', [ 'view' => 'address' ] ); 
```

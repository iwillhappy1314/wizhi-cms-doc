## 自由缩放缩略图

WordPress 的缩略图系统是相对固定的，使用缩略图的时候，需要先定义一个缩略图的大小，再通过别名使用，这对普通用户是友好的，而对于开发者来说是很不方便的。

另一方面，如果定义了缩略图大小，用户上传的每一张缩略图都会自动生成该大小的图片，不管前端是否需要。

wizhi cms 扩展了该方法，可以直接通过一个包含长、宽、是否强制裁减的数组了实现自由缩放缩略图。

## 使用方法

### 通过缩略图ID获取缩略图资源

```php
wp_get_attachment_image_src( $id, array( 400, 300, 1) );
wp_get_attachment_image( $id, array( 400, 300, 1) );
```

### 在循环中使用

```php
if ( has_post_thumbnail() ){ 
    echo get_the_post_thumbnail( get_the_id(), [ 270, 180, 1 ] ); 
}
```

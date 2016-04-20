插件名称：H5 触摸小气泡
用法：
	html文件中引入script标签,添加自定义属性 podot-config ，内容为json字符串
	eg： podot-config='{"size":"164px","color":"#ff6600","lifetime":1000}'
	其中：size为气泡放大到最大时刻的直径
		  color为气泡的颜色（只能为单色）
		  lifetime为气泡从出现到消失的时间
完整引用eg：
```
<script src="bower_components/podot/podot.js" podot-config='
{"size":"164px","color":"#ff6600","lifetime":1000}'></script>
```
          

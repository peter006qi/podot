插件名称：鼠标/触摸屏幕 产生气泡（水波纹）效果

用法：
	1. 用bower引入插件，在需要添加插件的根目录中，命令行输入 bower install podot 

	2. html文件中引入script标签,添加自定义属性 podot-config ，内容为json字符串

	3. eg： podot-config='{"event":"mousedown","size":"164px","color":"#ff6600","lifetime":1000}'

		其中：event为触发事件。	
					pc端鼠标事件（主要用：mousedown鼠标按下事件，mousemove鼠标移动事件……）
				    移动端触摸事件（主要用：touchstart触摸到屏幕后触发事件……）

			  size为气泡放大到最大时刻的直径

			  color为气泡的颜色（只能为单色）
			  
			  lifetime为气泡从出现到消失的时间
	          

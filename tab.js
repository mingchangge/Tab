var nav=[
	{
		title:'栏目1',
	},
	{
		title:'栏目2',
	},
	{
		title:'栏目3',
	}
];
;(function($,window,document,undefined){
	var app={
		init:function(){
			this.createColumn();
			this.columnClick();
		},
		createColumn:function(){
			var _li='',
				_div='',
				data=nav;
			$(data).each(function(){
				_li+='<li>'+this.title+'</li>';
				_div+='<div>'+1+'</div>';
			});
			$('#nav ul').html(_li);
			$('#nav ul').find('li').eq(0).addClass("active").siblings().removeClass("active");
			$('#navContent').html(_div);
			$('#navContent').find('div').eq(0).show().siblings().hide();
		},
		columnClick:function(){
			$('#nav ul').on('click touchstart','li',function(){
				var _index=$(this).index();
				$('#nav ul').find('li').eq(_index).addClass("active").siblings().removeClass("active");
				$('#navContent').find('div').eq(_index).show().siblings().hide();
			});
		}
	};
	app.init();
})(jQuery,window,document);
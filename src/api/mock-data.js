/**
 * @desc 假数据的模板
 */

module.exports = {
	//列表
	 'homeItems':	{
		 "msg": "操作成功",
		 "code": "200",
		 "state": "ok",
		 "data|4": [{
			 "title|":"@ctitle(4)",
			 "background":"@color",
			 "items|4-8":[
				 {
					 "text":"@cword(4, 5)",
					 "img":"@image('200x200')"
				 }
			 ]
		 }]
	 }
 }
 
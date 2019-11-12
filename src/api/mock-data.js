/**
 * @desc 假数据的模板
 */

module.exports = {
	'homeItems':	{
		"msg": "操作成功",
		"code": "200",
		"state": "ok",
		"data|4": [{
			"title":"@ctitle(4)",
			"background":"@color",
			"items|4":[
				{
					"text":"@cword(4, 5)",
					"icon":"@image('200x200')",
					"img1":"@image('200x200','@color')"
				}
			]
		}]
	},
	'homeLists':	{
		"msg": "操作成功",
		"code": "200",
		"state": "ok",
		"data|14": [{
			"title":"@cparagraph",
			"img":"@image('200x200')",
			"price|1-5000":1,
			"number|0-1000":1,
			"fullRed|1":["满99减20","满199减50","满299减100"]
		}]
	},
	'homeTabs':	{
		"msg": "操作成功",
		"code": "200",
		"state": "ok",
		"data": [
			{ 
				"text": '首页' ,
				"icon":"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png"
			},
			{
				"text": '美妆' ,
				"icon":"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png"
			},
			{ 
				"text": '百货' ,
				"icon":"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png"
			},
			{ 
				"text": '女装' ,
				"icon":"//m.360buyimg.com/mobilecms/s120x120_jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png"
			},
			{ 
				"text": '食品' ,
				"icon":"//m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png"
			},
			{ 
				"text": '生鲜' ,
				"icon":"//m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png"
			},
			{ 
				"text": '家装' ,
				"icon":"//m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png"
			},
			{ 
				"text": '母婴' ,
				"icon":"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png"
			},
			{ 
				"text": '保健' ,
				"icon":"//m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png"
			},
			{ 
				"text": '鞋靴' ,
				"icon":"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/22262/9/1470/4527/5c120cd0E5d3c6c66/4792ec307a853e9f.png"
			},
			{ 
				"text": '手机' ,
				"icon":"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/14555/23/1446/4195/5c120e71E947f3ca1/cdbad904f61e1fb7.png"
			},
			{ 
				"text": '箱包' ,
				"icon":"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/19745/21/1415/4886/5c120cbbEe58af0bf/4d19bf58d42fc9c4.png"
			},
			{ 
				"text": '男装' ,
				"icon":"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/25651/12/1391/4836/5c120c34Eb93a70fa/3a1735f6a79d0721.png"
			},
			{ 
				"text": '饰品' ,
				"icon":"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/14996/29/2195/11094/5c1afdb7Ee54cf069/d6ab6a0f64fee068.png"
			},
			{ 
				"text": '洗护' ,
				"icon":"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/27748/22/1419/4913/5c120d0eEa52ea62f/3c2b78a40edc97b2.png"
			},
			{ 
				"text": '电器' ,
				"icon":"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/19699/10/1440/6755/5c120ca6Eaa521f62/f9d57f39e55c7321.png"
			},
		]
	},
	'carousel':{
		"msg": "操作成功",
		"code": "200",
		"state": "ok",
		"data": [
			{ 
				title: "通勤出街显美小包",
				img:"http://img.alicdn.com/tfs/TB1RZVRkYr1gK0jSZR0XXbP8XXa-1500-530.jpg_760x760Q90s50.jpg_.webp",    
				img1:"//m.360buyimg.com/mobilecms/s250x200_jfs/t1/96952/7/1915/101741/5dc808a9E942f7154/ebafdbf866bb49bf.png!q70.jpg.dpg",    
			},
			{ 
				title: "DW粉底液1W1" ,
				img:"//img.alicdn.com/tfs/TB1MtMnlQP2gK0jSZPxXXacQpXa-1500-530.jpg_760x760Q90s50.jpg_.webp",    
				img1:"//m.360buyimg.com/mobilecms/s250x200_jfs/t1/83366/28/14885/28143/5dc4279aE64b04a29/e051045384823b9c.png!q70.jpg.dpg", 
			},
			{ 
				title: "秋冬男士气质穿搭" ,
				img: "//img.alicdn.com/tfs/TB1WxT2loH1gK0jSZSyXXXtlpXa-1500-530.jpg_760x760Q90s50.jpg_.webp",    
				img1:"//m.360buyimg.com/mobilecms/s250x200_jfs/t1/99317/30/1706/30055/5dc3ecb5E656a29d6/069990ea4859204e.png!q70.jpg.dpg", 
			},
			{ 
				title: "气质连衣裙" ,
				img:"//img.alicdn.com/tfs/TB13JTBlkY2gK0jSZFgXXc5OFXa-1500-530.jpg_760x760Q90s50.jpg_.webp",    
				img1:"//m.360buyimg.com/mobilecms/s250x200_jfs/t1/52482/25/15636/56531/5dc955c2Eb61e419a/b6723ac750e44a0c.jpg!q70.jpg.dpg", 
			},
			{ 
				title: "秋冬男士气质穿搭" ,
				img: "//img.alicdn.com/tfs/TB1WxT2loH1gK0jSZSyXXXtlpXa-1500-530.jpg_760x760Q90s50.jpg_.webp",    
				img1:"//m.360buyimg.com/mobilecms/s250x200_jfs/t1/90097/3/2013/77387/5dc96d38E1ece28fa/d615b7a974ed0ad5.jpg!q70.jpg.dpg", 
			},
			{ 
				title: "气质连衣裙" ,
				img:"//img.alicdn.com/tfs/TB13JTBlkY2gK0jSZFgXXc5OFXa-1500-530.jpg_760x760Q90s50.jpg_.webp",    
				img1:"//m.360buyimg.com/mobilecms/s250x200_jfs/t1/94011/22/2043/31937/5dc9524eEc86619b7/102214909026f1a7.png!q70.jpg.dpg", 
			}
		]
	},
	'cartLists':	{
		"msg": "操作成功",
		"code": "200",
		"state": "ok",
		"data|2-5": [{
			"title":"@ctitle(3,8)",
			"select":false,
			"items|1-3":[
				{
					"title":"@cparagraph",
					"img":"@image('200x200','@color')",
					"price|1-5000":1,
					"select":false,
					"number":1,
					"attribute|1":[
						["红色","白色","黑色","蓝色","绿色"],
						["xxl","xl","l","m","s"],
						["50ml","100ml","150ml","200ml","500ml"],
						["#17 1w1 象牙白","#36 1w2 自然肤色","#62 2c0 自然偏白","#66 1c1 均匀白皙","#82 2w0 深肤色"]
					]
				}
			]
		}]
	},
 }
 
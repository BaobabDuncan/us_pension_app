app.views.TabbarView = Ext.extend(Ext.TabPanel, {
	id : 'tabbarView',	
	fullscreen : true,
	
	tabBar : {
		ui : 'dark',
		dock : 'bottom',
		layout : {
			pack : 'center'
		}
	},

	cardSwitchAnimation : false,
	
	items : [{
		title : '추천무지개',		
		cls : 'card0',
		iconCls: 'team',
		xtype : 'rainbow_view',
		viewType : 2
	},{
		title : '당첨번호',		
		cls : 'card0',
		iconCls: 'team',
		html : 'tset',
		//xtype : 'kinggmae_view',
		viewType : 1
	},{
		title : '복권관리',		
		cls : 'card0',
		iconCls: 'team',
		html : 'tset',
		//xtype : 'kinggmae_view',
		viewType : 3
	},{
		title : 'About',		
		cls : 'card0',
		iconCls: 'team',
		html : 'tset',
		//xtype : 'kinggmae_view',
		viewType : 4
	}],
	
	initComponent : function() {		
		this.on('cardswitch', this.handleCardSwitch, this);
		app.views.TabbarView.superclass.initComponent.apply(this, arguments);
	},
	
	handleCardSwitch : function(container, newCard, oldCard, index, animated) {		
		printLog('tab changed ' + index);
		//printLog(newCard);		
		//newCard.refleshTab();
	}
	
 });
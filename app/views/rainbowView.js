/**
 * 
 */
  
app.views.rainbow = Ext.extend(Ext.Panel, {
	id : 'rainbow',
	fullscreen : true,
	layout : 'card',	
	
	initComponent : function() {
		printLog("===setting initComponent===");				
		var me = this;
		this.rainbowPanel = new Ext.Panel({			
			html : '<canvas id="canvas" width="300" height="300"></canvas>'
		});
		
		this.mainPanel = new Ext.Panel({
			layout : 'fit',
			dockedItems : [ {
				xtype : 'toolbar',
				title : '추천 희망 무지개',
				items : [{
					xtype : 'spacer'
				},{					
					ui : 'action',
					text : '추첨',					
					handler : function() {
						/*me.resetSpinValue();
						me.spin();	*/
						me.spinRoulettenWheel();
					}
				}]
			}],
			items : [this.rainbowPanel]
		});
		this.items = [this.mainPanel];
		
		this.mainPanel.on('afterrender', this.loadMainPanel, this);
		app.views.rainbow.superclass.initComponent.apply(this, arguments);		
	},
	loadMainPanel : function() {
		printLog("===rainbow loadMainPanel===");	
		var me = this;
		me.refleshTab();
	},
	refleshTab : function(){		
		printLog("===rainbow refleshTab===");
		var me = this;
		
		setTimeout(function(){
			me.drawRouletteWheel(Constants.Roulette.StartAngle);
		},10);
		
		
		
		
		//Ext.getCmp('sex_status-togglefield').setValue(app.mySettingVO.data.sex_status);
	},
	drawRouletteWheel : function(startAngle){
		printLog("===rainbow drawRouletteWheel===");		
		var arc = Math.PI / (Constants.Roulette.GroupNumber/2);
		
		var colors = GroupsColors;
		
		var restaraunts = Groups;
		
		var canvas = document.getElementById("canvas");
		if (canvas.getContext){
			var outsideRadius = 130;
			var textRadius = 95;
			var insideRadius = 60;
			
			ctx = canvas.getContext("2d");
			ctx.clearRect(0,0,300,300);
			
			ctx.strokeStyle = "black";
			ctx.lineWidth = 2;
			
			ctx.font = 'bold 14px Helvetica, Arial';
			
			for(var i = 0; i < Constants.Roulette.GroupNumber; i++){
				var angle = startAngle + i * arc;
				ctx.fillStyle = colors[i];				
				ctx.beginPath();
				ctx.arc(Constants.Roulette.Center, Constants.Roulette.Center, outsideRadius, angle, angle + arc, false);
				ctx.arc(Constants.Roulette.Center, Constants.Roulette.Center, insideRadius, angle + arc, angle, true);
				ctx.stroke();
				ctx.fill();				
				ctx.save();
				
				ctx.shadowOffsetX = -1;
				ctx.shadowOffsetY = -1;
				ctx.shadowBlur    = 0;
				ctx.shadowColor   = "rgb(220,220,220)";
				ctx.fillStyle = "black";
				ctx.translate(Constants.Roulette.Center + Math.cos(angle + arc / 2) * textRadius, 
							  Constants.Roulette.Center + Math.sin(angle + arc / 2) * textRadius);
				ctx.rotate(angle + arc / 2 + Math.PI / 2);
				var text = restaraunts[i];
				ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
				ctx.restore();
			}
			//Arrow
			ctx.fillStyle = "black";
			ctx.beginPath();
			ctx.moveTo(Constants.Roulette.Center - 4, Constants.Roulette.Center - (outsideRadius + 5));
			ctx.lineTo(Constants.Roulette.Center + 4, Constants.Roulette.Center - (outsideRadius + 5));
			ctx.lineTo(Constants.Roulette.Center + 4, Constants.Roulette.Center - (outsideRadius - 5));
			ctx.lineTo(Constants.Roulette.Center + 9, Constants.Roulette.Center - (outsideRadius - 5));
			ctx.lineTo(Constants.Roulette.Center + 0, Constants.Roulette.Center - (outsideRadius - 13));
			ctx.lineTo(Constants.Roulette.Center - 9, Constants.Roulette.Center - (outsideRadius - 5));
			ctx.lineTo(Constants.Roulette.Center - 4, Constants.Roulette.Center - (outsideRadius - 5));
			ctx.lineTo(Constants.Roulette.Center - 4, Constants.Roulette.Center - (outsideRadius + 5));
			ctx.fill();
		}
	},
	spinRoulettenWheel : function(){
		
	},
	/*resetSpinValue : function() {		
		StartAngle = 0;
		SpinTime = 0;
		SpinTimeTotal = 0;
		SpinAngleStart = 0;
	},
	spin : function(){
		var me = this;		
		
		SpinAngleStart = Math.random() * 10 + 10;			
		SpinTimeTotal = Math.random() * 3 + 4 * 1000;
		
		SpinTime += 30;		
		console.info(SpinTime);
		if(SpinTime >= SpinTimeTotal) {			
			me.stopRotateWheel(callbackFunc);			
			return;
		}
		var spinAngle = SpinAngleStart - me.easeOut(SpinTime, 0, SpinAngleStart, SpinTimeTotal);
		StartAngle += (spinAngle * Math.PI / 180);
		me.drawRouletteWheel(StartAngle);
		//spinTimeout = setTimeout('rainbowFacade.retrieveProxy().rotateWheel('+callbackFunc+')', 30);
	},
	stopRotateWheel : function(){
		var degrees = StartAngle * 180 / Math.PI + 90;
		var arcd = Arc * 180 / Math.PI;
		var index = Math.floor((360 - degrees % 360) / arcd);
		ctx.save();
		ctx.font = 'bold 20px Helvetica, Arial';
		var text = restaraunts[index];
		ctx.fillText(text, 150 - ctx.measureText(text).width / 2, 150 + 10);
		ctx.restore();
		//callbackFunc();
	},
	easeOut : function(t, b, c, d) {
		var ts = (t/=d)*t;
		var tc = ts*t;
		return b+c*(tc + -3*ts + 3*t);
	}*/
});
Ext.reg('rainbow_view', app.views.rainbow);

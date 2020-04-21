var bd_map = {
	map:null,
	mapId:"",
	lng:"",
	lat:"",
	zoom:13,
	is_animation:false, // 是否要跳动动画
	createMap:function(opts){
		
		if(opts.mapId) this.mapId = opts.mapId;
		else return false;
		if(opts.lng) this.lng = opts.lng;
		else return false;
		if(opts.lat) this.lat = opts.lat;
		else return false;
		
		if(opts.zoom) this.zoom = opts.zoom;
		if(opts.is_animation) this.is_animation = opts.is_animation;
		if(opts.markerArr) this.markerArr = opts.markerArr;
		
		
        this.map = new BMap.Map(this.mapId);//在百度地图容器中创建一个地图
        var point = new BMap.Point(this.lng, this.lat);//定义一个中心点坐标
        this.map.centerAndZoom(point, this.zoom);//设定地图的中心点和坐标并将地图显示在地图容器中
        var marker = new BMap.Marker(point);  // 创建标注
        this.map.addOverlay(marker);               // 将标注添加到地图中
		if(this.is_animation)
			marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
		
		// 设置地图事件
		this.map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        // this.map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        this.map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        this.map.enableKeyboard();//启用键盘上下左右键移动地图
		
		// 添加地图控件函数
		//向地图中添加缩放控件
        var ctrl_nav = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_LARGE});
        this.map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
        var ctrl_ove = new BMap.OverviewMapControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT, isOpen: 1});
        this.map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
        var ctrl_sca = new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT});
        this.map.addControl(ctrl_sca);
		return this;
	},
	/**
	** 创建marker
	**/
	addMarker:function(){
		
		for (var i = 0; i < this.markerArr.length; i++) {
            var markerData = this.markerArr[i];
            var p0 = markerData.point.split("|")[0];
            var p1 = markerData.point.split("|")[1];
            var point = new BMap.Point(p0, p1);
            var iconImg = createIcon(markerData.icon);
            var marker = new BMap.Marker(point, {icon: iconImg});
            var iw = createInfoWindow(markerData);
            var label = new BMap.Label(markerData.title, {"offset": new BMap.Size(markerData.icon.lb - markerData.icon.x + 10, -20)});
            marker.setLabel(label);
            this.map.addOverlay(marker);
            label.setStyle({
                borderColor: "#808080",
                color: "#333",
                cursor: "pointer"
            });

            (function () {
                var index = i;
                var _iw = createInfoWindow(markerData);
                var _marker = marker;
                _marker.addEventListener("click", function () {
                    this.openInfoWindow(_iw);
                });
                _iw.addEventListener("open", function () {
                    _marker.getLabel().hide();
                })
                _iw.addEventListener("close", function () {
                    _marker.getLabel().show();
                })
                label.addEventListener("click", function () {
                    _marker.openInfoWindow(_iw);
                })
                if (!!markerData.isOpen) {
                    label.hide();
                    _marker.openInfoWindow(_iw);
                }
            })();
        }
		
		
		// 创建InfoWindow
		function createInfoWindow(marker) {
			var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + marker.title + "'>" + marker.title + "</b><div class='iw_poi_content'>" + marker.content + "</div>");
			return iw;
		}
		
		// 创建一个Icon
		function createIcon(marker) {
			var icon = new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png", new BMap.Size(marker.w, marker.h), {
				imageOffset: new BMap.Size(-marker.l, -marker.t),
				infoWindowOffset: new BMap.Size(marker.lb + 5, 1),
				offset: new BMap.Size(marker.x, marker.h)
			})
			return icon;
		}
	},
	
};
(function (window) {
	function BuildAnalyticsObject(graphicSource, graphicType, percentWithout) {
		this.graphicSource 	= graphicSource || 'Unspecified Source';
		this.graphicType 		= graphicType || 'Unspecified Type';
		this.percentWithout = percentWithout || 0;
		this.isGraphicShown = this.calculateIfShown();
		this.init();
	}

	BuildAnalyticsObject.prototype = {
		calculateIfShown: function () {
			return Math.floor((Math.random() * 100) + 1) > this.percentWithout;
		},

		init: function () {
			if (!this.isGraphicShown) {
				this.hideGraphic();
			}
			this.createIframe();
			this.bindEvents();
			document.getElementById('saen-analytics-container').style.height = 0;
		},

		hideGraphic: function () {
			if (window.jQuery) {
				$('#saen-graphic-container').hide().parent().css('margin', 0);
			} else {
				var graphic = document.getElementById('saen-graphic-container');
				graphic.style.display = 'none';
			}
		},

		createIframe: function () {
			var i = document.createElement('iframe');
		  i.src = this.buildSrc();
		  i.scrolling = 'no';
		  i.frameborder = '0';
		  i.width = '0';
		  i.height = '0';
			i.style = 'border: none; margin: 0; padding: 0; vertical-align: top;';
			i.id = 'saen-graphic-iframe';
		  document.getElementById('saen-analytics-container').appendChild(i);
		},

		buildSrc: function () {
			var rootPath = 'https://s3.amazonaws.com/graphics.expressnews.com/analytics/index.html',
					isVisible = this.isGraphicShown ? 'yes' : 'no',
					queryStr = '?path=' + window.location.pathname + '&isGraphicVisible=' + isVisible + '&graphicSource=' + this.graphicSource + '&graphicType=' + this.graphicType;
			return rootPath + queryStr;
		},

		bindEvents: function () {
			var graphic 	= document.getElementById('saen-graphic-container'),
					analytics = document.getElementById('saen-graphic-iframe');
			graphic.addEventListener('mouseenter', function () {
				analytics.contentWindow.postMessage('mouseenter', 'https://s3.amazonaws.com');
			});
		},
	};

	window.buildExpressNewsAnalyticsObject = function (graphicSource, graphicType, percentWithout) {
		return new BuildAnalyticsObject(graphicSource, graphicType, percentWithout);
	};
}(window));
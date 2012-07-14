/*
 *  Project: DoMyUI
 *  Description: UI Generator based on a especifield JSON
 *  Author: Ricardson Albuquerque @nosdracir ricardson.albuquerque@gmail.com
 *  License: MIT
 */

;(function ( $, window, undefined ) {
    
    // Create the defaults once
    var pluginName = 'doMyUI',
        document = window.document,
        defaults = {
            data: "value",
            divMain: null,
            divSearch: null
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        this.options = $.extend( {}, defaults, options) ;
        
        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    var core = {

        searchCore : {

        },

        mainCore : {

            build : function(){

                var view = new DoMyUI.View();
                view = this.options.data;
                var main = new new DoMyUI.Main();
                main = view.main;
                if (existElement(main.tab))
                {
					var divMain = $("#" + this.options.divMain);
                    this.core.mainCore.buildChild(main.tab, divMain);
                }
            },

            buildChild : function(tab, parent){

                for (var i=0; i < tab.length; i++)
                {
                    var tab = new DoMyUI.Tab();
                    tab = tab[i];
                    this.mainCore.buildTab(tab, parent);
                    if (this.existElement(tab.tab) && tab.tab.length > 0)
                    {
                        this.core.mainCore.buildChild(tab.tab, tab);
                    }
                    if (this.existElement(tab.panel))
                    {
                        for (var j=0; j < tab.panel.length; j++)
                        {
                            var panel = new DoMyUI.Panel();
                            panel = tab.panel[j];
                            this.core.mainCore.buildPanel(panel, tab);
                            if (this.existElement(panel.tab) && panel.tab.length > 0)
                            {
                                this.core.mainCore.buildChild(panel.tab, panel);
                            }
                            if (this.existElement(panel.container))
                            {
                                for (var k=0; k < panel.container.length; k++)
                                {
                                    var container = new DoMyUI.container();
                                    container = panel.container[k];
                                    this.core.mainCore.buildContainer(container, panel);
                                }
                            }
                        }
                    }
                }
            },

            buildTab : function(tab, parent){
				var $newDiv = $("<div>");
				$newDiv.id(tab.id)
					.tabs()
					.show()
					.bind("tabsshow", function (event, ui) {
					if (typeof (onTabsTabShow) == 'function') {
						onTabsTabShow(event, ui);
					}
				}); 
				
				$newDiv.bind("tabsselect", function (event, ui) {
					if (typeof (onTabsTabSelect) == 'function') {
						onTabsTabSelect(event, ui);
					}					
				});
				parent.append($newDiv);
            },

            buildPanel : function(panel){
				$("#" + id).accordion({ autoHeight: false, navigation: false, header: "h3" });
				// implementando funcionalidade de disable
				var accordion = $("#" + id).data("accordion");
				if (accordion) {
					accordion._std_clickHandler = accordion._clickHandler;
					accordion._clickHandler = function (event, target) {
						var clicked = $(event.currentTarget || target);
						if (!clicked.hasClass("ui-state-disabled"))
							this._std_clickHandler(event, target);
					};
				}
            },

            buildContainer : function(container){
				switch container.type.toLowerCase() {
					case "grid":
						buildGrid(container);
						break;
					case "select":
						buildSelect(container);
						break;
					case "checklist":
						buildCheckList(container);
						break;
					case "textbox":
						buildText(container);
						break;
					case "checkbox":
						buildCheckBox(container);
						break;
					case "radio":
						buildRadioButton(container);
						break;
					case "button":
						buildButton(container);
						break;
					case "password":
						buildPassWord(container);
						break;
					case "link":
						buildLink(container);
						break;
				}	
            },

            buildGrid : function(){

            },

            buildSelect : function(){

            },

            buildCheckList : function(){

            },

            buildText : function(){
				
            },

            buildCheckBox : function(){

            },

            buildRadioButton : function(){

            },

            buildButton : function(){

            }
			
			buildPassWord : function(){

            }
			
			buildLink : function(){

            }
        }
    }

    var existElement = function(element){
        return element !== undefined || element !== null || element !== "" || typeof(element) !== "undefined";
    };

    Plugin.prototype.init = function () {
        //building the search area
        this.core.seachCore.build();
        //building the main area
        this.core.mainCore.build();
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
            }
        });
    };

}(jQuery, window));
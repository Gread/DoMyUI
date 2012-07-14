DoMyUI.View = function () { };
DoMyUI.View.prototype = {
	constructor: DoMyUI.View, 
    search : null,
	setSearch: function setSearch(value) { this.search = value; return this; },
    main : null,
	setMain : function setMain(value) { this.main = value; return this; },
	format : null,
	setFormat : function setFormat(value) { this.format = value; return this; },
	onReadyDocument: null
};

DoMyUI.Search = function () { };
DoMyUI.Search.prototype = {
	constructor: DoMyUI.Search,
	container: null,
	setContainer: function setContainer(value) { this.container = value; return this; },
	alwaysVisible: false,    
	setAlwaysVisible: function setAlwaysVisible(value) { this.alwaysVisible = value; return this; }
};

DoMyUI.Main = function () { };
DoMyUI.Main.prototype = {
    tab : null,
	setTab : function setTab(value) { this.tab = value; return this; }
};

DoMyUI.Tab = function () { };
DoMyUI.Tab.prototype = {
    panel : null,
	setPanel: function setPanel(value) { this.panel = value; return this; },
	title: null,
	setTitle: function setTitle(value) { this.title = value; return this; },
	id: null,
	setId: function setId(value) { this.id = value; return this; },
	layout: null,
	setLayout: function setLayout(value) { this.layout = value; return this; },
    tab : null,
	setTab : function setTab(value) { this.tab = value; return this; }
};

DoMyUI.Panel = function () { };
DoMyUI.Panel.prototype = {
	id: null,
	setId: function setId(value) { this.id = value; return this; },
	title: null,
	setTitle: function setTitle(value) { this.title = value; return this; },
    container : null,
	setContainer: function setContainer(value) { this.container = value; return this; },
    buttonsAlign: null,
	saveButtonDesc :null,
	insertButtonDesc: null,
	cancelButtonDesc: null,
	layout: null,
	setLayout: function setLayout(value) { this.layout = value; return this; },
    isCrudButtons: null, // if true will be create a Insert/Save button for update the grid, dont set true if you wanna inlineEdit
	isGridAfterElements: null,
    tab : null,
	setTab : function setTab(value) { this.tab = value; return this; }
};

DoMyUI.Data = function () { };
DoMyUI.Data.prototype = {
    containerColumns: null,
    dataSource: null, // json thats machs the column options, setting this value the grid is set for clientside operation or a single json for other types
    url: null, // url for get data if datasouce is null,    	
};

DoMyUI.Container = function () { };
DoMyUI.Container.prototype = {
    name  : null,
	id  : null,
	type : null, //checkbox, text, select, radio, password, grid, button, checkList, link
    events : new DoMyUI.Events(),
	layout: new DoMyUI.Layout(),
	data: null,
	validation: new DoMyUI.Validation(),
	options: new DoMyUI.Options(),	
	container: null
};

DoMyUI.Events = function () { };
DoMyUI.Events.prototype = {
    onChanged: null,
	onCreated : null,
	onbeforeCreate : null,
    onClick : null,
	cascadeFrom: null
};

DoMyUI.Validation = function () { };
DoMyUI.Validation.prototype = {
    required : null, // true or false
    requiredMessage: null, // if null get the default message
	custom: null // function for custom validation
};

DoMyUI.Options = function () { };
DoMyUI.Options.prototype = {
    isGridMember: null,
	isEditable: null,
	isKey: null,
	isSortable : null,
	isLabelSameLine : null,
	rightPrevious : null, // if true this element ll be placed in right of previous element, default false
	checkAllInHeader: null,
	searchable: null,
	isDesc: null // boolean if this column is the name of the data
};

DoMyUI.Format = function () { };
DoMyUI.Format.prototype = {
    dateFormat: null,
	moneyFormat: null
};

DoMyUI.Layout = function () { };
DoMyUI.Layout.prototype = {
	width: null,
	align: null,
    enabled: null,
	visible: null,
	tooltip: null,
	placeholder: null,	
	style: null,
	css: null,
	labelText: null	
};
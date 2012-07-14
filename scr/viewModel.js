DoMyUI.View = function () { };
DoMyUI.View.prototype = { 
    searchModel : null,
    mainModel : null,
	format : null,
	onReadyDocument: null
};

DoMyUI.Search = function () { };
DoMyUI.Search.prototype = { 
    container: null,
	alwaysVisible: null // default false
};

DoMyUI.Main = function () { };
DoMyUI.Main.prototype = {
    tabModel : null
};

DoMyUI.Tab = function () { };
DoMyUI.Tab.prototype = {
    panelModel : null,
	title: null,
	id: null,
	style: null,
	order: null,
    tabModel : null
};

DoMyUI.Panel = function () { };
DoMyUI.Panel.prototype = {
	id: null,
	title: null,
    container : null,
    buttonsAlign: null,
	saveButtonDesc :null,
	insertButtonDesc: null,
	cancelButtonDesc: null,
	layout: null,
    isCrudButtons: null, // if true will be create a Insert/Save button for update the grid, dont set true if you wanna inlineEdit
	isGridAfterElements: null,
    tabModel : null
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
    events : null,
	layout: null,
	data: null,
	validation: null,
	options: null,
	container: null
};

DoMyUI.Events = function () { };
DoMyUI.Events.prototype = {
    onChanged: null,
	onCreated : null,
	beforeCreate : null,
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
	isSortable,
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
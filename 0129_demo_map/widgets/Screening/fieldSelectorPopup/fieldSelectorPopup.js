// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dijit/_WidgetBase dojo/_base/lang dojo/Evented dojo/dom-construct dojo/_base/html dojo/_base/array dojo/query dojo/on dojo/dom-style jimu/dijit/Popup jimu/dijit/CheckBox dojo/NodeList-data".split(" "),function(r,t,d,u,m,e,n,f,h,p,v,q){return r([t,u],{baseClass:"jimu-widget-screening",selectedFields:[],fieldsPopup:null,_selectAllCheckBox:null,_selectAllCheckBoxHandle:null,_fieldsCheckBoxChangeHandle:[],constructor:function(a){this.selectedFields=[];this._selectAllCheckBoxHandle=
this._selectAllCheckBox=this.fieldsPopup=null;this._fieldsCheckBoxChangeHandle=[];d.mixin(this,a)},startup:function(){this._populateConfiguredFields();this._populateSelectedFields();this.onFieldsSelectorClick();h(window,"resize",d.hitch(this,function(){this._setFieldPopupDimensions()}))},_populateConfiguredFields:function(){for(var a in this.outFields)this.selectedFields.push(a)},_populateSelectedFields:function(){null!==this.retainSelectedFieldsArr&&(this.selectedFields=this.retainSelectedFieldsArr)},
_resetSelectAllCheckboxStatus:function(){var a=!0;this._fieldsCheckBox.forEach(function(b){b.checked||(a=!1)});a?(this._selectAllCheckBoxHandle[0].pause(),this._selectAllCheckBox.check()):(this._selectAllCheckBoxHandle[0].pause(),this._selectAllCheckBox.uncheck(!0));this._selectAllCheckBoxHandle[0].resume()},_attachFieldCheckBoxChangeEvent:function(a){this._fieldsCheckBoxChangeHandle.push(this.own(h.pausable(a,"change",d.hitch(this,function(){this._resetSelectAllCheckboxStatus()}))))},_pauseFieldCheckBoxEvent:function(){this._fieldsCheckBoxChangeHandle.forEach(function(a){a[0].pause()})},
_resumeFieldCheckBoxEvent:function(){this._fieldsCheckBoxChangeHandle.forEach(function(a){a[0].resume()})},onFieldsSelectorClick:function(){var a,b=0;var g=e.create("div",{});m.create("div",{"class":"esriCTSelectFieldReportLabel","aria-label":this.fieldTitle,tabindex:"0",role:"presentation",innerHTML:this.fieldTitle},g);var k=m.create("div",{"class":"esriCTSelectAllReportLabel"},g);this._selectAllCheckBox=new q({checked:!1,label:this.nls.reportsTab.selectAllLabel});this._selectAllCheckBoxHandle=this.own(h.pausable(this._selectAllCheckBox,
"change",d.hitch(this,function(w){this._pauseFieldCheckBoxEvent();w?this._fieldsCheckBox.forEach(function(l){l.check()}):this._fieldsCheckBox.forEach(function(l){l.uncheck(!0)});this._resumeFieldCheckBoxEvent()})));this._selectAllCheckBox.placeAt(k);k=e.create("div",{"class":"esriCTSelectFieldParentContainer",style:{maxHeight:"350px"}},g);this._fieldsCheckBox=[];for(a in this.outFields){var c=new q({checked:this._isSearchable(this.outFields[a]),label:this.outFields[a].label||this.outFields[a].alias||
a});this._attachFieldCheckBoxChangeEvent(c);e.addClass(c.domNode,"esriCTLayerFieldCheckbox");e.addClass(c.labelNode,"jimu-ellipsis");e.setAttr(c.domNode,{title:this.outFields[a].label||this.outFields[a].alias||a});"DartTheme"===this.appConfig.theme.name&&p.set(c.domNode.children[0],"backgroundColor","#4c4c4c");0===b%3&&(window.isRTL?e.setStyle(c.domNode,"marginRight",0):e.setStyle(c.domNode,"marginLeft",0));c.placeAt(k);f(c.domNode).data("fieldName",a);this._fieldsCheckBox.push(c);b++}this.fieldsPopup=
new v({titleLabel:this.popupTitle,autoHeight:!0,content:g,container:window.jimuConfig.layoutId,width:640,maxHeight:600,buttons:[{label:this.nls.common.ok,onClick:d.hitch(this,"_onSearchFieldsOk")},{label:this.nls.common.cancel,onClick:d.hitch(this,"_onCancelClick")}],onClose:d.hitch(this,function(){this.fieldsPopup=null;this.emit("onClose")})});e.addClass(this.fieldsPopup.domNode,this.appConfig.theme.name+"  "+this.baseClass);this._setFieldPopupDimensions();this._resetSelectAllCheckboxStatus()},_setFieldPopupDimensions:function(){this.fieldsPopup&&
(window.appInfo.isRunInMobile?(this.fieldsPopup.set("width",window.innerWidth-100),f(".esriCTLayerFieldCheckbox").addClass("esriCTLayerFieldWithoutMargin"),p.set(f(".esriCTSelectFieldParentContainer")[0],"height","200px")):(this.fieldsPopup.set("width",640),this.fieldsPopup.set("maxHeight",600),f(".esriCTLayerFieldCheckbox").removeClass("esriCTLayerFieldWithoutMargin")))},_isSearchable:function(a){return n.some(this.selectedFields,d.hitch(this,function(b){return a.hasOwnProperty("name")?a.name===
b:a.hasOwnProperty("fieldName")?a.fieldName===b:!1}))},_onSearchFieldsOk:function(){var a=[];n.forEach(this._fieldsCheckBox,function(b){if(b.getValue()){var g=f(b.domNode).data("fieldName");a.push(g[0]);f(b.domNode).removeData()}});this.setSearchFields(a);this.fieldsPopup.close();this.emit("onFieldSelectComplete",this.selectedFields)},_onCancelClick:function(){this.fieldsPopup.close();this.emit("onCancel")},_getSearchFields:function(){return this.selectedFields},setSearchFields:function(a){this.selectedFields=
a}})});
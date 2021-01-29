// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/on dojo/Deferred dijit/_WidgetBase dojo/Evented esri/geometry/Extent jimu/portalUrlUtils esri/dijit/Search jimu/dijit/LoadingShelter jimu/utils".split(" "),function(l,e,g,h,k,m,n,p,q,r,t,f){return l([m,n],{baseClass:"bookmark-extent-chooser",declaredClass:"bookmark.ExtentChooser",portalUrl:null,itemId:null,initExtent:null,bingMapsKey:"",geometryServiceURL:null,shelter:null,postCreate:function(){this.inherited(arguments);!this.geometryServiceURL&&
esriConfig.defaults.geometryService&&(this.geometryServiceURL=esriConfig.defaults.geometryService.url);this.geometryServiceURL||(this.geometryServiceURL=f.getServices().geometryService);this.shelter=new t({hidden:!0});this.shelter.placeAt(this.domNode);this.shelter.startup();this.shelter.show();this.mapNode=g.create("div",{style:{width:"100%",height:"100%"}},this.domNode);this.search=g.create("div",{style:{position:"absolute",right:0,top:0}},this.mapNode);this.portalUrl&&this.itemId&&(this.portalUrl=
q.getStandardPortalUrl(this.portalUrl))},createMap:function(){var c=new k,a={geometryServiceURL:this.geometryServiceURL,bingMapsKey:this.bingMapsKey};this.initExtent&&("esri.geometry.Extent"!==this.initExtent.declaredClass&&(this.initExtent=new p(this.initExtent)),a.mapOptions={extent:this.initExtent});this.lods&&("object"===typeof a.mapOptions?a.mapOptions.lods=this.lods:a.mapOptions={lods:this.lods});f.createWebMap(this.portalUrl,this.itemId,this.mapNode,a).then(e.hitch(this,function(d){this.map=
d.map;this.map.itemInfo=d.itemInfo;this.own(h(this.map,"extent-change",e.hitch(this,function(b){this.onExtentChange(b.extent)})));d=new r({map:this.map,enableLabel:!1,enableHighlight:!1,enableInfoWindow:!1},this.search);d.startup();this.own(h(d,"search-results",e.hitch(this,function(b){if(b&&b.results&&b.results[0]&&b.results[0][0]&&b.results[0][0].extent)this.onExtentChange(b.results[0][0].extent)})));if(this.initExtent)this.onExtentChange(this.initExtent);else this.onExtentChange(this.map.extent);
this.shelter.hide();this.emit("map-load",this.map);c.resolve(this.map)}),e.hitch(this,function(d){c.resolve(null);console.error(d)}));return c},getExtent:function(){return this.map&&this.map.extent},setExtent:function(c){if(this.map)return this.map.setExtent(c);var a=new k;setTimeout(e.hitch(this,function(){a.reject("map is null.")}),0);return a},restoreToDefaultWebMapExtent:function(){f.restoreToDefaultWebMapExtent(this.map,this.map.webMapResponse,this.geometryServiceURL)},onExtentChange:function(c){this.emit("extent-change",
c)}})});
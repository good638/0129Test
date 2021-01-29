// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/array dojo/_base/lang dojo/dom-class dojo/dom-geometry dojo/dom-style esri/tasks/query esri/geometry/geometryEngine esri/geometry/Polyline ./CSVUtils jimu/utils".split(" "),function(l,q,v,y,u,M,t,N,H,C){function I(a){return function(b,d){return b.attributes[a]<d.attributes[a]?-1:b.attributes[a]>d.attributes[a]?1:0}}return{getFields:function(a,b,d,e){var c=this.getSkipFields(a),g=[];if(!d&&b.advStat&&b.advStat.stats&&b.advStat.stats.outFields&&0<b.advStat.stats.outFields.length)l.forEach(b.advStat.stats.outFields,
function(k){g.push(k.expression)});else{if(a.infoTemplate)b=a.infoTemplate.info.fieldInfos;else if(0<e.map.itemInfo.itemData.operationalLayers.length){e=e.map.itemInfo.itemData.operationalLayers;b=null;var f=0;a:for(;f<e.length;f++){var h=e[f];if("ArcGISMapServiceLayer"===h.layerType&&"undefined"!==typeof h.layers)for(var m=0;m<h.layers.length;m++){var n=h.layers[m];if(n.id===a.layerId&&n.popupInfo){b=n.popupInfo.fieldInfos;break a}}}b||(b=a.fields)}else b=a.fields;if(b)for(e=0;e<b.length;e++)f=b[e],
d||"undefined"===typeof f.visible?(f=f.name?f.name:f.fieldName,-1===c.indexOf(f)&&g.push(f)):f.visible&&-1===c.indexOf(f.fieldName)&&g.push(f.fieldName)}a=this.getSpecialFields(a);return{dateFields:a.dateFields,specialFields:a.specialFields,typeIdField:a.typeIdField,types:a.types,fields:3<g.length&&!d?g.slice(0,3):g,allFields:g}},getField:function(a,b){for(var d=0;d<a.length;d++){var e=a[d];if(e.name===b||e.alias===b)return e}},getFieldValue:function(a,b,d,e,c,g,f,h,m,n){f=!1;var k=b;g="string"===
typeof k?!0:!1;d[a]&&"esriFieldTypeDate"===d[a].type&&(f=!0,-1<Object.keys(e).indexOf(a)?(d=e[a],c="undefined"!==typeof d?{dateFormat:d}:{dateFormat:c}):c={dateFormat:c},k=C.fieldFormatter.getFormattedDate(new Date(b),c));!f&&h&&m&&(k=(a=C.getDisplayValueForCodedValueOrSubtype(h,a,m))&&a.hasOwnProperty("displayValue")&&a.isCodedValueOrSubtype?a.displayValue:g?a.displayValue:this.formatNumber(k,n).num);return k},getSkipFields:function(a){var b=[];if(a.fields)for(var d=0;d<a.fields.length;d++){var e=
a.fields[d];e&&e.type&&e.name&&"esriFieldTypeGeometry"===e.type&&b.push(e.name)}return b},getSpecialFields:function(a){var b={},d=[];a.fields&&l.forEach(a.fields,q.hitch(this,function(e){if("esriFieldTypeDate"===e.type||e.domain||e.name===a.typeIdField){if("esriFieldTypeDate"===e.type&&a.infoTemplate)for(var c in a.infoTemplate._fieldsMap)"undefined"!==typeof a.infoTemplate._fieldsMap[c].fieldName&&a.infoTemplate._fieldsMap[c].fieldName===e.name&&a.infoTemplate._fieldsMap[c].format&&"undefined"!==
typeof a.infoTemplate._fieldsMap[c].format.dateFormat&&(d[e.name]=a.infoTemplate._fieldsMap[c].format.dateFormat);b[e.name]=e}}));return{specialFields:b,dateFields:d,typeIdField:a.typeIdField,types:a.types}},getSummaryFields:function(){},getPopupFields:function(a){var b=[];0<a.tabLayers.length&&l.forEach(a.tabLayers,q.hitch(this,function(d){var e=this.getSkipFields(d);"undefined"!==typeof d.popupInfo?l.forEach(d.popupInfo.fieldInfos,q.hitch(this,function(c){if(c.visible&&-1===e.indexOf(c.fieldName)){var g=
{value:0};g.expression=c.fieldName;g.label=c.label;b.push(g)}})):d.infoTemplate&&l.forEach(d.infoTemplate.info.fieldInfos,q.hitch(this,function(c){if(c.visible&&-1===e.indexOf(c.fieldName)){var g={value:0};g.expression=c.fieldName;g.label=c.label;b.push(g)}}))}));return b},getDisplayFields:function(a){if("undefined"!==typeof a.advStat&&"undefined"!==typeof a.advStat.stats&&"undefined"!==typeof a.advStat.stats.outFields)var b=a.advStat.stats.outFields;else b=[],0<a.tabLayers.length&&l.forEach(a.tabLayers,
q.hitch(this,function(d){"undefined"!==typeof d.popupInfo?l.forEach(d.popupInfo.fieldInfos,q.hitch(this,function(e){if(e.visible){var c={value:0};c.expression=e.fieldName;c.label=e.label;b.push(c)}})):d.infoTemplate?l.forEach(d.infoTemplate.info.fieldInfos,q.hitch(this,function(e){if(e.visible){var c={value:0};c.expression=e.fieldName;c.label=e.label;b.push(c)}})):l.forEach((d.layerObject?d.layerObject:d).fields,q.hitch(this,function(e){var c={value:0};c.expression=e.name;c.label=e.alias;b.push(c)}))}));
return b},exportToCSV:function(a,b,d,e,c){if(0===a.length)return!1;var g=c.baseLabel,f=[],h=[];"proximity"===c.type&&a.sort(this.compareDistance);if("undefined"===typeof b.altKey)var m=b;else m=!1,d=c.csvAllFields;l.forEach(a,q.hitch(this,function(r){"closest"===c.type&&delete r.attributes.DISTANCE;"proximity"===c.type&&(r.attributes.DISTANCE=this.getDistanceLabel(r.attributes.DISTANCE,c.unit,c.approximateLabel));f.push(r.attributes)}));if("summary"===c.type||"grouped"===c.type)if(c.hasOwnProperty("csvAllFields")&&
"allFields"===c.csvAllFields||c.hasOwnProperty("csvAllFields")&&(!0===c.csvAllFields||"true"===c.csvAllFields))for(var n in f[0])h.push(n);else if(c.hasOwnProperty("csvAllFields")&&"popUpFields"===c.csvAllFields)if(c.allFields)for(a=0;a<c.summaryFields.length;a++)h.push(c.summaryFields[a].field);else if(0===c.configuredPopUpFields.length)f=[],f.push({});else for(a=0;a<c.configuredPopUpFields.length;a++)h.push(c.configuredPopUpFields[a]);else for(a=0;a<c.summaryFields.length;a++)h.push(c.summaryFields[a].field);
else for(var k in f[0])h.push(k);a=c.layer;n=a.fields;if(a&&a.loaded&&n||m){k=b?[]:this.getSkipFields(a);var p={};if(c.opLayers&&c.opLayers._layerInfos){var w=c.opLayers.getLayerInfoById(a.id);w&&(p.popupInfo=w.getPopupInfo())}w=[];var E=0;for(;E<h.length;E++){var D=h[E];if(-1===k.indexOf(D)){var J=!1,F=0;b:for(;F<n.length;F++){var K=n[F];if(K.name===D){J=!0;break b}}J?w.push(K):w.push({name:D,alias:D,show:!0,type:"esriFieldTypeString"})}}p.datas=f;p.fromClient=!1;p.withGeometry=!1;p.outFields=w;
p.formatDate=!0;p.formatCodedValue=!0;p.formatNumber=!1;var z=[],A=[];if(!b&&d&&"undefined"!==typeof e)switch(c.type){case "proximity":z.push(c.nlsCount);A.push(e);break;case "closest":var L=0;l.forEach(e,q.hitch(this,function(r){0===L&&(l.forEach(r,function(x){z.push(x.label)}),L+=1);var B=[];l.forEach(r,function(x){B.push(x.value)});A.push(B)}));break;case "summary":l.forEach(e,q.hitch(this,function(r){var B=r.info.replace("\x3cbr/\x3e",""),x=!1,G=0;a:for(;G<c.calcFields.length;G++)if(B===c.calcFields[G].alias){x=
!0;break a}x&&(z.push(B),A.push(r.total))}));break;case "grouped":l.forEach(e,function(r){z.push(r.info.replace("\x3cbr/\x3e",""));A.push(r.total)})}if(m)return{summaryLayer:a,details:w};H.exportCSVFromFeatureLayer(g,a,p);return{summaryLayer:a,details:{appendColumns:z,appendDatas:A,name:g,type:c.nlsValue}}}H.exportCSV(g,f,h)},isURL:function(a){return/(https?:\/\/|ftp:)/g.test(a)},isEmail:function(a){return/\S+@\S+\.\S+/.test(a)},queryTabCount:function(){},performQuery:function(){},getFilter:function(a,
b){var d="";b.traversal(function(e){if(a===e.id&&e.getFilter())return d=e.getFilter(),!0});return d},getGeoms:function(a){for(var b=[],d=[],e=0;e<a.length;e++){var c=a[e].geometry?a[e].geometry:a[e];if("polygon"===c.type&&-1===b.indexOf(e)){for(var g=0;g<a.length;g++)if(g!==e&&-1===b.indexOf(g)){var f=a[g].geometry?a[g].geometry:a[g];"polygon"===f.type?t.intersects(c,f)&&(b.push(g),c=t.union(c,f)):b.push(g)}d.push(c)}}return d},createDefArray:function(a,b,d,e){for(var c=[],g=0;g<a.length;g++){var f=
a[g];if(f){var h=new M;h.returnGeometry=!1;h.geometry=b;var m=-1===[null,void 0,""].indexOf(f.id)?f.id:e.layers;h.where=this.getFilter(m,d);"undefined"!==typeof f.queryCount?c.push(f.queryCount(h)):"undefined"!==typeof f.queryIds?c.push(f.queryIds(h)):"undefined"!==typeof f.queryFeatures&&c.push(f.queryFeatures(h))}}return c},updateTabCount:function(a,b,d,e,c){var g="undefined"!==typeof c&&0<c?!0:!1;c=y.position(b).w;"undefined"!==typeof a&&0===a?(v.remove(b,"noFeatures"),v.remove(b,"noFeaturesActive"),
v.add(b,g?"noFeaturesActive":"noFeatures")):(g&&v.contains(b,"noFeatures")&&v.remove(b,"noFeatures"),g&&v.contains(b,"noFeaturesActive")&&v.remove(b,"noFeaturesActive"));d&&(a="undefined"!==typeof a?e+" ("+C.localizeNumber(a).toString()+")":e,b.innerHTML=a);d=y.position(b).w;a=0;if(d>c){var f=!0;a=d-c}else c>d&&(f=!1,a=c-d);c=y.position(b.parentNode).w;if(0<c){f=f?c+a:c-a;u.set(b.parentNode,"width",f+"px");b=b.parentNode.parentNode;c=b.parentNode;if(c&&c.children&&0<c.children.length)for(a=0;a<c.children.length;a++)if(d=
c.children[a],window.isRTL){if(-1<d.className.indexOf("SA_panelLeft")&&d){var h=d;break}}else if(-1<d.className.indexOf("SA_panelRight")){var m=d;break}h&&b&&(f>y.position(c).w?(u.set(b,"left","58px"),u.set(h,"display","block")):(u.set(b,"left","24px"),u.set(h,"display","none")));m&&b&&(f>y.position(c).w?(u.set(b,"right","58px"),u.set(m,"display","block")):(u.set(b,"right","24px"),u.set(m,"display","none")))}},getDistanceLabel:function(a,b,d){return Math.round(100*a)/100+" "+b+" ("+d+")"},getSum:function(a,
b){var d=0;l.forEach(a,function(e){d+=e.attributes[b]});return d},getMin:function(a,b){a.sort(I(b));return a[0].attributes[b]},getMax:function(a,b){a.sort(I(b));a.reverse();return a[0].attributes[b]},getArea:function(a,b,d,e,c){var g=0;d=q.clone(d);d.miles=109413;d.kilometers=109414;d.feet=109405;d.meters=109404;d.yards=109442;d.nauticalMiles=109409;var f=d[e],h;c&&c.stats&&c.stats.area&&0<c.stats.area.length&&(h=c.stats.area[0]);l.forEach(a,function(m){for(var n=0;n<b.length;n++){var k=t.intersect(m.geometry,
b[n]);if(null!==k){var p=k.spatialReference;g=4326===p.wkid||p.isWebMercator()||p.isGeographic&&p.isGeographic()?g+t.geodesicArea(k,f):g+t.planarArea(k,f)}}});return this.formatNumber(g,h).total},getLength:function(a,b,d,e,c){var g=0,f=d[e],h;c&&c.stats&&c.stats.length&&0<c.stats.length.length&&(h=c.stats.length[0]);l.forEach(a,function(m){for(var n=0;n<b.length;n++){var k=t.intersect(m.geometry,b[n]);if(null!==k){var p=k.spatialReference;g=4326===p.wkid||p.isWebMercator()||p.isGeographic&&p.isGeographic()?
g+t.geodesicLength(k,f):g+t.planarLength(k,f)}}});return this.formatNumber(g,h).total},getDistance:function(a,b,d){var e="point"!==a.type?a.getExtent().getCenter():a;b="point"!==b.type?b.getExtent().getCenter():b;e=new N([[e.x,e.y],[b.x,b.y]]);e.spatialReference=a.spatialReference;d="nauticalMiles"===d?"nautical-miles":d;return 4326===a.spatialReference.wkid||a.spatialReference.isWebMercator()?t.geodesicLength(e,d):t.planarLength(e,d)},compareDistance:function(a,b){return a.attributes.DISTANCE<b.attributes.DISTANCE?
-1:a.attributes.DISTANCE>b.attributes.DISTANCE?1:0},formatNumber:function(a,b){var d=a;if(!isNaN(a)&&null!==a&&""!==a){d=b&&b.modify&&!isNaN(a);var e;d&&"undefined"!==typeof b.truncatePlaces&&!isNaN(b.truncatePlaces)&&(e=new RegExp(0<b.truncatePlaces?"^\\d*[.]?\\d{0,"+b.truncatePlaces+"}":"^\\d*"));d=d&&b.round?1*a.toFixed(b.roundPlaces):d&&b.truncate?1*e.exec(a)[0]:a;isNaN(d)&&(d=0)}return{total:d,num:isNaN(d)||null===d||""===d?d:C.localizeNumber(d)}},getPopupConfiguredFields:function(a){var b=[];
"undefined"!==typeof a.popupInfo?l.forEach(a.popupInfo.fieldInfos,q.hitch(this,function(d){d.visible&&b.push(d.fieldName)})):a.infoTemplate&&l.forEach(a.infoTemplate.info.fieldInfos,q.hitch(this,function(d){d.visible&&b.push(d.fieldName)}));return b}}});
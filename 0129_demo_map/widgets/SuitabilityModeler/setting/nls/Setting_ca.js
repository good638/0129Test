// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/SuitabilityModeler/nls/strings":{_widgetLabel:"Modelador d'idone\u00eftat",general:{clear:"Esborra",cancel:"Cancel\u00b7la",save:"Executa",saveAs:"Exporta"},saveModel:{save:"Exporta",title:"T\u00edtol: ",summary:"Resum: ",description:"Descripci\u00f3: ",tags:"Etiquetes: ",folder:"Carpeta: ",homeFolderPattern:"{username} (Inici)",failed:"Error en exportar."},util:{colorRamp:{1:"Excessivament baix",2:"Molt baix",3:"Baix",4:"Baix-mitj\u00e0",5:"Mitj\u00e0",6:"Alt-mitj\u00e0",7:"Alt",
8:"Molt alt",9:"Excessivament alt",low:"Baixa",high:"Alta",tipPattern:"{label} ({value})",flipCaption:"Inverteix"}},wro:{caption:"Modelador d'idone\u00eftat",browsePrompt:"Servei de superposici\u00f3 ponderada",selectLayersCaption:"Seleccioneu les capes",selectLayers:"Capes",designModelCaption:"Model de disseny",designModel:"Model de disseny",transparency:"Transpar\u00e8ncia",visible:"Visible",total:"Total",unableToLoad:"No es pot carregar el model.",projectNotOpen:"No hi ha cap projecte obert.",
readMore:"M\u00e9s informaci\u00f3",validation:{validating:"S'est\u00e0 validant...",invalidItemCaption:"Av\u00eds sobre el servei de superposici\u00f3 ponderada",notAnImageService:"Aquest element no \u00e9s un servei d'imatges.",notAWroService:"Aquest element no \u00e9s un servei de superposici\u00f3 ponderada.",undefinedUrl:"No s'ha definit l'adre\u00e7a URL d'aquest element.",inaccessible:"No es pot accedir al servei.",generalError:"No es pot obrir l'element.",missingFieldPattern:"{field} \u00e9s un camp obligatori",
notAllowRasterFunction:"allowRasterFunction s'ha de definir en Cert",notNearestResampling:"defaultResamplingMethod ha de ser M\u00e9s proper",notIsWeightedOverlayProp:"La propietat clau IsWeightedOverlay ha d'estar definida en Cert",invalidLink:"L'adre\u00e7a URL no \u00e9s v\u00e0lida. No s'ha pogut obrir el lloc de la capa seleccionada.",unexpectedError:"S'ha produ\u00eft un estat inesperat.",rangeMessage:"El valor ha d'estar compr\u00e8s entre ${0} i ${1}",rangeMessage100:"El valor ha d'estar compr\u00e8s entre 0 i 100",
maxLayers:"Es permet un m\u00e0xim de ${0} capes per servei i s'ha d'eliminar una capa abans d'afegir-ne una de nova.",notFound:"No s'ha trobat la capa ${0} al servei de superposici\u00f3 ponderada",wroServiceNotDefined:"No hi ha cap servei de superposici\u00f3 ponderada definit per al model.",overlayLayerOutputInvalid:"Falta el valor de sortida dels intervals de nova representaci\u00f3 cartogr\u00e0fica [${1}] de la capa de superposici\u00f3 [${0}] o no \u00e9s v\u00e0lid",overlayLayerInputInvalid:"Falta el valor m\u00ednim/m\u00e0xim d'entrada dels intervals de nova representaci\u00f3 cartogr\u00e0fica [${1}] de la capa de superposici\u00f3 [${0}] o no \u00e9s v\u00e0lid",
overlayLayerRangesMissing:"Falten els intervals de nova representaci\u00f3 cartogr\u00e0fica de la capa de superposici\u00f3 [${0}]",overlayLayerWeight:"Les ponderacions de la capa de superposici\u00f3 han de sumar 100 com a m\u00e0xim",overlayLayerRequired:"\u00c9s necess\u00e0ria almenys una capa de superposici\u00f3",overlayLayerNotDefined:"No s'han definit les capes de superposici\u00f3",requiresColormap:"Aquesta funci\u00f3 de r\u00e0ster requereix un mapa de color, per\u00f2 el model no t\u00e9 una definici\u00f3 de mapa de color v\u00e0lida",
createModelError:"Error en crear el model",invalidModel:"El model no \u00e9s v\u00e0lid",imageServiceNotDefined:"No s'ha definit la capa del servei d'imatges",imageLayerNotDefined:"No s'ha definit la capa del servei d'imatges",histogramNotDefined:"No s'ha definit cap funci\u00f3 d'histograma de superposici\u00f3 ponderada."},colorRampLabel:{"Green Yellow Red":"Verd Groc Vermell","Red Yellow Green":"Vermell Groc Verd","Yellow to Dark Red":"De groc a vermell fosc","Dark Red to Yellow":"De vermell fosc a groc",
"Light Gray to Dark Gray":"De gris clar a gris fosc","Dark Gray to Light Gray":"De gris fosc a gris clar","Light Brown to Dark Brown":"De marr\u00f3 clar a marr\u00f3 fosc","Dark Brown to Light Brown":"De marr\u00f3 fosc a marr\u00f3 clar","Full Spectrum - Bright Red to Blue":"Espectre complet: de vermell brillant a blau","Full Spectrum - Bright Blue to Red":"Espectre complet: de blau brillant a vermell","Partial Spectrum - Yellow to Blue":"Espectre parcial: de groc a blau","Partial Spectrum - Blue to Yellow":"Espectre parcial: de blau a groc",
"Yellow-Green to Dark Blue":"De groc-verd a blau fosc","Dark Blue to Yellow-Green":"De blau fosc a groc-verd","Cold to Hot Diverging":"De fred a c\u00e0lid divergent","Hot to Cold Diverging":"De calent a fred divergent","Surface - Low to High":"Superf\u00edcie: de menys a m\u00e9s","Surface - High to Low":"Superf\u00edcie: de m\u00e9s a menys"}},tabs:{layers:"Capes",model:"Model",chart:"Gr\u00e0fic"},chart:{prompt:"Entitats",working:"S'est\u00e0 actualitzant...",polygonTool:"Dibuixa un pol\u00edgon",
freehandPolygonTool:"Dibuixa un pol\u00edgon a m\u00e0 al\u00e7ada",selectTool:"Seleccioneu-ne d'una capa",panTool:"Panor\u00e0mica",clearButton:"Esborra",noModelLayer:"No hi ha cap model.",noSubjectLayers:"El mapa no t\u00e9 capes de pol\u00edgon.",tipPattern:"${category} - ${label}: ${percent} %",tipPattern2:"${category}: ${percent} %",labelPattern:"${category} - ${label}"},_localized:{}},"widgets/SuitabilityModeler/setting/nls/strings":{allowSaveAs:"Permet l'exportaci\u00f3",startingState:"Estat d'inici:",
byUrl:"Model en blanc",byItem:"Model preconfigurat",imageServiceUrl:"URL del servei d'imatges",validate:"Valida",validating:"S'est\u00e0 validant...",validated:"La URL \u00e9s v\u00e0lida.",modelName:"Model",selectModel:"Selecciona",itemSelectorTitle:"Seleccioneu un model",ok:"D'acord",cancel:"Cancel\u00b7la",description1:"El Modelador d'idone\u00eftat us ajuda a trobar la millor ubicaci\u00f3 per a una activitat, a predir l'exposici\u00f3 al risc o a identificar on \u00e9s probable que succeeixi alguna cosa. Aquest widget us permet combinar i ponderar diferents capes perqu\u00e8 pugueu avaluar diversos factors alhora.",
description2:"El Modelador d'idone\u00eftat fa servir una superposici\u00f3 de r\u00e0ster ponderada r\u00e0pida i basada en web per generar models des d'un servei. Podeu comen\u00e7ar amb un estat en blanc d'un servei de superposici\u00f3 de r\u00e0ster ponderada (WRO) o un model de WRO preconfigurat. Trieu capes, assigneu ponderacions i ajusteu els valors de classificaci\u00f3 de les capes per definir l'an\u00e0lisi. A continuaci\u00f3, executeu el modelador, visualitzeu els resultats i, de manera opcional, deseu el resultat com a un element a l'organitzaci\u00f3 o al portal.",
description3:"M\u00e9s informaci\u00f3 sobre el Modelador d'idone\u00eftat del GeoPlanner.",_localized:{}}});
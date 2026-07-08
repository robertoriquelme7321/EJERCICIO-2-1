var wms_layers = [];


        var lyr_GoogleSatlite_0 = new ol.layer.Tile({
            'title': 'Google Satélite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Atractivos_poligonosss_1 = new ol.format.GeoJSON();
var features_Atractivos_poligonosss_1 = format_Atractivos_poligonosss_1.readFeatures(json_Atractivos_poligonosss_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Atractivos_poligonosss_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Atractivos_poligonosss_1.addFeatures(features_Atractivos_poligonosss_1);
var lyr_Atractivos_poligonosss_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Atractivos_poligonosss_1, 
                style: style_Atractivos_poligonosss_1,
                popuplayertitle: 'Atractivos_poligonosss',
                interactive: true,
    title: 'Atractivos_poligonosss<br />\
    <img src="styles/legend/Atractivos_poligonosss_1_0.png" /> Humedal Urbano Pichi Mapu<br />\
    <img src="styles/legend/Atractivos_poligonosss_1_1.png" /> Laguna Chica San Pedro<br />\
    <img src="styles/legend/Atractivos_poligonosss_1_2.png" /> Laguna Grande San Pedro<br />\
    <img src="styles/legend/Atractivos_poligonosss_1_3.png" /> Laguna Redonda<br />\
    <img src="styles/legend/Atractivos_poligonosss_1_4.png" /> Laguna Tres Pascualas<br />\
    <img src="styles/legend/Atractivos_poligonosss_1_5.png" /> Parque Ecuador<br />\
    <img src="styles/legend/Atractivos_poligonosss_1_6.png" /> <br />' });
var format_Atractivos_puntoss_2 = new ol.format.GeoJSON();
var features_Atractivos_puntoss_2 = format_Atractivos_puntoss_2.readFeatures(json_Atractivos_puntoss_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Atractivos_puntoss_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Atractivos_puntoss_2.addFeatures(features_Atractivos_puntoss_2);
var lyr_Atractivos_puntoss_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Atractivos_puntoss_2, 
                style: style_Atractivos_puntoss_2,
                popuplayertitle: 'Atractivos_puntoss',
                interactive: true,
    title: 'Atractivos_puntoss<br />\
    <img src="styles/legend/Atractivos_puntoss_2_0.png" /> Aeropuerto Internacional Carriel Sur<br />\
    <img src="styles/legend/Atractivos_puntoss_2_1.png" /> Antus Circus Parque<br />\
    <img src="styles/legend/Atractivos_puntoss_2_2.png" /> Cerro Amarillo<br />\
    <img src="styles/legend/Atractivos_puntoss_2_3.png" /> Estadio Municipal Ester Roa Rebolledo<br />\
    <img src="styles/legend/Atractivos_puntoss_2_4.png" /> Mall del Centro Concepción<br />\
    <img src="styles/legend/Atractivos_puntoss_2_5.png" /> Mall Mirador<br />\
    <img src="styles/legend/Atractivos_puntoss_2_6.png" /> Mallplaza El Trébol<br />\
    <img src="styles/legend/Atractivos_puntoss_2_7.png" /> MDS Casino Talcahuano<br />\
    <img src="styles/legend/Atractivos_puntoss_2_8.png" /> Mina Chiflón del Diablo<br />\
    <img src="styles/legend/Atractivos_puntoss_2_9.png" /> Monitor Huáscar<br />\
    <img src="styles/legend/Atractivos_puntoss_2_10.png" /> Museo Nacional de Historia Natural<br />\
    <img src="styles/legend/Atractivos_puntoss_2_11.png" /> Parque Isidora Goyenechea de Cousiño de Lota<br />\
    <img src="styles/legend/Atractivos_puntoss_2_12.png" /> Parque Zoológico Concepción<br />\
    <img src="styles/legend/Atractivos_puntoss_2_13.png" /> Parroquia El Buen Pastor<br />\
    <img src="styles/legend/Atractivos_puntoss_2_14.png" /> Playa Blanca<br />\
    <img src="styles/legend/Atractivos_puntoss_2_15.png" /> Playa El Morro<br />\
    <img src="styles/legend/Atractivos_puntoss_2_16.png" /> Playa Punta de Parra<br />\
    <img src="styles/legend/Atractivos_puntoss_2_17.png" /> Teatro de Lota<br />\
    <img src="styles/legend/Atractivos_puntoss_2_18.png" /> Tribunales de Justicia<br />\
    <img src="styles/legend/Atractivos_puntoss_2_19.png" /> <br />' });

lyr_GoogleSatlite_0.setVisible(true);lyr_Atractivos_poligonosss_1.setVisible(true);lyr_Atractivos_puntoss_2.setVisible(true);
var layersList = [lyr_GoogleSatlite_0,lyr_Atractivos_poligonosss_1,lyr_Atractivos_puntoss_2];
lyr_Atractivos_poligonosss_1.set('fieldAliases', {'id': 'id', 'LUGAR': 'LUGAR', 'COMUNA': 'COMUNA', 'ACCESO': 'ACCESO', 'HORARIO': 'HORARIO', 'X': 'X', 'Y': 'Y', 'Video': 'Video', });
lyr_Atractivos_puntoss_2.set('fieldAliases', {'id': 'id', 'LUGAR': 'LUGAR', 'COMUNA': 'COMUNA', 'ACCESO': 'ACCESO', 'HORARIO': 'HORARIO', 'X': 'X', 'Y': 'Y', });
lyr_Atractivos_poligonosss_1.set('fieldImages', {'id': 'TextEdit', 'LUGAR': 'TextEdit', 'COMUNA': 'TextEdit', 'ACCESO': 'TextEdit', 'HORARIO': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Video': 'TextEdit', });
lyr_Atractivos_puntoss_2.set('fieldImages', {'id': 'TextEdit', 'LUGAR': 'TextEdit', 'COMUNA': 'TextEdit', 'ACCESO': 'TextEdit', 'HORARIO': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Atractivos_poligonosss_1.set('fieldLabels', {'id': 'hidden field', 'LUGAR': 'no label', 'COMUNA': 'inline label - always visible', 'ACCESO': 'inline label - always visible', 'HORARIO': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'Video': 'hidden field', });
lyr_Atractivos_puntoss_2.set('fieldLabels', {'id': 'hidden field', 'LUGAR': 'no label', 'COMUNA': 'inline label - always visible', 'ACCESO': 'inline label - always visible', 'HORARIO': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', });
lyr_Atractivos_puntoss_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
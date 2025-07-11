var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_hibrido_1 = new ol.layer.Tile({
            'title': 'hibrido',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_limite_jjvvmm_2 = new ol.format.GeoJSON();
var features_limite_jjvvmm_2 = format_limite_jjvvmm_2.readFeatures(json_limite_jjvvmm_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limite_jjvvmm_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limite_jjvvmm_2.addFeatures(features_limite_jjvvmm_2);
var lyr_limite_jjvvmm_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limite_jjvvmm_2, 
                style: style_limite_jjvvmm_2,
                popuplayertitle: "limite_jjvvmm",
                interactive: true,
                title: '<img src="styles/legend/limite_jjvvmm_2.png" /> limite_jjvvmm'
            });
var format_Predios_JJVVMM_3 = new ol.format.GeoJSON();
var features_Predios_JJVVMM_3 = format_Predios_JJVVMM_3.readFeatures(json_Predios_JJVVMM_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Predios_JJVVMM_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Predios_JJVVMM_3.addFeatures(features_Predios_JJVVMM_3);
var lyr_Predios_JJVVMM_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Predios_JJVVMM_3, 
                style: style_Predios_JJVVMM_3,
                popuplayertitle: "Predios_JJVVMM",
                interactive: true,
                title: '<img src="styles/legend/Predios_JJVVMM_3.png" /> Predios_JJVVMM'
            });
var format_puntos_4 = new ol.format.GeoJSON();
var features_puntos_4 = format_puntos_4.readFeatures(json_puntos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntos_4.addFeatures(features_puntos_4);
var lyr_puntos_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntos_4, 
                style: style_puntos_4,
                popuplayertitle: "puntos",
                interactive: true,
                title: '<img src="styles/legend/puntos_4.png" /> puntos'
            });
var format_vecinos_5 = new ol.format.GeoJSON();
var features_vecinos_5 = format_vecinos_5.readFeatures(json_vecinos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vecinos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vecinos_5.addFeatures(features_vecinos_5);
var lyr_vecinos_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vecinos_5, 
                style: style_vecinos_5,
                popuplayertitle: "vecinos",
                interactive: true,
                title: '<img src="styles/legend/vecinos_5.png" /> vecinos'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_hibrido_1.setVisible(true);lyr_limite_jjvvmm_2.setVisible(true);lyr_Predios_JJVVMM_3.setVisible(true);lyr_puntos_4.setVisible(true);lyr_vecinos_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_hibrido_1,lyr_limite_jjvvmm_2,lyr_Predios_JJVVMM_3,lyr_puntos_4,lyr_vecinos_5];
lyr_limite_jjvvmm_2.set('fieldAliases', {'id': 'id', });
lyr_Predios_JJVVMM_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOM_REG': 'NOM_REG', 'NOMBRE_COM': 'NOMBRE_COM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_puntos_4.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'edad': 'edad', 'sexo': 'sexo', 'foto': 'foto', });
lyr_vecinos_5.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'sexo': 'sexo', });
lyr_limite_jjvvmm_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Predios_JJVVMM_3.set('fieldImages', {'OBJECTID': 'Range', 'NOM_REG': 'TextEdit', 'NOMBRE_COM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_puntos_4.set('fieldImages', {'id': '', 'nombre': '', 'edad': '', 'sexo': '', 'foto': '', });
lyr_vecinos_5.set('fieldImages', {'id': '', 'nombre': '', 'sexo': '', });
lyr_limite_jjvvmm_2.set('fieldLabels', {'id': 'no label', });
lyr_Predios_JJVVMM_3.set('fieldLabels', {'OBJECTID': 'no label', 'NOM_REG': 'no label', 'NOMBRE_COM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_puntos_4.set('fieldLabels', {'id': 'no label', 'nombre': 'no label', 'edad': 'no label', 'sexo': 'no label', 'foto': 'no label', });
lyr_vecinos_5.set('fieldLabels', {'id': 'no label', 'nombre': 'no label', 'sexo': 'no label', });
lyr_vecinos_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
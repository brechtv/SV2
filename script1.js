var map, streetview, overlay, pano;
		function initialize() {
		streetView = new google.maps.StreetViewPanorama(
			document.getElementById('canvas'), {
			pano: 'pano00001',
				  visible : true,
							panoProvider : getCustomPanorama
			});
		mapStyle = [{
			"featureType": "administrative",
				"elementType" : "geometry",
				"stylers" : [{
				"visibility": "off"
			}]
		},
		{
			"featureType": "administrative.land_parcel",
			"elementType" : "labels",
			"stylers" : [{
					"visibility": "off"
				}]
		},
		{
			"featureType": "poi",
			"stylers" : [{
						"visibility": "off"
					}]
		},
		{
			"featureType": "poi",
			"elementType" : "labels.text",
			"stylers" : [{
							"visibility": "off"
						}]
		},
		{
			"featureType": "road",
			"elementType" : "labels.icon",
			"stylers" : [{
								"visibility": "off"
							}]
		},
		{
			"featureType": "road.local",
			"elementType" : "labels",
			"stylers" : [{
									"visibility": "off"
								}]
		},
		{
			"featureType": "transit",
			"stylers" : [{
										"visibility": "off"
									}]
		}
		];
		map = new google.maps.Map(
			document.getElementById('map'), {
			center: pano00001.location.latLng,
					zoom : 19,
						   streetView : streetView,
										streetViewControl : true, 
															styles : mapStyle
			});

 streetView.addListener('position_changed', function() {
        map.panTo({
            lat: streetView.position.lat(),
            lng: streetView.position.lng()
        });
	//	globalpano = streetView.pano.title();
	//	localStorage.setItem("globalpano", buurpano);
	//	console.log('globalpano');
    });
		        createMarker(pano00001.location.latLng, map, pano00001.location.pano);
        createMarker(pano00002.location.latLng, map, pano00002.location.pano);
        createMarker(pano00003.location.latLng, map, pano00003.location.pano);
        createMarker(pano00004.location.latLng, map, pano00004.location.pano);
        createMarker(pano00005.location.latLng, map, pano00005.location.pano);
        createMarker(pano00006.location.latLng, map, pano00006.location.pano);
        createMarker(pano00007.location.latLng, map, pano00007.location.pano);
        createMarker(pano00008.location.latLng, map, pano00008.location.pano);
        createMarker(pano00009.location.latLng, map, pano00009.location.pano);
        createMarker(pano00010.location.latLng, map, pano00010.location.pano);
        createMarker(pano00011.location.latLng, map, pano00011.location.pano);
        createMarker(pano00012.location.latLng, map, pano00012.location.pano);
        createMarker(pano00013.location.latLng, map, pano00013.location.pano);
        createMarker(pano00014.location.latLng, map, pano00014.location.pano);
        createMarker(pano00015.location.latLng, map, pano00015.location.pano);
        createMarker(pano00016.location.latLng, map, pano00016.location.pano);
        createMarker(pano00017.location.latLng, map, pano00017.location.pano);
        createMarker(pano00018.location.latLng, map, pano00018.location.pano);
        createMarker(pano00019.location.latLng, map, pano00019.location.pano);
        createMarker(pano00020.location.latLng, map, pano00020.location.pano);
        createMarker(pano00021.location.latLng, map, pano00021.location.pano);
        createMarker(pano00022.location.latLng, map, pano00022.location.pano);
        createMarker(pano00023.location.latLng, map, pano00023.location.pano);
        createMarker(pano01000.location.latLng, map, pano01000.location.pano);
        createMarker(pano01001.location.latLng, map, pano01001.location.pano);
        createMarker(pano01002.location.latLng, map, pano01002.location.pano);
        createMarker(pano01003.location.latLng, map, pano01003.location.pano);
        createMarker(pano01004.location.latLng, map, pano01004.location.pano);
        createMarker(pano01005.location.latLng, map, pano01005.location.pano);
        createMarker(pano02000.location.latLng, map, pano02000.location.pano);
        createMarker(pano02001.location.latLng, map, pano02001.location.pano);
        createMarker(pano02002.location.latLng, map, pano02002.location.pano);
        createMarker(pano02003.location.latLng, map, pano02003.location.pano);
        createMarker(pano02004.location.latLng, map, pano02004.location.pano);
        createMarker(pano02005.location.latLng, map, pano02005.location.pano);
        createMarker(pano03000.location.latLng, map, pano03000.location.pano);
        createMarker(pano03001.location.latLng, map, pano03001.location.pano);
        createMarker(pano03002.location.latLng, map, pano03002.location.pano);
        createMarker(pano03003.location.latLng, map, pano03003.location.pano);
        createMarker(pano04000.location.latLng, map, pano04000.location.pano);
        createMarker(pano04001.location.latLng, map, pano04001.location.pano);
        createMarker(pano04002.location.latLng, map, pano04002.location.pano);
        createMarker(pano04003.location.latLng, map, pano04003.location.pano);
        createMarker(pano04004.location.latLng, map, pano04004.location.pano);
        createMarker(pano04005.location.latLng, map, pano04005.location.pano);
        createMarker(pano04006.location.latLng, map, pano04006.location.pano);
        createMarker(pano04007.location.latLng, map, pano04007.location.pano);
        createMarker(pano04008.location.latLng, map, pano04008.location.pano);
        createMarker(pano04009.location.latLng, map, pano04009.location.pano);
        createMarker(pano04010.location.latLng, map, pano04010.location.pano);
        createMarker(pano04011.location.latLng, map, pano04011.location.pano);
        createMarker(pano04012.location.latLng, map, pano04012.location.pano);
        createMarker(pano04013.location.latLng, map, pano04013.location.pano);
        createMarker(pano04014.location.latLng, map, pano04014.location.pano);
        createMarker(pano04015.location.latLng, map, pano04015.location.pano);
        createMarker(pano04016.location.latLng, map, pano04016.location.pano);
        createMarker(pano04017.location.latLng, map, pano04017.location.pano);
        createMarker(pano04018.location.latLng, map, pano04018.location.pano);
        createMarker(pano04019.location.latLng, map, pano04019.location.pano);
        createMarker(pano05000.location.latLng, map, pano05000.location.pano);
        createMarker(pano05001.location.latLng, map, pano05001.location.pano);
        createMarker(pano05002.location.latLng, map, pano05002.location.pano);
        createMarker(pano05003.location.latLng, map, pano05003.location.pano);
        createMarker(pano05004.location.latLng, map, pano05004.location.pano);
        createMarker(pano05005.location.latLng, map, pano05005.location.pano);
        createMarker(pano05006.location.latLng, map, pano05006.location.pano);
        createMarker(pano05007.location.latLng, map, pano05007.location.pano);
        createMarker(pano05008.location.latLng, map, pano05008.location.pano);
        createMarker(pano05009.location.latLng, map, pano05009.location.pano);
        createMarker(pano05010.location.latLng, map, pano05010.location.pano);
        createMarker(pano05011.location.latLng, map, pano05011.location.pano);
        createMarker(pano05012.location.latLng, map, pano05012.location.pano);
        createMarker(pano05013.location.latLng, map, pano05013.location.pano);
        createMarker(pano05014.location.latLng, map, pano05014.location.pano);
        createMarker(pano05015.location.latLng, map, pano05015.location.pano);
        createMarker(pano05016.location.latLng, map, pano05016.location.pano);
        createMarker(pano05017.location.latLng, map, pano05017.location.pano);
        createMarker(pano05018.location.latLng, map, pano05018.location.pano);
        createMarker(pano06000.location.latLng, map, pano06000.location.pano);
        createMarker(pano06001.location.latLng, map, pano06001.location.pano);
        createMarker(pano06002.location.latLng, map, pano06002.location.pano);
        createMarker(pano06003.location.latLng, map, pano06003.location.pano);
        createMarker(pano06004.location.latLng, map, pano06004.location.pano);
        createMarker(pano06005.location.latLng, map, pano06005.location.pano);
        createMarker(pano06006.location.latLng, map, pano06006.location.pano);
        createMarker(pano07000.location.latLng, map, pano07000.location.pano);
        createMarker(pano07001.location.latLng, map, pano07001.location.pano);
        createMarker(pano07002.location.latLng, map, pano07002.location.pano);
        createMarker(pano07003.location.latLng, map, pano07003.location.pano);
        createMarker(pano07004.location.latLng, map, pano07004.location.pano);
        createMarker(pano07005.location.latLng, map, pano07005.location.pano);
        createMarker(pano07006.location.latLng, map, pano07006.location.pano);
        createMarker(pano08000.location.latLng, map, pano08000.location.pano);
        createMarker(pano08001.location.latLng, map, pano08001.location.pano);
        createMarker(pano08002.location.latLng, map, pano08002.location.pano);
        createMarker(pano08003.location.latLng, map, pano08003.location.pano);
        createMarker(pano08004.location.latLng, map, pano08004.location.pano);
        createMarker(pano08005.location.latLng, map, pano08005.location.pano);
        createMarker(pano09000.location.latLng, map, pano09000.location.pano);
        createMarker(pano10000.location.latLng, map, pano10000.location.pano);
        createMarker(pano10001.location.latLng, map, pano10001.location.pano);
        createMarker(pano10002.location.latLng, map, pano10002.location.pano);
        createMarker(pano10003.location.latLng, map, pano10003.location.pano);
        createMarker(pano10004.location.latLng, map, pano10004.location.pano);
        createMarker(pano10005.location.latLng, map, pano10005.location.pano);
        createMarker(pano11000.location.latLng, map, pano11000.location.pano);
        createMarker(pano11001.location.latLng, map, pano11001.location.pano);
        createMarker(pano11002.location.latLng, map, pano11002.location.pano);
        createMarker(pano11003.location.latLng, map, pano11003.location.pano);
        createMarker(pano11004.location.latLng, map, pano11004.location.pano);
        createMarker(pano11005.location.latLng, map, pano11005.location.pano);
        createMarker(pano11006.location.latLng, map, pano11006.location.pano);
        createMarker(pano11007.location.latLng, map, pano11007.location.pano);
        createMarker(pano11008.location.latLng, map, pano11008.location.pano);
        createMarker(pano11009.location.latLng, map, pano11009.location.pano);
        createMarker(pano11010.location.latLng, map, pano11010.location.pano);
        createMarker(pano12000.location.latLng, map, pano12000.location.pano);
        createMarker(pano12001.location.latLng, map, pano12001.location.pano);
        createMarker(pano12002.location.latLng, map, pano12002.location.pano);
        createMarker(pano12003.location.latLng, map, pano12003.location.pano);
        createMarker(pano12004.location.latLng, map, pano12004.location.pano);
        createMarker(pano12005.location.latLng, map, pano12005.location.pano);
        createMarker(pano12006.location.latLng, map, pano12006.location.pano);
        createMarker(pano12007.location.latLng, map, pano12007.location.pano);
        createMarker(pano13000.location.latLng, map, pano13000.location.pano);
        createMarker(pano13001.location.latLng, map, pano13001.location.pano);
        createMarker(pano13002.location.latLng, map, pano13002.location.pano);
        createMarker(pano13003.location.latLng, map, pano13003.location.pano);
        createMarker(pano13004.location.latLng, map, pano13004.location.pano);
        createMarker(pano13005.location.latLng, map, pano13005.location.pano);
        createMarker(pano13006.location.latLng, map, pano13006.location.pano);
        createMarker(pano13007.location.latLng, map, pano13007.location.pano);
        createMarker(pano13008.location.latLng, map, pano13008.location.pano);
var ctaLayer = new google.maps.KmlLayer({ 
			url: 'https://storage.googleapis.com/brechtv/SV%202/files/gelijkvloers3.kml',
			map : map,
			preserveViewport : true
	}); 

}
     function createMarker(pos, map, title) {
			var marker = new google.maps.Marker({ 
				position: pos,
				map : map,
				title : title,
				icon : {
				path: google.maps.SymbolPath.CIRCLE,
				strokeColor : "#6D7BE3",
				scale : 5
		}
		}); 
			marker.addListener("click", function() {
				map.setCenter(marker.getPosition()); 
				streetView.setPano(title); 
	}); 
	}
	function getCustomPanoramaTileUrl(pano, zoom, tileX, tileY) {
				return "https://storage.googleapis.com/brechtv/SV%202/images/Gelijksvloers/" + pano + '.JPG';
		}
function getCustomPanorama(pano, zoom, tileX, tileY){
    switch (pano) {
        case 'pano00001':
            return pano00001;
            break;
        case 'pano00002':
            return pano00002;
            break;
        case 'pano00003':
            return pano00003;
            break;
        case 'pano00004':
            return pano00004;
            break;
        case 'pano00005':
            return pano00005;
            break;
        case 'pano00006':
            return pano00006;
            break;
        case 'pano00007':
            return pano00007;
            break;
        case 'pano00008':
            return pano00008;
            break;
        case 'pano00009':
            return pano00009;
            break;
        case 'pano00010':
            return pano00010;
            break;
        case 'pano00011':
            return pano00011;
            break;
        case 'pano00012':
            return pano00012;
            break;
        case 'pano00013':
            return pano00013;
            break;
        case 'pano00014':
            return pano00014;
            break;
        case 'pano00015':
            return pano00015;
            break;
        case 'pano00016':
            return pano00016;
            break;
        case 'pano00017':
            return pano00017;
            break;
        case 'pano00018':
            return pano00018;
            break;
        case 'pano00019':
            return pano00019;
            break;
        case 'pano00020':
            return pano00020;
            break;
        case 'pano00021':
            return pano00021;
            break;
        case 'pano00022':
            return pano00022;
            break;
        case 'pano00023':
            return pano00023;
            break;
        case 'pano01000':
            return pano01000;
            break;
        case 'pano01001':
            return pano01001;
            break;
        case 'pano01002':
            return pano01002;
            break;
        case 'pano01003':
            return pano01003;
            break;
        case 'pano01004':
            return pano01004;
            break;
        case 'pano01005':
            return pano01005;
            break;
        case 'pano02000':
            return pano02000;
            break;
        case 'pano02001':
            return pano02001;
            break;
        case 'pano02002':
            return pano02002;
            break;
        case 'pano02003':
            return pano02003;
            break;
        case 'pano02004':
            return pano02004;
            break;
        case 'pano02005':
            return pano02005;
            break;
        case 'pano03000':
            return pano03000;
            break;
        case 'pano03001':
            return pano03001;
            break;
        case 'pano03002':
            return pano03002;
            break;
        case 'pano03003':
            return pano03003;
            break;
        case 'pano04000':
            return pano04000;
            break;
        case 'pano04001':
            return pano04001;
            break;
        case 'pano04002':
            return pano04002;
            break;
        case 'pano04003':
            return pano04003;
            break;
        case 'pano04004':
            return pano04004;
            break;
        case 'pano04005':
            return pano04005;
            break;
        case 'pano04006':
            return pano04006;
            break;
        case 'pano04007':
            return pano04007;
            break;
        case 'pano04008':
            return pano04008;
            break;
        case 'pano04009':
            return pano04009;
            break;
        case 'pano04010':
            return pano04010;
            break;
        case 'pano04011':
            return pano04011;
            break;
        case 'pano04012':
            return pano04012;
            break;
        case 'pano04013':
            return pano04013;
            break;
        case 'pano04014':
            return pano04014;
            break;
        case 'pano04015':
            return pano04015;
            break;
        case 'pano04016':
            return pano04016;
            break;
        case 'pano04017':
            return pano04017;
            break;
        case 'pano04018':
            return pano04018;
            break;
        case 'pano04019':
            return pano04019;
            break;
        case 'pano05000':
            return pano05000;
            break;
        case 'pano05001':
            return pano05001;
            break;
        case 'pano05002':
            return pano05002;
            break;
        case 'pano05003':
            return pano05003;
            break;
        case 'pano05004':
            return pano05004;
            break;
        case 'pano05005':
            return pano05005;
            break;
        case 'pano05006':
            return pano05006;
            break;
        case 'pano05007':
            return pano05007;
            break;
        case 'pano05008':
            return pano05008;
            break;
        case 'pano05009':
            return pano05009;
            break;
        case 'pano05010':
            return pano05010;
            break;
        case 'pano05011':
            return pano05011;
            break;
        case 'pano05012':
            return pano05012;
            break;
        case 'pano05013':
            return pano05013;
            break;
        case 'pano05014':
            return pano05014;
            break;
        case 'pano05015':
            return pano05015;
            break;
        case 'pano05016':
            return pano05016;
            break;
        case 'pano05017':
            return pano05017;
            break;
        case 'pano05018':
            return pano05018;
            break;
        case 'pano06000':
            return pano06000;
            break;
        case 'pano06001':
            return pano06001;
            break;
        case 'pano06002':
            return pano06002;
            break;
        case 'pano06003':
            return pano06003;
            break;
        case 'pano06004':
            return pano06004;
            break;
        case 'pano06005':
            return pano06005;
            break;
        case 'pano06006':
            return pano06006;
            break;
        case 'pano07000':
            return pano07000;
            break;
        case 'pano07001':
            return pano07001;
            break;
        case 'pano07002':
            return pano07002;
            break;
        case 'pano07003':
            return pano07003;
            break;
        case 'pano07004':
            return pano07004;
            break;
        case 'pano07005':
            return pano07005;
            break;
        case 'pano07006':
            return pano07006;
            break;
        case 'pano08000':
            return pano08000;
            break;
        case 'pano08001':
            return pano08001;
            break;
        case 'pano08002':
            return pano08002;
            break;
        case 'pano08003':
            return pano08003;
            break;
        case 'pano08004':
            return pano08004;
            break;
        case 'pano08005':
            return pano08005;
            break;
        case 'pano09000':
            return pano09000;
            break;
        case 'pano10000':
            return pano10000;
            break;
        case 'pano10001':
            return pano10001;
            break;
        case 'pano10002':
            return pano10002;
            break;
        case 'pano10003':
            return pano10003;
            break;
        case 'pano10004':
            return pano10004;
            break;
        case 'pano10005':
            return pano10005;
            break;
        case 'pano11000':
            return pano11000;
            break;
        case 'pano11001':
            return pano11001;
            break;
        case 'pano11002':
            return pano11002;
            break;
        case 'pano11003':
            return pano11003;
            break;
        case 'pano11004':
            return pano11004;
            break;
        case 'pano11005':
            return pano11005;
            break;
        case 'pano11006':
            return pano11006;
            break;
        case 'pano11007':
            return pano11007;
            break;
        case 'pano11008':
            return pano11008;
            break;
        case 'pano11009':
            return pano11009;
            break;
        case 'pano11010':
            return pano11010;
            break;
        case 'pano12000':
            return pano12000;
            break;
        case 'pano12001':
            return pano12001;
            break;
        case 'pano12002':
            return pano12002;
            break;
        case 'pano12003':
            return pano12003;
            break;
        case 'pano12004':
            return pano12004;
            break;
        case 'pano12005':
            return pano12005;
            break;
        case 'pano12006':
            return pano12006;
            break;
        case 'pano12007':
            return pano12007;
            break;
        case 'pano13000':
            return pano13000;
            break;
        case 'pano13001':
            return pano13001;
            break;
        case 'pano13002':
            return pano13002;
            break;
        case 'pano13003':
            return pano13003;
            break;
        case 'pano13004':
            return pano13004;
            break;
        case 'pano13005':
            return pano13005;
            break;
        case 'pano13006':
            return pano13006;
            break;
        case 'pano13007':
            return pano13007;
            break;
        case 'pano13008':
            return pano13008;
            break;
        default:
            return pano00001;
    }
}
var pano00001 = {
    location: {
        pano: 'pano00001',
        description: 'Midden plein',
        latLng: new google.maps.LatLng(51.06010055,3.708439618)
    },
    links: [{
        description: "Naar blok D, E",
        pano: "pano00002",
        heading: 23
    },{
        description: "Naar blok E, L, M",
        pano: "pano00003",
        heading: 114
    },{
        description: "Naar blok A, F, G, P",
        pano: "pano00010",
        heading: 150
    },{
        description: "Naar blok H, I, J",
        pano: "pano00018",
        heading: 223
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 316,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano00002 = {
    location: {
        pano: 'pano00002',
        description: 'Ingang blok D',
        latLng: new google.maps.LatLng(51.06036315,3.708622344)
    },
    links: [{
        description: "Naar midden plein",
        pano: "pano00001",
        heading: 203
    },{
        description: "Naar blok E, L, M",
        pano: "pano00003",
        heading: 139
    },{
        description: "Naar gang D001",
        pano: "pano04005",
        heading: 47
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 315,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano00003 = {
    location: {
        pano: 'pano00003',
        description: 'Blok E, L, M',
        latLng: new google.maps.LatLng(51.05983985,3.709335141)
    },
    links: [{
        description: "Naar midden plein",
        pano: "pano00001",
        heading: 294
    },{
        description: "Naar ingang blok D",
        pano: "pano00002",
        heading: 319
    },{
        description: "Naar ingang blok E",
        pano: "pano00004",
        heading: 45
    },{
        description: "Naar blok L, M",
        pano: "pano00008",
        heading: 130
    },{
        description: "Naar blok A, F, G, P",
        pano: "pano00010",
        heading: 227
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 170,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano00004 = {
    location: {
        pano: 'pano00004',
        description: 'Ingang blok E',
        latLng: new google.maps.LatLng(51.05992687,3.709477969)
    },
    links: [{
        description: "Naar blok E, L, M",
        pano: "pano00003",
        heading: 225
    },{
        description: "Naar blok E",
        pano: "pano00005",
        heading: 49
    },{
        description: "Naar gang E025",
        pano: "pano05018",
        heading: 312
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 208,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano00005 = {
    location: {
        pano: 'pano00005',
        description: 'Blok E',
        latLng: new google.maps.LatLng(51.06006955,3.709745519)
    },
    links: [{
        description: "Naar ingang blok E",
        pano: "pano00004",
        heading: 229
    },{
        description: "Naar blok E",
        pano: "pano00006",
        heading: 312
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 90,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano00006 = {
    location: {
        pano: 'pano00006',
        description: 'Ingang blok E',
        latLng: new google.maps.LatLng(51.06014209,3.709621653)
    },
    links: [{
        description: "Naar blok E",
        pano: "pano00005",
        heading: 132
    },{
        description: "Naar ingang blok E",
        pano: "pano00007",
        heading: 47
    },{
        description: "Naar gang E010",
        pano: "pano05013",
        heading: 198
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 209,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano00007 = {
    location: {
        pano: 'pano00007',
        description: 'Ingang blok E',
        latLng: new google.maps.LatLng(51.06024463,3.709800504)
    },
    links: [{
        description: "Naar ingang blok E",
        pano: "pano00006",
        heading: 227
    },{
        description: "Naar gang E008",
        pano: "pano05002",
        heading: 320
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 83,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano00008 = {
    location: {
        pano: 'pano00008',
        description: 'Blok L, M',
        latLng: new google.maps.LatLng(51.05963005,3.709726743)
    },
    links: [{
        description: "Naar blok E, L, M",
        pano: "pano00003",
        heading: 310
    },{
        description: "Naar ingang blok L, M",
        pano: "pano00009",
        heading: 53
    },{
        description: "Naar blok A, F, G, P",
        pano: "pano00014",
        heading: 238
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 129,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano00009 = {
    location: {
        pano: 'pano00009',
        description: 'Ingang blok L, M',
        latLng: new google.maps.LatLng(51.05979896,3.710091524)
    },
    links: [{
        description: "Naar blok L, M",
        pano: "pano00008",
        heading: 233
    },{
        description: "Naar gang M001",
        pano: "pano12000",
        heading: 303
    },{
        description: "Naar gang L001",
        pano: "pano11000",
        heading: 155
    },{
        description: "Naar gang L001",
        pano: "pano11010",
        heading: 77
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 83,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano00010 = {
    location: {
        pano: 'pano00010',
        description: 'Blok A, F, G, P',
        latLng: new google.maps.LatLng(51.05958559,3.708893918)
    },
    links: [{
        description: "Naar midden plein",
        pano: "pano00001",
        heading: 330
    },{
        description: "Naar blok E, L, M",
        pano: "pano00003",
        heading: 47
    },{
        description: "Naar blok F,G,P",
        pano: "pano00011",
        heading: 210
    },{
        description: "Naar gang A005",
        pano: "pano01001",
        heading: 236
    },{
        description: "Naar blok F, P",
        pano: "pano00014",
        heading: 158
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 135,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano00011 = {
    location: {
        pano: 'pano00011',
        description: 'Blok G, P',
        latLng: new google.maps.LatLng(51.05932155,3.708649166)
    },
    links: [{
        description: "Naar blok A, F, G, P",
        pano: "pano00010",
        heading: 30
    },{
        description: "Naar blok F, P",
        pano: "pano00014",
        heading: 80
    },{
        description: "Naar blok G, P",
        pano: "pano00012",
        heading: 271
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 71,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano00012 = {
    location: {
        pano: 'pano00012',
        description: 'Blok G, P',
        latLng: new google.maps.LatLng(51.05932846,3.708301149)
    },
    links: [{
        description: "Naar gang G010",
        pano: "pano07000",
        heading: 258
    },{
        description: "Naar blok G, P",
        pano: "pano00011",
        heading: 91
    },{
        description: "Naar blok P",
        pano: "pano00013",
        heading: 197
    },{
        description: "Naar gang P002",
        pano: "pano13000",
        heading: 165
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 5,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano00013 = {
    location: {
        pano: 'pano00013',
        description: 'Blok P',
        latLng: new google.maps.LatLng(51.05904857,3.708157651)
    },
    links: [{
        description: "Naar blok G, P",
        pano: "pano00012",
        heading: 17
    },{
        description: "Naar gang P001",
        pano: "pano13004",
        heading: 123
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 40,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano00014 = {
    location: {
        pano: 'pano00014',
        description: 'Blok F, P',
        latLng: new google.maps.LatLng(51.05936065,3.709034063)
    },
    links: [{
        description: "Naar blok G, P",
        pano: "pano00011",
        heading: 260
    },{
        description: "Naar blok F, P",
        pano: "pano00015",
        heading: 192
    },{
        description: "Naar blok F",
        pano: "pano00016",
        heading: 176
    },{
        description: "Naar blok L, M",
        pano: "pano00008",
        heading: 58
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 349,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano00015 = {
    location: {
        pano: 'pano00015',
        description: 'Blok F, P',
        latLng: new google.maps.LatLng(51.05902807,3.708919398)
    },
    links: [{
        description: "Naar blok F, P",
        pano: "pano00014",
        heading: 12
    },{
        description: "Naar blok F",
        pano: "pano00016",
        heading: 137
    },{
        description: "Naar Rabotaria",
        pano: "pano00017",
        heading: 207
    },{
        description: "Naar gang P011",
        pano: "pano13008",
        heading: 283
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 323,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano00016 = {
    location: {
        pano: 'pano00016',
        description: 'Blok F',
        latLng: new google.maps.LatLng(51.05891735,3.709079223)
    },
    links: [{
        description: "Naar blok F, P",
        pano: "pano00015",
        heading: 317
    },{
        description: "Naar gang F001",
        pano: "pano06000",
        heading: 15
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 338,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano00017 = {
    location: {
        pano: 'pano00017',
        description: 'Rabotaria',
        latLng: new google.maps.LatLng(51.05874281,3.708682023)
    },
    links: [{
        description: "Naar blok F, P",
        pano: "pano00015",
        heading: 27
    },{
        description: "Naar cafetaria",
        pano: "pano06006",
        heading: 37
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 335,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano00018 = {
    location: {
        pano: 'pano00018',
        description: 'Blok H, I, J',
        latLng: new google.maps.LatLng(51.05975899,3.707925706)
    },
    links: [{
        description: "Naar midden plein",
        pano: "pano00001",
        heading: 43
    },{
        description: "Naar blok H, I, J",
        pano: "pano00019",
        heading: 245
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 142,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano00019 = {
    location: {
        pano: 'pano00019',
        description: 'Blok H, I, J',
        latLng: new google.maps.LatLng(51.05960095,3.707378535)
    },
    links: [{
        description: "Naar blok H, I, J",
        pano: "pano00018",
        heading: 65
    },{
        description: "Naar gang H013",
        pano: "pano08001",
        heading: 154
    },{
        description: "Naar blok I, J",
        pano: "pano00020",
        heading: 336
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 109,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano00020 = {
    location: {
        pano: 'pano00020',
        description: 'Blok I, J',
        latLng: new google.maps.LatLng(51.05969198,3.70731405)
    },
    links: [{
        description: "Naar blok H, I, J",
        pano: "pano00019",
        heading: 156
    },{
        description: "Naar blok I, J",
        pano: "pano00021",
        heading: 335
    },{
        description: "Naar afdrukdienst",
        pano: "pano09000",
        heading: 61
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 55,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano00021 = {
    location: {
        pano: 'pano00021',
        description: 'Blok I, J',
        latLng: new google.maps.LatLng(51.05979608,3.707240082)
    },
    links: [{
        description: "Naar blok H, I",
        pano: "pano00020",
        heading: 155
    },{
        description: "Naar blok I, J",
        pano: "pano00022",
        heading: 336
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 358,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano00022 = {
    location: {
        pano: 'pano00022',
        description: 'Blok I, J',
        latLng: new google.maps.LatLng(51.05991535,3.707158528)
    },
    links: [{
        description: "Naar blok H, I",
        pano: "pano00021",
        heading: 156
    },{
        description: "Naar blok J",
        pano: "pano00023",
        heading: 334
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 33,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano00023 = {
    location: {
        pano: 'pano00023',
        description: 'Blok I, J',
        latLng: new google.maps.LatLng(51.06000217,3.707091199)
    },
    links: [{
        description: "Naar blok H, I",
        pano: "pano00022",
        heading: 154
    },{
        description: "Naar gang J001",
        pano: "pano10003",
        heading: 332
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 209,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano01000 = {
    location: {
        pano: 'pano01000',
        description: 'Gang A005',
        latLng: new google.maps.LatLng(51.05945377,3.708542302)
    },
    links: [{
        description: "Naar gang A005",
        pano: "pano01001",
        heading: 73
    },{
        description: "Naar gang A002",
        pano: "pano01002",
        heading: 336
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 158,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano01001 = {
    location: {
        pano: 'pano01001',
        description: 'Gang A005',
        latLng: new google.maps.LatLng(51.05946547,3.708605581)
    },
    links: [{
        description: "Naar binnenplein",
        pano: "pano00010",
        heading: 56
    },{
        description: "Naar gang A005",
        pano: "pano01000",
        heading: 253
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 269,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano01002 = {
    location: {
        pano: 'pano01002',
        description: 'Gang A002',
        latLng: new google.maps.LatLng(51.05951792,3.708497771)
    },
    links: [{
        description: "Naar gang A005",
        pano: "pano01000",
        heading: 156
    },{
        description: "Naar gang A002",
        pano: "pano01003",
        heading: 337
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 121,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano01003 = {
    location: {
        pano: 'pano01003',
        description: 'Gang A002',
        latLng: new google.maps.LatLng(51.05957165,3.708462024)
    },
    links: [{
        description: "Naar gang A002",
        pano: "pano01002",
        heading: 157
    },{
        description: "Naar gang A002",
        pano: "pano01004",
        heading: 338
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 111,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano01004 = {
    location: {
        pano: 'pano01004',
        description: 'Gang A002',
        latLng: new google.maps.LatLng(51.0596158,3.708434642)
    },
    links: [{
        description: "Naar gang A002",
        pano: "pano01003",
        heading: 158
    },{
        description: "Naar gang A002",
        pano: "pano01005",
        heading: 321
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 88,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano01005 = {
    location: {
        pano: 'pano01005',
        description: 'Gang A002',
        latLng: new google.maps.LatLng(51.05966235,3.708375397)
    },
    links: [{
        description: "Naar gang A002",
        pano: "pano01004",
        heading: 141
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 60,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02000 = {
    location: {
        pano: 'pano02000',
        description: 'Gang B001',
        latLng: new google.maps.LatLng(51.06070278,3.70806554)
    },
    links: [{
        description: "Naar gang C001",
        pano: "pano03001",
        heading: 46
    },{
        description: "Naar gang B001",
        pano: "pano02001",
        heading: 315
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 46,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02001 = {
    location: {
        pano: 'pano02001',
        description: 'Gang B001',
        latLng: new google.maps.LatLng(51.06079071,3.7079288)
    },
    links: [{
        description: "Naar trap B002",
        pano: "pano02002",
        heading: 327
    },{
        description: "Naar gang B001",
        pano: "pano02000",
        heading: 135
    },{
        description: "Naar restaurant B004",
        pano: "pano02003",
        heading: 230
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 143,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02002 = {
    location: {
        pano: 'pano02002',
        description: 'Trap B002',
        latLng: new google.maps.LatLng(51.06083222,3.70788704)
    },
    links: [{
        description: "Naar gang B001",
        pano: "pano02001",
        heading: 147
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 151,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02003 = {
    location: {
        pano: 'pano02003',
        description: 'Restaurant B004',
        latLng: new google.maps.LatLng(51.06054339,3.70745413)
    },
    links: [{
        description: "Naar gang B001",
        pano: "pano02001",
        heading: 50
    },{
        description: "Naar restaurant B016",
        pano: "pano02004",
        heading: 311
    },{
        description: "EXTRA",
        pano: "pano02005",
        heading: 134
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 132,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02004 = {
    location: {
        pano: 'pano02004',
        description: 'Restaurant B016',
        latLng: new google.maps.LatLng(51.06064045,3.70727947)
    },
    links: [{
        description: "Naar restaurant B004",
        pano: "pano02003",
        heading: 131
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 39,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02005 = {
    location: {
        pano: 'pano02005',
        description: 'EXTRA',
        latLng: new google.maps.LatLng(51.06045143,3.7076027)
    },
    links: [{
        description: "Naar restaurant B004",
        pano: "pano02003",
        heading: 314
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 210,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano03000 = {
    location: {
        pano: 'pano03000',
        description: 'Gang C004',
        latLng: new google.maps.LatLng(51.06085479,3.70805194)
    },
    links: [{
        description: "Naar gang D057",
        pano: "pano04018",
        heading: 51
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 42,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano03001 = {
    location: {
        pano: 'pano03001',
        description: 'Gang C001',
        latLng: new google.maps.LatLng(51.06076911,3.7081765)
    },
    links: [{
        description: "Naar gang C003",
        pano: "pano03003",
        heading: 310
    },{
        description: "Naar gang D040",
        pano: "pano04019",
        heading: 50
    },{
        description: "Naar bib C002",
        pano: "pano03002",
        heading: 140
    },{
        description: "Naar gang B001",
        pano: "pano02000",
        heading: 226
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 228,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano03002 = {
    location: {
        pano: 'pano03002',
        description: 'Bib C002',
        latLng: new google.maps.LatLng(51.06071721,3.70824377)
    },
    links: [{
        description: "Naar gang C001",
        pano: "pano03001",
        heading: 320
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 143,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano03003 = {
    location: {
        pano: 'pano03003',
        description: 'Gang C003',
        latLng: new google.maps.LatLng(51.06079658,3.70812596)
    },
    links: [{
        description: "Naar gang C001",
        pano: "pano03001",
        heading: 130
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 234,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano04000 = {
    location: {
        pano: 'pano04000',
        description: 'Gang D004',
        latLng: new google.maps.LatLng(51.06068382,3.70918027)
    },
    links: [{
        description: "Naar gang D006",
        pano: "pano04001",
        heading: 45
    },{
        description: "Naar gang E008",
        pano: "pano05017",
        heading: 137
    },{
        description: "Naar gang D004",
        pano: "pano04002",
        heading: 226
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 325,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano04001 = {
    location: {
        pano: 'pano04001',
        description: 'Gang D006',
        latLng: new google.maps.LatLng(51.06071834,3.70923677)
    },
    links: [{
        description: "Naar gang D004",
        pano: "pano04000",
        heading: 225
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 326,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano04002 = {
    location: {
        pano: 'pano04002',
        description: 'Gang D004',
        latLng: new google.maps.LatLng(51.06062053,3.70907326)
    },
    links: [{
        description: "Naar gang D004",
        pano: "pano04000",
        heading: 46
    },{
        description: "Naar gang D005",
        pano: "pano04003",
        heading: 230
    },{
        description: "Naar gang D013",
        pano: "pano04006",
        heading: 318
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 137,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano04003 = {
    location: {
        pano: 'pano04003',
        description: 'Gang D005',
        latLng: new google.maps.LatLng(51.06057724,3.70899101)
    },
    links: [{
        description: "Naar gang D004",
        pano: "pano04002",
        heading: 50
    },{
        description: "Naar gang D001",
        pano: "pano04004",
        heading: 226
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 145,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano04004 = {
    location: {
        pano: 'pano04004',
        description: 'Gang D001',
        latLng: new google.maps.LatLng(51.06051837,3.70889163)
    },
    links: [{
        description: "Naar gang D005",
        pano: "pano04003",
        heading: 46
    },{
        description: "Naar gang D001",
        pano: "pano04005",
        heading: 228
    },{
        description: "Naar gang E029",
        pano: "pano05016",
        heading: 137
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 322,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano04005 = {
    location: {
        pano: 'pano04005',
        description: 'Gang D001',
        latLng: new google.maps.LatLng(51.06047679,3.70881738)
    },
    links: [{
        description: "Naar gang D001",
        pano: "pano04004",
        heading: 48
    },{
        description: "Naar ingang blok D",
        pano: "pano00002",
        heading: 227
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 314,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano04006 = {
    location: {
        pano: 'pano04006',
        description: 'Gang D013',
        latLng: new google.maps.LatLng(51.0607163,3.70893629)
    },
    links: [{
        description: "Naar gang D004",
        pano: "pano04002",
        heading: 138
    },{
        description: "Naar gang D013",
        pano: "pano04007",
        heading: 317
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 135,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano04007 = {
    location: {
        pano: 'pano04007',
        description: 'Gang D013',
        latLng: new google.maps.LatLng(51.0608422,3.70875388)
    },
    links: [{
        description: "Naar gang D013",
        pano: "pano04006",
        heading: 137
    },{
        description: "Naar gang D040",
        pano: "pano04008",
        heading: 317
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 135,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano04008 = {
    location: {
        pano: 'pano04008',
        description: 'Gang D040',
        latLng: new google.maps.LatLng(51.06100496,3.70851657)
    },
    links: [{
        description: "Naar gang D013",
        pano: "pano04007",
        heading: 137
    },{
        description: "Naar gang D025",
        pano: "pano04009",
        heading: 318
    },{
        description: "Naar gang D040",
        pano: "pano04013",
        heading: 227
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 137,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano04009 = {
    location: {
        pano: 'pano04009',
        description: 'Gang D025',
        latLng: new google.maps.LatLng(51.06105564,3.70844478)
    },
    links: [{
        description: "Naar gang D040",
        pano: "pano04008",
        heading: 138
    },{
        description: "Naar gang D025",
        pano: "pano04010",
        heading: 317
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 142,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano04010 = {
    location: {
        pano: 'pano04010',
        description: 'Gang D025',
        latLng: new google.maps.LatLng(51.06116687,3.70828389)
    },
    links: [{
        description: "Naar gang D025",
        pano: "pano04009",
        heading: 137
    },{
        description: "Naar gang D025",
        pano: "pano04011",
        heading: 317
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 135,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano04011 = {
    location: {
        pano: 'pano04011',
        description: 'Gang D025',
        latLng: new google.maps.LatLng(51.06126482,3.70814287)
    },
    links: [{
        description: "Naar gang D025",
        pano: "pano04010",
        heading: 137
    },{
        description: "Naar gang D025",
        pano: "pano04012",
        heading: 46
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 142,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano04012 = {
    location: {
        pano: 'pano04012',
        description: 'Gang D025',
        latLng: new google.maps.LatLng(51.06132713,3.708247)
    },
    links: [{
        description: "Naar gang D025",
        pano: "pano04011",
        heading: 226
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 319,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano04013 = {
    location: {
        pano: 'pano04013',
        description: 'Gang D040',
        latLng: new google.maps.LatLng(51.06093702,3.70839672)
    },
    links: [{
        description: "Naar gang D040",
        pano: "pano04008",
        heading: 47
    },{
        description: "Naar gang D040",
        pano: "pano04014",
        heading: 226
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 46,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano04014 = {
    location: {
        pano: 'pano04014',
        description: 'Gang D040',
        latLng: new google.maps.LatLng(51.06088998,3.70831647)
    },
    links: [{
        description: "Naar gang D040",
        pano: "pano04013",
        heading: 46
    },{
        description: "Naar gang D040",
        pano: "pano04015",
        heading: 226
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 229,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano04015 = {
    location: {
        pano: 'pano04015',
        description: 'Gang D040',
        latLng: new google.maps.LatLng(51.060836,3.70822597)
    },
    links: [{
        description: "Naar gang D040",
        pano: "pano04014",
        heading: 46
    },{
        description: "Naar gang D057",
        pano: "pano04018",
        heading: 319
    },{
        description: "Naar gang D040",
        pano: "pano04019",
        heading: 136
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 229,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano04016 = {
    location: {
        pano: 'pano04016',
        description: 'Gang D042',
        latLng: new google.maps.LatLng(51.06073528,3.70836811)
    },
    links: [{
        description: "Naar gang D040",
        pano: "pano04019",
        heading: 319
    },{
        description: "Naar gang D042",
        pano: "pano04017",
        heading: 137
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 328,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano04017 = {
    location: {
        pano: 'pano04017',
        description: 'Gang D042',
        latLng: new google.maps.LatLng(51.06066306,3.70847431)
    },
    links: [{
        description: "Naar gang D042",
        pano: "pano04016",
        heading: 317
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 320,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano04018 = {
    location: {
        pano: 'pano04018',
        description: 'Gang D057',
        latLng: new google.maps.LatLng(51.06089916,3.70814056)
    },
    links: [{
        description: "Naar gang D040",
        pano: "pano04015",
        heading: 139
    },{
        description: "Naar gang C004",
        pano: "pano03000",
        heading: 231
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 230,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano04019 = {
    location: {
        pano: 'pano04019',
        description: 'Gang D040',
        latLng: new google.maps.LatLng(51.06081316,3.70826068)
    },
    links: [{
        description: "Naar gang D040",
        pano: "pano04015",
        heading: 316
    },{
        description: "Naar gang D042",
        pano: "pano04016",
        heading: 139
    },{
        description: "Naar gang C001",
        pano: "pano03001",
        heading: 230
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 44,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano05000 = {
    location: {
        pano: 'pano05000',
        description: 'Lokaal E003d',
        latLng: new google.maps.LatLng(51.06041079,3.70970534)
    },
    links: [{
        description: "Naar lokaal E003",
        pano: "pano05001",
        heading: 135
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 232,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano05001 = {
    location: {
        pano: 'pano05001',
        description: 'Lokaal E003',
        latLng: new google.maps.LatLng(51.06035781,3.70978804)
    },
    links: [{
        description: "Naar lokaal E003d",
        pano: "pano05000",
        heading: 315
    },{
        description: "Naar gang E008",
        pano: "pano05002",
        heading: 225
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 228,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano05002 = {
    location: {
        pano: 'pano05002',
        description: 'Gang E008',
        latLng: new google.maps.LatLng(51.06031219,3.7097132)
    },
    links: [{
        description: "Naar lokaal E003",
        pano: "pano05001",
        heading: 45
    },{
        description: "Naar gang E008",
        pano: "pano05003",
        heading: 317
    },{
        description: "Naar ingang blok E",
        pano: "pano00007",
        heading: 140
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 47,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano05003 = {
    location: {
        pano: 'pano05003',
        description: 'Gang E008',
        latLng: new google.maps.LatLng(51.06039785,3.70958969)
    },
    links: [{
        description: "Naar gang E008",
        pano: "pano05002",
        heading: 137
    },{
        description: "Naar gang E008",
        pano: "pano05004",
        heading: 321
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 44,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano05004 = {
    location: {
        pano: 'pano05004',
        description: 'Gang E008',
        latLng: new google.maps.LatLng(51.06043422,3.70954405)
    },
    links: [{
        description: "Naar gang E008",
        pano: "pano05003",
        heading: 141
    },{
        description: "Naar gang E005",
        pano: "pano05005",
        heading: 46
    },{
        description: "Naar gang E008",
        pano: "pano05006",
        heading: 316
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 54,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano05005 = {
    location: {
        pano: 'pano05005',
        description: 'Gang E005',
        latLng: new google.maps.LatLng(51.06049722,3.70964984)
    },
    links: [{
        description: "Naar gang E008",
        pano: "pano05004",
        heading: 226
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 47,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano05006 = {
    location: {
        pano: 'pano05006',
        description: 'Gang E008',
        latLng: new google.maps.LatLng(51.06047826,3.7094779)
    },
    links: [{
        description: "Naar gang E008",
        pano: "pano05004",
        heading: 136
    },{
        description: "Naar gang E010",
        pano: "pano05007",
        heading: 226
    },{
        description: "Naar gang E008",
        pano: "pano05017",
        heading: 317
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 234,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano05007 = {
    location: {
        pano: 'pano05007',
        description: 'Gang E010',
        latLng: new google.maps.LatLng(51.06041554,3.70937101)
    },
    links: [{
        description: "Naar gang E008",
        pano: "pano05006",
        heading: 46
    },{
        description: "Naar gang E010",
        pano: "pano05008",
        heading: 226
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 227,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano05008 = {
    location: {
        pano: 'pano05008',
        description: 'Gang E010',
        latLng: new google.maps.LatLng(51.06034471,3.70925303)
    },
    links: [{
        description: "Naar gang E010",
        pano: "pano05007",
        heading: 46
    },{
        description: "Naar gang E010",
        pano: "pano05009",
        heading: 138
    },{
        description: "Naar gang E010",
        pano: "pano05015",
        heading: 226
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 50,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano05009 = {
    location: {
        pano: 'pano05009',
        description: 'Gang E010',
        latLng: new google.maps.LatLng(51.06025972,3.70937344)
    },
    links: [{
        description: "Naar gang E010",
        pano: "pano05008",
        heading: 318
    },{
        description: "Naar gang E010",
        pano: "pano05010",
        heading: 138
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 57,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano05010 = {
    location: {
        pano: 'pano05010',
        description: 'Gang E010',
        latLng: new google.maps.LatLng(51.06018284,3.709482)
    },
    links: [{
        description: "Naar gang E010",
        pano: "pano05009",
        heading: 318
    },{
        description: "Naar gang E010",
        pano: "pano05011",
        heading: 136
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 56,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano05011 = {
    location: {
        pano: 'pano05011',
        description: 'Gang E010',
        latLng: new google.maps.LatLng(51.06016536,3.70950822)
    },
    links: [{
        description: "Naar gang E010",
        pano: "pano05010",
        heading: 316
    },{
        description: "Naar gang E010",
        pano: "pano05012",
        heading: 49
    },{
        description: "Naar gang E010",
        pano: "pano05013",
        heading: 143
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 50,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano05012 = {
    location: {
        pano: 'pano05012',
        description: 'Gang E010',
        latLng: new google.maps.LatLng(51.06020096,3.70957379)
    },
    links: [{
        description: "Naar gang E010",
        pano: "pano05011",
        heading: 229
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 231,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano05013 = {
    location: {
        pano: 'pano05013',
        description: 'Gang E010',
        latLng: new google.maps.LatLng(51.06009114,3.70959522)
    },
    links: [{
        description: "Naar gang E010",
        pano: "pano05011",
        heading: 324
    },{
        description: "Naar gang E010",
        pano: "pano05014",
        heading: 224
    },{
        description: "Naar ingang blok E",
        pano: "pano00006",
        heading: 18
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 229,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano05014 = {
    location: {
        pano: 'pano05014',
        description: 'Gang E010',
        latLng: new google.maps.LatLng(51.06004981,3.70953096)
    },
    links: [{
        description: "Naar gang E010",
        pano: "pano05013",
        heading: 44
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 227,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano05015 = {
    location: {
        pano: 'pano05015',
        description: 'Gang E010',
        latLng: new google.maps.LatLng(51.06030859,3.70919334)
    },
    links: [{
        description: "Naar gang E010",
        pano: "pano05008",
        heading: 46
    },{
        description: "Naar gang E029",
        pano: "pano05016",
        heading: 317
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 51,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano05016 = {
    location: {
        pano: 'pano05016',
        description: 'Gang E029',
        latLng: new google.maps.LatLng(51.06040383,3.70905637)
    },
    links: [{
        description: "Naar gang E010",
        pano: "pano05015",
        heading: 137
    },{
        description: "Naar gang D001",
        pano: "pano04004",
        heading: 317
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 230,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano05017 = {
    location: {
        pano: 'pano05017',
        description: 'Gang E008',
        latLng: new google.maps.LatLng(51.06057175,3.70934222)
    },
    links: [{
        description: "Naar gang E008",
        pano: "pano05006",
        heading: 137
    },{
        description: "Naar gang D004",
        pano: "pano04000",
        heading: 317
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 145,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano05018 = {
    location: {
        pano: 'pano05018',
        description: 'Gang E025',
        latLng: new google.maps.LatLng(51.05997925,3.70938616)
    },
    links: [{
        description: "Naar ingang blok E",
        pano: "pano00004",
        heading: 132
    }],
	buur: [{
        up: 'pano05000'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 140,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano06000 = {
    location: {
        pano: 'pano06000',
        description: 'Gang F001',
        latLng: new google.maps.LatLng(51.05886168,3.70902358)
    },
    links: [{
        description: "Naar blok F",
        pano: "pano00016",
        heading: 32
    },{
        description: "Naar gang F002",
        pano: "pano06001",
        heading: 209
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 121,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano06001 = {
    location: {
        pano: 'pano06001',
        description: 'Gang F002',
        latLng: new google.maps.LatLng(51.05880878,3.70897658)
    },
    links: [{
        description: "Naar gang F001",
        pano: "pano06000",
        heading: 29
    },{
        description: "Naar sporthal F020",
        pano: "pano06002",
        heading: 113
    },{
        description: "Naar rabotaria F015",
        pano: "pano06004",
        heading: 238
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 8,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano06002 = {
    location: {
        pano: 'pano06002',
        description: 'Sporthal F020',
        latLng: new google.maps.LatLng(51.05877282,3.70910707)
    },
    links: [{
        description: "Naar gang F002",
        pano: "pano06001",
        heading: 293
    },{
        description: "Naar sporthal F020",
        pano: "pano06003",
        heading: 204
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 294,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano06003 = {
    location: {
        pano: 'pano06003',
        description: 'Sporthal F020',
        latLng: new google.maps.LatLng(51.05855528,3.70894728)
    },
    links: [{
        description: "Naar sporthal F020",
        pano: "pano06002",
        heading: 24
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 290,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano06004 = {
    location: {
        pano: 'pano06004',
        description: 'Rabotaria F015',
        latLng: new google.maps.LatLng(51.05878524,3.70891664)
    },
    links: [{
        description: "Naar gang F002",
        pano: "pano06001",
        heading: 58
    },{
        description: "Naar rabotaria F015",
        pano: "pano06005",
        heading: 229
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 229,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano06005 = {
    location: {
        pano: 'pano06005',
        description: 'Rabotaria F015',
        latLng: new google.maps.LatLng(51.0586914,3.70874374)
    },
    links: [{
        description: "Naar rabotaria F015",
        pano: "pano06004",
        heading: 49
    },{
        description: "Naar rabotaria F015",
        pano: "pano06006",
        heading: 347
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 197,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano06006 = {
    location: {
        pano: 'pano06006',
        description: 'Rabotaria F015',
        latLng: new google.maps.LatLng(51.05877001,3.70871565)
    },
    links: [{
        description: "Naar rabotaria F015",
        pano: "pano06005",
        heading: 167
    },{
        description: "Naar rabotaria F015",
        pano: "pano00017",
        heading: 218
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 43,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07000 = {
    location: {
        pano: 'pano07000',
        description: 'Gang G010',
        latLng: new google.maps.LatLng(51.05929479,3.70803089)
    },
    links: [{
        description: "Naar blok G, P",
        pano: "pano00012",
        heading: 78
    },{
        description: "Naar gang G010",
        pano: "pano07001",
        heading: 210
    },{
        description: "Naar gang G006",
        pano: "pano07003",
        heading: 300
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 272,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07001 = {
    location: {
        pano: 'pano07001',
        description: 'Gang G010',
        latLng: new google.maps.LatLng(51.05927713,3.70801744)
    },
    links: [{
        description: "Naar gang G010",
        pano: "pano07000",
        heading: 26
    },{
        description: "Naar gang G010",
        pano: "pano07002",
        heading: 133
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 234,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07002 = {
    location: {
        pano: 'pano07002',
        description: 'Gang G010',
        latLng: new google.maps.LatLng(51.05925759,3.70804943)
    },
    links: [{
        description: "Naar gang G010",
        pano: "pano07001",
        heading: 313
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 175,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07003 = {
    location: {
        pano: 'pano07003',
        description: 'Gang G006',
        latLng: new google.maps.LatLng(51.05931107,3.7079789)
    },
    links: [{
        description: "Naar gang G010",
        pano: "pano07000",
        heading: 115
    },{
        description: "Naar gang G006",
        pano: "pano07004",
        heading: 32
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 88,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07004 = {
    location: {
        pano: 'pano07004',
        description: 'Gang G006',
        latLng: new google.maps.LatLng(51.05938629,3.70805269)
    },
    links: [{
        description: "Naar gang G006",
        pano: "pano07003",
        heading: 212
    },{
        description: "Naar gang G006",
        pano: "pano07005",
        heading: 354
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 25,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07005 = {
    location: {
        pano: 'pano07005',
        description: 'Gang G006',
        latLng: new google.maps.LatLng(51.05946547,3.70803842)
    },
    links: [{
        description: "Naar gang G006",
        pano: "pano07004",
        heading: 173
    },{
        description: "Naar gang A031",
        pano: "pano07006",
        heading: 348
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 2,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07006 = {
    location: {
        pano: 'pano07006',
        description: 'Gang A031',
        latLng: new google.maps.LatLng(51.05952472,3.70801651)
    },
    links: [{
        description: "Naar gang G006",
        pano: "pano07005",
        heading: 167
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 341,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano08000 = {
    location: {
        pano: 'pano08000',
        description: 'Gang H013',
        latLng: new google.maps.LatLng(51.05953539,3.70766549)
    },
    links: [{
        description: "Naar gang H013",
        pano: "pano08001",
        heading: 247
    },{
        description: "Naar gang H013",
        pano: "pano08002",
        heading: 215
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 357,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano08001 = {
    location: {
        pano: 'pano08001',
        description: 'Gang H013',
        latLng: new google.maps.LatLng(51.05948111,3.70746854)
    },
    links: [{
        description: "Naar gang H013",
        pano: "pano08000",
        heading: 66
    },{
        description: "Naar gang H013",
        pano: "pano08002",
        heading: 168
    },{
        description: "Naar blok H, I, J",
        pano: "pano00019",
        heading: 335
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 70,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano08002 = {
    location: {
        pano: 'pano08002',
        description: 'Gang H013',
        latLng: new google.maps.LatLng(51.05938259,3.7074998)
    },
    links: [{
        description: "Naar gang H013",
        pano: "pano08000",
        heading: 326
    },{
        description: "Naar gang H013",
        pano: "pano08001",
        heading: 349
    },{
        description: "Naar gang H013",
        pano: "pano08004",
        heading: 247
    },{
        description: "Naar sanitair H004",
        pano: "pano08003",
        heading: 182
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 273,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano08003 = {
    location: {
        pano: 'pano08003',
        description: 'Sanitair H004',
        latLng: new google.maps.LatLng(51.05935414,3.70749869)
    },
    links: [{
        description: "Naar gang H013",
        pano: "pano08002",
        heading: 2
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 318,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano08004 = {
    location: {
        pano: 'pano08004',
        description: 'Gang H013',
        latLng: new google.maps.LatLng(51.05934984,3.70737921)
    },
    links: [{
        description: "Naar gang H013",
        pano: "pano08002",
        heading: 66
    },{
        description: "Naar gang H013",
        pano: "pano08005",
        heading: 245
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 54,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano08005 = {
    location: {
        pano: 'pano08005',
        description: 'Gang H013',
        latLng: new google.maps.LatLng(51.05931216,3.70725097)
    },
    links: [{
        description: "Naar gang H013",
        pano: "pano08004",
        heading: 65
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 68,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano09000 = {
    location: {
        pano: 'pano09000',
        description: 'Afdrukdienst I001',
        latLng: new google.maps.LatLng(51.05971509,3.70738271)
    },
    links: [{
        description: "Naar blok H, I, J",
        pano: "pano00020",
        heading: 243
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 73,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano10000 = {
    location: {
        pano: 'pano10000',
        description: 'Gang J001',
        latLng: new google.maps.LatLng(51.06003198,3.70672248)
    },
    links: [{
        description: "Naar gang J001",
        pano: "pano10001",
        heading: 65
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 263,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano10001 = {
    location: {
        pano: 'pano10001',
        description: 'Gang J001',
        latLng: new google.maps.LatLng(51.06005449,3.70680442)
    },
    links: [{
        description: "Naar gang J001",
        pano: "pano10000",
        heading: 248
    },{
        description: "Naar gang J001",
        pano: "pano10002",
        heading: 69
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 290,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano10002 = {
    location: {
        pano: 'pano10002',
        description: 'Gang J001',
        latLng: new google.maps.LatLng(51.0600791,3.70690529)
    },
    links: [{
        description: "Naar gang J001",
        pano: "pano10001",
        heading: 248
    },{
        description: "Naar gang J001",
        pano: "pano10003",
        heading: 66
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 249,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano10003 = {
    location: {
        pano: 'pano10003',
        description: 'Gang J001',
        latLng: new google.maps.LatLng(51.06010614,3.70700611)
    },
    links: [{
        description: "Naar gang J001",
        pano: "pano10002",
        heading: 248
    },{
        description: "Naar gang J005",
        pano: "pano10004",
        heading: 90
    },{
        description: "Naar blok H, I, J",
        pano: "pano00023",
        heading: 155
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 344,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano10004 = {
    location: {
        pano: 'pano10004',
        description: 'Gang J005',
        latLng: new google.maps.LatLng(51.06010603,3.70710885)
    },
    links: [{
        description: "Naar gang J001",
        pano: "pano10003",
        heading: 270
    },{
        description: "Naar gang J005",
        pano: "pano10005",
        heading: 70
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 338,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano10005 = {
    location: {
        pano: 'pano10005',
        description: 'Gang J005',
        latLng: new google.maps.LatLng(51.06012386,3.70718382)
    },
    links: [{
        description: "Naar gang J005",
        pano: "pano10004",
        heading: 250
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 336,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11000 = {
    location: {
        pano: 'pano11000',
        description: 'Gang L001',
        latLng: new google.maps.LatLng(51.05976515,3.7101156)
    },
    links: [{
        description: "Naar gang L001",
        pano: "pano11001",
        heading: 136
    },{
        description: "Naar ingang blok L, M",
        pano: "pano00009",
        heading: 359
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 111,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11001 = {
    location: {
        pano: 'pano11001',
        description: 'Gang L001',
        latLng: new google.maps.LatLng(51.05972292,3.71017984)
    },
    links: [{
        description: "Naar gang L001",
        pano: "pano11000",
        heading: 316
    },{
        description: "Naar gang L001",
        pano: "pano11002",
        heading: 46
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 100,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11002 = {
    location: {
        pano: 'pano11002',
        description: 'Gang L001',
        latLng: new google.maps.LatLng(51.05975691,3.71023859)
    },
    links: [{
        description: "Naar gang L001",
        pano: "pano11001",
        heading: 226
    },{
        description: "Naar gang L001",
        pano: "pano11003",
        heading: 46
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 291,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11003 = {
    location: {
        pano: 'pano11003',
        description: 'Gang L001',
        latLng: new google.maps.LatLng(51.05977218,3.71026324)
    },
    links: [{
        description: "Naar gang L001",
        pano: "pano11002",
        heading: 226
    },{
        description: "Naar gang L001",
        pano: "pano11004",
        heading: 49
    },{
        description: "Naar gang L001",
        pano: "pano11010",
        heading: 316
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 148,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11004 = {
    location: {
        pano: 'pano11004',
        description: 'Gang L001',
        latLng: new google.maps.LatLng(51.05979248,3.71030154)
    },
    links: [{
        description: "Naar gang L001",
        pano: "pano11003",
        heading: 231
    },{
        description: "Naar gang L001",
        pano: "pano11005",
        heading: 47
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 255,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11005 = {
    location: {
        pano: 'pano11005',
        description: 'Gang L001',
        latLng: new google.maps.LatLng(51.0598309,3.71036851)
    },
    links: [{
        description: "Naar gang L001",
        pano: "pano11004",
        heading: 228
    },{
        description: "Naar gang L001",
        pano: "pano11006",
        heading: 137
    },{
        description: "Naar gang L001",
        pano: "pano11007",
        heading: 318
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 200,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11006 = {
    location: {
        pano: 'pano11006',
        description: 'Gang L001',
        latLng: new google.maps.LatLng(51.05978092,3.71044182)
    },
    links: [{
        description: "Naar gang L001",
        pano: "pano11005",
        heading: 318
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 204,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11007 = {
    location: {
        pano: 'pano11007',
        description: 'Gang L001',
        latLng: new google.maps.LatLng(51.05985099,3.71033952)
    },
    links: [{
        description: "Naar gang L001",
        pano: "pano11005",
        heading: 137
    },{
        description: "Naar gang L001",
        pano: "pano11008",
        heading: 318
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 270,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11008 = {
    location: {
        pano: 'pano11008',
        description: 'Gang L001',
        latLng: new google.maps.LatLng(51.05988606,3.71028877)
    },
    links: [{
        description: "Naar gang L001",
        pano: "pano11007",
        heading: 137
    },{
        description: "Naar gang L001",
        pano: "pano11009",
        heading: 225
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 279,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11009 = {
    location: {
        pano: 'pano11009',
        description: 'Gang L001',
        latLng: new google.maps.LatLng(51.05985627,3.71024171)
    },
    links: [{
        description: "Naar gang L001",
        pano: "pano11010",
        heading: 212
    },{
        description: "Naar gang L001",
        pano: "pano11008",
        heading: 45
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 192,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11010 = {
    location: {
        pano: 'pano11010',
        description: 'Gang L001',
        latLng: new google.maps.LatLng(51.05981424,3.71019851)
    },
    links: [{
        description: "Naar gang L001",
        pano: "pano11009",
        heading: 32
    },{
        description: "Naar gang L001",
        pano: "pano11003",
        heading: 136
    },{
        description: "Naar ingang blok L, M",
        pano: "pano00009",
        heading: 250
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 209,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12000 = {
    location: {
        pano: 'pano12000',
        description: 'Gang M001',
        latLng: new google.maps.LatLng(51.05988329,3.70988854)
    },
    links: [{
        description: "Naar gang M001",
        pano: "pano12001",
        heading: 320
    },{
        description: "Naar ingang blok L, M",
        pano: "pano00009",
        heading: 123
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 77,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12001 = {
    location: {
        pano: 'pano12001',
        description: 'Gang M001',
        latLng: new google.maps.LatLng(51.05992587,3.70983305)
    },
    links: [{
        description: "Naar gang M001",
        pano: "pano12000",
        heading: 140
    },{
        description: "Naar gang M001",
        pano: "pano12002",
        heading: 228
    },{
        description: "Naar gang M001",
        pano: "pano12004",
        heading: 44
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 240,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12002 = {
    location: {
        pano: 'pano12002',
        description: 'Gang M001',
        latLng: new google.maps.LatLng(51.05986595,3.70972699)
    },
    links: [{
        description: "Naar gang M001",
        pano: "pano12001",
        heading: 48
    },{
        description: "Naar gang M001",
        pano: "pano12003",
        heading: 139
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 224,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12003 = {
    location: {
        pano: 'pano12003',
        description: 'Gang M001',
        latLng: new google.maps.LatLng(51.0598325,3.70977292)
    },
    links: [{
        description: "Naar gang M001",
        pano: "pano12002",
        heading: 319
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 181,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12004 = {
    location: {
        pano: 'pano12004',
        description: 'Gang M001',
        latLng: new google.maps.LatLng(51.05993989,3.70985509)
    },
    links: [{
        description: "Naar gang M001",
        pano: "pano12001",
        heading: 224
    },{
        description: "Naar gang M002",
        pano: "pano12005",
        heading: 137
    },{
        description: "Naar gang M001",
        pano: "pano12006",
        heading: 46
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 130,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12005 = {
    location: {
        pano: 'pano12005',
        description: 'Gang M002',
        latLng: new google.maps.LatLng(51.05992213,3.70988051)
    },
    links: [{
        description: "Naar gang M001",
        pano: "pano12004",
        heading: 317
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 136,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12006 = {
    location: {
        pano: 'pano12006',
        description: 'Gang M001',
        latLng: new google.maps.LatLng(51.05997766,3.70991919)
    },
    links: [{
        description: "Naar gang M001",
        pano: "pano12004",
        heading: 226
    },{
        description: "Naar gang M001",
        pano: "pano12007",
        heading: 48
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 56,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12007 = {
    location: {
        pano: 'pano12007',
        description: 'Gang M001',
        latLng: new google.maps.LatLng(51.06000014,3.70995999)
    },
    links: [{
        description: "Naar gang M001",
        pano: "pano12006",
        heading: 228
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 130,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano13000 = {
    location: {
        pano: 'pano13000',
        description: 'Gang P002',
        latLng: new google.maps.LatLng(51.05917258,3.70836447)
    },
    links: [{
        description: "Naar blok G, P",
        pano: "pano00012",
        heading: 345
    },{
        description: "Naar gang P002",
        pano: "pano13001",
        heading: 204
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 341,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano13001 = {
    location: {
        pano: 'pano13001',
        description: 'Gang P002',
        latLng: new google.maps.LatLng(51.05911774,3.70832483)
    },
    links: [{
        description: "Naar gang P002",
        pano: "pano13000",
        heading: 24
    },{
        description: "Naar gang P001",
        pano: "pano13002",
        heading: 205
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 2,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano13002 = {
    location: {
        pano: 'pano13002',
        description: 'Gang P001',
        latLng: new google.maps.LatLng(51.05908842,3.70830213)
    },
    links: [{
        description: "Naar gang P002",
        pano: "pano13001",
        heading: 25
    },{
        description: "Naar gang P001",
        pano: "pano13003",
        heading: 205
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 330,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano13003 = {
    location: {
        pano: 'pano13003',
        description: 'Gang P001',
        latLng: new google.maps.LatLng(51.0590528,3.70827544)
    },
    links: [{
        description: "Naar gang P001",
        pano: "pano13002",
        heading: 25
    },{
        description: "Naar gang P001",
        pano: "pano13004",
        heading: 204
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 66,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano13004 = {
    location: {
        pano: 'pano13004',
        description: 'Gang P001',
        latLng: new google.maps.LatLng(51.05901161,3.70824549)
    },
    links: [{
        description: "Naar gang P001",
        pano: "pano13003",
        heading: 24
    },{
        description: "Naar gang P001",
        pano: "pano13005",
        heading: 112
    },{
        description: "Naar gang P001",
        pano: "pano13006",
        heading: 208
    },{
        description: "Naar blok P",
        pano: "pano00013",
        heading: 303
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 319,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano13005 = {
    location: {
        pano: 'pano13005',
        description: 'Gang P001',
        latLng: new google.maps.LatLng(51.05899979,3.70828986)
    },
    links: [{
        description: "Naar gang P001",
        pano: "pano13004",
        heading: 292
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 46,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano13006 = {
    location: {
        pano: 'pano13006',
        description: 'Gang P001',
        latLng: new google.maps.LatLng(51.05897106,3.70821111)
    },
    links: [{
        description: "Naar gang P001",
        pano: "pano13004",
        heading: 28
    },{
        description: "Naar gang P001",
        pano: "pano13007",
        heading: 204
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 123,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano13007 = {
    location: {
        pano: 'pano13007',
        description: 'Gang P001',
        latLng: new google.maps.LatLng(51.058896,3.70815598)
    },
    links: [{
        description: "Naar gang P001",
        pano: "pano13006",
        heading: 24
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 204,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano13008 = {
    location: {
        pano: 'pano13008',
        description: 'Gang P001',
        latLng: new google.maps.LatLng(51.05905573,3.70873765)
    },
    links: [{
        description: "Naar blok F, P",
        pano: "pano00015",
        heading: 103
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 11,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
google.maps.event.addDomListener(window, 'load', initialize);

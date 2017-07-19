var map, streetview, overlay, pano, globalpano;
var room_markers = [];
// initialize map & streetView
// add KML overlay
// add markers

function initialize() {
    // check if it exists, if it does, use it as first pano, if not, use default
        // get neighbourpanos from local storage
    neighbourpano_from_3 = localStorage.getItem("neighbourpano_from_3_to_4");

    if (neighbourpano_from_3 != null && neighbourpano_from_3 != 'undefined') {
        loadSV(neighbourpano_from_3);
    } else {
        loadSV("pano02000");
    };
    localStorage.clear();
}

function loadSV(initpano) {

    streetView = new google.maps.StreetViewPanorama(
        document.getElementById('canvas'), {
            pano: initpano,
            visible: true,
            panoProvider: getCustomPanorama
        });

    map = new google.maps.Map(
        document.getElementById('map'), {
            center: pano02000.location.latLng,
            zoom: 18,
            streetView: streetView,
            streetViewControl: true,
            styles: mapStyle
        });

    streetView.addListener('position_changed', function() {
        map.panTo({
            lat: streetView.position.lat(),
            lng: streetView.position.lng()
        });

        // save current pano to localStorage, clear old storage
        localStorage.clear(); // remove previously stored pano
        globalpano = streetView.getPano(); // get current pano
        localStorage.setItem("globalpano", globalpano); // write current pano to ls
        returnNeighbour(globalpano);

        function returnNeighbour(pano) {
            try {
                var current_pano = getCustomPanorama(pano)
                var neighbours = (typeof current_pano != 'undefined' ? current_pano.neighbours : undefined);
                neighbour_down = (typeof neighbours != 'undefined' ? neighbours[0].down : undefined);
                localStorage.setItem("neighbourpano_from_4_to_3", neighbour_down);
            } catch (err) {
                return false
            }
        }
    });


    $("#room_search_input").keypress(function(a) {
        if (a.keyCode == 13) {
          input = $( "#room_search_input" ).val().toUpperCase().replace(/[^A-Z0-9]/gi, '');

          room = getRoom(input);
          room == undefined && alert("Lokaal niet gevonden! Gelieve een geldige lokaalnaam in te voeren.");

          room_latlng = new google.maps.LatLng(room.lat, room.lng);
          room_name = room.room;
          createRoomMarker(room_latlng, map, room_name);
            }
        });

        function getRoom(input) {
          for(var i = 0 ; i < ROOMS.length; i++) {
              var object = ROOMS[i];
              if (object.room === input) {
                return object
              }
          }
        }

        function createRoomMarker(pos, map, title) {
            clearMarkers();

            window.setTimeout(function() {

             var marker = new google.maps.Marker({
                    position: pos,
                    map: map,
                    title: title,
                    animation: google.maps.Animation.DROP
                  });

             var infowindow = new google.maps.InfoWindow({
                  content: "<div><h5>Lokaal <strong>" + title  + "</strong></h5></div>"
                });

            infowindow.open(map, marker);

            setTimeout(function() {
               marker.setMap(null);
               delete marker;
              }, 5000);
            }, 500);



            map.setCenter(pos);
            map.setZoom(20);

        }

        function clearMarkers() {
            for (var i = 0; i < room_markers.length; i++) {
              room_markers[i].setMap(null);
            }
            room_markers = [];

          }

    createMarker(pano02000.location.latLng, map, pano02000.location.pano);
    createMarker(pano02001.location.latLng, map, pano02001.location.pano);
    createMarker(pano02002.location.latLng, map, pano02002.location.pano);
    createMarker(pano02003.location.latLng, map, pano02003.location.pano);
    createMarker(pano02004.location.latLng, map, pano02004.location.pano);
    createMarker(pano02005.location.latLng, map, pano02005.location.pano);
    createMarker(pano02006.location.latLng, map, pano02006.location.pano);
    createMarker(pano02007.location.latLng, map, pano02007.location.pano);
    createMarker(pano02008.location.latLng, map, pano02008.location.pano);
    createMarker(pano02009.location.latLng, map, pano02009.location.pano);
    createMarker(pano02010.location.latLng, map, pano02010.location.pano);
    createMarker(pano02011.location.latLng, map, pano02011.location.pano);
    createMarker(pano02012.location.latLng, map, pano02012.location.pano);
    createMarker(pano02013.location.latLng, map, pano02013.location.pano);
    createMarker(pano02014.location.latLng, map, pano02014.location.pano);
    createMarker(pano02015.location.latLng, map, pano02015.location.pano);
    createMarker(pano02016.location.latLng, map, pano02016.location.pano);
    createMarker(pano05000.location.latLng, map, pano05000.location.pano);
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
    createMarker(pano11011.location.latLng, map, pano11011.location.pano);
    createMarker(pano11012.location.latLng, map, pano11012.location.pano);
    createMarker(pano11013.location.latLng, map, pano11013.location.pano);
    createMarker(pano11014.location.latLng, map, pano11014.location.pano);
    createMarker(pano11015.location.latLng, map, pano11015.location.pano);
    createMarker(pano11016.location.latLng, map, pano11016.location.pano);
    createMarker(pano11017.location.latLng, map, pano11017.location.pano);
    createMarker(pano12000.location.latLng, map, pano12000.location.pano);
    createMarker(pano12001.location.latLng, map, pano12001.location.pano);
    createMarker(pano12002.location.latLng, map, pano12002.location.pano);
    createMarker(pano12003.location.latLng, map, pano12003.location.pano);
    createMarker(pano12004.location.latLng, map, pano12004.location.pano);
    createMarker(pano12005.location.latLng, map, pano12005.location.pano);
    createMarker(pano12006.location.latLng, map, pano12006.location.pano);
    createMarker(pano12007.location.latLng, map, pano12007.location.pano);
    createMarker(pano12008.location.latLng, map, pano12008.location.pano);
    createMarker(pano12009.location.latLng, map, pano12009.location.pano);
    createMarker(pano12010.location.latLng, map, pano12010.location.pano);
    createMarker(pano12011.location.latLng, map, pano12011.location.pano);
    createMarker(pano12012.location.latLng, map, pano12012.location.pano);
    createMarker(pano12013.location.latLng, map, pano12013.location.pano);
    createMarker(pano12014.location.latLng, map, pano12014.location.pano);
    createMarker(pano12015.location.latLng, map, pano12015.location.pano);
    createMarker(pano12016.location.latLng, map, pano12016.location.pano);
    createMarker(pano12017.location.latLng, map, pano12017.location.pano);
    var ctaLayer = new google.maps.KmlLayer({
        url: 'https://storage.googleapis.com/brechtv/SV%202/files/Final/verdieping3.kml',
        map: map,
        preserveViewport: true
    });
}

function createMarker(pos, map, title) {

    var dot = {
        path: 'M-1,0a1,1 0 1,0 2,0a1,1 0 1,0 -2,0',
        fillColor: '#FFB74D',
        fillOpacity: 0.1,
        scale: 0.5,
        strokeColor: '#FFB74D',
        strokeWeight: 8
      };


    var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: title,
        icon: dot
    });
    marker.addListener("click", function() {
        map.setCenter(marker.getPosition());
        streetView.setPano(title);
    });
}

function getCustomPanoramaTileUrl(pano, zoom, tileX, tileY) {
    return "https://storage.googleapis.com/brechtv/SV%202/images/3e%20verdieping/" + pano + '.JPG';
}

function getCustomPanorama(pano, zoom, tileX, tileY) {
    switch (pano) {
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
        case 'pano02006':
            return pano02006;
            break;
        case 'pano02007':
            return pano02007;
            break;
        case 'pano02008':
            return pano02008;
            break;
        case 'pano02009':
            return pano02009;
            break;
        case 'pano02010':
            return pano02010;
            break;
        case 'pano02011':
            return pano02011;
            break;
        case 'pano02012':
            return pano02012;
            break;
        case 'pano02013':
            return pano02013;
            break;
        case 'pano02014':
            return pano02014;
            break;
        case 'pano02015':
            return pano02015;
            break;
        case 'pano02016':
            return pano02016;
            break;
        case 'pano05000':
            return pano05000;
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
        case 'pano11011':
            return pano11011;
            break;
        case 'pano11012':
            return pano11012;
            break;
        case 'pano11013':
            return pano11013;
            break;
        case 'pano11014':
            return pano11014;
            break;
        case 'pano11015':
            return pano11015;
            break;
        case 'pano11016':
            return pano11016;
            break;
        case 'pano11017':
            return pano11017;
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
        case 'pano12008':
            return pano12008;
            break;
        case 'pano12009':
            return pano12009;
            break;
        case 'pano12010':
            return pano12010;
            break;
        case 'pano12011':
            return pano12011;
            break;
        case 'pano12012':
            return pano12012;
            break;
        case 'pano12013':
            return pano12013;
            break;
        case 'pano12014':
            return pano12014;
            break;
        case 'pano12015':
            return pano12015;
            break;
        case 'pano12016':
            return pano12016;
            break;
        case 'pano12017':
            return pano12017;
            break;
        default:
            return pano02000;
    }
}
var pano02000 = {
    location: {
        pano: 'pano02000',
        description: 'Noodtrap B331',
        latLng: new google.maps.LatLng(51.06052801,3.70710794)
    },
    links: [{
        description: "Naar gang B302",
        pano: "pano02001",
        heading: 47
    }],
    neighbours: [{
        down: 'pano02014'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 213,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02001 = {
    location: {
        pano: 'pano02001',
        description: 'Gang B302',
        latLng: new google.maps.LatLng(51.06055327,3.70715205)
    },
    links: [{
        description: "Naar noodtrap B331",
        pano: "pano02000",
        heading: 227
    },{
        description: "Naar gang B302",
        pano: "pano02002",
        heading: 137
    }],
    neighbours: [{
        down: 'pano02013'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 341,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02002 = {
    location: {
        pano: 'pano02002',
        description: 'Gang B302',
        latLng: new google.maps.LatLng(51.06050777,3.70721767)
    },
    links: [{
        description: "Naar gang B302",
        pano: "pano02001",
        heading: 317
    },{
        description: "Naar gang B302",
        pano: "pano02003",
        heading: 137
    },{
        description: "Naar gang B302",
        pano: "pano02004",
        heading: 47
    }],
    neighbours: [{
        down: 'pano02011'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 53,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02003 = {
    location: {
        pano: 'pano02003',
        description: 'Gang B302',
        latLng: new google.maps.LatLng(51.06043602,3.70732112)
    },
    links: [{
        description: "Naar gang B302",
        pano: "pano02002",
        heading: 317
    }],
    neighbours: [{
        down: 'pano02012'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 121,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02004 = {
    location: {
        pano: 'pano02004',
        description: 'Gang B302',
        latLng: new google.maps.LatLng(51.06053899,3.70727219)
    },
    links: [{
        description: "Naar gang B302",
        pano: "pano02002",
        heading: 227
    },{
        description: "Naar gang B302",
        pano: "pano02005",
        heading: 47
    }],
    neighbours: [{
        down: 'pano02011'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 194,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02005 = {
    location: {
        pano: 'pano02005',
        description: 'Gang B302',
        latLng: new google.maps.LatLng(51.06060681,3.70739064)
    },
    links: [{
        description: "Naar gang B302",
        pano: "pano02004",
        heading: 227
    },{
        description: "Naar gang B302",
        pano: "pano02006",
        heading: 47
    }],
    neighbours: [{
        down: 'pano02010'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 242,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02006 = {
    location: {
        pano: 'pano02006',
        description: 'Gang B302',
        latLng: new google.maps.LatLng(51.06064401,3.70745559)
    },
    links: [{
        description: "Naar gang B302",
        pano: "pano02005",
        heading: 227
    },{
        description: "Naar gang B302",
        pano: "pano02007",
        heading: 316
    },{
        description: "Naar gang B302",
        pano: "pano02008",
        heading: 47
    }],
    neighbours: [{
        down: 'pano02009'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 193,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02007 = {
    location: {
        pano: 'pano02007',
        description: 'Gang B302',
        latLng: new google.maps.LatLng(51.06071841,3.70734497)
    },
    links: [{
        description: "Naar gang B302",
        pano: "pano02006",
        heading: 136
    }],
    neighbours: [{
        down: 'pano02009'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 357,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02008 = {
    location: {
        pano: 'pano02008',
        description: 'Gang B302',
        latLng: new google.maps.LatLng(51.0606952,3.70754498)
    },
    links: [{
        description: "Naar gang B302",
        pano: "pano02006",
        heading: 227
    },{
        description: "Naar gang B302",
        pano: "pano02009",
        heading: 47
    }],
    neighbours: [{
        down: 'pano02008'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 138,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02009 = {
    location: {
        pano: 'pano02009',
        description: 'Gang B302',
        latLng: new google.maps.LatLng(51.0607441,3.70763039)
    },
    links: [{
        description: "Naar gang B302",
        pano: "pano02008",
        heading: 227
    },{
        description: "Naar gang B302",
        pano: "pano02010",
        heading: 313
    },{
        description: "Naar gang B302",
        pano: "pano02011",
        heading: 47
    }],
    neighbours: [{
        down: 'pano02006'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 243,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02010 = {
    location: {
        pano: 'pano02010',
        description: 'Gang B302',
        latLng: new google.maps.LatLng(51.06079462,3.70754691)
    },
    links: [{
        description: "Naar gang B302",
        pano: "pano02009",
        heading: 133
    }],
    neighbours: [{
        down: 'pano02006'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 233,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02011 = {
    location: {
        pano: 'pano02011',
        description: 'Gang B302',
        latLng: new google.maps.LatLng(51.06082674,3.7077747)
    },
    links: [{
        description: "Naar gang B302",
        pano: "pano02009",
        heading: 227
    },{
        description: "Naar gang B302",
        pano: "pano02012",
        heading: 137
    }],
    neighbours: [{
        down: 'pano02005'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 309,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02012 = {
    location: {
        pano: 'pano02012',
        description: 'Gang B302',
        latLng: new google.maps.LatLng(51.06077405,3.70785067)
    },
    links: [{
        description: "Naar gang B302",
        pano: "pano02011",
        heading: 317
    },{
        description: "Naar gang B302",
        pano: "pano02013",
        heading: 137
    },{
        description: "Naar gang B302",
        pano: "pano02014",
        heading: 47
    }],
    neighbours: [{
        down: 'pano02004'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 196,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02013 = {
    location: {
        pano: 'pano02013',
        description: 'Gang B302',
        latLng: new google.maps.LatLng(51.06075126,3.70788353)
    },
    links: [{
        description: "Naar gang B302",
        pano: "pano02012",
        heading: 317
    }],
    neighbours: [{
        down: 'pano02004'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 210,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02014 = {
    location: {
        pano: 'pano02014',
        description: 'Gang B302',
        latLng: new google.maps.LatLng(51.06081715,3.70792594)
    },
    links: [{
        description: "Naar gang B302",
        pano: "pano02012",
        heading: 227
    },{
        description: "Naar gang B302",
        pano: "pano02015",
        heading: 118
    },{
        description: "Naar gang B302",
        pano: "pano02016",
        heading: 294
    }],
    neighbours: [{
        down: 'pano02002'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 304,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02015 = {
    location: {
        pano: 'pano02015',
        description: 'Gang B302',
        latLng: new google.maps.LatLng(51.06080301,3.70796698)
    },
    links: [{
        description: "Naar gang B302",
        pano: "pano02014",
        heading: 298
    }],
    neighbours: [{
        down: 'pano02003'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 179,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02016 = {
    location: {
        pano: 'pano02016',
        description: 'Traphal B300',
        latLng: new google.maps.LatLng(51.06082875,3.70788628)
    },
    links: [{
        description: "Naar gang B302",
        pano: "pano02014",
        heading: 114
    }],
    neighbours: [{
        down: 'pano02000'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 145,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano05000 = {
    location: {
        pano: 'pano05000',
        description: 'Traphal E322',
        latLng: new google.maps.LatLng(51.05996418,3.70936568)
    },
    links: [{
        description: "FOUT",
        pano: "pano02014",
        heading: 313
    }],
    neighbours: [{
        down: 'pano05000'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 133,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11000 = {
    location: {
        pano: 'pano11000',
        description: 'Traphal L302',
        latLng: new google.maps.LatLng(51.05977379,3.71021639)
    },
    links: [{
        description: "Naar gang L301",
        pano: "pano11001",
        heading: 137
    }],
    neighbours: [{
        down: 'pano11000'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 210,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11001 = {
    location: {
        pano: 'pano11001',
        description: 'Gang L301',
        latLng: new google.maps.LatLng(51.05975638,3.71024165)
    },
    links: [{
        description: "Naar traphal L302",
        pano: "pano11000",
        heading: 317
    },{
        description: "Naar gang L301",
        pano: "pano11002",
        heading: 47
    },{
        description: "Naar gang L301",
        pano: "pano11017",
        heading: 227
    }],
    neighbours: [{
        down: 'pano11001'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 115,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11002 = {
    location: {
        pano: 'pano11002',
        description: 'Gang L301',
        latLng: new google.maps.LatLng(51.05976947,3.71026438)
    },
    links: [{
        description: "Naar gang L301",
        pano: "pano11001",
        heading: 227
    },{
        description: "Naar gang L301",
        pano: "pano11003",
        heading: 47
    },{
        description: "Naar gang L301",
        pano: "pano11011",
        heading: 320
    }],
    neighbours: [{
        down: 'pano11002'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 22,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11003 = {
    location: {
        pano: 'pano11003',
        description: 'Gang L301',
        latLng: new google.maps.LatLng(51.05983031,3.71036995)
    },
    links: [{
        description: "Naar gang L301",
        pano: "pano11002",
        heading: 227
    },{
        description: "Naar gang L301",
        pano: "pano11004",
        heading: 137
    },{
        description: "Naar gang L301",
        pano: "pano11006",
        heading: 317
    }],
    neighbours: [{
        down: 'pano11004'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 17,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11004 = {
    location: {
        pano: 'pano11004',
        description: 'Gang L301',
        latLng: new google.maps.LatLng(51.05980212,3.71041086)
    },
    links: [{
        description: "Naar gang L301",
        pano: "pano11003",
        heading: 317
    },{
        description: "Naar gang L301",
        pano: "pano11005",
        heading: 137
    }],
    neighbours: [{
        down: 'pano11004'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 354,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11005 = {
    location: {
        pano: 'pano11005',
        description: 'Gang L301',
        latLng: new google.maps.LatLng(51.05977545,3.71044955)
    },
    links: [{
        description: "Naar gang L301",
        pano: "pano11004",
        heading: 317
    }],
    neighbours: [{
        down: 'pano11004'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 14,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11006 = {
    location: {
        pano: 'pano11006',
        description: 'Gang L301',
        latLng: new google.maps.LatLng(51.05984756,3.71034493)
    },
    links: [{
        description: "Naar gang L301",
        pano: "pano11003",
        heading: 137
    },{
        description: "Naar gang L301",
        pano: "pano11007",
        heading: 317
    }],
    neighbours: [{
        down: 'pano11005'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 220,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11007 = {
    location: {
        pano: 'pano11007',
        description: 'Gang L301',
        latLng: new google.maps.LatLng(51.05987582,3.71030391)
    },
    links: [{
        description: "Naar gang L301",
        pano: "pano11006",
        heading: 137
    },{
        description: "Naar gang L301",
        pano: "pano11008",
        heading: 317
    },{
        description: "Naar gang L301",
        pano: "pano11010",
        heading: 245
    }],
    neighbours: [{
        down: 'pano11006'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 301,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11008 = {
    location: {
        pano: 'pano11008',
        description: 'Gang L301',
        latLng: new google.maps.LatLng(51.05990264,3.710265)
    },
    links: [{
        description: "Naar gang L301",
        pano: "pano11007",
        heading: 137
    },{
        description: "Naar gang L301",
        pano: "pano11009",
        heading: 317
    }],
    neighbours: [{
        down: 'pano11007'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 351,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11009 = {
    location: {
        pano: 'pano11009',
        description: 'Gang L301',
        latLng: new google.maps.LatLng(51.05993446,3.71021883)
    },
    links: [{
        description: "Naar gang L301",
        pano: "pano11008",
        heading: 137
    },{
        description: "Naar gang L301",
        pano: "pano12016",
        heading: 317
    }],
    neighbours: [{
        down: 'pano11008'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 348,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11010 = {
    location: {
        pano: 'pano11010',
        description: 'Gang L301',
        latLng: new google.maps.LatLng(51.05985213,3.71021998)
    },
    links: [{
        description: "Naar gang L301",
        pano: "pano11007",
        heading: 65
    },{
        description: "Naar gang L301",
        pano: "pano11011",
        heading: 196
    }],
    neighbours: [{
        down: 'pano11010'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 245,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11011 = {
    location: {
        pano: 'pano11011',
        description: 'Gang L301',
        latLng: new google.maps.LatLng(51.05981589,3.71020342)
    },
    links: [{
        description: "Naar gang L301",
        pano: "pano11002",
        heading: 140
    },{
        description: "Naar gang L301",
        pano: "pano11010",
        heading: 16
    }],
    neighbours: [{
        down: 'pano11011'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 318,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11012 = {
    location: {
        pano: 'pano11012',
        description: 'Gang L308',
        latLng: new google.maps.LatLng(51.0596791,3.71010755)
    },
    links: [{
        description: "Naar gang L301",
        pano: "pano11017",
        heading: 47
    },{
        description: "Naar gang L308",
        pano: "pano11013",
        heading: 227
    }],
    neighbours: [{
        down: 'pano11017'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 192,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11013 = {
    location: {
        pano: 'pano11013',
        description: 'Gang L308',
        latLng: new google.maps.LatLng(51.05964409,3.71004678)
    },
    links: [{
        description: "Naar gang L308",
        pano: "pano11012",
        heading: 47
    },{
        description: "Naar gang L308",
        pano: "pano11014",
        heading: 317
    }],
    neighbours: [{
        down: 'pano11018'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 87,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11014 = {
    location: {
        pano: 'pano11014',
        description: 'Gang L308',
        latLng: new google.maps.LatLng(51.05968506,3.70998733)
    },
    links: [{
        description: "Naar gang L308",
        pano: "pano11013",
        heading: 137
    },{
        description: "Naar gang M301",
        pano: "pano11015",
        heading: 317
    }],
    neighbours: [{
        down: 'pano11019'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 345,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11015 = {
    location: {
        pano: 'pano11015',
        description: 'Gang M301',
        latLng: new google.maps.LatLng(51.05971155,3.70994889)
    },
    links: [{
        description: "Naar gang L308",
        pano: "pano11014",
        heading: 137
    },{
        description: "Naar noodtrap",
        pano: "pano11016",
        heading: 227
    },{
        description: "Naar gang M301",
        pano: "pano12007",
        heading: 317
    }],
    neighbours: [{
        down: 'pano11020'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 150,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11016 = {
    location: {
        pano: 'pano11016',
        description: 'Noodtrap',
        latLng: new google.maps.LatLng(51.05969256,3.70991648)
    },
    links: [{
        description: "Naar gang M301",
        pano: "pano11015",
        heading: 47
    }],
    neighbours: [{
        down: 'pano11021'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 123,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11017 = {
    location: {
        pano: 'pano11017',
        description: 'Gang L301',
        latLng: new google.maps.LatLng(51.05970413,3.71015098)
    },
    links: [{
        description: "Naar gang L301",
        pano: "pano11001",
        heading: 47
    },{
        description: "Naar gang L308",
        pano: "pano11012",
        heading: 227
    }],
    neighbours: [{
        down: 'pano11012'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 314,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12000 = {
    location: {
        pano: 'pano12000',
        description: 'Traphal M302',
        latLng: new google.maps.LatLng(51.05992282,3.70988036)
    },
    links: [{
        description: "Naar gang M301",
        pano: "pano12001",
        heading: 317
    }],
    neighbours: [{
        down: 'pano12000'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 133,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12001 = {
    location: {
        pano: 'pano12001',
        description: 'Gang M301',
        latLng: new google.maps.LatLng(51.05994035,3.70985492)
    },
    links: [{
        description: "Naar traphal M302",
        pano: "pano12000",
        heading: 137
    },{
        description: "Naar gang M301",
        pano: "pano12002",
        heading: 227
    },{
        description: "Naar gang M301",
        pano: "pano12011",
        heading: 47
    }],
    neighbours: [{
        down: 'pano12001'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 30,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12002 = {
    location: {
        pano: 'pano12002',
        description: 'Gang M301',
        latLng: new google.maps.LatLng(51.05992782,3.70983317)
    },
    links: [{
        description: "Naar gang M301",
        pano: "pano12001",
        heading: 47
    },{
        description: "Naar gang M301",
        pano: "pano12003",
        heading: 227
    },{
        description: "Naar gang M301",
        pano: "pano12010",
        heading: 138
    }],
    neighbours: [{
        down: 'pano12002'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 146,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12003 = {
    location: {
        pano: 'pano12003',
        description: 'Gang M301',
        latLng: new google.maps.LatLng(51.0598986,3.70978246)
    },
    links: [{
        description: "Naar gang M301",
        pano: "pano12002",
        heading: 47
    },{
        description: "Naar gang M301",
        pano: "pano12004",
        heading: 227
    }],
    neighbours: [{
        down: 'pano12007'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 226,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12004 = {
    location: {
        pano: 'pano12004',
        description: 'Gang M301',
        latLng: new google.maps.LatLng(51.05986565,3.70972529)
    },
    links: [{
        description: "Naar gang M301",
        pano: "pano12003",
        heading: 47
    },{
        description: "Naar gang M301",
        pano: "pano12005",
        heading: 137
    }],
    neighbours: [{
        down: 'pano12006'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 154,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12005 = {
    location: {
        pano: 'pano12005',
        description: 'Gang M301',
        latLng: new google.maps.LatLng(51.05983944,3.70976333)
    },
    links: [{
        description: "Naar gang M301",
        pano: "pano12004",
        heading: 317
    },{
        description: "Naar gang M301",
        pano: "pano12006",
        heading: 137
    }],
    neighbours: [{
        down: 'pano12005'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 231,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12006 = {
    location: {
        pano: 'pano12006',
        description: 'Gang M301',
        latLng: new google.maps.LatLng(51.05981474,3.70979917)
    },
    links: [{
        description: "Naar gang M301",
        pano: "pano12005",
        heading: 317
    },{
        description: "Naar gang M301",
        pano: "pano12007",
        heading: 137
    },{
        description: "Naar gang M301",
        pano: "pano12008",
        heading: 47
    }],
    neighbours: [{
        down: 'pano12004'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 213,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12007 = {
    location: {
        pano: 'pano12007',
        description: 'Gang M301',
        latLng: new google.maps.LatLng(51.05976409,3.70987266)
    },
    links: [{
        description: "Naar gang M301",
        pano: "pano12006",
        heading: 317
    },{
        description: "Naar gang M301",
        pano: "pano11015",
        heading: 137
    }],
    neighbours: [{
        down: 'pano12008'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 198,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12008 = {
    location: {
        pano: 'pano12008',
        description: 'Gang M301',
        latLng: new google.maps.LatLng(51.05983969,3.70984246)
    },
    links: [{
        description: "Naar gang M301",
        pano: "pano12006",
        heading: 227
    },{
        description: "Naar gang M301",
        pano: "pano12009",
        heading: 47
    }],
    neighbours: [{
        down: 'pano12004'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 155,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12009 = {
    location: {
        pano: 'pano12009',
        description: 'Gang M301',
        latLng: new google.maps.LatLng(51.05987533,3.70990432)
    },
    links: [{
        description: "Naar gang M301",
        pano: "pano12008",
        heading: 227
    },{
        description: "Naar gang M301",
        pano: "pano12010",
        heading: 320
    }],
    neighbours: [{
        down: 'pano12003'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 115,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12010 = {
    location: {
        pano: 'pano12010',
        description: 'Gang M301',
        latLng: new google.maps.LatLng(51.05990581,3.70986368)
    },
    links: [{
        description: "Naar gang M301",
        pano: "pano12009",
        heading: 140
    },{
        description: "Naar gang M301",
        pano: "pano12002",
        heading: 318
    }],
    neighbours: [{
        down: 'pano12003'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 293,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12011 = {
    location: {
        pano: 'pano12011',
        description: 'Gang M301',
        latLng: new google.maps.LatLng(51.05996137,3.7098914)
    },
    links: [{
        description: "Naar gang M301",
        pano: "pano12001",
        heading: 227
    },{
        description: "Naar gang M301",
        pano: "pano12012",
        heading: 47
    }],
    neighbours: [{
        down: 'pano12010'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 98,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12012 = {
    location: {
        pano: 'pano12012',
        description: 'Gang M301',
        latLng: new google.maps.LatLng(51.0599963,3.70995201)
    },
    links: [{
        description: "Naar gang M301",
        pano: "pano12011",
        heading: 227
    },{
        description: "Naar gang M301",
        pano: "pano12013",
        heading: 47
    }],
    neighbours: [{
        down: 'pano12011'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 100,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12013 = {
    location: {
        pano: 'pano12013',
        description: 'Gang M301',
        latLng: new google.maps.LatLng(51.06002603,3.71000361)
    },
    links: [{
        description: "Naar gang M301",
        pano: "pano12012",
        heading: 227
    },{
        description: "Naar gang M301",
        pano: "pano12014",
        heading: 47
    }],
    neighbours: [{
        down: 'pano12011'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 281,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12014 = {
    location: {
        pano: 'pano12014',
        description: 'Gang M301',
        latLng: new google.maps.LatLng(51.06005188,3.71004846)
    },
    links: [{
        description: "Naar gang M301",
        pano: "pano12013",
        heading: 227
    },{
        description: "Naar gang M301",
        pano: "pano12015",
        heading: 137
    }],
    neighbours: [{
        down: 'pano12012'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 353,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12015 = {
    location: {
        pano: 'pano12015',
        description: 'Gang M301',
        latLng: new google.maps.LatLng(51.06001926,3.71009578)
    },
    links: [{
        description: "Naar gang M301",
        pano: "pano12014",
        heading: 317
    },{
        description: "Naar gang L301",
        pano: "pano12016",
        heading: 137
    }],
    neighbours: [{
        down: 'pano12013'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 330,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12016 = {
    location: {
        pano: 'pano12016',
        description: 'Gang L301',
        latLng: new google.maps.LatLng(51.05998441,3.71014635)
    },
    links: [{
        description: "Naar gang M301",
        pano: "pano12015",
        heading: 317
    },{
        description: "Naar noodtrap",
        pano: "pano12017",
        heading: 46
    },{
        description: "Naar gang L301",
        pano: "pano11009",
        heading: 137
    }],
    neighbours: [{
        down: 'pano12014'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 314,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12017 = {
    location: {
        pano: 'pano12017',
        description: 'Noodtrap',
        latLng: new google.maps.LatLng(51.06000281,3.71017736)
    },
    links: [{
        description: "Naar gang L301",
        pano: "pano12016",
        heading: 226
    },{
        description: "",
        pano: "",
        heading: 0
    }],
    neighbours: [{
        down: 'pano12015'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 221,
        getTileUrl: getCustomPanoramaTileUrl
    }
};

var ROOMS = [
    {
        "floor": 4,
        "room": "B332a",
        "lat": 51.0605466828271,
        "lng": 3.70734975523958
    },
    {
        "floor": 4,
        "room": "B313",
        "lat": 51.0605854612705,
        "lng": 3.70754320676528
    },
    {
        "floor": 4,
        "room": "B312",
        "lat": 51.0606438496025,
        "lng": 3.70764517243563
    },
    {
        "floor": 4,
        "room": "B305",
        "lat": 51.0606790154133,
        "lng": 3.70778296116644
    },
    {
        "floor": 4,
        "room": "B304",
        "lat": 51.0607492535018,
        "lng": 3.70772362476465
    },
    {
        "floor": 4,
        "room": "B316",
        "lat": 51.0607022131227,
        "lng": 3.70721823012324
    },
    {
        "floor": 4,
        "room": "B317",
        "lat": 51.0606411288553,
        "lng": 3.70730631250054
    },
    {
        "floor": 4,
        "room": "B310",
        "lat": 51.0607382342642,
        "lng": 3.70740489789736
    },
    {
        "floor": 4,
        "room": "B309",
        "lat": 51.0607815023272,
        "lng": 3.70748045841992
    },
    {
        "floor": 4,
        "room": "B307",
        "lat": 51.0608935694069,
        "lng": 3.70756067415477
    },
    {
        "floor": 4,
        "room": "B306",
        "lat": 51.0608320993691,
        "lng": 3.70764931235182
    },
    {
        "floor": 4,
        "room": "B309a",
        "lat": 51.0608159834726,
        "lng": 3.70737816805024
    },
    {
        "floor": 4,
        "room": "B315",
        "lat": 51.0607858257588,
        "lng": 3.70732550266869
    },
    {
        "floor": 4,
        "room": "B332",
        "lat": 51.0605071541178,
        "lng": 3.70740645677759
    },
    {
        "floor": 4,
        "room": "B300",
        "lat": 51.060833389707,
        "lng": 3.70788227808039
    },
    {
        "floor": 4,
        "room": "B301a",
        "lat": 51.0607839023131,
        "lng": 3.70799440072842
    },
    {
        "floor": 4,
        "room": "B333",
        "lat": 51.0604085546974,
        "lng": 3.70736090864063
    },
    {
        "floor": 4,
        "room": "B331",
        "lat": 51.0605342569305,
        "lng": 3.70710992636932
    },
    {
        "floor": 4,
        "room": "B325",
        "lat": 51.060469913014,
        "lng": 3.70721736935288
    },
    {
        "floor": 4,
        "room": "B324",
        "lat": 51.0604441449415,
        "lng": 3.70723943231549
    },
    {
        "floor": 4,
        "room": "B330",
        "lat": 51.0604157717118,
        "lng": 3.70728034577293
    },
    {
        "floor": 4,
        "room": "B301",
        "lat": 51.0607867225782,
        "lng": 3.70792104518542
    },
    {
        "floor": 4,
        "room": "B300a",
        "lat": 51.0608724749252,
        "lng": 3.70787429566622
    },
    {
        "floor": 4,
        "room": "B318",
        "lat": 51.0606238519303,
        "lng": 3.70711492549838
    },
    {
        "floor": 4,
        "room": "B328",
        "lat": 51.06056484509,
        "lng": 3.70707984040105
    },
    {
        "floor": 4,
        "room": "B329",
        "lat": 51.0605727681277,
        "lng": 3.70705396015074
    },
    {
        "floor": 4,
        "room": "B326",
        "lat": 51.0604997234164,
        "lng": 3.70716324789771
    },
    {
        "floor": 4,
        "room": "B319",
        "lat": 51.060571145512,
        "lng": 3.70722243986972
    },
    {
        "floor": 4,
        "room": "B308",
        "lat": 51.0608602036604,
        "lng": 3.70745539137841
    },
    {
        "floor": 4,
        "room": "B302",
        "lat": 51.060767529423,
        "lng": 3.707659253807
    },
    {
        "floor": 4,
        "room": "B307a",
        "lat": 51.0609025575049,
        "lng": 3.70766311540257
    },
    {
        "floor": 4,
        "room": "B304a",
        "lat": 51.0607465676435,
        "lng": 3.70782164968582
    },
    {
        "floor": 4,
        "room": "B303",
        "lat": 51.0607130922042,
        "lng": 3.70787454562371
    },
    {
        "floor": 4,
        "room": "B313a",
        "lat": 51.0606132596726,
        "lng": 3.70747770512977
    },
    {
        "floor": 4,
        "room": "E320",
        "lat": 51.059978316671,
        "lng": 3.70931909572157
    },
    {
        "floor": 4,
        "room": "E322",
        "lat": 51.059958037054,
        "lng": 3.70935378108872
    },
    {
        "floor": 4,
        "room": "L306",
        "lat": 51.059806872435,
        "lng": 3.71027699482293
    },
    {
        "floor": 4,
        "room": "L326",
        "lat": 51.0596374863367,
        "lng": 3.71011849453704
    },
    {
        "floor": 4,
        "room": "L301",
        "lat": 51.0597886369111,
        "lng": 3.71022896697934
    },
    {
        "floor": 4,
        "room": "L303",
        "lat": 51.0597906831892,
        "lng": 3.71015536539781
    },
    {
        "floor": 4,
        "room": "L318",
        "lat": 51.0597666765654,
        "lng": 3.7105639385833
    },
    {
        "floor": 4,
        "room": "L324",
        "lat": 51.0597415797304,
        "lng": 3.71037433569444
    },
    {
        "floor": 4,
        "room": "M312",
        "lat": 51.0598551176325,
        "lng": 3.70961329135111
    },
    {
        "floor": 4,
        "room": "L305",
        "lat": 51.0598478884017,
        "lng": 3.71029850063391
    },
    {
        "floor": 4,
        "room": "L302",
        "lat": 51.0597690517295,
        "lng": 3.71021727903269
    },
    {
        "floor": 4,
        "room": "M305",
        "lat": 51.0598452201483,
        "lng": 3.70978920739821
    },
    {
        "floor": 4,
        "room": "M306",
        "lat": 51.0598610700344,
        "lng": 3.70976862500761
    },
    {
        "floor": 4,
        "room": "M307",
        "lat": 51.0598855090387,
        "lng": 3.70981579217954
    },
    {
        "floor": 4,
        "room": "M308",
        "lat": 51.0598778054724,
        "lng": 3.70985209696476
    },
    {
        "floor": 4,
        "room": "M301",
        "lat": 51.0599018760025,
        "lng": 3.70985687788863
    },
    {
        "floor": 4,
        "room": "M303",
        "lat": 51.0599031130551,
        "lng": 3.70993617721882
    },
    {
        "floor": 4,
        "room": "M302",
        "lat": 51.0599238875633,
        "lng": 3.70987277638467
    },
    {
        "floor": 4,
        "room": "L310",
        "lat": 51.0597955078051,
        "lng": 3.71035767692282
    },
    {
        "floor": 4,
        "room": "L313",
        "lat": 51.059860807796,
        "lng": 3.71040547237577
    },
    {
        "floor": 4,
        "room": "L307",
        "lat": 51.0597320633774,
        "lng": 3.71012656151222
    },
    {
        "floor": 4,
        "room": "L327",
        "lat": 51.0595760183913,
        "lng": 3.70996064461885
    },
    {
        "floor": 4,
        "room": "L334",
        "lat": 51.0596749495523,
        "lng": 3.71004911242369
    },
    {
        "floor": 4,
        "room": "L308",
        "lat": 51.0596725318591,
        "lng": 3.70999830831782
    },
    {
        "floor": 4,
        "room": "M319",
        "lat": 51.0600269525634,
        "lng": 3.71011462621521
    },
    {
        "floor": 4,
        "room": "M318",
        "lat": 51.0600571359829,
        "lng": 3.71007082979959
    },
    {
        "floor": 4,
        "room": "M316",
        "lat": 51.0601075066278,
        "lng": 3.71002010789418
    },
    {
        "floor": 4,
        "room": "M310",
        "lat": 51.059730009153,
        "lng": 3.70979536338209
    },
    {
        "floor": 4,
        "room": "L314",
        "lat": 51.0598480695862,
        "lng": 3.7103833662633
    },
    {
        "floor": 4,
        "room": "L315",
        "lat": 51.0598816438588,
        "lng": 3.71044163168567
    },
    {
        "floor": 4,
        "room": "M324",
        "lat": 51.0599732272622,
        "lng": 3.71002297624668
    },
    {
        "floor": 4,
        "room": "M322",
        "lat": 51.0600000084807,
        "lng": 3.71006783699151
    },
    {
        "floor": 4,
        "room": "M326",
        "lat": 51.059938773235,
        "lng": 3.70996318464156
    },
    {
        "floor": 4,
        "room": "M313",
        "lat": 51.0599948613035,
        "lng": 3.70990832825123
    },
    {
        "floor": 4,
        "room": "M314",
        "lat": 51.0600191653043,
        "lng": 3.70987335268505
    },
    {
        "floor": 4,
        "room": "M315",
        "lat": 51.0600454347528,
        "lng": 3.70983523523916
    },
    {
        "floor": 4,
        "room": "M320",
        "lat": 51.060070503085,
        "lng": 3.71015691226652
    },
    {
        "floor": 4,
        "room": "L312",
        "lat": 51.0599168231147,
        "lng": 3.71037796918529
    },
    {
        "floor": 4,
        "room": "L316",
        "lat": 51.0598387107452,
        "lng": 3.71049130948999
    },
    {
        "floor": 4,
        "room": "L330",
        "lat": 51.059715020848,
        "lng": 3.71001243531586
    },
    {
        "floor": 4,
        "room": "L332",
        "lat": 51.0597016960623,
        "lng": 3.71006857770602
    },
    {
        "floor": 4,
        "room": "L328",
        "lat": 51.0596296052237,
        "lng": 3.70994051256851
    },
    {
        "floor": 4,
        "room": "L310",
        "lat": 51.0599641557795,
        "lng": 3.71030928967654
    }
];

google.maps.event.addDomListener(window, 'load', initialize);

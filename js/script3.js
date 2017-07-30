var map, streetview, overlay, pano, globalpano;
var room_markers = [];
// initialize map & streetView
// add KML overlay
// add markers

function initialize() {
    // check if it exists, if it does, use it as first pano, if not, use default
        // get neighbourpanos from local storage
    neighbourpano_from_2 = localStorage.getItem("neighbourpano_from_2_to_3");
    neighbourpano_from_4 = localStorage.getItem("neighbourpano_from_4_to_3");

    if (neighbourpano_from_2 != null && neighbourpano_from_2 != 'undefined') {
        loadSV(neighbourpano_from_2);
    } else if (neighbourpano_from_4 != null && neighbourpano_from_4 != 'undefined') {
        loadSV(neighbourpano_from_4);
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
                neighbour_up = (typeof neighbours != 'undefined' ? neighbours[0].up : undefined);
                neighbour_down = (typeof neighbours != 'undefined' ? neighbours[0].down : undefined);
                localStorage.setItem("neighbourpano_from_3_to_4", neighbour_up);
                localStorage.setItem("neighbourpano_from_3_to_2", neighbour_down);
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

    createMarker(pano02000.location.latLng, map, pano02000.location.description, pano02000.location.pano);
    createMarker(pano02001.location.latLng, map, pano02001.location.description, pano02001.location.pano);
    createMarker(pano02002.location.latLng, map, pano02002.location.description, pano02002.location.pano);
    createMarker(pano02003.location.latLng, map, pano02003.location.description, pano02003.location.pano);
    createMarker(pano02004.location.latLng, map, pano02004.location.description, pano02004.location.pano);
    createMarker(pano02005.location.latLng, map, pano02005.location.description, pano02005.location.pano);
    createMarker(pano02006.location.latLng, map, pano02006.location.description, pano02006.location.pano);
    createMarker(pano02007.location.latLng, map, pano02007.location.description, pano02007.location.pano);
    createMarker(pano02008.location.latLng, map, pano02008.location.description, pano02008.location.pano);
    createMarker(pano02009.location.latLng, map, pano02009.location.description, pano02009.location.pano);
    createMarker(pano02010.location.latLng, map, pano02010.location.description, pano02010.location.pano);
    createMarker(pano02011.location.latLng, map, pano02011.location.description, pano02011.location.pano);
    createMarker(pano02012.location.latLng, map, pano02012.location.description, pano02012.location.pano);
    createMarker(pano02013.location.latLng, map, pano02013.location.description, pano02013.location.pano);
    createMarker(pano02014.location.latLng, map, pano02014.location.description, pano02014.location.pano);
    createMarker(pano05000.location.latLng, map, pano05000.location.description, pano05000.location.pano);
    createMarker(pano07000.location.latLng, map, pano07000.location.description, pano07000.location.pano);
    createMarker(pano07001.location.latLng, map, pano07001.location.description, pano07001.location.pano);
    createMarker(pano07002.location.latLng, map, pano07002.location.description, pano07002.location.pano);
    createMarker(pano07003.location.latLng, map, pano07003.location.description, pano07003.location.pano);
    createMarker(pano07004.location.latLng, map, pano07004.location.description, pano07004.location.pano);
    createMarker(pano07005.location.latLng, map, pano07005.location.description, pano07005.location.pano);
    createMarker(pano11000.location.latLng, map, pano11000.location.description, pano11000.location.pano);
    createMarker(pano11001.location.latLng, map, pano11001.location.description, pano11001.location.pano);
    createMarker(pano11002.location.latLng, map, pano11002.location.description, pano11002.location.pano);
    createMarker(pano11003.location.latLng, map, pano11003.location.description, pano11003.location.pano);
    createMarker(pano11004.location.latLng, map, pano11004.location.description, pano11004.location.pano);
    createMarker(pano11005.location.latLng, map, pano11005.location.description, pano11005.location.pano);
    createMarker(pano11006.location.latLng, map, pano11006.location.description, pano11006.location.pano);
    createMarker(pano11007.location.latLng, map, pano11007.location.description, pano11007.location.pano);
    createMarker(pano11008.location.latLng, map, pano11008.location.description, pano11008.location.pano);
    createMarker(pano11009.location.latLng, map, pano11009.location.description, pano11009.location.pano);
    createMarker(pano11010.location.latLng, map, pano11010.location.description, pano11010.location.pano);
    createMarker(pano11011.location.latLng, map, pano11011.location.description, pano11011.location.pano);
    createMarker(pano11012.location.latLng, map, pano11012.location.description, pano11012.location.pano);
    createMarker(pano11013.location.latLng, map, pano11013.location.description, pano11013.location.pano);
    createMarker(pano11014.location.latLng, map, pano11014.location.description, pano11014.location.pano);
    createMarker(pano11015.location.latLng, map, pano11015.location.description, pano11015.location.pano);
    createMarker(pano11016.location.latLng, map, pano11016.location.description, pano11016.location.pano);
    createMarker(pano11017.location.latLng, map, pano11017.location.description, pano11017.location.pano);
    createMarker(pano11018.location.latLng, map, pano11018.location.description, pano11018.location.pano);
    createMarker(pano11019.location.latLng, map, pano11019.location.description, pano11019.location.pano);
    createMarker(pano11020.location.latLng, map, pano11020.location.description, pano11020.location.pano);
    createMarker(pano11021.location.latLng, map, pano11021.location.description, pano11021.location.pano);
    createMarker(pano11022.location.latLng, map, pano11022.location.description, pano11022.location.pano);
    createMarker(pano12000.location.latLng, map, pano12000.location.description, pano12000.location.pano);
    createMarker(pano12001.location.latLng, map, pano12001.location.description, pano12001.location.pano);
    createMarker(pano12002.location.latLng, map, pano12002.location.description, pano12002.location.pano);
    createMarker(pano12003.location.latLng, map, pano12003.location.description, pano12003.location.pano);
    createMarker(pano12004.location.latLng, map, pano12004.location.description, pano12004.location.pano);
    createMarker(pano12005.location.latLng, map, pano12005.location.description, pano12005.location.pano);
    createMarker(pano12006.location.latLng, map, pano12006.location.description, pano12006.location.pano);
    createMarker(pano12007.location.latLng, map, pano12007.location.description, pano12007.location.pano);
    createMarker(pano12008.location.latLng, map, pano12008.location.description, pano12008.location.pano);
    createMarker(pano12009.location.latLng, map, pano12009.location.description, pano12009.location.pano);
    createMarker(pano12010.location.latLng, map, pano12010.location.description, pano12010.location.pano);
    createMarker(pano12011.location.latLng, map, pano12011.location.description, pano12011.location.pano);
    createMarker(pano12012.location.latLng, map, pano12012.location.description, pano12012.location.pano);
    createMarker(pano12013.location.latLng, map, pano12013.location.description, pano12013.location.pano);
    createMarker(pano12014.location.latLng, map, pano12014.location.description, pano12014.location.pano);
    createMarker(pano12015.location.latLng, map, pano12015.location.description, pano12015.location.pano);
    var ctaLayer = new google.maps.KmlLayer({
        url: 'https://storage.googleapis.com/brechtv/SV%202/files/Final/verdieping2.kml',
        map: map,
        preserveViewport: true
    });
}

function createMarker(pos, map, description, title) {

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
        title: description,
        pano: title,
        icon: dot
    });
    marker.addListener("click", function() {
        map.setCenter(marker.getPosition());
        streetView.setPano(title);
    });
}

function getCustomPanoramaTileUrl(pano, zoom, tileX, tileY) {
    return "https://storage.googleapis.com/brechtv/SV%202/images/2e%20verdieping/" + pano + '.JPG';
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
        case 'pano05000':
            return pano05000;
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
        case 'pano11018':
            return pano11018;
            break;
        case 'pano11019':
            return pano11019;
            break;
        case 'pano11020':
            return pano11020;
            break;
        case 'pano11021':
            return pano11021;
            break;
        case 'pano11022':
            return pano11022;
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
        default:
            return pano02000;
    }
}
var pano02000 = {
    location: {
        pano: 'pano02000',
        description: 'Traphal B200',
        latLng: new google.maps.LatLng(51.0608323,3.70788232)
    },
    links: [{
        description: "Naar gang B201",
        pano: "pano02001",
        heading: 147
    }],
    neighbours: [{
        up: 'pano02016',
        down: 'pano02014'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 168,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02001 = {
    location: {
        pano: 'pano02001',
        description: 'Gang B201',
        latLng: new google.maps.LatLng(51.0608058,3.70790963)
    },
    links: [{
        description: "Naar traphal B200",
        pano: "pano02000",
        heading: 327
    },{
        description: "Naar gang B201",
        pano: "pano02002",
        heading: 47
    },{
        description: "Naar gang B201",
        pano: "pano02004",
        heading: 227
    }],
    neighbours: [{
        up: 'pano02014',
        down: 'pano02001'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 125,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02002 = {
    location: {
        pano: 'pano02002',
        description: 'Gang B201',
        latLng: new google.maps.LatLng(51.06082126,3.70793663)
    },
    links: [{
        description: "Naar gang B201",
        pano: "pano02001",
        heading: 227
    },{
        description: "Naar gang B201",
        pano: "pano02003",
        heading: 137
    }],
    neighbours: [{
        up: 'pano02014',
        down: 'pano02001'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 219,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02003 = {
    location: {
        pano: 'pano02003',
        description: 'Gang B201',
        latLng: new google.maps.LatLng(51.06080183,3.70796534)
    },
    links: [{
        description: "Naar gang B201",
        pano: "pano02002",
        heading: 317
    }],
    neighbours: [{
        up: 'pano02015',
        down: 'pano02001'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 237,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02004 = {
    location: {
        pano: 'pano02004',
        description: 'Gang B201',
        latLng: new google.maps.LatLng(51.06076328,3.70783536)
    },
    links: [{
        description: "Naar gang B201",
        pano: "pano02001",
        heading: 47
    },{
        description: "Naar gang B201",
        pano: "pano02005",
        heading: 317
    }],
    neighbours: [{
        up: 'pano02012',
        down: 'pano02002'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 246,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02005 = {
    location: {
        pano: 'pano02005',
        description: 'Gang B201',
        latLng: new google.maps.LatLng(51.06081394,3.70776231)
    },
    links: [{
        description: "Naar gang B201",
        pano: "pano02004",
        heading: 137
    },{
        description: "Naar gang B201",
        pano: "pano02006",
        heading: 227
    }],
    neighbours: [{
        up: 'pano02011',
        down: 'pano02003'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 239,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02006 = {
    location: {
        pano: 'pano02006',
        description: 'Gang B201',
        latLng: new google.maps.LatLng(51.06076866,3.70768324)
    },
    links: [{
        description: "Naar gang B201",
        pano: "pano02005",
        heading: 47
    },{
        description: "Naar gang B201",
        pano: "pano02007",
        heading: 227
    }],
    neighbours: [{
        up: 'pano02011',
        down: 'pano02003'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 87,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02007 = {
    location: {
        pano: 'pano02007',
        description: 'Gang B201',
        latLng: new google.maps.LatLng(51.06071833,3.70759535)
    },
    links: [{
        description: "Naar gang B201",
        pano: "pano02006",
        heading: 47
    },{
        description: "Naar gang B201",
        pano: "pano02008",
        heading: 227
    }],
    neighbours: [{
        up: 'pano02009',
        down: 'pano02004'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 197,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02008 = {
    location: {
        pano: 'pano02008',
        description: 'Gang B201',
        latLng: new google.maps.LatLng(51.06067947,3.70752748)
    },
    links: [{
        description: "Naar gang B201",
        pano: "pano02007",
        heading: 47
    },{
        description: "Naar gang B201",
        pano: "pano02009",
        heading: 227
    }],
    neighbours: [{
        up: 'pano02008',
        down: 'pano02008'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 133,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02009 = {
    location: {
        pano: 'pano02009',
        description: 'Gang B201',
        latLng: new google.maps.LatLng(51.06062593,3.70743399)
    },
    links: [{
        description: "Naar gang B201",
        pano: "pano02008",
        heading: 47
    },{
        description: "Naar gang B201",
        pano: "pano02010",
        heading: 227
    }],
    neighbours: [{
        up: 'pano02006',
        down: 'pano02009'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 97,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02010 = {
    location: {
        pano: 'pano02010',
        description: 'Gang B201',
        latLng: new google.maps.LatLng(51.06057884,3.70735176)
    },
    links: [{
        description: "Naar gang B201",
        pano: "pano02009",
        heading: 47
    },{
        description: "Naar gang B201",
        pano: "pano02011",
        heading: 227
    }],
    neighbours: [{
        up: 'pano02005',
        down: 'pano02009'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 67,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02011 = {
    location: {
        pano: 'pano02011',
        description: 'Gang B201',
        latLng: new google.maps.LatLng(51.06050654,3.7072255)
    },
    links: [{
        description: "Naar gang B201",
        pano: "pano02010",
        heading: 47
    },{
        description: "Naar gang B201",
        pano: "pano02012",
        heading: 139
    },{
        description: "Naar gang B201",
        pano: "pano02013",
        heading: 320
    }],
    neighbours: [{
        up: 'pano02002',
        down: 'pano02011'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 348,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02012 = {
    location: {
        pano: 'pano02012',
        description: 'Gang B201',
        latLng: new google.maps.LatLng(51.0604383,3.7073173)
    },
    links: [{
        description: "Naar gang B201",
        pano: "pano02011",
        heading: 319
    }],
    neighbours: [{
        up: 'pano02003',
        down: 'pano02012'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 103,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02013 = {
    location: {
        pano: 'pano02013',
        description: 'Gang B201',
        latLng: new google.maps.LatLng(51.06055166,3.70716656)
    },
    links: [{
        description: "Naar gang B201",
        pano: "pano02011",
        heading: 140
    },{
        description: "Naar noodtrap B239",
        pano: "pano02014",
        heading: 237
    }],
    neighbours: [{
        up: 'pano02001',
        down: 'pano02013'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 13,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02014 = {
    location: {
        pano: 'pano02014',
        description: 'Noodtrap B239',
        latLng: new google.maps.LatLng(51.06053145,3.70711629)
    },
    links: [{
        description: "Naar gang B201",
        pano: "pano02013",
        heading: 57
    }],
    neighbours: [{
        up: 'pano02000',
        down: 'pano02015'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 239,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano05000 = {
    location: {
        pano: 'pano05000',
        description: 'Traphal E222',
        latLng: new google.maps.LatLng(51.0599667,3.70936559)
    },
    neighbours: [{
        up: 'pano05000',
        down: 'pano05000'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 112,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07000 = {
    location: {
        pano: 'pano07000',
        description: 'Traphal G210',
        latLng: new google.maps.LatLng(51.05924978,3.70805315)
    },
    links: [{
        description: "Naar traphal G210",
        pano: "pano07001",
        heading: 281
    }],
    neighbours: [{
        down: 'pano07000'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 286,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07001 = {
    location: {
        pano: 'pano07001',
        description: 'Traphal G210',
        latLng: new google.maps.LatLng(51.05925642,3.70799902)
    },
    links: [{
        description: "Naar traphal G210",
        pano: "pano07000",
        heading: 101
    },{
        description: "Naar gang G204",
        pano: "pano07002",
        heading: 299
    }],
    neighbours: [{
        down: 'pano07001'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 124,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07002 = {
    location: {
        pano: 'pano07002',
        description: 'Gang G204',
        latLng: new google.maps.LatLng(51.05927358,3.70794986)
    },
    links: [{
        description: "Naar traphal G210",
        pano: "pano07001",
        heading: 119
    },{
        description: "Naar gang G204",
        pano: "pano07003",
        heading: 28
    }],
    neighbours: [{
        down: 'pano07002'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 208,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07003 = {
    location: {
        pano: 'pano07003',
        description: 'Gang G204',
        latLng: new google.maps.LatLng(51.05931264,3.70798419)
    },
    links: [{
        description: "Naar gang G204",
        pano: "pano07002",
        heading: 208
    },{
        description: "Naar gang G204",
        pano: "pano07004",
        heading: 28
    }],
    neighbours: [{
        down: 'pano07006'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 136,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07004 = {
    location: {
        pano: 'pano07004',
        description: 'Gang G204',
        latLng: new google.maps.LatLng(51.05935686,3.70802318)
    },
    links: [{
        description: "Naar gang G204",
        pano: "pano07003",
        heading: 208
    },{
        description: "Naar gang G204",
        pano: "pano07005",
        heading: 50
    }],
    neighbours: [{
        down: 'pano07007'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 41,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07005 = {
    location: {
        pano: 'pano07005',
        description: 'Gang G204',
        latLng: new google.maps.LatLng(51.05937402,3.70805635)
    },
    links: [{
        description: "Naar gang G204",
        pano: "pano07004",
        heading: 230
    }],
    neighbours: [{
        down: 'pano07007'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 98,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11000 = {
    location: {
        pano: 'pano11000',
        description: 'Traphal L202',
        latLng: new google.maps.LatLng(51.05977339,3.71021651)
    },
    links: [{
        description: "Naar gang L201",
        pano: "pano11001",
        heading: 249
    }],
    neighbours: [{
        up: 'pano11000',
        down: 'pano11000'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 159,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11001 = {
    location: {
        pano: 'pano11001',
        description: 'Gang L201',
        latLng: new google.maps.LatLng(51.05975624,3.7102414)
    },
    links: [{
        description: "Naar traphal L202",
        pano: "pano11000",
        heading: 317
    },{
        description: "Naar gang L201",
        pano: "pano11002",
        heading: 47
    },{
        description: "Naar gang L209",
        pano: "pano11012",
        heading: 227
    }],
    neighbours: [{
        up: 'pano11001',
        down: 'pano11001'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 325,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11002 = {
    location: {
        pano: 'pano11002',
        description: 'Gang L201',
        latLng: new google.maps.LatLng(51.05977033,3.71026585)
    },
    links: [{
        description: "Naar gang L201",
        pano: "pano11001",
        heading: 227
    },{
        description: "Naar gang L201",
        pano: "pano11003",
        heading: 47
    },{
        description: "Naar gang L201",
        pano: "pano11011",
        heading: 319
    }],
    neighbours: [{
        up: 'pano11002',
        down: 'pano11002'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 99,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11003 = {
    location: {
        pano: 'pano11003',
        description: 'Gang L201',
        latLng: new google.maps.LatLng(51.0597959,3.71031023)
    },
    links: [{
        description: "Naar gang L201",
        pano: "pano11002",
        heading: 227
    },{
        description: "Naar gang L201",
        pano: "pano11004",
        heading: 47
    }],
    neighbours: [{
        up: 'pano11002',
        down: 'pano11003'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 91,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11004 = {
    location: {
        pano: 'pano11004',
        description: 'Gang L201',
        latLng: new google.maps.LatLng(51.0598303,3.71036994)
    },
    links: [{
        description: "Naar gang L201",
        pano: "pano11003",
        heading: 227
    },{
        description: "Naar gang L201",
        pano: "pano11005",
        heading: 317
    }],
    neighbours: [{
        up: 'pano11003',
        down: 'pano11004'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 105,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11005 = {
    location: {
        pano: 'pano11005',
        description: 'Gang L201',
        latLng: new google.maps.LatLng(51.05985651,3.71033192)
    },
    links: [{
        description: "Naar gang L201",
        pano: "pano11004",
        heading: 137
    },{
        description: "Naar gang L201",
        pano: "pano11006",
        heading: 317
    }],
    neighbours: [{
        up: 'pano11006',
        down: 'pano11005'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 346,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11006 = {
    location: {
        pano: 'pano11006',
        description: 'Gang L201',
        latLng: new google.maps.LatLng(51.05987622,3.71030332)
    },
    links: [{
        description: "Naar gang L201",
        pano: "pano11005",
        heading: 137
    },{
        description: "Naar gang L201",
        pano: "pano11007",
        heading: 317
    },{
        description: "Naar gang L201",
        pano: "pano11010",
        heading: 229
    }],
    neighbours: [{
        up: 'pano11007',
        down: 'pano11006'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 7,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11007 = {
    location: {
        pano: 'pano11007',
        description: 'Gang L201',
        latLng: new google.maps.LatLng(51.0599073,3.71025823)
    },
    links: [{
        description: "Naar gang L201",
        pano: "pano11006",
        heading: 137
    },{
        description: "Naar gang L201",
        pano: "pano11008",
        heading: 317
    },{
        description: "Naar terras",
        pano: "pano11009",
        heading: 234
    }],
    neighbours: [{
        up: 'pano11008',
        down: 'pano11007'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 104,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11008 = {
    location: {
        pano: 'pano11008',
        description: 'Gang L201',
        latLng: new google.maps.LatLng(51.05993598,3.71021662)
    },
    links: [{
        description: "Naar gang L201",
        pano: "pano11007",
        heading: 137
    },{
        description: "Naar gang L201",
        pano: "pano12014",
        heading: 317
    }],
    neighbours: [{
        up: 'pano11009',
        down: 'pano11007'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 96,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11009 = {
    location: {
        pano: 'pano11009',
        description: 'Terras',
        latLng: new google.maps.LatLng(51.05988283,3.710203)
    },
    links: [{
        description: "Naar gang L201",
        pano: "pano11007",
        heading: 54
    }],
    neighbours: [{
        up: 'pano11008',
        down: 'pano11007'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 328,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11010 = {
    location: {
        pano: 'pano11010',
        description: 'Gang L201',
        latLng: new google.maps.LatLng(51.05984908,3.71025197)
    },
    links: [{
        description: "Naar gang L201",
        pano: "pano11006",
        heading: 49
    },{
        description: "Naar gang L201",
        pano: "pano11011",
        heading: 222
    }],
    neighbours: [{
        up: 'pano11010',
        down: 'pano11008'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 290,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11011 = {
    location: {
        pano: 'pano11011',
        description: 'Gang L201',
        latLng: new google.maps.LatLng(51.05981552,3.71020372)
    },
    links: [{
        description: "Naar gang L201",
        pano: "pano11010",
        heading: 42
    },{
        description: "Naar gang L201",
        pano: "pano11002",
        heading: 139
    }],
    neighbours: [{
        up: 'pano11011',
        down: 'pano11009'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 328,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11012 = {
    location: {
        pano: 'pano11012',
        description: 'Gang L209',
        latLng: new google.maps.LatLng(51.0597118,3.71016428)
    },
    links: [{
        description: "Naar gang L201",
        pano: "pano11001",
        heading: 47
    },{
        description: "Naar lokaal L226",
        pano: "pano11013",
        heading: 137
    },{
        description: "Naar gang L210",
        pano: "pano11017",
        heading: 227
    },{
        description: "Naar gang L209",
        pano: "pano11016",
        heading: 317
    }],
    neighbours: [{
        up: 'pano11017',
        down: 'pano11010'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 95,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11013 = {
    location: {
        pano: 'pano11013',
        description: 'Lokaal L226',
        latLng: new google.maps.LatLng(51.05968368,3.71020509)
    },
    links: [{
        description: "Naar gang L209",
        pano: "pano11012",
        heading: 317
    },{
        description: "Naar lokaal L226",
        pano: "pano11014",
        heading: 233
    },{
        description: "Naar lokaal L226",
        pano: "pano11015",
        heading: 64
    }],
    neighbours: [{
        up: 'pano11017',
        down: 'pano11010'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 304,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11014 = {
    location: {
        pano: 'pano11014',
        description: 'Lokaal L226',
        latLng: new google.maps.LatLng(51.05964823,3.71012787)
    },
    links: [{
        description: "Naar lokaal L226",
        pano: "pano11013",
        heading: 53
    }],
    neighbours: [{
        up: 'pano11017',
        down: 'pano11010'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 252,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11015 = {
    location: {
        pano: 'pano11015',
        description: 'Lokaal L226',
        latLng: new google.maps.LatLng(51.05971756,3.71032011)
    },
    links: [{
        description: "Naar lokaal L226",
        pano: "pano11013",
        heading: 244
    }],
    neighbours: [{
        up: 'pano11017',
        down: 'pano11010'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 142,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11016 = {
    location: {
        pano: 'pano11016',
        description: 'Gang L209',
        latLng: new google.maps.LatLng(51.05975639,3.71009959)
    },
    links: [{
        description: "Naar gang L209",
        pano: "pano11012",
        heading: 137
    }],
    neighbours: [{
        up: 'pano11017',
        down: 'pano11010'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 110,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11017 = {
    location: {
        pano: 'pano11017',
        description: 'Gang L210',
        latLng: new google.maps.LatLng(51.0596814,3.71011151)
    },
    links: [{
        description: "Naar gang L209",
        pano: "pano11012",
        heading: 47
    },{
        description: "Naar gang L210",
        pano: "pano11018",
        heading: 227
    }],
    neighbours: [{
        up: 'pano11012',
        down: 'pano11011'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 74,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11018 = {
    location: {
        pano: 'pano11018',
        description: 'Gang L210',
        latLng: new google.maps.LatLng(51.05964409,3.71004677)
    },
    links: [{
        description: "Naar gang L210",
        pano: "pano11017",
        heading: 47
    },{
        description: "Naar gang L210",
        pano: "pano11019",
        heading: 317
    }],
    neighbours: [{
        up: 'pano11013',
        down: 'pano11013'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 87,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11019 = {
    location: {
        pano: 'pano11019',
        description: 'Gang L210',
        latLng: new google.maps.LatLng(51.05968317,3.70999008)
    },
    links: [{
        description: "Naar gang L210",
        pano: "pano11018",
        heading: 137
    },{
        description: "Naar gang M201",
        pano: "pano11020",
        heading: 317
    }],
    neighbours: [{
        up: 'pano11014',
        down: 'pano11014'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 103,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11020 = {
    location: {
        pano: 'pano11020',
        description: 'Gang M201',
        latLng: new google.maps.LatLng(51.05971155,3.70994889)
    },
    links: [{
        description: "Naar gang L210",
        pano: "pano11019",
        heading: 137
    },{
        description: "Naar noodtrap",
        pano: "pano11021",
        heading: 241
    },{
        description: "Naar gang M201",
        pano: "pano11022",
        heading: 317
    }],
    neighbours: [{
        up: 'pano11015',
        down: 'pano11015'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 88,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11021 = {
    location: {
        pano: 'pano11021',
        description: 'Noodtrap',
        latLng: new google.maps.LatLng(51.05969885,3.70991201)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano11020",
        heading: 61
    }],
    neighbours: [{
        up: 'pano11016',
        down: 'pano11015'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 341,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11022 = {
    location: {
        pano: 'pano11022',
        description: 'Gang M201',
        latLng: new google.maps.LatLng(51.0597469,3.70989761)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano11020",
        heading: 137
    },{
        description: "Naar gang M201",
        pano: "pano12008",
        heading: 317
    }],
    neighbours: [{
        up: 'pano12007',
        down: 'pano11015'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 134,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12000 = {
    location: {
        pano: 'pano12000',
        description: 'Traphal M202',
        latLng: new google.maps.LatLng(51.05992304,3.70988022)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano12001",
        heading: 317
    }],
    neighbours: [{
        up: 'pano12000',
        down: 'pano12000'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 231,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12001 = {
    location: {
        pano: 'pano12001',
        description: 'Gang M201',
        latLng: new google.maps.LatLng(51.05994041,3.70985502)
    },
    links: [{
        description: "Naar traphal M202",
        pano: "pano12000",
        heading: 137
    },{
        description: "Naar gang M201",
        pano: "pano12002",
        heading: 227
    },{
        description: "Naar gang M201",
        pano: "pano12010",
        heading: 47
    }],
    neighbours: [{
        up: 'pano12001',
        down: 'pano12001'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 101,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12002 = {
    location: {
        pano: 'pano12002',
        description: 'Gang M201',
        latLng: new google.maps.LatLng(51.05992682,3.70983144)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano12001",
        heading: 47
    },{
        description: "Naar gang M201",
        pano: "pano12003",
        heading: 137
    },{
        description: "Naar gang M201",
        pano: "pano12007",
        heading: 227
    }],
    neighbours: [{
        up: 'pano12002',
        down: 'pano12002'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 181,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12003 = {
    location: {
        pano: 'pano12003',
        description: 'Gang M201',
        latLng: new google.maps.LatLng(51.05987788,3.70990313)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano12002",
        heading: 317
    },{
        description: "Naar gang M201",
        pano: "pano12004",
        heading: 227
    }],
    neighbours: [{
        up: 'pano12009',
        down: 'pano12003'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 153,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12004 = {
    location: {
        pano: 'pano12004',
        description: 'Gang M201',
        latLng: new google.maps.LatLng(51.0598165,3.70979661)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano12003",
        heading: 47
    },{
        description: "Naar gang M201",
        pano: "pano12005",
        heading: 317
    },{
        description: "Naar gang M201",
        pano: "pano12008",
        heading: 137
    }],
    neighbours: [{
        up: 'pano12006',
        down: 'pano12006'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 188,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12005 = {
    location: {
        pano: 'pano12005',
        description: 'Gang M201',
        latLng: new google.maps.LatLng(51.05984248,3.70975892)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano12004",
        heading: 137
    },{
        description: "Naar gang M201",
        pano: "pano12006",
        heading: 317
    }],
    neighbours: [{
        up: 'pano12005',
        down: 'pano12005'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 74,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12006 = {
    location: {
        pano: 'pano12006',
        description: 'Gang M201',
        latLng: new google.maps.LatLng(51.05986565,3.70972529)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano12005",
        heading: 137
    },{
        description: "Naar gang M201",
        pano: "pano12007",
        heading: 47
    }],
    neighbours: [{
        up: 'pano12004',
        down: 'pano12005'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 282,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12007 = {
    location: {
        pano: 'pano12007',
        description: 'Gang M201',
        latLng: new google.maps.LatLng(51.0598961,3.70977813)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano12006",
        heading: 227
    },{
        description: "Naar gang M201",
        pano: "pano12002",
        heading: 47
    }],
    neighbours: [{
        up: 'pano12003',
        down: 'pano12004'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 357,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12008 = {
    location: {
        pano: 'pano12008',
        description: 'Gang M201',
        latLng: new google.maps.LatLng(51.05978866,3.70983701)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano12004",
        heading: 317
    },{
        description: "Naar terras",
        pano: "pano12009",
        heading: 56
    },{
        description: "Naar gang M201",
        pano: "pano11022",
        heading: 137
    }],
    neighbours: [{
        up: 'pano12007',
        down: 'pano12006'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 77,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12009 = {
    location: {
        pano: 'pano12009',
        description: 'Terras',
        latLng: new google.maps.LatLng(51.05981043,3.70988893)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano12008",
        heading: 236
    }],
    neighbours: [{
        up: 'pano12007',
        down: 'pano12006'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 69,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12010 = {
    location: {
        pano: 'pano12010',
        description: 'Gang M201',
        latLng: new google.maps.LatLng(51.05997044,3.70990714)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano12001",
        heading: 227
    },{
        description: "Naar gang M201",
        pano: "pano12011",
        heading: 52
    }],
    neighbours: [{
        up: 'pano12011',
        down: 'pano12007'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 48,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12011 = {
    location: {
        pano: 'pano12011',
        description: 'Gang M201',
        latLng: new google.maps.LatLng(51.06002298,3.71001433)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano12010",
        heading: 232
    },{
        description: "Naar gang M201",
        pano: "pano12012",
        heading: 48
    }],
    neighbours: [{
        up: 'pano12012',
        down: 'pano12008'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 59,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12012 = {
    location: {
        pano: 'pano12012',
        description: 'Gang M201',
        latLng: new google.maps.LatLng(51.06005334,3.7100698)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano12011",
        heading: 228
    },{
        description: "Naar gang M201",
        pano: "pano12013",
        heading: 149
    }],
    neighbours: [{
        up: 'pano12014',
        down: 'pano12009'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 173,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12013 = {
    location: {
        pano: 'pano12013',
        description: 'Gang M201',
        latLng: new google.maps.LatLng(51.06000625,3.71011466)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano12012",
        heading: 329
    },{
        description: "Naar gang L201",
        pano: "pano12014",
        heading: 137
    }],
    neighbours: [{
        up: 'pano12015',
        down: 'pano12010'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 142,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12014 = {
    location: {
        pano: 'pano12014',
        description: 'Gang L201',
        latLng: new google.maps.LatLng(51.05998441,3.71014635)
    },
    links: [{
        description: "Naar gang M201",
        pano: "pano12013",
        heading: 317
    },{
        description: "Naar gang L201",
        pano: "pano11008",
        heading: 137
    },{
        description: "Naar noodtrap",
        pano: "pano12015",
        heading: 47
    }],
    neighbours: [{
        up: 'pano12016',
        down: 'pano12011'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 129,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12015 = {
    location: {
        pano: 'pano12015',
        description: 'Noodtrap',
        latLng: new google.maps.LatLng(51.06000225,3.71017695)
    },
    links: [{
        description: "Naar gang L201",
        pano: "pano12014",
        heading: 227
    }],
    neighbours: [{
        up: 'pano12017',
        down: 'pano12011'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 8,
        getTileUrl: getCustomPanoramaTileUrl
    }
};

var ROOMS = [
    {
        "floor": 3,
        "room": "W105",
        "lat": 51.0613945492056,
        "lng": 3.70828373519724
    },
    {
        "floor": 3,
        "room": "W103",
        "lat": 51.0614445525907,
        "lng": 3.70830475871831
    },
    {
        "floor": 3,
        "room": "W104",
        "lat": 51.0614154493621,
        "lng": 3.70826321001525
    },
    {
        "floor": 3,
        "room": "W101",
        "lat": 51.0614176488792,
        "lng": 3.70831972684567
    },
    {
        "floor": 3,
        "room": "W102",
        "lat": 51.0614388852547,
        "lng": 3.7083493986447
    },
    {
        "floor": 3,
        "room": "A205",
        "lat": 51.0595533587248,
        "lng": 3.70818989247775
    },
    {
        "floor": 3,
        "room": "A206",
        "lat": 51.0595637450372,
        "lng": 3.70827008059306
    },
    {
        "floor": 3,
        "room": "A204",
        "lat": 51.0595439325915,
        "lng": 3.70812037490697
    },
    {
        "floor": 3,
        "room": "A203",
        "lat": 51.0595360724157,
        "lng": 3.70806241674393
    },
    {
        "floor": 3,
        "room": "A202",
        "lat": 51.0595155511827,
        "lng": 3.70799015341085
    },
    {
        "floor": 3,
        "room": "A1T7",
        "lat": 51.0595370815373,
        "lng": 3.70848169086462
    },
    {
        "floor": 3,
        "room": "A1T5",
        "lat": 51.0595748893073,
        "lng": 3.70846597244315
    },
    {
        "floor": 3,
        "room": "A1T0",
        "lat": 51.0596636013698,
        "lng": 3.7084456889762
    },
    {
        "floor": 3,
        "room": "A201",
        "lat": 51.0595380223225,
        "lng": 3.7082562689912
    },
    {
        "floor": 3,
        "room": "A1T6",
        "lat": 51.0595584691423,
        "lng": 3.708446422485
    },
    {
        "floor": 3,
        "room": "A1T4",
        "lat": 51.0595559377664,
        "lng": 3.70854318769812
    },
    {
        "floor": 3,
        "room": "A1T3",
        "lat": 51.0596077566318,
        "lng": 3.70851907588059
    },
    {
        "floor": 3,
        "room": "A1T2",
        "lat": 51.0596539309354,
        "lng": 3.70848835648991
    },
    {
        "floor": 3,
        "room": "A1T1",
        "lat": 51.0596915586766,
        "lng": 3.70848048875292
    },
    {
        "floor": 3,
        "room": "G1T1",
        "lat": 51.0592457000432,
        "lng": 3.70807946798824
    },
    {
        "floor": 3,
        "room": "G211",
        "lat": 51.0591572407684,
        "lng": 3.70778913260528
    },
    {
        "floor": 3,
        "room": "G217",
        "lat": 51.0590871780678,
        "lng": 3.70781698239384
    },
    {
        "floor": 3,
        "room": "G213",
        "lat": 51.0591958641119,
        "lng": 3.70787786390532
    },
    {
        "floor": 3,
        "room": "G212",
        "lat": 51.059223384903,
        "lng": 3.70790205524769
    },
    {
        "floor": 3,
        "room": "G214",
        "lat": 51.0592275139475,
        "lng": 3.70778720095547
    },
    {
        "floor": 3,
        "room": "G215",
        "lat": 51.0592550347569,
        "lng": 3.70781139226088
    },
    {
        "floor": 3,
        "room": "G216",
        "lat": 51.0592825359033,
        "lng": 3.70783556631521
    },
    {
        "floor": 3,
        "room": "G207",
        "lat": 51.0593189456514,
        "lng": 3.70788499845886
    },
    {
        "floor": 3,
        "room": "G206",
        "lat": 51.0593788952641,
        "lng": 3.70793769559891
    },
    {
        "floor": 3,
        "room": "G205",
        "lat": 51.0594514714733,
        "lng": 3.70800149202842
    },
    {
        "floor": 3,
        "room": "G204",
        "lat": 51.0593335232026,
        "lng": 3.70799859422507
    },
    {
        "floor": 3,
        "room": "G203",
        "lat": 51.0593408363282,
        "lng": 3.70805354959334
    },
    {
        "floor": 3,
        "room": "G210",
        "lat": 51.0592620040869,
        "lng": 3.70799730190769
    },
    {
        "floor": 3,
        "room": "G201d",
        "lat": 51.059516627639,
        "lng": 3.70831409970392
    },
    {
        "floor": 3,
        "room": "G200",
        "lat": 51.0595123702058,
        "lng": 3.70835324871965
    },
    {
        "floor": 3,
        "room": "G201",
        "lat": 51.0594220864214,
        "lng": 3.70818579470181
    },
    {
        "floor": 3,
        "room": "G201a",
        "lat": 51.059447520464,
        "lng": 3.70832727732875
    },
    {
        "floor": 3,
        "room": "G201c",
        "lat": 51.0594054756888,
        "lng": 3.70836292593154
    },
    {
        "floor": 3,
        "room": "G201b",
        "lat": 51.0594537983816,
        "lng": 3.70836775064066
    },
    {
        "floor": 3,
        "room": "B221",
        "lat": 51.0606252429498,
        "lng": 3.70711907799744
    },
    {
        "floor": 3,
        "room": "B214",
        "lat": 51.0606360550495,
        "lng": 3.70730228691066
    },
    {
        "floor": 3,
        "room": "B220",
        "lat": 51.0606813649942,
        "lng": 3.70722657637343
    },
    {
        "floor": 3,
        "room": "B207",
        "lat": 51.0608110567145,
        "lng": 3.70743513850418
    },
    {
        "floor": 3,
        "room": "B206",
        "lat": 51.0608978456295,
        "lng": 3.70756151397042
    },
    {
        "floor": 3,
        "room": "B228",
        "lat": 51.0605727365042,
        "lng": 3.70753160942059
    },
    {
        "floor": 3,
        "room": "B229",
        "lat": 51.060527851473,
        "lng": 3.70745322538152
    },
    {
        "floor": 3,
        "room": "B227",
        "lat": 51.0606112742109,
        "lng": 3.70759890913544
    },
    {
        "floor": 3,
        "room": "B226",
        "lat": 51.0606501143229,
        "lng": 3.70766673713196
    },
    {
        "floor": 3,
        "room": "B225",
        "lat": 51.0606946973592,
        "lng": 3.70774459444416
    },
    {
        "floor": 3,
        "room": "B230",
        "lat": 51.0604914272979,
        "lng": 3.70735011262333
    },
    {
        "floor": 3,
        "room": "B215",
        "lat": 51.0605740900425,
        "lng": 3.70723214881351
    },
    {
        "floor": 3,
        "room": "B213",
        "lat": 51.0606876540217,
        "lng": 3.70741291045226
    },
    {
        "floor": 3,
        "room": "B216",
        "lat": 51.0607278768833,
        "lng": 3.70730809323712
    },
    {
        "floor": 3,
        "room": "B204",
        "lat": 51.0608793386515,
        "lng": 3.70768317697543
    },
    {
        "floor": 3,
        "room": "B205",
        "lat": 51.0608526462798,
        "lng": 3.70763662110667
    },
    {
        "floor": 3,
        "room": "B200",
        "lat": 51.0608341035716,
        "lng": 3.707879706818
    },
    {
        "floor": 3,
        "room": "B202",
        "lat": 51.0607834187062,
        "lng": 3.70799355617575
    },
    {
        "floor": 3,
        "room": "B219",
        "lat": 51.0607262327362,
        "lng": 3.70721823889465
    },
    {
        "floor": 3,
        "room": "B218b",
        "lat": 51.0607491529899,
        "lng": 3.70724686446621
    },
    {
        "floor": 3,
        "room": "B218a",
        "lat": 51.0607684068001,
        "lng": 3.70728048790059
    },
    {
        "floor": 3,
        "room": "B201b",
        "lat": 51.0606995803697,
        "lng": 3.70734889624751
    },
    {
        "floor": 3,
        "room": "B212",
        "lat": 51.0607125902124,
        "lng": 3.70745645732297
    },
    {
        "floor": 3,
        "room": "B211",
        "lat": 51.0607320857683,
        "lng": 3.70749050309058
    },
    {
        "floor": 3,
        "room": "B210",
        "lat": 51.0607515813142,
        "lng": 3.70752454888656
    },
    {
        "floor": 3,
        "room": "B209",
        "lat": 51.0607710768502,
        "lng": 3.70755859471091
    },
    {
        "floor": 3,
        "room": "B208",
        "lat": 51.0607905723762,
        "lng": 3.70759264056363
    },
    {
        "floor": 3,
        "room": "B240",
        "lat": 51.0606766756836,
        "lng": 3.70747366734437
    },
    {
        "floor": 3,
        "room": "B201c",
        "lat": 51.0608236984428,
        "lng": 3.70760752270233
    },
    {
        "floor": 3,
        "room": "B203b",
        "lat": 51.0608216490055,
        "lng": 3.70767360162038
    },
    {
        "floor": 3,
        "room": "B203a",
        "lat": 51.0608515458296,
        "lng": 3.70772325339812
    },
    {
        "floor": 3,
        "room": "B231",
        "lat": 51.0604407358828,
        "lng": 3.70744473411588
    },
    {
        "floor": 3,
        "room": "B232",
        "lat": 51.0604218899045,
        "lng": 3.70741182297645
    },
    {
        "floor": 3,
        "room": "B233",
        "lat": 51.0604092801148,
        "lng": 3.70736217544965
    },
    {
        "floor": 3,
        "room": "B239",
        "lat": 51.0605345125133,
        "lng": 3.7071118706751
    },
    {
        "floor": 3,
        "room": "B236",
        "lat": 51.0604634763393,
        "lng": 3.70720596752687
    },
    {
        "floor": 3,
        "room": "B235",
        "lat": 51.0604460678233,
        "lng": 3.70723897241152
    },
    {
        "floor": 3,
        "room": "B234",
        "lat": 51.0604176945937,
        "lng": 3.70727988587092
    },
    {
        "floor": 3,
        "room": "B237",
        "lat": 51.0604941714259,
        "lng": 3.70716902989397
    },
    {
        "floor": 3,
        "room": "B238",
        "lat": 51.060520709852,
        "lng": 3.7071339755669
    },
    {
        "floor": 3,
        "room": "B223",
        "lat": 51.0607641909115,
        "lng": 3.70774870609989
    },
    {
        "floor": 3,
        "room": "B224",
        "lat": 51.0607237762385,
        "lng": 3.70780698258503
    },
    {
        "floor": 3,
        "room": "B222",
        "lat": 51.0607092039049,
        "lng": 3.70788928408059
    },
    {
        "floor": 3,
        "room": "B201a",
        "lat": 51.0607891490232,
        "lng": 3.7079145766945
    },
    {
        "floor": 3,
        "room": "B201",
        "lat": 51.0608183645988,
        "lng": 3.70774779166958
    },
    {
        "floor": 3,
        "room": "B217",
        "lat": 51.0607647435655,
        "lng": 3.70734744642183
    },
    {
        "floor": 3,
        "room": "C203",
        "lat": 51.0607370402791,
        "lng": 3.70813848989274
    },
    {
        "floor": 3,
        "room": "C201",
        "lat": 51.0608570327506,
        "lng": 3.7079994421132
    },
    {
        "floor": 3,
        "room": "C202",
        "lat": 51.060886328947,
        "lng": 3.70806120939836
    },
    {
        "floor": 3,
        "room": "E220",
        "lat": 51.0600139310072,
        "lng": 3.70926367867951
    },
    {
        "floor": 3,
        "room": "E222",
        "lat": 51.0599587509509,
        "lng": 3.70935120989688
    },
    {
        "floor": 3,
        "room": "M240",
        "lat": 51.059945959374,
        "lng": 3.70997565547361
    },
    {
        "floor": 3,
        "room": "L201",
        "lat": 51.0597886369111,
        "lng": 3.71022896697934
    },
    {
        "floor": 3,
        "room": "L203",
        "lat": 51.0597906831892,
        "lng": 3.71015536539781
    },
    {
        "floor": 3,
        "room": "L222",
        "lat": 51.0597666765654,
        "lng": 3.7105639385833
    },
    {
        "floor": 3,
        "room": "L212",
        "lat": 51.0599701135076,
        "lng": 3.71029151847164
    },
    {
        "floor": 3,
        "room": "L224",
        "lat": 51.0597583282195,
        "lng": 3.71040673771196
    },
    {
        "floor": 3,
        "room": "M224",
        "lat": 51.0600199005312,
        "lng": 3.70986807590058
    },
    {
        "floor": 3,
        "room": "M212",
        "lat": 51.0598551176325,
        "lng": 3.70961329135111
    },
    {
        "floor": 3,
        "room": "L206",
        "lat": 51.059832725661,
        "lng": 3.71032291770446
    },
    {
        "floor": 3,
        "room": "L205",
        "lat": 51.0598479832559,
        "lng": 3.71030077902388
    },
    {
        "floor": 3,
        "room": "L207",
        "lat": 51.059807946834,
        "lng": 3.71027624369549
    },
    {
        "floor": 3,
        "room": "L208",
        "lat": 51.0598144882967,
        "lng": 3.71023631018131
    },
    {
        "floor": 3,
        "room": "L202",
        "lat": 51.0597690517295,
        "lng": 3.71021727903269
    },
    {
        "floor": 3,
        "room": "M205",
        "lat": 51.0598452201483,
        "lng": 3.70978920739821
    },
    {
        "floor": 3,
        "room": "M206",
        "lat": 51.0598610700344,
        "lng": 3.70976862500761
    },
    {
        "floor": 3,
        "room": "M207",
        "lat": 51.0598855090387,
        "lng": 3.70981579217954
    },
    {
        "floor": 3,
        "room": "M208",
        "lat": 51.0598778054724,
        "lng": 3.70985209696476
    },
    {
        "floor": 3,
        "room": "M201",
        "lat": 51.0599018760025,
        "lng": 3.70985687788863
    },
    {
        "floor": 3,
        "room": "M222",
        "lat": 51.0599859942494,
        "lng": 3.70980923504009
    },
    {
        "floor": 3,
        "room": "M203",
        "lat": 51.0599031130551,
        "lng": 3.70993617721882
    },
    {
        "floor": 3,
        "room": "M202",
        "lat": 51.0599238875633,
        "lng": 3.70987277638467
    },
    {
        "floor": 3,
        "room": "L220",
        "lat": 51.059851935129,
        "lng": 3.71051373093341
    },
    {
        "floor": 3,
        "room": "L223",
        "lat": 51.0598363274579,
        "lng": 3.71048664503625
    },
    {
        "floor": 3,
        "room": "L226",
        "lat": 51.0596732529483,
        "lng": 3.71021751257004
    },
    {
        "floor": 3,
        "room": "L209",
        "lat": 51.0597320633774,
        "lng": 3.71012656151221
    },
    {
        "floor": 3,
        "room": "L232",
        "lat": 51.0596436919455,
        "lng": 3.7099244800308
    },
    {
        "floor": 3,
        "room": "L230",
        "lat": 51.0595992116344,
        "lng": 3.7099890168837
    },
    {
        "floor": 3,
        "room": "L228",
        "lat": 51.0596178927528,
        "lng": 3.71007034153772
    },
    {
        "floor": 3,
        "room": "L234",
        "lat": 51.0596922458665,
        "lng": 3.71003251987307
    },
    {
        "floor": 3,
        "room": "L210",
        "lat": 51.0596725318591,
        "lng": 3.70999830831782
    },
    {
        "floor": 3,
        "room": "M210",
        "lat": 51.0597310364232,
        "lng": 3.70977019568482
    },
    {
        "floor": 3,
        "room": "M220",
        "lat": 51.0599647637118,
        "lng": 3.70977239169795
    },
    {
        "floor": 3,
        "room": "M215",
        "lat": 51.0597817481918,
        "lng": 3.7097678369443
    },
    {
        "floor": 3,
        "room": "M218",
        "lat": 51.0599281816289,
        "lng": 3.70977570247908
    },
    {
        "floor": 3,
        "room": "M217",
        "lat": 51.0599611510728,
        "lng": 3.70972786317673
    },
    {
        "floor": 3,
        "room": "M225",
        "lat": 51.0600584335225,
        "lng": 3.70992543411026
    },
    {
        "floor": 3,
        "room": "M226",
        "lat": 51.0600824414019,
        "lng": 3.709976609501
    },
    {
        "floor": 3,
        "room": "M228",
        "lat": 51.0601290403791,
        "lng": 3.71005747779802
    },
    {
        "floor": 3,
        "room": "M214",
        "lat": 51.0598087804826,
        "lng": 3.7097286126898
    },
    {
        "floor": 3,
        "room": "M213",
        "lat": 51.059772444016,
        "lng": 3.70968933477996
    },
    {
        "floor": 3,
        "room": "L236",
        "lat": 51.0597113532795,
        "lng": 3.71006567879258
    },
    {
        "floor": 3,
        "room": "L219",
        "lat": 51.0598216970864,
        "lng": 3.71046125519273
    },
    {
        "floor": 3,
        "room": "L214",
        "lat": 51.0599532969868,
        "lng": 3.71031591921404
    },
    {
        "floor": 3,
        "room": "L216a",
        "lat": 51.0599338103809,
        "lng": 3.71034419421413
    },
    {
        "floor": 3,
        "room": "L216",
        "lat": 51.0599124663204,
        "lng": 3.71037516433613
    },
    {
        "floor": 3,
        "room": "L218",
        "lat": 51.0598786342261,
        "lng": 3.71042425444832
    },
    {
        "floor": 3,
        "room": "M232",
        "lat": 51.0600485337469,
        "lng": 3.71017966333959
    },
    {
        "floor": 3,
        "room": "M230",
        "lat": 51.0600779211437,
        "lng": 3.71013702201618
    },
    {
        "floor": 3,
        "room": "M216",
        "lat": 51.0599242614519,
        "lng": 3.70969629162915
    },
    {
        "floor": 3,
        "room": "M236",
        "lat": 51.0599819105215,
        "lng": 3.7100380452188
    },
    {
        "floor": 3,
        "room": "M234",
        "lat": 51.0599995014702,
        "lng": 3.71006857266811
    }
];

google.maps.event.addDomListener(window, 'load', initialize);

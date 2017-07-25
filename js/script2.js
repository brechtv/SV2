var map, streetview, overlay, pano, globalpano, neighbourpano;
var room_markers = [];
// initialize map & streetView
// add KML overlay
// add markers

function initialize() {
    // check if it exists, if it does, use it as first pano, if not, use default
        // get neighbourpanos from local storage
    neighbourpano_from_1 = localStorage.getItem("neighbourpano_from_1_to_2");
    neighbourpano_from_3 = localStorage.getItem("neighbourpano_from_3_to_2");

    if (neighbourpano_from_1 != null && neighbourpano_from_1 != 'undefined') {
        loadSV(neighbourpano_from_1);
    } else if (neighbourpano_from_3 != null && neighbourpano_from_1 != 'undefined') {
        loadSV(neighbourpano_from_3);
    } else {
        loadSV("pano01000");
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
            center: pano01000.location.latLng,
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
                localStorage.setItem("neighbourpano_from_2_to_3", neighbour_up);
                localStorage.setItem("neighbourpano_from_2_to_1", neighbour_down);
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

    createMarker(pano01000.location.latLng, map, pano01000.location.description);
    createMarker(pano01001.location.latLng, map, pano01001.location.description);
    createMarker(pano01002.location.latLng, map, pano01002.location.description);
    createMarker(pano01003.location.latLng, map, pano01003.location.description);
    createMarker(pano02000.location.latLng, map, pano02000.location.description);
    createMarker(pano02001.location.latLng, map, pano02001.location.description);
    createMarker(pano02002.location.latLng, map, pano02002.location.description);
    createMarker(pano02003.location.latLng, map, pano02003.location.description);
    createMarker(pano02004.location.latLng, map, pano02004.location.description);
    createMarker(pano02005.location.latLng, map, pano02005.location.description);
    createMarker(pano02006.location.latLng, map, pano02006.location.description);
    createMarker(pano02007.location.latLng, map, pano02007.location.description);
    createMarker(pano02008.location.latLng, map, pano02008.location.description);
    createMarker(pano02009.location.latLng, map, pano02009.location.description);
    createMarker(pano02010.location.latLng, map, pano02010.location.description);
    createMarker(pano02011.location.latLng, map, pano02011.location.description);
    createMarker(pano02012.location.latLng, map, pano02012.location.description);
    createMarker(pano02013.location.latLng, map, pano02013.location.description);
    createMarker(pano02014.location.latLng, map, pano02014.location.description);
    createMarker(pano02015.location.latLng, map, pano02015.location.description);
    createMarker(pano03000.location.latLng, map, pano03000.location.description);
    createMarker(pano03001.location.latLng, map, pano03001.location.description);
    createMarker(pano03002.location.latLng, map, pano03002.location.description);
    createMarker(pano03003.location.latLng, map, pano03003.location.description);
    createMarker(pano03004.location.latLng, map, pano03004.location.description);
    createMarker(pano03005.location.latLng, map, pano03005.location.description);
    createMarker(pano03006.location.latLng, map, pano03006.location.description);
    createMarker(pano03007.location.latLng, map, pano03007.location.description);
    createMarker(pano05000.location.latLng, map, pano05000.location.description);
    createMarker(pano07000.location.latLng, map, pano07000.location.description);
    createMarker(pano07001.location.latLng, map, pano07001.location.description);
    createMarker(pano07002.location.latLng, map, pano07002.location.description);
    createMarker(pano07003.location.latLng, map, pano07003.location.description);
    createMarker(pano07004.location.latLng, map, pano07004.location.description);
    createMarker(pano07005.location.latLng, map, pano07005.location.description);
    createMarker(pano07006.location.latLng, map, pano07006.location.description);
    createMarker(pano07007.location.latLng, map, pano07007.location.description);
    createMarker(pano07008.location.latLng, map, pano07008.location.description);
    createMarker(pano07009.location.latLng, map, pano07009.location.description);
    createMarker(pano07010.location.latLng, map, pano07010.location.description);
    createMarker(pano07011.location.latLng, map, pano07011.location.description);
    createMarker(pano07012.location.latLng, map, pano07012.location.description);
    createMarker(pano11000.location.latLng, map, pano11000.location.description);
    createMarker(pano11001.location.latLng, map, pano11001.location.description);
    createMarker(pano11002.location.latLng, map, pano11002.location.description);
    createMarker(pano11003.location.latLng, map, pano11003.location.description);
    createMarker(pano11004.location.latLng, map, pano11004.location.description);
    createMarker(pano11005.location.latLng, map, pano11005.location.description);
    createMarker(pano11006.location.latLng, map, pano11006.location.description);
    createMarker(pano11007.location.latLng, map, pano11007.location.description);
    createMarker(pano11008.location.latLng, map, pano11008.location.description);
    createMarker(pano11009.location.latLng, map, pano11009.location.description);
    createMarker(pano11010.location.latLng, map, pano11010.location.description);
    createMarker(pano11011.location.latLng, map, pano11011.location.description);
    createMarker(pano11012.location.latLng, map, pano11012.location.description);
    createMarker(pano11013.location.latLng, map, pano11013.location.description);
    createMarker(pano11014.location.latLng, map, pano11014.location.description);
    createMarker(pano11015.location.latLng, map, pano11015.location.description);
    createMarker(pano12000.location.latLng, map, pano12000.location.description);
    createMarker(pano12001.location.latLng, map, pano12001.location.description);
    createMarker(pano12002.location.latLng, map, pano12002.location.description);
    createMarker(pano12003.location.latLng, map, pano12003.location.description);
    createMarker(pano12004.location.latLng, map, pano12004.location.description);
    createMarker(pano12005.location.latLng, map, pano12005.location.description);
    createMarker(pano12006.location.latLng, map, pano12006.location.description);
    createMarker(pano12007.location.latLng, map, pano12007.location.description);
    createMarker(pano12008.location.latLng, map, pano12008.location.description);
    createMarker(pano12009.location.latLng, map, pano12009.location.description);
    createMarker(pano12010.location.latLng, map, pano12010.location.description);
    createMarker(pano12011.location.latLng, map, pano12011.location.description);
    createMarker(pano13000.location.latLng, map, pano13000.location.description);
    createMarker(pano13001.location.latLng, map, pano13001.location.description);
    createMarker(pano13002.location.latLng, map, pano13002.location.description);
    createMarker(pano13003.location.latLng, map, pano13003.location.description);
    createMarker(pano13004.location.latLng, map, pano13004.location.description);
    createMarker(pano13005.location.latLng, map, pano13005.location.description);
    createMarker(pano13006.location.latLng, map, pano13006.location.description);
    createMarker(pano13007.location.latLng, map, pano13007.location.description);
    createMarker(pano13008.location.latLng, map, pano13008.location.description);
    createMarker(pano13009.location.latLng, map, pano13009.location.description);
    createMarker(pano13010.location.latLng, map, pano13010.location.description);
    createMarker(pano13011.location.latLng, map, pano13011.location.description);
    var KMLLayer = new google.maps.KmlLayer({
        url: 'https://storage.googleapis.com/brechtv/SV%202/files/Final/verdieping1.kml',
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
    return "https://storage.googleapis.com/brechtv/SV%202/images/1e%20verdieping/" + pano + '.JPG';
}

function getCustomPanorama(pano, zoom, tileX, tileY) {
    switch (pano) {
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
        case 'pano03004':
            return pano03004;
            break;
        case 'pano03005':
            return pano03005;
            break;
        case 'pano03006':
            return pano03006;
            break;
        case 'pano03007':
            return pano03007;
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
        case 'pano07006':
            return pano07006;
            break;
        case 'pano07007':
            return pano07007;
            break;
        case 'pano07008':
            return pano07008;
            break;
        case 'pano07009':
            return pano07009;
            break;
        case 'pano07010':
            return pano07010;
            break;
        case 'pano07011':
            return pano07011;
            break;
        case 'pano07012':
            return pano07012;
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
        case 'pano13009':
            return pano13009;
            break;
        case 'pano13010':
            return pano13010;
            break;
        case 'pano13011':
            return pano13011;
            break;
        default:
            return pano01000;
    }
}
var pano01000 = {
    location: {
        pano: 'pano01000',
        description: 'Gang A0T1',
        latLng: new google.maps.LatLng(51.05968551,3.70848266)
    },
    links: [{
        description: "Naar gang A0T1",
        pano: "pano01001",
        heading: 223
    }],
    neighbours: [{
        down: 'pano01005'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 132,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano01001 = {
    location: {
        pano: 'pano01001',
        description: 'Gang A0T1',
        latLng: new google.maps.LatLng(51.05965948,3.70844383)
    },
    links: [{
        description: "Naar gang A0T1",
        pano: "pano01000",
        heading: 43
    },{
        description: "Naar gang A0T1",
        pano: "pano01002",
        heading: 158
    }],
    neighbours: [{
        down: 'pano01005'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 344,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano01002 = {
    location: {
        pano: 'pano01002',
        description: 'Gang A0T1',
        latLng: new google.maps.LatLng(51.05961471,3.70847218)
    },
    links: [{
        description: "Naar gang A0T1",
        pano: "pano01001",
        heading: 338
    },{
        description: "Naar gang A0T1",
        pano: "pano01003",
        heading: 158
    }],
    neighbours: [{
        down: 'pano01004'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 235,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano01003 = {
    location: {
        pano: 'pano01003',
        description: 'Gang A0T1',
        latLng: new google.maps.LatLng(51.05957718,3.70849569)
    },
    links: [{
        description: "Naar gang A0T1",
        pano: "pano01002",
        heading: 338
    }],
    neighbours: [{
        down: 'pano01003'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 211,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02000 = {
    location: {
        pano: 'pano02000',
        description: 'Noodtrap B100',
        latLng: new google.maps.LatLng(51.06078035,3.70799655)
    },
    links: [{
        description: "Naar gang C101",
        pano: "pano03002",
        heading: 63
    }],
    neighbours: [{
        up: 'pano02003',
        down: 'pano02001'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 269,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02001 = {
    location: {
        pano: 'pano02001',
        description: 'Gang B102',
        latLng: new google.maps.LatLng(51.06082206,3.70793626)
    },
    links: [{
        description: "Naar gang C101",
        pano: "pano03007",
        heading: 42
    },{
        description: "Naar traphal B101",
        pano: "pano02014",
        heading: 320
    },{
        description: "Naar gang B102",
        pano: "pano02002",
        heading: 228
    }],
    neighbours: [{
        up: 'pano02002',
        down: 'pano02001'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 133,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02002 = {
    location: {
        pano: 'pano02002',
        description: 'Gang B102',
        latLng: new google.maps.LatLng(51.06077168,3.70784485)
    },
    links: [{
        description: "Naar gang B102",
        pano: "pano02001",
        heading: 48
    },{
        description: "Naar gang B102",
        pano: "pano02003",
        heading: 316
    }],
    neighbours: [{
        up: 'pano02004',
        down: 'pano02001'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 138,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02003 = {
    location: {
        pano: 'pano02003',
        description: 'Gang B102',
        latLng: new google.maps.LatLng(51.06081824,3.70777521)
    },
    links: [{
        description: "Naar gang B102",
        pano: "pano02002",
        heading: 136
    },{
        description: "Naar gang B102",
        pano: "pano02004",
        heading: 229
    }],
    neighbours: [{
        up: 'pano02005',
        down: 'pano02001'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 167,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02004 = {
    location: {
        pano: 'pano02004',
        description: 'Gang B102',
        latLng: new google.maps.LatLng(51.06074008,3.70763209)
    },
    links: [{
        description: "Naar gang B102",
        pano: "pano02003",
        heading: 49
    },{
        description: "Naar gang B102",
        pano: "pano02005",
        heading: 316
    },{
        description: "Naar gang B102",
        pano: "pano02007",
        heading: 229
    }],
    neighbours: [{
        up: 'pano02007',
        down: 'pano02003'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 157,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02005 = {
    location: {
        pano: 'pano02005',
        description: 'Gang B102',
        latLng: new google.maps.LatLng(51.06082673,3.70750133)
    },
    links: [{
        description: "Naar gang B102",
        pano: "pano02004",
        heading: 136
    },{
        description: "Naar gang B102",
        pano: "pano02006",
        heading: 230
    }],
    neighbours: [{
        up: 'pano02007',
        down: 'pano02003'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 339,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02006 = {
    location: {
        pano: 'pano02006',
        description: 'Gang B102',
        latLng: new google.maps.LatLng(51.06079332,3.70743756)
    },
    links: [{
        description: "Naar gang B102",
        pano: "pano02005",
        heading: 50
    }],
    neighbours: [{
        up: 'pano02007',
        down: 'pano02003'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 241,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02007 = {
    location: {
        pano: 'pano02007',
        description: 'Gang B102',
        latLng: new google.maps.LatLng(51.06070797,3.70757178)
    },
    links: [{
        description: "Naar gang B102",
        pano: "pano02004",
        heading: 49
    },{
        description: "Naar gang B102",
        pano: "pano02008",
        heading: 226
    }],
    neighbours: [{
        up: 'pano02008',
        down: 'pano02003'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 191,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02008 = {
    location: {
        pano: 'pano02008',
        description: 'Gang B102',
        latLng: new google.maps.LatLng(51.06067324,3.70751328)
    },
    links: [{
        description: "Naar gang B102",
        pano: "pano02007",
        heading: 46
    },{
        description: "Naar gang B102",
        pano: "pano02009",
        heading: 228
    }],
    neighbours: [{
        up: 'pano02008',
        down: 'pano02003'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 146,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02009 = {
    location: {
        pano: 'pano02009',
        description: 'Gang B102',
        latLng: new google.maps.LatLng(51.06058707,3.70736081)
    },
    links: [{
        description: "Naar gang B102",
        pano: "pano02008",
        heading: 48
    },{
        description: "Naar gang B102",
        pano: "pano02010",
        heading: 316
    },{
        description: "Naar gang B102",
        pano: "pano02011",
        heading: 227
    }],
    neighbours: [{
        up: 'pano02010',
        down: 'pano02003'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 218,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02010 = {
    location: {
        pano: 'pano02010',
        description: 'Gang B102',
        latLng: new google.maps.LatLng(51.06060556,3.70733303)
    },
    links: [{
        description: "Naar gang B102",
        pano: "pano02009",
        heading: 136
    }],
    neighbours: [{
        up: 'pano02010',
        down: 'pano02003'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 337,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02011 = {
    location: {
        pano: 'pano02011',
        description: 'Gang B102',
        latLng: new google.maps.LatLng(51.06050878,3.70722299)
    },
    links: [{
        description: "Naar gang B102",
        pano: "pano02009",
        heading: 47
    },{
        description: "Naar gang B102",
        pano: "pano02012",
        heading: 139
    },{
        description: "Naar gang B102",
        pano: "pano02013",
        heading: 315
    }],
    neighbours: [{
        up: 'pano02011',
        down: 'pano02003'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 299,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02012 = {
    location: {
        pano: 'pano02012',
        description: 'Gang B102',
        latLng: new google.maps.LatLng(51.06043702,3.70732198)
    },
    links: [{
        description: "Naar gang B102",
        pano: "pano02011",
        heading: 319
    }],
    neighbours: [{
        up: 'pano02012',
        down: 'pano02003'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 318,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02013 = {
    location: {
        pano: 'pano02013',
        description: 'Gang B102',
        latLng: new google.maps.LatLng(51.06055208,3.70715419)
    },
    links: [{
        description: "Naar gang B102",
        pano: "pano02011",
        heading: 135
    },{
        description: "Naar noodtrap B135",
        pano: "pano02015",
        heading: 233
    }],
    neighbours: [{
        up: 'pano02013',
        down: 'pano02004'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 90,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02014 = {
    location: {
        pano: 'pano02014',
        description: 'Traphal B101',
        latLng: new google.maps.LatLng(51.06084515,3.70790651)
    },
    links: [{
        description: "Naar gang B102",
        pano: "pano02001",
        heading: 140
    }],
    neighbours: [{
        up: 'pano02000',
        down: 'pano02002'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 187,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano02015 = {
    location: {
        pano: 'pano02015',
        description: 'Noodtrap B135',
        latLng: new google.maps.LatLng(51.06053335,3.70711356)
    },
    links: [{
        description: "Naar gang B102",
        pano: "pano02013",
        heading: 53
    }],
    neighbours: [{
        up: 'pano02014',
        down: 'pano02004'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 234,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano03000 = {
    location: {
        pano: 'pano03000',
        description: 'Gang C101',
        latLng: new google.maps.LatLng(51.06078931,3.70814698)
    },
    links: [{
        description: "Naar gang C101",
        pano: "pano03001",
        heading: 226
    }],
    neighbours: [{
        down: 'pano03003'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 50,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano03001 = {
    location: {
        pano: 'pano03001',
        description: 'Gang C101',
        latLng: new google.maps.LatLng(51.06075561,3.70809004)
    },
    links: [{
        description: "Naar gang C101",
        pano: "pano03000",
        heading: 46
    },{
        description: "Naar gang C101",
        pano: "pano03002",
        heading: 315
    }],
    neighbours: [{
        down: 'pano03003'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 241,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano03002 = {
    location: {
        pano: 'pano03002',
        description: 'Gang C101',
        latLng: new google.maps.LatLng(51.06079166,3.70803276)
    },
    links: [{
        description: "Naar gang C101",
        pano: "pano03001",
        heading: 135
    },{
        description: "Naar noodtrap B100",
        pano: "pano02000",
        heading: 243
    },{
        description: "Naar gang C101",
        pano: "pano03003",
        heading: 319
    },{
        description: "Naar gang C107",
        pano: "pano03004",
        heading: 53
    }],
    neighbours: [{
        down: 'pano03003'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 339,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano03003 = {
    location: {
        pano: 'pano03003',
        description: 'Gang C101',
        latLng: new google.maps.LatLng(51.06082364,3.70798857)
    },
    links: [{
        description: "Naar gang C101",
        pano: "pano03002",
        heading: 139
    },{
        description: "Naar gang C101",
        pano: "pano03007",
        heading: 310
    }],
    neighbours: [{
        down: 'pano03003'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 351,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano03004 = {
    location: {
        pano: 'pano03004',
        description: 'Gang C107',
        latLng: new google.maps.LatLng(51.06082162,3.70809812)
    },
    links: [{
        description: "Naar gang C101",
        pano: "pano03002",
        heading: 233
    },{
        description: "Naar gang C107",
        pano: "pano03005",
        heading: 317
    }],
    neighbours: [{
        down: 'pano03000'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 142,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano03005 = {
    location: {
        pano: 'pano03005',
        description: 'Gang C107',
        latLng: new google.maps.LatLng(51.06084199,3.70806836)
    },
    links: [{
        description: "Naar gang C107",
        pano: "pano03004",
        heading: 137
    },{
        description: "Naar gang C107",
        pano: "pano03006",
        heading: 319
    }],
    neighbours: [{
        down: 'pano03000'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 341,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano03006 = {
    location: {
        pano: 'pano03006',
        description: 'Gang C107',
        latLng: new google.maps.LatLng(51.06087724,3.70802083)
    },
    links: [{
        description: "Naar gang C107",
        pano: "pano03005",
        heading: 139
    }],
    neighbours: [{
        down: 'pano03000'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 326,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano03007 = {
    location: {
        pano: 'pano03007',
        description: 'Gang C101',
        latLng: new google.maps.LatLng(51.06083886,3.70796053)
    },
    links: [{
        description: "Naar gang C101",
        pano: "pano03003",
        heading: 130
    },{
        description: "Naar gang B102",
        pano: "pano02001",
        heading: 222
    }],
    neighbours: [{
        down: 'pano03003'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 84,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano05000 = {
    location: {
        pano: 'pano05000',
        description: 'Gang E122',
        latLng: new google.maps.LatLng(51.0599659,3.70936301)
    },
    neighbours: [{
        up: 'pano05000',
        down: 'pano05018'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 133,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07000 = {
    location: {
        pano: 'pano07000',
        description: 'Traphal G101',
        latLng: new google.maps.LatLng(51.05925684,3.70805774)
    },
    links: [{
        description: "Naar traphal G101",
        pano: "pano07001",
        heading: 270
    }],
    neighbours: [{
        up: 'pano07000',
        down: 'pano07002'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 28,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07001 = {
    location: {
        pano: 'pano07001',
        description: 'Traphal G101',
        latLng: new google.maps.LatLng(51.05925718,3.70799056)
    },
    links: [{
        description: "Naar traphal G101",
        pano: "pano07000",
        heading: 90
    },{
        description: "Naar gang G100",
        pano: "pano07002",
        heading: 299
    }],
    neighbours: [{
        up: 'pano07001',
        down: 'pano07001'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 359,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07002 = {
    location: {
        pano: 'pano07002',
        description: 'Gang G100',
        latLng: new google.maps.LatLng(51.05927525,3.70793927)
    },
    links: [{
        description: "Naar traphal G101",
        pano: "pano07001",
        heading: 119
    },{
        description: "Naar gang G100",
        pano: "pano07003",
        heading: 207
    },{
        description: "Naar gang G100",
        pano: "pano07006",
        heading: 37
    }],
    neighbours: [{
        up: 'pano07002',
        down: 'pano07001'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 233,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07003 = {
    location: {
        pano: 'pano07003',
        description: 'Gang G100',
        latLng: new google.maps.LatLng(51.05922295,3.70789555)
    },
    links: [{
        description: "Naar gang G100",
        pano: "pano07002",
        heading: 27
    },{
        description: "Naar gang G100",
        pano: "pano07004",
        heading: 204
    }],
    neighbours: [{
        up: 'pano07002',
        down: 'pano07003'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 258,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07004 = {
    location: {
        pano: 'pano07004',
        description: 'Gang G100',
        latLng: new google.maps.LatLng(51.05918181,3.70786608)
    },
    links: [{
        description: "Naar gang G100",
        pano: "pano07003",
        heading: 24
    },{
        description: "Naar gang G100",
        pano: "pano07005",
        heading: 203
    }],
    neighbours: [{
        up: 'pano07002',
        down: 'pano07003'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 9,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07005 = {
    location: {
        pano: 'pano07005',
        description: 'Gang G100',
        latLng: new google.maps.LatLng(51.05912501,3.70782732)
    },
    links: [{
        description: "Naar gang G100",
        pano: "pano07004",
        heading: 23
    }],
    neighbours: [{
        up: 'pano07002',
        down: 'pano07003'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 343,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07006 = {
    location: {
        pano: 'pano07006',
        description: 'Gang G100',
        latLng: new google.maps.LatLng(51.05931844,3.70799168)
    },
    links: [{
        description: "Naar gang G100",
        pano: "pano07002",
        heading: 217
    },{
        description: "Naar gang G100",
        pano: "pano07007",
        heading: 30
    }],
    neighbours: [{
        up: 'pano07003',
        down: 'pano07004'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 46,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07007 = {
    location: {
        pano: 'pano07007',
        description: 'Gang G100',
        latLng: new google.maps.LatLng(51.0593793,3.70804983)
    },
    links: [{
        description: "Naar gang G100",
        pano: "pano07006",
        heading: 210
    },{
        description: "Naar gang G100",
        pano: "pano07008",
        heading: 8
    }],
    neighbours: [{
        up: 'pano07005',
        down: 'pano07004'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 36,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07008 = {
    location: {
        pano: 'pano07008',
        description: 'Gang G100',
        latLng: new google.maps.LatLng(51.05942772,3.70806124)
    },
    links: [{
        description: "Naar gang G100",
        pano: "pano07007",
        heading: 188
    },{
        description: "Naar gang G100",
        pano: "pano07009",
        heading: 82
    }],
    neighbours: [{
        up: 'pano07005',
        down: 'pano07005'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 96,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07009 = {
    location: {
        pano: 'pano07009',
        description: 'Gang G100',
        latLng: new google.maps.LatLng(51.0594347,3.70814548)
    },
    links: [{
        description: "Naar gang G100",
        pano: "pano07008",
        heading: 262
    },{
        description: "Naar gang G100",
        pano: "pano07010",
        heading: 79
    }],
    neighbours: [{
        up: 'pano07005',
        down: 'pano07005'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 316,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07010 = {
    location: {
        pano: 'pano07010',
        description: 'Gang G100',
        latLng: new google.maps.LatLng(51.05943893,3.70818267)
    },
    links: [{
        description: "Naar gang G100",
        pano: "pano07009",
        heading: 259
    },{
        description: "Naar gang G100",
        pano: "pano07011",
        heading: 349
    },{
        description: "Naar lokaal G120",
        pano: "pano07012",
        heading: 82
    }],
    neighbours: [{
        up: 'pano07005',
        down: 'pano07005'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 0,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07011 = {
    location: {
        pano: 'pano07011',
        description: 'Gang G100',
        latLng: new google.maps.LatLng(51.05948634,3.70816811)
    },
    links: [{
        description: "Naar gang G100",
        pano: "pano07010",
        heading: 169
    }],
    neighbours: [{
        up: 'pano07005',
        down: 'pano07005'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 350,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano07012 = {
    location: {
        pano: 'pano07012',
        description: 'Lokaal G120',
        latLng: new google.maps.LatLng(51.0594459,3.70827191)
    },
    links: [{
        description: "Naar gang G100",
        pano: "pano07010",
        heading: 262
    }],
    neighbours: [{
        up: 'pano07005',
        down: 'pano07005'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 99,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11000 = {
    location: {
        pano: 'pano11000',
        description: 'Traphal L102',
        latLng: new google.maps.LatLng(51.05977396,3.71021639)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11001",
        heading: 135
    }],
    neighbours: [{
        up: 'pano11000',
        down: 'pano11002'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 288,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11001 = {
    location: {
        pano: 'pano11001',
        description: 'Gang L101',
        latLng: new google.maps.LatLng(51.05975753,3.7102422)
    },
    links: [{
        description: "Naar traphal L102",
        pano: "pano11000",
        heading: 315
    },{
        description: "Naar gang L101",
        pano: "pano11002",
        heading: 51
    },{
        description: "Naar gang L101",
        pano: "pano11010",
        heading: 227
    }],
    neighbours: [{
        up: 'pano11001',
        down: 'pano11002'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 180,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11002 = {
    location: {
        pano: 'pano11002',
        description: 'Gang L101',
        latLng: new google.maps.LatLng(51.05976917,3.71026514)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11001",
        heading: 231
    },{
        description: "Naar gang L101",
        pano: "pano11003",
        heading: 46
    },{
        description: "Naar gang L101",
        pano: "pano11009",
        heading: 319
    }],
    neighbours: [{
        up: 'pano11002',
        down: 'pano11003'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 264,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11003 = {
    location: {
        pano: 'pano11003',
        description: 'Gang L101',
        latLng: new google.maps.LatLng(51.05979613,3.71031006)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11002",
        heading: 226
    },{
        description: "Naar gang L101",
        pano: "pano11004",
        heading: 47
    }],
    neighbours: [{
        up: 'pano11003',
        down: 'pano11004'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 226,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11004 = {
    location: {
        pano: 'pano11004',
        description: 'Gang L101',
        latLng: new google.maps.LatLng(51.05983024,3.71036838)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11003",
        heading: 227
    },{
        description: "Naar gang L101",
        pano: "pano11005",
        heading: 318
    }],
    neighbours: [{
        up: 'pano11004',
        down: 'pano11005'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 202,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11005 = {
    location: {
        pano: 'pano11005',
        description: 'Gang L101',
        latLng: new google.maps.LatLng(51.05985099,3.71033868)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11004",
        heading: 138
    },{
        description: "Naar gang L101",
        pano: "pano11006",
        heading: 317
    }],
    neighbours: [{
        up: 'pano11005',
        down: 'pano11007'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 103,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11006 = {
    location: {
        pano: 'pano11006',
        description: 'Gang L101',
        latLng: new google.maps.LatLng(51.05987636,3.71030231)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11005",
        heading: 137
    },{
        description: "Naar gang L101",
        pano: "pano11007",
        heading: 318
    },{
        description: "Naar gang L101",
        pano: "pano11008",
        heading: 229
    }],
    neighbours: [{
        up: 'pano11006',
        down: 'pano11008'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 227,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11007 = {
    location: {
        pano: 'pano11007',
        description: 'Gang L101',
        latLng: new google.maps.LatLng(51.05992626,3.71023278)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11006",
        heading: 138
    },{
        description: "Naar noodtrap",
        pano: "pano12011",
        heading: 318
    }],
    neighbours: [{
        up: 'pano11008',
        down: 'pano11008'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 227,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11008 = {
    location: {
        pano: 'pano11008',
        description: 'Gang L101',
        latLng: new google.maps.LatLng(51.05984994,3.71025317)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11006",
        heading: 49
    },{
        description: "Naar gang L101",
        pano: "pano11009",
        heading: 224
    }],
    neighbours: [{
        up: 'pano11010',
        down: 'pano11009'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 158,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11009 = {
    location: {
        pano: 'pano11009',
        description: 'Gang L101',
        latLng: new google.maps.LatLng(51.05981601,3.71020085)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11002",
        heading: 139
    },{
        description: "Naar gang L101",
        pano: "pano11008",
        heading: 44
    }],
    neighbours: [{
        up: 'pano11011',
        down: 'pano11010'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 98,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11010 = {
    location: {
        pano: 'pano11010',
        description: 'Gang L101',
        latLng: new google.maps.LatLng(51.05972614,3.71018859)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11001",
        heading: 47
    },{
        description: "Naar gang L101",
        pano: "pano11011",
        heading: 226
    }],
    neighbours: [{
        up: 'pano11012',
        down: 'pano11001'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 150,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11011 = {
    location: {
        pano: 'pano11011',
        description: 'Gang L101',
        latLng: new google.maps.LatLng(51.05967852,3.71010768)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11010",
        heading: 46
    },{
        description: "Naar gang L101",
        pano: "pano11012",
        heading: 227
    }],
    neighbours: [{
        up: 'pano11017',
        down: 'pano11001'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 141,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11012 = {
    location: {
        pano: 'pano11012',
        description: 'Gang L101',
        latLng: new google.maps.LatLng(51.05965522,3.71006706)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11011",
        heading: 47
    },{
        description: "Naar gang L101",
        pano: "pano11013",
        heading: 227
    }],
    neighbours: [{
        up: 'pano11017',
        down: 'pano11001'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 158,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11013 = {
    location: {
        pano: 'pano11013',
        description: 'Gang L101',
        latLng: new google.maps.LatLng(51.05963063,3.7100237)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11014",
        heading: 316
    },{
        description: "Naar gang L101",
        pano: "pano11012",
        heading: 47
    }],
    neighbours: [{
        up: 'pano11018',
        down: 'pano11001'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 18,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11014 = {
    location: {
        pano: 'pano11014',
        description: 'Gang L101',
        latLng: new google.maps.LatLng(51.05966373,3.70997293)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11013",
        heading: 136
    },{
        description: "Naar noodtrap",
        pano: "pano11015",
        heading: 317
    }],
    neighbours: [{
        up: 'pano11019',
        down: 'pano11001'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 320,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano11015 = {
    location: {
        pano: 'pano11015',
        description: 'Noodtrap',
        latLng: new google.maps.LatLng(51.05970216,3.70991716)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11014",
        heading: 137
    }],
    neighbours: [{
        up: 'pano11020',
        down: 'pano11001'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 201,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12000 = {
    location: {
        pano: 'pano12000',
        description: 'Traphal M102',
        latLng: new google.maps.LatLng(51.05992264,3.70988025)
    },
    links: [{
        description: "Naar gang M101",
        pano: "pano12001",
        heading: 315
    }],
    neighbours: [{
        up: 'pano12000',
        down: 'pano12005'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 164,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12001 = {
    location: {
        pano: 'pano12001',
        description: 'Gang M101',
        latLng: new google.maps.LatLng(51.05993948,3.70985397)
    },
    links: [{
        description: "Naar traphal M102",
        pano: "pano12000",
        heading: 135
    },{
        description: "Naar gang M101",
        pano: "pano12002",
        heading: 224
    },{
        description: "Naar gang M101",
        pano: "pano12007",
        heading: 46
    }],
    neighbours: [{
        up: 'pano12001',
        down: 'pano12004'
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
        description: 'Gang M101',
        latLng: new google.maps.LatLng(51.05992601,3.70983288)
    },
    links: [{
        description: "Naar gang M101",
        pano: "pano12001",
        heading: 44
    },{
        description: "Naar gang M101",
        pano: "pano12003",
        heading: 139
    },{
        description: "Naar gang M101",
        pano: "pano12004",
        heading: 229
    }],
    neighbours: [{
        up: 'pano12002',
        down: 'pano12001'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 161,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12003 = {
    location: {
        pano: 'pano12003',
        description: 'Gang M101',
        latLng: new google.maps.LatLng(51.05988976,3.70988274)
    },
    links: [{
        description: "Naar gang M101",
        pano: "pano12002",
        heading: 319
    }],
    neighbours: [{
        up: 'pano12003',
        down: 'pano12000'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 144,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12004 = {
    location: {
        pano: 'pano12004',
        description: 'Gang M101',
        latLng: new google.maps.LatLng(51.05990211,3.70978836)
    },
    links: [{
        description: "Naar gang M101",
        pano: "pano12002",
        heading: 49
    },{
        description: "Naar gang M101",
        pano: "pano12005",
        heading: 227
    }],
    neighbours: [{
        up: 'pano12007',
        down: 'pano12002'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 233,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12005 = {
    location: {
        pano: 'pano12005',
        description: 'Gang M101',
        latLng: new google.maps.LatLng(51.05986556,3.70972455)
    },
    links: [{
        description: "Naar gang M101",
        pano: "pano12004",
        heading: 47
    },{
        description: "Naar gang M101",
        pano: "pano12006",
        heading: 137
    }],
    neighbours: [{
        up: 'pano12006',
        down: 'pano12002'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 246,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12006 = {
    location: {
        pano: 'pano12006',
        description: 'Gang M101',
        latLng: new google.maps.LatLng(51.0598295,3.70977775)
    },
    links: [{
        description: "Naar gang M101",
        pano: "pano12005",
        heading: 317
    }],
    neighbours: [{
        up: 'pano12005',
        down: 'pano12003'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 71,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12007 = {
    location: {
        pano: 'pano12007',
        description: 'Gang M101',
        latLng: new google.maps.LatLng(51.05997548,3.70991428)
    },
    links: [{
        description: "Naar gang M101",
        pano: "pano12001",
        heading: 226
    },{
        description: "Naar gang M101",
        pano: "pano12008",
        heading: 48
    }],
    neighbours: [{
        up: 'pano12010',
        down: 'pano12007'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 61,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12008 = {
    location: {
        pano: 'pano12008',
        description: 'Gang M101',
        latLng: new google.maps.LatLng(51.06002127,3.70999804)
    },
    links: [{
        description: "Naar gang M101",
        pano: "pano12007",
        heading: 228
    },{
        description: "Naar gang M101",
        pano: "pano12009",
        heading: 46
    }],
    neighbours: [{
        up: 'pano12011',
        down: 'pano12007'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 318,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12009 = {
    location: {
        pano: 'pano12009',
        description: 'Gang M101',
        latLng: new google.maps.LatLng(51.06005109,3.71004847)
    },
    links: [{
        description: "Naar gang M101",
        pano: "pano12008",
        heading: 226
    },{
        description: "Naar gang M101",
        pano: "pano12010",
        heading: 136
    }],
    neighbours: [{
        up: 'pano12012',
        down: 'pano12007'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 317,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12010 = {
    location: {
        pano: 'pano12010',
        description: 'Gang M101',
        latLng: new google.maps.LatLng(51.06000251,3.71012216)
    },
    links: [{
        description: "Naar gang M101",
        pano: "pano12009",
        heading: 316
    },{
        description: "Naar noodtrap",
        pano: "pano12011",
        heading: 135
    }],
    neighbours: [{
        up: 'pano12013',
        down: 'pano12007'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 160,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano12011 = {
    location: {
        pano: 'pano12011',
        description: 'Noodtrap',
        latLng: new google.maps.LatLng(51.05997662,3.71016223)
    },
    links: [{
        description: "Naar gang M101",
        pano: "pano12010",
        heading: 315
    },{
        description: "Naar gang L101",
        pano: "pano11007",
        heading: 138
    }],
    neighbours: [{
        up: 'pano12014',
        down: 'pano12007'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 242,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano13000 = {
    location: {
        pano: 'pano13000',
        description: 'Gang P101',
        latLng: new google.maps.LatLng(51.05888241,3.70812022)
    },
    links: [{
        description: "Naar gang P101",
        pano: "pano13001",
        heading: 113
    }],
    neighbours: [{
        down: 'pano13007'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 53,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano13001 = {
    location: {
        pano: 'pano13001',
        description: 'Gang P101',
        latLng: new google.maps.LatLng(51.05886832,3.70817143)
    },
    links: [{
        description: "Naar gang P101",
        pano: "pano13000",
        heading: 293
    },{
        description: "Naar gang P101",
        pano: "pano13002",
        heading: 25
    }],
    neighbours: [{
        down: 'pano13007'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 225,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano13002 = {
    location: {
        pano: 'pano13002',
        description: 'Gang P101',
        latLng: new google.maps.LatLng(51.05895537,3.70823656)
    },
    links: [{
        description: "Naar gang P101",
        pano: "pano13001",
        heading: 205
    },{
        description: "Naar gang P101",
        pano: "pano13003",
        heading: 26
    }],
    neighbours: [{
        down: 'pano13006'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 162,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano13003 = {
    location: {
        pano: 'pano13003',
        description: 'Gang P101',
        latLng: new google.maps.LatLng(51.05900063,3.70827199)
    },
    links: [{
        description: "Naar gang P101",
        pano: "pano13002",
        heading: 206
    },{
        description: "Naar gang P101",
        pano: "pano13004",
        heading: 27
    }],
    neighbours: [{
        down: 'pano13004'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 248,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano13004 = {
    location: {
        pano: 'pano13004',
        description: 'Gang P101',
        latLng: new google.maps.LatLng(51.05909284,3.70834918)
    },
    links: [{
        description: "Naar gang P101",
        pano: "pano13003",
        heading: 207
    },{
        description: "Naar gang P103",
        pano: "pano13005",
        heading: 27
    }],
    neighbours: [{
        down: 'pano13002'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 167,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano13005 = {
    location: {
        pano: 'pano13005',
        description: 'Gang P103',
        latLng: new google.maps.LatLng(51.05915709,3.70840314)
    },
    links: [{
        description: "Naar gang P101",
        pano: "pano13004",
        heading: 207
    },{
        description: "Naar traphal P104",
        pano: "pano13006",
        heading: 294
    },{
        description: "Naar gang P103",
        pano: "pano13007",
        heading: 114
    }],
    neighbours: [{
        down: 'pano13000'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 25,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano13006 = {
    location: {
        pano: 'pano13006',
        description: 'Traphal P104',
        latLng: new google.maps.LatLng(51.05917244,3.70834901)
    },
    links: [{
        description: "Naar gang P103",
        pano: "pano13005",
        heading: 114
    }],
    neighbours: [{
        down: 'pano13000'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 0,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano13007 = {
    location: {
        pano: 'pano13007',
        description: 'Gang P103',
        latLng: new google.maps.LatLng(51.05913739,3.70847159)
    },
    links: [{
        description: "Naar gang P103",
        pano: "pano13005",
        heading: 294
    },{
        description: "Naar gang P103",
        pano: "pano13008",
        heading: 115
    }],
    neighbours: [{
        down: 'pano13000'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 200,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano13008 = {
    location: {
        pano: 'pano13008',
        description: 'Gang P103',
        latLng: new google.maps.LatLng(51.05910883,3.70856519)
    },
    links: [{
        description: "Naar gang P103",
        pano: "pano13007",
        heading: 295
    },{
        description: "Naar gang P103",
        pano: "pano13009",
        heading: 115
    }],
    neighbours: [{
        down: 'pano13008'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 203,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano13009 = {
    location: {
        pano: 'pano13009',
        description: 'Gang P103',
        latLng: new google.maps.LatLng(51.05908939,3.70862894)
    },
    links: [{
        description: "Naar gang P103",
        pano: "pano13008",
        heading: 295
    },{
        description: "Naar gang P103",
        pano: "pano13010",
        heading: 115
    }],
    neighbours: [{
        down: 'pano13008'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 190,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano13010 = {
    location: {
        pano: 'pano13010',
        description: 'Gang P103',
        latLng: new google.maps.LatLng(51.05907118,3.70868862)
    },
    links: [{
        description: "Naar gang P103",
        pano: "pano13009",
        heading: 295
    },{
        description: "Naar traphal P109",
        pano: "pano13011",
        heading: 115
    }],
    neighbours: [{
        down: 'pano13008'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 237,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var pano13011 = {
    location: {
        pano: 'pano13011',
        description: 'Traphal P109',
        latLng: new google.maps.LatLng(51.05905916,3.70872805)
    },
    links: [{
        description: "Naar gang P103",
        pano: "pano13010",
        heading: 295
    }],
    neighbours: [{
        down: 'pano13008'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2304),
        worldSize: new google.maps.Size(4608, 2304),
        centerHeading: 310,
        getTileUrl: getCustomPanoramaTileUrl
    }
};

var ROOMS = [
    {
        "floor": 2,
        "room": "A115",
        "lat": 51.0595228578511,
        "lng": 3.70797420651487
    },
    {
        "floor": 2,
        "room": "A0T20",
        "lat": 51.0595045832201,
        "lng": 3.7079811994317
    },
    {
        "floor": 2,
        "room": "A112",
        "lat": 51.0595323742233,
        "lng": 3.70809122791624
    },
    {
        "floor": 2,
        "room": "A103",
        "lat": 51.0597214667511,
        "lng": 3.70833223534206
    },
    {
        "floor": 2,
        "room": "A104",
        "lat": 51.0596984538448,
        "lng": 3.70824362545789
    },
    {
        "floor": 2,
        "room": "A102",
        "lat": 51.0597349916238,
        "lng": 3.70842306584974
    },
    {
        "floor": 2,
        "room": "A0T3",
        "lat": 51.0596175954751,
        "lng": 3.70851369253486
    },
    {
        "floor": 2,
        "room": "A0T4",
        "lat": 51.0595827816394,
        "lng": 3.70853705280262
    },
    {
        "floor": 2,
        "room": "A0T2",
        "lat": 51.0596449166743,
        "lng": 3.70849535983903
    },
    {
        "floor": 2,
        "room": "A101",
        "lat": 51.0596544629178,
        "lng": 3.70838199392039
    },
    {
        "floor": 2,
        "room": "A111",
        "lat": 51.0595479022151,
        "lng": 3.70820708362208
    },
    {
        "floor": 2,
        "room": "A107",
        "lat": 51.0595865809412,
        "lng": 3.70839769868907
    },
    {
        "floor": 2,
        "room": "A0T11",
        "lat": 51.059422509509,
        "lng": 3.70843905283806
    },
    {
        "floor": 2,
        "room": "A0T9",
        "lat": 51.0594316370842,
        "lng": 3.70855008184588
    },
    {
        "floor": 2,
        "room": "A0T10",
        "lat": 51.0594193070555,
        "lng": 3.70849088946524
    },
    {
        "floor": 2,
        "room": "A0T8",
        "lat": 51.0594886098494,
        "lng": 3.70854059011453
    },
    {
        "floor": 2,
        "room": "A114",
        "lat": 51.0595278928071,
        "lng": 3.70801133316832
    },
    {
        "floor": 2,
        "room": "A113",
        "lat": 51.0595134401981,
        "lng": 3.70804317460957
    },
    {
        "floor": 2,
        "room": "A0T1",
        "lat": 51.0596799400201,
        "lng": 3.7084603931394
    },
    {
        "floor": 2,
        "room": "A109a",
        "lat": 51.0595571015137,
        "lng": 3.70837123554122
    },
    {
        "floor": 2,
        "room": "A108a",
        "lat": 51.0595548527989,
        "lng": 3.70840189235132
    },
    {
        "floor": 2,
        "room": "A108",
        "lat": 51.0595789100444,
        "lng": 3.70838556949558
    },
    {
        "floor": 2,
        "room": "A106",
        "lat": 51.05959799812,
        "lng": 3.70843559572758
    },
    {
        "floor": 2,
        "room": "A0T6",
        "lat": 51.0595490238041,
        "lng": 3.70846743720518
    },
    {
        "floor": 2,
        "room": "A0T7",
        "lat": 51.059473729263,
        "lng": 3.70847748630899
    },
    {
        "floor": 2,
        "room": "A0T12",
        "lat": 51.059497976625,
        "lng": 3.70841307429141
    },
    {
        "floor": 2,
        "room": "A110",
        "lat": 51.0595610677239,
        "lng": 3.70829181045851
    },
    {
        "floor": 2,
        "room": "A109",
        "lat": 51.059579758357,
        "lng": 3.70835909783711
    },
    {
        "floor": 2,
        "room": "A105",
        "lat": 51.0596416141482,
        "lng": 3.70827484225117
    },
    {
        "floor": 2,
        "room": "A0T5",
        "lat": 51.0595508134369,
        "lng": 3.70853344711961
    },
    {
        "floor": 2,
        "room": "G116",
        "lat": 51.0593885925325,
        "lng": 3.70794747248457
    },
    {
        "floor": 2,
        "room": "G106",
        "lat": 51.0590871756319,
        "lng": 3.70781698978608
    },
    {
        "floor": 2,
        "room": "G104",
        "lat": 51.0592288971234,
        "lng": 3.70798940048923
    },
    {
        "floor": 2,
        "room": "G102",
        "lat": 51.0592452687286,
        "lng": 3.70794159038343
    },
    {
        "floor": 2,
        "room": "G128",
        "lat": 51.05934083393,
        "lng": 3.7080535568836
    },
    {
        "floor": 2,
        "room": "G122",
        "lat": 51.0594190827598,
        "lng": 3.70837895288563
    },
    {
        "floor": 2,
        "room": "G123",
        "lat": 51.0595339597632,
        "lng": 3.70834516532489
    },
    {
        "floor": 2,
        "room": "G117",
        "lat": 51.0594171355115,
        "lng": 3.70797256249739
    },
    {
        "floor": 2,
        "room": "G105",
        "lat": 51.0591725503177,
        "lng": 3.70789231554776
    },
    {
        "floor": 2,
        "room": "G0T1",
        "lat": 51.0592456976491,
        "lng": 3.70807947531674
    },
    {
        "floor": 2,
        "room": "G101",
        "lat": 51.0592620016798,
        "lng": 3.70799730922964
    },
    {
        "floor": 2,
        "room": "G107",
        "lat": 51.0591364801228,
        "lng": 3.70771460954808
    },
    {
        "floor": 2,
        "room": "G108",
        "lat": 51.0591668189911,
        "lng": 3.70775309976085
    },
    {
        "floor": 2,
        "room": "G109",
        "lat": 51.0591943398119,
        "lng": 3.70777729100375
    },
    {
        "floor": 2,
        "room": "G110",
        "lat": 51.0592218606274,
        "lng": 3.70780148227512
    },
    {
        "floor": 2,
        "room": "G111",
        "lat": 51.0592491062297,
        "lng": 3.7078254316618
    },
    {
        "floor": 2,
        "room": "G112",
        "lat": 51.0592769022429,
        "lng": 3.70784986490321
    },
    {
        "floor": 2,
        "room": "G113",
        "lat": 51.0593045754941,
        "lng": 3.70787361955288
    },
    {
        "floor": 2,
        "room": "G114",
        "lat": 51.0593320962888,
        "lng": 3.70789781093789
    },
    {
        "floor": 2,
        "room": "G115",
        "lat": 51.0593596170783,
        "lng": 3.70792200235135
    },
    {
        "floor": 2,
        "room": "G127",
        "lat": 51.0593955921244,
        "lng": 3.70808918523128
    },
    {
        "floor": 2,
        "room": "G124",
        "lat": 51.0594140362566,
        "lng": 3.70834230382835
    },
    {
        "floor": 2,
        "room": "G121",
        "lat": 51.0594559319741,
        "lng": 3.70837678583137
    },
    {
        "floor": 2,
        "room": "G126",
        "lat": 51.0594007007147,
        "lng": 3.70813333117534
    },
    {
        "floor": 2,
        "room": "G125",
        "lat": 51.0594039733812,
        "lng": 3.7081872815889
    },
    {
        "floor": 2,
        "room": "G119",
        "lat": 51.0594993907437,
        "lng": 3.70816738398139
    },
    {
        "floor": 2,
        "room": "G103",
        "lat": 51.0591247996781,
        "lng": 3.70796110128823
    },
    {
        "floor": 2,
        "room": "G118",
        "lat": 51.0594664759092,
        "lng": 3.70802556345912
    },
    {
        "floor": 2,
        "room": "G120",
        "lat": 51.0594980324547,
        "lng": 3.70824504298577
    },
    {
        "floor": 2,
        "room": "G100",
        "lat": 51.0593197187155,
        "lng": 3.70798036505661
    },
    {
        "floor": 2,
        "room": "B134",
        "lat": 51.0606406867645,
        "lng": 3.70712351174261
    },
    {
        "floor": 2,
        "room": "B126",
        "lat": 51.0605903709439,
        "lng": 3.70722738620012
    },
    {
        "floor": 2,
        "room": "B124",
        "lat": 51.0607212961935,
        "lng": 3.70728443153571
    },
    {
        "floor": 2,
        "room": "B111",
        "lat": 51.0607852746596,
        "lng": 3.70734945001441
    },
    {
        "floor": 2,
        "room": "B110",
        "lat": 51.0608205849074,
        "lng": 3.70739241454369
    },
    {
        "floor": 2,
        "room": "B109",
        "lat": 51.0608389937328,
        "lng": 3.70742454037496
    },
    {
        "floor": 2,
        "room": "B108",
        "lat": 51.0608579685111,
        "lng": 3.70745769891194
    },
    {
        "floor": 2,
        "room": "B114",
        "lat": 51.0607683660765,
        "lng": 3.70746422593703
    },
    {
        "floor": 2,
        "room": "B113",
        "lat": 51.060710854003,
        "lng": 3.70741946825887
    },
    {
        "floor": 2,
        "room": "B125",
        "lat": 51.0604839407445,
        "lng": 3.70737749749768
    },
    {
        "floor": 2,
        "room": "B123",
        "lat": 51.0605551539815,
        "lng": 3.70750185898984
    },
    {
        "floor": 2,
        "room": "B115",
        "lat": 51.0606635378304,
        "lng": 3.70769113364193
    },
    {
        "floor": 2,
        "room": "B104",
        "lat": 51.0607413201185,
        "lng": 3.70775840969924
    },
    {
        "floor": 2,
        "room": "B128",
        "lat": 51.0606571688028,
        "lng": 3.70737362536637
    },
    {
        "floor": 2,
        "room": "B105",
        "lat": 51.0608440300242,
        "lng": 3.70767651061847
    },
    {
        "floor": 2,
        "room": "B106",
        "lat": 51.0607995654902,
        "lng": 3.70760185613939
    },
    {
        "floor": 2,
        "room": "B117",
        "lat": 51.0607295247859,
        "lng": 3.7075146447137
    },
    {
        "floor": 2,
        "room": "B116",
        "lat": 51.0607505920579,
        "lng": 3.70755143529712
    },
    {
        "floor": 2,
        "room": "B118",
        "lat": 51.060710210591,
        "lng": 3.70748091564265
    },
    {
        "floor": 2,
        "room": "B119",
        "lat": 51.0606853689912,
        "lng": 3.70745428964378
    },
    {
        "floor": 2,
        "room": "B102",
        "lat": 51.060698175635,
        "lng": 3.70754877066245
    },
    {
        "floor": 2,
        "room": "B101",
        "lat": 51.0608341035716,
        "lng": 3.707879706818
    },
    {
        "floor": 2,
        "room": "B135",
        "lat": 51.0605345125133,
        "lng": 3.7071118706751
    },
    {
        "floor": 2,
        "room": "B122",
        "lat": 51.0605614586611,
        "lng": 3.70727081173978
    },
    {
        "floor": 2,
        "room": "B131",
        "lat": 51.0604634763393,
        "lng": 3.70720596752687
    },
    {
        "floor": 2,
        "room": "B130",
        "lat": 51.0604455979853,
        "lng": 3.7072396499062
    },
    {
        "floor": 2,
        "room": "B136",
        "lat": 51.0604172247555,
        "lng": 3.70728056336477
    },
    {
        "floor": 2,
        "room": "B132",
        "lat": 51.0604941714259,
        "lng": 3.70716902989397
    },
    {
        "floor": 2,
        "room": "B129",
        "lat": 51.0604084548392,
        "lng": 3.7073635582082
    },
    {
        "floor": 2,
        "room": "B127",
        "lat": 51.0607004805859,
        "lng": 3.70719331141483
    },
    {
        "floor": 2,
        "room": "B104d",
        "lat": 51.0607412809496,
        "lng": 3.70788828670742
    },
    {
        "floor": 2,
        "room": "B101a",
        "lat": 51.0608017564801,
        "lng": 3.70794899663608
    },
    {
        "floor": 2,
        "room": "B101b",
        "lat": 51.0607807497836,
        "lng": 3.70791231140241
    },
    {
        "floor": 2,
        "room": "B100a",
        "lat": 51.0607680098001,
        "lng": 3.70794532992142
    },
    {
        "floor": 2,
        "room": "B100",
        "lat": 51.0607834187062,
        "lng": 3.70799355617576
    },
    {
        "floor": 2,
        "room": "B112",
        "lat": 51.0607380298132,
        "lng": 3.7073802813471
    },
    {
        "floor": 2,
        "room": "B104a",
        "lat": 51.0606718153778,
        "lng": 3.70779064988451
    },
    {
        "floor": 2,
        "room": "B104b",
        "lat": 51.0606928351596,
        "lng": 3.70782735776204
    },
    {
        "floor": 2,
        "room": "B104c",
        "lat": 51.0607138549297,
        "lng": 3.70786406567255
    },
    {
        "floor": 2,
        "room": "B121",
        "lat": 51.0606130947559,
        "lng": 3.7076030428928
    },
    {
        "floor": 2,
        "room": "B120",
        "lat": 51.0606089036246,
        "lng": 3.70770239095809
    },
    {
        "floor": 2,
        "room": "B107",
        "lat": 51.0608860543039,
        "lng": 3.70756302876291
    },
    {
        "floor": 2,
        "room": "B107a",
        "lat": 51.0608905461748,
        "lng": 3.7074765789477
    },
    {
        "floor": 2,
        "room": "B107b",
        "lat": 51.0609109183095,
        "lng": 3.70751288849756
    },
    {
        "floor": 2,
        "room": "B107c",
        "lat": 51.0609318511463,
        "lng": 3.70754968682693
    },
    {
        "floor": 2,
        "room": "B107d",
        "lat": 51.0609513921783,
        "lng": 3.70758503363433
    },
    {
        "floor": 2,
        "room": "M134",
        "lat": 51.0599770197236,
        "lng": 3.71001645257198
    },
    {
        "floor": 2,
        "room": "M112",
        "lat": 51.059799687405,
        "lng": 3.70985762558299
    },
    {
        "floor": 2,
        "room": "L101",
        "lat": 51.0597886368231,
        "lng": 3.710228967107
    },
    {
        "floor": 2,
        "room": "L103",
        "lat": 51.0597906831012,
        "lng": 3.71015536552547
    },
    {
        "floor": 2,
        "room": "L116",
        "lat": 51.0598263802641,
        "lng": 3.71047730943872
    },
    {
        "floor": 2,
        "room": "L120",
        "lat": 51.0597576670697,
        "lng": 3.71057701119507
    },
    {
        "floor": 2,
        "room": "L112",
        "lat": 51.0599308617347,
        "lng": 3.71032570768054
    },
    {
        "floor": 2,
        "room": "L114",
        "lat": 51.0598839747383,
        "lng": 3.71040181600113
    },
    {
        "floor": 2,
        "room": "L117",
        "lat": 51.0598578917314,
        "lng": 3.71035655109671
    },
    {
        "floor": 2,
        "room": "L122",
        "lat": 51.0597767134604,
        "lng": 3.71041436836949
    },
    {
        "floor": 2,
        "room": "M124",
        "lat": 51.0600074179948,
        "lng": 3.70984535712269
    },
    {
        "floor": 2,
        "room": "M114",
        "lat": 51.0598940791184,
        "lng": 3.70964972676438
    },
    {
        "floor": 2,
        "room": "L132",
        "lat": 51.0596838352318,
        "lng": 3.71023075719304
    },
    {
        "floor": 2,
        "room": "L106",
        "lat": 51.059832725573,
        "lng": 3.71032291783213
    },
    {
        "floor": 2,
        "room": "L105",
        "lat": 51.0598479831679,
        "lng": 3.71030077915154
    },
    {
        "floor": 2,
        "room": "L128",
        "lat": 51.0596955275015,
        "lng": 3.71032162580932
    },
    {
        "floor": 2,
        "room": "L107",
        "lat": 51.059807946746,
        "lng": 3.71027624382316
    },
    {
        "floor": 2,
        "room": "L108",
        "lat": 51.0598144882087,
        "lng": 3.71023631030898
    },
    {
        "floor": 2,
        "room": "L102",
        "lat": 51.0597690516416,
        "lng": 3.71021727916036
    },
    {
        "floor": 2,
        "room": "L126",
        "lat": 51.0597100554167,
        "lng": 3.71020938240406
    },
    {
        "floor": 2,
        "room": "M105",
        "lat": 51.0598452200603,
        "lng": 3.70978920752588
    },
    {
        "floor": 2,
        "room": "M106",
        "lat": 51.0598610699464,
        "lng": 3.70976862513527
    },
    {
        "floor": 2,
        "room": "M107",
        "lat": 51.0598855089507,
        "lng": 3.7098157923072
    },
    {
        "floor": 2,
        "room": "M108",
        "lat": 51.0598778053844,
        "lng": 3.70985209709243
    },
    {
        "floor": 2,
        "room": "M119",
        "lat": 51.0598770624109,
        "lng": 3.70955202756976
    },
    {
        "floor": 2,
        "room": "M101",
        "lat": 51.0599018759145,
        "lng": 3.70985687801629
    },
    {
        "floor": 2,
        "room": "M125",
        "lat": 51.0599473889355,
        "lng": 3.70981886399491
    },
    {
        "floor": 2,
        "room": "M103",
        "lat": 51.0599031129671,
        "lng": 3.70993617734649
    },
    {
        "floor": 2,
        "room": "M102",
        "lat": 51.0599238874753,
        "lng": 3.70987277651234
    },
    {
        "floor": 2,
        "room": "N102",
        "lat": 51.0602349360075,
        "lng": 3.70991241617196
    },
    {
        "floor": 2,
        "room": "N103",
        "lat": 51.0602847973734,
        "lng": 3.70997837196181
    },
    {
        "floor": 2,
        "room": "L115",
        "lat": 51.0598703266555,
        "lng": 3.71037813087043
    },
    {
        "floor": 2,
        "room": "L118",
        "lat": 51.0598884099727,
        "lng": 3.71045549112158
    },
    {
        "floor": 2,
        "room": "L113",
        "lat": 51.0599152787272,
        "lng": 3.71041650479551
    },
    {
        "floor": 2,
        "room": "L125",
        "lat": 51.0597575652202,
        "lng": 3.71034943158835
    },
    {
        "floor": 2,
        "room": "L123",
        "lat": 51.0597070885594,
        "lng": 3.71042267260784
    },
    {
        "floor": 2,
        "room": "L124",
        "lat": 51.059725763176,
        "lng": 3.71039887385182
    },
    {
        "floor": 2,
        "room": "L129",
        "lat": 51.0597383630677,
        "lng": 3.71026220674704
    },
    {
        "floor": 2,
        "room": "L130",
        "lat": 51.0597497962339,
        "lng": 3.71028204795074
    },
    {
        "floor": 2,
        "room": "L134",
        "lat": 51.0596456159869,
        "lng": 3.71013166768562
    },
    {
        "floor": 2,
        "room": "L146",
        "lat": 51.0597328698711,
        "lng": 3.71010301892248
    },
    {
        "floor": 2,
        "room": "L131",
        "lat": 51.0596596639784,
        "lng": 3.71026486306592
    },
    {
        "floor": 2,
        "room": "L138",
        "lat": 51.0596231443851,
        "lng": 3.70993786150751
    },
    {
        "floor": 2,
        "room": "L140",
        "lat": 51.0596441400633,
        "lng": 3.70990739671787
    },
    {
        "floor": 2,
        "room": "L136",
        "lat": 51.059591724598,
        "lng": 3.7099834516363
    },
    {
        "floor": 2,
        "room": "L135",
        "lat": 51.0596089455444,
        "lng": 3.71005481489649
    },
    {
        "floor": 2,
        "room": "L144",
        "lat": 51.0596922457785,
        "lng": 3.71003252000073
    },
    {
        "floor": 2,
        "room": "L142",
        "lat": 51.0596725317711,
        "lng": 3.70999830844549
    },
    {
        "floor": 2,
        "room": "L110",
        "lat": 51.0598814535151,
        "lng": 3.71019705426654
    },
    {
        "floor": 2,
        "room": "M113",
        "lat": 51.0598128497366,
        "lng": 3.70992559625294
    },
    {
        "floor": 2,
        "room": "M118",
        "lat": 51.059855270785,
        "lng": 3.70958364774488
    },
    {
        "floor": 2,
        "room": "M117",
        "lat": 51.0598335454872,
        "lng": 3.70961517163444
    },
    {
        "floor": 2,
        "room": "M126",
        "lat": 51.0599796286906,
        "lng": 3.70977208352139
    },
    {
        "floor": 2,
        "room": "M122",
        "lat": 51.0599171016359,
        "lng": 3.70975119023184
    },
    {
        "floor": 2,
        "room": "M121",
        "lat": 51.0599282923585,
        "lng": 3.70970402691207
    },
    {
        "floor": 2,
        "room": "M123",
        "lat": 51.0599525274629,
        "lng": 3.709747141137
    },
    {
        "floor": 2,
        "room": "M116",
        "lat": 51.0599645524491,
        "lng": 3.70970649859269
    },
    {
        "floor": 2,
        "room": "M120",
        "lat": 51.0599475691494,
        "lng": 3.70965905898192
    },
    {
        "floor": 2,
        "room": "M128",
        "lat": 51.0600717767471,
        "lng": 3.70995704538782
    },
    {
        "floor": 2,
        "room": "M130",
        "lat": 51.0600993793621,
        "lng": 3.71003369458006
    },
    {
        "floor": 2,
        "room": "M129",
        "lat": 51.0601235542075,
        "lng": 3.7099908851864
    },
    {
        "floor": 2,
        "room": "M132",
        "lat": 51.0600411746737,
        "lng": 3.71010601564766
    },
    {
        "floor": 2,
        "room": "N104",
        "lat": 51.0602558844434,
        "lng": 3.70988588519675
    },
    {
        "floor": 2,
        "room": "P114",
        "lat": 51.0591209260414,
        "lng": 3.70879622260707
    },
    {
        "floor": 2,
        "room": "P108a",
        "lat": 51.0591786420501,
        "lng": 3.70853155320932
    },
    {
        "floor": 2,
        "room": "P125",
        "lat": 51.0587772189436,
        "lng": 3.70846234986768
    },
    {
        "floor": 2,
        "room": "P109",
        "lat": 51.0590551702109,
        "lng": 3.7087364552807
    },
    {
        "floor": 2,
        "room": "P107",
        "lat": 51.0592294000136,
        "lng": 3.70841491787443
    },
    {
        "floor": 2,
        "room": "P104",
        "lat": 51.0591713097856,
        "lng": 3.7083557203105
    },
    {
        "floor": 2,
        "room": "P105",
        "lat": 51.0591845772021,
        "lng": 3.70841535327445
    },
    {
        "floor": 2,
        "room": "P102",
        "lat": 51.0591045190692,
        "lng": 3.70836645998916
    },
    {
        "floor": 2,
        "room": "P124",
        "lat": 51.0588592502836,
        "lng": 3.70822616878241
    },
    {
        "floor": 2,
        "room": "P120",
        "lat": 51.058979125392,
        "lng": 3.7083139538793
    },
    {
        "floor": 2,
        "room": "P122",
        "lat": 51.0589439745941,
        "lng": 3.70828186343157
    },
    {
        "floor": 2,
        "room": "P101",
        "lat": 51.0589999339826,
        "lng": 3.70827994963587
    },
    {
        "floor": 2,
        "room": "P113",
        "lat": 51.059113012442,
        "lng": 3.70876503668181
    },
    {
        "floor": 2,
        "room": "P112",
        "lat": 51.0590907220123,
        "lng": 3.7087479154996
    },
    {
        "floor": 2,
        "room": "P108b",
        "lat": 51.0591360711819,
        "lng": 3.7086711111772
    },
    {
        "floor": 2,
        "room": "P115",
        "lat": 51.0590477622264,
        "lng": 3.70861980138366
    },
    {
        "floor": 2,
        "room": "P116",
        "lat": 51.0590822552326,
        "lng": 3.70854126397988
    },
    {
        "floor": 2,
        "room": "P106",
        "lat": 51.059176789271,
        "lng": 3.70843662819022
    },
    {
        "floor": 2,
        "room": "P118",
        "lat": 51.0591029045119,
        "lng": 3.70843903103733
    },
    {
        "floor": 2,
        "room": "P119",
        "lat": 51.0590335457971,
        "lng": 3.7083660297441
    },
    {
        "floor": 2,
        "room": "P103",
        "lat": 51.0591143269417,
        "lng": 3.70854252526143
    },
    {
        "floor": 2,
        "room": "P123",
        "lat": 51.0589057326635,
        "lng": 3.70826187089792
    },
    {
        "floor": 2,
        "room": "P121",
        "lat": 51.0589604353572,
        "lng": 3.70829959840764
    },
    {
        "floor": 2,
        "room": "P126",
        "lat": 51.0586688888849,
        "lng": 3.70849791517863
    },
    {
        "floor": 2,
        "room": "P127",
        "lat": 51.0586194938426,
        "lng": 3.70845997580006
    },
    {
        "floor": 2,
        "room": "P111",
        "lat": 51.0590964510735,
        "lng": 3.70877742346824
    },
    {
        "floor": 2,
        "room": "P110",
        "lat": 51.0590735538279,
        "lng": 3.70875983619252
    },
    {
        "floor": 2,
        "room": "P117",
        "lat": 51.0590570179078,
        "lng": 3.70852234496654
    },
    {
        "floor": 2,
        "room": "F101",
        "lat": 51.0588181125959,
        "lng": 3.7091459871009
    },
    {
        "floor": 2,
        "room": "F102",
        "lat": 51.0588553927138,
        "lng": 3.70906289317103
    },
    {
        "floor": 2,
        "room": "W105",
        "lat": 51.0613945492056,
        "lng": 3.70828373519724
    },
    {
        "floor": 2,
        "room": "W103",
        "lat": 51.0614445525907,
        "lng": 3.70830475871831
    },
    {
        "floor": 2,
        "room": "W104",
        "lat": 51.0614154493621,
        "lng": 3.70826321001525
    },
    {
        "floor": 2,
        "room": "W101",
        "lat": 51.0614176488792,
        "lng": 3.70831972684567
    },
    {
        "floor": 2,
        "room": "W102",
        "lat": 51.0614388852547,
        "lng": 3.7083493986447
    },
    {
        "floor": 2,
        "room": "C104",
        "lat": 51.0608144752245,
        "lng": 3.70816512079461
    },
    {
        "floor": 2,
        "room": "C112",
        "lat": 51.0608655195755,
        "lng": 3.70800440020923
    },
    {
        "floor": 2,
        "room": "C101",
        "lat": 51.0607701209763,
        "lng": 3.70811926594325
    },
    {
        "floor": 2,
        "room": "C103",
        "lat": 51.0607974049858,
        "lng": 3.70816988339338
    },
    {
        "floor": 2,
        "room": "C103a",
        "lat": 51.0608052635774,
        "lng": 3.70818360740997
    },
    {
        "floor": 2,
        "room": "C102",
        "lat": 51.0606867669592,
        "lng": 3.70834907636047
    },
    {
        "floor": 2,
        "room": "C106",
        "lat": 51.0607336558031,
        "lng": 3.70812727667415
    },
    {
        "floor": 2,
        "room": "C105",
        "lat": 51.0607774825717,
        "lng": 3.70820381437368
    },
    {
        "floor": 2,
        "room": "C108",
        "lat": 51.0608276621945,
        "lng": 3.70814095615078
    },
    {
        "floor": 2,
        "room": "C109",
        "lat": 51.0608473540208,
        "lng": 3.70811256146547
    },
    {
        "floor": 2,
        "room": "C110",
        "lat": 51.0608672454194,
        "lng": 3.70808387897192
    },
    {
        "floor": 2,
        "room": "C111",
        "lat": 51.0608870192518,
        "lng": 3.70805276402112
    },
    {
        "floor": 2,
        "room": "C107a",
        "lat": 51.0608266261868,
        "lng": 3.70802916911273
    },
    {
        "floor": 2,
        "room": "C107",
        "lat": 51.0608433106139,
        "lng": 3.70805830622918
    },
    {
        "floor": 2,
        "room": "E120",
        "lat": 51.060013731425,
        "lng": 3.70926396645357
    },
    {
        "floor": 2,
        "room": "E122",
        "lat": 51.0599585513685,
        "lng": 3.70935149767022
    }
];
google.maps.event.addDomListener(window, 'load', initialize);

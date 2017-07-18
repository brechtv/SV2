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
          input = $( "#room_search_input" ).val().toUpperCase();
          console.log("INPUT: \"" + input + "\"");


          room = getRoom(input);
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
                  content: "<div><h5>Klaslokaal <strong>" + title  + "</strong></h5></div>"
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

    createMarker(pano01000.location.latLng, map, pano01000.location.pano);
    createMarker(pano01001.location.latLng, map, pano01001.location.pano);
    createMarker(pano01002.location.latLng, map, pano01002.location.pano);
    createMarker(pano01003.location.latLng, map, pano01003.location.pano);
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
    createMarker(pano03000.location.latLng, map, pano03000.location.pano);
    createMarker(pano03001.location.latLng, map, pano03001.location.pano);
    createMarker(pano03002.location.latLng, map, pano03002.location.pano);
    createMarker(pano03003.location.latLng, map, pano03003.location.pano);
    createMarker(pano03004.location.latLng, map, pano03004.location.pano);
    createMarker(pano03005.location.latLng, map, pano03005.location.pano);
    createMarker(pano03006.location.latLng, map, pano03006.location.pano);
    createMarker(pano03007.location.latLng, map, pano03007.location.pano);
    createMarker(pano05000.location.latLng, map, pano05000.location.pano);
    createMarker(pano07000.location.latLng, map, pano07000.location.pano);
    createMarker(pano07001.location.latLng, map, pano07001.location.pano);
    createMarker(pano07002.location.latLng, map, pano07002.location.pano);
    createMarker(pano07003.location.latLng, map, pano07003.location.pano);
    createMarker(pano07004.location.latLng, map, pano07004.location.pano);
    createMarker(pano07005.location.latLng, map, pano07005.location.pano);
    createMarker(pano07006.location.latLng, map, pano07006.location.pano);
    createMarker(pano07007.location.latLng, map, pano07007.location.pano);
    createMarker(pano07008.location.latLng, map, pano07008.location.pano);
    createMarker(pano07009.location.latLng, map, pano07009.location.pano);
    createMarker(pano07010.location.latLng, map, pano07010.location.pano);
    createMarker(pano07011.location.latLng, map, pano07011.location.pano);
    createMarker(pano07012.location.latLng, map, pano07012.location.pano);
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
    createMarker(pano13000.location.latLng, map, pano13000.location.pano);
    createMarker(pano13001.location.latLng, map, pano13001.location.pano);
    createMarker(pano13002.location.latLng, map, pano13002.location.pano);
    createMarker(pano13003.location.latLng, map, pano13003.location.pano);
    createMarker(pano13004.location.latLng, map, pano13004.location.pano);
    createMarker(pano13005.location.latLng, map, pano13005.location.pano);
    createMarker(pano13006.location.latLng, map, pano13006.location.pano);
    createMarker(pano13007.location.latLng, map, pano13007.location.pano);
    createMarker(pano13008.location.latLng, map, pano13008.location.pano);
    createMarker(pano13009.location.latLng, map, pano13009.location.pano);
    createMarker(pano13010.location.latLng, map, pano13010.location.pano);
    createMarker(pano13011.location.latLng, map, pano13011.location.pano);
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
        latLng: new google.maps.LatLng(51.05968551, 3.70848266)
    },
    links: [{
        description: "Naar gang A0T1",
        pano: "pano01001",
        heading: 223
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
        latLng: new google.maps.LatLng(51.05965948, 3.70844383)
    },
    links: [{
        description: "Naar gang A0T1",
        pano: "pano01000",
        heading: 43
    }, {
        description: "Naar gang A0T1",
        pano: "pano01002",
        heading: 158
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
        latLng: new google.maps.LatLng(51.05961471, 3.70847218)
    },
    links: [{
        description: "Naar gang A0T1",
        pano: "pano01001",
        heading: 338
    }, {
        description: "Naar gang A0T1",
        pano: "pano01003",
        heading: 158
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
        latLng: new google.maps.LatLng(51.05957718, 3.70849569)
    },
    links: [{
        description: "Naar gang A0T1",
        pano: "pano01002",
        heading: 338
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
        latLng: new google.maps.LatLng(51.06078035, 3.70799655)
    },
    links: [{
        description: "Naar gang C101",
        pano: "pano03002",
        heading: 63
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
        latLng: new google.maps.LatLng(51.06082206, 3.70793626)
    },
    links: [{
        description: "Naar gang C101",
        pano: "pano03007",
        heading: 42
    }, {
        description: "Naar traphal B101",
        pano: "pano02014",
        heading: 320
    }, {
        description: "Naar gang B102",
        pano: "pano02002",
        heading: 228
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
        latLng: new google.maps.LatLng(51.06077168, 3.70784485)
    },
    links: [{
        description: "Naar gang B102",
        pano: "pano02001",
        heading: 48
    }, {
        description: "Naar gang B102",
        pano: "pano02003",
        heading: 316
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
        latLng: new google.maps.LatLng(51.06081824, 3.70777521)
    },
    links: [{
        description: "Naar gang B102",
        pano: "pano02002",
        heading: 136
    }, {
        description: "Naar gang B102",
        pano: "pano02004",
        heading: 229
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
        latLng: new google.maps.LatLng(51.06074008, 3.70763209)
    },
    links: [{
        description: "Naar gang B102",
        pano: "pano02003",
        heading: 49
    }, {
        description: "Naar gang B102",
        pano: "pano02005",
        heading: 316
    }, {
        description: "Naar gang B102",
        pano: "pano02007",
        heading: 229
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
        latLng: new google.maps.LatLng(51.06082673, 3.70750133)
    },
    links: [{
        description: "Naar gang B102",
        pano: "pano02004",
        heading: 136
    }, {
        description: "Naar gang B102",
        pano: "pano02006",
        heading: 230
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
        latLng: new google.maps.LatLng(51.06079332, 3.70743756)
    },
    links: [{
        description: "Naar gang B102",
        pano: "pano02005",
        heading: 50
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
        latLng: new google.maps.LatLng(51.06070797, 3.70757178)
    },
    links: [{
        description: "Naar gang B102",
        pano: "pano02004",
        heading: 49
    }, {
        description: "Naar gang B102",
        pano: "pano02008",
        heading: 226
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
        latLng: new google.maps.LatLng(51.06067324, 3.70751328)
    },
    links: [{
        description: "Naar gang B102",
        pano: "pano02007",
        heading: 46
    }, {
        description: "Naar gang B102",
        pano: "pano02009",
        heading: 228
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
        latLng: new google.maps.LatLng(51.06058707, 3.70736081)
    },
    links: [{
        description: "Naar gang B102",
        pano: "pano02008",
        heading: 48
    }, {
        description: "Naar gang B102",
        pano: "pano02010",
        heading: 316
    }, {
        description: "Naar gang B102",
        pano: "pano02011",
        heading: 227
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
        latLng: new google.maps.LatLng(51.06060556, 3.70733303)
    },
    links: [{
        description: "Naar gang B102",
        pano: "pano02009",
        heading: 136
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
        latLng: new google.maps.LatLng(51.06050878, 3.70722299)
    },
    links: [{
        description: "Naar gang B102",
        pano: "pano02009",
        heading: 47
    }, {
        description: "Naar gang B102",
        pano: "pano02012",
        heading: 139
    }, {
        description: "Naar gang B102",
        pano: "pano02013",
        heading: 315
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
        latLng: new google.maps.LatLng(51.06043702, 3.70732198)
    },
    links: [{
        description: "Naar gang B102",
        pano: "pano02011",
        heading: 319
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
        latLng: new google.maps.LatLng(51.06055208, 3.70715419)
    },
    links: [{
        description: "Naar gang B102",
        pano: "pano02011",
        heading: 135
    }, {
        description: "Naar noodtrap B135",
        pano: "pano02015",
        heading: 233
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
        latLng: new google.maps.LatLng(51.06084515, 3.70790651)
    },
    links: [{
        description: "Naar gang B102",
        pano: "pano02001",
        heading: 140
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
        latLng: new google.maps.LatLng(51.06053335, 3.70711356)
    },
    links: [{
        description: "Naar gang B102",
        pano: "pano02013",
        heading: 53
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
        latLng: new google.maps.LatLng(51.06078931, 3.70814698)
    },
    links: [{
        description: "Naar gang C101",
        pano: "pano03001",
        heading: 226
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
        latLng: new google.maps.LatLng(51.06075561, 3.70809004)
    },
    links: [{
        description: "Naar gang C101",
        pano: "pano03000",
        heading: 46
    }, {
        description: "Naar gang C101",
        pano: "pano03002",
        heading: 315
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
        latLng: new google.maps.LatLng(51.06079166, 3.70803276)
    },
    links: [{
        description: "Naar gang C101",
        pano: "pano03001",
        heading: 135
    }, {
        description: "Naar noodtrap B100",
        pano: "pano02000",
        heading: 243
    }, {
        description: "Naar gang C101",
        pano: "pano03003",
        heading: 319
    }, {
        description: "Naar gang C107",
        pano: "pano03004",
        heading: 53
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
        latLng: new google.maps.LatLng(51.06082364, 3.70798857)
    },
    links: [{
        description: "Naar gang C101",
        pano: "pano03002",
        heading: 139
    }, {
        description: "Naar gang C101",
        pano: "pano03007",
        heading: 310
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
        latLng: new google.maps.LatLng(51.06082162, 3.70809812)
    },
    links: [{
        description: "Naar gang C101",
        pano: "pano03002",
        heading: 233
    }, {
        description: "Naar gang C107",
        pano: "pano03005",
        heading: 317
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
        latLng: new google.maps.LatLng(51.06084199, 3.70806836)
    },
    links: [{
        description: "Naar gang C107",
        pano: "pano03004",
        heading: 137
    }, {
        description: "Naar gang C107",
        pano: "pano03006",
        heading: 319
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
        latLng: new google.maps.LatLng(51.06087724, 3.70802083)
    },
    links: [{
        description: "Naar gang C107",
        pano: "pano03005",
        heading: 139
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
        latLng: new google.maps.LatLng(51.06083886, 3.70796053)
    },
    links: [{
        description: "Naar gang C101",
        pano: "pano03003",
        heading: 130
    }, {
        description: "Naar gang B102",
        pano: "pano02001",
        heading: 222
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
        latLng: new google.maps.LatLng(51.0599659, 3.70936301)
    },
    links: [{
        description: "FOUT",
        pano: "pano02001",
        heading: 313
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
        latLng: new google.maps.LatLng(51.05925684, 3.70805774)
    },
    links: [{
        description: "Naar traphal G101",
        pano: "pano07001",
        heading: 270
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
        latLng: new google.maps.LatLng(51.05925718, 3.70799056)
    },
    links: [{
        description: "Naar traphal G101",
        pano: "pano07000",
        heading: 90
    }, {
        description: "Naar gang G100",
        pano: "pano07002",
        heading: 299
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
        latLng: new google.maps.LatLng(51.05927525, 3.70793927)
    },
    links: [{
        description: "Naar traphal G101",
        pano: "pano07001",
        heading: 119
    }, {
        description: "Naar gang G100",
        pano: "pano07003",
        heading: 207
    }, {
        description: "Naar gang G100",
        pano: "pano07006",
        heading: 37
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
        latLng: new google.maps.LatLng(51.05922295, 3.70789555)
    },
    links: [{
        description: "Naar gang G100",
        pano: "pano07002",
        heading: 27
    }, {
        description: "Naar gang G100",
        pano: "pano07004",
        heading: 204
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
        latLng: new google.maps.LatLng(51.05918181, 3.70786608)
    },
    links: [{
        description: "Naar gang G100",
        pano: "pano07003",
        heading: 24
    }, {
        description: "Naar gang G100",
        pano: "pano07005",
        heading: 203
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
        latLng: new google.maps.LatLng(51.05912501, 3.70782732)
    },
    links: [{
        description: "Naar gang G100",
        pano: "pano07004",
        heading: 23
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
        latLng: new google.maps.LatLng(51.05931844, 3.70799168)
    },
    links: [{
        description: "Naar gang G100",
        pano: "pano07002",
        heading: 217
    }, {
        description: "Naar gang G100",
        pano: "pano07007",
        heading: 30
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
        latLng: new google.maps.LatLng(51.0593793, 3.70804983)
    },
    links: [{
        description: "Naar gang G100",
        pano: "pano07006",
        heading: 210
    }, {
        description: "Naar gang G100",
        pano: "pano07008",
        heading: 8
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
        latLng: new google.maps.LatLng(51.05942772, 3.70806124)
    },
    links: [{
        description: "Naar gang G100",
        pano: "pano07007",
        heading: 188
    }, {
        description: "Naar gang G100",
        pano: "pano07009",
        heading: 82
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
        latLng: new google.maps.LatLng(51.0594347, 3.70814548)
    },
    links: [{
        description: "Naar gang G100",
        pano: "pano07008",
        heading: 262
    }, {
        description: "Naar gang G100",
        pano: "pano07010",
        heading: 79
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
        latLng: new google.maps.LatLng(51.05943893, 3.70818267)
    },
    links: [{
        description: "Naar gang G100",
        pano: "pano07009",
        heading: 259
    }, {
        description: "Naar gang G100",
        pano: "pano07011",
        heading: 349
    }, {
        description: "Naar lokaal G120",
        pano: "pano07012",
        heading: 82
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
        latLng: new google.maps.LatLng(51.05948634, 3.70816811)
    },
    links: [{
        description: "Naar gang G100",
        pano: "pano07010",
        heading: 169
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
        latLng: new google.maps.LatLng(51.0594459, 3.70827191)
    },
    links: [{
        description: "Naar gang G100",
        pano: "pano07010",
        heading: 262
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
        latLng: new google.maps.LatLng(51.05977396, 3.71021639)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11001",
        heading: 135
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
        latLng: new google.maps.LatLng(51.05975753, 3.7102422)
    },
    links: [{
        description: "Naar traphal L102",
        pano: "pano11000",
        heading: 315
    }, {
        description: "Naar gang L101",
        pano: "pano11002",
        heading: 51
    }, {
        description: "Naar gang L101",
        pano: "pano11010",
        heading: 227
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
        latLng: new google.maps.LatLng(51.05976917, 3.71026514)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11001",
        heading: 231
    }, {
        description: "Naar gang L101",
        pano: "pano11003",
        heading: 46
    }, {
        description: "Naar gang L101",
        pano: "pano11009",
        heading: 319
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
        latLng: new google.maps.LatLng(51.05979613, 3.71031006)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11002",
        heading: 226
    }, {
        description: "Naar gang L101",
        pano: "pano11004",
        heading: 47
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
        latLng: new google.maps.LatLng(51.05983024, 3.71036838)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11003",
        heading: 227
    }, {
        description: "Naar gang L101",
        pano: "pano11005",
        heading: 318
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
        latLng: new google.maps.LatLng(51.05985099, 3.71033868)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11004",
        heading: 138
    }, {
        description: "Naar gang L101",
        pano: "pano11006",
        heading: 317
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
        latLng: new google.maps.LatLng(51.05987636, 3.71030231)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11005",
        heading: 137
    }, {
        description: "Naar gang L101",
        pano: "pano11007",
        heading: 318
    }, {
        description: "Naar gang L101",
        pano: "pano11008",
        heading: 229
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
        latLng: new google.maps.LatLng(51.05992626, 3.71023278)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11006",
        heading: 138
    }, {
        description: "Naar noodtrap",
        pano: "pano12011",
        heading: 318
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
        latLng: new google.maps.LatLng(51.05984994, 3.71025317)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11006",
        heading: 49
    }, {
        description: "Naar gang L101",
        pano: "pano11009",
        heading: 224
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
        latLng: new google.maps.LatLng(51.05981601, 3.71020085)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11002",
        heading: 139
    }, {
        description: "Naar gang L101",
        pano: "pano11008",
        heading: 44
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
        latLng: new google.maps.LatLng(51.05972614, 3.71018859)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11001",
        heading: 47
    }, {
        description: "Naar gang L101",
        pano: "pano11011",
        heading: 226
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
        latLng: new google.maps.LatLng(51.05967852, 3.71010768)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11010",
        heading: 46
    }, {
        description: "Naar gang L101",
        pano: "pano11012",
        heading: 227
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
        latLng: new google.maps.LatLng(51.05965522, 3.71006706)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11011",
        heading: 47
    }, {
        description: "Naar gang L101",
        pano: "pano11013",
        heading: 227
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
        latLng: new google.maps.LatLng(51.05963063, 3.7100237)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11014",
        heading: 316
    }, {
        description: "Naar gang L101",
        pano: "pano11012",
        heading: 47
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
        latLng: new google.maps.LatLng(51.05966373, 3.70997293)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11013",
        heading: 136
    }, {
        description: "Naar noodtrap",
        pano: "pano11015",
        heading: 317
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
        latLng: new google.maps.LatLng(51.05970216, 3.70991716)
    },
    links: [{
        description: "Naar gang L101",
        pano: "pano11014",
        heading: 137
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
        latLng: new google.maps.LatLng(51.05992264, 3.70988025)
    },
    links: [{
        description: "Naar gang M101",
        pano: "pano12001",
        heading: 315
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
        latLng: new google.maps.LatLng(51.05993948, 3.70985397)
    },
    links: [{
        description: "Naar traphal M102",
        pano: "pano12000",
        heading: 135
    }, {
        description: "Naar gang M101",
        pano: "pano12002",
        heading: 224
    }, {
        description: "Naar gang M101",
        pano: "pano12007",
        heading: 46
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
        latLng: new google.maps.LatLng(51.05992601, 3.70983288)
    },
    links: [{
        description: "Naar gang M101",
        pano: "pano12001",
        heading: 44
    }, {
        description: "Naar gang M101",
        pano: "pano12003",
        heading: 139
    }, {
        description: "Naar gang M101",
        pano: "pano12004",
        heading: 229
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
        latLng: new google.maps.LatLng(51.05988976, 3.70988274)
    },
    links: [{
        description: "Naar gang M101",
        pano: "pano12002",
        heading: 319
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
        latLng: new google.maps.LatLng(51.05990211, 3.70978836)
    },
    links: [{
        description: "Naar gang M101",
        pano: "pano12002",
        heading: 49
    }, {
        description: "Naar gang M101",
        pano: "pano12005",
        heading: 227
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
        latLng: new google.maps.LatLng(51.05986556, 3.70972455)
    },
    links: [{
        description: "Naar gang M101",
        pano: "pano12004",
        heading: 47
    }, {
        description: "Naar gang M101",
        pano: "pano12006",
        heading: 137
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
        latLng: new google.maps.LatLng(51.0598295, 3.70977775)
    },
    links: [{
        description: "Naar gang M101",
        pano: "pano12005",
        heading: 317
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
        latLng: new google.maps.LatLng(51.05997548, 3.70991428)
    },
    links: [{
        description: "Naar gang M101",
        pano: "pano12001",
        heading: 226
    }, {
        description: "Naar gang M101",
        pano: "pano12008",
        heading: 48
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
        latLng: new google.maps.LatLng(51.06002127, 3.70999804)
    },
    links: [{
        description: "Naar gang M101",
        pano: "pano12007",
        heading: 228
    }, {
        description: "Naar gang M101",
        pano: "pano12009",
        heading: 46
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
        latLng: new google.maps.LatLng(51.06005109, 3.71004847)
    },
    links: [{
        description: "Naar gang M101",
        pano: "pano12008",
        heading: 226
    }, {
        description: "Naar gang M101",
        pano: "pano12010",
        heading: 136
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
        latLng: new google.maps.LatLng(51.06000251, 3.71012216)
    },
    links: [{
        description: "Naar gang M101",
        pano: "pano12009",
        heading: 316
    }, {
        description: "Naar noodtrap",
        pano: "pano12011",
        heading: 135
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
        latLng: new google.maps.LatLng(51.05997662, 3.71016223)
    },
    links: [{
        description: "Naar gang M101",
        pano: "pano12010",
        heading: 315
    }, {
        description: "Naar gang L101",
        pano: "pano11007",
        heading: 138
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
        latLng: new google.maps.LatLng(51.05888241, 3.70812022)
    },
    links: [{
        description: "Naar gang P101",
        pano: "pano13001",
        heading: 113
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
        latLng: new google.maps.LatLng(51.05886832, 3.70817143)
    },
    links: [{
        description: "Naar gang P101",
        pano: "pano13000",
        heading: 293
    }, {
        description: "Naar gang P101",
        pano: "pano13002",
        heading: 25
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
        latLng: new google.maps.LatLng(51.05895537, 3.70823656)
    },
    links: [{
        description: "Naar gang P101",
        pano: "pano13001",
        heading: 205
    }, {
        description: "Naar gang P101",
        pano: "pano13003",
        heading: 26
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
        latLng: new google.maps.LatLng(51.05900063, 3.70827199)
    },
    links: [{
        description: "Naar gang P101",
        pano: "pano13002",
        heading: 206
    }, {
        description: "Naar gang P101",
        pano: "pano13004",
        heading: 27
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
        latLng: new google.maps.LatLng(51.05909284, 3.70834918)
    },
    links: [{
        description: "Naar gang P101",
        pano: "pano13003",
        heading: 207
    }, {
        description: "Naar gang P103",
        pano: "pano13005",
        heading: 27
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
        latLng: new google.maps.LatLng(51.05915709, 3.70840314)
    },
    links: [{
        description: "Naar gang P101",
        pano: "pano13004",
        heading: 207
    }, {
        description: "Naar traphal P104",
        pano: "pano13006",
        heading: 294
    }, {
        description: "Naar gang P103",
        pano: "pano13007",
        heading: 114
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
        latLng: new google.maps.LatLng(51.05917244, 3.70834901)
    },
    links: [{
        description: "Naar gang P103",
        pano: "pano13005",
        heading: 114
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
        latLng: new google.maps.LatLng(51.05913739, 3.70847159)
    },
    links: [{
        description: "Naar gang P103",
        pano: "pano13005",
        heading: 294
    }, {
        description: "Naar gang P103",
        pano: "pano13008",
        heading: 115
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
        latLng: new google.maps.LatLng(51.05910883, 3.70856519)
    },
    links: [{
        description: "Naar gang P103",
        pano: "pano13007",
        heading: 295
    }, {
        description: "Naar gang P103",
        pano: "pano13009",
        heading: 115
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
        latLng: new google.maps.LatLng(51.05908939, 3.70862894)
    },
    links: [{
        description: "Naar gang P103",
        pano: "pano13008",
        heading: 295
    }, {
        description: "Naar gang P103",
        pano: "pano13010",
        heading: 115
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
        latLng: new google.maps.LatLng(51.05907118, 3.70868862)
    },
    links: [{
        description: "Naar gang P103",
        pano: "pano13009",
        heading: 295
    }, {
        description: "Naar traphal P109",
        pano: "pano13011",
        heading: 115
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
        latLng: new google.maps.LatLng(51.05905916, 3.70872805)
    },
    links: [{
        description: "Naar gang P103",
        pano: "pano13010",
        heading: 295

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
        "lat": "51.0600576517035",
        "lng": "3.70672412962424"
    },
    {
        "floor": 2,
        "room": "A0T20",
        "lat": "51.0600393776398",
        "lng": "3.70673112260499"
    },
    {
        "floor": 2,
        "room": "A112",
        "lat": "51.0600671684715",
        "lng": "3.70684114754696"
    },
    {
        "floor": 2,
        "room": "A103",
        "lat": "51.0602562569241",
        "lng": "3.70708214536364"
    },
    {
        "floor": 2,
        "room": "A104",
        "lat": "51.0602332441742",
        "lng": "3.70699353834155"
    },
    {
        "floor": 2,
        "room": "A102",
        "lat": "51.0602697819269",
        "lng": "3.7071729730827"
    },
    {
        "floor": 2,
        "room": "A0T3",
        "lat": "51.0601523896845",
        "lng": "3.70726359887347"
    },
    {
        "floor": 2,
        "room": "A0T4",
        "lat": "51.060117576987",
        "lng": "3.70728695897638"
    },
    {
        "floor": 2,
        "room": "A0T2",
        "lat": "51.0601797099904",
        "lng": "3.70724526630701"
    },
    {
        "floor": 2,
        "room": "A101",
        "lat": "51.060189255309",
        "lng": "3.70713190348767"
    },
    {
        "floor": 2,
        "room": "A111",
        "lat": "51.060082696679",
        "lng": "3.70695699972073"
    },
    {
        "floor": 2,
        "room": "A107",
        "lat": "51.060121375381",
        "lng": "3.70714760878708"
    },
    {
        "floor": 2,
        "room": "A0T11",
        "lat": "51.0599573089195",
        "lng": "3.70718896412187"
    },
    {
        "floor": 2,
        "room": "A0T9",
        "lat": "51.0599664368673",
        "lng": "3.70729998982777"
    },
    {
        "floor": 2,
        "room": "A0T10",
        "lat": "51.0599541068552",
        "lng": "3.70724079931513"
    },
    {
        "floor": 2,
        "room": "A0T8",
        "lat": "51.0600234079343",
        "lng": "3.70729049754566"
    },
    {
        "floor": 2,
        "room": "A114",
        "lat": "51.0600626867269",
        "lng": "3.70676125514496"
    },
    {
        "floor": 2,
        "room": "A113",
        "lat": "51.0600482347173",
        "lng": "3.70679309588548"
    },
    {
        "floor": 2,
        "room": "A0T1",
        "lat": "51.0602147321254",
        "lng": "3.70721030010061"
    },
    {
        "floor": 2,
        "room": "A109a",
        "lat": "51.0600918966524",
        "lng": "3.70712114682006"
    },
    {
        "floor": 2,
        "room": "A108a",
        "lat": "51.0600896481781",
        "lng": "3.70715180278724"
    },
    {
        "floor": 2,
        "room": "A108",
        "lat": "51.060113704636",
        "lng": "3.70713548005057"
    },
    {
        "floor": 2,
        "room": "A106",
        "lat": "51.0601327924475",
        "lng": "3.70718550457881"
    },
    {
        "floor": 2,
        "room": "A0T6",
        "lat": "51.0600838197269",
        "lng": "3.70721734585365"
    },
    {
        "floor": 2,
        "room": "A0T7",
        "lat": "51.0600085274158",
        "lng": "3.70722739575659"
    },
    {
        "floor": 2,
        "room": "A0T12",
        "lat": "51.0600327737092",
        "lng": "3.70716298522845"
    },
    {
        "floor": 2,
        "room": "A110",
        "lat": "51.0600958622932",
        "lng": "3.70704172394801"
    },
    {
        "floor": 2,
        "room": "A109",
        "lat": "51.0601145527725",
        "lng": "3.70710900913572"
    },
    {
        "floor": 2,
        "room": "A105",
        "lat": "51.0601764062964",
        "lng": "3.70702475506336"
    },
    {
        "floor": 2,
        "room": "A0T5",
        "lat": "51.0600856096863",
        "lng": "3.70728335385745"
    },
    {
        "floor": 2,
        "room": "G116",
        "lat": "51.0599233901056",
        "lng": "3.70669739829392"
    },
    {
        "floor": 2,
        "room": "G106",
        "lat": "51.0596219811539",
        "lng": "3.70656692366868"
    },
    {
        "floor": 2,
        "room": "G104",
        "lat": "51.0597636995442",
        "lng": "3.7067393274048"
    },
    {
        "floor": 2,
        "room": "G102",
        "lat": "51.0597800704031",
        "lng": "3.706691518428"
    },
    {
        "floor": 2,
        "room": "G128",
        "lat": "51.0598756334887",
        "lng": "3.70680348035273"
    },
    {
        "floor": 2,
        "room": "G122",
        "lat": "51.0599538819249",
        "lng": "3.70712886593493"
    },
    {
        "floor": 2,
        "room": "G123",
        "lat": "51.0600687554202",
        "lng": "3.70709507768193"
    },
    {
        "floor": 2,
        "room": "G117",
        "lat": "51.0599519324048",
        "lng": "3.70672248717862"
    },
    {
        "floor": 2,
        "room": "G105",
        "lat": "51.0597073538081",
        "lng": "3.70664224604816"
    },
    {
        "floor": 2,
        "room": "G0T1",
        "lat": "51.0597805001011",
        "lng": "3.70682939941804"
    },
    {
        "floor": 2,
        "room": "G101",
        "lat": "51.0597968031908",
        "lng": "3.70674723544189"
    },
    {
        "floor": 2,
        "room": "G107",
        "lat": "51.0596712836359",
        "lng": "3.70646454564285"
    },
    {
        "floor": 2,
        "room": "G108",
        "lat": "51.0597016218494",
        "lng": "3.70650303431899"
    },
    {
        "floor": 2,
        "room": "G109",
        "lat": "51.0597291420147",
        "lng": "3.70652722447421"
    },
    {
        "floor": 2,
        "room": "G110",
        "lat": "51.0597566621748",
        "lng": "3.70655141465788"
    },
    {
        "floor": 2,
        "room": "G111",
        "lat": "51.0597839071282",
        "lng": "3.70657536296775"
    },
    {
        "floor": 2,
        "room": "G112",
        "lat": "51.0598117024793",
        "lng": "3.70659979511059"
    },
    {
        "floor": 2,
        "room": "G113",
        "lat": "51.0598393750682",
        "lng": "3.70662354868282"
    },
    {
        "floor": 2,
        "room": "G114",
        "lat": "51.0598668952075",
        "lng": "3.70664773898013"
    },
    {
        "floor": 2,
        "room": "G115",
        "lat": "51.0598944153415",
        "lng": "3.7066719293059"
    },
    {
        "floor": 2,
        "room": "G127",
        "lat": "51.0599303903073",
        "lng": "3.70683910689328"
    },
    {
        "floor": 2,
        "room": "G124",
        "lat": "51.0599488353573",
        "lng": "3.7070922179969"
    },
    {
        "floor": 2,
        "room": "G121",
        "lat": "51.0599907300635",
        "lng": "3.70712669841102"
    },
    {
        "floor": 2,
        "room": "G126",
        "lat": "51.0599354990031",
        "lng": "3.70688325150313"
    },
    {
        "floor": 2,
        "room": "G125",
        "lat": "51.0599387718842",
        "lng": "3.70693720032901"
    },
    {
        "floor": 2,
        "room": "G119",
        "lat": "51.0600341863798",
        "lng": "3.70691730191334"
    },
    {
        "floor": 2,
        "room": "G103",
        "lat": "51.0596596049401",
        "lng": "3.7067110305133"
    },
    {
        "floor": 2,
        "room": "G118",
        "lat": "51.0600012716826",
        "lng": "3.70677548591531"
    },
    {
        "floor": 2,
        "room": "G120",
        "lat": "51.0600328285748",
        "lng": "3.70699495871987"
    },
    {
        "floor": 2,
        "room": "G100",
        "lat": "51.0598545184642",
        "lng": "3.70673029092018"
    },
    {
        "floor": 2,
        "room": "B134",
        "lat": "51.0611754434919",
        "lng": "3.70587344301897"
    },
    {
        "floor": 2,
        "room": "B126",
        "lat": "51.0611251297181",
        "lng": "3.70597731523618"
    },
    {
        "floor": 2,
        "room": "B124",
        "lat": "51.0612560515168",
        "lng": "3.70603435705433"
    },
    {
        "floor": 2,
        "room": "B111",
        "lat": "51.0613200285094",
        "lng": "3.7060993727536"
    },
    {
        "floor": 2,
        "room": "B110",
        "lat": "51.0613553379844",
        "lng": "3.7061423355467"
    },
    {
        "floor": 2,
        "room": "B109",
        "lat": "51.0613737464627",
        "lng": "3.70617446019509"
    },
    {
        "floor": 2,
        "room": "B108",
        "lat": "51.0613927208835",
        "lng": "3.70620761751154"
    },
    {
        "floor": 2,
        "room": "B114",
        "lat": "51.0613031210716",
        "lng": "3.70621414564275"
    },
    {
        "floor": 2,
        "room": "B113",
        "lat": "51.0612456104012",
        "lng": "3.70616939007221"
    },
    {
        "floor": 2,
        "room": "B125",
        "lat": "51.0610187034493",
        "lng": "3.70612742378259"
    },
    {
        "floor": 2,
        "room": "B123",
        "lat": "51.061089915344",
        "lng": "3.70625178069648"
    },
    {
        "floor": 2,
        "room": "B115",
        "lat": "51.0611982971498",
        "lng": "3.70644104838055"
    },
    {
        "floor": 2,
        "room": "B104",
        "lat": "51.0612760775791",
        "lng": "3.70650832139482"
    },
    {
        "floor": 2,
        "room": "B128",
        "lat": "51.0611919264873",
        "lng": "3.70612354926312"
    },
    {
        "floor": 2,
        "room": "B105",
        "lat": "51.0613787840521",
        "lng": "3.70642642317106"
    },
    {
        "floor": 2,
        "room": "B106",
        "lat": "51.0613343203734",
        "lng": "3.7063517714651"
    },
    {
        "floor": 2,
        "room": "B117",
        "lat": "51.0612642811905",
        "lng": "3.70626456354001"
    },
    {
        "floor": 2,
        "room": "B116",
        "lat": "51.0612853480653",
        "lng": "3.706301352769"
    },
    {
        "floor": 2,
        "room": "B118",
        "lat": "51.0612449673596",
        "lng": "3.70623083571068"
    },
    {
        "floor": 2,
        "room": "B119",
        "lat": "51.0612201263241",
        "lng": "3.70620421083043"
    },
    {
        "floor": 2,
        "room": "B102",
        "lat": "51.0612329331396",
        "lng": "3.70629868896651"
    },
    {
        "floor": 2,
        "room": "B101",
        "lat": "51.0613688590499",
        "lng": "3.70662961371162"
    },
    {
        "floor": 2,
        "room": "B135",
        "lat": "51.0610692722375",
        "lng": "3.70586180381536"
    },
    {
        "floor": 2,
        "room": "B122",
        "lat": "51.0610962185182",
        "lng": "3.70602073995288"
    },
    {
        "floor": 2,
        "room": "B131",
        "lat": "51.060998238652",
        "lng": "3.70595589900489"
    },
    {
        "floor": 2,
        "room": "B130",
        "lat": "51.0609803610069",
        "lng": "3.70598958068033"
    },
    {
        "floor": 2,
        "room": "B136",
        "lat": "51.0609519888301",
        "lng": "3.70603049337991"
    },
    {
        "floor": 2,
        "room": "B132",
        "lat": "51.0610289326414",
        "lng": "3.70591896198397"
    },
    {
        "floor": 2,
        "room": "B129",
        "lat": "51.0609432196421",
        "lng": "3.70611348597998"
    },
    {
        "floor": 2,
        "room": "B127",
        "lat": "51.0612352359879",
        "lng": "3.7059432398356"
    },
    {
        "floor": 2,
        "room": "B104d",
        "lat": "51.0612760391553",
        "lng": "3.70663819469501"
    },
    {
        "floor": 2,
        "room": "B101a",
        "lat": "51.0613365132887",
        "lng": "3.70669890201778"
    },
    {
        "floor": 2,
        "room": "B101b",
        "lat": "51.0613155069882",
        "lng": "3.70666221813465"
    },
    {
        "floor": 2,
        "room": "B100a",
        "lat": "51.0613027675614",
        "lng": "3.70669523589462"
    },
    {
        "floor": 2,
        "room": "B100",
        "lat": "51.0613181762991",
        "lng": "3.70674346054961"
    },
    {
        "floor": 2,
        "room": "B112",
        "lat": "51.0612727852027",
        "lng": "3.7061302038874"
    },
    {
        "floor": 2,
        "room": "B104a",
        "lat": "51.0612065750286",
        "lng": "3.7065405616621"
    },
    {
        "floor": 2,
        "room": "B104b",
        "lat": "51.061227594414",
        "lng": "3.70657726818825"
    },
    {
        "floor": 2,
        "room": "B104c",
        "lat": "51.0612486137879",
        "lng": "3.70661397474738"
    },
    {
        "floor": 2,
        "room": "B121",
        "lat": "51.0611478550262",
        "lng": "3.70635296087442"
    },
    {
        "floor": 2,
        "room": "B120",
        "lat": "51.0611436645849",
        "lng": "3.70645230616335"
    },
    {
        "floor": 2,
        "room": "B107",
        "lat": "51.0614208064693",
        "lng": "3.70631294394972"
    },
    {
        "floor": 2,
        "room": "B107a",
        "lat": "51.0614252977154",
        "lng": "3.70622649653825"
    },
    {
        "floor": 2,
        "room": "B107b",
        "lat": "51.0614456694703",
        "lng": "3.70626280475745"
    },
    {
        "floor": 2,
        "room": "B107c",
        "lat": "51.0614666019138",
        "lng": "3.70629960173411"
    },
    {
        "floor": 2,
        "room": "B107d",
        "lat": "51.0614861425845",
        "lng": "3.70633494725031"
    },
    {
        "floor": 2,
        "room": "M134",
        "lat": "51.0605118121715",
        "lng": "3.70876631081687"
    },
    {
        "floor": 2,
        "room": "M112",
        "lat": "51.0603344840594",
        "lng": "3.70860749092104"
    },
    {
        "floor": 2,
        "room": "L101",
        "lat": "51.0603234359237",
        "lng": "3.70897882200145"
    },
    {
        "floor": 2,
        "room": "L103",
        "lat": "51.0603254817211",
        "lng": "3.70890522249197"
    },
    {
        "floor": 2,
        "room": "L116",
        "lat": "51.0603611796984",
        "lng": "3.70922715669772"
    },
    {
        "floor": 2,
        "room": "L120",
        "lat": "51.0602924690577",
        "lng": "3.70932685659851"
    },
    {
        "floor": 2,
        "room": "L112",
        "lat": "51.060465657286",
        "lng": "3.70907555776102"
    },
    {
        "floor": 2,
        "room": "L114",
        "lat": "51.0604187720784",
        "lng": "3.70915166458485"
    },
    {
        "floor": 2,
        "room": "L117",
        "lat": "51.0603926895648",
        "lng": "3.70910640134917"
    },
    {
        "floor": 2,
        "room": "L122",
        "lat": "51.0603115139671",
        "lng": "3.70916421814213"
    },
    {
        "floor": 2,
        "room": "M124",
        "lat": "51.0605422085855",
        "lng": "3.70859521981443"
    },
    {
        "floor": 2,
        "room": "M114",
        "lat": "51.0604288718585",
        "lng": "3.70839959667701"
    },
    {
        "floor": 2,
        "room": "L132",
        "lat": "51.0602186373664",
        "lng": "3.7089806135482"
    },
    {
        "floor": 2,
        "room": "L106",
        "lat": "51.0603675239398",
        "lng": "3.70907276940796"
    },
    {
        "floor": 2,
        "room": "L105",
        "lat": "51.0603827809677",
        "lng": "3.70905063113941"
    },
    {
        "floor": 2,
        "room": "L128",
        "lat": "51.0602303298193",
        "lng": "3.70907147940122"
    },
    {
        "floor": 2,
        "room": "L107",
        "lat": "51.0603427455603",
        "lng": "3.70902609708914"
    },
    {
        "floor": 2,
        "room": "L108",
        "lat": "51.0603492866055",
        "lng": "3.70898616462083"
    },
    {
        "floor": 2,
        "room": "L102",
        "lat": "51.0603038512402",
        "lng": "3.70896713467106"
    },
    {
        "floor": 2,
        "room": "L126",
        "lat": "51.0602448566723",
        "lng": "3.7089592389913"
    },
    {
        "floor": 2,
        "room": "M105",
        "lat": "51.0603800150091",
        "lng": "3.70853907416067"
    },
    {
        "floor": 2,
        "room": "M106",
        "lat": "51.0603958643199",
        "lng": "3.70851849212912"
    },
    {
        "floor": 2,
        "room": "M107",
        "lat": "51.0604203028894",
        "lng": "3.70856565760172"
    },
    {
        "floor": 2,
        "room": "M108",
        "lat": "51.0604125997533",
        "lng": "3.70860196146145"
    },
    {
        "floor": 2,
        "room": "M119",
        "lat": "51.0604118550822",
        "lng": "3.70830190051751"
    },
    {
        "floor": 2,
        "room": "M101",
        "lat": "51.0604366696163",
        "lng": "3.70860674190158"
    },
    {
        "floor": 2,
        "room": "M125",
        "lat": "51.0604821811064",
        "lng": "3.70856872830908"
    },
    {
        "floor": 2,
        "room": "M103",
        "lat": "51.0604379070875",
        "lng": "3.70868603894966"
    },
    {
        "floor": 2,
        "room": "M102",
        "lat": "51.0604586806331",
        "lng": "3.70862263962613"
    },
    {
        "floor": 2,
        "room": "N102",
        "lat": "51.0607697204179",
        "lng": "3.70866227366681"
    },
    {
        "floor": 2,
        "room": "N103",
        "lat": "51.060819580723",
        "lng": "3.70872822685408"
    },
    {
        "floor": 2,
        "room": "L115",
        "lat": "51.0604051242537",
        "lng": "3.70912798032733"
    },
    {
        "floor": 2,
        "room": "L118",
        "lat": "51.0604232074923",
        "lng": "3.70920533810872"
    },
    {
        "floor": 2,
        "room": "L113",
        "lat": "51.0604500752483",
        "lng": "3.70916635250824"
    },
    {
        "floor": 2,
        "room": "L125",
        "lat": "51.0602923659074",
        "lng": "3.70909928349138"
    },
    {
        "floor": 2,
        "room": "L123",
        "lat": "51.0602418911225",
        "lng": "3.70917252314777"
    },
    {
        "floor": 2,
        "room": "L124",
        "lat": "51.060260565064",
        "lng": "3.70914872480188"
    },
    {
        "floor": 2,
        "room": "L129",
        "lat": "51.0602731638092",
        "lng": "3.70901206141762"
    },
    {
        "floor": 2,
        "room": "L130",
        "lat": "51.0602845967592",
        "lng": "3.70903190188986"
    },
    {
        "floor": 2,
        "room": "L134",
        "lat": "51.0601804186565",
        "lng": "3.70888152742144"
    },
    {
        "floor": 2,
        "room": "L146",
        "lat": "51.0602676698591",
        "lng": "3.70885287821763"
    },
    {
        "floor": 2,
        "room": "L131",
        "lat": "51.0601944670057",
        "lng": "3.70901471879594"
    },
    {
        "floor": 2,
        "room": "L138",
        "lat": "51.0601579465927",
        "lng": "3.70868772710127"
    },
    {
        "floor": 2,
        "room": "L140",
        "lat": "51.0601789414907",
        "lng": "3.70865726287863"
    },
    {
        "floor": 2,
        "room": "L136",
        "lat": "51.0601265279734",
        "lng": "3.70873331638156"
    },
    {
        "floor": 2,
        "room": "L135",
        "lat": "51.0601437488318",
        "lng": "3.70880467735569"
    },
    {
        "floor": 2,
        "room": "L144",
        "lat": "51.0602270465348",
        "lng": "3.70878238189488"
    },
    {
        "floor": 2,
        "room": "L142",
        "lat": "51.0602073329002",
        "lng": "3.70874817160086"
    },
    {
        "floor": 2,
        "room": "L110",
        "lat": "51.0604162497549",
        "lng": "3.70894690873325"
    },
    {
        "floor": 2,
        "room": "M113",
        "lat": "51.0603476464007",
        "lng": "3.70867545946033"
    },
    {
        "floor": 2,
        "room": "M118",
        "lat": "51.0603900642662",
        "lng": "3.70833352010412"
    },
    {
        "floor": 2,
        "room": "M117",
        "lat": "51.0603683397758",
        "lng": "3.70836504340696"
    },
    {
        "floor": 2,
        "room": "M126",
        "lat": "51.0605144196633",
        "lng": "3.70852194870622"
    },
    {
        "floor": 2,
        "room": "M122",
        "lat": "51.060451894293",
        "lng": "3.70850105691523"
    },
    {
        "floor": 2,
        "room": "M121",
        "lat": "51.0604630844225",
        "lng": "3.70845389478071"
    },
    {
        "floor": 2,
        "room": "M123",
        "lat": "51.0604873190746",
        "lng": "3.70849700742497"
    },
    {
        "floor": 2,
        "room": "M116",
        "lat": "51.0604993434811",
        "lng": "3.70845636586768"
    },
    {
        "floor": 2,
        "room": "M120",
        "lat": "51.0604823603996",
        "lng": "3.70840892785646"
    },
    {
        "floor": 2,
        "room": "M128",
        "lat": "51.0606065661207",
        "lng": "3.70870690396204"
    },
    {
        "floor": 2,
        "room": "M130",
        "lat": "51.0606341683784",
        "lng": "3.7087835505675"
    },
    {
        "floor": 2,
        "room": "M129",
        "lat": "51.060658342281",
        "lng": "3.70874074204746"
    },
    {
        "floor": 2,
        "room": "M132",
        "lat": "51.0605759657837",
        "lng": "3.70885587040973"
    },
    {
        "floor": 2,
        "room": "N104",
        "lat": "51.0607906680974",
        "lng": "3.70863574314695"
    },
    {
        "floor": 2,
        "room": "P114",
        "lat": "51.059655736199",
        "lng": "3.70754612804261"
    },
    {
        "floor": 2,
        "room": "P108a",
        "lat": "51.0597134490264",
        "lng": "3.70728146536951"
    },
    {
        "floor": 2,
        "room": "P125",
        "lat": "51.0593120371051",
        "lng": "3.70721226979391"
    },
    {
        "floor": 2,
        "room": "P109",
        "lat": "51.0595899819233",
        "lng": "3.70748636337126"
    },
    {
        "floor": 2,
        "room": "P107",
        "lat": "51.0597642048573",
        "lng": "3.70716483263281"
    },
    {
        "floor": 2,
        "room": "P104",
        "lat": "51.0597061159662",
        "lng": "3.70710563759705"
    },
    {
        "floor": 2,
        "room": "P105",
        "lat": "51.0597193833415",
        "lng": "3.70716526866692"
    },
    {
        "floor": 2,
        "room": "P102",
        "lat": "51.0596393272384",
        "lng": "3.70711637793244"
    },
    {
        "floor": 2,
        "room": "P124",
        "lat": "51.0593940647255",
        "lng": "3.70697609426913"
    },
    {
        "floor": 2,
        "room": "P120",
        "lat": "51.0595139368782",
        "lng": "3.70706387513045"
    },
    {
        "floor": 2,
        "room": "P122",
        "lat": "51.0594787869106",
        "lng": "3.707031786106"
    },
    {
        "floor": 2,
        "room": "P101",
        "lat": "51.0595347446737",
        "lng": "3.70702987155781"
    },
    {
        "floor": 2,
        "room": "P113",
        "lat": "51.0596478226493",
        "lng": "3.70751494312196"
    },
    {
        "floor": 2,
        "room": "P112",
        "lat": "51.0596255327646",
        "lng": "3.70749782275012"
    },
    {
        "floor": 2,
        "room": "P108b",
        "lat": "51.0596708801858",
        "lng": "3.70742101996661"
    },
    {
        "floor": 2,
        "room": "P115",
        "lat": "51.0595825734843",
        "lng": "3.70736971291189"
    },
    {
        "floor": 2,
        "room": "P116",
        "lat": "51.0596170650455",
        "lng": "3.70729117725308"
    },
    {
        "floor": 2,
        "room": "P106",
        "lat": "51.059711595757",
        "lng": "3.70718654308755"
    },
    {
        "floor": 2,
        "room": "P118",
        "lat": "51.0596377131433",
        "lng": "3.70718894693176"
    },
    {
        "floor": 2,
        "room": "P119",
        "lat": "51.0595683560115",
        "lng": "3.70711594872337"
    },
    {
        "floor": 2,
        "room": "P103",
        "lat": "51.0596491358364",
        "lng": "3.70729243803602"
    },
    {
        "floor": 2,
        "room": "P123",
        "lat": "51.0594405459688",
        "lng": "3.7070117946948"
    },
    {
        "floor": 2,
        "room": "P121",
        "lat": "51.0594952473003",
        "lng": "3.70704952033826"
    },
    {
        "floor": 2,
        "room": "P126",
        "lat": "51.0592037103756",
        "lng": "3.70724783565187"
    },
    {
        "floor": 2,
        "room": "P127",
        "lat": "51.0591543165411",
        "lng": "3.70720989806903"
    },
    {
        "floor": 2,
        "room": "P111",
        "lat": "51.0596312618295",
        "lng": "3.70752732979358"
    },
    {
        "floor": 2,
        "room": "P110",
        "lat": "51.0596083651438",
        "lng": "3.70750974335031"
    },
    {
        "floor": 2,
        "room": "P117",
        "lat": "51.0595918283404",
        "lng": "3.70727225914396"
    },
    {
        "floor": 2,
        "room": "F101",
        "lat": "51.0593529334936",
        "lng": "3.70789588691744"
    },
    {
        "floor": 2,
        "room": "F102",
        "lat": "51.05939021206",
        "lng": "3.70781279482241"
    },
    {
        "floor": 2,
        "room": "W105",
        "lat": "51.0619292908275",
        "lng": "3.70703362246931"
    },
    {
        "floor": 2,
        "room": "W103",
        "lat": "51.0619792928903",
        "lng": "3.70705464466872"
    },
    {
        "floor": 2,
        "room": "W104",
        "lat": "51.0619501902635",
        "lng": "3.70701309757191"
    },
    {
        "floor": 2,
        "room": "W101",
        "lat": "51.0619523900409",
        "lng": "3.70706961275678"
    },
    {
        "floor": 2,
        "room": "W102",
        "lat": "51.0619736259736",
        "lng": "3.70709928340218"
    },
    {
        "floor": 2,
        "room": "C104",
        "lat": "51.0613492329041",
        "lng": "3.70691501982154"
    },
    {
        "floor": 2,
        "room": "C112",
        "lat": "51.0614002748617",
        "lng": "3.70675430308911"
    },
    {
        "floor": 2,
        "room": "C101",
        "lat": "51.061304879673",
        "lng": "3.70686916691935"
    },
    {
        "floor": 2,
        "room": "C103",
        "lat": "51.0613321631852",
        "lng": "3.70691978253055"
    },
    {
        "floor": 2,
        "room": "C103a",
        "lat": "51.0613400216287",
        "lng": "3.70693350604191"
    },
    {
        "floor": 2,
        "room": "C102",
        "lat": "51.0612215293773",
        "lng": "3.70709897197689"
    },
    {
        "floor": 2,
        "room": "C106",
        "lat": "51.0612684155978",
        "lng": "3.70687717794753"
    },
    {
        "floor": 2,
        "room": "C105",
        "lat": "51.0613122415403",
        "lng": "3.70695371282937"
    },
    {
        "floor": 2,
        "room": "C108",
        "lat": "51.0613624193552",
        "lng": "3.70689085567749"
    },
    {
        "floor": 2,
        "room": "C109",
        "lat": "51.0613821104507",
        "lng": "3.70686246151892"
    },
    {
        "floor": 2,
        "room": "C110",
        "lat": "51.061402001111",
        "lng": "3.70683377955744"
    },
    {
        "floor": 2,
        "room": "C111",
        "lat": "51.0614217741947",
        "lng": "3.70680266520987"
    },
    {
        "floor": 2,
        "room": "C107a",
        "lat": "51.061361382737",
        "lng": "3.7067790718464"
    },
    {
        "floor": 2,
        "room": "C107",
        "lat": "51.0613780668497",
        "lng": "3.70680820789018"
    },
    {
        "floor": 2,
        "room": "E120",
        "lat": "51.0605485185029",
        "lng": "3.70801384565499"
    },
    {
        "floor": 2,
        "room": "E122",
        "lat": "51.0604933405399",
        "lng": "3.7081013751683"
    }
];
google.maps.event.addDomListener(window, 'load', initialize);

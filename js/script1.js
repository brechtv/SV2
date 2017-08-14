var map, streetview, overlay, pano, globalpano, neighbourpano;
var room_markers = [];
// initialize map & streetView
// add KML overlay
// add markers


function initialize() {

    neighbourpano_from_2 = localStorage.getItem("neighbourpano_from_2_to_1");

    if (neighbourpano_from_2 != null) {
        loadSV(neighbourpano_from_2);
        } else {
            loadSV("pano00001");
        }
    }

function loadSV(initpano) {

    // initialize streetView
    streetView = new google.maps.StreetViewPanorama(
        document.getElementById('canvas'), {
            pano: initpano,
            visible: true,
            panoProvider: getCustomPanorama,
            motionTracking: false
        });

    // initialize map - set mapStyle
    map = new google.maps.Map(
        document.getElementById('map'), {
            center: pano00001.location.latLng,
            zoom: 18,
            streetView: streetView,
            streetViewControl: true,
            styles: mapStyle
        });

    // add a listener to streetview so the map changes center when streetview changes
    streetView.addListener('position_changed', function() {
        map.panTo({
            lat: streetView.position.lat(),
            lng: streetView.position.lng()
        });

        // save current pano to localStorage, clear old storage
        localStorage.clear(); // remove previously stored pano
        globalpano = streetView.getPano(); // get current pano
        neighbours = returnNeighbour(globalpano).neighbours;
        neighbour_to_2 = (typeof neighbours != 'undefined' ? neighbours[0].up : undefined);
        localStorage.setItem("neighbourpano_from_1_to_2", neighbour_to_2);

        function returnNeighbour(pano) {
            try {
                return getCustomPanorama(pano)
            } catch (err) {
                return false
            }
        }

    });

    // add KML layer for buildings
    var KMLLayer = new google.maps.KmlLayer({
        url: 'https://storage.googleapis.com/brechtv/SV%202/files/Final/GV.kml',
        map: map,
        preserveViewport: true
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


    createMarker(pano00001.location.latLng, map, pano00001.location.description, pano00001.location.pano);
    createMarker(pano00002.location.latLng, map, pano00002.location.description, pano00002.location.pano);
    createMarker(pano00003.location.latLng, map, pano00003.location.description, pano00003.location.pano);
    createMarker(pano00004.location.latLng, map, pano00004.location.description, pano00004.location.pano);
    createMarker(pano00005.location.latLng, map, pano00005.location.description, pano00005.location.pano);
    createMarker(pano00006.location.latLng, map, pano00006.location.description, pano00006.location.pano);
    createMarker(pano00007.location.latLng, map, pano00007.location.description, pano00007.location.pano);
    createMarker(pano00008.location.latLng, map, pano00008.location.description, pano00008.location.pano);
    createMarker(pano00009.location.latLng, map, pano00009.location.description, pano00009.location.pano);
    createMarker(pano00010.location.latLng, map, pano00010.location.description, pano00010.location.pano);
    createMarker(pano00011.location.latLng, map, pano00011.location.description, pano00011.location.pano);
    createMarker(pano00012.location.latLng, map, pano00012.location.description, pano00012.location.pano);
    createMarker(pano00013.location.latLng, map, pano00013.location.description, pano00013.location.pano);
    createMarker(pano00014.location.latLng, map, pano00014.location.description, pano00014.location.pano);
    createMarker(pano00015.location.latLng, map, pano00015.location.description, pano00015.location.pano);
    createMarker(pano00016.location.latLng, map, pano00016.location.description, pano00016.location.pano);
    createMarker(pano00017.location.latLng, map, pano00017.location.description, pano00017.location.pano);
    createMarker(pano00018.location.latLng, map, pano00018.location.description, pano00018.location.pano);
    createMarker(pano00019.location.latLng, map, pano00019.location.description, pano00019.location.pano);
    createMarker(pano00020.location.latLng, map, pano00020.location.description, pano00020.location.pano);
    createMarker(pano00021.location.latLng, map, pano00021.location.description, pano00021.location.pano);
    createMarker(pano00022.location.latLng, map, pano00022.location.description, pano00022.location.pano);
    createMarker(pano00023.location.latLng, map, pano00023.location.description, pano00023.location.pano);
    createMarker(pano01000.location.latLng, map, pano01000.location.description, pano01000.location.pano);
    createMarker(pano01001.location.latLng, map, pano01001.location.description, pano01001.location.pano);
    createMarker(pano01002.location.latLng, map, pano01002.location.description, pano01002.location.pano);
    createMarker(pano01003.location.latLng, map, pano01003.location.description, pano01003.location.pano);
    createMarker(pano01004.location.latLng, map, pano01004.location.description, pano01004.location.pano);
    createMarker(pano01005.location.latLng, map, pano01005.location.description, pano01005.location.pano);
    createMarker(pano02000.location.latLng, map, pano02000.location.description, pano02000.location.pano);
    createMarker(pano02001.location.latLng, map, pano02001.location.description, pano02001.location.pano);
    createMarker(pano02002.location.latLng, map, pano02002.location.description, pano02002.location.pano);
    createMarker(pano02003.location.latLng, map, pano02003.location.description, pano02003.location.pano);
    createMarker(pano02004.location.latLng, map, pano02004.location.description, pano02004.location.pano);
    createMarker(pano02005.location.latLng, map, pano02005.location.description, pano02005.location.pano);
    createMarker(pano03000.location.latLng, map, pano03000.location.description, pano03000.location.pano);
    createMarker(pano03001.location.latLng, map, pano03001.location.description, pano03001.location.pano);
    createMarker(pano03002.location.latLng, map, pano03002.location.description, pano03002.location.pano);
    createMarker(pano03003.location.latLng, map, pano03003.location.description, pano03003.location.pano);
    createMarker(pano04000.location.latLng, map, pano04000.location.description, pano04000.location.pano);
    createMarker(pano04001.location.latLng, map, pano04001.location.description, pano04001.location.pano);
    createMarker(pano04002.location.latLng, map, pano04002.location.description, pano04002.location.pano);
    createMarker(pano04003.location.latLng, map, pano04003.location.description, pano04003.location.pano);
    createMarker(pano04004.location.latLng, map, pano04004.location.description, pano04004.location.pano);
    createMarker(pano04005.location.latLng, map, pano04005.location.description, pano04005.location.pano);
    createMarker(pano04006.location.latLng, map, pano04006.location.description, pano04006.location.pano);
    createMarker(pano04007.location.latLng, map, pano04007.location.description, pano04007.location.pano);
    createMarker(pano04008.location.latLng, map, pano04008.location.description, pano04008.location.pano);
    createMarker(pano04009.location.latLng, map, pano04009.location.description, pano04009.location.pano);
    createMarker(pano04010.location.latLng, map, pano04010.location.description, pano04010.location.pano);
    createMarker(pano04011.location.latLng, map, pano04011.location.description, pano04011.location.pano);
    createMarker(pano04012.location.latLng, map, pano04012.location.description, pano04012.location.pano);
    createMarker(pano04013.location.latLng, map, pano04013.location.description, pano04013.location.pano);
    createMarker(pano04014.location.latLng, map, pano04014.location.description, pano04014.location.pano);
    createMarker(pano04015.location.latLng, map, pano04015.location.description, pano04015.location.pano);
    createMarker(pano04016.location.latLng, map, pano04016.location.description, pano04016.location.pano);
    createMarker(pano04017.location.latLng, map, pano04017.location.description, pano04017.location.pano);
    createMarker(pano04018.location.latLng, map, pano04018.location.description, pano04018.location.pano);
    createMarker(pano04019.location.latLng, map, pano04019.location.description, pano04019.location.pano);
    createMarker(pano05000.location.latLng, map, pano05000.location.description, pano05000.location.pano);
    createMarker(pano05001.location.latLng, map, pano05001.location.description, pano05001.location.pano);
    createMarker(pano05002.location.latLng, map, pano05002.location.description, pano05002.location.pano);
    createMarker(pano05003.location.latLng, map, pano05003.location.description, pano05003.location.pano);
    createMarker(pano05004.location.latLng, map, pano05004.location.description, pano05004.location.pano);
    createMarker(pano05005.location.latLng, map, pano05005.location.description, pano05005.location.pano);
    createMarker(pano05006.location.latLng, map, pano05006.location.description, pano05006.location.pano);
    createMarker(pano05007.location.latLng, map, pano05007.location.description, pano05007.location.pano);
    createMarker(pano05008.location.latLng, map, pano05008.location.description, pano05008.location.pano);
    createMarker(pano05009.location.latLng, map, pano05009.location.description, pano05009.location.pano);
    createMarker(pano05010.location.latLng, map, pano05010.location.description, pano05010.location.pano);
    createMarker(pano05011.location.latLng, map, pano05011.location.description, pano05011.location.pano);
    createMarker(pano05012.location.latLng, map, pano05012.location.description, pano05012.location.pano);
    createMarker(pano05013.location.latLng, map, pano05013.location.description, pano05013.location.pano);
    createMarker(pano05014.location.latLng, map, pano05014.location.description, pano05014.location.pano);
    createMarker(pano05015.location.latLng, map, pano05015.location.description, pano05015.location.pano);
    createMarker(pano05016.location.latLng, map, pano05016.location.description, pano05016.location.pano);
    createMarker(pano05017.location.latLng, map, pano05017.location.description, pano05017.location.pano);
    createMarker(pano05018.location.latLng, map, pano05018.location.description, pano05018.location.pano);
    createMarker(pano06000.location.latLng, map, pano06000.location.description, pano06000.location.pano);
    createMarker(pano06001.location.latLng, map, pano06001.location.description, pano06001.location.pano);
    createMarker(pano06002.location.latLng, map, pano06002.location.description, pano06002.location.pano);
    createMarker(pano06003.location.latLng, map, pano06003.location.description, pano06003.location.pano);
    createMarker(pano06004.location.latLng, map, pano06004.location.description, pano06004.location.pano);
    createMarker(pano06005.location.latLng, map, pano06005.location.description, pano06005.location.pano);
    createMarker(pano06006.location.latLng, map, pano06006.location.description, pano06006.location.pano);
    createMarker(pano07000.location.latLng, map, pano07000.location.description, pano07000.location.pano);
    createMarker(pano07001.location.latLng, map, pano07001.location.description, pano07001.location.pano);
    createMarker(pano07002.location.latLng, map, pano07002.location.description, pano07002.location.pano);
    createMarker(pano07003.location.latLng, map, pano07003.location.description, pano07003.location.pano);
    createMarker(pano07004.location.latLng, map, pano07004.location.description, pano07004.location.pano);
    createMarker(pano07005.location.latLng, map, pano07005.location.description, pano07005.location.pano);
    createMarker(pano07006.location.latLng, map, pano07006.location.description, pano07006.location.pano);
    createMarker(pano08000.location.latLng, map, pano08000.location.description, pano08000.location.pano);
    createMarker(pano08001.location.latLng, map, pano08001.location.description, pano08001.location.pano);
    createMarker(pano08002.location.latLng, map, pano08002.location.description, pano08002.location.pano);
    createMarker(pano08003.location.latLng, map, pano08003.location.description, pano08003.location.pano);
    createMarker(pano08004.location.latLng, map, pano08004.location.description, pano08004.location.pano);
    createMarker(pano08005.location.latLng, map, pano08005.location.description, pano08005.location.pano);
    createMarker(pano09000.location.latLng, map, pano09000.location.description, pano09000.location.pano);
    createMarker(pano10000.location.latLng, map, pano10000.location.description, pano10000.location.pano);
    createMarker(pano10001.location.latLng, map, pano10001.location.description, pano10001.location.pano);
    createMarker(pano10002.location.latLng, map, pano10002.location.description, pano10002.location.pano);
    createMarker(pano10003.location.latLng, map, pano10003.location.description, pano10003.location.pano);
    createMarker(pano10004.location.latLng, map, pano10004.location.description, pano10004.location.pano);
    createMarker(pano10005.location.latLng, map, pano10005.location.description, pano10005.location.pano);
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
    createMarker(pano12000.location.latLng, map, pano12000.location.description, pano12000.location.pano);
    createMarker(pano12001.location.latLng, map, pano12001.location.description, pano12001.location.pano);
    createMarker(pano12002.location.latLng, map, pano12002.location.description, pano12002.location.pano);
    createMarker(pano12003.location.latLng, map, pano12003.location.description, pano12003.location.pano);
    createMarker(pano12004.location.latLng, map, pano12004.location.description, pano12004.location.pano);
    createMarker(pano12005.location.latLng, map, pano12005.location.description, pano12005.location.pano);
    createMarker(pano12006.location.latLng, map, pano12006.location.description, pano12006.location.pano);
    createMarker(pano12007.location.latLng, map, pano12007.location.description, pano12007.location.pano);
    createMarker(pano13000.location.latLng, map, pano13000.location.description, pano13000.location.pano);
    createMarker(pano13001.location.latLng, map, pano13001.location.description, pano13001.location.pano);
    createMarker(pano13002.location.latLng, map, pano13002.location.description, pano13002.location.pano);
    createMarker(pano13003.location.latLng, map, pano13003.location.description, pano13003.location.pano);
    createMarker(pano13004.location.latLng, map, pano13004.location.description, pano13004.location.pano);
    createMarker(pano13005.location.latLng, map, pano13005.location.description, pano13005.location.pano);
    createMarker(pano13006.location.latLng, map, pano13006.location.description, pano13006.location.pano);
    createMarker(pano13007.location.latLng, map, pano13007.location.description, pano13007.location.pano);
    createMarker(pano13008.location.latLng, map, pano13008.location.description, pano13008.location.pano);


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
    return "https://storage.googleapis.com/brechtv/SV%202/images/Gelijkvloers/" + pano + '.JPG';
}

function getCustomPanorama(pano, zoom, tileX, tileY) {
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
        heading: 205
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
        latLng: new google.maps.LatLng(51.05881159,3.70873985)
    },
    links: [{
        description: "Naar blok F, P",
        pano: "pano00015",
        heading: 27
    },{
        description: "Naar cafetaria",
        pano: "pano06006",
        heading: 190
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
    neighbours: [{
        up: 'pano01003'
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
    neighbours: [{
        up: 'pano01003'
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
    neighbours: [{
        up: 'pano01002'
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
    neighbours: [{
        up: 'pano01002'
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
    neighbours: [{
        up: 'pano01000'
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
    neighbours: [{
        up: 'pano02000'
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
    neighbours: [{
        up: 'pano02001'
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
    neighbours: [{
        up: 'pano02014'
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
    neighbours: [{
        up: 'pano02011'
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
    neighbours: [{
        up: 'pano02013'
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
    neighbours: [{
        up: 'pano03006'
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
    neighbours: [{
        up: 'pano03000'
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
    neighbours: [{
        up: 'pano03000'
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
    neighbours: [{
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
        heading: 20
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
    neighbours: [{
        up: 'pano07001'
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
    neighbours: [{
        up: 'pano07000'
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
    neighbours: [{
        up: 'pano07000'
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
    neighbours: [{
        up: 'pano07002'
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
    neighbours: [{
        up: 'pano07007'
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
    neighbours: [{
        up: 'pano07008'
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
    neighbours: [{
        up: 'pano07011'
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
        heading: 40
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
        centerHeading: 340,
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
    neighbours: [{
        up: 'pano11010'
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
    neighbours: [{
        up: 'pano11010'
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
    neighbours: [{
        up: 'pano11001'
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
    neighbours: [{
        up: 'pano11002'
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
    neighbours: [{
        up: 'pano11003'
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
    neighbours: [{
        up: 'pano11004'
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
    neighbours: [{
        up: 'pano11004'
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
    neighbours: [{
        up: 'pano11005'
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
    neighbours: [{
        up: 'pano11006'
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
    neighbours: [{
        up: 'pano11008'
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
    neighbours: [{
        up: 'pano11009'
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
    neighbours: [{
        up: 'pano12003'
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
    neighbours: [{
        up: 'pano12002'
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
    neighbours: [{
        up: 'pano12005'
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
    neighbours: [{
        up: 'pano12006'
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
    neighbours: [{
        up: 'pano12001'
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
    neighbours: [{
        up: 'pano12000'
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
    neighbours: [{
        up: 'pano12007'
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
    neighbours: [{
        up: 'pano12007'
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
    neighbours: [{
        up: 'pano13006'
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
    neighbours: [{
        up: 'pano13006'
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
    neighbours: [{
        up: 'pano13004'
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
    neighbours: [{
        up: 'pano13004'
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
    neighbours: [{
        up: 'pano13003'
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
    neighbours: [{
        up: 'pano13003'
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
    neighbours: [{
        up: 'pano13002'
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
    neighbours: [{
        up: 'pano13000'
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
    neighbours: [{
        up: 'pano13011'
    }],
    copyright: 'KU Leuven',
    tiles: {
        tileSize: new google.maps.Size(4608, 2305),
        worldSize: new google.maps.Size(4608, 2305),
        centerHeading: 11,
        getTileUrl: getCustomPanoramaTileUrl
    }
};
var ROOMS = [
    {
        "floor": 1,
        "room": "E031",
        "lat": 51.0604143975232,
        "lng": 3.70889572280189
    },
    {
        "floor": 1,
        "room": "E030",
        "lat": 51.0603205277398,
        "lng": 3.70903107415896
    },
    {
        "floor": 1,
        "room": "E032",
        "lat": 51.060497540458,
        "lng": 3.70905057420012
    },
    {
        "floor": 1,
        "room": "E028",
        "lat": 51.0604071631832,
        "lng": 3.70918088939289
    },
    {
        "floor": 1,
        "room": "E027",
        "lat": 51.0603182547642,
        "lng": 3.70937226632947
    },
    {
        "floor": 1,
        "room": "E035",
        "lat": 51.0603706133757,
        "lng": 3.70943522266472
    },
    {
        "floor": 1,
        "room": "E034",
        "lat": 51.0604853358664,
        "lng": 3.70931375191448
    },
    {
        "floor": 1,
        "room": "E033",
        "lat": 51.0605745656897,
        "lng": 3.70918509148325
    },
    {
        "floor": 1,
        "room": "E003d",
        "lat": 51.0604041416347,
        "lng": 3.70969729691208
    },
    {
        "floor": 1,
        "room": "E003",
        "lat": 51.0603514849125,
        "lng": 3.70977322136084
    },
    {
        "floor": 1,
        "room": "D015",
        "lat": 51.0607383634768,
        "lng": 3.70900737089541
    },
    {
        "floor": 1,
        "room": "D017",
        "lat": 51.0608003002278,
        "lng": 3.70891806317255
    },
    {
        "floor": 1,
        "room": "D019",
        "lat": 51.0608622369097,
        "lng": 3.70882875521325
    },
    {
        "floor": 1,
        "room": "D021",
        "lat": 51.0609241735227,
        "lng": 3.70873944701753
    },
    {
        "floor": 1,
        "room": "D023",
        "lat": 51.0609861100666,
        "lng": 3.70865013858537
    },
    {
        "floor": 1,
        "room": "D014",
        "lat": 51.0606651824914,
        "lng": 3.708880840024
    },
    {
        "floor": 1,
        "room": "D016",
        "lat": 51.0607171400995,
        "lng": 3.70880592129317
    },
    {
        "floor": 1,
        "room": "D018",
        "lat": 51.0607690976591,
        "lng": 3.70873100239596
    },
    {
        "floor": 1,
        "room": "D027",
        "lat": 51.0610255887776,
        "lng": 3.70836019432591
    },
    {
        "floor": 1,
        "room": "D029",
        "lat": 51.061105354145,
        "lng": 3.70824517640436
    },
    {
        "floor": 1,
        "room": "D030",
        "lat": 51.0611777849264,
        "lng": 3.70814073434769
    },
    {
        "floor": 1,
        "room": "D035",
        "lat": 51.0611511268229,
        "lng": 3.70841122992558
    },
    {
        "floor": 1,
        "room": "D034",
        "lat": 51.0612130631132,
        "lng": 3.70832192062578
    },
    {
        "floor": 1,
        "room": "D032",
        "lat": 51.0613237414001,
        "lng": 3.70814613672902
    },
    {
        "floor": 1,
        "room": "D025",
        "lat": 51.0611402341464,
        "lng": 3.70830609041639
    },
    {
        "floor": 1,
        "room": "D033",
        "lat": 51.0613622253473,
        "lng": 3.70818359830271
    },
    {
        "floor": 1,
        "room": "D040",
        "lat": 51.0609232176194,
        "lng": 3.70837549457863
    },
    {
        "floor": 1,
        "room": "D005",
        "lat": 51.0606193447218,
        "lng": 3.70896093152089
    },
    {
        "floor": 1,
        "room": "D003a",
        "lat": 51.060580173098,
        "lng": 3.70889252224346
    },
    {
        "floor": 1,
        "room": "D003",
        "lat": 51.0605484670244,
        "lng": 3.70883715092918
    },
    {
        "floor": 1,
        "room": "D002",
        "lat": 51.0605077656946,
        "lng": 3.70868679510033
    },
    {
        "floor": 1,
        "room": "D048",
        "lat": 51.0607008237273,
        "lng": 3.70849871552535
    },
    {
        "floor": 1,
        "room": "D049",
        "lat": 51.0606285756339,
        "lng": 3.70860289228398
    },
    {
        "floor": 1,
        "room": "D050",
        "lat": 51.060561354812,
        "lng": 3.70848549914726
    },
    {
        "floor": 1,
        "room": "D047",
        "lat": 51.0607469077116,
        "lng": 3.70846142261403
    },
    {
        "floor": 1,
        "room": "D046",
        "lat": 51.0607647202367,
        "lng": 3.70843573806181
    },
    {
        "floor": 1,
        "room": "D045",
        "lat": 51.0607289858623,
        "lng": 3.70841845827894
    },
    {
        "floor": 1,
        "room": "D045a",
        "lat": 51.060746798378,
        "lng": 3.70839277372021
    },
    {
        "floor": 1,
        "room": "D044",
        "lat": 51.0607652362374,
        "lng": 3.70838064259683
    },
    {
        "floor": 1,
        "room": "D044a",
        "lat": 51.0607866961669,
        "lng": 3.70841811980087
    },
    {
        "floor": 1,
        "room": "D043",
        "lat": 51.0607994828043,
        "lng": 3.70835645521471
    },
    {
        "floor": 1,
        "room": "D041",
        "lat": 51.0608322804223,
        "lng": 3.70830916288148
    },
    {
        "floor": 1,
        "room": "D042",
        "lat": 51.0607183739287,
        "lng": 3.7083756924753
    },
    {
        "floor": 1,
        "room": "C002",
        "lat": 51.0606619478218,
        "lng": 3.70829930161147
    },
    {
        "floor": 1,
        "room": "C001",
        "lat": 51.0607604309379,
        "lng": 3.70815924583321
    },
    {
        "floor": 1,
        "room": "E029",
        "lat": 51.060408420348,
        "lng": 3.70903908562698
    },
    {
        "floor": 1,
        "room": "E021",
        "lat": 51.0601602672568,
        "lng": 3.70932579729818
    },
    {
        "floor": 1,
        "room": "E023",
        "lat": 51.0602480917143,
        "lng": 3.70952053582042
    },
    {
        "floor": 1,
        "room": "E023d",
        "lat": 51.0603538849073,
        "lng": 3.7095796197801
    },
    {
        "floor": 1,
        "room": "E008",
        "lat": 51.0603570298185,
        "lng": 3.70963548830399
    },
    {
        "floor": 1,
        "room": "D006",
        "lat": 51.06071730841,
        "lng": 3.70922046608917
    },
    {
        "floor": 1,
        "room": "D006a",
        "lat": 51.0607775387111,
        "lng": 3.70924886930305
    },
    {
        "floor": 1,
        "room": "D006b",
        "lat": 51.0607710307994,
        "lng": 3.7093311508085
    },
    {
        "floor": 1,
        "room": "E036",
        "lat": 51.060683033716,
        "lng": 3.70932507413173
    },
    {
        "floor": 1,
        "room": "D020",
        "lat": 51.0608091247874,
        "lng": 3.70867607922882
    },
    {
        "floor": 1,
        "room": "D020a",
        "lat": 51.0608344216309,
        "lng": 3.70863960290967
    },
    {
        "floor": 1,
        "room": "D022",
        "lat": 51.0608610822628,
        "lng": 3.70860116004015
    },
    {
        "floor": 1,
        "room": "D022a",
        "lat": 51.0608863790826,
        "lng": 3.70856468363999
    },
    {
        "floor": 1,
        "room": "D024",
        "lat": 51.0609130396896,
        "lng": 3.7085262406851
    },
    {
        "floor": 1,
        "room": "D024a",
        "lat": 51.0609383364858,
        "lng": 3.70848976420392
    },
    {
        "floor": 1,
        "room": "D026",
        "lat": 51.0609893125719,
        "lng": 3.70841625953789
    },
    {
        "floor": 1,
        "room": "D039",
        "lat": 51.0610569049562,
        "lng": 3.70851075822997
    },
    {
        "floor": 1,
        "room": "D036",
        "lat": 51.0610978521545,
        "lng": 3.7084517145591
    },
    {
        "floor": 1,
        "room": "D038",
        "lat": 51.0610900991627,
        "lng": 3.70855078188198
    },
    {
        "floor": 1,
        "room": "D037",
        "lat": 51.0611205278351,
        "lng": 3.70850690539296
    },
    {
        "floor": 1,
        "room": "D052",
        "lat": 51.0609096437931,
        "lng": 3.70826323409373
    },
    {
        "floor": 1,
        "room": "D053",
        "lat": 51.060880929014,
        "lng": 3.70821308724987
    },
    {
        "floor": 1,
        "room": "D054",
        "lat": 51.0609282150835,
        "lng": 3.70820658102868
    },
    {
        "floor": 1,
        "room": "D055",
        "lat": 51.060945851325,
        "lng": 3.70815561275801
    },
    {
        "floor": 1,
        "room": "D056",
        "lat": 51.0609164420382,
        "lng": 3.70810425315205
    },
    {
        "floor": 1,
        "room": "D057",
        "lat": 51.0608907960973,
        "lng": 3.708141233447
    },
    {
        "floor": 1,
        "room": "C010",
        "lat": 51.0608396256328,
        "lng": 3.7079710579735
    },
    {
        "floor": 1,
        "room": "C011",
        "lat": 51.0608067491621,
        "lng": 3.70804207468321
    },
    {
        "floor": 1,
        "room": "C003",
        "lat": 51.0607789688133,
        "lng": 3.70810937067433
    },
    {
        "floor": 1,
        "room": "C005",
        "lat": 51.0608168575673,
        "lng": 3.70815740321291
    },
    {
        "floor": 1,
        "room": "C006",
        "lat": 51.0608474597331,
        "lng": 3.70811327634775
    },
    {
        "floor": 1,
        "room": "C008",
        "lat": 51.0608880895025,
        "lng": 3.7080525699235
    },
    {
        "floor": 1,
        "room": "C012",
        "lat": 51.0608089420814,
        "lng": 3.70807697806026
    },
    {
        "floor": 1,
        "room": "C004",
        "lat": 51.0608667526996,
        "lng": 3.70808333666308
    },
    {
        "floor": 1,
        "room": "C009",
        "lat": 51.0608663054984,
        "lng": 3.70802905152236
    },
    {
        "floor": 1,
        "room": "E004",
        "lat": 51.0602918442481,
        "lng": 3.70978052733968
    },
    {
        "floor": 1,
        "room": "E018",
        "lat": 51.0600753304496,
        "lng": 3.70938076946733
    },
    {
        "floor": 1,
        "room": "E021a",
        "lat": 51.0601467335071,
        "lng": 3.70921991699763
    },
    {
        "floor": 1,
        "room": "E013",
        "lat": 51.0601689220417,
        "lng": 3.70958207989013
    },
    {
        "floor": 1,
        "room": "E012",
        "lat": 51.0601936156375,
        "lng": 3.7096252051546
    },
    {
        "floor": 1,
        "room": "E031b",
        "lat": 51.0603080314438,
        "lng": 3.70980879711891
    },
    {
        "floor": 1,
        "room": "E002",
        "lat": 51.0603370470738,
        "lng": 3.70985947092021
    },
    {
        "floor": 1,
        "room": "E023f",
        "lat": 51.060218720096,
        "lng": 3.70946749097963
    },
    {
        "floor": 1,
        "room": "E023e",
        "lat": 51.0602564245699,
        "lng": 3.70941312554629
    },
    {
        "floor": 1,
        "room": "E023a",
        "lat": 51.0602515249355,
        "lng": 3.70961879934812
    },
    {
        "floor": 1,
        "room": "E023b",
        "lat": 51.0602682089729,
        "lng": 3.70964793667326
    },
    {
        "floor": 1,
        "room": "E003a",
        "lat": 51.0604060390896,
        "lng": 3.70983943731854
    },
    {
        "floor": 1,
        "room": "E003b",
        "lat": 51.0604437603646,
        "lng": 3.70978504798607
    },
    {
        "floor": 1,
        "room": "E003c",
        "lat": 51.060473498283,
        "lng": 3.70974216956162
    },
    {
        "floor": 1,
        "room": "D007",
        "lat": 51.0606861477014,
        "lng": 3.70912563954125
    },
    {
        "floor": 1,
        "room": "D011",
        "lat": 51.0606530283054,
        "lng": 3.70906557235965
    },
    {
        "floor": 1,
        "room": "D012",
        "lat": 51.0606669324903,
        "lng": 3.7090455237616
    },
    {
        "floor": 1,
        "room": "D010",
        "lat": 51.0606799385549,
        "lng": 3.70902677015791
    },
    {
        "floor": 1,
        "room": "D009",
        "lat": 51.060680311807,
        "lng": 3.70907228326492
    },
    {
        "floor": 1,
        "room": "D008",
        "lat": 51.0607188517133,
        "lng": 3.70913958978395
    },
    {
        "floor": 1,
        "room": "D051",
        "lat": 51.0608826879336,
        "lng": 3.70839369383057
    },
    {
        "floor": 1,
        "room": "E001",
        "lat": 51.0603545259869,
        "lng": 3.70992244969815
    },
    {
        "floor": 1,
        "room": "E000",
        "lat": 51.0603741134734,
        "lng": 3.70989397912718
    },
    {
        "floor": 1,
        "room": "D028",
        "lat": 51.0610779907983,
        "lng": 3.70832115525431
    },
    {
        "floor": 1,
        "room": "D031",
        "lat": 51.0612445965477,
        "lng": 3.70804439460537
    },
    {
        "floor": 1,
        "room": "E024",
        "lat": 51.0602370179315,
        "lng": 3.70928802913208
    },
    {
        "floor": 1,
        "room": "E026",
        "lat": 51.060271779203,
        "lng": 3.70923790719288
    },
    {
        "floor": 1,
        "room": "E020",
        "lat": 51.0600012079364,
        "lng": 3.70928992579156
    },
    {
        "floor": 1,
        "room": "E020a",
        "lat": 51.059934209468,
        "lng": 3.70931126729743
    },
    {
        "floor": 1,
        "room": "E020b",
        "lat": 51.0599512238544,
        "lng": 3.70928673460914
    },
    {
        "floor": 1,
        "room": "E025",
        "lat": 51.0599773214599,
        "lng": 3.70938141422173
    },
    {
        "floor": 1,
        "room": "E019",
        "lat": 51.060032143287,
        "lng": 3.70920523268215
    },
    {
        "floor": 1,
        "room": "E011",
        "lat": 51.0602227159434,
        "lng": 3.70967623856765
    },
    {
        "floor": 1,
        "room": "E009",
        "lat": 51.0602501057453,
        "lng": 3.70972280004835
    },
    {
        "floor": 1,
        "room": "E023c",
        "lat": 51.0603086460977,
        "lng": 3.709644848672
    },
    {
        "floor": 1,
        "room": "E035a",
        "lat": 51.0603849865675,
        "lng": 3.70953477484375
    },
    {
        "floor": 1,
        "room": "E006",
        "lat": 51.060472193692,
        "lng": 3.70955386992625
    },
    {
        "floor": 1,
        "room": "E007",
        "lat": 51.060535037784,
        "lng": 3.70958111135152
    },
    {
        "floor": 1,
        "room": "D004",
        "lat": 51.0606232484503,
        "lng": 3.70905619869452
    },
    {
        "floor": 1,
        "room": "D013",
        "lat": 51.0608154452041,
        "lng": 3.70877906667718
    },
    {
        "floor": 1,
        "room": "D001",
        "lat": 51.0605152700289,
        "lng": 3.70888501816299
    },
    {
        "floor": 1,
        "room": "E010",
        "lat": 51.0603338777566,
        "lng": 3.7092559525094
    },
    {
        "floor": 1,
        "room": "D031a",
        "lat": 51.0612907182441,
        "lng": 3.70809132187468
    },
    {
        "floor": 1,
        "room": "E005",
        "lat": 51.0604787871016,
        "lng": 3.70961413861028
    },
    {
        "floor": 1,
        "room": "E005a",
        "lat": 51.0605044753992,
        "lng": 3.70960815743316
    },
    {
        "floor": 1,
        "room": "E005d",
        "lat": 51.0604722914992,
        "lng": 3.7096545628588
    },
    {
        "floor": 1,
        "room": "E005b",
        "lat": 51.0605310665704,
        "lng": 3.7096545970259
    },
    {
        "floor": 1,
        "room": "E005c",
        "lat": 51.0604988826524,
        "lng": 3.70970100244597
    },
    {
        "floor": 1,
        "room": "E005e",
        "lat": 51.0604390656013,
        "lng": 3.70960309712653
    },
    {
        "floor": 1,
        "room": "E017",
        "lat": 51.0600393242371,
        "lng": 3.70944428440496
    },
    {
        "floor": 1,
        "room": "E010",
        "lat": 51.0601245479295,
        "lng": 3.70956611537091
    },
    {
        "floor": 1,
        "room": "E015",
        "lat": 51.0600305864138,
        "lng": 3.7095783106859
    },
    {
        "floor": 1,
        "room": "E016",
        "lat": 51.0599993658448,
        "lng": 3.7095004212026
    },
    {
        "floor": 1,
        "room": "E014",
        "lat": 51.0600609500185,
        "lng": 3.70962883623875
    },
    {
        "floor": 1,
        "room": "E037",
        "lat": 51.0600868154348,
        "lng": 3.70950610926924
    },
    {
        "floor": 1,
        "room": "B035",
        "lat": 51.0604030501054,
        "lng": 3.7073778671795
    },
    {
        "floor": 1,
        "room": "B018",
        "lat": 51.0604486349996,
        "lng": 3.7072325868865
    },
    {
        "floor": 1,
        "room": "B022",
        "lat": 51.0605162644678,
        "lng": 3.70713971599441
    },
    {
        "floor": 1,
        "room": "B024",
        "lat": 51.0605096392372,
        "lng": 3.70722582130467
    },
    {
        "floor": 1,
        "room": "B021",
        "lat": 51.0605409058252,
        "lng": 3.70711952682972
    },
    {
        "floor": 1,
        "room": "B011",
        "lat": 51.0607743990419,
        "lng": 3.7077056768553
    },
    {
        "floor": 1,
        "room": "B007",
        "lat": 51.0607657693046,
        "lng": 3.70777873646977
    },
    {
        "floor": 1,
        "room": "B002",
        "lat": 51.0608426770309,
        "lng": 3.70789285887175
    },
    {
        "floor": 1,
        "room": "B032",
        "lat": 51.0609105508565,
        "lng": 3.7076087879358
    },
    {
        "floor": 1,
        "room": "B013",
        "lat": 51.0607225474157,
        "lng": 3.70752593568301
    },
    {
        "floor": 1,
        "room": "B014",
        "lat": 51.0607709688676,
        "lng": 3.70761049601077
    },
    {
        "floor": 1,
        "room": "B010",
        "lat": 51.0607546617439,
        "lng": 3.70767120869285
    },
    {
        "floor": 1,
        "room": "B031",
        "lat": 51.0608478300221,
        "lng": 3.70764151926686
    },
    {
        "floor": 1,
        "room": "B015",
        "lat": 51.0608203016471,
        "lng": 3.70745118187051
    },
    {
        "floor": 1,
        "room": "B030",
        "lat": 51.0608653333239,
        "lng": 3.70752982249652
    },
    {
        "floor": 1,
        "room": "B009",
        "lat": 51.0608372432158,
        "lng": 3.70772304200628
    },
    {
        "floor": 1,
        "room": "B008",
        "lat": 51.0608139802015,
        "lng": 3.7077582551087
    },
    {
        "floor": 1,
        "room": "B033",
        "lat": 51.0608652097054,
        "lng": 3.70783531173973
    },
    {
        "floor": 1,
        "room": "B003",
        "lat": 51.0608309341221,
        "lng": 3.70783557339703
    },
    {
        "floor": 1,
        "room": "B010a",
        "lat": 51.0607330170269,
        "lng": 3.70770241966248
    },
    {
        "floor": 1,
        "room": "B012",
        "lat": 51.0607467696566,
        "lng": 3.70772643652411
    },
    {
        "floor": 1,
        "room": "B023",
        "lat": 51.0605767383661,
        "lng": 3.70706785686326
    },
    {
        "floor": 1,
        "room": "B034",
        "lat": 51.0604170345801,
        "lng": 3.70728032908008
    },
    {
        "floor": 1,
        "room": "B017",
        "lat": 51.0604305731471,
        "lng": 3.70733359020235
    },
    {
        "floor": 1,
        "room": "B017a",
        "lat": 51.0604671422504,
        "lng": 3.70728460947987
    },
    {
        "floor": 1,
        "room": "B040",
        "lat": 51.0604463302893,
        "lng": 3.7074321671922
    },
    {
        "floor": 1,
        "room": "B036",
        "lat": 51.060510172366,
        "lng": 3.70728065723217
    },
    {
        "floor": 1,
        "room": "B039",
        "lat": 51.0604718972471,
        "lng": 3.70739415183732
    },
    {
        "floor": 1,
        "room": "B038",
        "lat": 51.0604936659482,
        "lng": 3.70736276200265
    },
    {
        "floor": 1,
        "room": "B037",
        "lat": 51.0605225060734,
        "lng": 3.70732356857507
    },
    {
        "floor": 1,
        "room": "B013a",
        "lat": 51.0607427381409,
        "lng": 3.70756119552375
    },
    {
        "floor": 1,
        "room": "B015a",
        "lat": 51.0607870083766,
        "lng": 3.70756076970498
    },
    {
        "floor": 1,
        "room": "B019",
        "lat": 51.0604933177673,
        "lng": 3.70719731744046
    },
    {
        "floor": 1,
        "room": "B020",
        "lat": 51.0604991942963,
        "lng": 3.70715858384592
    },
    {
        "floor": 1,
        "room": "B005a",
        "lat": 51.0606870464616,
        "lng": 3.70790872478448
    },
    {
        "floor": 1,
        "room": "B004",
        "lat": 51.0605863997769,
        "lng": 3.7075103420764
    },
    {
        "floor": 1,
        "room": "B016",
        "lat": 51.060688541388,
        "lng": 3.70733318222972
    },
    {
        "floor": 1,
        "room": "B001",
        "lat": 51.0607537059912,
        "lng": 3.70798551606411
    },
    {
        "floor": 1,
        "room": "B027",
        "lat": 51.0605812695406,
        "lng": 3.70721544771758
    },
    {
        "floor": 1,
        "room": "B025",
        "lat": 51.0605507665782,
        "lng": 3.70716217992412
    },
    {
        "floor": 1,
        "room": "B026",
        "lat": 51.0606106396413,
        "lng": 3.70707584391662
    },
    {
        "floor": 1,
        "room": "B006",
        "lat": 51.0607938377713,
        "lng": 3.70780462103242
    },
    {
        "floor": 1,
        "room": "B005",
        "lat": 51.0607058345265,
        "lng": 3.70787065871199
    },
    {
        "floor": 1,
        "room": "B015b",
        "lat": 51.0607485915837,
        "lng": 3.70749368095903
    },
    {
        "floor": 1,
        "room": "B004a",
        "lat": 51.0607261492545,
        "lng": 3.70766510217122
    },
    {
        "floor": 1,
        "room": "A032",
        "lat": 51.0595233064175,
        "lng": 3.70797751830851
    },
    {
        "floor": 1,
        "room": "G008b",
        "lat": 51.0595056361899,
        "lng": 3.70799095760893
    },
    {
        "floor": 1,
        "room": "A026a",
        "lat": 51.059555695822,
        "lng": 3.70823416850694
    },
    {
        "floor": 1,
        "room": "A030",
        "lat": 51.0595253572266,
        "lng": 3.70804421345209
    },
    {
        "floor": 1,
        "room": "A029",
        "lat": 51.0595323740228,
        "lng": 3.70809122884986
    },
    {
        "floor": 1,
        "room": "A016",
        "lat": 51.059726456567,
        "lng": 3.70835365163765
    },
    {
        "floor": 1,
        "room": "A017",
        "lat": 51.0597268836873,
        "lng": 3.70830470802792
    },
    {
        "floor": 1,
        "room": "A018",
        "lat": 51.059706076845,
        "lng": 3.70826963406993
    },
    {
        "floor": 1,
        "room": "A019",
        "lat": 51.0596958995474,
        "lng": 3.70822823365727
    },
    {
        "floor": 1,
        "room": "A020",
        "lat": 51.0596413221145,
        "lng": 3.7082784085311
    },
    {
        "floor": 1,
        "room": "A014",
        "lat": 51.0597244174808,
        "lng": 3.70844262796419
    },
    {
        "floor": 1,
        "room": "A015",
        "lat": 51.059746540629,
        "lng": 3.70840242329286
    },
    {
        "floor": 1,
        "room": "A001",
        "lat": 51.059623727126,
        "lng": 3.70849772377423
    },
    {
        "floor": 1,
        "room": "A004",
        "lat": 51.0595520085199,
        "lng": 3.70854997927544
    },
    {
        "floor": 1,
        "room": "A003",
        "lat": 51.0595960186579,
        "lng": 3.70852284783797
    },
    {
        "floor": 1,
        "room": "A013",
        "lat": 51.0596583418693,
        "lng": 3.70847508127846
    },
    {
        "floor": 1,
        "room": "A014a",
        "lat": 51.0596895035414,
        "lng": 3.70844911247032
    },
    {
        "floor": 1,
        "room": "A002",
        "lat": 51.0596544633098,
        "lng": 3.70838199422748
    },
    {
        "floor": 1,
        "room": "A026b",
        "lat": 51.0595535770625,
        "lng": 3.7082646081812
    },
    {
        "floor": 1,
        "room": "A027",
        "lat": 51.0595637652099,
        "lng": 3.70817885521188
    },
    {
        "floor": 1,
        "room": "A023",
        "lat": 51.0595953451141,
        "lng": 3.70827954648412
    },
    {
        "floor": 1,
        "room": "A021a",
        "lat": 51.0595485613845,
        "lng": 3.70839009252285
    },
    {
        "floor": 1,
        "room": "A021b",
        "lat": 51.0595164184971,
        "lng": 3.7084100778221
    },
    {
        "floor": 1,
        "room": "A011",
        "lat": 51.0594059534621,
        "lng": 3.70842243923478
    },
    {
        "floor": 1,
        "room": "A008",
        "lat": 51.0594157104216,
        "lng": 3.70847248371974
    },
    {
        "floor": 1,
        "room": "A009",
        "lat": 51.0594420071517,
        "lng": 3.708447986454
    },
    {
        "floor": 1,
        "room": "A010a",
        "lat": 51.0594675170055,
        "lng": 3.7084349570466
    },
    {
        "floor": 1,
        "room": "A010b",
        "lat": 51.0594795111304,
        "lng": 3.70840205280353
    },
    {
        "floor": 1,
        "room": "A006",
        "lat": 51.0594226427605,
        "lng": 3.70854734641109
    },
    {
        "floor": 1,
        "room": "A012",
        "lat": 51.0595200167712,
        "lng": 3.70858783030537
    },
    {
        "floor": 1,
        "room": "A031",
        "lat": 51.0595278924437,
        "lng": 3.70801133412494
    },
    {
        "floor": 1,
        "room": "A027a",
        "lat": 51.0595271851687,
        "lng": 3.708155112573
    },
    {
        "floor": 1,
        "room": "A028a",
        "lat": 51.0595372047466,
        "lng": 3.70813177501715
    },
    {
        "floor": 1,
        "room": "A028",
        "lat": 51.0595546319524,
        "lng": 3.70813545354919
    },
    {
        "floor": 1,
        "room": "A025",
        "lat": 51.0595601176797,
        "lng": 3.70829400335002
    },
    {
        "floor": 1,
        "room": "A024",
        "lat": 51.0595636162291,
        "lng": 3.70831980102653
    },
    {
        "floor": 1,
        "room": "A007",
        "lat": 51.0594530485467,
        "lng": 3.70848831442802
    },
    {
        "floor": 1,
        "room": "A005",
        "lat": 51.0594684943101,
        "lng": 3.70854034865984
    },
    {
        "floor": 1,
        "room": "A017a",
        "lat": 51.0596975811686,
        "lng": 3.70831820084492
    },
    {
        "floor": 1,
        "room": "A022",
        "lat": 51.059575878992,
        "lng": 3.70835097797892
    },
    {
        "floor": 1,
        "room": "A021",
        "lat": 51.0595848899238,
        "lng": 3.70839327330206
    },
    {
        "floor": 1,
        "room": "G022",
        "lat": 51.0590488938439,
        "lng": 3.70792897675642
    },
    {
        "floor": 1,
        "room": "G011",
        "lat": 51.0592463612749,
        "lng": 3.70808250572053
    },
    {
        "floor": 1,
        "room": "G023",
        "lat": 51.0591053896125,
        "lng": 3.70777070141427
    },
    {
        "floor": 1,
        "room": "G017",
        "lat": 51.0590839751989,
        "lng": 3.70793216355782
    },
    {
        "floor": 1,
        "room": "G010",
        "lat": 51.0592675552497,
        "lng": 3.70802276982406
    },
    {
        "floor": 1,
        "room": "G007",
        "lat": 51.0593425236183,
        "lng": 3.70805263263019
    },
    {
        "floor": 1,
        "room": "G006",
        "lat": 51.0593764641768,
        "lng": 3.70803914171156
    },
    {
        "floor": 1,
        "room": "G005a",
        "lat": 51.0594840852942,
        "lng": 3.70817855865336
    },
    {
        "floor": 1,
        "room": "G005b",
        "lat": 51.0594786545223,
        "lng": 3.70808232069436
    },
    {
        "floor": 1,
        "room": "G002a",
        "lat": 51.0594106763655,
        "lng": 3.70835764808481
    },
    {
        "floor": 1,
        "room": "G001a",
        "lat": 51.0595295165264,
        "lng": 3.70834550868078
    },
    {
        "floor": 1,
        "room": "G002b",
        "lat": 51.0594066432479,
        "lng": 3.70829136296465
    },
    {
        "floor": 1,
        "room": "G003",
        "lat": 51.0594060456712,
        "lng": 3.7082427155272
    },
    {
        "floor": 1,
        "room": "G004a",
        "lat": 51.0594578265915,
        "lng": 3.70826288064241
    },
    {
        "floor": 1,
        "room": "G001",
        "lat": 51.0594480646562,
        "lng": 3.70837503539548
    },
    {
        "floor": 1,
        "room": "G009",
        "lat": 51.059388722816,
        "lng": 3.70794709902645
    },
    {
        "floor": 1,
        "room": "G013",
        "lat": 51.0591389471459,
        "lng": 3.70770945575154
    },
    {
        "floor": 1,
        "room": "G008",
        "lat": 51.0594298466731,
        "lng": 3.70798324814418
    },
    {
        "floor": 1,
        "room": "G012a",
        "lat": 51.0593585679345,
        "lng": 3.70792059201778
    },
    {
        "floor": 1,
        "room": "G008a",
        "lat": 51.0594729395281,
        "lng": 3.70799634653287
    },
    {
        "floor": 1,
        "room": "G019",
        "lat": 51.05912469976,
        "lng": 3.70809320009516
    },
    {
        "floor": 1,
        "room": "G018",
        "lat": 51.0591728846023,
        "lng": 3.7081316399473
    },
    {
        "floor": 1,
        "room": "G020",
        "lat": 51.059033105352,
        "lng": 3.70797728173857
    },
    {
        "floor": 1,
        "room": "G005d",
        "lat": 51.0594588224158,
        "lng": 3.70819488239026
    },
    {
        "floor": 1,
        "room": "G005c",
        "lat": 51.0595149581994,
        "lng": 3.70822492805269
    },
    {
        "floor": 1,
        "room": "G012",
        "lat": 51.059230976002,
        "lng": 3.70783321234947
    },
    {
        "floor": 1,
        "room": "G015",
        "lat": 51.0591784062659,
        "lng": 3.70800630730174
    },
    {
        "floor": 1,
        "room": "G005",
        "lat": 51.0594161275316,
        "lng": 3.70813676498251
    },
    {
        "floor": 1,
        "room": "G004",
        "lat": 51.0595022228084,
        "lng": 3.70829014480024
    },
    {
        "floor": 1,
        "room": "G016",
        "lat": 51.0591381440108,
        "lng": 3.7079118066986
    },
    {
        "floor": 1,
        "room": "P014",
        "lat": 51.0589897953638,
        "lng": 3.70850634481084
    },
    {
        "floor": 1,
        "room": "P010a",
        "lat": 51.0591435761438,
        "lng": 3.70877582508356
    },
    {
        "floor": 1,
        "room": "P019",
        "lat": 51.0588863935541,
        "lng": 3.70842692301949
    },
    {
        "floor": 1,
        "room": "P024",
        "lat": 51.0587246155769,
        "lng": 3.70830266452966
    },
    {
        "floor": 1,
        "room": "P006",
        "lat": 51.0590963350214,
        "lng": 3.70865552583527
    },
    {
        "floor": 1,
        "room": "P010",
        "lat": 51.0590794429132,
        "lng": 3.70875509901697
    },
    {
        "floor": 1,
        "room": "P011",
        "lat": 51.0590551702109,
        "lng": 3.7087364552807
    },
    {
        "floor": 1,
        "room": "P012",
        "lat": 51.0589982208594,
        "lng": 3.70870363732575
    },
    {
        "floor": 1,
        "room": "P017",
        "lat": 51.058908948517,
        "lng": 3.7086090791923
    },
    {
        "floor": 1,
        "room": "P023",
        "lat": 51.0588957198813,
        "lng": 3.70859891843193
    },
    {
        "floor": 1,
        "room": "P018",
        "lat": 51.0589198378839,
        "lng": 3.70854661760479
    },
    {
        "floor": 1,
        "room": "P016",
        "lat": 51.0587888006819,
        "lng": 3.70858332716008
    },
    {
        "floor": 1,
        "room": "P025",
        "lat": 51.0587588616636,
        "lng": 3.7085210561181
    },
    {
        "floor": 1,
        "room": "P026",
        "lat": 51.0586431642432,
        "lng": 3.70847146626201
    },
    {
        "floor": 1,
        "room": "P009",
        "lat": 51.0592294000136,
        "lng": 3.70841491787443
    },
    {
        "floor": 1,
        "room": "P002",
        "lat": 51.0591713097856,
        "lng": 3.70835572031049
    },
    {
        "floor": 1,
        "room": "P005",
        "lat": 51.059184577202,
        "lng": 3.70841535327444
    },
    {
        "floor": 1,
        "room": "P004",
        "lat": 51.0591613562663,
        "lng": 3.70839751756154
    },
    {
        "floor": 1,
        "room": "P013",
        "lat": 51.0590841771198,
        "lng": 3.70843854824775
    },
    {
        "floor": 1,
        "room": "P007",
        "lat": 51.0591150900002,
        "lng": 3.70839842897183
    },
    {
        "floor": 1,
        "room": "P015",
        "lat": 51.0590638843796,
        "lng": 3.70836527896605
    },
    {
        "floor": 1,
        "room": "P003",
        "lat": 51.0591209006044,
        "lng": 3.7083014618867
    },
    {
        "floor": 1,
        "room": "P028",
        "lat": 51.0590436368865,
        "lng": 3.70830970390239
    },
    {
        "floor": 1,
        "room": "P030",
        "lat": 51.0590348055552,
        "lng": 3.70833865541956
    },
    {
        "floor": 1,
        "room": "P031",
        "lat": 51.059020282349,
        "lng": 3.70832750038826
    },
    {
        "floor": 1,
        "room": "P033",
        "lat": 51.0589736099276,
        "lng": 3.70825591748354
    },
    {
        "floor": 1,
        "room": "P022",
        "lat": 51.0589333373261,
        "lng": 3.70826500808643
    },
    {
        "floor": 1,
        "room": "P020",
        "lat": 51.05890001406,
        "lng": 3.70821350362155
    },
    {
        "floor": 1,
        "room": "P001",
        "lat": 51.0590119991799,
        "lng": 3.70824448891585
    },
    {
        "floor": 1,
        "room": "P008",
        "lat": 51.0590896083974,
        "lng": 3.70835182803948
    },
    {
        "floor": 1,
        "room": "P027",
        "lat": 51.0590679825278,
        "lng": 3.7083326919487
    },
    {
        "floor": 1,
        "room": "P032",
        "lat": 51.0589623904203,
        "lng": 3.70823818806707
    },
    {
        "floor": 1,
        "room": "P021",
        "lat": 51.0589442051278,
        "lng": 3.70822938044652
    },
    {
        "floor": 1,
        "room": "P034",
        "lat": 51.0586581836418,
        "lng": 3.70818134031269
    },
    {
        "floor": 1,
        "room": "P024a",
        "lat": 51.0587465209839,
        "lng": 3.70803660379097
    },
    {
        "floor": 1,
        "room": "L032",
        "lat": 51.0596636155149,
        "lng": 3.71001940805917
    },
    {
        "floor": 1,
        "room": "M012",
        "lat": 51.0598058226541,
        "lng": 3.70987250619711
    },
    {
        "floor": 1,
        "room": "L001",
        "lat": 51.0597444767108,
        "lng": 3.71014325221595
    },
    {
        "floor": 1,
        "room": "L003",
        "lat": 51.0597906805406,
        "lng": 3.71015537278153
    },
    {
        "floor": 1,
        "room": "L020",
        "lat": 51.0598303163629,
        "lng": 3.71048416031548
    },
    {
        "floor": 1,
        "room": "L022",
        "lat": 51.059774869673,
        "lng": 3.71056460940022
    },
    {
        "floor": 1,
        "room": "L016",
        "lat": 51.0599347997395,
        "lng": 3.71033256185244
    },
    {
        "floor": 1,
        "room": "L018",
        "lat": 51.0598735956169,
        "lng": 3.71041658750572
    },
    {
        "floor": 1,
        "room": "L017",
        "lat": 51.0598549014153,
        "lng": 3.71036089185611
    },
    {
        "floor": 1,
        "room": "L026",
        "lat": 51.0597510450701,
        "lng": 3.71040473995746
    },
    {
        "floor": 1,
        "room": "M020",
        "lat": 51.0599241367344,
        "lng": 3.70970083747769
    },
    {
        "floor": 1,
        "room": "M022",
        "lat": 51.0600074193138,
        "lng": 3.70984537120893
    },
    {
        "floor": 1,
        "room": "M016",
        "lat": 51.0598147784237,
        "lng": 3.70965975745781
    },
    {
        "floor": 1,
        "room": "L010",
        "lat": 51.0598734572494,
        "lng": 3.71017325742597
    },
    {
        "floor": 1,
        "room": "L012",
        "lat": 51.059892512215,
        "lng": 3.71020632690318
    },
    {
        "floor": 1,
        "room": "L014",
        "lat": 51.0599107006429,
        "lng": 3.71023789256349
    },
    {
        "floor": 1,
        "room": "M031",
        "lat": 51.0599385044428,
        "lng": 3.70995015341704
    },
    {
        "floor": 1,
        "room": "M025",
        "lat": 51.0600656748856,
        "lng": 3.70990895166105
    },
    {
        "floor": 1,
        "room": "M026",
        "lat": 51.060084117527,
        "lng": 3.70994085267584
    },
    {
        "floor": 1,
        "room": "L006",
        "lat": 51.0598327209154,
        "lng": 3.71032292641304
    },
    {
        "floor": 1,
        "room": "L005",
        "lat": 51.0598479787874,
        "lng": 3.71030078821329
    },
    {
        "floor": 1,
        "room": "L028",
        "lat": 51.0596886047486,
        "lng": 3.71029529894201
    },
    {
        "floor": 1,
        "room": "L007",
        "lat": 51.0598079426726,
        "lng": 3.71027625162322
    },
    {
        "floor": 1,
        "room": "L008",
        "lat": 51.059814484635,
        "lng": 3.7102363183152
    },
    {
        "floor": 1,
        "room": "L002",
        "lat": 51.0597721662153,
        "lng": 3.71021276184201
    },
    {
        "floor": 1,
        "room": "L030",
        "lat": 51.0597044842231,
        "lng": 3.71020659398357
    },
    {
        "floor": 1,
        "room": "M004",
        "lat": 51.0598452220821,
        "lng": 3.70978921650066
    },
    {
        "floor": 1,
        "room": "M005",
        "lat": 51.0598610722257,
        "lng": 3.70976863460955
    },
    {
        "floor": 1,
        "room": "M006",
        "lat": 51.0598855106398,
        "lng": 3.70981580255164
    },
    {
        "floor": 1,
        "room": "M007",
        "lat": 51.0598778066191,
        "lng": 3.70985210709409
    },
    {
        "floor": 1,
        "room": "M018",
        "lat": 51.0598182425118,
        "lng": 3.7097429352636
    },
    {
        "floor": 1,
        "room": "M017",
        "lat": 51.0598434219535,
        "lng": 3.7097073531357
    },
    {
        "floor": 1,
        "room": "M019",
        "lat": 51.059877067401,
        "lng": 3.70955203754804
    },
    {
        "floor": 1,
        "room": "M001",
        "lat": 51.0599338334969,
        "lng": 3.70982356777722
    },
    {
        "floor": 1,
        "room": "M008",
        "lat": 51.0599843399443,
        "lng": 3.70975056999177
    },
    {
        "floor": 1,
        "room": "M027",
        "lat": 51.0601037704629,
        "lng": 3.70997495985993
    },
    {
        "floor": 1,
        "room": "M028",
        "lat": 51.0601122177191,
        "lng": 3.71001836792989
    },
    {
        "floor": 1,
        "room": "M029",
        "lat": 51.0601322518905,
        "lng": 3.70998929920409
    },
    {
        "floor": 1,
        "room": "M030",
        "lat": 51.060027546607,
        "lng": 3.71007931789311
    },
    {
        "floor": 1,
        "room": "M024",
        "lat": 51.0601409323413,
        "lng": 3.71007232356647
    },
    {
        "floor": 1,
        "room": "M003",
        "lat": 51.0599031131495,
        "lng": 3.70993618814566
    },
    {
        "floor": 1,
        "room": "M002",
        "lat": 51.059920770555,
        "lng": 3.70987731189624
    },
    {
        "floor": 1,
        "room": "N005",
        "lat": 51.0601788429934,
        "lng": 3.70981036766981
    },
    {
        "floor": 1,
        "room": "N004",
        "lat": 51.0602313115566,
        "lng": 3.7099014255317
    },
    {
        "floor": 1,
        "room": "N003",
        "lat": 51.0602549329654,
        "lng": 3.70994823303291
    },
    {
        "floor": 1,
        "room": "N002",
        "lat": 51.0602703579439,
        "lng": 3.70997658817738
    },
    {
        "floor": 1,
        "room": "N001",
        "lat": 51.0603033580659,
        "lng": 3.70998862329121
    },
    {
        "floor": 1,
        "room": "N006",
        "lat": 51.0602239198244,
        "lng": 3.70982359714366
    },
    {
        "floor": 1,
        "room": "F020",
        "lat": 51.0586448496878,
        "lng": 3.70904173610217
    },
    {
        "floor": 1,
        "room": "F036",
        "lat": 51.0584187600202,
        "lng": 3.70897599370529
    },
    {
        "floor": 1,
        "room": "F035",
        "lat": 51.0584365201532,
        "lng": 3.70891682077751
    },
    {
        "floor": 1,
        "room": "F023",
        "lat": 51.0584610216023,
        "lng": 3.7090079319903
    },
    {
        "floor": 1,
        "room": "F022",
        "lat": 51.0584789460178,
        "lng": 3.70894821171932
    },
    {
        "floor": 1,
        "room": "F021",
        "lat": 51.0584970172042,
        "lng": 3.7088880098946
    },
    {
        "floor": 1,
        "room": "F019",
        "lat": 51.058512118046,
        "lng": 3.70883768874956
    },
    {
        "floor": 1,
        "room": "F030",
        "lat": 51.0584542222801,
        "lng": 3.70885784097018
    },
    {
        "floor": 1,
        "room": "F026",
        "lat": 51.0587809933646,
        "lng": 3.7092694943789
    },
    {
        "floor": 1,
        "room": "F027",
        "lat": 51.0587939170889,
        "lng": 3.70922643543482
    },
    {
        "floor": 1,
        "room": "F025",
        "lat": 51.0588157814445,
        "lng": 3.70915375400458
    },
    {
        "floor": 1,
        "room": "F015",
        "lat": 51.0587192889475,
        "lng": 3.70879371894787
    },
    {
        "floor": 1,
        "room": "F012",
        "lat": 51.0588381320555,
        "lng": 3.70904932552158
    },
    {
        "floor": 1,
        "room": "F025a",
        "lat": 51.0588013629922,
        "lng": 3.70920162732391
    },
    {
        "floor": 1,
        "room": "F013",
        "lat": 51.0588503337389,
        "lng": 3.7090667922784
    },
    {
        "floor": 1,
        "room": "F001",
        "lat": 51.0588539676304,
        "lng": 3.70902635952685
    },
    {
        "floor": 1,
        "room": "F003",
        "lat": 51.0588477295756,
        "lng": 3.70898222433015
    },
    {
        "floor": 1,
        "room": "F004",
        "lat": 51.0588675800422,
        "lng": 3.70900121462346
    },
    {
        "floor": 1,
        "room": "F005",
        "lat": 51.0588792551524,
        "lng": 3.70896231534877
    },
    {
        "floor": 1,
        "room": "F006",
        "lat": 51.0588664059827,
        "lng": 3.70894036653709
    },
    {
        "floor": 1,
        "room": "F009",
        "lat": 51.058887061419,
        "lng": 3.7088943409792
    },
    {
        "floor": 1,
        "room": "F010",
        "lat": 51.0589165774729,
        "lng": 3.7088914981481
    },
    {
        "floor": 1,
        "room": "F011",
        "lat": 51.0589016877448,
        "lng": 3.70886593329672
    },
    {
        "floor": 1,
        "room": "F007",
        "lat": 51.0588401441207,
        "lng": 3.70891769377139
    },
    {
        "floor": 1,
        "room": "F008",
        "lat": 51.0588181855312,
        "lng": 3.70890109894526
    },
    {
        "floor": 1,
        "room": "F002",
        "lat": 51.0588092158783,
        "lng": 3.70897079626762
    },
    {
        "floor": 1,
        "room": "F014",
        "lat": 51.0587364830184,
        "lng": 3.70871257614203
    },
    {
        "floor": 1,
        "room": "F016",
        "lat": 51.0586323385153,
        "lng": 3.70869125501338
    },
    {
        "floor": 1,
        "room": "F018",
        "lat": 51.0585731450219,
        "lng": 3.70873996241289
    },
    {
        "floor": 1,
        "room": "F017",
        "lat": 51.0585689121056,
        "lng": 3.70864930589169
    },
    {
        "floor": 1,
        "room": "W009",
        "lat": 51.0614182333866,
        "lng": 3.70824550902193
    },
    {
        "floor": 1,
        "room": "W003",
        "lat": 51.0614019812786,
        "lng": 3.70827578599612
    },
    {
        "floor": 1,
        "room": "W002",
        "lat": 51.0614310845028,
        "lng": 3.70831733469505
    },
    {
        "floor": 1,
        "room": "W004",
        "lat": 51.061378232583,
        "lng": 3.70820962243604
    },
    {
        "floor": 1,
        "room": "W005",
        "lat": 51.0613800782221,
        "lng": 3.70824744148115
    },
    {
        "floor": 1,
        "room": "W001",
        "lat": 51.0614338338065,
        "lng": 3.70826946046661
    },
    {
        "floor": 1,
        "room": "H009",
        "lat": 51.0595983134694,
        "lng": 3.70766771858897
    },
    {
        "floor": 1,
        "room": "H010a",
        "lat": 51.0595751911802,
        "lng": 3.70758780178741
    },
    {
        "floor": 1,
        "room": "H010b",
        "lat": 51.0595535503184,
        "lng": 3.70751300543641
    },
    {
        "floor": 1,
        "room": "H006",
        "lat": 51.0594472306978,
        "lng": 3.70765948087828
    },
    {
        "floor": 1,
        "room": "H005",
        "lat": 51.0593789867511,
        "lng": 3.70760567478119
    },
    {
        "floor": 1,
        "room": "H007",
        "lat": 51.0595051960445,
        "lng": 3.70770518307954
    },
    {
        "floor": 1,
        "room": "H013",
        "lat": 51.0594487654004,
        "lng": 3.7075039831599
    },
    {
        "floor": 1,
        "room": "H011",
        "lat": 51.0594187572047,
        "lng": 3.70739667832021
    },
    {
        "floor": 1,
        "room": "H012a",
        "lat": 51.0593948783574,
        "lng": 3.70731414777304
    },
    {
        "floor": 1,
        "room": "H012b",
        "lat": 51.0593716745634,
        "lng": 3.70723395063094
    },
    {
        "floor": 1,
        "room": "H001",
        "lat": 51.0592685305024,
        "lng": 3.70732426844516
    },
    {
        "floor": 1,
        "room": "H002",
        "lat": 51.0592986853436,
        "lng": 3.70742849000611
    },
    {
        "floor": 1,
        "room": "H003",
        "lat": 51.0592892430146,
        "lng": 3.70753482005686
    },
    {
        "floor": 1,
        "room": "H004b",
        "lat": 51.0593510016263,
        "lng": 3.70747461523931
    },
    {
        "floor": 1,
        "room": "H004",
        "lat": 51.0593545094833,
        "lng": 3.70750191307768
    },
    {
        "floor": 1,
        "room": "H004a",
        "lat": 51.059337483793,
        "lng": 3.70753540867531
    },
    {
        "floor": 1,
        "room": "H008",
        "lat": 51.0595503639749,
        "lng": 3.70771377501297
    },
    {
        "floor": 1,
        "room": "I020",
        "lat": 51.0599660917561,
        "lng": 3.70728116103199
    },
    {
        "floor": 1,
        "room": "I021",
        "lat": 51.0599996355368,
        "lng": 3.70739837406399
    },
    {
        "floor": 1,
        "room": "I001",
        "lat": 51.0597379909097,
        "lng": 3.70746296313361
    },
    {
        "floor": 1,
        "room": "I002",
        "lat": 51.0597625307146,
        "lng": 3.707548713381
    },
    {
        "floor": 1,
        "room": "I008",
        "lat": 51.0598778718987,
        "lng": 3.70738703223429
    },
    {
        "floor": 1,
        "room": "I014",
        "lat": 51.0599291227827,
        "lng": 3.70742863025229
    },
    {
        "floor": 1,
        "room": "I013",
        "lat": 51.0598992700462,
        "lng": 3.70745014267273
    },
    {
        "floor": 1,
        "room": "I019",
        "lat": 51.0598682299293,
        "lng": 3.70747251070851
    },
    {
        "floor": 1,
        "room": "I015",
        "lat": 51.0599393083606,
        "lng": 3.70745458047611
    },
    {
        "floor": 1,
        "room": "I018",
        "lat": 51.0598740367765,
        "lng": 3.70750161628423
    },
    {
        "floor": 1,
        "room": "I009",
        "lat": 51.0598755311881,
        "lng": 3.70727048520131
    },
    {
        "floor": 1,
        "room": "I016",
        "lat": 51.0599158187772,
        "lng": 3.70747150748424
    },
    {
        "floor": 1,
        "room": "I017",
        "lat": 51.0598955006946,
        "lng": 3.70748614903767
    },
    {
        "floor": 1,
        "room": "I007",
        "lat": 51.059848173673,
        "lng": 3.70752025363397
    },
    {
        "floor": 1,
        "room": "I004",
        "lat": 51.0598232975251,
        "lng": 3.70754992917182
    },
    {
        "floor": 1,
        "room": "I003",
        "lat": 51.0597967387285,
        "lng": 3.70756906779422
    },
    {
        "floor": 1,
        "room": "I006",
        "lat": 51.0598289336519,
        "lng": 3.70746268177117
    },
    {
        "floor": 1,
        "room": "I005",
        "lat": 51.0597913014957,
        "lng": 3.70733118283149
    },
    {
        "floor": 1,
        "room": "I001a",
        "lat": 51.0596741810159,
        "lng": 3.70741558182869
    },
    {
        "floor": 1,
        "room": "J006",
        "lat": 51.0602295148175,
        "lng": 3.70714791452963
    },
    {
        "floor": 1,
        "room": "J004",
        "lat": 51.0601254233711,
        "lng": 3.70730571071472
    },
    {
        "floor": 1,
        "room": "J003",
        "lat": 51.0601112878306,
        "lng": 3.7072561698187
    },
    {
        "floor": 1,
        "room": "J002",
        "lat": 51.0601019089155,
        "lng": 3.70721482384349
    },
    {
        "floor": 1,
        "room": "J007a",
        "lat": 51.0602799490284,
        "lng": 3.70700599593185
    },
    {
        "floor": 1,
        "room": "J001",
        "lat": 51.0601113343455,
        "lng": 3.70690558460938
    },
    {
        "floor": 1,
        "room": "J008",
        "lat": 51.06012376822,
        "lng": 3.7068003015882
    },
    {
        "floor": 1,
        "room": "J009",
        "lat": 51.0600490925466,
        "lng": 3.70657697977466
    },
    {
        "floor": 1,
        "room": "J007",
        "lat": 51.0601680413034,
        "lng": 3.706955463525
    },
    {
        "floor": 1,
        "room": "J004a",
        "lat": 51.0601546335022,
        "lng": 3.70730686297372
    },
    {
        "floor": 1,
        "room": "J005a",
        "lat": 51.0601450142074,
        "lng": 3.7072529195081
    },
    {
        "floor": 1,
        "room": "J005",
        "lat": 51.0601236857986,
        "lng": 3.70717816988158
    },
    {
        "floor": 1,
        "room": "J008a",
        "lat": 51.0601665929123,
        "lng": 3.70662418872218
    }
];


google.maps.event.addDomListener(window, 'load', initialize);

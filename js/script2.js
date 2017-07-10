var map, streetview, overlay, pano, globalpano, neighbourpano;


function initialize() {

    neighbourpano = localStorage.getItem("neighbourpano");
    var initalpano = (typeof neighbourpano != 'undefined' ? neighbourpano : "pano01000");

    streetView = new google.maps.StreetViewPanorama(
        document.getElementById('canvas'), {
            pano: initalpano,
            visible: true,
            panoProvider: getCustomPanorama
        });

    map = new google.maps.Map(
        document.getElementById('map'), {
            center: pano01000.location.latLng,
            zoom: 19,
            streetView: streetView,
            streetViewControl: true,
            styles: mapStyle
        });

    streetView.addListener('position_changed', function() {
        map.panTo({
            lat: streetView.position.lat(),
            lng: streetView.position.lng()
        });

        console.log(localStorage);

        localStorage.clear(); // remove previously stored pano
        globalpano = streetView.getPano(); // get current pano
        localStorage.setItem("globalpano", globalpano); // write current pano to ls
    });

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
    var ctaLayer = new google.maps.KmlLayer({
        url: 'https://storage.googleapis.com/brechtv/SV%202/files/verdieping1.kml',
        map: map,
        preserveViewport: true
    });
}

function pageshow() {
    var PanoBuur = localStorage.getItem("globallat");
    console.log(PanoBuur);
    streetView.setPano(PanoBuur);
}

function createMarker(pos, map, title) {
    var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: title,
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            strokeColor: "#6D7BE3",
            scale: 5
        }
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
        case globalpano:
            return neighbourpano;
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
google.maps.event.addDomListener(window, 'load', initialize);

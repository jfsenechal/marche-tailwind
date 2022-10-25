<script setup>
import { onMounted } from "vue";
import Map from "ol/Map";
import KML from "ol/format/KML";
import View from "ol/View";
import OSM from "ol/source/OSM";
import XYZ from "ol/source/XYZ";
import { fromLonLat } from "ol/proj";
import Point from "ol/geom/Point";
import TileJSON from "ol/source/TileJSON";
import Feature from "ol/Feature";
import { Icon, Style } from "ol/style";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import {ZoomToExtent, defaults as defaultControls} from 'ol/control';
import VectorSource from "ol/source/Vector";

function init() {

  let markers = [
    { id: 1, coordinates: [49.114910, 6.178810] },
    { id: 2, coordinates: [49.133290, 6.154370] },
    { id: 3, coordinates: [49.102160, 6.158850] },
    { id: 4, coordinates: [49.136010, 6.199630] },
    { id: 5, coordinates: [49.105563, 6.182234] }
  ];

  const vectorKML = new VectorLayer({
    source: new VectorSource({
      url: "data/kml/2012-02-10.kml",
      format: new KML()
    })
  });

  let longitude = 50.226484;
  let latitude = 5.342961;

  const rome = new Feature({
    geometry: new Point(fromLonLat([latitude, longitude]))
  });

  rome.setStyle(
    new Style({
      image: new Icon({
        color: "#BADA55",
        crossOrigin: "anonymous",
        src: "public/images/square.svg"
      })
    })
  );

  const vectorSource = new VectorSource({
    features: [rome]
  });

  const vectorLayer = new VectorLayer({
    source: vectorSource
  });

  const rasterLayer = new TileLayer({
    source: new TileJSON({
      url: "https://a.tiles.mapbox.com/v3/aj.1x1-degrees.json?secure=1",
      crossOrigin: ""
    })
  });

  const attributions =
    "&copy; <a href=\\\"http://osm.org/copyright\\\">OpenStreetMap</a> contributors";

  let titleXYZ = new TileLayer({
    source: new XYZ({
      url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
      attributions: attributions
    })
  });

  let titleOSM = new TileLayer({
    source: new OSM()
  });

  new Map({
    layers: [titleXYZ, vectorLayer],
    view: new View({
      center: fromLonLat([latitude, longitude]),
      zoom: 12
    }),
    target: "openmap"
  });

}

onMounted(() => {
  init();
});
</script>
<template>
  <div class="border border-cta-dark/2 w-full" id="openmap" style="width: 100%; height: 40rem;">

  </div>
</template>
<style>

</style>
<style src="ol/ol.css">

</style>
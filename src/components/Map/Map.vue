<script setup>
import { onMounted } from "vue";
import Map from "ol/Map";
import View from "ol/View";
import OSM from "ol/source/OSM";
import XYZ from "ol/source/XYZ";
import { fromLonLat } from "ol/proj";
import Point from "ol/geom/Point";
import Feature from "ol/Feature";
import { Icon, Style } from "ol/style";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import VectorSource from "ol/source/Vector";

function init() {

  let markers = [
    { id: 1, coordinates: [49.114910, 6.178810] },
    { id: 2, coordinates: [49.133290, 6.154370] },
    { id: 3, coordinates: [49.102160, 6.158850] },
    { id: 4, coordinates: [49.136010, 6.199630] },
    { id: 5, coordinates: [49.105563, 6.182234] }
  ];

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

  let titleXYZ = new TileLayer({
    source: new XYZ({
      url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
    })
  });

  let titleOSM = new TileLayer({
    source: new OSM()
  });

  new Map({
    layers: [titleXYZ, vectorLayer],
    view: new View({
      center:  fromLonLat([latitude, longitude]),
      zoom: 12
    }),
    target: "openmap"
  });

}

function init2() {
  /* L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
     attribution: "&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
     minZoom: 1,
     maxZoom: 20
   }).addTo(map);*/
}

onMounted(() => {
  init();
});
</script>
<template>
  <div class="border border-cta-dark w-full" id="openmap" style="width: 100%; height: 40rem;">

  </div>
</template>
<style>

</style>
<style src="ol/ol.css">

</style>

<template>
    <div class="container-fluid">
        <div class="input-group mb-3">
            <GMapAutocomplete class="form-control" v-on:keyup.enter="addMarker" placeholder="Place"
                @place_changed="setPlace" id="place">
            </GMapAutocomplete>
            <button class="btn btn-primary" @click='addMarker'>
                Add Marker
            </button>
        </div>

        <div>

        </div>

        <div>
            <GMapMap :center="{ lat: 49.246292, lng: -123.116226 }" :zoom="11" style="width: 800px; height: 500px">
                <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" />
            </GMapMap>
        </div>
    </div>
    <br>

    <div class="container">
        <div class="row">
            <div class="col">
                <button class="btn btn-danger" @click='deleteSelectedRecord'>
                    Remove Selected Record(s)
                </button>
            </div>
            <div class="col">
                <button class="btn btn-danger" @click='deleteAllRecord'>
                    Remove All Record(s)
                </button>
            </div>
        </div>
    </div>

    <div class="container">
        Last Search Location Time: {{ this.location_DateTime }}
    </div>


    <br>
    <div>
        <EasyDataTable v-model:items-selected="itemsSelected" :headers="headers" :rows-per-page="10" :items="items" />
    </div>
</template>



<script>
import { ref } from "vue";
import axios from "axios";
export default {
    setup() {
        const itemsSelected = ref([]);
        const headers = [
            { text: "Location Name", value: "location" },
            { text: "Latitude", value: "lat" },
            { text: "Longitude", value: "lng" }
            // { text: "Name", value: "name" },
            // { text: "Height (cm)", value: "height", sortable: true },
            // { text: "Weight (kg)", value: "weight", sortable: true },
            // { text: "Age", value: "age", sortable: true }
        ];

        const items = ref([
            // { "name": "Curry", "height": 178, "weight": 77, "age": 20 },
            // { "name": "James", "height": 180, "weight": 75, "age": 21 },
            // { "name": "Jordan", "height": 181, "weight": 73, "age": 22 }
        ]);

        return {
            headers,
            items,
            itemsSelected
        };
    },
    name: 'GoogleMap',
    data() {
        return {
            center: ref({ lat: 49.246292, lng: -123.116226 }),
            currentPlace: null,
            markers: [],
            places: [],
            time_zone: null,
            location_DateTime: null,

        }
    },
    mounted() {
    },
    methods: {
        setPlace(place) {
            this.currentPlace = place;

        },
        addMarker() {
            if (this.currentPlace) {
                const marker = {
                    lat: this.currentPlace.geometry.location.lat(),
                    lng: this.currentPlace.geometry.location.lng(),
                };
                this.markers.push({ position: marker });
                this.places.push(this.currentPlace);
                this.center = marker;

                const randomId = 'id-' + Math.random().toString(36).substr(2, 9) + '-' + Date.now().toString(36);

                this.items.push({ id: randomId, location: this.currentPlace.formatted_address, lat: this.currentPlace.geometry.location.lat(), lng: this.currentPlace.geometry.location.lng() })

                this.timeZoneAPI();

                document.getElementById('place').value = '';

                this.currentPlace = null;

            }
        },
        deleteSelectedRecord() {
            for (var i = this.items.length - 1; i >= 0; i--) {
                for (var j = 0; j < this.itemsSelected.length; j++) {
                    if (this.items[i] && (this.items[i].id === this.itemsSelected[j].id)) {
                        this.items.splice(i, 1);
                        this.places.splice(i, 1);
                        this.markers.splice(i, 1);
                    }
                }
            }

        },
        deleteAllRecord() {
            this.items = [];
            this.places = [];
            this.markers = [];
        },
        timeZoneAPI() {
            var timestamp = Math.floor(Date.now() / 1000);
            axios.post("https://maps.googleapis.com/maps/api/timezone/json?location=" + this.center.lat + "," + this.center.lng + "&timestamp=" + timestamp + "&key=AIzaSyBkZgUkbQZb2MbTLLZVrG6wxBXLWpei7as").then((response) => {
                var localDate = new Date((Math.floor(Date.now() / 1000) - response.data.dstOffset - response.data.rawOffset) * 1000);
                var timeZone = (response.data.dstOffset + response.data.rawOffset) / 60 / 60;
                this.time_zone = timeZone;
                this.location_DateTime = localDate;
                console.log(response)
                console.log(timeZone);
                console.log(localDate);
                
            })
        },
    },
};
</script>
  

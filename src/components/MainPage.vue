<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <button type="button" class="btn btn-outline-primary" @click="getLocation()">Get Location</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- <button @click="getLocation()" type="button" class="btn btn-default btn-lg">
        <span class="material-icons">
            Get Location
        </span>
    </button> -->
    <div>
        My Location 
        <br>
        Latitude: {{ this.myLocation.lat }}, Longitude: {{ this.myLocation.lng }}
    </div>
</template>

<script>

export default {
    data() {
        return {
            myLocation: { lat: '', lng: '' },
        }
    },
    // data() {
    //     return {
    //         city: '',
    //         region: '',
    //         country: '',
    //         longitude: '',
    //         latitude: '',
    //         postal_code: '',
    //     }
    // },
    methods: {
        getLocation() {
            var self = this;
            navigator.geolocation.getCurrentPosition(success, fail);
            if (navigator.geolocation == true) {
                navigator.geolocation.getCurrentPosition(success, fail);
                //this.getGeolocationInformation();
            }
            function success(position) {
                self.myLocation.lat = position.coords.latitude;
                self.myLocation.lng = position.coords.longitude;
                console.log("lat: " + position.coords.latitude, "long:" + position.coords.longitude);
                // console.log("postal_code: " + position.coords.postal_code)
            }
            function fail() {
                alert("fail")
            }
        },
        // async getGeolocationInformation() {
        //     const API_KEY = '2b6217f94f0943b88d547e784413a641';
        //     const API_URL = 'https://ipgeolocation.abstractapi.com/v1/?api_key=' + API_KEY;
        //     const apiResponse = await fetch(API_URL);
        //     const data = await apiResponse.json();
        //     const { city, country, region, longitude, latitude, postal_code } = data;
        //     this.city = city;
        //     this.region = region;
        //     this.country = country;
        //     this.longitude = longitude;
        //     this.latitude = latitude;
        //     this.postal_code = postal_code;
        // }
    },
    mounted() {
    }
}
</script>



<template>
    <button @click="getLocation()" type="button" class="btn btn-default btn-lg">
        <span class="material-icons">
            Get Location
        </span>
    </button>

</template>

<script>

export default {
    data() {
        return {
            location: {
                lat: '',
                long: '',
            }
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
            navigator.geolocation.getCurrentPosition(success, fail);
            if (navigator.geolocation == true) {
                navigator.geolocation.getCurrentPosition(success, fail);

                //this.getGeolocationInformation();
            }
            function success(position) {
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



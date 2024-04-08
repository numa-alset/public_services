import React, { useRef, useEffect, useState } from 'react';
import axios from "axios";
import * as turf from '@turf/turf'
import './Map.css';
import StarRating from './StarRating.js';
// import MapboxDirections from 'mapbox-gl-directions/src/directions';
import MapboxDirection from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
// import 'C:/Users/E.store/Desktop/eee.png';
import ReactDOM from "react-dom"
import "mapbox-gl/dist/mapbox-gl.css"
import { FaStar } from "react-icons/fa";
// import "mapbox-gl/dist/mapbox-gl.css";
// import "mapbox-gl/dist/mapbox-gl.js";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
//import geoJson from "./pos.json";
//import GeoJsonComponent from "./data.js";
mapboxgl.accessToken = 'pk.eyJ1IjoibnVtYS1hbHNldCIsImEiOiJjbGVjcDd6ZnowMDBpM3hxZzM4OXZvbGJsIn0.QNIfheTCWHbb0K6ZAKIVsw';
mapboxgl.setRTLTextPlugin(
    'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
    null,
    true // Lazy load the plugin
);
<link
    href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.1/mapbox-gl-directions.css"
    rel="stylesheet"
/>




//axiosRef.current = axios;


const Map = () => {
    // const point =  turf.point([36.717, 34.716]);
    // const [geoJson,setgeoJson]=useState({});
    //const turf = new turf();
    //const axiosRef = useRef(null);
    const [rating, setRating] = useState(4);
    const mapContainerRef = useRef(null);
    const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }))
    // Initialize map when component mounts
    useEffect(() => {
        // const    turf = new turf();
        // axios.get("https://my-json-server.typicode.com/numa-alset/jsonph/db")
        //     .then(response => response.data)
        //     .then((data) => {
        //         setgeoJson(data)
        //     });
        // const geoJsonn = geoJson.tojson();
        // console.log(geoJsonn);

        // const geo = async () => {
        //     let response = await axios.get('https://my-json-server.typicode.com/numa-alset/jsonph/db');
        //     setgeoJson(response.data);

        // };
        // geo();
        //  axios.get("https://my-json-server.typicode.com/numa-alset/jsonph/db")
        // .then(response => response.data)
        // .then((data) => {
        //    setgeoJson(data)
        // });
        // axios.get("https://my-json-server.typicode.com/numa-alset/jsonph/db").then((response) => { setgeoJson(response.data); });
        //console.log(geoJson);
        const Popup = ({ routeName, routeNumber, city, type, imagee, rate, lan }) => (
            <div className="popup">
                {/* <StarRating number={rate}></StarRating> */}
                <img src={'https://dani2.pythonanywhere.com/' +  imagee } style={{ width: '50%', height: '50%' }}></img>

                <h3 className="route-name" >{routeName}</h3>
                <div className="route-metric-row">
                    <h4 className="row-title" style={{ fontWeight: "bold" }}>description</h4>
                    <div className="row-value">{city}</div>
                </div>
                <div className="route-metric-row">
                    <h4 className="row-title" style={{ fontWeight: "bold" }}>number</h4>
                    <div className="row-value" >no number yet</div>
                </div>
                <p className="route-city">the rate</p>
                <FaStar
                    key={1}
                    color={rating >= 1 ? 'gold' : 'light'}
                    onClick={() => { setRating(1); alert("your submited review 1") }}
                    size={20}
                />
                <FaStar
                    key={2}
                    color={rating >= 2 ? 'gold' : 'light'}
                    onClick={() => { setRating(2) }}
                    size={20}
                /> <FaStar
                    key={3}
                    color={rating >= 3 ? 'gold' : 'light'}
                    onClick={() => { setRating(3) }}
                    size={20}
                /> <FaStar
                    key={4}
                    color={rating >= 4 ? 'gold' : 'light'}
                    onClick={() => { setRating(4) }}
                    size={20}
                /> <FaStar
                    key={5}
                    color={rating >= 5 ? 'gold' : 'light'}
                    onClick={() => { setRating(5) }}
                    size={20}
                />
                <p onClick={() => {
                    let x = prompt("inter ur rate", 4)
                    if (x == null || x == '')
                        return
                    else {
                        alert("done")
                        // axios.put('https://dani2.pythonanywhere.com/hospitals/' + id + '/',
                        //     JSON.stringify({ ip_t: select, hospital_name: user, specialization: day, longitude: long, laditude: lat, description: pwd2 }),
                        //     {
                        //         headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
                        //         withCredentials: true
                        //     }
                        // ).then((data) => {});

                    }
                }}  >rate us </p>
                <button style={{
                    backgroundColor: '#3386c0',
                    display: 'block',
                    padding: '10px',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
                }} onClick={() => { directions.setDestination([lan[0], lan[1]]) }}>show route</button>
            </div>
        )

        const directions = new MapboxDirection({
            accessToken: mapboxgl.accessToken,
            unit: "metric",
            // profile: 'mapbox/dr',
            alternatives: true,
            geometries: false,
            controls: { inputs: true, instructions: true, profileSwitcher: true },
            // flyTo: false,
            language: 'ar',
            // placeholderOrigin: "you are here",
            interactive: false,

        });
        const filterInput = document.getElementById('filter-input');
        const filterGroup = document.getElementById('filter-group');
        // const filter = document.getElementById('filter');

        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            attributionControl: false,
            style: "mapbox://styles/numa-alset/clev5io7700hc01o9ke9igzxg",
            center: [36.717, 34.716],
            zoom: 13,
        }).addControl(new mapboxgl.AttributionControl({
            customAttribution: 'Map design by N3man'
        }));

        map.on("load", async function () {
            // Add an image to use as a custom marker
            // axios.get("https://my-json-server.typicode.com/numa-alset/jsonph/db")
            //     .then(response => response.data)
            //     .then((data) => {
            //         const geoJson=data;
            //     });
            const geoJson = await axios.get("https://dani2.pythonanywhere.com/pharmacy/").then(response => response.data)
                .then(data => {
                    let features = [];
                    for (let item of data) {
                        const feature = {
                            type: "Feature",
                            properties: {
                                title: item.pharmacy_name,
                                description: item.duration,
                                image: item.picture,
                                review: '4',
                                night_shift: item.night_shift,
                                idd: item.pharmacy
                                
                            },
                            geometry: {
                                type: "Point",
                                coordinates: [item.longitude, item.laditude]
                            }

                        };
                        features.push(feature);
                    }
                    return {
                        features: features

                    };

                });
            console.log(geoJson);
            map.loadImage(
                "marker2.png",
                function (error, image) {
                    if (error) throw error;
                    map.addImage("custom-marker", image);
                    // Add a GeoJSON source with multiple points
                    map.addSource("points", {
                        type: "geojson",
                        data: {
                            type: "FeatureCollection",
                            features: geoJson.features,
                        },
                    });
                    // Add a symbol layer
                    map.addLayer({
                        id: "points",
                        type: "symbol",
                        source: "points",
                        layout: {
                            "icon-image": "custom-marker",
                            // get the title name from the source's "title" property
                            "text-field": ["get", "title"],
                            // "text-field": ["get", "review"],
                            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                            "text-offset": [0, 1.25],
                            "text-anchor": "top",
                        },
                        // filter: (feature) => {
                        //     // Only show features with a population greater than 1 million
                        //     return feature.properties.title ;}
                    });
                    // map.setFilter(
                    //     'points',
                    //     ['all', ['==', 'review', '4']]
                    // );
                }
            );
            const input = document.createElement('input');
            input.type = 'checkbox';
            
            input.id = 'points';
            input.checked = true;
            filterGroup.appendChild(input);

            // const label = document.createElement('label');
            // label.setAttribute('for', 'points');
            // label.textContent = 'review';
            // filterGroup.appendChild(label);



            filterInput.addEventListener('keyup', (e) => {
                // If the input value matches a layerID set
                // it's visibility to 'visible' or else hide it.
                if (e.keyCode === 17) {
                    const value = e.target.value.trim();

                    // if (value == '' || value == null) {
                    map.setFilter(
                        'points',
                        ['all', ['==', 'title', value]]
                    );
                    // }
                }
                else {
                    map.setFilter(
                        'points',
                        null
                    );
                }
            });
            // When the checkbox changes, update the visibility of the layer.
            // input.addEventListener('change', (e) => {
            //     if(e.target.checked){
            //     map.setFilter(
            //             'points',
            //             ['all', ['==', 'review', '5']]
            //         );}else {
            //         map.setFilter(
            //             'points',
            //              null
            //  ); };
            // });
        });
        const p = document.createElement('p');
        p.textContent = "pharmacy";
        p.style.color="green";
        filterGroup.appendChild(p);
        const select = document.createElement('select');
        select.id = 'points';
        select.style.left='160px';
        select.style.top='-2px';
        const option1 = document.createElement('option');
        option1.value = '1';
        option1.textContent = '1 star';
        select.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = '2';
        option2.textContent = '2 stars';
        select.appendChild(option2);

        const option3 = document.createElement('option');
        option3.value = '3';
        option3.textContent = '3 stars';
        select.appendChild(option3);

        const option4 = document.createElement('option');
        option4.value = '4';
        option4.textContent = '4 stars';
        select.appendChild(option4);

        const option5 = document.createElement('option');
        option5.value = '5';
        option5.textContent = '5 stars';
        select.appendChild(option5);

        filterGroup.appendChild(select);

        // When the select list changes, update the visibility of the layer.
        select.addEventListener('change', (e) => {
            const value = e.target.value;
            if (value == '1') {
                map.setFilter(
                    'points',
                    ['all', ['==', 'review', '1']]
                );
            } else if (value == '2') {
                map.setFilter(
                    'points',
                    ['all', ['==', 'review', '2']]
                );
            } else if (value == '3') {
                map.setFilter(
                    'points',
                    ['all', ['==', 'review', '3']]
                );
            } else if (value == '4') {
                map.setFilter(
                    'points',
                    ['all', ['==', 'review', '4']]
                );
            } else if (value == '5') {
                map.setFilter(
                    'points',
                    ['all', ['==', 'review', '5']]
                );
            } else {
                map.setFilter(
                    'points',
                    null
                );
            }
        });
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.style.width='20px'
        
        checkbox.id = 'pharmacy';
        checkbox.defaultChecked = false;
        filterGroup.appendChild(checkbox);

        const label = document.createElement('label');
        label.style.width = '130px'
        label.style.left = '30px'
        label.style.top = '-45px'
        label.setAttribute('for', 'pharmacy');
        label.textContent = 'Night Shift';
        filterGroup.appendChild(label);

        // When the checkbox changes, update the visibility of the layer.
        checkbox.addEventListener('change', (e) => {
            const value = e.target.checked;
            console.log(value);
            if (value) {
                map.setFilter(
                    'points',
                    ['all', ['is', 'night_shift', true]]
                );
            } else {
                map.setFilter(
                    'points',
                    null
                );
            }
        });
        const filterInputt = document.createElement('input');
        filterInputt.type = 'text';
        filterInputt.style.height='35px';
        filterInputt.style.left = '450px';
        filterInputt.style.top = '-85px';
        filterInputt.placeholder = ' Enter medicin name';
        filterGroup.appendChild(filterInputt);

        // When the user presses enter, make an Axios call to fetch data from the API.
        filterInputt.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                const value = e.target.value;
                console.log(value);
                axios.get('https://dani2.pythonanywhere.com/pharmacy/pharmacycontent/'+value).then((response) => {
                    let id=response.data.pharmacy;
                    HTMLFormControlsCollection.log(id)
                    map.setFilter('points',['all',['==','idd',id]])
                });
            }
        });
        const button = document.createElement('button');
        button.type = 'button';
        button.style.top ='-89px';
        // button.style.strokeWidth ='0px';

        // button.style.border ='1cm';
        button.style.height ='45px';
        button.style.left = '90px';
        button.textContent = 'give the closer pharmacy';
        filterGroup.appendChild(button);

        // When the user clicks the button, make an Axios call to fetch data from the API.
        button.addEventListener('click', async () => {
            const geoJson = await axios.get("https://dani2.pythonanywhere.com/pharmacy/").then(response => response.data)
                .then(data => {
                    let features = [];
                    for (let item of data) {
                        const feature = {
                            type: "Feature",
                            properties: {
                                title: item.pharmacy_name,
                                description: item.duration,
                                image: item.picture,
                                review: '4',
                                night_shift: item.night_shift

                            },
                            geometry: {
                                type: "Point",
                                coordinates: [item.longitude, item.laditude]
                            }

                        };
                        features.push(feature);
                    }
                    return {
                        features: features

                    };

                });

            //  console.log(JSON.stringify(geoJson));
            const point = turf.point([36.717, 34.716]);
            const closestDestination = turf.nearest(point, geoJson);
            //console.log(closestDestination.geometry.coordinates);   
            let lant = closestDestination.geometry.coordinates;
            directions.setDestination([lant[0], lant[1]])
            //directions.setDestinaton([closestDestination.geometry.coordinates[0], closestDestination.geometry.coordinates[1]]);
            // const value = document.getElementById('medicineName').value;
            // axios.get(`/api/search?query=${value}`).then((response) => {
            //     // Do something with the data from the API.
            // });
            //console.log(geoJson);
        });
        // Add navigation control (the +/- zoom buttons)
        map.addControl(new mapboxgl.NavigationControl(), "top-right");
        map.on("click", e => {
            const features = map.queryRenderedFeatures(e.point, {
                layers: ["points"],
            })
            if (features.length > 0) {
                const feature = features[0]
                // create popup node
                const popupNode = document.createElement("div")
                //    const bu=document.createElement("button");
                //     var lan = feature.geometry.coordinates;
                //     bu.onclick=directions.setDestinaton([lan[0],lan[1]]);
                ReactDOM.render(
                    <Popup
                        routeName={feature?.properties?.title}
                        // routeNumber={feature?.properties?.review}
                        city={feature?.properties?.description}
                        type={feature?.properties?.title}
                        imagee={feature?.properties?.image}
                        // rate={feature?.properties?.review}
                        lan={feature?.geometry?.coordinates}
                    >

                    </Popup>,

                    popupNode
                )
                // const img = document.createElement("img");
                // img.src =  feature.properties.image ;
                //  popupNode.appendChild(bu);
                popUpRef.current
                    .setLngLat(e.lngLat)
                    .setDOMContent(popupNode)
                    .addTo(map)
            }
        })


        directions.setOrigin([36.717, 34.716]);
        // directions.setDestination([36.817,34.816]);
        //directions.controls.inputs=false;
        map.addControl(directions, "top-left");

        map.scrollZoom.enable();

        // map.setFilter(
        //     'points',
        //     ['all', ['==', 'title', 'Lincoln Park']]
        // )

        // map.setFilter('points', [
        //     'match',
        //     ['get', 'abbrev'],
        //     filtered.map((feature) => {
        //         return feature.properties.abbrev;
        //     }),
        //     true,
        //     false
        // ]);

        // map.setFilter('points', ['has', 'abbrev']);

        // Clean up on unmount

        return () => map.remove();

    }, []);

    //console.log(geoJson);
    return <><script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.1/mapbox-gl-directions.js"></script>
        <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.1/mapbox-gl-directions.css" type="text/css"></link>
        <nav id="filter-group" class="filter-group"></nav> <div class="filter-ctrl">
            <input id="filter-input" type="text" name="filter" placeholder="Filter by name"></input>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 49 48" fill="none" onClick={() => {
                window.location.href = "/";
            }}>
                <path d="M48.4746 24C48.4746 10.776 37.6986 -3.05176e-05 24.4746 -3.05176e-05C11.2506 -3.05176e-05 0.474609 10.776 0.474609 24C0.474609 30.96 3.47461 37.224 8.22661 41.616C8.22661 41.64 8.22661 41.64 8.20261 41.664C8.44261 41.904 8.73061 42.096 8.97061 42.312C9.11461 42.432 9.23461 42.552 9.37861 42.648C9.81061 43.008 10.2906 43.344 10.7466 43.68C10.9146 43.8 11.0586 43.896 11.2266 44.016C11.6826 44.328 12.1626 44.616 12.6666 44.88C12.8346 44.976 13.0266 45.096 13.1946 45.192C13.6746 45.456 14.1786 45.696 14.7066 45.912C14.8986 46.008 15.0906 46.104 15.2826 46.176C15.8106 46.392 16.3386 46.584 16.8666 46.752C17.0586 46.824 17.2506 46.896 17.4426 46.944C18.0186 47.112 18.5946 47.256 19.1706 47.4C19.3386 47.448 19.5066 47.496 19.6986 47.52C20.3706 47.664 21.0426 47.76 21.7386 47.832C21.8346 47.832 21.9306 47.856 22.0266 47.88C22.8426 47.952 23.6586 48 24.4746 48C25.2906 48 26.1066 47.952 26.8986 47.88C26.9946 47.88 27.0906 47.856 27.1866 47.832C27.8826 47.76 28.5546 47.664 29.2266 47.52C29.3946 47.496 29.5626 47.424 29.7546 47.4C30.3306 47.256 30.9306 47.136 31.4826 46.944C31.6746 46.872 31.8666 46.8 32.0586 46.752C32.5866 46.56 33.1386 46.392 33.6426 46.176C33.8346 46.104 34.0266 46.008 34.2186 45.912C34.7226 45.696 35.2266 45.456 35.7306 45.192C35.9226 45.096 36.0906 44.976 36.2586 44.88C36.7386 44.592 37.2186 44.328 37.6986 44.016C37.8666 43.92 38.0106 43.8 38.1786 43.68C38.6586 43.344 39.1146 43.008 39.5466 42.648C39.6906 42.528 39.8106 42.408 39.9546 42.312C40.2186 42.096 40.4826 41.88 40.7226 41.664C40.7226 41.64 40.7226 41.64 40.6986 41.616C45.4746 37.224 48.4746 30.96 48.4746 24ZM36.3306 35.928C29.8266 31.56 19.1706 31.56 12.6186 35.928C11.5626 36.624 10.6986 37.44 9.97861 38.328C6.33061 34.632 4.07461 29.568 4.07461 24C4.07461 12.744 13.2186 3.59997 24.4746 3.59997C35.7306 3.59997 44.8746 12.744 44.8746 24C44.8746 29.568 42.6186 34.632 38.9706 38.328C38.2746 37.44 37.3866 36.624 36.3306 35.928Z" fill="black" />
                <path d="M24.4746 11.8312C19.5066 11.8312 15.4746 15.8632 15.4746 20.8312C15.4746 25.7032 19.2906 29.6632 24.3546 29.8072H24.5706H24.7386H24.7866C29.6346 29.6392 33.4506 25.7032 33.4746 20.8312C33.4746 15.8632 29.4426 11.8312 24.4746 11.8312Z" fill="black" />
            </svg>
        </div><div ref={mapContainerRef} style={{ width: "100%", height: "100vh" }} /></>;
};

export default Map;
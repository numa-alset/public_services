import React, { useRef, useEffect, useState } from 'react';
import axios from "axios";
import * as turf from '@turf/turf'
import './Map.css';
import StarRating from './StarRating.js';
// import MapboxDirections from 'mapbox-gl-directions/src/directions';
import MapboxDirection from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
//import 'C:/Users/E.store/Desktop/eee.png';
import ReactDOM from "react-dom"
import "mapbox-gl/dist/mapbox-gl.css"
import { FaStar } from "react-icons/fa";
// import "mapbox-gl/dist/mapbox-gl.css";
// import "mapbox-gl/dist/mapbox-gl.js";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
//import geoJson from "./pos.json";
//import GeoJsonComponent from "./data.js";
mapboxgl.accessToken = 'pk.eyJ1IjoibnVtYS1hbHNldCIsImEiOiJjbGVjcDd6ZnowMDBpM3hxZzM4OXZvbGJsIn0.QNIfheTCWHbb0K6ZAKIVsw';
// mapboxgl.setRTLTextPlugin(
//     'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
//     null,
//     true // Lazy load the plugin
// );
<link
    href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.1/mapbox-gl-directions.css"
    rel="stylesheet"
/>




//axiosRef.current = axios;


const Map5 = () => {
    const [rating, setRating] = useState(4);
    // const point =  turf.point([36.717, 34.716]);
    // const [geoJson,setgeoJson]=useState({});
    //const turf = new turf();
    //const axiosRef = useRef(null);
    const mapContainerRef2 = useRef(null);
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
                <img src={'https://dani2.pythonanywhere.com/' + imagee} style={{ width: '50%', height: '50%' }}></img>

                <h3 className="route-name" >{routeName}</h3>
                <div className="route-metric-row">
                    <h4 className="row-title" style={{ fontWeight: "bold" } }>description</h4>
                    <div className="row-value">{city}</div>
                </div>
                <div className="route-metric-row">
                    <h4 className="row-title"style={{ fontWeight: "bold" } }>number</h4>
                    <div className="row-value">no number yet</div>
                </div>
                <p className="route-city">your rate </p>
                <FaStar
                    key={1}
                    color={rate >= 1 ? 'gold' : 'light'}
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

        const map2 = new mapboxgl.Map({
            container: mapContainerRef2.current,
            attributionControl: false,
            style: "mapbox://styles/numa-alset/clev5io7700hc01o9ke9igzxg",
            center: [36.717, 34.716],
            zoom: 13,
        }).addControl(new mapboxgl.AttributionControl({
            customAttribution: 'Map design by N3man'
        }));

        map2.on("load", async function () {
            // Add an image to use as a custom marker
            // axios.get("https://my-json-server.typicode.com/numa-alset/jsonph/db")
            //     .then(response => response.data)
            //     .then((data) => {
            //         const geoJson=data;
            //     });
            const geoJson = await axios.get("https://dani2.pythonanywhere.com/trasportcom/companies/").then(response => response.data)
                .then(data => {
                    let features = [];
                    for (let item of data) {
                        const feature = {
                            type: "Feature",
                            properties: {
                                title: item.company_name,
                                description: item.description,
                                image: item.picture,
                                review: 5
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
            map2.loadImage(
                "marker5",
                function (error, image) {
                    if (error) throw error;
                    map2.addImage("custom-marker", image);
                    // Add a GeoJSON source with multiple points
                    map2.addSource("points", {
                        type: "geojson",
                        data: {
                            type: "FeatureCollection",
                            features: geoJson.features,
                        },
                    });
                    // Add a symbol layer
                    map2.addLayer({
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
                    map2.setFilter(
                        'points',
                        ['all', ['==', 'title', value]]
                    );
                    // }
                }
                else {
                    map2.setFilter(
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
        p.textContent = "transport";
        filterGroup.appendChild(p);
        const select = document.createElement('select');
        select.id = 'points';

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
                map2.setFilter(
                    'points',
                    ['all', ['==', 'review', '1']]
                );
            } else if (value == '2') {
                map2.setFilter(
                    'points',
                    ['all', ['==', 'review', '2']]
                );
            } else if (value == '3') {
                map2.setFilter(
                    'points',
                    ['all', ['==', 'review', '3']]
                );
            } else if (value == '4') {
                map2.setFilter(
                    'points',
                    ['all', ['==', 'review', '4']]
                );
            } else if (value == '5') {
                map2.setFilter(
                    'points',
                    ['all', ['==', 'review', '5']]
                );
            } else {
                map2.setFilter(
                    'points',
                    null
                );
            }
        });
        // const checkbox = document.createElement('input');
        // checkbox.type = 'checkbox';
        // checkbox.id = 'pharmacy';
        // checkbox.checked = false;
        // filterGroup.appendChild(checkbox);

        // const label = document.createElement('label');
        // label.setAttribute('for', 'pharmacy');
        // label.textContent = 'Night Shift';
        // filterGroup.appendChild(label);

        // // When the checkbox changes, update the visibility of the layer.
        // checkbox.addEventListener('change', (e) => {
        //     const value = e.target.checked;
        //     if (value) {
        //         map2.setFilter(
        //             'points',
        //             ['all', ['==', 'Night', true]]
        //         );
        //     } else {
        //         map2.setFilter(
        //             'points',
        //             null
        //         );
        //     }
        // });
        const filterInputt = document.createElement('input');
        filterInputt.type = 'text';

        filterInputt.placeholder = ' Enter medicin name';
        filterGroup.appendChild(filterInputt);

        // When the user presses enter, make an Axios call to fetch data from the API.
        filterInput.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                const value = e.target.value;
                axios.get(`/api/search?query=${value}`).then((response) => {
                    // Do something with the data from the API.
                });
            }
        });
        const button = document.createElement('button');
        button.type = 'button';
        // button.style.top='-80px';
        button.style.left='170px';
        button.textContent = 'give the closer company';
        filterGroup.appendChild(button);

        // When the user clicks the button, make an Axios call to fetch data from the API.
        button.addEventListener('click', async () => {
            const geoJson = await axios.get("https://dani2.pythonanywhere.com/trasportcom/companies/").then(response => response.data)
                .then(data => {
                    let features = [];
                    for (let item of data) {
                        const feature = {
                            type: "Feature",
                            properties: {
                                title: item.company_name,
                                description: item.description,
                                image: item.picture,
                                review: 5
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
        map2.addControl(new mapboxgl.NavigationControl(), "top-right");
        map2.on("click", e => {
            const features = map2.queryRenderedFeatures(e.point, {
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
                        routeNumber={feature?.properties?.review}
                        city={feature?.properties?.description}
                        type={feature?.properties?.title}
                        imagee={feature?.properties?.image}
                        rate={feature?.properties?.review}
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
                    .addTo(map2)
            }
        })


        directions.setOrigin([36.717, 34.716]);
        // directions.setDestination([36.817,34.816]);
        //directions.controls.inputs=false;
        map2.addControl(directions, "top-left");

        map2.scrollZoom.enable();

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

        return () => map2.remove();

    }, []);

    //console.log(geoJson);
    return <><script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.1/mapbox-gl-directions.js"></script>
        <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.1/mapbox-gl-directions.css" type="text/css"></link>
        <nav id="filter-group" class="filter-group"></nav> <div class="filter-ctrl">
            <input id="filter-input" type="text" name="filter" placeholder="Filter by name"></input>

        </div><div ref={mapContainerRef2} style={{ width: "100%", height: "100vh" }} /></>;
};

export default Map5;
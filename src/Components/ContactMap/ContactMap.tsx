'use client'

import React from 'react';
import {Clusterer, Map, Placemark, YMaps} from "@pbe/react-yandex-maps";

import styles from "./ContactMap.module.css";

export const ContactMap = ({center, defaultPlacemark, placemarks, zoom}) => {
    return (
        <YMaps>
            <Map
                className={styles.map}
                defaultState={{
                    center: center ? center : [55.575271, 39.529011],
                    zoom: zoom ? zoom : 15
                }}

            >
                {defaultPlacemark && <Placemark defaultGeometry={[55.575271, 39.529011]}/>}
                {placemarks ? <Clusterer
                    options={{
                        preset: "islands#invertedVioletClusterIcons",
                        groupByCoordinates: false,
                    }}
                >
                    {placemarks.map((coordinates, index) => (
                        <Placemark key={index} geometry={coordinates.center}/>
                    ))}
                </Clusterer> : null}
            </Map>
        </YMaps>
    );
};
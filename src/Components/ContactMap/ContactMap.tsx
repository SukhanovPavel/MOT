'use client'

import React from 'react';
import {Clusterer, Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
import type { LngLat } from "@yandex/ymaps3-types";

import styles from "./ContactMap.module.css";

type Props = {
    center: number[];
    defaultPlacemark: boolean;
    placemarks: {center: number[]}[];
    zoom: number;
}
export const ContactMap = ({center, defaultPlacemark, placemarks, zoom}: Props) => {
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
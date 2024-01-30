"use client";

import React, { useMemo } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { Card, CardBody, Skeleton } from "@nextui-org/react";

export function MapComponent() {
    const libraries = useMemo(() => ["places"], []);
    const mapCenter = useMemo(
        () => ({ lat: 28.34732370882098, lng: -81.41418625023127 }),
        [],
    );

    const mapOptions = useMemo<google.maps.MapOptions>(
        () => ({
            mapTypeControl: true,
            mapTypeControlOptions: {
                // style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                mapTypeIds: ["roadmap", "satellite"],
            },
            clickableIcons: true,
            scrollwheel: true,
        }),
        [],
    );

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDwFMHUzK4CWPQh-WRwH4oSRa7Xa9MEPPk",
        libraries: libraries as never,
    });

    if (!isLoaded) {
        return (
            <Card className="h-[420px] w-full max-w-[420px]">
                <CardBody>
                    <Skeleton className="rounded-lg">
                        <div className="h-[330px] rounded-lg bg-default-300"></div>
                    </Skeleton>
                </CardBody>
            </Card>
        );
    }

    return (
        <Card className="h-[420px] w-full max-w-[420px] ">
            <CardBody>
                <GoogleMap
                    options={mapOptions}
                    zoom={18}
                    center={mapCenter}
                    mapTypeId={google.maps.MapTypeId.ROADMAP}
                    mapContainerStyle={{ width: "100%", height: "100%" }}
                    onLoad={() => console.log("Map Component Loaded...")}
                >
                    <MarkerF
                        position={mapCenter}
                        onLoad={() => console.log("Marker Loaded")}
                    />
                </GoogleMap>
            </CardBody>
        </Card>
    );
}

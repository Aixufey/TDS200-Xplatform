import React from "react";
import { Text, Image } from "react-native";






interface IWeatherItem {
    children?: React.ReactNode;
    location: {
        name?: string,
        region?: string,
        country?: string,
    },
    current: {
        temp_c: string,
        condition: {
            text: string,
            icon: string,
        }
    }
}
const WeatherItem: React.FC<IWeatherItem> = ({ location, current }) => {
    return (
        <>
            <Text>{location.name}</Text>
            <Text>{location.country}</Text>
            <Text>{location.region}</Text>
            <Text>{`${current.temp_c}°C`}</Text>
            <Text>{current.condition.text}</Text>
            <Image style={{ objectFit: 'contain', width: 76, height: 76 }}
                source={{ uri: `https://${current.condition.icon.toString().substring(2)}` }} />
        </>
    )
}
export default WeatherItem;
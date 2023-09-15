import React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native'; 






/**
 * Same Route names as the file,
 * The key is the path that will navigate to the page
 */
type RouteListProps = {
    Welcome: undefined,
    HomeRoutes: undefined,
    DetailsPage: undefined,
    Search: undefined,
    Favorites: undefined
}
type SolarNavigationProps = NavigationProp<RouteListProps>

const useOwnNavigation = () => {
    const navigation = useNavigation<SolarNavigationProps>();   


    const navigate = (path: keyof RouteListProps) => {
        navigation.navigate(path);
    };

    const goBack = () => {
        navigation.goBack();
    };

    return { 
        navigate, 
        goBack
    }
};

export default useOwnNavigation;
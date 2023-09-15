import React from 'react';
import { NavigationProp, useNavigation } from "@react-navigation/native"







/**
 * Only need the Keys to navigate to screen
 */
type RoutePageProps = {
    CounterPage: undefined,
    CurrencyPage: undefined,
    BasicFormPage: undefined,
    NotePage: undefined,
}
type AppSpaceProps = NavigationProp<RoutePageProps>
const useCustomNavigation = () => {
    const navigation = useNavigation<AppSpaceProps>();
    
    const navigate = (path: keyof RoutePageProps) => {
        navigation.navigate(path);
    };

    const goBack = () => {
        navigation.goBack();
    };

    return {
        navigate,
        goBack,
    };
}

export default useCustomNavigation;
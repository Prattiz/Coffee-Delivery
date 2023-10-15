import "styled-components";

export const defautTheme = {
    
    yellow_800: '#C47F17',
    yellow_200: '#DBAC2C',
    yellow_100: '#F1E9C9',

    purple_800: '#4B2995',
    purple_300: '#8047F8',
    purple_100: '#EBE5F9',

    black: '#272221',
    
    gray_500:"#403937",
    gray_400:"#574F4D",
    gray_300: "#8D8686",
    gray_200: "#8D8686",

    white: '#FFF',
    white_500:"#E6E5E5",
    white_400:"#EDEDED",
    white_300:'#F3F2F2',
    white_200: "#FAFAFA",

}

type themeType = typeof defautTheme

declare module "styled-components"{
    export interface defautTheme extends themeType{}
}
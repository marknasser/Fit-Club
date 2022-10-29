import { keyframes } from "styled-components";

export const swipeLeft = keyframes`
0%{
    right: 7px;
    } 

100%{
    /* left: 7px; */
    right:calc(100% - (7rem + 7px)) ;
    }`;

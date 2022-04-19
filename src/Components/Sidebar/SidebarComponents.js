import styled from "styled-components";

export const SidebarWrapper = styled.div`
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 400px;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
background-color: black
`

export const SearchWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 5px;
background-color: blue
`

export const SearchInput =styled.input`
background-color: white;
display: flex;
justify-content: center;
text-align: center;
border: solid 2px green;
border-radius: 3px;
`
export const SearchButtonWrapper = styled.div`
display: flex;
align-items: center;
background-color: purple;
justify-content: center;
`

export const SearchButton =styled.button`
background: none;
font-size: 20px;
margin: 5px;
color: white;
padding: 4px 8px;
border 2px solid white;
border-radius 3px;
display: block;
text-decoration: none;
font: inherit;
cursor: pointer;

:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    border: 3px solid red;
    color: #B8AAB9;
    transition: 200 ease-in-out;
}
`
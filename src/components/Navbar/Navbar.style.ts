import styled from 'styled-components'

export const NavbarStyle = styled.div`
        display: flex;

    .sidebar {
        border: 1px solid gray;
        padding-top: 30px;
        background-color: black;
        width: 25vw;
        height: 100vh;
        text-align: center;
    }

    img {
        border: 4px solid white;
        width: 270px;
        height: 270px;
        border-radius: 500px;
        object-fit: cover;
    }

    .nav-container {
        border: 1px solid gray;
        color: white;
        margin-top: 40px;
        letter-spacing: 2px;
        font-size: 30px; 
    }

    nav ul {
        padding-top: 30px;
        padding-bottom: 30px;
    }

    .nav-container ul li {
        list-style-type: none;
        line-height: 50px;
        transition: transform 0.3s;
    }

    .nav-container ul li:hover {
        background-color: #2196F3;
        transform: scale(1.2);
    }

    footer {
        color: white;
        font-size: 30px;
        padding-top: 15px;
    }
    
    @keyframes font-hover {
        0% {
            font-size: 30px;
        }
        50% {
            font-size: 35px;
        }
        100% {
            font-size: 30px;
        }
    }

    .nav-item {
        text-decoration: none;
        color: white;
    }
`
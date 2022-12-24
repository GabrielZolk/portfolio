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

    @media (max-width: 1200px) {
    .sidebar {
        width: 100%;
        height: auto;
    }

    img {
        width: 190px;
        height: 190px;
    }

    nav ul {
        padding-top: 7rem;
    }

    .nav-container {
        height: 55vh;
    }

    nav ul li {
        font-size: 35px;
    }

    footer {
        width: 200px;
        height: 100vh;
        color: white;
        font-size: 30px;
        padding-top: 15px;
    }
}

    @media (max-width: 480px) {
    .sidebar {
        width: 100%;
        height: auto;
    }

    img {
        width: 150px;
        height: 150px;
    }

    nav ul {
        padding-top: 5rem;
        padding-bottom: 5rem;
    }

    .nav-container {
        height: 55vh;
    }

    nav ul li {
        font-size: 20px;
    }

    footer {
        height: 100vh;
        color: white;
        font-size: 20px;
        padding-top: 15px;
    }
}

@media (max-width: 360px) {
    .sidebar {
        width: 100%;
        height: auto;
    }

    img {
        width: 100px;
        height: 100px;
    }

    nav ul {
        padding-top: 1rem;
    }

    .nav-container {
        height: 55vh;
    }

    nav ul li {
        font-size: 15px;
    }

    footer {
        height: 100vh;
        color: white;
        font-size: 14px;
        padding-top: 15px;
    }
}

`
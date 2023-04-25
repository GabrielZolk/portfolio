import styled from 'styled-components'

export const NavbarStyle = styled.div`
        width: 280px;
        height: 100vh;
    .sidebar {
        border: 1px solid gray;
        padding-top: 0.5rem;
        background-color: black;
        width: 280px;
        height: 100vh;
        text-align: center;
        position: fixed;
    }

    img {
        border: 4px solid white;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        object-fit: cover;
    }

    .nav-container {
        border: 1px solid gray;
        color: white;
        margin-top: 0.3rem;
        letter-spacing: 2px;
    }

    .nav-item {
        font-size: 1.5rem;
    }

    nav ul {
        padding-top: 1rem;
        padding-bottom: 1rem;
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
        font-size: 1.3rem;
        padding-top: 1.3rem;
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

    @media (max-width: 1110px) {
        img {     
            width: 150px;
            height: 150px;   
        }
    }

    @media (max-width: 944px) {
        footer {
            font-size: 1rem;
        }
    }
    
    @media (max-width: 799px) {
        img {
            width: 80px;
            height: 80px;
        }

        .nav-item {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 557px) {
        img {
            width: 70px;
            height: 70px;
        }

        .nav-item {
            font-size: 0.6rem;
        }
    }

    @media (max-width: 419px) {
        img {
            width: 60px;
            height: 60px;
        }

        .nav-container {
            font-size: 0.6rem;
        }

        footer {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 340px) {
        img {
            width: 50px;
            height: 50px;
        }

        .nav-container {
            font-size: 0.5rem;
        }

        footer {
            font-size: 0.6rem;
        }
    }

`
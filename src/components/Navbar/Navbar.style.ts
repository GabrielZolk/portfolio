import styled from 'styled-components'

export const NavbarStyle = styled.div`
    
    width: 20vw;
        height: 100vh;
    .sidebar {
        border: 1px solid gray;
        padding-top: 0.5rem;
        background-color: black;
        width: 20vw;
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
        font-size: 30px;
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

    footer {
        color: white;
        background-color: black;
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
            width: 180px;
            height: 180px;   
        }
    }

    @media (max-width: 944px) {
        footer {
            font-size: 20px;
        }
    }
    
    @media (max-width: 799px) {
        img {
            width: 130px;
            height: 130px;
        }

        .nav-container {
            font-size: 20px;
        }
    }

    @media (max-width: 557px) {
        img {
            width: 90px;
            height: 90px;
        }

        .nav-container {
            font-size: 14px;
        }
    }

    @media (max-width: 419px) {
        img {
            width: 80px;
            height: 80px;
        }

        .nav-container {
            font-size: 10px;
        }

        footer {
            font-size: 15px;
        }
    }

    @media (max-width: 340px) {
        img {
            width: 70px;
            height: 70px;
        }

        .nav-container {
            font-size: 8px;
        }

        footer {
            font-size: 12px;
        }
    }

`
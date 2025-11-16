import { useNavigate } from 'react-router-dom'
import Experience from './Experience';
import About from './About';

//import NavBar from './NavBar';

const Home = () => {
    const navigate = useNavigate()

    const goToAbout = () => {
        navigate('/about')
    }

    const goToExperience = () => {
        navigate('/expierence')
    }

    return (
        <>
            <h1 className='font-bold text-lg'>Welcome, I'm Everett</h1>
            <p>
            Here is a place where I am showcasing several projects I have been working on.<br />
            If you want to check some of them out, navigate to the projects page.<br />
            And my about page has more information on me.
            </p>
        </>

    );
};


export default Home
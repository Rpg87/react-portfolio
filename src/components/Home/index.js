import LogoR from '../../assets/images/LogoR.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import RAnimated from '../RAnimated';
import Logo from './Logo';
import VibrantLines from '../VibrantLines';
import Loader from 'react-loaders';
import TypeAnimation from '../TypeAni';




const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [ltClass, setLtClass] = useState('text-');
    const rArray = ['R']
    const nameArray = ['a', 'q', 'u', 'e', 'l'];
    const jobArray = [
        'w',
        'e',
        'b',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
    ]

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 7000)
    }, [])
    useEffect(() => {
        return setTimeout(() => {
            setLtClass('text-hover')
        }, 7000)
    }, [])


    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                        <span className={letterClass} >H </span>
                        <span className={`${letterClass} _7`} >o </span>
                        <span className={`${letterClass} _8`} >l </span>
                        <span className={`${letterClass} _9`} >a </span>
                        <span className={`${letterClass} _10`} >, </span>

                        <br />
                        <span className={`${letterClass} _11`} >m </span>
                        <span className={`${letterClass} _12`} >e </span>
                        <span>&nbsp;</span>
                        <span className={`${letterClass} _13`} >l </span>
                        <span className={`${letterClass} _14`} >l </span>
                        <span className={`${letterClass} _15`} >a </span>
                        <span className={`${letterClass} _16`} >m </span>
                        <span className={`${letterClass} _17`} >o </span>
                        <span>&nbsp;</span>
                        <span>
                            <span className='uniqueletter'>
                                <RAnimated letterClass={ltClass} strArray={rArray} idx={18} />
                            </span>
                            <RAnimated letterClass={letterClass} strArray={nameArray} idx={16} />
                        </span>
                        <br />
                        <span className={`${letterClass} _24`} >y </span>
                        <span>&nbsp;</span>
                        <span className={`${letterClass} _25`} >s </span>
                        <span className={`${letterClass} _26`} >o </span>
                        <span className={`${letterClass} _27`} >y </span> <TypeAnimation />



                    </h1>


                    <h2>Jr Front-End / Code Dreamer</h2>
                    <Link to='/contact' className='flat-button' > CONTRÁTAME </Link>
                </div>

                <div>

                </div>
            </div >
            <Loader type='pacman' />
        </>
    );

}

export default Home;
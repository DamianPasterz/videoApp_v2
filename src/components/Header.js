import React, { useState } from 'react'
import { Link } from "react-router-dom";
import '../styles/Header.css';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { useFilmContext } from '../context/film_context';



function Header() {
    const addItem = useFilmContext();
    const [inputSearch, setInputSearch] = useState('');
    const [provider, setProvider] = useState("YOUTUBE");
    const [isDisabled, setIsDisabled] = useState(false);



    const handleSubmit = e => {
        e.preventDefault();
        if (!inputSearch.length) return;
        console.log(inputSearch);
        addItem(inputSearch, provider, "Header");
        setInputSearch('');
        setProvider("YOUTUBE");
        setIsDisabled(true);
        console.log(inputSearch);
    };
    return (
        <div className='header'>
            <div className='header__left' >
                <MenuSharpIcon />
                <Link to="/">

                </Link>

            </div>

            <div className='header__input' onSubmit={handleSubmit}>
                <input
                    onChange={e => setInputSearch(e.target.value)}
                    value={inputSearch}
                    placeholder='Search'
                    name='url'
                    id='url'
                    type="text" />

                <Link to={`/search/${inputSearch}`}>
                    <SearchSharpIcon className='header__innputButton' />
                </Link>
            </div>
            <div className='header__icons'>
                <VideoCallSharpIcon className='header__icon' />
                <AppsSharpIcon className='header__icon' />
                <NotificationsSharpIcon className='header__icon' />
                <AccountCircleSharpIcon />


            </div>

        </div>
    )
}

export default Header

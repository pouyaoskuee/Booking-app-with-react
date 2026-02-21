import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <button className={'heder__bookmarks'}>bookmark</button>
            <div className={'header__navbar'}>
                <input className={'header__search border-r'} placeholder={'📍 where to go?'}/>
                <div className={'header__date border-r'}>
                    <span></span>
                    <p>02/21/2026 to 02/21/2026 </p>
                </div>
                <div className={'header__option border-r'}>
                    1 adult  •  0 children  • 1 room
                </div>
                <button className={'header__search-btn'}>🔎</button>
            </div>
            <button className={'header__login'}>login</button>

        </header>
    );
};

export default Header;
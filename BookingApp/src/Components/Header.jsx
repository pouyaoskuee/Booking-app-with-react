import {useRef, useState} from 'react';
import useOutsideClick from "../Hooks/useOutsideClick.js";
import {MdLocationOn} from 'react-icons/md'
const Header = () => {
    const [destination, setDestination] = useState('')
    const [show, setShow] = useState(false);
    const [option, setOption] = useState({
        adult: 1,
        children: 0,
        room: 1,
    })

    console.log(show)

    const handleOption = (name, operation) => {
        setOption((prev) => {
            return {
                ...prev,
                [name]: operation === 'inc' ? option[name] + 1 : option[name] - 1
            }

        })
    }

    return (
        <header className="header">
            <button className={'heder__bookmarks'}>bookmark</button>
            <div className={'header__navbar'}>
                <MdLocationOn/> <input className={'header__search border-r'} name={'destination'} id={'destination'}
                 placeholder={' where to go?'} onChange={(e) => setDestination(e.target.value)}/>
                <div className={'header__date border-r'}>
                    <span></span>
                    <p>02/21/2026 to 02/21/2026 </p>
                </div>
                <div onClick={(e) => setShow(!show)} className={'header__option border-r'}>
                    {option.adult} adult • {option.children} children • {option.room} room
                </div>
                <button className={'header__search-btn'}>🔎</button>
            </div>
            <button className={'header__login'}>login</button>
            {show && <Modal_filter option={option} handleOption={handleOption} setShow={setShow}/>}
        </header>
    );
};

export default Header;

function Modal_filter({option, handleOption , setShow}) {

    const optionRef = useRef();
    useOutsideClick(optionRef , ()=>setShow(false));

    return (
        <div className={'Modal-filter'} ref={optionRef}>
            <Modal_items type={'adult'} minLimit={1} option={option} handleOption={handleOption}/>
            <Modal_items type={'children'} minLimit={0} option={option} handleOption={handleOption}/>
            <Modal_items type={'room'} minLimit={1} option={option} handleOption={handleOption}/>

        </div>
    )
}

function Modal_items({type, minLimit, option, handleOption}) {
    return (
        <div className={'modal-filter__item'}>
            <p>{type}</p>
            <div className={'modal-filter__nums'}>
                <button onClick={() => handleOption(type, 'dec')} disabled={option[type] <= minLimit}>-</button>
                <span>{option[type]}</span>
                <button onClick={() => handleOption(type, 'inc')}>+</button>
            </div>

        </div>
    )
}



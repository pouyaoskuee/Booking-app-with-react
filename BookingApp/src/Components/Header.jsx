import {useRef, useState} from 'react';
import useOutsideClick from "../Hooks/useOutsideClick.js";
import {MdLocationOn} from 'react-icons/md'
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import {format} from "date-fns";


const Header = () => {
    const [destination, setDestination] = useState('')
    const [show, setShow] = useState(false);
    const [option, setOption] = useState({
        adult: 1,
        children: 0,
        room: 1,
    })

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key:'selection'
        }
        
    ])


    const [openDate, setOpenDate] = useState(false)


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
                <div  className={'header__date border-r'} onClick={() => setOpenDate(!openDate)}>
                    <p>{`${format(date[0].startDate,'MM/dd/yyyy')} to ${format(date[0].startDate,'MM/dd/yyyy')}`}</p>
                    {openDate && <DateRange onChange={item=> setDate([item.selection])} ranges={date} minDate={new Date()} className={'DateRange'}  />}
                </div>

                <div onClick={(e) => setShow(!show)} className={'header__option border-r'}>
                    {option.adult} adult • {option.children} children • {option.room} room
                    {show && <Modal_filter option={option} handleOption={handleOption} setShow={setShow}/>}
                </div>
                <button className={'header__search-btn'}>🔎</button>
            </div>
            <button className={'header__login'}>login</button>

        </header>
    );
};

export default Header;

function Modal_filter({option, handleOption , setShow}) {

    const optionRef = useRef();
    useOutsideClick(optionRef , 'header__option' , ()=>setShow(false));

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



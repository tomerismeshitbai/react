import "./header.css"
import {faBed, faCalendarDays, faCar, faPerson, faPlane, faPlay, faTaxi} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { useState } from "react";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {

    const [destination, setDestination] = useState("");

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

    const handleOption = (name, operation) => {
        setOptions(prev=> {
            return {
                ...prev, [name]: operation === "i" ? options[name]+1 : options[name]-1,
            };
        });
    };

    const navigate = useNavigate()

    const handleSearch = () => {    
        navigate("hotels", {state: {destination, date, options}})
    }

    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <ul className="headerList">
                    <CustomLink href="/" >
                        <span>
                            <FontAwesomeIcon icon={faBed} />
                            &nbsp;&nbsp;Stays
                        </span>
                    </CustomLink>
                    <CustomLink href="/flights">
                        <span>
                            <FontAwesomeIcon icon={faPlane} />
                            &nbsp;&nbsp;Flights
                        </span>
                    </CustomLink>
                    <CustomLink href="/carrentals">
                        <span>
                            <FontAwesomeIcon icon={faCar} />
                            &nbsp;&nbsp;Car rentals
                        </span>
                    </CustomLink>
                    <CustomLink href="/attractions">
                        <span>
                            <FontAwesomeIcon icon={faPlay} />
                            &nbsp;&nbsp;Attractions
                        </span>
                    </CustomLink>
                    <CustomLink href="/taxis">
                        <span>
                            <FontAwesomeIcon icon={faTaxi} />
                            &nbsp;&nbsp;Airport taxis
                        </span>
                    </CustomLink>
                </ul>
                { type !== "list" &&
                <>
                    <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
                    <p className="headerDesc">
                        Get rewarded for your travels - unlock instant savings of 10% or more with a free TripTop account
                    </p>
                    <CustomLink href="/login">
                    <button className="headerBtn">Sign in / Register</button>
                    </CustomLink>
                    <div className="headerSearch">
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                            <input type="text"
                            placeholder="Where are you going"
                            className="headerSearchInput" 
                            onChange={e => setDestination(e.target.value)}
                            />
                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                            <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={(item) => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="date"
                                minDate={new Date()}
                            />}
                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                            <span onClick={() => {setOpenOptions(!openOptions)}} className="headerSearchText">{`${options.adult} adult · ${options.children} child · ${options.room} room`}</span>
                            {openOptions && <div className="options">
                                <div className="optionItem">
                                    <span className="optionText">Adult</span>
                                    <div className="optionCounter">
                                        <button disabled={options.adult <= 1} className="optionCounterButton" onClick={() => handleOption("adult", "d")}>-</button>
                                        <span className="optionCounterNumber">{options.adult}</span>
                                        <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>                                    
                                    </div>

                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Children</span>
                                    <div className="optionCounter">
                                        <button disabled={options.children <= 0} className="optionCounterButton" onClick={() => handleOption("children", "d")}>-</button>
                                        <span className="optionCounterNumber">{options.children}</span>
                                        <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>                                    
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Room</span>
                                    <div className="optionCounter">
                                        <button disabled={options.room <= 1} className="optionCounterButton" onClick={() => handleOption("room", "d")}>-</button>
                                        <span className="optionCounterNumber">{options.room}</span>
                                        <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>                                    
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <div className="headerSearchItem">
                            <button className="headerBtn" onClick={handleSearch}>Search</button>
                        </div>
                    </div>
                </>
                }
            </div>
            
        </div>
    )
}


function CustomLink({href, children, ...props}) {
    const path = window.location.pathname;
    return (
        <li className={path === href ? "headerListItem active" : "headerListItem"}>
            <a href={href}>{children}</a>
        </li>
    );
}

export default Header;
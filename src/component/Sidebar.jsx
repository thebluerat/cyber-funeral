import React, {useState} from "react";
import '../App.css'
import {
    GiTreeBranch,
    GiIncense
} from "react-icons/gi";
import {BsJournalAlbum} from "react-icons/bs";
import {MdOutlineForum} from "react-icons/md";
import {FaBars} from "react-icons/fa"
import { NavLink } from "react-router-dom";

const Sidebar =({children})=> {
    const[isOpen, setIsOpen] = useState(false);
    const toggle =()=> setIsOpen (!isOpen)
    const menuItem=[
        {
            path: "/",
            name: "홈",
            icon: <GiTreeBranch />
        },
        {
            path: "/funeral",
            name: "장례식 기록",
            icon: <GiIncense />
        },
        {
            path: "/gallery",
            name: "공유 갤러리",
            icon: <BsJournalAlbum />
        },
        {
            path: "/forum",
            name: "자유 게시판",
            icon: <MdOutlineForum />
        },
    ]
    return(
        <div className="container">
            <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
                <div className="top_section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">게시판</h1>
                    <div style={{marginLeft: isOpen ? "150px" : "0px"}}className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}}className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
            </div>
            <main>{children}</main>
        </div>
    )
}

export default Sidebar;
import React, {useRef, useState} from "react";
import {Player} from '@lottiefiles/react-lottie-player';
import '../component/style/Dashboard.css';

const Dashboard =()=> {
    const inputRef = useRef(null);
    const [image, setImage] = useState("");

    const handleImageClick =()=> {
        inputRef.current.click();
    }
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(event.target.files[0]);
    }

    const lottieOptions = {
        loop: false,
    }

    return (
        <div>
            <h1>홈</h1>
            <div className="room">
                <div className="wall">
                    {/* 액자 */}
                    <div onClick={handleImageClick} style={{cursor: "pointer"}} className="frame">
                        <Player
                            autoplay
                            keepLastFrame={true}
                            options={lottieOptions}
                            speed={0.5}
                            src="https://assets4.lottiefiles.com/packages/lf20_s6vm71il.json"
                            style={{ height: '300px', width: '300px'}}
                        >
                            {image ? (
                                <img src={URL.createObjectURL(image)} className="picture"/>
                                ) : (
                                    <div class="frame-bg"/>
                                )
                            }
                        </Player>
                        <input 
                            type="file" 
                            ref={inputRef} 
                            onChange={handleImageChange}
                            style={{display: "none"}}
                        />
                    </div>
                    {/* 음악 H5AudioPlayer ? */}
                    
                </div>
                <div className="floor"></div>
            </div>
        </div>
    )
}

export default Dashboard;
import React, {useState} from 'react';
import "../styles/Wedding.css";
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import Img1 from "../Assets/wedding/5795.jpg";
import Img2 from "../Assets/wedding/5471.jpg";
import Img3 from "../Assets/wedding/6251.jpg";
import Img4 from "../Assets/wedding/5471.jpg";
import Img5 from "../Assets/wedding/6251.jpg";
import Img6 from "../Assets/wedding/5473.jpg";
import Img7 from "../Assets/wedding/2335.jpg";
import Img8 from "../Assets/wedding/5473.jpg";
import Img9 from "../Assets/wedding/6250.jpg";
import Img10 from "../Assets/wedding/6247.jpg";
import Img11 from "../Assets/wedding/6251.jpg";
import Img12 from "../Assets/wedding/5471.jpg";
import Img13 from "../Assets/wedding/6250.jpg";
import Img14 from "../Assets/wedding/6251.jpg";
import Img15 from "../Assets/wedding/5473.jpg";
// import { getImageSize } from 'next/dist/server/image-optimizer';

const Wedding = () => {
    let data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
        {
            id: 9,
            imgSrc: Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
        {
            id: 11,
            imgSrc: Img11,
        },
        {
            id: 12,
            imgSrc: Img12,
        },
        {
            id: 13,
            imgSrc: Img13,
        },
        {
            id: 14,
            imgSrc: Img14,
        },
        {
            id: 15,
            imgSrc: Img15,
        },
    ];
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState("");
    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }
  return (
    <div>
        <div className= {model ? "model open" : "model"}>
            <img src= {tempimgSrc} alt="img" />
            <CloseOutlined onClick={()=> setModel(false)} />3
        </div>
        <div className="gallery">
            {data.map((item, index) => {
                return(
                    <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} alt="wedding" style={{width:"100%"}} />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Wedding;
import React from 'react'
import "../css/profile.css"

export default function Profile({image,name,age,location,followers,likes,photos}) {
    return (
        <div className='card'>
            <div className='top'></div>
            <div className='bottom'>
                <div className='topPart'>
                    <div className='profilePicture'>
                        <img src={image} alt={name} className='image'/>
                    </div>
                    <div className='detail'>
                        <div className='name center'>
                            {name}
                            <span className='age faint'>
                                    {age}
                                </span>
                        </div>
                        <div className='location faint center'>
                            {location}
                        </div>
                    </div>
                </div>
                <div className='bottomPart'>
                    <div>
                        <div className='bold'>{followers}</div>
                        <div className='faint small'>followers</div>
                    </div>
                    <div>
                        <div className='bold'>{likes}</div>
                        <div className='faint small'>likes</div>
                    </div>
                    <div>
                        <div className='bold'>{photos}</div>
                        <div className='faint small'>photos</div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

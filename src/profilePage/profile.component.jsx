import React from 'react';
import './profile.styles.css'

const Profile = () => {
   return (
    <div>
        <div className="info-container">
            <div className='side-crop'>
                <img src={process.env.PUBLIC_URL + '../../public/HablotBrown.png'}></img>
            </div>
            <div className="bio-containter">
                <div className ="headline">
                    <div className="name">
                        <h1>Hablot Brown</h1>
                        <h4>1200 wax</h4>
                    </div>
                <div className="bio">
                    For three young guys who left college to pursue a music career, Hablot Brown produce eminently sophisticated, mature music. Whether you call their style neo-soul or R&B, the group’s tunes are full of profoundly expressive vocals, lockdown rhythms, and polished production. It’s that potent mix that saw the band’s first two singles, “Gone” and “Just Call,” streamed more than 1.5 million combined times in just twelve months, big numbers that helped earn them an opening spot on Tom Misch’s recent tour. Fresh of that experience, and still releasing hot songs like “Little Bit,” Hablot Brown recently took the time to talk about their inspirations, creative process, touring, and style with O.N.S.
                </div>
                </div>
                <div className="social-links">
                    <a class=" fa fa-facebook"></a>
                    <a class=" fa fa-instagram"></a>
                    <a class=" fa fa-twitter"></a>
                    <a class=" fa fa-spotify"></a>
                    <a class=" fa fa-soundcloud"></a>
                    <a class=" fa fa-applemusic"></a>
                </div>
            </div>
            <div className="statement-container">
                <h1>Artist Statement</h1>
                <div className = "statement">
                    Want to see Hablot Brown in concert? Find information on all of Hablot Brown’s upcoming concerts, tour dates and ticket information for 2021-2022.
                    Unfortunately there are no concert dates for Hablot Brown scheduled in 2021.
                    Songkick is the first to know of new tour announcements and concert information, so if your favorite artists are not currently on tour, join Songkick to track Hablot Brown and get concert alerts when they play near you, like 11954 other Hablot Brown fans.
                </div>
                <button>Become A Supporter</button>

            </div>
        </div>
    </div>
   )
}

export default Profile;
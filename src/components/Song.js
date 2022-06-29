import React from "react";

const Song = ({song, index}) => {
    return(
        <li className="song"> 
            <section>
                    <h2>Number: {index +1}</h2>
                    <br></br>
                    <h3>{song['im:artist']['label']}</h3>
                    <h4>{song['im:name']['label']}</h4>
                    <img src={song['im:image'][2]['label']} alt='Album Cover'/>
                    <br></br>
                    <audio className='audio'controls>
                        <source src={song.link[1].attributes.href}></source>
                    </audio>
                    <hr></hr>
            </section>
        </li>
    );
};

export default Song;
import React from "react";
import Song from './Song';

const SongsList = ({chart}) => {

    const songsItems = chart.map((song, index) => {
        return <Song song={song} key={index} index={index}/>
    });

    return(
        <div>
            <ul className="songs-list">
                {songsItems}
            </ul>
        </div>
    )
}

export default SongsList;
import React, {useState, useEffect} from 'react';
import SongsList from '../components/SongsList';

const ChartApp = () => {
    const [chart, setChart] = useState([]);

    
    const iTunesChart = () => {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(chart => setChart(chart.feed.entry));
    };

    useEffect(() => iTunesChart(),[]);
    
    return(
        <section className='chart-list'>
            <SongsList chart={chart}/>
        </section>
    );
};

export default ChartApp;
import { useEffect, useState } from 'react';
import './css/WorldMap.css';
import { invoke} from '@tauri-apps/api';

function WorldMap() {

    const numRows = 43;
    const numCols = 20;
    const [map, setMap] = useState(Array(numRows * numCols).fill(0));

    function getBorder() {
        const border = [342,343,344,345,346,347,341,7,27,47,67,87,107,127,147,167,187,207,227,247,267,287,307,327,8,9,10,11,31,51,71,91,111,131,151,152,153,173,174,194,195,196,197,198,199,219,220,240,260,280,300,320,340,360,380,400,420,440,480,500,520,540,560,580,579,599,598,618,617,637,657,656,676,696,716,715,735,755,775,795,815,816,836,834,833,813,812,732,752,772,792,651,671,691,711,731,630,631,570,590,610,529,549,569,527,528,547,567,587,585,586,545,565,444,464,484,504,524,544,423,443,402,403,381,382,361,854,855,856,460];
        const border_updated = [...map]
        border.forEach((element: number) => {
            border_updated[element-1] = 'X'
        });
        setMap(border_updated);
        const cities = invoke('get_cities', {});
        const cities_updated = [...map]
        
        // cities.then((value: any) => {
        //     value.forEach((element: any[]) => {
        //         cities_updated[element[2]-1] = 'C'
        //     });
        //     setMap(cities_updated);
        // });
        // console.log(map);
    }
    useEffect(() => {
        getBorder();
    }, []);
    return (
        <div className="grid">
        {map.map((value, index) => {
            if (value === 'X') {
                return (
                    <div key={index} className="borderless-box black">X</div>
                )
            }
            return (
                <div key={index} className="box">{index}</div>
            )
        })}
        </div>
    );
}

export default WorldMap;
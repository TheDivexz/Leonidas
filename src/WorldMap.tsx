import './css/WorldMap.css';

function WorldMap() {
    // Define the number of rows and columns for the grid
    const numRows = 43;
    const numCols = 20;

    // Create an array to hold individual box elements
    const boxes = [];
    const used = [538,553,296,494,295,362,315,695,276,228,712,275,297,256,236,316,88,835,434,255,317,558,814,395,348,277,235,578,474,456,257,518,559,368,519,237,557,338,534,794,193,498]
    const border = [362,342,343,344,345,346,347,341,7,27,47,67,87,107,127,147,167,187,207,227,247,267,287,307,327,8,9,10,11,31,51,71,91,111,131,151,152,153,173,174,194,195,196,197,198,199,219,220,240,260,280,300,320,340,360,380,400,420,440,480,500,520,540,560,580,579,599,598,618,617,637,657,656,676,696,716,715,735,755,775,795,815,816,836,834,833,813,812,732,752,772,792,651,671,691,711,731,630,631,570,590,610,529,549,569,527,528,547,567,587,585,586,545,565,444,464,484,504,524,544,423,443,402,403,381,382,361,854,855,856,460]
    for (let i = 0; i < numRows * numCols; i++) {
        if (used.includes(i+1)) {
            boxes.push(<div key={i} className="box red">{i + 1}</div>);
            continue;
        }
        else if (border.includes(i+1)) {
            boxes.push(<div key={i} className="borderless-box black">X</div>);
            continue;
        }
        boxes.push(<div key={i} className="box">{i + 1}</div>);
    }
    return (
        <div className="grid">
        {boxes}
        </div>
    );
}

export default WorldMap;
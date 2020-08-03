import React /*,{useState, useEffect}*/ from 'react'
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGif';
import { useFetchGif } from '../hooks/useFetchGif';

export const GifGrid = ({category}) => {

    const { data:images, loading } = useFetchGif(category);
    // const [count, setCount] = useState(0);
    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifs(category)
    //         .then( setImages );
    // }, [ category ]);

    // const getGifs = async() => {
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=eeHpmLG88Bq9kJat3GstH83c1Kggo6UI`;
    //     const resp = await fetch(url);
    //     const {data} = await resp.json();
    //     const gifs = data.map(img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images.downsized_medium.url
    //         }
    //     });
    //     console.log(gifs);
    //     setImages(gifs);
    // }
    //getGifs();

    return (
        <>
        <h4 className="animate__animated animate__fadeIn">{ category }</h4>
        { loading && <p>Loading...</p> }
        <div className="card-grid">
            {
                images.map((img) => (
                    <GifGridItem 
                        key = { img.id }
                        {...img}
                        // img = { img }
                    />
                ))
            }
            {/* <ol>{images.map(({id, title}) => (
                <li key={id}>{title}</li>
            ))}</ol> */}
            {/* <ol>{images.map(img => (
                <li key={img.id}>{img.title}</li>
            ))}</ol> */}
            {/* <h3>{count}</h3>
            <button onClick={()=>setCount(count + 1)}>+</button> */}
        </div>
        </>
    )
}

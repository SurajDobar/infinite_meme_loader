import { useState,useRef,useEffect,useCallback} from 'react';
import "./memeloader.css"

const Imagesloader = () => { 
    const [images, setimages] = useState([])
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    
    const [hasStarted, setHasStarted] = useState(false); 
    const loader = useRef(null)
    
    const fetchMemes = useCallback(async () => {
        if (loading) return
        setLoading(true)

        const response = await fetch(`https://meme-api.com/gimme/9`);
        const data = await response.json()
        setimages((previmages) => [...previmages, ...data.memes])
        setLoading(false);

        
    }, [loading])
    
    useEffect(() => {
        if (hasStarted && page > 1) {
            fetchMemes()
        }
    }, [page, hasStarted])
    
    const handleStartLoading = () => {
        if (!hasStarted) {
            setHasStarted(true);
            fetchMemes();
        } else {
            fetchMemes();
        }
    };
    


    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting && !loading && hasStarted) {
            setPage((prevPage) => prevPage + 1);
        }
    }, [loading, hasStarted])
    
    useEffect(() => {
        const option = { root: null, rootMargin: "20px", threshold: 0 }
        const observer = new IntersectionObserver(handleObserver, option);
        const currentLoader = loader.current;
        if (currentLoader) {
            observer.observe(currentLoader)
        }
        return () => {
            if (currentLoader) { observer.unobserve(currentLoader) };
        }
    }, [handleObserver])

    return (
        <div className='bg-gray-500' > 
            <h1 className=' text-2xl lg:text-4xl md:text-4xl text-white flex justify-center font-bold bg-gray-500' >INFINITE MEME LOADER</h1>
            <div className='flex justify-center'> 
                <button onClick={handleStartLoading} className=' m-4 px-4 py-2 bg-cyan-500 rounded-full hover:cursor-pointer'>
                    {images.length === 0 ? 'Memes' : 'Load More'}
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ...">
                {images.map((meme, index) => (
                    <div id="memeCard" className="bg-gray-800 border-solid border-orange-900 border flex flex-col ;" 
                         
                         key={`${meme.postLink}-${index}`}>
                        <div className=' bg-gray-700 p-2 pb-2.5 ' style={{margin:"0px 0px 12px 0px"}}>
                            <h1 className='text-white  brightness-91 ml-2 col-span-9 font-semibold font-stretch-expanded '>{meme.title} </h1>
                        </div>
                        <img src={meme.url} className="w-full h-80 object-contain " />
                        <div className=' font-mono pt-2 text-white flex'>
                            from: <a href={meme.postLink} target='blank' className='text-blue-400 hover:text-purple-500 underline  decoration-3 hover:decoration-purple-500 decoration-blue-600'> r/{meme.subreddit}</a></div> 
                            
                    </div> 
                ))}
            </div>
            {hasStarted && <div ref={loader} />}
        </div>
    )
}

export default Imagesloader
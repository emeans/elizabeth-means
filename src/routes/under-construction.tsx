import './under-construction.scss';

export default function UnderConstruction() {

    /* Set width of all animated text to match container */
    const parent: NodeListOf<Element> = document.querySelectorAll('.animate-text');
    for (let i = 0; i < parent.length; i++) {
        (parent[i] as HTMLElement).style.width = parent[i].children[0].clientWidth + "px"; 
    }

    return (
        <div className='under-construction'>
            <div className="bg-text-container">
                <div className="animate-text">
                    <span>coming soon&nbsp;</span>
                    <span>under construction&nbsp;</span>
                </div>
                <div className="animate-text left">
                    <span>coming soon&nbsp;</span>
                    <span>under construction&nbsp;</span>
                </div>
            </div>
        
            <div className="container">
                <div className="col">
                    <h1>Hi there…</h1>
                    <p>As you can see, I don&apos;t have any of my work posted right now. I wish I had more to show you, but I want my work to be of the highest quality and will upload it ASAP. I appreciate you stopping by and I apologize for the inconvenience. Please check back soon!</p>
                    <br/>
                    <p className='signature'>Elizabeth Means</p>
                </div>
            </div>
        </div>
    );
}

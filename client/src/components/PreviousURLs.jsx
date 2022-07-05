import React from 'react';
function PreviousURLs(){
    return (
        <div class="history">
            <h2>Previous URLs</h2>
            
            <span>
                <div className='grid'>
                    <span className='cell'>
                        <h2>Why a shortened URL?</h2>
                        <p>Shorter URLs takes up much less space when compared to the original ones. Hence ,it is easier to share shorter versions that the original ones</p>
                    </span>
                    <span className='cell'>
                        <h2>How to use short.ly?</h2>
                        <p>short.ly is super simple to use. Paste your long URL, shorten it on button click, copy it and share it anywhere,without having to worry about anything </p>
                    </span>
                    <span className='cell'>
                        <h2>Is short.ly free to use?</h2>
                        <p>Yes, the short.ly platform is completely free to use. You can shorten as many URL's as you want on your platform without thinking about anything </p>
                    </span>
                </div>
            </span>
            
        </div>
    )

}
export default PreviousURLs
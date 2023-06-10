<template>
    <div id="cards" class="my-10 font-lato flex flex-col items-center">
        <h2 class=" text-[2rem] font-semibold">Layanan Anda</h2>
        <div class=" flex flex-col lg:flex-row gap-8 px-4 justify-center my-8 ">
            <div class="card">
                <div>
                <svg fill="#fff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 251.746 251.746" xml:space="preserve">
                <g>
                    <rect x="45.467" y="32.251" width="63.607" height="110.195"/>
                    <rect x="46.364" y="175.146" width="63.603" height="41.66"/>
                    <path d="M138.639,0H17.692c-2.966,0-5.375,2.403-5.375,5.375V246.37c0,2.972,2.409,5.376,5.375,5.376h120.947
                        c2.966,0,5.376-2.404,5.376-5.376V5.375C144.015,2.403,141.605,0,138.639,0z M34.716,26.876c0-2.972,2.41-5.375,5.375-5.375h74.358
                        c2.966,0,5.375,2.404,5.375,5.375v120.945c0,2.972-2.41,5.376-5.375,5.376H40.091c-2.966,0-5.375-2.404-5.375-5.376V26.876z
                        M120.717,222.18c0,2.973-2.409,5.375-5.375,5.375H40.989c-2.966,0-5.375-2.402-5.375-5.375v-52.409
                        c0-2.971,2.409-5.376,5.375-5.376h74.354c2.966,0,5.375,2.405,5.375,5.376V222.18z"/>
                    <rect x="175.82" y="92.726" width="26.431" height="49.721"/>
                    <rect x="175.82" y="32.251" width="26.431" height="49.723"/>
                    <rect x="213.002" y="92.726" width="26.426" height="49.721"/>
                    <rect x="213.002" y="32.251" width="26.426" height="49.723"/>
                </g>
                </svg>
                </div>
                <h3>Layanan Anda</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium porro explicabo fugiat ab aut itaque et ut commodi omnis hic.</p>
            </div>
            <div class="card">
                <div>
                    <svg fill="#fff" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
    	                 viewBox="0 0 512 512"  xml:space="preserve">
                    <g>
                        <polygon class="st0" points="434.162,293.382 434.162,493.862 308.321,493.862 308.321,368.583 203.682,368.583 203.682,493.862 
                            77.841,493.862 77.841,293.382 256.002,153.862 	"/>
                        <polygon class="st0" points="0,242.682 256,38.93 512,242.682 482.21,285.764 256,105.722 29.79,285.764 	"/>
                        <polygon class="st0" points="439.853,18.138 439.853,148.538 376.573,98.138 376.573,18.138 	"/>
                    </g>
                    </svg>
                </div>
                <h3>Layanan Anda</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium porro explicabo fugiat ab aut itaque et ut commodi omnis hic.</p>
            </div>
            <div class="card">
                <div>
                    <svg fill="#fff" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M41 0L9 0C7.347656 0 6 1.347656 6 3L6 50L44 50L44 3C44 1.347656 42.652344 0 41 0 Z M 28 23L28 17L37 17L37 23 Z M 37 27L37 33L28 33L28 27 Z M 28 13L28 7L37 7L37 13 Z M 13 23L13 17L22 17L22 23 Z M 22 27L22 33L13 33L13 27 Z M 13 13L13 7L22 7L22 13 Z M 13 37L22 37L22 43L13 43 Z M 28 37L37 37L37 48L28 48Z"/>
                    </svg>
                </div>
                <h3>Layanan Anda</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium porro explicabo fugiat ab aut itaque et ut commodi omnis hic.</p>
            </div>
        </div>
        <button type="button" class="text-white bg-sky-800 hover:bg-sky-900 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Pelajari Selengkapnya</button>
    </div>
</template>
<script>
export default {
   
};
</script>
<style>
    .card {
      @apply flex flex-col items-center py-3 w-[21rem] h-[14rem] bg-white shadow-lg rounded-lg border border-gray-200;
    }
    .card div {
        @apply rounded-full bg-sky-700 h-[5rem] w-[5rem] flex justify-center items-center;
    }
    .card div svg {
        @apply w-[60%];
    }
    .card h3 {
        @apply text-[1.2rem] pt-2 font-semibold;
    }
    .card p {
        @apply px-2 text-center text-[0.9rem];
    }
</style>
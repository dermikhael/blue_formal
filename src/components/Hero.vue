<script>
export default {
    data() {
        return {
            count: 0
        }
    }
}
</script>
<template>
   <div class=" 
   h-[75vh] flex font-lato 
   bg-cover bg-no-repeat bg-center bg-[url('/image/bg-banner.jpg')] 
   ">
    
    <div id="left-side" class=" w-[80%] md:w-[60%] flex flex-col items-center lg:items-start justify-center lg:pl-[10rem] px-5 gap-2 text-slate-50 text-shadow-1 ">
        <h1 class="text-4xl uppercase font-bold ">Nama Bisnis Anda</h1>
        <p class=" text-[0.7rem] lg:text-[0.9rem]">Tujuan utama membuat website adalah untuk memiliki web presence atau kehadiran web dan membagikan informasi untuk pengunjung dan target pasar suatu bisnis.</p>
        <div>
            <button type="button" class="text-white bg-sky-800 hover:bg-sky-900 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Pelajari Selengkapnya</button>
            <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-200 focus:outline-none  rounded-lg border border-gray-200 h focus:z-10 focus:ring-4 focus:ring-gray-200 hover:shadow-lg">Kontak</button>
        </div>
    </div>

   </div>
</template>
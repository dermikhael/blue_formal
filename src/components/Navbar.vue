<script>
import { parseStringStyle } from '@vue/shared';


export default {
    data(){
        return {
            mobile: false,
            scrolled : false,
            windowWidth: false,
            mobileNav: false,
            activePage: false,
        }
    },
    methods:{
        checkScreen(){
            this.windowWidth = window.innerWidth
            if (this.windowWidth <= 750) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            return;
        },
        toggleMobileNav(){
            this.mobileNav = !this.mobileNav;
        },
        
    },
    created(){
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();

        
       
    },
    mounted(){
        const links = document.querySelectorAll('li a')
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                links.forEach((link) => {
                    link.classList.remove('active');
                });
                e.preventDefault();
                link.classList.add('active');
            });
        });
    }
}

</script>

<template>

    <nav class=" z-50 bg-white font-lato w-[100vw] h-[3.8rem] sticky top-0
    flex items-center justify-between text-sky-700 shadow-xl
    ">
            
            <svg class=" w-10 ml-20 " fill="#075985" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        	 viewBox="0 0 512 512"  xml:space="preserve">
            <g>
        	<path class="st0" d="M320.707,0L37.037,69.971v417.625L320.447,512l154.516-26.258V62.568L320.707,0z M290.346,471.742 l-92.584-7.974v-79.426l-55.086-0.677v75.36l-68.109-5.866V99.367l215.779-53.224V471.742z"/>
        	<polygon class="st0" points="271.25,76.933 226.537,86.32 226.537,138.956 271.25,131.246 	"/>
        	<polygon class="st0" points="118.574,112.033 87.416,118.622 87.416,164.818 118.574,159.469 	"/>
        	<polygon class="st0" points="190.012,95.942 150.426,104.23 150.426,153.027 190.012,146.202 	"/>
        	<polygon class="st0" points="118.576,203.184 87.416,207.448 87.416,253.722 118.576,250.622 	"/>
        	<polygon class="st0" points="190.012,192.792 150.426,198.154 150.426,246.952 190.012,243.052 	"/>
        	<polygon class="st0" points="271.25,181.04 226.537,187.097 226.537,238.911 271.25,234.506 	"/>
        	<polygon class="st0" points="271.25,286.135 226.537,288.889 226.537,340.702 271.25,339.6 	"/>
        	<polygon class="st0" points="190.012,291.476 150.426,293.914 150.426,342.712 190.012,341.737 	"/>
        	<polygon class="st0" points="118.574,296.198 87.416,298.136 87.416,344.409 118.574,343.634 	"/>
            </g>
            </svg>

            <ul @click="dre" v-show="!mobile" class=" flex justify-around w-[50%] lg:w-[40%] mr-10 uppercase text-[0.9rem] font-semibold ">
                <li ><router-link class="home" to="/">Beranda</router-link></li>
                <li >Penawaran</li>
                <li  ><router-link class="contacts" to="/contacts">Kontak</router-link></li>
                <li > <router-link class="about" to="/#about">Tentang</router-link> </li>
            </ul>
            
            <svg @click="toggleMobileNav" :class="{ 'icon-active': mobileNav }" class=" transition-all duration-200 w-10 mr-5 " fill="#075985" v-show="mobile" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
    </nav>
    <transition name="slide-fade">
         <ul id="dropdownNav" class=" fixed w-[100vw] z-40 top-10 text-sky-700 py-8 bg-white flex flex-col gap-4 font-lato items-center text-[2rem] " v-show="mobileNav">
            <li>Beranda</li>
            <li>Penawaran</li>
            <li>Kontak</li>
            <li>Tentang</li>
        </ul>
    </transition>
</template>
<style>
#dropdownNav li {
    @apply hover:bg-slate-400 w-[80%] rounded-lg text-center py-4 uppercase;
}
.icon-active {
    @apply rotate-180 transition-all duration-200;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translatey(20px);
  opacity: 0;
}

.active {
    background-color: brown;
}

</style>
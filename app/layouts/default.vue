<template>
    <div :class="{ 'dark': isDarkMode }">
        <nav class="bg-white dark:bg-gray-800">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
                <div class="text-[#c4858f] dark:text-[#d19aa3] transition-colors duration-200 font-bold text-3xl">
                    Learn with Aleks
                </div>
                <ul class="flex gap-5 list-none ml-auto">
                    <li>
                        <NuxtLink 
                            to="/" 
                            class="pr-3 py-2 text-gray-700 dark:text-gray-300 hover:text-[#c4858f] dark:hover:text-[#d19aa3] transition-colors duration-200"
                            active-class="font-bold"
                        >Main</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink 
                            to="/about" 
                            class="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-[#c4858f] dark:hover:text-[#d19aa3] transition-colors duration-200"
                            active-class="font-bold"
                        >About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink 
                            to="/blog" 
                            class="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-[#c4858f] dark:hover:text-[#d19aa3] transition-colors duration-200"
                            active-class="font-bold"
                        >Blog</NuxtLink>
                    </li>
                </ul>
                <button @click="toggleDarkMode" class="px-10 py-2 text-gray-700 dark:text-gray-300 hover:text-[#c4858f] dark:hover:text-[#d19aa3] transition-colors duration-200">
                    <span v-if="isDarkMode">
                        <font-awesome-icon :icon="['fas', 'sun']" />
                    </span>
                    <span v-else>
                        <font-awesome-icon :icon="['fas', 'moon']" />
                    </span>
                </button>
            </div>
        </nav>
        <slot></slot>
        <footer class="bg-gray-100 dark:bg-gray-800 mt-8">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <p class="text-gray-600 dark:text-gray-400 text-center">© 2024 Your Portfolio. All rights reserved.</p>
            </div>
        </footer>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

library.add(faSun, faMoon)

export default {
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
            isDarkMode: false
        };
    },
    methods: {
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
        }
    }
};
</script>

<style scoped>
.dark {
    background-color: #1a202c;
    color: #a0aec0;
}

.dark body {
    background-color: #1a202c;
}

.font-serif {
    font-family: 'Georgia', serif;
}
</style>
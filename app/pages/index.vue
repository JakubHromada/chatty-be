<template>
    <main>
        <div class="relative w-full bg-gradient-to-br from-white to-green-100 dark:from-gray-800 dark:to-gray-900 rounded-b-[50px]">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <section class="py-20 mb-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center flex relative">
                        <!-- Image column -->
                        <div class="relative h-[600px] w-full overflow-hidden z-0">
                            <img 
                                src="/img/olka.JPG"
                                alt="Olka portrait" 
                                class="object-cover w-full h-full"
                            />
                        </div>
                        <!-- Content column -->
                        <div class="flex space-y-6 z-10">
                            <div class="heading-subtitle-wrapper">
                                <div class="heading-wrapper">
                                    <h1 class="text-4xl md:text-5xl font-bold mb-4 leading-tight line-spacing">
                                        <span class="heading-highlight">
                                            <span class="slot-wrapper">
                                                <span :class="['slot-word', isTransitioning ? 'slide-out' : '']">{{ currentWord }}</span>
                                                <span :class="['slot-word next-slot', isTransitioning ? 'slide-in' : '']">{{ nextWord }}</span>
                                            </span> <br> your english language
                                            <br>journey
                                        </span>
                                    </h1>
                                </div>
                                <div class="subtitle-wrapper">
                                    <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                                        You've come to the <b>right</b> place. Whether you're starting your 
                                        English language journey or looking to <b>advance</b> your skills, I'm here to <b>guide</b> 
                                        you every step of the way.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <section class="py-12">
                <div class="py-12">
                    <h2 class="text-3xl font-bold text-[#95ada9] dark:text-[#95ada9] text-center pb-5">Choose Your Lesson Style...</h2>
                    <p class="text-lg text-gray-600 dark:text-gray-300 text-center mb-16 max-w-3xl mx-auto">
                        Explore the options to find the perfect fit for your learning style: opt for personalized one-on-one 
                        lessons designed to focus entirely on your unique needs and goals, or join dynamic group sessions
                         that encourage interactive learning, collaboration, and the chance to practice with other students.
                    </p>
                </div>

                <!-- Private Lessons Section -->
                <div class="mb-12">
                    <div class="flex flex-col md:flex-row items-center gap-6 mb-6 p-8">
                        <div class="w-full md:w-1/2">
                            <h3 class="text-5xl font-bold mb-8">
                                <span class="heading-highlight">Private Lessons</span>
                            </h3>
                            <div class="space-y-6 text-lg text-gray-600 dark:text-gray-300 mb-0">
                                <p>Experience personalized instruction tailored specifically to your learning style, pace, and goals.
                                    Choose lesson times that work best for your schedule, with flexible booking options available.
                                   Follow a customized learning plan designed to help you achieve your specific language objectives.
                                   Join at any proficiency level, from complete beginners to advanced speakers looking to perfect their skills.
                                </p>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2">
                            <img 
                                src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1000" 
                                alt="Private lesson materials" 
                                class="shadow-lg w-full h-[400px] object-cover"
                            />
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <button class="group inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-[#c4858f] hover:bg-[#d19aa3] transition-colors duration-300">
                            FIND OUT MORE
                            <span class="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                        </button>
                    </div>
                </div>

                <!-- Separator -->
                <div class="relative py-8 mb-24">
                    <div class="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                        <div class="w-1/2 border-t-3 border-gradient"></div>
                    </div>
                </div>

                <!-- Group Classes Section -->
                <div class="mb-12">
                    <div class="flex flex-col md:flex-row-reverse items-center gap-12 mb-8">
                        <div class="w-full md:w-1/2">
                            <h3 class="text-5xl font-bold mb-8">
                                <span class="heading-highlight">Group Classes</span>
                            </h3>
                            <div class="space-y-6 text-lg text-gray-600 dark:text-gray-300 mb-0">
                                <p>Learn and practice in a dynamic group setting that encourages active participation and real conversations.
                                    Benefit from affordable group rates while still receiving high-quality English language instruction.
                                    Improve your language skills through interaction with fellow learners in a supportive environment.
                                    Follow a structured curriculum that ensures steady progress while maintaining engagement.
                                </p>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2">
                            <img 
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000" 
                                alt="Group lesson environment" 
                                class="shadow-lg w-full h-[400px] object-cover"
                            />
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <button class="group inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-[#c4858f] hover:bg-[#d19aa3] transition-colors duration-300">
                            FIND OUT MORE
                            <span class="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                        </button>
                    </div>
                </div>

                <!-- Separator -->
                <div class="py-8 relative">
                    <div class="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                        <div class="w-1/2 border-t-3 border-gradient"></div>
                    </div>
                </div>
            </section>
        </div>

        <!-- Meet me section-->
        <div class="w-full py-12 bg-gradient-to-br from-[#d19aa3] to-[#d19aa3] dark:from-gray-800 dark:to-gray-900">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row items-center gap-6">
                    <div class="w-full md:w-1/2 flex flex-col justify-center">
                        <h3 class="text-5xl font-bold mb-8 text-left">
                            <span class="heading-highlight">Hi, I'm Olka...</span>
                        </h3>
                        <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed pl-4">
                            I'm passionate about helping you achieve your English language goals. With years of experience and a
                             personalized approach, I ensure that each lesson is tailored to your unique needs and learning style. 
                             Let's embark on this journey together and make learning English an enjoyable and rewarding experience.
                        </p>
                    </div>
                    <div class="w-full md:w-1/2">
                        <img 
                            src="/img/meetme.jpg" 
                            alt="Aleskandra" 
                            class="shadow-lg w-full h-[400px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <!-- For you Section -->
            <section class="py-12">
                <h2 class="text-3xl font-bold text-[#95ada9] dark:text-[#95ada9] text-center pb-5">For you...</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div class="flex flex-col items-center text-center p-8 rounded-xl">
                        <img 
                            src="/img/blog.jpg"
                            alt="blog" 
                            class="shadow-lg w-full h-[200px] object-cover mb-4"
                        />
                        <button class="group inline-flex items-center px-8 py-2 text-lg font-medium text-white bg-[#c4858f] hover:bg-[#d19aa3] transition-colors duration-300 mb-4">
                            BLOG
                        </button>
                        <p class="text-lg text-gray-600 dark:text-gray-300">Read my latest articles and insights on learning English.</p>
                    </div>
                    <div class="flex flex-col items-center text-center p-8 rounded-xl">
                        <img 
                            src="/img/newsletter.jpg"
                            alt="newletter" 
                            class="shadow-lg w-full h-[200px] object-cover mb-4"
                        />
                        <button class="group inline-flex items-center px-8 py-2 text-lg font-medium text-white bg-[#c4858f] hover:bg-[#d19aa3] transition-colors duration-300 mb-4">
                            NEWSLETTER
                        </button>
                        <p class="text-lg text-gray-600 dark:text-gray-300">Subscribe to my newsletter for the latest updates and tips.</p>
                    </div>
                    <div class="flex flex-col items-center text-center p-8 rounded-xl">
                        <img 
                            src="/img/contact.jpg"
                            alt="contact" 
                            class="shadow-lg w-full h-[200px] object-cover mb-4"
                        />
                        <button class="group inline-flex items-center px-8 py-2 text-lg font-medium text-white bg-[#c4858f] hover:bg-[#d19aa3] transition-colors duration-300 mb-4">
                            CONTACT
                        </button>
                        <p class="text-lg text-gray-600 dark:text-gray-300">Get in touch with me for any inquiries or support.</p>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const words = ['Transform', 'Improve', 'Advance']
const currentWord = ref(words[0])
const nextWord = ref(words[1])
const isTransitioning = ref(false)
let intervalId

const switchWords = () => {
    let currentIndex = words.indexOf(currentWord.value)
    let nextIndex = (currentIndex + 1) % words.length

    isTransitioning.value = true

    setTimeout(() => {
        currentWord.value = words[nextIndex]
        nextWord.value = words[(nextIndex + 1) % words.length]
        isTransitioning.value = false
    }, 600) // Adjusted for new animation duration
}

onMounted(() => {
    intervalId = setInterval(switchWords, 2500) // Increased interval for better readability
})

onUnmounted(() => {
    clearInterval(intervalId)
})
</script>

<style>

.line-spacing {
  line-height: 2em; /* Increase line spacing */
}

.heading-wrapper {
  margin-left: -13%;
}
.subtitle-wrapper {
    max-width: 70%;
    padding-top: 2em;
}

@media (max-width: 768px) {
  .heading-wrapper {
    margin-left: 0;
  }
}

.heading-highlight {
    background-color: #95ada9;
    /* background-color: #bdd0ca; */
    color: white;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
    padding: 0.2em 0.4em;
}

.slot-wrapper {
    position: relative;
    display: inline-block;
    overflow: hidden;
    vertical-align: top;
    min-width: 233px; /* Set fixed width based on widest word */
}

.slot-word {
    display: inline-block;
    position: relative;
    transform: translateY(0);
    width: 100%; /* Fill the wrapper width */
}

.next-slot {
    position: absolute;
    left: 0;
    transform: translateY(100%);
    width: 100%; /* Fill the wrapper width */
}

.slide-out {
    animation: slideOut 0.6s cubic-bezier(0.6, 0, 0.4, 1);
    animation-fill-mode: forwards;
}

.slide-in {
    animation: slideIn 0.8s cubic-bezier(0.6, 0, 0.4, 1);
    animation-fill-mode: forwards;
}

@keyframes slideOut {
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(-100%);
        opacity: 0;
    }
}

@keyframes slideIn {
    0% {
        transform: translateY(100%);
        opacity: 0;
    }
    90% {
        transform: translateY(0%);
        opacity: 1;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

.border-gradient {
    height: 1px;
    background-color: #c4858f;
}

</style>
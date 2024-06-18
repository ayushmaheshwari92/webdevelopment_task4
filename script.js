// JavaScript for OTT Platform website

// Sample trending, movies, and series data
const trendingData = [
    { title: "Trending Movie 1", thumbnail: "msd.jpeg" },
    { title: "Trending Movie 2", thumbnail: "hanuman.jpg" },
    { title: "Trending Series 1", thumbnail: "panchayat.jpg" },
    { title: "Trending Series 2", thumbnail: "kotafactory.jpg" }
];

const moviesData = [
    { title: "Movie 1", thumbnail: "msd.jpeg" },
    { title: "Movie 2", thumbnail: "hanuman.jpg" }
];

const seriesData = [
    { title: "Series 1", thumbnail: "yemerifamily.jpg" },
    { title: "Series 2", thumbnail: "panchayat.jpg" }
];

// Function to display content on homepage
function displayContent() {
    displayTrending();
    displayMovies();
    displaySeries();
}

// Function to display trending content
function displayTrending() {
    const trendingSection = document.querySelector('#trending .content-container');
    trendingData.forEach(item => {
        const content = `
            <div class="content-item">
                <img src="${item.thumbnail}" alt="${item.title}">
                <h3>${item.title}</h3>
            </div>
        `;
        trendingSection.innerHTML += content;
    });
}

// Function to display movies
function displayMovies() {
    const moviesSection = document.querySelector('#movies .content-container');
    moviesData.forEach(item => {
        const content = `
            <div class="content-item">
                <img src="${item.thumbnail}" alt="${item.title}">
                <h3>${item.title}</h3>
            </div>
        `;
        moviesSection.innerHTML += content;
    });
}

// Function to display series
function displaySeries() {
    const seriesSection = document.querySelector('#series .content-container');
    seriesData.forEach(item => {
        const content = `
            <div class="content-item">
                <img src="${item.thumbnail}" alt="${item.title}">
                <h3>${item.title}</h3>
            </div>
        `;
        seriesSection.innerHTML += content;
    });
}

// Call the function to display content when the page loads
window.onload = displayContent;

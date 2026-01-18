# Infinite meme Loader 

A dynamic infinite scrolling web application built with React, allowing users to seamlessly browse an endless feed of popular memes fetched from a live API.

### Live Link : https://infinitepageloader.netlify.app/

<img src="https://github.com/ilovhtml/infinite_page_loader/blob/main/Arc_528v1RNrJP.gif?raw=true" width="1350" height="680">

This project was built to master advanced React concepts, particularly hooks like `useEffect`, `useRef`, and `useCallback` for creating performant, modern user experiences.
## Features

- **Infinite Scroll:** Memes load automatically as the user scrolls down the page, providing a seamless browsing experience. This is achieved using the modern `IntersectionObserver` API.
    
- **Live API Integration:** The application fetches data from the public `meme-api.com` REST API.
    
- **Loading State:** A clear "Loading..." indicator provides user feedback while new content is being fetched.
    
- **Responsive Design:** The gallery is fully responsive and looks great on all devices, thanks to a flexible grid layout built with Tailwind CSS.
    

## Technologies Used

- **React:** The entire front-end is built as a single-page application using React.
    
- **React Hooks:**
    
    - **`useState`:** For managing the array of images and the loading status.
        
    - **`useEffect`:** To trigger API calls and to set up the `IntersectionObserver`.
        
    - **`useRef`:** To get a direct reference to the "loader" element that acts as the trigger for the infinite scroll.
        
    - **`useCallback`:** To optimize the fetching logic and the observer's handler function.
        
- **Tailwind CSS:** For all styling, creating a clean, modern, and responsive user interface.
    

### How to Use This Project

1. Clone the repository.
    
2. Run `npm install`.
    
3. Run `npm run dev`.
    

_This project is a demonstration of my ability to build a feature-rich front-end application with React and implement advanced features like infinite scrolling._

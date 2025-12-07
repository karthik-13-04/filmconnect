import React from 'react';

// --- Reusable StoreButton Component (Kept for styling) ---
const StoreButton = ({ iconClass, smallText, largeText, isCta = false, href = "#" }) => (
    <a href={href} className={`store-btn ${isCta ? 'cta-btn' : ''}`}>
        <i className={`fab ${iconClass}`}></i>
        <div className="store-text">
            <span className="small-text" style={isCta ? { color: '#7f8c8d' } : {}}>{smallText}</span>
            <span className="large-text" style={isCta ? { color: '#2c3e50' } : {}}>{largeText}</span>
        </div>
    </a>
);

// --- New Wrapper Component to Handle Dynamic Links ---
// Note: I've added a default export for this component based on your request, 
// but typically only the main component (HeroSection) is exported in a file.
// I've kept it as a standard function for this context.
export function DynamicStoreButtons({ googlePlay, appStore }) {
    // These buttons use the styled component above, passing the dynamic URLs
    return (
        <div className="store-buttons">
            <StoreButton 
                iconClass="fa-google-play" 
                smallText="Downloaded on" 
                largeText="Google Play" 
                href={googlePlay} 
            />
            <StoreButton 
                iconClass="fa-apple" 
                smallText="Downloaded on the" 
                largeText="App Store" 
                href={appStore} 
            />
        </div>
    );
}


// --- Main HeroSection Component (Updated to use the new component) ---
const HeroSection = () => {
    // Example usage: Define the dynamic links here or pass them as props to HeroSection
    const googlePlayLink = "https://play.google.com/store/filmconnect"; 
    const appStoreLink = "https://apps.apple.com/app/filmconnect"; 

    return (
        <div className="hero-wrapper">
            <section className="hero-section container">
                <div className="hero-text-content">
                    <h1 className="hero-title">Connect With the Entire Film Industry — <span>In One App</span></h1>
                    <p className="hero-subtitle">Find roles, hire talent, join communities, and grow your career across all major Indian film industries.</p>
                    
                    {/* 👇 Using the new DynamicStoreButtons component 👇 */}
                    <DynamicStoreButtons 
                        googlePlay={googlePlayLink} 
                        appStore={appStoreLink} 
                    />
                </div>
                
                <div className="hero-image-mockup">
                    <div className="phone-mockup">
                        <div className="mockup-inner-content">
                            {/* Mockup Content Here */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;

// Export StoreButton for reuse in other files (like RolesCtaSection)
export { StoreButton };
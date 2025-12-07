import React from 'react';

const FeatureCard = ({ iconClass, title, description }) => (
    <div className="feature-card">
        <i className={`fas ${iconClass} fa-2x`} style={{ color: '#3498db', marginBottom: '15px' }}></i>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

const FeaturesSection = () => {
    const features = [
        { icon: 'fa-comments', title: 'Instant Messaging', description: 'Chat directly with industry professionals to pitch ideas, apply for roles, and coordinate projects quickly.' },
        { icon: 'fa-users', title: 'Join Communities', description: 'Engage in specialized forums, share scripts, and network with peers across all departments.' },
        { icon: 'fa-chart-line', title: 'Explore Trends', description: 'Stay current with the latest news, casting calls, and trending talent in every major film industry.' }
    ];

    return (
        <section className="features-section section">
            <h2 className="section-title">What You Can Do Inside The App</h2>
            <div className="container feature-cards-grid">
                {features.map((feature, index) => (
                    <FeatureCard key={index} iconClass={feature.icon} title={feature.title} description={feature.description} />
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;
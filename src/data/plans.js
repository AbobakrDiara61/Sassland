const plans = [
    {
        name: 'Starter',
        monthlyPrice: 19,
        annualPrice: 15,
        description: 'Perfect for small businesses and freelancers',
        features: [
            '2 team members',
            '20GB cloud storage',
            'Basic analytics',
            'Email support',
            '1 project'
        ],
        isPopular: false,
        ctaText: 'Start with Starter'
    },
    {
        name: 'Professional',
        monthlyPrice: 49,
        annualPrice: 39,
        description: 'Great for growing businesses and teams',
        features: [
            '10 team members',
            '100GB cloud storage',
            'Advanced analytics',
            'Priority email support',
            'Unlimited projects',
            '24/7 dedicated support'
        ],
        isPopular: true,
        ctaText: 'Start with Professional'
    },
    {
        name: 'Enterprise',
        monthlyPrice: 99,
        annualPrice: 79,
        description: 'Powerful solutions for large organizations',
        features: [
            'Unlimited team members',
            'Unlimited cloud storage',
            'Advanced analytics',
            'Priority email support',
            'Unlimited projects',
            '24/7 dedicated support',
            'Dedicated account manager'
        ],
        isPopular: false,
        ctaText: 'Start with Enterprise'
    }
];
export default plans
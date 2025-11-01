import { FileSpreadsheet, BellRing, BarChart3, ShieldCheck } from "lucide-react"

export const menuItems = [
    { name: 'Features', href: '#features' },
    { name: 'Solution', href: '#solution' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
]

export const legalItems = [
    { name: 'Terms of service', href: '/terms-of-service' },
    { name: 'Privacy policy', href: '/privacy-policy' },
    { name: 'Cookies policy', href: '/cookies-policy' },
]

export const brands = [
    { src: "https://html.tailus.io/blocks/customers/nvidia.svg", alt: "Nvidia Logo", h: 5 },
    { src: "https://html.tailus.io/blocks/customers/column.svg", alt: "Column Logo", h: 4 },
    { src: "https://html.tailus.io/blocks/customers/github.svg", alt: "GitHub Logo", h: 4 },
    { src: "https://html.tailus.io/blocks/customers/nike.svg", alt: "Nike Logo", h: 5 },
    { src: "https://html.tailus.io/blocks/customers/lemonsqueezy.svg", alt: "Lemon Squeezy Logo", h: 5 },
    { src: "https://html.tailus.io/blocks/customers/laravel.svg", alt: "Laravel Logo", h: 4 },
    { src: "https://html.tailus.io/blocks/customers/lilly.svg", alt: "Lilly Logo", h: 7 },
    { src: "https://html.tailus.io/blocks/customers/openai.svg", alt: "OpenAI Logo", h: 6 },
]

export const features = [
    {
        icon: FileSpreadsheet,
        title: "Automated Invoicing",
        description: "Generate and send invoices automatically in seconds.",
    },
    {
        icon: BellRing,
        title: "Payment Tracking",
        description: "Stay notified and track every payment easily.",
    },
    {
        icon: BarChart3,
        title: "Analytics",
        description: "View clear insights to grow your business faster.",
    },
    {
        icon: ShieldCheck,
        title: "Data Security",
        description: "Your invoices are safely stored and encrypted.",
    },
]

export const stats = [
    { value: "99.9", sign: "%", description: "Uptime guarantee" },
    { value: "24/7", sign: "", description: "Support available" },
    { value: "5,000", sign: "+", description: "Invoices generated" },
]

export const plans = [
    {
        name: "Free",
        price: 0,
        isPro: false,
        recommended: false,
        description: "Perfect for individuals who need basic invoicing with limited features",
        features: [
            { feature: "Generate 80 invoices/month", included: true },
            { feature: "Export invoices to PDF & CSV", included: true },
            { feature: "Advanced Analytics & Reports ", included: true },
            { feature: "API access", included: false },
            { feature: "Premium invoice templates", included: false },
            { feature: "Manual Invoice & Reminder Emails", included: false },
            { feature: "Priority support", included: false },
            { feature: "Recurring invoices", included: false },
            { feature: "Monthly Reports & Insights", included: false },
            { feature: "Automated reminder emails", included: false },
        ]
    },
    {
        name: "Pro",
        price: 30,
        isPro: true,
        recommended: true,
        description: "For freelancers who need unlimited invoices and more features",
        features: [
            { feature: "Generate unlimited invoices", included: true },
            { feature: "Export invoices to PDF & CSV", included: true },
            { feature: "Advanced Analytics & Reports ", included: true },
            { feature: "API access", included: true },
            { feature: "Premium invoice templates", included: true },
            { feature: "Manual Invoice & Reminder Emails", included: true },
            { feature: "Priority support", included: true },
            { feature: "Recurring invoices", included: false },
            { feature: "Monthly Reports & Insights", included: false },
            { feature: "Automated reminder emails", included: false }
        ]
    },
    {
        name: "Business",
        price: 90,
        isPro: true,
        recommended: false,
        description: "Designed for businesses that require full customization and priority support",
        features: [
            { feature: "Generate unlimited invoices", included: true },
            { feature: "Export invoices to PDF & CSV", included: true },
            { feature: "Advanced Analytics & Reports ", included: true },
            { feature: "API access", included: true },
            { feature: "Premium invoice templates", included: true },
            { feature: "Manual Invoice & Reminder Emails", included: true },
            { feature: "Priority support", included: true },
            { feature: "Recurring invoices", included: true },
            { feature: "Monthly Reports & Insights", included: true },
            { feature: "Automated reminder emails", included: true },
        ]
    }
]

export const comparatorFeatures = [
    {
        feature: 'Invoices per month',
        free: "80",
        pro: "Unlimited",
        business: "Unlimited",
    },
    {
        feature: 'Export invoices to PDF',
        free: true,
        pro: true,
        business: true,
    },
    {
        feature: 'Advanced Analytics & Reports',
        free: true,
        pro: true,
        business: true,
    },
    {
        feature: 'API access',
        free: false,
        pro: true,
        business: true,
    },
    {
        feature: 'API calls per month',
        free: "0",
        pro: "4000",
        business: "8000",
    },
    {
        feature: 'Premium invoice templates',
        free: false,
        pro: true,
        business: true,
    },
    {
        feature: 'Total templates included',
        free: "3",
        pro: "6",
        business: "6",
    },
    {
        feature: 'Manual Invoice Reminder Emails',
        free: false,
        pro: true,
        business: true,
    },
      {
        feature: 'Total reminder emails per month',
        free: "0",
        pro: "80",
        business: "160",
    },
    {
        feature: 'Priority support',
        free: false,
        pro: true,
        business: true,
    },
    {
        feature: 'Recurring invoices',
        free: false,
        pro: false,
        business: true,
    },
    {
        feature: 'Monthly Reports & Insights',
        free: false,
        pro: false,
        business: true,
    },
    {
        feature: 'Automated reminder emails',
        free: false,
        pro: false,
        business: true,
    },
]

export const faqItems = [
     {
        id: 'item-1',
        question: 'What is Invorca and how does it work?',
        answer: 'Invorca is a secure online platform that lets you create and manage professional invoices with ease. Once you sign up, you can generate invoices, manage clients, and track payment status all in one place.',
    },
    {
        id: 'item-2',
        question: 'Can I customize my invoice templates?',
        answer: 'Yes, Invorca allows full customization. You can edit invoice details, add your company logo, adjust colors, and set tax or discount fields to match your business needs.',
    },
    {
        id: 'item-3',
        question: 'Is my data secure on Invorca?',
        answer: 'Yes, Invorca is built with security best practices and hosted on protected servers. While data is not end-to-end encrypted, we use secure HTTPS connections and follow strict access controls to keep your information safe.',
    },
    {
        id: 'item-4',
        question: 'Can I download or share invoices as PDFs?',
        answer: 'Yes, you can download your invoices as PDFs or share them directly with clients using a secure link after generating them through your account.',
    },
    {
        id: 'item-5',
        question: 'Does Invorca support recurring invoices?',
        answer: 'Yes, Invorca supports recurring invoices, but this feature is available only for users on the Business plan.',
    },
    {
        id: 'item-6',
        question: 'Does Invorca support multiple currencies and tax rates?',
        answer: 'Yes, Invorca supports multiple currencies and flexible tax rate settings, making it ideal for freelancers and businesses serving clients globally.',
    },
    {
        id: 'item-7',
        question: 'Can I track payment status for my invoices?',
        answer: 'Yes, Invorca provides a dashboard where you can view all your invoices and their statuses—paid, pending, or overdue—helping you stay organized and manage payments easily.',
    },
    {
        id: 'item-8',
        question: 'Do I need an account to use Invorca?',
        answer: 'Yes, you need to create an account to generate and manage invoices. Having an account ensures your data is stored securely and allows you to access your invoices anytime.',
    }
]
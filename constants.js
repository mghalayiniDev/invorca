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
    }
]

export const termsOfService = [
    {
        header: "Acceptance of Terms",
        description:
        "By accessing or using our website, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service. If you disagree with any part of the terms, you must discontinue using the website immediately. Your continued use of the website represents your full acceptance of all current and future terms."
    },
    {
        header: "Educational Purpose Only",
        description:
        "This website is created exclusively for educational and informational purposes. All materials, lessons, and resources are meant to support learning and personal development. The content should not be interpreted as professional, financial, or commercial advice, and users are strictly prohibited from using it for business or profit-making activities."
    },
    {
        header: "Intellectual Property Rights",
        description:
        "All text, graphics, designs, and code on this website are protected by copyright and intellectual property laws. Users may not copy, modify, distribute, or reproduce any content without explicit permission. Limited personal use for educational study or reference is permitted as long as proper credit is given."
    },
    {
        header: "User Responsibilities",
        description:
        "Users must use the website respectfully, ethically, and in accordance with applicable laws. Any attempt to hack, misuse, disrupt, or damage the website’s functionality or data is strictly forbidden. Users are also responsible for ensuring that their device and internet connection are secure while accessing the site."
    },
    {
        header: "Accuracy of Information",
        description:
        "While we strive to maintain accurate and updated information, we make no guarantees regarding the completeness, reliability, or accuracy of any content. Information provided is for general knowledge only and may change without notice. Users are encouraged to verify any information before relying on it."
    },
    {
        header: "Third-Party Links",
        description:
        "Our website may include references or links to third-party sites for educational context or additional reading. We do not control these websites and are not responsible for their content, privacy practices, or terms. Visiting any external link is done at the user’s own risk and discretion."
    },
    {
        header: "No Professional Advice",
        description:
        "The information shared on this platform should not be considered professional, legal, or medical advice. It is meant to educate and inform. Always consult qualified professionals before making decisions that require expert evaluation or certification."
    },
    {
        header: "Limitation of Liability",
        description:
        "Under no circumstances shall we be held responsible for any direct or indirect loss, damage, or inconvenience arising from the use of our website or its content. The website is provided 'as is,' and users assume full responsibility for how they interpret and apply the information provided."
    },
    {
        header: "User-Generated Content",
        description:
        "If users are permitted to post, share, or upload content, they retain ownership of their material but grant us a non-exclusive right to display it for educational purposes. All user submissions must be appropriate, original, and compliant with applicable laws. We reserve the right to remove any content at our discretion."
    },
    {
        header: "Privacy Policy",
        description:
        "We value your privacy and are committed to protecting any information you share with us. Any data collected is handled according to our Privacy Policy, which outlines how we gather, use, and store information. By using our website, you consent to our data practices as described in that policy."
    },
    {
        header: "Service Availability",
        description:
        "We aim to keep our website available and functional at all times, but we do not guarantee uninterrupted access. Maintenance, updates, or technical issues may occasionally cause temporary downtime. We reserve the right to modify or discontinue services at any time without prior notice."
    },
    {
        header: "Governing Law",
        description:
        "These Terms of Service shall be governed and interpreted in accordance with the laws of the jurisdiction in which this website operates. Any disputes arising from the use of the website shall be resolved through local courts or relevant legal authorities."
    },
    {
        header: "Changes to Terms",
        description:
        "We may update, revise, or modify these Terms of Service periodically to reflect changes in policies or website functionality. The most recent version will always be available on this page. Continued use of the website after updates constitutes acceptance of the revised terms."
    },
    {
        header: "Contact Information",
        description:
        "If you have any questions, feedback, or concerns regarding these Terms of Service, please reach out through our official contact page or support email. We will make every effort to respond promptly and address your inquiries appropriately."
    }
]

export const privacyPolicy = [
    {
        header: "Introduction",
        description:
        "This Privacy Policy explains how we collect, use, and protect your personal information when you access or use our educational website or services. By continuing to use this website, you consent to the data practices described herein, in compliance with the UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data."
    },
    {
        header: "Educational Purpose",
        description:
        "Our platform is developed solely for educational and informational purposes. Any data collected is used to enhance the learning experience and improve user interaction within an academic or research-based context. We do not sell, rent, or commercially exploit personal data."
    },
    {
        header: "Information We Collect",
        description:
        "We may collect basic information such as your name, email address, and usage data when you interact with the website. Additional data may include technical details like browser type, device information, and IP address for security and analytics purposes."
    },
    {
        header: "How We Use Collected Information",
        description:
        "Collected data is used to provide and improve our services, personalize user experience, maintain security, and ensure the proper functioning of the website. We may also use anonymized or aggregated data for educational research and performance analysis."
    },
    {
        header: "Legal Basis for Processing",
        description:
        "Under UAE data protection law, we process personal data only with lawful justification, such as user consent, performance of a contract, compliance with legal obligations, or legitimate educational interests that do not override user privacy rights."
    },
    {
        header: "Cookies and Tracking Technologies",
        description:
        "Our website may use cookies or similar technologies to enhance user experience and collect limited analytics data. You can manage or disable cookies through your browser settings. However, certain website features may not function correctly without them."
    },
    {
        header: "Data Retention",
        description:
        "Personal data is stored only for as long as necessary to fulfill the purpose for which it was collected or as required by UAE laws. Once data is no longer needed, it will be securely deleted or anonymized to prevent unauthorized access."
    },
    {
        header: "Data Protection and Security",
        description:
        "We implement strict administrative, technical, and physical safeguards to protect your data against unauthorized access, alteration, disclosure, or destruction. Our systems adhere to UAE cybersecurity and data protection standards."
    },
    {
        header: "Data Sharing and Third Parties",
        description:
        "We do not sell or trade personal data. Limited data may be shared with trusted service providers who assist in maintaining the website or educational tools, under confidentiality agreements and UAE data protection requirements."
    },
    {
        header: "International Data Transfers",
        description:
        "If any personal data is transferred outside the UAE, it will be done in accordance with the UAE Personal Data Protection Law, ensuring equivalent levels of data security and legal protection in the destination jurisdiction."
    },
    {
        header: "Your Rights",
        description:
        "Under UAE law, you have the right to access, correct, delete, or restrict the processing of your personal data. You may also withdraw consent at any time. Requests can be submitted through our official contact channels, and we will respond in compliance with UAE legal timelines."
    },
    {
        header: "Children’s Privacy",
        description:
        "Our platform is designed for educational use and may be accessed by minors only under the supervision or consent of a parent, guardian, or educational institution. We do not knowingly collect personal data from children without proper authorization."
    },
    {
        header: "Third-Party Links",
        description:
        "Our website may contain links to external educational or informational websites. We are not responsible for the privacy practices or content of these third-party sites. Users are encouraged to review the privacy policies of any linked website they visit."
    },
    {
        header: "Updates to This Policy",
        description:
        "We may modify or update this Privacy Policy periodically to reflect legal, technical, or operational changes. The latest version will always be available on this page, and continued use of the website implies acceptance of the updated terms."
    },
    {
        header: "Contact Information",
        description:
        "If you have questions, concerns, or requests regarding this Privacy Policy or our data protection practices, please reach out through our official contact page or support email. We will respond in accordance with UAE data protection requirements."
    }
]

export const cookiePolicy = [
    {
        header: "Introduction",
        description:
        "This Cookie Policy explains how we use cookies and similar technologies when you visit or interact with our educational website. By continuing to use this site, you consent to the use of cookies in accordance with this policy and the UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL)."
    },
    {
        header: "What Are Cookies",
        description:
        "Cookies are small text files stored on your device when you visit a website. They help the site recognize your device, remember preferences, and improve overall functionality. Some cookies are necessary for the website to operate correctly, while others enhance performance and user experience."
    },
    {
        header: "Why We Use Cookies",
        description:
        "We use cookies to ensure proper functionality, enhance educational experience, and analyze site performance. This includes maintaining secure sessions, remembering language or accessibility preferences, and collecting anonymized usage data to improve learning materials and content delivery."
    },
    {
        header: "Types of Cookies We Use",
        description:
        "Our website may use several categories of cookies: (1) Essential cookies that are required for website operation; (2) Performance and functionality cookies that improve usability and remember user preferences; (3) Analytics cookies that help us understand user interaction to enhance educational quality; and (4) Marketing or advertising cookies, if any, which are only used with user consent."
    },
    {
        header: "Consent and Cookie Management",
        description:
        "When you first visit the website, a cookie banner may appear to request your consent for non-essential cookies. You may accept all cookies, reject them, or customize your preferences. You can also manage or delete cookies anytime through your browser settings. Disabling certain cookies may affect website functionality."
    },
    {
        header: "Third-Party Cookies",
        description:
        "We may allow trusted third-party tools such as analytics or embedded educational content to set cookies for performance monitoring or content improvement. These third parties maintain their own cookie and privacy policies. We do not control or take responsibility for their data practices."
    },
    {
        header: "Data Protection and International Transfers",
        description:
        "Any personal data collected through cookies is processed in accordance with UAE data protection law. If data is transferred outside the UAE, it will be handled under legally approved safeguards ensuring equivalent protection in the destination jurisdiction."
    },
    {
        header: "Your Rights Under UAE Law",
        description:
        "Under the UAE PDPL, you have the right to access, correct, or delete personal data associated with cookies, withdraw consent, or restrict processing. Requests can be submitted through our official contact channels, and we will respond according to UAE data protection regulations."
    },
    {
        header: "Updates to This Policy",
        description:
        "We may update this Cookie Policy periodically to reflect changes in technology, regulations, or our educational operations. The latest version will always be available on this page, and continued use of the website after updates constitutes acceptance of the revised policy."
    },
    {
        header: "Contact Information",
        description:
        "If you have any questions, feedback, or concerns regarding this Cookie Policy or how we use cookies, please reach out to us through our official contact page or support email. We will respond promptly in accordance with UAE data protection standards."
    }
]
// registered user
const PROD = 'https://tv.independa.com/?device_id=PROD&tv=lg';
const PROD_LAUNCH = 'https://tv.independa.com/launch?device_id=PROD'
// unregistered user
const GUEST = 'https://tv.independa.com/?device_id=GUEST';
const GUEST_LAUNCH = 'https://tv.independa.com/launch?device_id=GUEST';
// registered user without content
const GHOST = 'https://tv.independa.com/?device_id=GHOST&tv=lg';

// partners
const partners = [
    {
        name: "capital",
        title: "Pharmacy Discount",
        section: "FREE",
        sub: "pharmacy-discount",
    },
    {
        name: "carefree dental",
        title: "Dental Discount",
        section: "Other",
        sub: "dental-discount",
    },
    {
        name: "coro health",
        title: "Faith",
        section: "Videos On Demand",
        sub: "faith",
    },
    {
        name: "dentulu",
        title: "Dentist TeleVisit",
        section: "TeleHealth",
        sub: "dentist-televisit",
    },
    {
        name: "flexIt",
        title: "Physical Trainer",
        section: "Health & Healing",
        sub: "physical-trainer",
    },
    {
        name: "lucid",
        title: "Hearing Check",
        section: "Featured Free",
        sub: "hearing-assessment",
    },
    {
        name: "mediorbis doctor",
        title: "Doctor TeleVisit",
        section: "TeleHealth",
        sub: "doctor-televisit",
    }, 
    {
        name: "mediorbis therapist",
        title: "Therapist TeleVisit",
        section: "TeleHealth",
        sub: "therapist-televisit",
    },
    {
        name: "rxhome",
        title: "At Home Lab Tests",
        section: "At-Home Tests",
        sub: "home-lab-tests",
    },
    {
        name: "senior savvy",
        title: "Tech Education",
        section: "Videos On Demand",
        sub: "tech-education",
    },
    {
        name: "spiro",
        title: "Exercise",
        section: "Videos On Demand",
        sub: "exercise",
    },
    {
        name: "survivor net",
        title: "Inspiration",
        section: "Videos On Demand",
        sub: "inspiration",
    },
    {
        name: "web md",
        title: "Health Education",
        section: "Videos On Demand",
        sub: "health-education",
    },
];

export default {
    PROD,
    PROD_LAUNCH,
    GUEST,
    GUEST_LAUNCH,
    GHOST,
    partners
}
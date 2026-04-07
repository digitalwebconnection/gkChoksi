export interface TeamMember {
    id: number;
    name: string;
    role: string;
    department: string;
    image: string;
    experience?: string;
    description?: string;
    status?: string;
}

export const TEAM: TeamMember[] = [
    {
        id: 1,
        name: "Ullas G Shah",
        role: "B.Com, FCA, CPA",
        department: "Tax",
        image: "https://www.gkcco.com/wp-content/uploads/2019/12/Ullas-G-Shah.jpg",
        experience: "28+ years",
        status: "Open",
    },
    {
        id: 2,
        name: "Narendra D Patel",
        role: "B.Com, LLB",
        department: "Legal",
        image: "https://www.gkcco.com/wp-content/uploads/2025/12/Adv.-N-D-Patel-150x150.jpg",
        experience: "44+ years",
        status: "Open",
    },
    {
        id: 3,
        name: "Shambhu J Bhikadia",
        role: "B.Com, LLB, CS",
        department: "Legal",
        image: "https://www.gkcco.com/wp-content/uploads/2025/12/CS-Shambhu-Bhikhadia-150x150.jpg",
        experience: "48+ years",
        status: "Open",
    },
    {
        id: 4,
        name: "Kamlesh H Shah",
        role: "B.Com, CA, DISA",
        department: "Audit",
        image: "https://www.gkcco.com/wp-content/uploads/2025/12/CA-Kamlesh-Shah-150x150.jpg",
        experience: "42+ years",
        status: "Open",
    },
    {
        id: 5,
        name: "Anil Kumar Seth",
        role: "B.Com, FCA",
        department: "Audit",
        image: "https://www.gkcco.com/wp-content/uploads/2019/12/Anil-Seth.jpg",
        experience: "46+ years",
        status: "Open",
    },
    {
        id: 6,
        name: "Vijay Ranjan",
        role: "IRS (Retd)",
        department: "Legal",
        image: "https://www.gkcco.com/wp-content/uploads/2025/12/Untitled-1_06-150x150.png",
        status: "Open",
    },
    {
        id: 7,
        name: "Mukesh Dholakiya",
        role: "CA",
        department: "Tax",
        image: "https://www.gkcco.com/wp-content/uploads/2025/12/CA-Mukesh-Dholakiya-233x300.jpg",
        status: "Closed"
    },
    {
        id: 8,
        name: "Padmanabh Shah",
        role: "M.Com, CA",
        department: "Tax",
        image: "https://www.gkcco.com/wp-content/uploads/2025/12/CA-Padam-Shah-233x300.jpg",
        status: "Open"
    },
    {
        id: 9,
        name: "Siddharth Patel",
        role: "CA",
        department: "Audit",
        image: "https://www.gkcco.com/wp-content/uploads/2025/12/CA-Siddharth-Patel-233x300.jpg",
        status: "Closed"
    },
    {
        id: 10,
        name: "Manan H Shah",
        role: "B.Com, CA",
        department: "Tax",
        image: "https://www.gkcco.com/wp-content/uploads/2025/12/CA-Manan-Shah-1-233x300.jpg",
        status: "Open"
    },
    {
        id: 11,
        name: "Shwetang Pujara",
        role: "B.Com, CA",
        department: "Audit",
        image: "https://www.gkcco.com/wp-content/uploads/2025/12/CA-shwetang-Pujara-233x300.jpg",
        status: "Open"
    },
    {
        id: 12,
        name: "Dhruti Trivedi",
        role: "B.Com, LLB",
        department: "Tax",
        image: "https://www.gkcco.com/wp-content/uploads/2025/12/Advocate-Dhruti-Trivedi-233x300.jpg",
        status: "Closed"
    },
    {
        id: 13,
        name: "Parag K Shah",
        role: "CA",
        department: "Tax",
        image: "https://www.gkcco.com/wp-content/uploads/2025/12/CA-Parag-Shah-150x150.jpg",
        status: "Closed"
    },
    {
        id: 14,
        name: "Arjun Akruwala",
        role: "CA",
        department: "Tax",
        image: "https://www.gkcco.com/wp-content/uploads/2025/12/CA-Arjun-Akruwala-150x150.jpg",
        status: "Open"
    },
    {
        id: 15,
        name: "Bhavik Shah",
        role: "CA",
        department: "Tax",
        image: "https://www.gkcco.com/wp-content/uploads/2025/12/CA-Bhavik-Shah-150x150.jpg",
        status: "Open"
    },
    {
        id: 16,
        name: "Akshay Dodiya",
        role: "CA",
        department: "Tax",
        image: "https://www.gkcco.com/wp-content/uploads/2025/12/CA-Akshay-Dodiya-150x150.jpg",
        status: "Closed"
    },
    {
        id: 17,
        name: "Zankruti A Mehta",
        role: "CA",
        department: "Audit",
        image: "https://www.gkcco.com/wp-content/uploads/2025/12/CA-Zankruti-Mehta-150x150.jpg",
        status: "Closed"
    },
    {
        id: 18,
        name: "Asmaakhtar Shaikh",
        role: "CA",
        department: "Tax",
        image: "https://www.gkcco.com/wp-content/uploads/2025/12/CA-Asma-Shaikh-150x150.jpg",
        status: "Open"
    },
    {
        id: 19,
        name: "Tanupriya Patel",
        role: "CA",
        department: "Tax",
        image: "https://www.gkcco.com/wp-content/uploads/2025/12/CA-Tanuptiya-Patel.jpg",
        status: "Closed"
    },
    {
        id: 20,
        name: "Harsh Hemant Parikh",
        role: "CA",
        department: "Tax",
        image: "https://www.gkcco.com/wp-content/uploads/2025/12/CA-Harsh-Parikh-150x150.jpg",
        status: "Closed"
    },
    {
        id: 21,
        name: "Rujuta Munshi",
        role: "CA",
        department: "Tax",
        image: "https://www.gkcco.com/wp-content/uploads/2025/12/CA-Rujuta-Munshi-150x150.jpg",
        status: "Open"
    },
    {
        id: 22,
        name: "Niti Janakbhai Pandya",
        role: "CA",
        department: "Tax",
        image: "https://www.gkcco.com/wp-content/uploads/2025/12/CA-Niti-Pandya-150x150.jpg",
        status: "Open"
    },
    {
        id: 23,
        name: "Nikunj Murlimanhohar Devpura",
        role: "CA",
        department: "Tax",
        image: "https://www.gkcco.com/wp-content/uploads/2025/12/CA-Nikunj-Devpura-150x150.jpg",
        status: "Open"
    },

    {
        id: 24,
        name: "Archit Sheth",
        role: "CA",
        department: "Tax",
        image: "https://www.gkcco.com/wp-content/uploads/2025/12/CA-Archit-Seth-150x150.jpg",
        status: "Closed"
    },
    {
        id: 25,
        name: "Sudha Gupta",
        role: "M.Com, MBA, CWA",
        department: "Tax",
        image: "https://www.gkcco.com/wp-content/uploads/2020/01/42-.jpg",
        status: "Open"
    },
    {
        id: 26,
        name: "Asha Sindhi",
        role: "CA",
        department: "Tax",
        image: "https://www.gkcco.com/wp-content/uploads/2025/12/CA-Asha-Sindhi-150x150.jpg",
        status: "Open"
    },
    {
        id: 27,
        name: "Pritesh Dudani",
        role: "CA",
        department: "Audit",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9RsVX9frYS9BtDKqtEqUXbv0-6Q6N2IV7Gw&s",
        status: "Open"
    },
    {
        id: 28,
        name: "Priyanka Mehta",
        role: "CA",
        department: "Tax",
        image: "https://img.freepik.com/free-vector/woman-with-long-brown-hair-pink-shirt_90220-2940.jpg?semt=ais_hybrid&w=740&q=80",
        status: "Open"
    },
];
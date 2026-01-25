/**
 * Recommended Books Data
 * Cybersecurity books with Amazon affiliate links
 */

export interface Book {
  title: string;
  category: string;
  description: string;
  isbn: string;
  asin: string;
  image: string;
  amazonUrl: string;
}

export const books: Book[] = [
  {
    title: "The Art of Memory Forensics",
    category: "DFIR",
    description: "Detecting malware and threats in Windows, Linux, and Mac memory",
    isbn: "9781118825099",
    asin: "1118825098",
    image: "https://covers.openlibrary.org/b/isbn/9781118825099-M.jpg",
    amazonUrl: "https://www.amazon.com/dp/1118825098?tag=remnantsecu03-20"
  },
  {
    title: "Practical Malware Analysis",
    category: "Malware Analysis",
    description: "Hands-on guide to dissecting malicious software",
    isbn: "9781593272906",
    asin: "1593272901",
    image: "https://covers.openlibrary.org/b/isbn/9781593272906-M.jpg",
    amazonUrl: "https://www.amazon.com/dp/1593272901?tag=remnantsecu03-20"
  },
  {
    title: "The Web Application Hacker's Handbook",
    category: "Web Security",
    description: "Finding and exploiting security flaws in web applications",
    isbn: "9781118026472",
    asin: "1118026470",
    image: "https://covers.openlibrary.org/b/isbn/9781118026472-M.jpg",
    amazonUrl: "https://www.amazon.com/dp/1118026470?tag=remnantsecu03-20"
  },
  {
    title: "Blue Team Handbook",
    category: "Blue Team",
    description: "Incident response and security operations reference",
    isbn: "9781500734756",
    asin: "1500734756",
    image: "https://covers.openlibrary.org/b/isbn/9781500734756-M.jpg",
    amazonUrl: "https://www.amazon.com/dp/1500734756?tag=remnantsecu03-20"
  },
  {
    title: "Red Team Field Manual (RTFM)",
    category: "Red Team",
    description: "Quick reference for penetration testers",
    isbn: "9781494295509",
    asin: "1494295504",
    image: "https://covers.openlibrary.org/b/isbn/9781494295509-M.jpg",
    amazonUrl: "https://www.amazon.com/dp/1494295504?tag=remnantsecu03-20"
  },
  {
    title: "Blue Team Field Manual (BTFM)",
    category: "Blue Team",
    description: "Quick reference for defenders",
    isbn: "9781541016361",
    asin: "154101636X",
    image: "https://covers.openlibrary.org/b/isbn/9781541016361-M.jpg",
    amazonUrl: "https://www.amazon.com/dp/154101636X?tag=remnantsecu03-20"
  },
  {
    title: "The Hacker Playbook 3",
    category: "Penetration Testing",
    description: "Practical guide to penetration testing",
    isbn: "9781980901754",
    asin: "1980901759",
    image: "https://covers.openlibrary.org/b/isbn/9781980901754-M.jpg",
    amazonUrl: "https://www.amazon.com/dp/1980901759?tag=remnantsecu03-20"
  },
  {
    title: "CISSP All-in-One Exam Guide",
    category: "Certification",
    description: "Comprehensive CISSP certification preparation",
    isbn: "9781260142655",
    asin: "1260142655",
    image: "https://covers.openlibrary.org/b/isbn/9781260142655-M.jpg",
    amazonUrl: "https://www.amazon.com/dp/1260142655?tag=remnantsecu03-20"
  },
  {
    title: "Windows Internals Part 1",
    category: "Windows Security",
    description: "Deep dive into Windows architecture and internals",
    isbn: "9780735684188",
    asin: "0735684189",
    image: "https://covers.openlibrary.org/b/isbn/9780735684188-M.jpg",
    amazonUrl: "https://www.amazon.com/dp/0735684189?tag=remnantsecu03-20"
  },
  {
    title: "Applied Cryptography",
    category: "Cryptography",
    description: "Protocols, algorithms, and source code in C",
    isbn: "9781119096726",
    asin: "1119096723",
    image: "https://covers.openlibrary.org/b/isbn/9781119096726-M.jpg",
    amazonUrl: "https://www.amazon.com/dp/1119096723?tag=remnantsecu03-20"
  },
  {
    title: "The Phoenix Project",
    category: "DevOps/Culture",
    description: "Novel about IT, DevOps, and organizational transformation",
    isbn: "9781942788294",
    asin: "1942788290",
    image: "https://covers.openlibrary.org/b/isbn/9781942788294-M.jpg",
    amazonUrl: "https://www.amazon.com/dp/1942788290?tag=remnantsecu03-20"
  },
  {
    title: "Penetration Testing",
    category: "Penetration Testing",
    description: "Hands-on introduction to hacking by Georgia Weidman",
    isbn: "9781593275648",
    asin: "1593275641",
    image: "https://covers.openlibrary.org/b/isbn/9781593275648-M.jpg",
    amazonUrl: "https://www.amazon.com/dp/1593275641?tag=remnantsecu03-20"
  },
  {
    title: "Network Security Assessment",
    category: "Network Security",
    description: "Know your network vulnerabilities",
    isbn: "9780596510305",
    asin: "0596510306",
    image: "https://covers.openlibrary.org/b/isbn/9780596510305-M.jpg",
    amazonUrl: "https://www.amazon.com/dp/0596510306?tag=remnantsecu03-20"
  },
  {
    title: "Hacking: The Art of Exploitation",
    category: "Exploitation",
    description: "Understanding exploit development and low-level security",
    isbn: "9781593271442",
    asin: "1593271441",
    image: "https://covers.openlibrary.org/b/isbn/9781593271442-M.jpg",
    amazonUrl: "https://www.amazon.com/dp/1593271441?tag=remnantsecu03-20"
  }
];

export const bookCategories = [
  "All",
  "DFIR",
  "Malware Analysis",
  "Web Security",
  "Blue Team",
  "Red Team",
  "Penetration Testing",
  "Certification",
  "Windows Security",
  "Cryptography",
  "DevOps/Culture",
  "Network Security",
  "Exploitation"
];

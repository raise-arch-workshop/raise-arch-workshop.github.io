/*
EDIT THIS FILE ONLY
===================

This file is written in simple JavaScript.

You can change:
- title
- date
- location
- email
- topics
- program committee
- speakers
- organizers
- program
- buttons

Rule:
Only edit text between quotes "like this".
Do not delete commas, brackets, or curly braces.
*/

const websiteData = {
  // Main website identity
  workshopShortTitle: "RAISE-Arch",
  workshopNavTitle: "RAISE-Arch Workshop '26",
  browserTitle: "RAISE-Arch @ MICRO 2026",

  workshopLabel: "Workshop | Co-located with MICRO 2026",
  workshopSubtitle: "<u>R</u>efactoring Heterogeneous Systems <u>Arch</u>itectures for <u>S</u>calable and <u>E</u>fficient <u>AI</u> Infrastructure",

  date: "October 31, 2026",
  location: "Athens, Greece",
  email: "raise.arch.micro59@gmail.com",

  // Top navigation menu
  menu: [
    { text: "About", link: "#about" },
    { text: "Call for Papers", link: "#cfp" },
    { text: "Topics", link: "#topics" },
    { text: "Dates & Submission", link: "#dates" },
    { text: "Submission Guidelines", link: "#submission-guidelines" },
    { text: "Schedule", link: "#program" },
    { text: "Speakers", link: "#speakers" },
    { text: "Program Committee", link: "#program-committee" },
    { text: "Organizers", link: "#organizers" },
    { text: "Contact", link: "#contact" }
  ],

  // Buttons on the first page
  heroButtons: [
    { text: "Call for Papers", link: "#cfp", style: "primary" },
    { text: "Submit via EasyChair", link: "https://easychair.org/my/conference?conf=raisearch2026", style: "primary" },
    { text: "Important Dates", link: "#dates", style: "secondary" },
    { text: "Schedule", link: "#program", style: "secondary" },
    { text: "Contact Organizers", link: "#contact", style: "secondary" }
  ],

  // Countdown boxes on the first page
  countdowns: [
    {
      title: "Paper Submission Deadline",
      targetDate: "2026-09-08T00:00:00-12:00",
      color: "black"
    },
    {
      title: "Countdown to the Event",
      targetDate: "2026-10-31T08:00:00+02:00",
      color: "blue"
    }
  ],


  
  // Small boxes on the first page
  quickFacts: [
    { label: "Format", value: "Half-day" },
    { label: "Submission", value: "TBD" },
    { label: "Venue", value: "<a href='https://www.microarch.org/micro59/'>MICRO 2026</a>" },
    { label: "Location", value: "Athens" }
  ],

  // About the workshop text
  aboutParagraphs: [
    "RAISE-Arch is the first edition of an industry–academic workshop on architectural directions for AI systems, where computing resources, memory bandwidth, memory capacity, storage access, and interconnect scalability are first-order bottlenecks. Modern AI infrastructures increasingly depend on technologies such as HBM, HBF, CXL, AI-SSD/computational storage, chiplets, and heterogeneous accelerators, shifting the design focus from a single system to a complex heterogeneous system architecture. More specifically, with the advent of the Agentic AI era, there is an even greater need for scalable, efficient, and collaborative infrastructure that integrates xPU computing and tiered storage resources. Moreover, there is an even greater need for software and hardware co-design and co-optimization.",
    "Held in conjunction with <a class='micro-link' href='https://www.microarch.org/micro59/'>MICRO 2026</a>, the workshop will bring together researchers and practitioners from computer architecture, systems, memory and storage, compilers and runtime systems, and industry to discuss the next generation of scalable AI hardware and software platforms. The goal is to provide a forum for presenting new ideas, practical experiences, and cross-layer solutions for building efficient, high-performance, and deployable AI infrastructure."
  ],

  // Call for papers text
  cfpParagraphs: [
    "RAISE-Arch invites researchers, developers, and professionals from academia and industry to submit extended abstracts related to the workshop topics. Submissions may describe work-in-progress ideas, position and vision statements, benchmarking and evaluation studies, early-stage research, industry experience, or discussion-oriented contributions. The program will include invited talks and selected presentations based on the submitted contributions. Please see the Submission Guidelines for format and submission details."
  ],

  submissionNote: "<ul class='submission-list'><li>RAISE-Arch welcomes submissions in the form of extended abstracts related to the workshop topics.</li><li>Submissions should be max 2 pages, excluding references, using a double-column format, and submitted as a printable PDF file.</li><li>Each submission must be in English and include the title, author names, affiliations, and contact email. Submissions should not be anonymized.</li><li>We strongly encourage authors to use the provided LaTeX template: <a class='template-link' href='assets/documents/Sample_Workshop_Template.zip'>Download LaTeX Template (ZIP)</a>.</li><li>No formal proceedings are planned, and submissions are intended to be non-archival. Presentation slides or related materials may be posted on the workshop website after the event, subject to author approval.</li><li>At least one author of each accepted contribution is expected to attend the workshop and present the work.</li></ul>",
  submissionLink: "https://easychair.org/my/conference?conf=raisearch2026",

  // Topics of interest
  topics: [
    "Heterogeneous architectures for new AI infrastructure",
    "Data-centric and memory-centric design, near-data and in-memory computing (PIM, NDP, near-memory)",
    "Architectures for reducing data movement across compute, memory, and storage",
    "HBM, HBF, CXL, chiplets, and disaggregated-memory architectures for AI",
    "Computational storage, AI-SSD, and flash-assisted AI system architectures",
    "AI accelerators, NPUs, FPGAs, heterogeneous SoCs, and rack-scale AI platforms",
    "Redefining CPU architecture and capacity for Agentic AI infrastructure",
    "Benchmarking and evaluation methodologies for data-centric architectures",
    "Tracing and simulation methodologies for emerging workloads"
  ],

  // Important dates
  dates: [
    { label: "Paper submission deadline", value: "7th of Sept. 2026 (AoE)" },
    { label: "Author notification", value: "October 1, 2026 (AoE)" },
    { label: "Workshop date", value: "October 31, 2026" }
  ],

  // Program
  program: [],

  // Speakers
  speakers: [],

  // Program Committee
  programCommittee: [],


  
  // Organizers
  organizers: [
    {
      initials: "AK",
      name: "Andreas Koch",
      affiliation: "Technical University of Darmstadt",
      email: "koch@esa.tu-darmstadt.de",
      details: "Andreas Koch is a professor in the Department of Computer Science at TU Darmstadt, Germany. His research interests include domain-specific computer architecture, accelerator architecture, reconfigurable computing, compilers, toolchains, and hardware-conscious data systems, targeting both FPGAs and ASICs. He received his Ph.D. in Engineering from TU Braunschweig in 1997, was a postdoctoral researcher at UC Berkeley from 1997 to 1999, and received his Habilitation from TU Darmstadt in 2005. He has been program chair for the FPL and FPT conferences and organized ARC 2019."
    },
    {
      initials: "ST",
      name: "Sajjad Tamimi",
      affiliation: "Huawei Europe",
      email: "sajjad.tamimi@gmail.com",
      details: "Sajjad Tamimi is a Senior R&D Engineer at Huawei, where he works on AI hardware and accelerators, computer architecture, memory systems and data movement, and HW/SF co-design. Before joining Huawei, he was a postdoctoral researcher at TU Darmstadt, Germany, working on data-intensive systems, PCIe/CXL/CCIX interconnects, smart storage, and FPGA-based acceleration. He received his Ph.D. in Computer Science with highest distinction (summa cum laude) from TU Darmstadt in 2025. His publications have appeared in IEEE and ACM journals and conference proceedings, two of which have received HiPEAC Paper Awards."
    },
    {
      initials: "BG",
      name: "Boris Grot",
      affiliation: "University of Edinburgh",
      email: "boris.grot@ed.ac.uk",
      details: "Boris Grot is a Professor in the School of Informatics at the University of Edinburgh, where he leads the Edinburgh Architecture and Systems (EASE) Lab. Boris' research interests include server hardware and software stacks, networking, and datacenter-scale computing. Boris is a member of the MICRO and HPCA Halls of Fame and a recipient of multiple awards for his research. Boris was the Program Chair for MICRO 2022, General Chair for HPCA 2024, and currently sits on the Board of Directors of ACM SIGARCH. He has a PhD from The University of Texas at Austin."
    },
    {
      initials: "FG",
      name: "Freddy Gabbay",
      affiliation: "Hebrew University of Jerusalem",
      details: "Freddy Gabbay is a Professor of Electrical Engineering at the Hebrew University of Jerusalem, where he leads the VLSI Research Lab. He received the B.Sc., M.Sc., and Ph.D. degrees from the Technion. His research interests include computer architecture, VLSI design, chip reliability, machine learning accelerators, and domain-specific architectures. He previously held senior positions at Intel, Mellanox, and Freescale, and holds 19 patents."
    },
    {
      initials: "BH",
      name: "Brian Hirano",
      affiliation: "XCENA",
      details: "Brian Hirano is currently Vice President of Business Development at XCENA, a Korean-based developing CXL modules with advanced features. He has had over 35 years in senior technical roles, at Micron, Bigstream (a data analytics acceleration company), and Oracle. Brian areas of interests are high-performance database systems, system architectures, and workload characterization. He serves in industry working groups in Open Compute Platform and SNIA. Brian was the guest editor of the IEEE Micro Special issue on Data-Centric Computing. He has served on program committees for various conferences, including MICRO and Top Picks."
    },
    {
      initials: "ZL",
      name: "Zheng Li",
      affiliation: "Huawei Europe",
      email: "TBD",
      details: "Zheng Li is a senior R&D and innovation leader with 20 years of international experience in computing architecture, AI, industrial software, and strategic research management. He received his PhD from INRIA, where his research focused on processor architecture and parallel programming models. He later held senior research positions at INRIA and IRT SystemX, contributing to multicore processor architecture and safety-critical real-time systems. Since 2017, Dr. Li has been with Huawei’s European Research Institute, where he leads innovation and academic development and supports strategic collaboration with leading research communities."
    },
    {
      initials: "ZY",
      name: "Zhou Yigang",
      affiliation: "Huawei China",
      details: "Zhou Yigang is Chief Expert in Computing Chip Technology Planning at Huawei and a senior computing technology expert with 24 years of experience in computer architecture, hardware-software synergy, and optimization. Yigang has held senior architect and planning roles at both Intel and Huawei and holds more than 34 domestic and international patents."
    }
  ],

  footerText: ""  
};

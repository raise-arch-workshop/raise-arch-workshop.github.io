/* RAISE-Arch 2026 workshop program: accepted papers only. */
websiteData.program = [
  {
    "time": "08:00–08:10",
    "type": "standard",
    "title": "Welcome and Workshop Overview"
  },
  {
    "time": "08:10–09:00",
    "type": "keynote",
    "title": "Keynote Speaker",
    "keynote": {
      "title": "MangoBoost: Fast, Scalable, Cost-Effective AI Infrastructure for Agentic AI Workloads",
      "speaker": "Jangwoo Kim",
      "affiliation": "MangoBoost & Seoul National University",
      "photo": "assets/images/jangwoo-kim.jpg",
      "abstract": "The recent AI explosion is reshaping the modern datacenter infrastructure which consists of many servers equipped with many devices (e.g., CPU, GPU, NPU, SSD, NIC). However, conventional server architectures severely suffer from critical performance and scalability challenges in executing the ever-increasing AI applications. In this talk, I will first explain the key challenges in conventional computer systems from the perspective of scalable networking, and then introduce the next-generation server architectures driven by fast, smart and flexible network acceleration solutions from MangoBoost.",
      "bio": "Jangwoo Kim is a full professor at Seoul National University. His research interests include computer system architecture, quantum computing, and neuromorphic computing. He is also the CEO and founder of MangoBoost which provides the next-generation AI infrastructure tailored for agentic AI workloads. He earned his PhD degree from Carnegie Mellon University, and his BS and M.Eng degrees from Cornell University. Prior to his academic career, he worked as a CPU/system architect at Sun Microsystems and Oracle to develop UltraSPARC T4 CPUs and servers."
    }
  },
  {
    "time": "09:00–10:00",
    "type": "session-one",
    "title": "Session 1: Memory and Data Movement for Scalable AI Infrastructure",
    "papers": [
      {
        "title": "Low Latency Inference with Speculative Decoding on SRAM-Based Accelerators and GPUs",
        "authors": "Tom St. John, Ankita Nayak, James Bartlett, Zain Asgar"
      },
      {
        "title": "Multi-Device CXL Near-Data Processing for ANN Search: A Real-System Evaluation",
        "authors": "Seunghyun Yoo, Woosuk Kang, Dohun Kim, Harry Kim"
      },
      {
        "title": "Virtual Memory for Agentic AI: KV-Cache as Pageable State in a CXL-Enabled Memory Hierarchy",
        "authors": "Baha Eddine Ouni"
      },
      {
        "title": "CoCoPath: A PIM-Enabled HBM-HBF Architecture for Long-Context Edge LLM Inference",
        "authors": "Shunchen Shi, Qijia Yang, Zhichun Li, Xiaoming Chen, Xueqi Li"
      }
    ]
  },
  {
    "time": "10:00–10:30",
    "type": "break",
    "title": "Coffee Break"
  },
  {
    "time": "10:30–11:30",
    "type": "session-two",
    "title": "Session 2: Heterogeneous Architectures and Hardware–Software Co-Design",
    "papers": [
      {
        "title": "Compiling High-Level Programs for Heterogeneous CIM/CNM Systems",
        "authors": "João P. C. de Lima, Asif Ali Khan, Hamid Farzaneh, Jeronimo Castrillon"
      },
      {
        "title": "Specialized Hardware for LLM Prefix Caching at Line-Rate: Can We Teach an Old Dog New Tricks?",
        "authors": "Si Jun Kwon, Zsolt István"
      },
      {
        "title": "imPIM: Host-Decoupled PIM Orchestration for Long-Context Sparse Attention",
        "authors": "Zhichun Li, Xinlei Nie, Shunchen Shi, Yu Huang, Xiaoming Chen, Xueqi Li"
      },
      {
        "title": "Characterizing High Bandwidth Flash for LLM Serving",
        "authors": "Zack Yu, Chloe Wong, Coleman Hooper, Minjae Lee, Wonjun Kang, Youngjin Cho, Michael W. Mahoney, Yakun Sophia Shao, Kurt Keutzer, Amir Gholami"
      }
    ]
  },
  {
    "time": "11:30–11:55",
    "type": "industry",
    "title": "Industry Perspectives",
    "papers": [
      {
        "title": "SuperPoD: A New Computing Architecture for the Agentic Era",
        "authors": "Zichen Fan"
      },
      {
        "title": "Building the Data Backbone for AI: Research Challenges and the Huawei OlympusMons Awards",
        "authors": "Shai Bergman"
      }
    ]
  },
  {
    "time": "11:55–12:00",
    "type": "standard",
    "title": "Closing Remarks"
  }
];

const Questions = [
    // Geography, Environment and Population (5 Questions – 10 Marks)
    //1
    {
        question: "Which continent has the most number of countries?",
        options: ["America", "Asia", "Europe", "Africa"],
        answer: 3
    },
    //2
    {
        question: "Which is the longest river in Nepal?",
        options: ["Koshi", "Ghodaghodi", "Karnali", "Gandaki"],
        answer: 2 
    },
    //3
    {
        question: "What is the major climate type of Nepal?",
        options: ["Desert", "Temperate", "Tropical", "Monsoonal"],
        answer: 3
    },
    //4
    {
        question: "What is the main strategy for biodiversity conservation in Nepal?",
        options: ["Afforestation", "Protected Area System", "Urbanization", "Land Use"],
        answer: 1
    },
    //5
    {
        question: "When is World Population Day observed?",
        options: ["June 21", "July 11", "August 5", "September 10"],
        answer: 1
    },

    // History and Culture (5 Questions – 10 Marks)
    //6
    {
        question: "Who started the Kirant era in Nepal?",
        options: ["Jhorhang", "Lichchhavi", "Yalambar", "Prithvi Narayan Shah"],
        answer: 2
    },
    //7
    {
        question: "What was the main religion during the Lichchhavi period?",
        options: ["Buddhism", "Islam", "Hinduism", "Kirat"],
        answer: 2
    },
    //8
    {
        question: "When did Prithvi Narayan Shah start unifying Nepal?",
        options: ["1789 B.S.", "1799 B.S.", "1750 B.S.", "1801 B.S."],
        answer: 1
    },
    //9
    {
        question: "Which ethnic group primarily celebrates Maghe Sankranti?",
        options: ["Magar", "Tharu", "Newar", "Limbu"],
        answer: 1
    },
    //10
    {
        question: "The phrase ‘Satyam Shivam Sundaram’ is related to which philosophy?",
        options: ["Buddhism", "Islam", "Hinduism", "Christianity"],
        answer: 2
    },

    // Economic Aspect and Development (5 Questions – 10 Marks)
    //11
    {
        question: "What does GDP represent in Nepal?",
        options: ["Overall economic output", "Revenue growth rate", "Unemployment rate", "Inflation"],
        answer: 0
    },
    //12
    {
        question: "Which sector employs the most people in Nepal?",
        options: ["Industry", "Service", "Tourism", "Agriculture"],
        answer: 3
    },
    //13
    {
        question: "What is the main goal of Nepal’s 16th plan?",
        options: ["Export growth", "Inclusive prosperity", "Tourism promotion", "Tax reform"],
        answer: 1
    },
    //14
    {
        question: "Which sector receives the most foreign aid in Nepal?",
        options: ["Information Technology", "Physical Infrastructure", "Military", "Sports"],
        answer: 1
    },
    //15
    {
        question: "What is the main source of foreign investment in Nepal?",
        options: ["Bangladesh", "China", "USA", "India"],
        answer: 3
    },

    // Governance and Constitution (5 Questions – 10 Marks)
    //16
    {
        question: "In which year was the Constitution of Nepal promulgated?",
        options: ["2070 B.S.", "2072 B.S.", "2073 B.S.", "2063 B.S."],
        answer: 1
    },
    //17
    {
        question: "What is Part 5 of Nepal’s Constitution related to?",
        options: ["Education policy", "Federal executive", "Human rights", "Judiciary"],
        answer: 1
    },
    //18
    {
        question: "What does adult franchise mean?",
        options: ["Voting right for 18+ citizens", "Equal voting rights", "Rights of educated citizens", "Women’s rights"],
        answer: 1 // FIXED: Correct answer is equal voting rights
    },
    //19
    {
        question: "How are human rights defined?",
        options: ["Social rights", "Legal rights", "Natural rights", "Privileges"],
        answer: 2
    },
    //20
    {
        question: "In which part is the provision of provincial and local governments?",
        options: ["Part 4", "Part 5", "Part 7", "Part 9"],
        answer: 1
    },

    // International Affairs (5 Questions – 10 Marks)
    //21
    {
        question: "When was the United Nations established?",
        options: ["1920", "1945", "1950", "1935"],
        answer: 1
    },
    //22
    {
        question: "When did Nepal join BIMSTEC?",
        options: ["2004", "2004", "1997", "2001"],
        answer: 1
    },
    //23
    {
        question: "Where is the SAARC headquarters located?",
        options: ["India", "Sri Lanka", "Nepal", "Bangladesh"],
        answer: 2
    },
    //24
    {
        question: "On which continent is ASEAN focused?",
        options: ["South America", "Africa", "Asia", "Europe"],
        answer: 2
    },
    //25
    {
        question: "Which country is Nepal’s main trading partner?",
        options: ["USA", "India", "China", "Bangladesh"],
        answer: 1
    },

    // Science, Tech & Current Affairs (5 Questions – 10 Marks)
    //26
    {
        question: "What is the brain of a computer called?",
        options: ["RAM", "Monitor", "Mouse", "CPU"],
        answer: 3
    },
    //27
    {
        question: "Who is the current head of WHO?",
        options: ["Dr. Lucas Burns", "Dr. Keshav Pandey", "Dr. Tedros Adhanom", "Dr. Peter Lee"],
        answer: 2
    },
    //28
    {
        question: "Which is the largest planet in the solar system?",
        options: ["Earth", "Jupiter", "Mars", "Venus"],
        answer: 1
    },
    //29
    {
        question: "Polio is caused by which type of organism?",
        options: ["Bacteria", "Virus", "Fungus", "Protozoa"],
        answer: 1
    },
    //30
    {
        question: "When did Nepal first administer the COVID vaccine?",
        options: ["Poush 2077", "Magh 2077", "Chaitra 2076", "Falgun 2077"],
        answer: 1
    },

    // Office & Public Management (5 Questions – 10 Marks)
    //31
    {
        question: "What does ‘office’ mean?",
        options: ["Place to store files", "Information center", "Place of operation", "Store"],
        answer: 2
    },
    //32
    {
        question: "What is a ‘tipani’ (official note)?",
        options: ["Information", "Administrative recommendation", "Press note", "Order"],
        answer: 1
    },
    //33
    {
        question: "What is the purpose of record management?",
        options: ["To burn paper", "To save space", "To secure information", "To receive salary"],
        answer: 2
    },
    //34
    {
        question: "At what level is public service delivery executed?",
        options: ["Federal", "Provincial", "Local", "Ministry"],
        answer: 2
    },
    //35
    {
        question: "What does e-Governance mean?",
        options: ["Election", "Governance through ICT", "Economic reform", "Human resource development"],
        answer: 1
    },

    // Applied Mathematics (5 Questions – 10 Marks)
    //36
    {
        question: "What is 20% of 150?",
        options: ["25", "30", "35", "20"],
        answer: 1
    },
    //37
    {
        question: "What is the LCM of 12, 15, and 18?",
        options: ["60", "180", "90", "120"],
        answer: 1
    },
    //38
    {
        question: "What is the simple interest on Rs. 500 at 5% per annum for 2 years?",
        options: ["Rs. 25", "Rs. 45", "Rs. 50", "Rs. 55"],
        answer: 2
    },
    //39
    {
        question: "Which is the correct formula to calculate average?",
        options: ["Number × Sum", "Sum × Number", "Sum / 2", "Sum / Number"],
        answer: 3
    },
    //40
    {
        question: "Profit = Rs. 20 on Rs. 100 investment. Profit percent?",
        options: ["10%", "20%", "30%", "40%"],
        answer: 1
    },

    // Public Enterprises (10 Questions – 20 Marks)
    //41
    {
        question: "What is a public enterprise?",
        options: ["Private company", "Government-run organization", "Foreign aid", "Association"],
        answer: 1
    },
    //42
    {
        question: "When did public enterprises start in Nepal?",
        options: ["2007 B.S.", "2009 B.S.", "2013 B.S.", "2025 B.S."],
        answer: 2
    },
    //43
    {
        question: "What is the main objective of public enterprises?",
        options: ["To make profit", "To deliver services", "Political benefit", "Operate banks"],
        answer: 1
    },
    //44
    {
        question: "Which body regulates public enterprises?",
        options: ["Parliament", "Office of the Auditor General", "Ministry", "Planning Commission"],
        answer: 1
    },
    //45
    {
        question: "Nepal Telecom falls under which sector?",
        options: ["Energy", "Communication", "Banking", "Transportation"],
        answer: 1
    },
    //46
    {
        question: "What does CSR stand for?",
        options: ["Cost Saving Regulation", "Corporate Social Responsibility", "Company Strategy Rules", "Civil Service Routine"],
        answer: 1
    },
    //47
    {
        question: "Who manages HR in public enterprises?",
        options: ["Public Service Commission", "Council of Ministers", "Respective Board/Executive", "Employee Union"],
        answer: 2
    },
    //48
    {
        question: "What is the main objective of auditing?",
        options: ["Pay tax", "Salary determination", "Account inspection", "Reduce expenses"],
        answer: 2
    },
    //49
    {
        question: "Nepal Insurance Authority is related to which function?",
        options: ["Bank", "Insurance sector regulation", "Education", "Tourism"],
        answer: 1
    },
    //50
    {
        question: "What does the Securities Board of Nepal regulate?",
        options: ["Trade", "Capital market", "Tourism", "Farmer cooperatives"],
        answer: 1
    }
];

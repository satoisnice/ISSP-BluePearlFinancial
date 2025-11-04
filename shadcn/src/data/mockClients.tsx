export const mockClients = [
  {
    id: 1,
    name: "Jennifer & Robert Williams",
    address: "1234 Oak Street, Vancouver",
    phone: "(604) 555-0123",
    email: "j.williams@email.com",
    renewalDays: 45,
    renewalDate: "April 15, 2025",
    currentAmount: 385000,
    currentRate: 4.79,
    propertyValue: 685000,
    propertyValueChange: 29,
    equity: 300000,
    paymentRoom: 2500,
    lifetimeValue: 8450,
    opportunities: 3,
    priority: "high",
    originalDeal: {
      year: 2020,
      amount: 425000,
      rateSecured: 2.49,
      commission: 4250,
      competitors: [
        { bank: "RBC", rate: 2.54 },
        { bank: "Scotia", rate: 2.59 }
      ],
      wonReason: "Best rate + trusted referral from sister"
    },
    lifeChanges: [
      {
        event: "Second child born (Emma)",
        year: 2021,
        description: "Increased expenses, considering education savings",
        icon: "heart"
      },
      {
        event: "Jennifer promoted to Director",
        year: 2022,
        description: "Income increased by $20k, more stable employment",
        icon: "target"
      },
      {
        event: "Kitchen renovation completed",
        year: 2023,
        description: "Spent ~$45k, increased home value",
        icon: "home"
      },
      {
        event: "Started college fund for kids",
        year: 2024,
        description: "Looking at long-term financial planning",
        icon: "graduation"
      }
    ],
    financial: {
      householdIncome: 165000,
      incomeChange: 25000,
      jennifer: "Marketing Director",
      robert: "Software Engineer",
      debts: [
        {
          type: "Car Loan",
          amount: 22000,
          payment: 425,
          rate: 5.90
        },
        {
          type: "Line of Credit",
          amount: 15000,
          payment: 300,
          rate: 7.45
        }
      ]
    },
    primaryOpportunity: {
      title: "Mortgage Renewal",
      description: "Blend and extend to lock in before rates rise",
      savingsAmount: 180,
      urgency: "high",
      urgencyReason: "High - rates expected to increase"
    },
    crossSellOpportunities: [
      {
        title: "Debt Consolidation",
        description: "High-rate car loan and LOC",
        benefit: "Save $275/month",
        type: "savings"
      },
      {
        title: "HELOC",
        description: "Access equity for investment property",
        benefit: "Up to $125,000 available",
        type: "access"
      },
      {
        title: "Life Insurance",
        description: "Increased mortgage, 2 young children",
        benefit: "Gap: Only has work coverage",
        type: "protection"
      }
    ],
    competitiveAlert: {
      threats: [
        "TD offering $1,000 cash back",
        "RBC actively courting with 5.79% rate"
      ],
      clientLoyalty: "Medium - happy but price conscious"
    }
  },
  {
    id: 2,
    name: "Michael & Sarah Chen",
    address: "5678 Maple Ave, Burnaby",
    phone: "(778) 555-0456",
    email: "m.chen@email.com",
    renewalDays: 120,
    renewalDate: "July 10, 2025",
    currentAmount: 520000,
    currentRate: 3.89,
    propertyValue: 890000,
    propertyValueChange: 18,
    equity: 370000,
    paymentRoom: 3200,
    lifetimeValue: 12300,
    opportunities: 2,
    priority: "medium",
    originalDeal: {
      year: 2019,
      amount: 550000,
      rateSecured: 2.79,
      commission: 5500,
      competitors: [
        { bank: "TD", rate: 2.89 },
        { bank: "BMO", rate: 2.94 }
      ],
      wonReason: "Best overall package with flexible terms"
    },
    lifeChanges: [
      {
        event: "Started own business",
        year: 2022,
        description: "Sarah left corporate job, now self-employed",
        icon: "target"
      },
      {
        event: "Rental property purchased",
        year: 2023,
        description: "Investment condo in Surrey",
        icon: "home"
      }
    ],
    financial: {
      householdIncome: 185000,
      incomeChange: 15000,
      michael: "Software Engineer",
      sarah: "Business Owner (Marketing Consulting)",
      debts: [
        {
          type: "Investment Property",
          amount: 380000,
          payment: 2100,
          rate: 4.25
        }
      ]
    },
    primaryOpportunity: {
      title: "Mortgage Renewal",
      description: "Consider blended rate for stability",
      savingsAmount: 120,
      urgency: "medium",
      urgencyReason: "Medium - good runway but should plan ahead"
    },
    crossSellOpportunities: [
      {
        title: "Portfolio Review",
        description: "Multiple properties, optimize structure",
        benefit: "Potential tax advantages",
        type: "optimization"
      },
      {
        title: "Commercial Mortgage",
        description: "Business expanding, may need office space",
        benefit: "Business growth opportunity",
        type: "expansion"
      }
    ],
    competitiveAlert: {
      threats: [
        "BMO offering business banking bundle"
      ],
      clientLoyalty: "High - very satisfied with service"
    }
  },
  {
    id: 3,
    name: "David Thompson",
    address: "910 Pine Road, Richmond",
    phone: "(604) 555-0789",
    email: "d.thompson@email.com",
    renewalDays: 15,
    renewalDate: "March 27, 2025",
    currentAmount: 295000,
    currentRate: 5.24,
    propertyValue: 475000,
    propertyValueChange: 12,
    equity: 180000,
    paymentRoom: 1800,
    lifetimeValue: 5200,
    opportunities: 1,
    priority: "high",
    originalDeal: {
      year: 2021,
      amount: 310000,
      rateSecured: 2.99,
      commission: 3100,
      competitors: [
        { bank: "CIBC", rate: 3.09 },
        { bank: "Scotiabank", rate: 3.14 }
      ],
      wonReason: "Fastest approval process"
    },
    lifeChanges: [
      {
        event: "Divorced",
        year: 2023,
        description: "Bought out ex-spouse's share",
        icon: "heart"
      },
      {
        event: "Career change",
        year: 2024,
        description: "New job with higher salary",
        icon: "target"
      }
    ],
    financial: {
      householdIncome: 92000,
      incomeChange: 18000,
      david: "Account Manager",
      debts: [
        {
          type: "Credit Card",
          amount: 8500,
          payment: 250,
          rate: 19.99
        }
      ]
    },
    primaryOpportunity: {
      title: "Urgent Renewal",
      description: "Lock in rate immediately - expires in 15 days",
      savingsAmount: 220,
      urgency: "critical",
      urgencyReason: "Critical - renewal deadline approaching"
    },
    crossSellOpportunities: [
      {
        title: "Debt Consolidation",
        description: "High-interest credit card debt",
        benefit: "Save $180/month on interest",
        type: "savings"
      }
    ],
    competitiveAlert: {
      threats: [
        "Multiple lenders reaching out with offers",
        "TD offering $500 bonus"
      ],
      clientLoyalty: "Medium - price sensitive due to divorce costs"
    }
  },
  {
    id: 4,
    name: "Amanda & James Rodriguez",
    address: "2468 Cedar Lane, Surrey",
    phone: "(778) 555-0321",
    email: "a.rodriguez@email.com",
    renewalDays: 200,
    renewalDate: "October 29, 2025",
    currentAmount: 680000,
    currentRate: 4.15,
    propertyValue: 1200000,
    propertyValueChange: 35,
    equity: 520000,
    paymentRoom: 4500,
    lifetimeValue: 18900,
    opportunities: 4,
    priority: "medium",
    originalDeal: {
      year: 2018,
      amount: 750000,
      rateSecured: 3.29,
      commission: 7500,
      competitors: [
        { bank: "RBC", rate: 3.39 },
        { bank: "National Bank", rate: 3.44 }
      ],
      wonReason: "Excellent customer service and flexibility"
    },
    lifeChanges: [
      {
        event: "Twins born",
        year: 2020,
        description: "Two boys, considering larger home",
        icon: "heart"
      },
      {
        event: "Amanda started remote work",
        year: 2021,
        description: "More flexibility, home office setup",
        icon: "target"
      },
      {
        event: "Major home addition",
        year: 2023,
        description: "Added bedroom and bathroom, $120k project",
        icon: "home"
      },
      {
        event: "James partnership offer",
        year: 2024,
        description: "Becoming partner at law firm, significant income increase",
        icon: "target"
      }
    ],
    financial: {
      householdIncome: 285000,
      incomeChange: 85000,
      amanda: "Senior Product Manager (Tech)",
      james: "Partner at Law Firm",
      debts: [
        {
          type: "Student Loans",
          amount: 35000,
          payment: 450,
          rate: 3.95
        },
        {
          type: "Car Lease",
          amount: 0,
          payment: 650,
          rate: 0
        }
      ]
    },
    primaryOpportunity: {
      title: "Portfolio Expansion",
      description: "High equity + income growth = investment ready",
      savingsAmount: 0,
      urgency: "low",
      urgencyReason: "Low urgency - renewal far out, focus on growth"
    },
    crossSellOpportunities: [
      {
        title: "Investment Property",
        description: "Strong financials, significant equity available",
        benefit: "Up to $400,000 for investment",
        type: "expansion"
      },
      {
        title: "HELOC",
        description: "Access equity for opportunities",
        benefit: "Flexible access to funds",
        type: "access"
      },
      {
        title: "Life Insurance Review",
        description: "Income doubled, young family, high mortgage",
        benefit: "Ensure adequate coverage",
        type: "protection"
      },
      {
        title: "Estate Planning",
        description: "High net worth, complex assets",
        benefit: "Protect family's future",
        type: "protection"
      }
    ],
    competitiveAlert: {
      threats: [
        "Private banks courting with wealth management services",
        "Multiple investment property financing offers"
      ],
      clientLoyalty: "High - long relationship, very satisfied"
    }
  }
];
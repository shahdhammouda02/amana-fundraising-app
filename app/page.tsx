'use client';

import { useState } from 'react';
import Image from 'next/image';
import image1 from '@/public/images/img.jpg'

// --- Data Interface and JSON Data ---
interface Donor {
  id: number;
  name: string;
  type: string;
  amount: number;
  date: string;
  is_anonymous: boolean;
  location: {
    city: string;
    country: string;
  };
  message?: string;
}

import type { StaticImageData } from 'next/image';

interface Cause {
  id: number;
  title: string;
  category: string;
  status: string;
  urgency_level: string;
  short_description: string;
  detailed_description: string;
  image_url: string | StaticImageData;
  location: {
    city: string;
    country: string;
    region: string;
    latitude: number;
    longitude: number;
  };
  metrics: {
    goal_amount: number;
    raised_amount: number;
    percentage_funded: number;
    donor_count: number;
    average_donation: number;
    days_remaining: number;
    days_active: number;
  };
  contact: {
    organization: string;
    coordinator: string;
    email: string;
    phone: string;
  };
  donors: Donor[];
  timeline: {
    created_date: string;
    target_date: string;
    last_updated: string;
  };
  tags: string[];
  impact_metrics: {
    beneficiaries: number;
    metric_description: string;
  };
  updates: {
    date: string;
    title: string;
    description: string;
  }[];
}

interface FundraisingStats {
  total_causes: number;
  active_causes: number;
  total_raised: number;
  total_goal: number;
  average_completion_rate: number;
  top_category: string;
  total_donors: number;
  average_donation: number;
}

interface CompanyInfo {
  name: string;
  founded: string;
  headquarters: string;
  industry: string;
  description: string;
}

interface Data {
  message: string;
  company_info: CompanyInfo;
  fundraising_stats: FundraisingStats;
  causes: Cause[];
}

const data: Data = {
  "message": "Amana Fundraising causes data retrieved successfully",
  "company_info": {
    "name": "Amana Fundraising",
    "founded": "2020",
    "headquarters": "Amman, Jordan",
    "industry": "Non-Profit Fundraising",
    "description": "Leading fundraising platform connecting donors with impactful causes across the Middle East, specializing in education, agriculture, and small business initiatives that create lasting change in communities."
  },
  "fundraising_stats": {
    "total_causes": 8,
    "active_causes": 7,
    "total_raised": 706640,
    "total_goal": 970000,
    "average_completion_rate": 74,
    "top_category": "Education",
    "total_donors": 359,
    "average_donation": 1923
  },
  "causes": [
    {
      "id": 1,
      "title": "Digital Classroom Initiative for Gaza Schools",
      "category": "Education",
      "status": "Active",
      "urgency_level": "High",
      "short_description": "Providing laptops, tablets, and internet connectivity to 500 students in Gaza to ensure continuity of education despite ongoing challenges.",
      "detailed_description": "The Digital Classroom Initiative aims to bridge the digital divide for Palestinian students in Gaza by providing essential technology and internet access. With over 70% of schools lacking adequate digital infrastructure, students are falling behind in essential 21st-century skills. This initiative will provide 300 laptops, 200 tablets, portable internet hotspots, and teacher training programs to serve 500 students across 10 schools in Gaza. The project includes a sustainability component with local technical support and maintenance training to ensure long-term success.",
      "image_url": image1,
      "location": {
        "city": "Gaza",
        "country": "Palestine",
        "region": "Middle East",
        "latitude": 31.3547,
        "longitude": 34.3088
      },
      "metrics": {
        "goal_amount": 75000,
        "raised_amount": 52340,
        "percentage_funded": 70,
        "donor_count": 37,
        "average_donation": 1415,
        "days_remaining": 32,
        "days_active": 333
      },
      "contact": {
        "organization": "Palestinian Education Foundation",
        "coordinator": "Dr. Layla Mansour",
        "email": "layla.mansour@paled.org",
        "phone": "+970-8-123-4567"
      },
      "donors": [
        { "id": 33, "name": "Anonymous Donor", "type": "Foundation", "amount": 2403, "date": "2025-09-12", "is_anonymous": true, "location": { "city": "Hebron", "country": "Palestine" }, "message": "Education is the key to breaking the cycle of poverty." },
        { "id": 27, "name": "Layla Hijazi", "type": "Individual", "amount": 241, "date": "2025-09-11", "is_anonymous": false, "location": { "city": "Amman", "country": "UAE" }, "message": "Education is the key to breaking the cycle of poverty." },
        { "id": 37, "name": "Desert Rose Industries", "type": "Corporate", "amount": 1981, "date": "2025-09-07", "is_anonymous": false, "location": { "city": "Amman", "country": "UAE" } },
        { "id": 5, "name": "Bank al Etihad", "type": "Corporate", "amount": 5717, "date": "2025-09-06", "is_anonymous": false, "location": { "city": "Irbid", "country": "Lebanon" }, "message": "Small businesses are the backbone of our community." },
        { "id": 1, "name": "Anonymous Donor", "type": "Corporate", "amount": 4646, "date": "2025-09-05", "is_anonymous": true, "location": { "city": "Ramallah", "country": "Palestine" } },
        { "id": 10, "name": "Gaza Relief Network", "type": "Individual", "amount": 80, "date": "2025-09-02", "is_anonymous": false, "location": { "city": "Gaza", "country": "Palestine" } },
        { "id": 21, "name": "Oasis Technologies", "type": "Corporate", "amount": 5086, "date": "2025-08-27", "is_anonymous": false, "location": { "city": "Cairo", "country": "Egypt" } },
        { "id": 36, "name": "Middle East Development Bank", "type": "Corporate", "amount": 2169, "date": "2025-08-25", "is_anonymous": false, "location": { "city": "Alexandria", "country": "Jordan" }, "message": "Supporting our farmers means securing our future." },
        { "id": 31, "name": "Anonymous Donor", "type": "Individual", "amount": 265, "date": "2025-08-22", "is_anonymous": true, "location": { "city": "Amman", "country": "Jordan" }, "message": "Every child deserves access to quality education." },
        { "id": 32, "name": "Oasis Technologies", "type": "Corporate", "amount": 5391, "date": "2025-08-16", "is_anonymous": false, "location": { "city": "Hebron", "country": "Saudi Arabia" }, "message": "Supporting sustainable agriculture for generations to come." }
      ],
      "timeline": {
        "created_date": "2024-10-15",
        "target_date": "2025-01-30",
        "last_updated": "2024-12-20"
      },
      "tags": ["education", "technology", "palestine", "digital-divide", "youth"],
      "impact_metrics": {
        "beneficiaries": 500,
        "metric_description": "students will gain access to digital learning tools"
      },
      "updates": [
        { "date": "2024-12-20", "title": "70% Funding Milestone Reached!", "description": "We're thrilled to announce we've reached 70% of our funding goal! The first batch of 150 laptops has been ordered and will arrive next month." },
        { "date": "2024-12-01", "title": "Partnership with Local Tech Company", "description": "We've partnered with Gaza Tech Solutions to provide ongoing technical support and maintenance for all devices." },
        { "date": "2024-11-15", "title": "Teacher Training Program Launched", "description": "Started training sessions for 25 teachers across participating schools on digital teaching methodologies." }
      ]
    },
    {
      "id": 2,
      "title": "Vocational Training Center for Jordanian Youth",
      "category": "Education",
      "status": "Active",
      "urgency_level": "Medium",
      "short_description": "Establishing a modern vocational training center in Zarqa to provide technical skills training for 200 unemployed youth aged 18-25.",
      "detailed_description": "Jordan faces a youth unemployment rate of over 50%, with many young people lacking the technical skills needed for available jobs. This project will establish a comprehensive vocational training center offering courses in electrical work, plumbing, automotive repair, carpentry, and computer skills. The center will include modern equipment, certified instructors, and job placement assistance. We aim to train 200 youth annually with a focus on hands-on learning and industry partnerships to ensure graduates find meaningful employment.",
      "image_url": image1,
      "location": {
        "city": "Zarqa",
        "country": "Jordan",
        "region": "Middle East",
        "latitude": 32.0728,
        "longitude": 36.0876
      },
      "metrics": {
        "goal_amount": 120000,
        "raised_amount": 89500,
        "percentage_funded": 75,
        "donor_count": 50,
        "average_donation": 1790,
        "days_remaining": 49,
        "days_active": 316
      },
      "contact": {
        "organization": "Jordan Youth Development Society",
        "coordinator": "Engineer Ahmad Al-Khatib",
        "email": "ahmad.khatib@jyds.jo",
        "phone": "+962-5-456-7890"
      },
      "donors": [
        { "id": 10, "name": "Middle East Development Bank", "type": "Corporate", "amount": 4541, "date": "2025-09-12", "is_anonymous": false, "location": { "city": "Alexandria", "country": "Syria" } },
        { "id": 20, "name": "Anonymous Donor", "type": "Individual", "amount": 72, "date": "2025-09-12", "is_anonymous": true, "location": { "city": "Hebron", "country": "UAE" } },
        { "id": 15, "name": "Anonymous Donor", "type": "Individual", "amount": 122, "date": "2025-09-08", "is_anonymous": true, "location": { "city": "Gaza", "country": "Egypt" } },
        { "id": 49, "name": "Nour Farouk", "type": "Individual", "amount": 449, "date": "2025-09-05", "is_anonymous": false, "location": { "city": "Ramallah", "country": "Qatar" }, "message": "May this contribution help build a better future." },
        { "id": 33, "name": "Jordan Telecom Group", "type": "Corporate", "amount": 1712, "date": "2025-09-04", "is_anonymous": false, "location": { "city": "Zarqa", "country": "Lebanon" } },
        { "id": 40, "name": "Zaid Foundation", "type": "Individual", "amount": 371, "date": "2025-09-04", "is_anonymous": false, "location": { "city": "Hebron", "country": "Egypt" } },
        { "id": 45, "name": "Anonymous Donor", "type": "Individual", "amount": 337, "date": "2025-08-30", "is_anonymous": true, "location": { "city": "Ramallah", "country": "Saudi Arabia" } },
        { "id": 46, "name": "Anonymous Donor", "type": "Individual", "amount": 198, "date": "2025-08-26", "is_anonymous": true, "location": { "city": "Alexandria", "country": "Egypt" }, "message": "Education is the key to breaking the cycle of poverty." },
        { "id": 1, "name": "Ahmed Al-Rashid", "type": "Individual", "amount": 365, "date": "2025-08-25", "is_anonymous": false, "location": { "city": "Amman", "country": "Syria" } },
        { "id": 27, "name": "Jordan Telecom Group", "type": "Corporate", "amount": 5653, "date": "2025-08-22", "is_anonymous": false, "location": { "city": "Alexandria", "country": "Qatar" }, "message": "Together we can make a real difference." }
      ],
      "timeline": {
        "created_date": "2024-11-01",
        "target_date": "2025-03-15",
        "last_updated": "2024-12-19"
      },
      "tags": ["vocational-training", "youth-employment", "jordan", "skills-development", "job-creation"],
      "impact_metrics": {
        "beneficiaries": 200,
        "metric_description": "young adults will receive certified technical training annually"
      },
      "updates": [
        { "date": "2024-12-19", "title": "Equipment Procurement Underway", "description": "We've started procuring training equipment including automotive tools, electrical testing equipment, and computer stations." },
        { "date": "2024-12-05", "title": "Building Renovation Progress", "description": "Renovation of the training center building is 60% complete. New classrooms and workshop spaces are taking shape." }
      ]
    },
    {
      "id": 3,
      "title": "Sustainable Farming Initiative for West Bank Villages",
      "category": "Agriculture",
      "status": "Active",
      "urgency_level": "High",
      "short_description": "Supporting 50 Palestinian farming families with modern irrigation systems, greenhouse construction, and sustainable farming techniques.",
      "detailed_description": "Palestinian farmers in the West Bank face severe water restrictions and limited access to modern farming equipment. This initiative provides drip irrigation systems, greenhouse construction materials, seeds for high-yield crops, and training in sustainable farming practices. The project will directly benefit 50 farming families across 5 villages, helping them increase crop yields by 300% while using 60% less water. Additionally, we'll establish a cooperative marketing system to help farmers get better prices for their produce in local and regional markets.",
      "image_url": image1,
      "location": {
        "city": "Ramallah",
        "country": "Palestine",
        "region": "Middle East",
        "latitude": 31.9073,
        "longitude": 35.2044
      },
      "metrics": {
        "goal_amount": 95000,
        "raised_amount": 73200,
        "percentage_funded": 77,
        "donor_count": 50,
        "average_donation": 1464,
        "days_remaining": 12,
        "days_active": 353
      },
      "contact": {
        "organization": "Palestinian Agricultural Relief Committee",
        "coordinator": "Nour Al-Qasemi",
        "email": "nour.qasemi@parc.ps",
        "phone": "+970-2-987-6543"
      },
      "donors": [
        { "id": 8, "name": "Mohammed Hassan", "type": "Individual", "amount": 200, "date": "2025-09-11", "is_anonymous": false, "location": { "city": "Zarqa", "country": "Lebanon" } },
        { "id": 18, "name": "Tech for Good Initiative", "type": "Individual", "amount": 148, "date": "2025-09-11", "is_anonymous": false, "location": { "city": "Aqaba", "country": "Lebanon" } },
        { "id": 35, "name": "Nour Farouk", "type": "Individual", "amount": 37, "date": "2025-09-10", "is_anonymous": false, "location": { "city": "Zarqa", "country": "Lebanon" } },
        { "id": 28, "name": "Gaza Relief Network", "type": "Individual", "amount": 390, "date": "2025-09-08", "is_anonymous": false, "location": { "city": "Nablus", "country": "Jordan" } },
        { "id": 38, "name": "Jordan Education Trust", "type": "Foundation", "amount": 3334, "date": "2025-09-07", "is_anonymous": false, "location": { "city": "Cairo", "country": "Qatar" } },
        { "id": 32, "name": "Nour Farouk", "type": "Individual", "amount": 409, "date": "2025-09-06", "is_anonymous": false, "location": { "city": "Nablus", "country": "Saudi Arabia" } },
        { "id": 50, "name": "Zaid Foundation", "type": "Individual", "amount": 356, "date": "2025-09-03", "is_anonymous": false, "location": { "city": "Nablus", "country": "UAE" } },
        { "id": 2, "name": "Amman Business Association", "type": "Individual", "amount": 492, "date": "2025-08-27", "is_anonymous": false, "location": { "city": "Zarqa", "country": "Jordan" }, "message": "Every child deserves access to quality education." },
        { "id": 19, "name": "Anonymous Donor", "type": "Individual", "amount": 346, "date": "2025-08-24", "is_anonymous": true, "location": { "city": "Zarqa", "country": "Jordan" } },
        { "id": 20, "name": "Sarah Johnson", "type": "Foundation", "amount": 2874, "date": "2025-08-23", "is_anonymous": false, "location": { "city": "Gaza", "country": "Syria" } }
      ],
      "timeline": {
        "created_date": "2024-10-15",
        "target_date": "2025-01-30",
        "last_updated": "2024-12-20"
      },
      "tags": ["agriculture", "palestine", "sustainable-farming", "water-management", "rural-development"],
      "impact_metrics": {
        "beneficiaries": 50,
        "metric_description": "farming families will benefit from improved yields and water efficiency"
      },
      "updates": [
        { "date": "2024-12-20", "title": "Irrigation Systems Arriving", "description": "The first shipment of drip irrigation systems has arrived and will be installed next week in two of the villages." },
        { "date": "2024-12-05", "title": "Farmers Training Complete", "description": "Successfully completed a 3-day training program on sustainable farming for 50 participating farmers." }
      ]
    },
    {
      "id": 4,
      "title": "Community-Led Business Incubator in Cairo",
      "category": "Small Business",
      "status": "Active",
      "urgency_level": "Medium",
      "short_description": "Funding and mentorship for 20 new startups in Cairo, focusing on technology and artisan crafts to foster local economic growth.",
      "detailed_description": "The Cairo Business Incubator provides a vital lifeline for aspiring entrepreneurs. This project will offer seed funding, mentorship from industry experts, and a collaborative workspace to 20 promising startups. We're prioritizing businesses that create jobs in the local community, with a special focus on youth-led and women-owned enterprises. The program includes workshops on business planning, marketing, and financial management to ensure the long-term sustainability of these ventures.",
      "image_url": image1,
      "location": {
        "city": "Cairo",
        "country": "Egypt",
        "region": "North Africa",
        "latitude": 30.0444,
        "longitude": 31.2357
      },
      "metrics": {
        "goal_amount": 150000,
        "raised_amount": 105000,
        "percentage_funded": 70,
        "donor_count": 65,
        "average_donation": 1615,
        "days_remaining": 60,
        "days_active": 300
      },
      "contact": {
        "organization": "Egyptian Entrepreneurship Hub",
        "coordinator": "Ms. Mona Salem",
        "email": "mona.salem@eeh.eg",
        "phone": "+20-2-256-7890"
      },
      "donors": [
        { "id": 1, "name": "Anonymous Donor", "type": "Corporate", "amount": 5401, "date": "2025-09-12", "is_anonymous": true, "location": { "city": "Alexandria", "country": "Jordan" }, "message": "Small businesses are the backbone of our community." },
        { "id": 2, "name": "Global Impact Foundation", "type": "Foundation", "amount": 6123, "date": "2025-09-11", "is_anonymous": false, "location": { "city": "Cairo", "country": "UAE" } },
        { "id": 3, "name": "Cairo Capital Partners", "type": "Corporate", "amount": 4778, "date": "2025-09-08", "is_anonymous": false, "location": { "city": "Gaza", "country": "Syria" } },
        { "id": 4, "name": "Anonymous Donor", "type": "Individual", "amount": 125, "date": "2025-09-07", "is_anonymous": true, "location": { "city": "Amman", "country": "Egypt" } },
        { "id": 5, "name": "Layla Hijazi", "type": "Individual", "amount": 289, "date": "2025-09-06", "is_anonymous": false, "location": { "city": "Hebron", "country": "Jordan" } },
        { "id": 6, "name": "Oasis Technologies", "type": "Corporate", "amount": 5821, "date": "2025-09-05", "is_anonymous": false, "location": { "city": "Irbid", "country": "Palestine" } },
        { "id": 7, "name": "Desert Rose Industries", "type": "Corporate", "amount": 3410, "date": "2025-09-04", "is_anonymous": false, "location": { "city": "Ramallah", "country": "Saudi Arabia" } },
        { "id": 8, "name": "Middle East Development Bank", "type": "Corporate", "amount": 5003, "date": "2025-09-02", "is_anonymous": false, "location": { "city": "Nablus", "country": "Lebanon" } },
        { "id": 9, "name": "Anonymous Donor", "type": "Individual", "amount": 189, "date": "2025-08-30", "is_anonymous": true, "location": { "city": "Aqaba", "country": "Egypt" } },
        { "id": 10, "name": "Sarah Johnson", "type": "Individual", "amount": 450, "date": "2025-08-28", "is_anonymous": false, "location": { "city": "Zarqa", "country": "UAE" } }
      ],
      "timeline": {
        "created_date": "2024-11-20",
        "target_date": "2025-03-30",
        "last_updated": "2024-12-20"
      },
      "tags": ["business-incubator", "entrepreneurship", "egypt", "job-creation", "startup-funding"],
      "impact_metrics": {
        "beneficiaries": 20,
        "metric_description": "startups will be funded and mentored"
      },
      "updates": [
        { "date": "2024-12-20", "title": "First Mentorship Session Held", "description": "Our first cohort of 10 startups participated in a workshop on business strategy with a leading local consultant." },
        { "date": "2024-12-05", "title": "Call for Applications Opens", "description": "We've officially opened applications for our first cohort of entrepreneurs. We've received over 150 applications so far!" }
      ]
    },
    {
      "id": 5,
      "title": "Water Desalination Unit for a Coastal Syrian Village",
      "category": "Community Development",
      "status": "Active",
      "urgency_level": "High",
      "short_description": "Installing a solar-powered water desalination unit to provide clean, safe drinking water for 1,500 people in a remote coastal village.",
      "detailed_description": "Access to clean water is a critical issue in many parts of Syria. This project will install a modern, solar-powered desalination unit capable of producing 5,000 liters of potable water per day. This will serve 1,500 residents in a remote coastal village, reducing waterborne diseases and improving overall public health. The solar power component ensures a sustainable and low-cost solution that is not dependent on a fragile electricity grid.",
      "image_url": image1,
      "location": {
        "city": "Tartus",
        "country": "Syria",
        "region": "Middle East",
        "latitude": 34.8878,
        "longitude": 35.8856
      },
      "metrics": {
        "goal_amount": 80000,
        "raised_amount": 65600,
        "percentage_funded": 82,
        "donor_count": 45,
        "average_donation": 1458,
        "days_remaining": 25,
        "days_active": 340
      },
      "contact": {
        "organization": "Syrian Water Foundation",
        "coordinator": "Engineer Omar Al-Hassan",
        "email": "omar.hassan@swf.org.sy",
        "phone": "+963-43-123-4567"
      },
      "donors": [
        { "id": 1, "name": "Anonymous Donor", "type": "Corporate", "amount": 6789, "date": "2025-09-12", "is_anonymous": true, "location": { "city": "Cairo", "country": "Saudi Arabia" } },
        { "id": 2, "name": "Mediterranean Trading Co.", "type": "Corporate", "amount": 5421, "date": "2025-09-11", "is_anonymous": false, "location": { "city": "Alexandria", "country": "UAE" } },
        { "id": 3, "name": "Anonymous Donor", "type": "Individual", "amount": 250, "date": "2025-09-10", "is_anonymous": true, "location": { "city": "Hebron", "country": "Jordan" } },
        { "id": 4, "name": "Amman Business Association", "type": "Individual", "amount": 450, "date": "2025-09-09", "is_anonymous": false, "location": { "city": "Gaza", "country": "Palestine" } },
        { "id": 5, "name": "Bank al Etihad", "type": "Corporate", "amount": 4900, "date": "2025-09-08", "is_anonymous": false, "location": { "city": "Irbid", "country": "Lebanon" } },
        { "id": 6, "name": "Jordan Telecom Group", "type": "Corporate", "amount": 3500, "date": "2025-09-07", "is_anonymous": false, "location": { "city": "Zarqa", "country": "Saudi Arabia" } },
        { "id": 7, "name": "Heritage Investment Fund", "type": "Corporate", "amount": 5100, "date": "2025-09-06", "is_anonymous": false, "location": { "city": "Ramallah", "country": "Egypt" } },
        { "id": 8, "name": "Anonymous Donor", "type": "Individual", "amount": 300, "date": "2025-09-05", "is_anonymous": true, "location": { "city": "Nablus", "country": "UAE" } },
        { "id": 9, "name": "Mohammed Hassan", "type": "Individual", "amount": 180, "date": "2025-09-04", "is_anonymous": false, "location": { "city": "Aqaba", "country": "Jordan" } },
        { "id": 10, "name": "Sarah Johnson", "type": "Individual", "amount": 500, "date": "2025-09-03", "is_anonymous": false, "location": { "city": "Cairo", "country": "Palestine" } }
      ],
      "timeline": {
        "created_date": "2024-11-10",
        "target_date": "2025-02-15",
        "last_updated": "2024-12-20"
      },
      "tags": ["water-security", "community-development", "syria", "sustainability", "solar-power"],
      "impact_metrics": {
        "beneficiaries": 1500,
        "metric_description": "people will gain access to clean drinking water"
      },
      "updates": [
        { "date": "2024-12-20", "title": "Land Survey and Preparation Complete", "description": "The site for the desalination unit has been surveyed and prepared for construction. We're on schedule to begin building next month." },
        { "date": "2024-12-01", "title": "Community Meeting on Water Project", "description": "Held a successful meeting with local village elders to discuss the project plan and gather community support." }
      ]
    },
    {
      "id": 6,
      "title": "Renovating Health Clinic in Rural Lebanon",
      "category": "Healthcare",
      "status": "Active",
      "urgency_level": "Medium",
      "short_description": "Refurbishing a critical health clinic in a remote Lebanese village to improve access to primary care for 10,000 residents.",
      "detailed_description": "The health clinic in the village of Majdal Anjar is the only medical facility for a 50 km radius. Decades of underfunding have left it in a state of disrepair. This project will completely renovate the clinic's facilities, including new medical equipment, a clean water supply, and an expanded pharmacy. The refurbishment will enable the clinic to offer more comprehensive primary care services, including maternal and child health programs, and serve up to 10,000 people from the surrounding rural communities.",
      "image_url": image1,
      "location": {
        "city": "Majdal Anjar",
        "country": "Lebanon",
        "region": "Middle East",
        "latitude": 33.7224,
        "longitude": 35.8573
      },
      "metrics": {
        "goal_amount": 110000,
        "raised_amount": 80000,
        "percentage_funded": 73,
        "donor_count": 55,
        "average_donation": 1455,
        "days_remaining": 40,
        "days_active": 325
      },
      "contact": {
        "organization": "Lebanese Medical Aid Society",
        "coordinator": "Dr. Samira Kanaan",
        "email": "samira.kanaan@lmas.org.lb",
        "phone": "+961-8-987-6543"
      },
      "donors": [
        { "id": 1, "name": "Global Impact Foundation", "type": "Foundation", "amount": 6500, "date": "2025-09-12", "is_anonymous": false, "location": { "city": "Beirut", "country": "Lebanon" } },
        { "id": 2, "name": "Anonymous Donor", "type": "Individual", "amount": 150, "date": "2025-09-11", "is_anonymous": true, "location": { "city": "Tripoli", "country": "Lebanon" } },
        { "id": 3, "name": "Arab Health Fund", "type": "Corporate", "amount": 5800, "date": "2025-09-10", "is_anonymous": false, "location": { "city": "Dubai", "country": "UAE" } },
        { "id": 4, "name": "Layla Hijazi", "type": "Individual", "amount": 200, "date": "2025-09-09", "is_anonymous": false, "location": { "city": "Amman", "country": "Jordan" } },
        { "id": 5, "name": "Anonymous Donor", "type": "Individual", "amount": 75, "date": "2025-09-08", "is_anonymous": true, "location": { "city": "Cairo", "country": "Egypt" } },
        { "id": 6, "name": "Middle East Development Bank", "type": "Corporate", "amount": 4200, "date": "2025-09-07", "is_anonymous": false, "location": { "city": "Riyadh", "country": "Saudi Arabia" } },
        { "id": 7, "name": "Mohammed Hassan", "type": "Individual", "amount": 100, "date": "2025-09-06", "is_anonymous": false, "location": { "city": "Alexandria", "country": "Egypt" } },
        { "id": 8, "name": "Jordan Telecom Group", "type": "Corporate", "amount": 3100, "date": "2025-09-05", "is_anonymous": false, "location": { "city": "Amman", "country": "Jordan" } },
        { "id": 9, "name": "Palestinian Heritage Society", "type": "Individual", "amount": 350, "date": "2025-09-04", "is_anonymous": false, "location": { "city": "Ramallah", "country": "Palestine" } },
        { "id": 10, "name": "Anonymous Donor", "type": "Individual", "amount": 120, "date": "2025-09-03", "is_anonymous": true, "location": { "city": "Zarqa", "country": "Jordan" } }
      ],
      "timeline": {
        "created_date": "2024-11-05",
        "target_date": "2025-03-20",
        "last_updated": "2024-12-20"
      },
      "tags": ["healthcare", "community-development", "lebanon", "medical-equipment", "rural-health"],
      "impact_metrics": {
        "beneficiaries": 10000,
        "metric_description": "people will receive improved primary healthcare"
      },
      "updates": [
        { "date": "2024-12-20", "title": "Architectural Plans Finalized", "description": "The architectural plans for the clinic's renovation are complete. We are now accepting bids from local construction companies." },
        { "date": "2024-12-01", "title": "Community Health Assessment Complete", "description": "A comprehensive health needs assessment was conducted in the village to identify key areas for improvement." }
      ]
    },
    {
      "id": 7,
      "title": "Supporting Fishermen in Gaza with New Equipment",
      "category": "Livelihoods",
      "status": "Active",
      "urgency_level": "High",
      "short_description": "Providing fishing nets, engines, and GPS systems to 100 Gaza fishermen to revive a key local industry and ensure food security.",
      "detailed_description": "Gaza's fishing industry has been decimated by conflict and economic blockade. This project directly addresses the needs of 100 local fishermen by providing essential, modern equipment. This includes durable fishing nets, small boat engines, and basic GPS navigation systems. By restoring their ability to fish, we are helping families regain their livelihoods, improving local food security, and supporting an industry that is central to Gaza's cultural and economic identity.",
      "image_url":image1,
      "location": {
        "city": "Gaza City",
        "country": "Palestine",
        "region": "Middle East",
        "latitude": 31.5033,
        "longitude": 34.4667
      },
      "metrics": {
        "goal_amount": 60000,
        "raised_amount": 45000,
        "percentage_funded": 75,
        "donor_count": 30,
        "average_donation": 1500,
        "days_remaining": 20,
        "days_active": 350
      },
      "contact": {
        "organization": "Gaza Fishermen Association",
        "coordinator": "Mr. Ibrahim Al-Banna",
        "email": "ibrahim.banna@gfa.ps",
        "phone": "+970-8-567-8901"
      },
      "donors": [
        { "id": 1, "name": "Anonymous Donor", "type": "Corporate", "amount": 4500, "date": "2025-09-12", "is_anonymous": true, "location": { "city": "Cairo", "country": "Egypt" } },
        { "id": 2, "name": "Gaza Relief Network", "type": "Individual", "amount": 500, "date": "2025-09-11", "is_anonymous": false, "location": { "city": "Amman", "country": "Jordan" } },
        { "id": 3, "name": "Middle East Development Bank", "type": "Corporate", "amount": 3500, "date": "2025-09-10", "is_anonymous": false, "location": { "city": "Dubai", "country": "UAE" } },
        { "id": 4, "name": "Anonymous Donor", "type": "Individual", "amount": 250, "date": "2025-09-09", "is_anonymous": true, "location": { "city": "Hebron", "country": "Palestine" } },
        { "id": 5, "name": "Sarah Johnson", "type": "Individual", "amount": 100, "date": "2025-09-08", "is_anonymous": false, "location": { "city": "Riyadh", "country": "Saudi Arabia" } },
        { "id": 6, "name": "Desert Rose Industries", "type": "Corporate", "amount": 2800, "date": "2025-09-07", "is_anonymous": false, "location": { "city": "Amman", "country": "Jordan" } },
        { "id": 7, "name": "Amman Business Association", "type": "Individual", "amount": 300, "date": "2025-09-06", "is_anonymous": false, "location": { "city": "Alexandria", "country": "Egypt" } },
        { "id": 8, "name": "Anonymous Donor", "type": "Individual", "amount": 150, "date": "2025-09-05", "is_anonymous": true, "location": { "city": "Ramallah", "country": "Palestine" } },
        { "id": 9, "name": "Layla Hijazi", "type": "Individual", "amount": 200, "date": "2025-09-04", "is_anonymous": false, "location": { "city": "Zarqa", "country": "Jordan" } },
        { "id": 10, "name": "Oasis Technologies", "type": "Corporate", "amount": 4000, "date": "2025-09-03", "is_anonymous": false, "location": { "city": "Aqaba", "country": "Jordan" } }
      ],
      "timeline": {
        "created_date": "2024-10-20",
        "target_date": "2025-02-10",
        "last_updated": "2024-12-20"
      },
      "tags": ["livelihoods", "food-security", "gaza", "fishermen", "economic-development"],
      "impact_metrics": {
        "beneficiaries": 100,
        "metric_description": "fishermen will receive new equipment and support"
      },
      "updates": [
        { "date": "2024-12-20", "title": "First Batch of Nets Procured", "description": "We have successfully procured the first 50 fishing nets and will begin distribution to the most in-need fishermen next week." },
        { "date": "2024-12-05", "title": "Project Kick-off Meeting", "description": "Held a successful meeting with the Gaza Fishermen Association to finalize the list of beneficiaries and project timeline." }
      ]
    },
    {
      "id": 8,
      "title": "Restoring Historic Al-Salt Trail",
      "category": "Cultural Heritage",
      "status": "Completed",
      "urgency_level": "Low",
      "short_description": "A project to restore the historical trail and cultural sites in Al-Salt, Jordan, a UNESCO World Heritage site.",
      "detailed_description": "The Al-Salt Trail is a UNESCO World Heritage site of immense cultural importance. This project, now completed, focused on preserving the integrity of the trail, restoring key historical buildings, and installing informational plaques to enhance the visitor experience. We successfully trained a team of local artisans in traditional restoration techniques, ensuring the project's long-term sustainability and providing a boost to local tourism and economic development. The restored trail now serves as a source of pride for the community and a destination for tourists.",
      "image_url": image1,
      "location": {
        "city": "Al-Salt",
        "country": "Jordan",
        "region": "Middle East",
        "latitude": 32.0392,
        "longitude": 35.7335
      },
      "metrics": {
        "goal_amount": 170000,
        "raised_amount": 170000,
        "percentage_funded": 100,
        "donor_count": 60,
        "average_donation": 2833,
        "days_remaining": 0,
        "days_active": 400
      },
      "contact": {
        "organization": "Jordan Heritage Foundation",
        "coordinator": "Mr. Jamal Al-Din",
        "email": "jamal.din@jhf.jo",
        "phone": "+962-6-567-8901"
      },
      "donors": [
        { "id": 1, "name": "Bank al Etihad", "type": "Corporate", "amount": 10000, "date": "2025-05-15", "is_anonymous": false, "location": { "city": "Amman", "country": "Jordan" } },
        { "id": 2, "name": "Anonymous Donor", "type": "Individual", "amount": 500, "date": "2025-05-14", "is_anonymous": true, "location": { "city": "Dubai", "country": "UAE" } },
        { "id": 3, "name": "Global Impact Foundation", "type": "Foundation", "amount": 15000, "date": "2025-05-13", "is_anonymous": false, "location": { "city": "London", "country": "UK" } },
        { "id": 4, "name": "Middle East Development Bank", "type": "Corporate", "amount": 12000, "date": "2025-05-12", "is_anonymous": false, "location": { "city": "Riyadh", "country": "Saudi Arabia" } },
        { "id": 5, "name": "Heritage Investment Fund", "type": "Corporate", "amount": 18000, "date": "2025-05-11", "is_anonymous": false, "location": { "city": "Abu Dhabi", "country": "UAE" } },
        { "id": 6, "name": "Anonymous Donor", "type": "Individual", "amount": 250, "date": "2025-05-10", "is_anonymous": true, "location": { "city": "Cairo", "country": "Egypt" } },
        { "id": 7, "name": "Mohammed Hassan", "type": "Individual", "amount": 300, "date": "2025-05-09", "is_anonymous": false, "location": { "city": "Amman", "country": "Jordan" } },
        { "id": 8, "name": "Sarah Johnson", "type": "Individual", "amount": 500, "date": "2025-05-08", "is_anonymous": false, "location": { "city": "Toronto", "country": "Canada" } },
        { "id": 9, "name": "Jordan Telecom Group", "type": "Corporate", "amount": 10000, "date": "2025-05-07", "is_anonymous": false, "location": { "city": "Amman", "country": "Jordan" } },
        { "id": 10, "name": "Layla Hijazi", "type": "Individual", "amount": 400, "date": "2025-05-06", "is_anonymous": false, "location": { "city": "Beirut", "country": "Lebanon" } }
      ],
      "timeline": {
        "created_date": "2024-04-10",
        "target_date": "2025-05-15",
        "last_updated": "2025-05-16"
      },
      "tags": ["cultural-heritage", "jordan", "tourism", "restoration", "community-development"],
      "impact_metrics": {
        "beneficiaries": 0,
        "metric_description": "the Al-Salt community and visitors will benefit from the restored trail"
      },
      "updates": [
        { "date": "2025-05-16", "title": "Project Complete and Grand Opening", "description": "The restored Al-Salt Trail was officially opened to the public with a grand ceremony celebrating the local community's efforts." },
        { "date": "2025-04-01", "title": "Final Stage of Restoration Underway", "description": "Artisans are completing the final touches on key historical buildings along the trail." }
      ]
    }
  ]
};

// --- Helper Components (Defined within the same file) ---

const DashboardStats: React.FC<{ stats: FundraisingStats }> = ({ stats }) => (
  <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
      <h3 className="text-xl font-bold text-gray-800">${stats.total_raised.toLocaleString()}</h3>
      <p className="text-gray-500">Total Raised</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
      <h3 className="text-xl font-bold text-gray-800">{stats.total_donors.toLocaleString()}</h3>
      <p className="text-gray-500">Total Donors</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500">
      <h3 className="text-xl font-bold text-gray-800">{stats.active_causes}</h3>
      <p className="text-gray-500">Active Causes</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
      <h3 className="text-xl font-bold text-gray-800">{stats.top_category}</h3>
      <p className="text-gray-500">Top Category</p>
    </div>
  </section>
);

const CauseCard: React.FC<{ cause: Cause, onClick: () => void }> = ({ cause, onClick }) => (
  <div onClick={onClick} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer">
    <Image src={cause.image_url} alt={cause.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-gray-800 line-clamp-1">{cause.title}</h3>
      <p className="mt-2 text-gray-600 line-clamp-2">{cause.short_description}</p>
      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-green-500 h-2.5 rounded-full"
            style={{ width: `${cause.metrics.percentage_funded}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          {cause.metrics.percentage_funded}% Funded • ${cause.metrics.raised_amount.toLocaleString()} of ${cause.metrics.goal_amount.toLocaleString()}
        </p>
      </div>
    </div>
  </div>
);

const DonorList: React.FC<{ donors: Donor[] }> = ({ donors }) => (
  <ul className="divide-y divide-gray-200">
    {donors.slice(0, 10).map((donor) => (
      <li key={donor.id} className="py-4 flex justify-between items-center">
        <div>
          <p className="font-semibold text-gray-800">
            {donor.is_anonymous ? 'Anonymous Donor' : donor.name}
          </p>
          <p className="text-sm text-green-600">{donor.date}</p>
        </div>
        <span className="font-bold text-lg text-green-700">
          ${donor.amount.toLocaleString()}
        </span>
      </li>
    ))}
  </ul>
);

const CauseDetails: React.FC<{ cause: Cause, onBack: () => void }> = ({ cause, onBack }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 lg:p-10 max-w-6xl mx-auto">
    <button onClick={onBack} className="mb-6 text-green-700 hover:text-green-900 font-semibold flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      Back to Dashboard
    </button>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="relative h-80">
        <Image 
          src={cause.image_url} 
          alt={cause.title} 
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{cause.title}</h1>
        <span className={`px-3 py-1 text-sm font-semibold rounded-full ${cause.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
          {cause.status}
        </span>
        <p className="mt-4 text-gray-700">{cause.detailed_description}</p>
        
        <div className="mt-6">
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-green-600 h-4 rounded-full"
              style={{ width: `${cause.metrics.percentage_funded}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Raised: ${cause.metrics.raised_amount.toLocaleString()}</span>
            <span>Goal: ${cause.metrics.goal_amount.toLocaleString()}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6 text-center">
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-xl font-bold text-green-800">{cause.metrics.donor_count}</p>
            <p className="text-sm text-green-600">Donors</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-xl font-bold text-blue-800">{cause.metrics.days_remaining} days</p>
            <p className="text-sm text-blue-600">Remaining</p>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Recent Updates</h3>
        <ul className="space-y-4">
          {cause.updates.map((update, index) => (
            <li key={index} className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-green-600">{update.date}</p>
              <h4 className="font-bold text-gray-800 mt-1">{update.title}</h4>
              <p className="mt-1 text-gray-600 text-sm">{update.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Recent Donors</h3>
        <DonorList donors={cause.donors} />
      </div>
    </div>
  </div>
);


// --- Main Page Component ---
export default function Home() {
  const [selectedCause, setSelectedCause] = useState<Cause | null>(null);

  const handleSelectCause = (cause: Cause) => {
    setSelectedCause(cause);
  };

  const handleBackToDashboard = () => {
    setSelectedCause(null);
  };

  if (selectedCause) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <CauseDetails cause={selectedCause} onBack={handleBackToDashboard} />
      </div>
    );
  }

  return (
   <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8">
      <header className="mb-8 text-center bg-gradient-to-r from-green-600 to-teal-600 text-white py-10 px-6 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold mb-4">{data.company_info.name} Dashboard</h1>
        <p className="text-lg max-w-3xl mx-auto">{data.company_info.description}</p>
      </header>

      <DashboardStats stats={data.fundraising_stats} />

       <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Active Causes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.causes.filter(cause => cause.status === 'Active').map((cause) => (
            <CauseCard key={cause.id} cause={cause} onClick={() => handleSelectCause(cause)} />
          ))}
        </div>
      </section>
    </div>
  );
}
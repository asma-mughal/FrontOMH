import {  frank1, frank2, frank3, frank4, heid1, heid2, heid3, heid4, karl1, 
  karl2, karl3, karl4, karl5, service1, service2, service3 , service4,wurzs1, wurzs2,wurzs3} from "../assets";

  import {
    UilUser,
    UilHospital,
    UilEstate,
  UilBackward,
  UilLink
  } from "@iconscout/react-unicons";
 
export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

export const features = [
  {
    id: "feature-1",
    title: "Free Support",
    icon:service1,
      bg:'#eff6ff',
  },
  {
    id: "feature-2",
    title: "Chamber Service",
    icon:service2,
      bg:'#fff7ed',
  },
  {
    id: "feature-3",
    title: "Online specialist",
    icon:service3,
    bg:'#eef2ff',
  },
  {
    id: "feature-4",
    title: "Private & Secure",
    icon:service4,
    bg:'#fefce8',
  },
 
];



export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const hospitals = [
  {
    id: "hospital-1",
    title: "Heidelberg",
    icon:[heid1, heid2, heid3, heid4],
    href:'https://bookinghealth.com/university-hospital-heidelberg/departments?roistat_visit=5617110',
    departments:['Medicine Department','Neuro','Cardiac','OPD'],
  
  },
  {
    id: "hospital-2",
    title: "FrankFurt",
    icon:[frank1, heid3, frank3, frank4],
    href:'https://bookinghealth.com/university-hospital-frankfurt-am-main/departments?roistat_visit=5617110',
    departments:['Burn and Plastic Surgery','Neuro','Cardiac','Psychiatry'],
  
  },
  {
    id: "feature-3",
    title: "Wurzburg",
    icon:[wurzs1, wurzs2,wurzs3],
    href:'https://bookinghealth.com/university-hospital-wurzburg/departments?roistat_visit=5617110',
    departments:['OPD','Neuro','Dentistry'],
   
  },
  {
    id: "feature-4",
    title: "Karlsruhe",
    icon:[karl1, karl2, karl3, karl4, karl5],
    href:'https://bookinghealth.com/academic-municipal-hospital-karlsruhe/departments?roistat_visit=5617110',
    departments:['OPD','Accidents and Emergency','Cardiac'],
  
  },
 
];
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilHospital,
    heading: "Hospitals",
  },
  {
    icon: UilUser,
    heading: "Doctors",
  },
  {
    icon:UilLink,
    heading:"Links"
  },
  {
    icon:UilBackward,
    heading:"Back"
  }
 
];
export const docInfo =[
  {
    id: "feature-1",
    title: "docFirst",
    icon:[karl1, karl2, karl3, karl4, karl5],
    departments:['OPD','Neuro','Cardiac', 'Medicine Department'],
  },
  {
    id: "feature-2",
    title: "docSecond",
    icon:[karl1, karl2, karl3, karl4, karl5],
    departments:['OPD','Neuro','Accidents and Emergency'],
  },
  {
    id: "feature-3",
    title: "docThird",
    icon:[karl1, karl2, karl3, karl4, karl5],
    departments:['Dentistry','Cardiac'],
  },
]

export const optionList = [
  { value: "Adult and Pediatric Oral, Maxillofacial Surgery, Facial Plastic Surgery", label: "Adult and Pediatric Oral, Maxillofacial Surgery, Facial Plastic Surgery" },
  { value: "Maxillofacial Surgery", label: "Maxillofacial Surgery" },
  { value: "Facial Plastic Surgery", label: "Facial Plastic Surgery" },
  { value: "General, Abdominal, Transplant, Vascular and Pediatric", label: "General, Abdominal, Transplant, Vascular and Pediatric" },
  { value: "General, Abdominal, Transplant Surgery", label: "General, Abdominal, Transplant Surgery" },
  { value: "Abdominal Surgery", label: "Abdominal Surgery" },
  { value: "Vascular and EndoVascular Surgery", label: "Vascular and EndoVascular Surgery" },
  { value: "Operating theatre (OT)", label: "Operating theatre (OT)" },
  { value: "Intensive care unit (ICU)", label: "Intensive care unit (ICU)" },
  { value: "Anesthesiology ", label: "Anesthesiology " },
  { value: "ENT ", label: "ENT " },
  { value: "Geriatric ", label: "Geriatric " },
  { value: "Gastroenterology ", label: "Gastroenterology " },
  { value: "Haematology", label: "Haematology" },
  { value: "Adult and Pediatric Ophthalmology", label: "Adult and Pediatric Ophthalmology" },
  { value: "Pediatric Haematology", label: "Pediatric Haematology" },
  { value: "Pediatric Surgery", label: "Pediatric Surgery" },
  { value: "Pediatric Allergology and Pulmonology", label: "Pediatric Allergology and Pulmonology" },
  { value: "Pediatric", label: "Pediatric" },
  { value: "Traumatology, Hand Surgery, Plastic and Reconstructive", label: "Traumatology, Hand Surgery, Plastic and Reconstructive" },
  { value: "Pulmonology", label: "Pulmonology" },
  { value: "Pediatric Cardiology ", label: "Pediatric Cardiology" },
  { value: "Pediatric Oncology and Hematology ", label: "Pediatric Oncology and Hematology" },
  { value: "Neurology", label: "Neurology" },
  { value: "Oncology", label: "Oncology" },
  { value: "Orthopaedic", label: "Orthopaedic" },
  { value: "Urology", label: "Urology" },
  { value: "Inpatient ", label: "Inpatient " },
  { value: "Pharmacy", label: "Pharmacy" },
  { value: "Radiology", label: "Radiology" },
  { value: "Clinical pathology", label: "Clinical pathology" },
  { value: "Nutrition and dietetics", label: "Nutrition and dietetics" },
  { value: "Catering and food services", label: "Catering and food services" },
  { value: "Central sterilization unit", label: "Central sterilization unit" },
  { value: "Housekeeping", label: "Housekeeping" },
];

const link = "https://wa.me/1XXXXXXXXXX"; 
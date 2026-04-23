// src/doctorsData.js


import DrHumayonSaeed from './Images/DrHumayonSaeed.webp'; 
import SecondDoctor from './Images/SecondDoctor.webp'; 
import DrZahra from './Images/Dr_Zahra_Aslam-removebg-preview.webp';
export const doctors = [
  {
    id: "Humayon-Saeed",
    name: "Dr. Humayon ",
    title: "Founder & Medical Director",
    image: DrHumayonSaeed, // Main Image
    
    shortBio: "Dr. Humayun Mohmand is an internationally renowned Plastic, Cosmetic, and Hair Restoration Surgeon, widely recognized for his precision, innovation, and excellence in aesthetic medicine. With decades of experience, he has earned global trust for delivering refined, natural-looking results. His expertise in hairline design and advanced aesthetic procedures, combined with a patient-first philosophy, ensures personalized treatments in a safe and premium clinical environment.",
    journey: "Dr. Humayun Mohmand is a member of the Royal College of Surgeons of Edinburgh and holds multiple international certifications in plastic, cosmetic, and hair restoration surgery. His extensive training and global affiliations reflect his commitment to maintaining the highest standards of medical excellence and staying at the forefront of modern techniques.",
    education: "Dr. Humayun Mohmand is a member of the Royal College of Surgeons of Edinburgh and holds multiple international certifications in plastic, cosmetic, and hair restoration surgery. His extensive training and global affiliations reflect his commitment to maintaining the highest standards of medical excellence and staying at the forefront of modern techniques.",
    
    // --- UPDATED WORKING IMAGES ---
    beforeImage: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60", // Man before
    afterImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60", // Man after (Happy)
    caseStudy: "This patient suffered from a receding hairline (Norwood Class 3). Dr. Konior performed a high-density FUE session with 2,500 grafts to reconstruct the frontal hairline, resulting in a youthful and natural frame for the face."
  },
  {
    id: "sahar-nadimi",
    name: "Dr. Zahra Aslam",
    title: "Hair Restoration Surgeon",
    image: DrZahra,
    
    shortBio: "Dr. Zahra Aslam is an award-winning and board-certified Plastic Cosmetic and Hair Restoration Surgeon, known for her expertise in advanced hair restoration procedures. She is dedicated to delivering safe, effective, and personalized treatments, helping patients restore not only their hair but also their confidence. Her work reflects a strong commitment to excellence, precision, and natural-looking results.",
    journey: "With a patient-centered approach, Dr. Zahra has built her career around modern and innovative hair restoration techniques. She specializes in procedures such as FUE, FUT, Hybrid Hair Transplants, PRP Therapy, and regenerative treatments. Over the years, she has developed a reputation for achieving natural hairlines, optimal density, and long-lasting outcomes by combining advanced medical knowledge with aesthetic detail.",
    education: "Dr. Zahra Aslam holds an MBBS degree along with an MS in Plastic & Reconstructive Surgery. She is also an active member of the Hair Restoration Society, staying updated with the latest advancements and best practices in her field.",
    
    // --- UPDATED WORKING IMAGES ---
    beforeImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&auto=format&fit=crop&q=60", // Woman before
    afterImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60", // Woman after
    caseStudy: "The patient presented with thinning across the crown area. Dr. Nadimi utilized a non-shaven FUE technique to increase density without downtime, restoring volume and confidence."
  },
  {
    id: "dr-ali",
    name: "Dr. Shahrukh",
    title: "Hair Transplant Specialist",
    image: SecondDoctor,
    
    shortBio: "Dr. Shahrukh is a dedicated and skilled medical professional known for delivering high-quality patient care and maintaining strong standards of safety and satisfaction. With a unique blend of clinical expertise and management knowledge, he focuses on providing modern, effective, and patient-centered treatment solutions while contributing positively to the healthcare field.",
    journey: "Throughout his career, Dr. Shahrukh has emphasized advanced medical treatments and continuous improvement in patient care. He has developed a strong interest in hair transplant procedures, consistently refining his skills to stay aligned with the latest techniques and innovations. Alongside his clinical work, he has built expertise in healthcare management, strategic planning, and operational efficiency, enabling him to enhance patient experiences and implement effective systems within healthcare settings.",
    education: "Dr. Shahrukh holds an MBBS degree and has further specialized by completing an MBA in Hair Transplant Management, combining medical knowledge with professional expertise in healthcare administration.",
    
    // --- UPDATED WORKING IMAGES ---
    beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60", 
    afterImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=60",
    caseStudy: "A challenging case of advanced baldness. Dr. Ali performed a mega-session of 4,000 grafts over two days. The result shows complete coverage of the scalp with natural density."
  }
];
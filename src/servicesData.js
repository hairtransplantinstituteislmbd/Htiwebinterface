// src/servicesData.js
import LinearStripExcision  from './Images/Procedures/Linear Strip Excersion.webp';
import FUE  from './Images/Procedures/FUE.webp';
import Hybird  from './Images/Procedures/Hybird.webp';
import PRPTHerapy from './Images/Procedures/PRP THerapy.webp';
import Mesotherapy  from './Images/Procedures/Mesotherapy.webp';
import RepairofOlderHairTransplant from './Images/Procedures/Repair of Older Hair Transplant.webp';
import HairDensity  from './Images/Procedures/Hair Density.webp';
import RegenerativeTreatments  from './Images/Procedures/Regenerative Treatments.webp';



export const servicesData = [
  {
    id: "Linear-Strip-Excision",
    title: "Linear Strip Excision",
    description: "Surgical removal of a scalp strip to extract and transplant a large number of hair grafts.",
    fullDetails: "Linear Strip Excision, commonly known as FUT (Follicular Unit Transplantation), is a surgical hair restoration procedure in which a thin strip of scalp is carefully removed from the donor area, usually the back of the head. This strip is then microscopically dissected into individual follicular units and transplanted into areas experiencing hair loss. This method is particularly beneficial for patients requiring a large number of grafts in a single session and offers natural-looking, dense results when performed by experienced professionals.",
    image: LinearStripExcision
  },
  {
    id: "Follicular-Unit-Extraction",
    title: "Follicular Unit Extraction (FUE)",
    description: "Minimally invasive extraction of individual follicles for natural results with no linear scarring.",
    fullDetails: "Follicular Unit Extraction (FUE) is an advanced, minimally invasive hair transplant technique where individual hair follicles are extracted directly from the donor area using specialized micro-punch tools. These follicles are then implanted into thinning or bald areas with precision. FUE is highly popular due to its minimal scarring, quicker healing time, and natural results, making it an ideal option for patients who prefer less invasive procedures.",
    image: FUE
  },
  {
    id: "Hybrid-Combo-(FUT + FUE)",
    title: "Hybrid / Combo (FUT + FUE)",
    description: "Combines both methods to achieve maximum hair density and coverage in one session.",
    fullDetails: "The Hybrid or Combo technique combines both FUT and FUE methods to maximize the number of grafts and achieve optimal coverage and density. By utilizing the strengths of both techniques, this approach is especially suitable for patients with extensive hair loss or those seeking maximum density in a single or limited number of sessions. It ensures efficient use of the donor area while maintaining natural aesthetics.",
    image: Hybird
  },
  {
    id: "PRP-Therapy",
    title: "PRP Therapy",
    description: "Uses the patient's own plasma growth factors to strengthen hair and improve thickness.",
    fullDetails: "Platelet-Rich Plasma (PRP) Therapy is a regenerative treatment that utilizes the patient’s own blood to stimulate hair growth. The blood is processed to concentrate platelets, which are rich in growth factors, and then injected into targeted areas of the scalp. PRP therapy helps strengthen existing hair follicles, improve hair thickness, and encourage natural regrowth, making it a popular non-surgical solution.",
    image:  PRPTHerapy
  },
  {
    id: "Mesotherapy",
    title: "Mesotherapy",
    description: "Scalp injections of vitamins and minerals to nourish follicles and stimulate growth.",
    fullDetails: "Mesotherapy is a non-surgical treatment that involves injecting a customized blend of vitamins, minerals, amino acids, and medications directly into the scalp. These micro-injections help nourish and rejuvenate hair follicles, improve blood circulation, and promote healthier hair growth. It is often used as a supportive therapy alongside other treatments to enhance overall results.",
    image: Mesotherapy
  },
  {
    id: "repair-older-surgeries",
    title: "Repair of Older Surgeries",
    description: "Corrective procedures to fix unnatural hairlines or scarring from previous transplants.",
    fullDetails: "Repair of Older Surgeries involves corrective procedures designed to improve the outcomes of previous hair transplant treatments. This may include refining unnatural hairlines, reducing visible scarring, correcting poor graft placement, and enhancing density. These procedures require high expertise and are tailored to restore a natural and aesthetically pleasing result.",
    image: RepairofOlderHairTransplant 
  },
  {
    id: "hair-density",
    title: "Hair Density",
    description: "Strategic treatments or grafts aimed specifically at making thinning hair look fuller.",
    fullDetails: "Hair Density Enhancement focuses on increasing the thickness and fullness of existing hair. This can be achieved through strategic placement of additional grafts or supportive therapies such as PRP or mesotherapy. The goal is to create a fuller, more natural appearance by improving overall hair coverage and density",
    image: HairDensity 
  },
  {
    id: "Regenerative-Treatments",
    title: "Regenerative Treatments",
    description: "Advanced biological therapies designed to reactivate dormant follicles and restore scalp health.",
    fullDetails: "Regenerative Treatments include advanced therapies that utilize growth factors, stem cells, and other biological agents to rejuvenate weakened or dormant hair follicles. These treatments aim to restore the natural hair growth cycle, improve scalp health, and provide long-term improvement in hair quality and density.",
    image: RegenerativeTreatments
  }
];
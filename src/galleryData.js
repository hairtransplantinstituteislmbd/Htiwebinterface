// src/galleryData.js
import ChWajahatBefore from './Images/Ch Wajahat FUE After.webp'; 
import ChWajahatAfter from './Images/Ch Wajahat FUE Before.webp'; 
import MasabAnwarAfter from './Images/Masab Anwar FUE After.webp'; 
import MasabAnwarBefore from './Images/Masab Anwar FUE Before.webp'; 
import MuhammadSaadAfter from './Images/Muhammad Saad After.webp'; 
import MuhammadSaadBefore from './Images/Muhammad Saad Before.webp'; 
import NaveedMalikAfter from './Images/Naveed Malik After.webp'; 
import NaveedMalikBefore from './Images/Naveed Malik Before.webp'; 
import RanaNaveedAfter from './Images/Rana Naveed After.webp'; 
import RanaNaveedBefore from './Images/Rana Naveed Before.webp'; 
import RashidJanjuaAfter from './Images/Rashid Janjua FUE After.webp'; 
import RashidJanjuaBefore from './Images/Rashid Janjua FUE Before.webp'; 
import SufianNaeemAfter from './Images/Sufian Naeem FUT After.webp'; 
import SufianNaeemBefore  from './Images/Sufian Naeem FUT Before.webp'; 
import ZainulAbdinAfter from './Images/Zain ul Abdin FUE After.webp'; 
import ZainulAbdinBefore from './Images/Zain ul Abdin FUE Before.webp'; 


export const galleryData = {
  "hair-loss": {
    title: "Hair Loss Surgery Gallery",
    description: "Explore our successful hair restoration cases for men.",
    images: [
      { id: 1,  before: ChWajahatBefore ,
          after: ChWajahatAfter },
      { id: 2,  before: MasabAnwarBefore ,
          after: MasabAnwarAfter },
      { id: 3,  before: MuhammadSaadBefore ,
          after: MuhammadSaadAfter },
      { id: 4,  before: NaveedMalikBefore ,
          after: NaveedMalikAfter },
    ]
  },
  "hairline-lowering": {
    title: "Hairline Lowering Gallery",
    description: "See the transformation results for hairline advancement procedures.",
    images: [
      { id: 1,  before: RanaNaveedBefore ,
          after: RanaNaveedAfter },
      { id: 2, before: RashidJanjuaBefore ,
          after: RashidJanjuaAfter },
      { id: 3, before: SufianNaeemBefore ,
          after: SufianNaeemAfter },
      { id: 4, before: ZainulAbdinBefore ,
          after: ZainulAbdinAfter },
    ]
  }
};
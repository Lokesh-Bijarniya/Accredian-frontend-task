import React from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import ReferralSteps from './components/ReferralSteps';
import ReferralBenefits from './components/ReferralBenefits';
import FAQ from './components/FAQSection';
import Footer from './components/Footer';



export default function App() {
  
  return (
    <div>
     <Header/>
      <Hero/>
      <ReferralSteps/> 
      
      <ReferralBenefits/> 
      <FAQ/>
      <Footer/>
    </div>
  )
}

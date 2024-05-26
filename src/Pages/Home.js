import React from 'react'
import Header from '../Components/Header';
import Top from '../Components/Top';
import Feature from '../Components/Feature';
import Phone from '../Components/Phone';
import MovingTextComponent from '../Components/MovingTextComponent';
import ColumnsWithIcons from '../Components/ColumnsWithIcons';
import TwoColumnLayout from '../Components/TwoColumnLayout';
import Faqs from '../Components/Faqs';
import Second from '../Components/Second';
import WhiteColumn from '../Components/WhiteColumn';
import Layout from '../Components/Layout';
import QAndA from '../Components/QAndA';
import LatestNewsCards from '../Components/LatestNewsCards';
import Platform from '../Components/Platform';
import Fast from '../Components/Fast';
import Bslide from '../Components/Bslide';
import Steps from '../Components/Steps';
import Pricing from '../Components/Pricing';
import Special from '../Components/Special';
import Additional from '../Components/Additional';
import Different from '../Components/Different';
import Portfolio from '../Components/Portfolio';
import Pallete from '../Components/Pallete';
import Ondemand from '../Components/Ondemand';
import Iconmorquee from '../Components/Iconmorquee';
import Leftm from '../Components/Leftm';
import { Modal } from 'bootstrap';
import Cmodal from '../Components/Cmodal.';
import Contactnew from './Contactnew';
import BankingSolutions from '../Components/BankingSolutions';
import Testimonial from '../Components/Testimonial';
import EmployeeTestimonials from '../Components/EmployeeTestimonials';
import WhoComponent from '../Components/WhoComponent';
import Partnerships from '../Components/Partnerships';
import CompanyCard from '../Components/CompanyCard';
import OurTestimonials from '../Components/OurTestimonials';
import ApiDevelopmentComponent from '../Components/ApiDevelopmentComponent';
import PinComponent from '../Components/PinComponent';
import TransactionSummary from '../Components/TransactionSummary';
import HelpdeskPage from '../Components/HelpdeskPage';
import PrivacyComponent from '../Components/k';
import BankCard from '../Components/BankCard';




const Home = () => {

  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className='home-container'>
        <Header
        backgroundImage="/company.PNG"
        heading="CUSTOM MOBILE BANKING"
        heading2="SOFTWARE DEVELOPMENT"
        subheading="Innovative solutions tailored to your needs"
        buttonText="HIRE BANKING DEVELOPERS"
        buttonAction={handleButtonClick}
      />
        <Top />
        <Pallete/>
        {/* <Feature /> */}
        {/* <ColumnsWithIcons /> */}
        {/* <Special/> */}
        <BankingSolutions/>
        {/* <Additional/> */}
        {/* <Different/> */}
        {/* <Phone /> */}
        
        {/* <MovingTextComponent /> */}
        
        {/* <TwoColumnLayout /> */}
        <Portfolio/>
        <PrivacyComponent/>
        <HelpdeskPage/>
        {/* <TransactionSummary/> */}
        {/* <BankCard/> */}
        {/* <PinComponent/> */}
        <ApiDevelopmentComponent/>
        <OurTestimonials/>
        <CompanyCard/>
        <EmployeeTestimonials/>
        <Ondemand/>
        {/* <Iconmorquee/> */}
        <Leftm/>
        <WhoComponent/>
        <Contactnew/>
        <Partnerships/>
        <Testimonial/>
        
        
        {/* <Cmodal/> */}
        {/* <Faqs /> */}
        {/* <Second /> */}
        {/* <WhiteColumn /> */}
        {/* <Layout /> */}
        {/* <QAndA />
        <LatestNewsCards /> */}
        {/* <Platform /> */}
        {/* <Fast /> */}
        {/* <Bslide />
        <Steps />
        <Pricing />  */}
        
    </div>
  )
}

export default Home
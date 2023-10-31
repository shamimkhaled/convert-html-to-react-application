
import React from "react";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import Index from "./pages/Index";
import AboutUsPage from "./pages/AboutUsPage";
import ServicesPage from "./pages/ServicesPage";
import ProductsPage from "./pages/ProductsPage";
import ContactsPage from "./pages/ContactsPage";
import FlagshipProjectsPage from "./pages/FlagshipProjectsPage";
import NoGalleryPage from "./pages/NoGalleryPage";
import ProductRenewableEnergyPage from "./pages/ProductRenewableEnergyPage";
import ProductSaftyppePage from "./pages/ProductSaftyppePage";
import ProductsConveyorBeltPage from "./pages/ProductsConveyorBeltPage";
import ProductsEarthMovePartPage from "./pages/ProductsEarthMovePartPage";
import ProductsFabricationPage from "./pages/ProductsFabricationPage";
import ProductsInstrumentAutomationPage from "./pages/ProductsInstrumentAutomationPage";
import ProductsLvmhvmEclectricPage from "./pages/ProductsLvmhvmEclectricPage";
import ProductWeightometerPage from "./pages/ProductWeightometerPage";
import ProjectOnePage from "./pages/ProjectOnePage";
import ProjectTwoPage from "./pages/ProjectTwoPage";
import ProjectThreePage from "./pages/ProjectThreePage";
import ProjectFivePage from "./pages/ProjectFivePage";
import ProjectSixPage from "./pages/ProjectSixPage";
import ProjectFourPage from "./pages/ProjectFourPage";
import ProjectSevenPage from "./pages/ProjectSevenPage";
import ProjectEightPage from "./pages/ProjectEightPage";
import ProjectNinePage from "./pages/ProjectNinePage";
import ProjectTenPage from "./pages/ProjectTenPage";
import ProjectElevenPage from "./pages/ProjectElevenPage";
import ProjectTwelvePage from "./pages/ProjectTwelvePage";
import ServiceStandPowerPage from "./pages/ServiceStandPowerPage";
import ServiceSaftyManagePage from "./pages/ServiceSaftyManagePage";
import ServiceQualityAssurancePage from "./pages/ServiceQualityAssurancePage";
import ServiceProjectManagePage from "./pages/ServiceProjectManagePage";
import ServicePlantEquipmentPage from "./pages/ServicePlantEquipmentPage";
import ServiceFabricationPage from "./pages/ServiceFabricationPage";
import ServiceEngineeringPage from "./pages/ServiceEngineeringPage";
import ServiceDetailDesign from "./pages/ServiceDetailDesign";
import ServiceCostEngFeasabiltyPage from "./pages/ServiceCostEngFeasabiltyPage";


function App() {
  return (
    <Routes>
      
      <Route path="/" element={<IndexPage />} />
      <Route path="/index" element={<Index />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/flagship-projects" element={<FlagshipProjectsPage />} />
      <Route path="/gallery" element={<NoGalleryPage />} />


      {/* Products */}
      <Route path="/products-renewable-energy-products" element={<ProductRenewableEnergyPage />} />
      <Route path="/products-safety-ppe" element={<ProductSaftyppePage />} />
      <Route path="/products-conveyor-belting-accessories" element={<ProductsConveyorBeltPage />} />
      <Route path="/products-earthmoving-parts-components" element={<ProductsEarthMovePartPage />} />
      <Route path="/products-fabrication" element={<ProductsFabricationPage />} />
      <Route path="/products-instrumentation-automation-equipment" element={<ProductsInstrumentAutomationPage />} />
      <Route path="/products-lvmvhv-electrical" element={<ProductsLvmhvmEclectricPage />} />
      <Route path="/products-weightometer-weighing-solutions" element={<ProductWeightometerPage />} />

      {/* Flagship Projects */}
      <Route path="/project-project-1" element={<ProjectOnePage />} />
      <Route path="/project-project-2" element={<ProjectTwoPage />} />
      <Route path="/project-project-3" element={<ProjectThreePage />} />
      <Route path="/project-project-5" element={<ProjectFivePage />} />
      <Route path="/project-project-6" element={<ProjectSixPage />} />
      <Route path="/project-project-7" element={<ProjectSevenPage />} />
      <Route path="/project-project-8" element={<ProjectEightPage />} />
      <Route path="/project-project-9" element={<ProjectNinePage />} />
      <Route path="/project-project-10" element={<ProjectTenPage />} />
      <Route path="/project-project-12" element={<ProjectTwelvePage />} />
      <Route path="/project-project-11" element={<ProjectElevenPage />} />
      <Route path="/project-project-4" element={<ProjectFourPage />} />
      

      {/* Services */}
      <Route path="/service-standby-power-systems" element={<ServiceStandPowerPage />} />
      <Route path="/service-safety-management" element={<ServiceSaftyManagePage />} />
      <Route path="/service-quality-assurance-control" element={<ServiceQualityAssurancePage />} />
      <Route path="/service-project-management-solutions" element={<ServiceProjectManagePage />} />
      <Route path="/service-plant-equipment" element={<ServicePlantEquipmentPage />} />
      <Route path="/service-fabrication" element={<ServiceFabricationPage />} />
      <Route path="/service-engineering" element={<ServiceEngineeringPage />} />
      <Route path="/service-detailed-design" element={<ServiceDetailDesign />} />
      <Route path="/service-cost-engineering-feasability" element={<ServiceCostEngFeasabiltyPage />} />







    

    </Routes>


    );
}

export default App;

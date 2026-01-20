import type { ReactElement } from "react";
import AIFailureIcon from "@/components/icons/AIFailureIcon";
import CmmsIcon from "@/components/icons/CmmsIcon";
import CustomDashboardsIcon from "@/components/icons/CustomDashboardsIcon";
import DigitizedQualityIcon from "@/components/icons/DigitizedQualityIcon";
import DowntimeIcon from "@/components/icons/DowntimeIcon";
import IntegrationsIcon from "@/components/icons/IntegrationsIcon";
import MonitoringIcon from "@/components/icons/MonitoringIcon";
import OeeIcon from "@/components/icons/OeeIcon";
import OperatorPerformanceIcon from "@/components/icons/OperatorPerformanceIcon";
import PreventiveIcon from "@/components/icons/PreventiveIcon";
import ProductionIcon from "@/components/icons/ProductionIcon";
import RootCauseIcon from "@/components/icons/RootCauseIcon";
import SensorSpecsIcon from "@/components/icons/SensorSpecsIcon";
import SopsIcon from "@/components/icons/SopsIcon";
import UtilityIcon from "@/components/icons/UtilityIcon";
import VibrationIcon from "@/components/icons/VibrationIcon";
import WorkOrdersIcon from "@/components/icons/WorkOrdersIcon";
import InventoryIcon from "@/components/icons/InventoryIcon";
import AutomotiveIcon from "@/components/icons/AutomotiveIcon";
import ChemicalsIcon from "@/components/icons/ChemicalsIcon";
import FacilitiesIcon from "@/components/icons/FacilitiesIcon";
import FleetIcon from "@/components/icons/FleetIcon";
import FoodAndBeverageIcon from "@/components/icons/FoodAndBeverageIcon";
import HeavyEquipmentIcon from "@/components/icons/HeavyEquipmentIcon";
import MaintenanceEngineerIcon from "@/components/icons/MaintenanceEngineerIcon";
import ManufacturingEngineerIcon from "@/components/icons/ManufacturingEngineerIcon";
import ManufacturingIcon from "@/components/icons/ManufacturingIcon";
import MillsAndAgricultureIcon from "@/components/icons/MillsAndAgricultureIcon";
import MiningIcon from "@/components/icons/MiningIcon";
import OilAndGasIcon from "@/components/icons/OilAndGasIcon";
import PlantManagerIcon from "@/components/icons/PlantManagerIcon";
import ReliabilityEngineerIcon from "@/components/icons/ReliabilityEngineerIcon";
import AcademyIcon from "@/components/icons/AcademyIcon";
import BlogIcon from "@/components/icons/BlogIcon";
import CalculatorsIcon from "@/components/icons/CalculatorsIcon";
import CaseStudiesIcon from "@/components/icons/CaseStudiesIcon";
import ChatGPTIcon from "@/components/icons/ChatGPTIcon";
import EbooksIcon from "@/components/icons/EbooksIcon";
import EventsIcon from "@/components/icons/EventsIcon";
import HelpIcon from "@/components/icons/HelpIcon";
import ProductUpdatesIcon from "@/components/icons/ProductUpdatesIcon";
import TemplatesIcon from "@/components/icons/TemplatesIcon";
import ContactIcon from "@/components/icons/ContactIcon";
import ReferralsIcon from "@/components/icons/ReferralsIcon";
import TrustIcon from "@/components/icons/TrustIcon";
import { Locale, localeNames } from "@/i18n.config";
import EnergyIcon from "@/components/icons/EnergyIcon";
import PaperAndPulpIcon from "@/components/icons/PaperAndPulpIcon";
import Image from "next/image";

export type NavItem = {
  id: string;
  labelMessageKey: string;
  descriptionMessageKey?: string;
  href?: Record<string, string>;
  icon?: ReactElement;
  locales?: Locale[];
  subItems?: NavItem[];
};

const L = localeNames;

export const getNavItems = (t: (val: string) => string) => [
  {
    id: "solutions",
    labelMessageKey: "solutions",
    locales: [L.en, L.pt, L.es],
    subItems: [
      {
        id: "tractianConditionMonitoring",
        labelMessageKey: "tractianConditionMonitoring",
        icon: <MonitoringIcon />,
        href: {
          [L.en]: "/en/solutions/condition-monitoring",
          [L.pt]: "/solucoes/monitoramento-condicao",
          [L.es]: "/es/soluciones/monitoreo-condicion",
        },
        locales: [L.en, L.pt, L.es],
        subItems: [
          {
            id: "vibrationSensorAndAnalysis",
            labelMessageKey: "vibrationSensorAndAnalysis",
            descriptionMessageKey: "vibrationSensorAndAnalysisDescription",
            icon: <VibrationIcon />,
            href: {
              [L.en]: "/en/solutions/condition-monitoring/vibration-analysis",
              [L.pt]: "/solucoes/monitoramento-condicao/analise-de-vibracao",
              [L.es]:
                "/es/soluciones/monitoreo-condicion/analisis-de-vibraciones",
            },
            locales: [L.en, L.pt, L.es],
          },
          {
            id: "aiFailureDetection",
            labelMessageKey: "aiFailureDetection",
            descriptionMessageKey: "aiFailureDetectionDescription",
            icon: <AIFailureIcon />,
            href: {
              [L.en]:
                "/en/solutions/condition-monitoring/ai-powered-condition-monitoring",
              [L.pt]: "/solucoes/monitoramento-condicao/deteccao-de-falhas",
              [L.es]: "/es/soluciones/monitoreo-condicion/deteccion-de-fallas",
            },
            locales: [L.en, L.pt, L.es],
          },
          {
            id: "reliabilityAndRootCauseAnalysis",
            labelMessageKey: "reliabilityAndRootCauseAnalysis",
            descriptionMessageKey: "reliabilityAndRootCauseAnalysisDescription",
            icon: <RootCauseIcon />,
            href: {
              [L.en]: "/en/solutions/condition-monitoring",
              [L.pt]: "/solucoes/monitoramento-condicao",
              [L.es]: "/es/soluciones/monitoreo-condicion",
            },
            locales: [L.en, L.pt, L.es],
          },
          {
            id: "downtimePreventionAndReporting",
            labelMessageKey: "downtimePreventionAndReporting",
            descriptionMessageKey: "downtimePreventionAndReportingDescription",
            icon: <DowntimeIcon />,
            href: {
              [L.en]:
                "/en/solutions/condition-monitoring/downtime-prevention-and-reporting",
              [L.pt]:
                "/solucoes/monitoramento-condicao/prevencao-de-downtime-e-relatorios",
              [L.es]:
                "/es/soluciones/monitoreo-condicion/prevencion-de-reportes-y-paradas",
            },
            locales: [L.en, L.pt, L.es],
          },
          {
            id: "sensorSpecifications",
            labelMessageKey: "sensorSpecifications",
            descriptionMessageKey: "sensorSpecificationsDescription",
            icon: <SensorSpecsIcon />,
            href: {
              [L.en]:
                "/en/solutions/condition-monitoring/sensor-specifications",
              [L.pt]:
                "/solucoes/monitoramento-condicao/especificacoes-do-sensor",
              [L.es]:
                "/es/soluciones/monitoreo-condicion/especificaciones-del-sensor",
            },
            locales: [L.en, L.pt, L.es],
          },
        ],
      },

      {
        id: "tractianCmms",
        labelMessageKey: "tractianCmms",
        icon: <CmmsIcon />,
        href: {
          [L.en]: "/en/solutions/cmms",
          [L.pt]: "/solucoes/cmms",
          [L.es]: "/es/soluciones/cmms",
        },
        locales: [L.en, L.pt, L.es],
        subItems: [
          {
            id: "troubleshootingAndSops",
            labelMessageKey: "troubleshootingAndSops",
            descriptionMessageKey: "troubleshootingAndSopsDescription",
            icon: <SopsIcon />,
            href: {
              [L.en]: "/en/solutions/cmms/maintenance-sop",
              [L.pt]: "/solucoes/cmms/checklists-e-pops-inteligentes",
              [L.es]: "/es/soluciones/cmms/sops-de-mantenimiento",
            },
            locales: [L.en, L.pt, L.es],
          },
          {
            id: "workOrderManagement",
            labelMessageKey: "workOrderManagement",
            descriptionMessageKey: "workOrderManagementDescription",
            icon: <WorkOrdersIcon />,
            href: {
              [L.en]: "/en/solutions/cmms/work-order-software",
              [L.pt]: "/solucoes/cmms/gerenciamento-de-ordens-de-servico",
              [L.es]:
                "/es/soluciones/cmms/software-gestion-de-ordenes-de-trabajo",
            },
            locales: [L.en, L.pt, L.es],
          },
          {
            id: "partsInventoryManagement",
            labelMessageKey: "partsInventoryManagement",
            descriptionMessageKey: "partsInventoryManagementDescription",
            icon: <InventoryIcon />,
            href: {
              [L.en]: "/en/solutions/cmms/inventory-management-software",
              [L.pt]: "/solucoes/cmms/controle-de-estoque",
              [L.es]: "/es/soluciones/cmms/software-gestion-de-materiales",
            },
            locales: [L.en, L.pt, L.es],
          },
          {
            id: "preventiveMaintenance",
            labelMessageKey: "preventiveMaintenance",
            descriptionMessageKey: "preventiveMaintenanceDescription",
            icon: <PreventiveIcon />,
            href: {
              [L.en]: "/en/solutions/cmms/preventive-maintenance-software",
              [L.pt]: "/solucoes/cmms/software-de-manutencao-preventiva",
              [L.es]: "/es/soluciones/cmms/software-mantenimiento-preventivo",
            },
            locales: [L.en, L.pt, L.es],
          },
          {
            id: "integrations",
            labelMessageKey: "integrations",
            descriptionMessageKey: "integrationsDescription",
            icon: <IntegrationsIcon />,
            href: {
              [L.en]: "/en/solutions/integrations",
              [L.pt]: "/solucoes/integracoes",
              [L.es]: "/es/soluciones/integraciones",
            },
            locales: [L.en, L.pt, L.es],
          },
        ],
      },

      {
        id: "tractianOee",
        labelMessageKey: "tractianOee",
        icon: <OeeIcon />,
        href: {
          [L.en]: "/en/solutions/oee",
          [L.pt]: "/solucoes/oee/leitor-de-plc",
          [L.es]: "/es/soluciones/oee/lector-plc",
        },
        locales: [L.en, L.pt, L.es],
        subItems: [
          {
            id: "aiProductionTracking",
            labelMessageKey: "aiProductionTracking",
            descriptionMessageKey: "aiProductionTrackingDescription",
            icon: <ProductionIcon />,
            href: {
              [L.en]: "/en/solutions/oee/plc-reader",
              [L.pt]: "/solucoes/oee/leitor-de-plc",
              [L.es]: "/es/soluciones/oee/lector-plc",
            },
            locales: [L.en, L.pt, L.es],
          },
          {
            id: "operatorPerformance",
            labelMessageKey: "operatorPerformance",
            descriptionMessageKey: "operatorPerformanceDescription",
            icon: <OperatorPerformanceIcon />,
            href: {
              [L.en]: "/en/solutions/oee",
              [L.pt]: "/solucoes/oee/energy-trac",
              [L.es]: "/es/soluciones/oee/energy-trac",
            },
            locales: [L.en, L.pt, L.es],
          },
          {
            id: "digitizedQuality",
            labelMessageKey: "digitizedQuality",
            descriptionMessageKey: "digitizedQualityDescription",
            icon: <DigitizedQualityIcon />,
            href: {
              [L.en]: "/en/solutions/oee",
              [L.pt]: "/solucoes/oee/relatorios-do-supervisor",
              [L.es]: "/es/soluciones/oee/supervisor",
            },
            locales: [L.en, L.pt, L.es],
          },
          {
            id: "customDashboards",
            labelMessageKey: "customDashboards",
            descriptionMessageKey: "customDashboardsDescription",
            icon: <CustomDashboardsIcon />,
            href: {
              [L.en]: "/en/solutions/oee/supervisor-reports",
              [L.pt]: "/solucoes/oee/relatorios-do-supervisor",
              [L.es]: "/es/soluciones/oee/supervisor",
            },
            locales: [L.en, L.pt, L.es],
          },
          {
            id: "utilityAndProcessAnalytics",
            labelMessageKey: "utilityAndProcessAnalytics",
            descriptionMessageKey: "utilityAndProcessAnalyticsDescription",
            icon: <UtilityIcon />,
            href: {
              [L.en]: "/en/solutions/oee/energy-trac",
              [L.pt]: "/solucoes/oee/energy-trac",
              [L.es]: "/es/soluciones/oee/energy-trac",
            },
            locales: [L.en, L.pt, L.es],
          },
        ],
      },
    ],
  },

  {
    id: "whoWeServe",
    labelMessageKey: "whoWeServe",
    locales: [L.en, L.pt, L.es],
    subItems: [
      {
        id: "byRole",
        labelMessageKey: "byRole",
        locales: [L.en, L.pt, L.es],
        subItems: [
          {
            id: "plantManager",
            labelMessageKey: "plantManager",
            icon: <PlantManagerIcon />,
            href: {
              [L.en]: "/en/who-we-serve/plant-manager",
              [L.pt]: "/solucoes-para-gerentes-industriais",
              [L.es]: "/es/who-we-serve/gerente-de-planta",
            },
            locales: [L.en, L.pt, L.es],
          },
          {
            id: "reliabilityEngineer",
            labelMessageKey: "reliabilityEngineer",
            icon: <ReliabilityEngineerIcon />,
            href: {
              [L.en]: "/en/who-we-serve/reliability-engineer",
              [L.pt]: "/solucoes-para-gerentes-de-manutencao",
              [L.es]: "/es/who-we-serve/ingeniero-de-confiabilidad",
            },
            locales: [L.en, L.pt, L.es],
          },
          {
            id: "maintenanceEngineer",
            labelMessageKey: "maintenanceEngineer",
            icon: <MaintenanceEngineerIcon />,
            href: {
              [L.en]: "/en/who-we-serve/maintenance-engineer",
              [L.pt]: "/solucoes-para-tecnicos-de-manutencao",
              [L.es]: "/es/who-we-serve/ingeniero-de-mantenimiento",
            },
            locales: [L.en, L.pt, L.es],
          },
          {
            id: "manufacturingEngineer",
            labelMessageKey: "manufacturingEngineer",
            icon: <ManufacturingEngineerIcon />,
            href: {
              [L.en]: "/en/who-we-serve/manufacturing-engineer",
              [L.pt]: "/en/who-we-serve/manufacturing-engineer",
              [L.es]: "/en/who-we-serve/manufacturing-engineer",
            },
            locales: [L.en],
          },
        ],
      },

      {
        id: "bySector",
        labelMessageKey: "bySector",
        locales: [L.en, L.pt, L.es],
        subItems: [
          {
            id: "automotiveAndParts",
            labelMessageKey: "automotiveAndParts",
            icon: <AutomotiveIcon />,
            href: {
              [L.en]: "/en/industry/automotive",
              [L.pt]: "/industria/automotiva",
              [L.es]: "/es/industria/automovil-y-de-la-automocion",
            },
            locales: [L.en, L.pt, L.es],
          },
          {
            id: "miningAndMetals",
            labelMessageKey: "miningAndMetals",
            icon: <MiningIcon />,
            href: {
              [L.en]: "/en/industry/mining-sector",
              [L.pt]: "/industria/setor-mineracao",
              [L.es]: "/es/industria/sector-de-la-mineria",
            },
            locales: [L.pt, L.es],
          },
          {
            id: "chemicals",
            labelMessageKey: "chemicals",
            icon: <ChemicalsIcon />,
            href: {
              [L.en]: "/en/industry/chemical",
              [L.pt]: "/industria/quimica",
              [L.es]: "/es/industria/quimica",
            },
            locales: [L.en, L.pt, L.es],
          },
          {
            id: "millsAndAgriculture",
            labelMessageKey: "millsAndAgriculture",
            icon: <MillsAndAgricultureIcon />,
            href: {
              [L.en]: "/en/industry/mills-and-agriculture",
              [L.pt]: "/industria/usinas-e-agricola",
              [L.es]: "/es/industria/azucareras-y-agricola",
            },
            locales: [L.pt, L.es],
          },
          {
            id: "facilities",
            labelMessageKey: "facilities",
            icon: <FacilitiesIcon />,
            href: {
              [L.en]: "/en/industry/facilities-maintenance-software",
              [L.pt]: "/en/industry/facilities-maintenance-software",
              [L.es]: "/en/industry/facilities-maintenance-software",
            },
            locales: [L.en],
          },
          {
            id: "fleet",
            labelMessageKey: "fleet",
            icon: <FleetIcon />,
            href: {
              [L.en]: "/en/industry/fleet-maintenance-software",
              [L.pt]: "/en/industry/fleet-maintenance-software",
              [L.es]: "/en/industry/fleet-maintenance-software",
            },
            locales: [L.en],
          },
          {
            id: "foodAndBeverage",
            labelMessageKey: "foodAndBeverage",
            icon: <FoodAndBeverageIcon />,
            href: {
              [L.en]: "/en/industry/food-and-beverage",
              [L.pt]: "/industria/alimenticia",
              [L.es]: "/es/industria/alimentarias-y-agricolas",
            },
            locales: [L.en, L.pt, L.es],
          },
          {
            id: "heavyEquipment",
            labelMessageKey: "heavyEquipment",
            icon: <HeavyEquipmentIcon />,
            href: {
              [L.en]: "/en/industry/heavy-equipment-maintenance-software",
              [L.pt]: "/en/industry/heavy-equipment-maintenance-software",
              [L.es]: "/en/industry/heavy-equipment-maintenance-software",
            },
            locales: [L.en],
          },
          {
            id: "manufacturing",
            labelMessageKey: "manufacturing",
            icon: <ManufacturingIcon />,
            href: {
              [L.en]: "/en/industry/manufacturing-maintenance-software",
              [L.pt]: "/en/industry/manufacturing-maintenance-software",
              [L.es]:
                "/es/industria/software-de-mantenimiento-para-manufactura",
            },
            locales: [L.en, L.es],
          },
          {
            id: "paperAndPulp",
            labelMessageKey: "paperAndPulp",
            icon: <PaperAndPulpIcon />,
            href: {
              [L.en]: "/en/industry/oil-gas-maintenance-software",
              [L.pt]: "/industria/papel-e-celulose",
              [L.es]: "/en/industry/oil-gas-maintenance-software",
            },
            locales: [L.pt],
          },
          {
            id: "energy",
            labelMessageKey: "energy",
            icon: <EnergyIcon />,
            href: {
              [L.en]: "/en/industry/oil-gas-maintenance-software",
              [L.pt]: "/en/industry/oil-gas-maintenance-software",
              [L.es]: "/es/industria/energeticos",
            },
            locales: [L.es],
          },
          {
            id: "millsAndAgriculture",
            labelMessageKey: "millsAndAgriculture",
            icon: <MillsAndAgricultureIcon />,
            href: {
              [L.en]: "/en/industry/mills-and-agriculture",
              [L.pt]: "/industria/usinas-e-agricola",
              [L.es]: "/es/industria/azucareras-y-agricola",
            },
            locales: [L.en],
          },
          {
            id: "miningAndMetals",
            labelMessageKey: "miningAndMetals",
            icon: <MiningIcon />,
            href: {
              [L.en]: "/en/industry/mining-sector",
              [L.pt]: "/industria/setor-mineracao",
              [L.es]: "/es/industria/sector-de-la-mineria",
            },
            locales: [L.en],
          },
          {
            id: "oilAndGas",
            labelMessageKey: "oilAndGas",
            icon: <OilAndGasIcon />,
            href: {
              [L.en]: "/en/industry/oil-gas-maintenance-software",
              [L.pt]: "/en/industry/oil-gas-maintenance-software",
              [L.es]: "/en/industry/oil-gas-maintenance-software",
            },
            locales: [L.en],
          },
        ],
      },
    ],
  },

  {
    id: "resources",
    labelMessageKey: "resources",
    locales: [L.en, L.pt, L.es],
    subItems: [
      {
        id: "resourcesCenter",
        labelMessageKey: "resourcesCenter",
        locales: [L.en, L.pt, L.es],
        subItems: [
          {
            id: "caseStudies",
            labelMessageKey: "caseStudies",
            icon: <CaseStudiesIcon />,
            href: {
              [L.en]: "/en/case-studies",
              [L.pt]: "/casos-de-estudo",
              [L.es]: "/es/casos-de-estudio",
            },
            locales: [L.en, L.pt, L.es],
          },
          {
            id: "ebooks",
            labelMessageKey: "ebooks",
            icon: <EbooksIcon />,
            href: {
              [L.en]: "/en/resources",
              [L.pt]: "/materiais",
              [L.es]: "/es/materiales",
            },
            locales: [L.en, L.pt, L.es],
          },
          {
            id: "blog",
            labelMessageKey: "blog",
            icon: <BlogIcon />,
            href: {
              [L.en]: "/en/blog",
              [L.pt]: "/blog",
              [L.es]: "/es/blog",
            },
            locales: [L.en, L.pt, L.es],
          },
          {
            id: "templates",
            labelMessageKey: "templates",
            icon: <TemplatesIcon />,
            href: {
              [L.en]: "/en/assets",
              [L.pt]: "/assets",
              [L.es]: "/es/assets",
            },
            locales: [L.en, L.pt, L.es],
          },
          {
            id: "calculators",
            labelMessageKey: "calculators",
            icon: <CalculatorsIcon />,
            href: {
              [L.en]: "/en/resources/calculators/maintenance-calculators",
              [L.pt]: "/materiais",
              [L.es]: "/es/materiales",
            },
            locales: [L.en],
          },
          {
            id: "eventsAndWebinars",
            labelMessageKey: "eventsAndWebinars",
            icon: <EventsIcon />,
            href: {
              [L.en]: "/en/events/hub",
              [L.pt]: "/materiais",
              [L.es]: "/es/materiales",
            },
            locales: [L.en],
          },
          {
            id: "sops",
            labelMessageKey: "sops",
            icon: <SopsIcon />,
            href: {
              [L.en]: "/en/resources",
              [L.pt]: "/materiais",
              [L.es]: "/es/materiales",
            },
            locales: [L.en, L.pt, L.es],
          },
          {
            id: "chatgptPlugins",
            labelMessageKey: "chatgptPlugins",
            icon: <ChatGPTIcon />,
            href: {
              [L.en]: "/en/resources/ai-agents",
              [L.pt]: "/materiais/agentes-ia",
              [L.es]: "/es/materiales",
            },
            locales: [L.en, L.pt],
          },
        ],
      },
      {
        id: "customerHub",
        labelMessageKey: "customerHub",
        locales: [L.en, L.pt, L.es],
        subItems: [
          {
            id: "productUpdates",
            labelMessageKey: "productUpdates",
            icon: <ProductUpdatesIcon />,
            href: {
              [L.en]: "https://releases.tractian.com/",
              [L.pt]: "https://releases.tractian.com/pt",
              [L.es]: "https://releases.tractian.com/es",
            },
            locales: [L.en, L.pt, L.es],
          },
          {
            id: "tractianAcademy",
            labelMessageKey: "tractianAcademy",
            icon: <AcademyIcon />,
            href: {
              [L.en]: "https://academy.tractian.com/en",
              [L.pt]: "https://academy.tractian.com/pt",
              [L.es]: "https://academy.tractian.com/es",
            },
            locales: [L.en, L.pt, L.es],
          },
          {
            id: "helpCenter",
            labelMessageKey: "helpCenter",
            icon: <HelpIcon />,
            href: {
              [L.en]: "https://faq.tractian.com/en/",
              [L.pt]: "https://faq.tractian.com/pt-BR/",
              [L.es]: "https://faq.tractian.com/es/",
            },
            locales: [L.en, L.pt, L.es],
          },
        ],
      },
    ],
  },

  {
    id: "company",
    labelMessageKey: "company",
    locales: [L.en, L.pt, L.es],
    subItems: [
      {
        id: "aboutTractian",
        labelMessageKey: "aboutTractian",
        locales: [L.en, L.pt, L.es],
        subItems: [
          {
            id: "aboutUs",
            labelMessageKey: "aboutUs",
            icon: (
              <Image
                alt={t("aboutUs")}
                src="/navbar/about.png"
                width={160}
                height={90}
                sizes="(min-width: 1024px) 186px, 110px"
                className="object-cover w-[160px] h-[90px] lg:w-[186px] lg:h-[110px]"
              />
            ),
            href: {
              [L.en]: "/en/about",
              [L.pt]: "/sobre",
              [L.es]: "/es/sobre",
            },
            locales: [L.en, L.pt, L.es],
          },
          {
            id: "careers",
            labelMessageKey: "careers",
            icon: (
              <Image
                alt={t("careers")}
                width={160}
                height={90}
                sizes="(min-width: 1024px) 186px, 110px"
                className="object-cover w-[160px] h-[90px] lg:w-[186px] lg:h-[110px]"
                src={"/navbar/careers.png"}
              />
            ),
            href: {
              [L.en]: "https://careers.tractian.com/",
              [L.pt]: "https://careers.tractian.com/",
              [L.es]: "https://careers.tractian.com/",
            },
            locales: [L.en, L.pt, L.es],
          },
          {
            id: "newsroom",
            labelMessageKey: "newsroom",
            icon: (
              <Image
                alt={t("newsroom")}
                width={160}
                height={90}
                sizes="(min-width: 1024px) 186px, 110px"
                className="object-cover w-[160px] h-[90px] lg:w-[186px] lg:h-[110px]"
                src={"/navbar/newsroom.png"}
              />
            ),
            href: {
              [L.en]: "/en/press",
              [L.pt]: "/imprensa",
              [L.es]: "/es/prensa",
            },
            locales: [L.en, L.pt, L.es],
          },
        ],
      },
      {
        id: "others",
        labelMessageKey: "others",
        locales: [L.en, L.pt, L.es],
        subItems: [
          {
            id: "contactUs",
            labelMessageKey: "contactUs",
            icon: <ContactIcon />,
            href: {
              [L.en]: "/en/contact",
              [L.pt]: "/contato",
              [L.es]: "/es/contacto",
            },
            locales: [L.en, L.pt, L.es],
          },
          {
            id: "referrals",
            labelMessageKey: "referrals",
            icon: <ReferralsIcon />,
            href: {
              [L.en]: "/en/referrals",
              [L.pt]: "/en/referrals",
              [L.es]: "/en/referrals",
            },
            locales: [L.en, L.pt, L.es],
          },
          {
            id: "trustCenter",
            labelMessageKey: "trustCenter",
            icon: <TrustIcon />,
            href: {
              [L.en]: "https://trust.tractian.com/",
              [L.pt]: "https://trust.tractian.com/",
              [L.es]: "https://trust.tractian.com/",
            },
            locales: [L.en, L.pt, L.es],
          },
        ],
      },
    ],
  },

  {
    id: "pricing",
    labelMessageKey: "pricing",
    locales: [L.en, L.pt, L.es],
    subItems: [
      {
        id: "conditionMonitoringPricing",
        labelMessageKey: "conditionMonitoringPricing",
        icon: <MonitoringIcon />,
        href: {
          [L.en]: "/en/smart-trac/sensor-pricing",
          [L.pt]: "/solucoes/monitoramento-condicao/smart-trac/planos",
          [L.es]: "/es/soluciones/monitoreo-condicion/smart-trac/planes",
        },
        locales: [L.en, L.pt, L.es],
      },
      {
        id: "cmmsPricing",
        labelMessageKey: "cmmsPricing",
        icon: <CmmsIcon />,
        href: {
          [L.en]: "/en/solutions/cmms/pricing",
          [L.pt]: "/solucoes/cmms/planos",
          [L.es]: "/es/soluciones/cmms/planes",
        },
        locales: [L.en, L.pt, L.es],
      },
    ],
  },
];

export function filterNavByLocale(items: NavItem[], locale: Locale): NavItem[] {
  return items
    .filter((item) => !item.locales || item.locales.includes(locale))
    .map((item) => {
      const subItems = item.subItems
        ? filterNavByLocale(item.subItems, locale)
        : undefined;
      return {
        ...item,
        subItems: subItems && subItems.length > 0 ? subItems : undefined,
      };
    })
    .filter(
      (item) => !item.subItems || item.subItems.length > 0 || !!item.href,
    );
}

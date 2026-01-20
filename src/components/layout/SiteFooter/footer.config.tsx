import { ReactNode } from "react";
import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import YoutubeIcon from "@/components/icons/YoutubeIcon";
import { Locale } from "@/i18n.config";
import TikTokIcon from "@/components/icons/TikTokIcon";
import XIcon from "@/components/icons/XIcon";
import Image from "next/image";

export type FooterLinkItem = {
  href: string;
  labelMessageKey: string;
  target?: string;
};

export type FooterSection = {
  id: string;
  titleMessageKey: string;
  links: FooterLinkItem[];
};

type FooterSectionGroup = readonly [FooterSection, FooterSection];

export type FooterConfig = {
  partnerBadges: PartnerBadge[];
  sections: readonly (FooterSection | FooterSectionGroup)[];
  socialLinks: SocialLink[];
  phone: string;
  address: string;
  addressHref: string;
};

export type PartnerBadge = ReactNode;

export type SocialLink = {
  href: string;
  title: string;
  icon: ReactNode;
};

const PARTNER_BADGES: PartnerBadge[] = [
  <Image
    key="front-runners"
    alt="AWS Partner"
    src="/badges/front-runners.png"
    height={156}
    width={156}
    className="max-w-[50px]"
  />,
  <Image
    key="forbes-ai"
    alt="Forbes AI"
    src="/badges/forbes-ai.png"
    height={156}
    width={156}
    className="max-w-[60px]"
  />,
  <Image
    key="aicpa-soc"
    alt="AICPA SOC"
    src="/badges/aicpa-soc.png"
    height={156}
    width={156}
    className="max-w-[52px]"
  />,
  <Image
    key="sap-partner"
    alt="SAP Partner"
    src="/badges/sap-partner.png"
    height={156}
    width={156}
    className="max-w-[68px]"
  />,
  <Image
    key="iso27001"
    alt="ISO 27001"
    src="/badges/iso27001.png"
    height={156}
    width={156}
    className="max-w-[90px]"
  />,
  <Image
    key="oracle-cloud"
    alt="Oracle Cloud"
    src="/badges/oracle-cloud.png"
    height={156}
    width={156}
    className="max-w-[59px]"
  />,
  <Image
    key="iso9001"
    alt="ISO 9001"
    src="/badges/iso9001.png"
    height={1458}
    width={1080}
    className="max-w-[56px]"
  />,
  <Image
    key="asset-management-best-meets-requirements"
    alt="Asset Management Best Meets Requirements"
    src="/badges/asset-management-best-meets-requirements.png"
    height={156}
    width={156}
    className="max-w-[56px]"
  />,
];

const SOCIAL_LINKS_EN: SocialLink[] = [
  {
    href: "https://www.linkedin.com/company/get-tractian/",
    title: "Linkedin",
    icon: (
      <LinkedinIcon className="h-6 w-6 text-slate-50 transition hover:text-blue-200" />
    ),
  },
  {
    href: "https://www.instagram.com/get.tractian/",
    title: "Instagram",
    icon: (
      <InstagramIcon className="h-6 w-6 text-slate-50 transition hover:text-blue-200" />
    ),
  },
  {
    href: "https://www.youtube.com/channel/UCmrRZOCxvMbDnR5haGfFe8w",
    title: "Youtube",
    icon: (
      <YoutubeIcon className="h-6 w-6 text-slate-50 transition hover:text-blue-200" />
    ),
  },
  {
    href: "https://www.facebook.com/get.tractian/",
    title: "Facebook",
    icon: (
      <FacebookIcon className="h-6 w-6 text-slate-50 transition hover:text-blue-200" />
    ),
  },
];

const SOCIAL_LINKS_PT: SocialLink[] = [
  {
    href: "https://www.linkedin.com/company/tractian/",
    title: "Linkedin",
    icon: (
      <LinkedinIcon className="h-6 w-6 text-slate-50 transition hover:text-blue-200" />
    ),
  },
  {
    href: "https://www.facebook.com/tractian",
    title: "Facebook",
    icon: (
      <FacebookIcon className="h-6 w-6 text-slate-50 transition hover:text-blue-200" />
    ),
  },
  {
    href: "https://www.instagram.com/tractian/",
    title: "Instagram",
    icon: (
      <InstagramIcon className="h-6 w-6 text-slate-50 transition hover:text-blue-200" />
    ),
  },
  {
    href: "https://www.youtube.com/c/TRACTIAN",
    title: "Youtube",
    icon: (
      <YoutubeIcon className="h-6 w-6 text-slate-50 transition hover:text-blue-200" />
    ),
  },
  {
    href: "https://www.tiktok.com/@tractian",
    title: "TikTok",
    icon: (
      <TikTokIcon className="h-6 w-6 text-slate-50 transition hover:text-blue-200" />
    ),
  },
  {
    href: "https://twitter.com/tractian",
    title: "X",
    icon: (
      <XIcon className="h-6 w-6 text-slate-50 transition hover:text-blue-200" />
    ),
  },
];

const SOCIAL_LINKS_ES: SocialLink[] = [
  {
    href: "https://www.linkedin.com/company/tractian-mx/",
    title: "Linkedin",
    icon: (
      <LinkedinIcon className="h-6 w-6 text-slate-50 transition hover:text-blue-200" />
    ),
  },
  {
    href: "https://www.facebook.com/TRACTIAN.MX/",
    title: "Facebook",
    icon: (
      <FacebookIcon className="h-6 w-6 text-slate-50 transition hover:text-blue-200" />
    ),
  },
  {
    href: "https://www.instagram.com/tractian.mx/",
    title: "Instagram",
    icon: (
      <InstagramIcon className="h-6 w-6 text-slate-50 transition hover:text-blue-200" />
    ),
  },
  {
    href: "https://www.youtube.com/channel/UC0RfwgfkpYH5Q2BIaKQYIUw/featured",
    title: "Youtube",
    icon: (
      <YoutubeIcon className="h-6 w-6 text-slate-50 transition hover:text-blue-200" />
    ),
  },
];

export const footerConfig: Readonly<Record<Locale, FooterConfig>> = {
  en: {
    partnerBadges: PARTNER_BADGES,
    socialLinks: SOCIAL_LINKS_EN,
    phone: "+18334388722",
    address: "201 17th Street NW, Atlanta, GA 30363",
    addressHref: "https://maps.app.goo.gl/DTDjgu4zXJrxbfWT9",
    sections: [
      {
        id: "sensors",
        titleMessageKey: "sections.sensors",
        links: [
          {
            href: "/en/solutions/condition-monitoring/vibration-sensor",
            labelMessageKey: "links.conditionMonitoring",
          },
          {
            href: "/en/resources/videos/vibration-sensor",
            labelMessageKey: "links.keyFeatures",
          },
          {
            href: "/en/solutions/condition-monitoring/insights-and-diagnosis",
            labelMessageKey: "links.insightsDiagnostics",
          },
          {
            href: "/en/solutions/condition-monitoring/vibration-analysis",
            labelMessageKey: "links.vibrationSensor",
          },
          {
            href: "/en/solutions/condition-monitoring/assets-monitored",
            labelMessageKey: "links.compatibleAssets",
          },
          {
            href: "/en/solutions/condition-monitoring/supervisor",
            labelMessageKey: "links.patentedTechnology",
          },
          {
            href: "/en/solutions/apm/predictive-maintenance-software",
            labelMessageKey: "links.predictiveMaintenanceSoftware",
          },
        ],
      },
      {
        id: "cmms",
        titleMessageKey: "sections.cmms",
        links: [
          {
            href: "/en/solutions/cmms",
            labelMessageKey: "links.aiPoweredCmms",
          },
          {
            href: "/en/cmms/inventory-management-software",
            labelMessageKey: "links.bestInventoryManagementSoftware",
          },
          {
            href: "/en/solutions/cmms/preventive-maintenance-software",
            labelMessageKey: "links.preventiveMaintenanceSoftware",
          },
          {
            href: "/en/solutions/cmms/planning-and-scheduling-software",
            labelMessageKey: "links.planningAndScheduling",
          },
          {
            href: "/en/solutions/cmms/work-order-software",
            labelMessageKey: "links.workOrderManagement",
          },
          {
            href: "/en/solutions/cmms/inventory-management-software",
            labelMessageKey: "links.sparePartsManagement",
          },
          {
            href: "/en/solutions/cmms/maintenance-sop",
            labelMessageKey: "links.checklistsSops",
          },
          {
            href: "/en/solutions/cmms/maintenance-dashboard-software",
            labelMessageKey: "links.reportingAndAnalytics",
          },
          {
            href: "/en/solutions/cmms/mobile-app",
            labelMessageKey: "links.mobileCmmsApp",
          },
          {
            href: "/en/solutions/integrations",
            labelMessageKey: "links.integrations",
          },
        ],
      },
      {
        id: "oee",
        titleMessageKey: "sections.oee",
        links: [
          {
            href: "/en/solutions/oee",
            labelMessageKey: "links.productionMonitoring",
          },
          {
            href: "/en/solutions/apm/asset-performance-management",
            labelMessageKey: "links.assetPerformanceManagement",
          },
          {
            href: "/en/solutions/oee/energy-reports",
            labelMessageKey: "links.energyReports",
          },
          {
            href: "/en/solutions/oee/plc-reader",
            labelMessageKey: "links.processMonitoring",
          },
          {
            href: "/en/solutions/oee/current-monitoring",
            labelMessageKey: "links.currentMonitoring",
          },
          {
            href: "/en/solutions/oee/energy-trac",
            labelMessageKey: "links.utilityProcessAnalytics",
          },
          {
            href: "/en/solutions/oee/supervisor-reports",
            labelMessageKey: "links.customDashboards",
          },
        ],
      },
      {
        id: "support",
        titleMessageKey: "sections.support",
        links: [
          { href: "/en/contact", labelMessageKey: "links.contactUs" },
          {
            href: "https://faq.tractian.com/en/",
            labelMessageKey: "links.helpCenter",
          },
          { href: "/en/policies/privacy", labelMessageKey: "links.policies" },
          {
            href: "https://trust.tractian.com/",
            labelMessageKey: "links.trustCenter",
          },
          {
            href: "/en/master-license",
            labelMessageKey: "links.masterLicense",
          },
          {
            href: "/en/service-level-agreement",
            labelMessageKey: "links.hostedSoftwareSla",
          },
          {
            href: "/en/hardware-warranty",
            labelMessageKey: "links.hardwareWarrantyPolicy",
          },
        ],
      },
      [
        {
          id: "about",
          titleMessageKey: "sections.about",
          links: [
            { href: "/en/about", labelMessageKey: "links.aboutUs" },
            { href: "/en/referrals", labelMessageKey: "links.referrals" },
            {
              href: "https://careers.tractian.com/",
              labelMessageKey: "links.careers",
            },
            { href: "/en/case-studies", labelMessageKey: "links.caseStudies" },
            { href: "/en/press", labelMessageKey: "links.press" },
          ],
        },
        {
          id: "downloadApp",
          titleMessageKey: "sections.downloadApp",
          links: [
            {
              href: "https://apps.apple.com/app/tractian/id1590498655",
              labelMessageKey: "links.appleStore",
              target: "_blank",
            },
            {
              href: "https://play.google.com/store/apps/details?id=com.tractian.app&pli=1",
              labelMessageKey: "links.googlePlayStore",
              target: "_blank",
            },
            {
              href: "https://store.sap.com/dcp/en/product/display-2001016127_live_v1/tractian-ai-machine-intelligence-software",
              labelMessageKey: "links.sapStore",
              target: "_blank",
            },
          ],
        },
      ],
    ],
  },
  pt: {
    partnerBadges: PARTNER_BADGES,
    socialLinks: SOCIAL_LINKS_PT,
    phone: "08001102020",
    address:
      "R. Amaro Guerra, 415 - Chácara Santo Antônio, São Paulo - SP, 04711-020",
    addressHref: "https://maps.app.goo.gl/PkvAXB4cdf7a4spdA",
    sections: [
      {
        id: "sensors",
        titleMessageKey: "sections.sensors",
        links: [
          {
            href: "/solucoes/monitoramento-condicao/smart-trac",
            labelMessageKey: "links.overview",
          },
          {
            href: "/solucoes/monitoramento-condicao/insights-e-diagnostico",
            labelMessageKey: "links.insightsAndDiagnostics",
          },
          {
            href: "/solucoes/monitoramento-condicao/ativos-monitorados",
            labelMessageKey: "links.monitoredAssets",
          },
          {
            href: "/sensor-de-vibracao-industrial/analise-de-vibracao",
            labelMessageKey: "links.vibrationAnalysis",
          },
          {
            href: "/sensor-de-vibracao-industrial/supervisorio",
            labelMessageKey: "links.supervisory",
          },
        ],
      },
      {
        id: "oee",
        titleMessageKey: "sections.oee",
        links: [
          {
            href: "/solucoes/oee/leitor-de-plc",
            labelMessageKey: "links.overviewOEE",
          },
          {
            href: "/asset-performance-management",
            labelMessageKey: "links.assetPerformanceManagement",
          },
          {
            href: "/solucoes/oee/relatorios-de-energia",
            labelMessageKey: "links.energyReports",
          },
          {
            href: "/solucoes/oee/leitor-de-plc",
            labelMessageKey: "links.processMonitoring",
          },
          {
            href: "/solucoes/oee/energy-trac",
            labelMessageKey: "links.energyEfficiency",
          },
          {
            href: "/solucoes/oee/monitoramento-de-corrente",
            labelMessageKey: "links.currentMonitoring",
          },
          {
            href: "/energy-trac/supervisorio",
            labelMessageKey: "links.supervisoryOEE",
          },
        ],
      },
      {
        id: "cmms",
        titleMessageKey: "sections.cmms",
        links: [
          {
            href: "/cmms/cmms-tractian",
            labelMessageKey: "links.overview",
          },
          {
            href: "/solucoes/cmms/planejamento-e-programacao",
            labelMessageKey: "links.planningAndScheduling",
          },
          {
            href: "/solucoes/cmms/dashboard-indicadores-manutencao",
            labelMessageKey: "links.maintenanceKPIs",
          },
          {
            href: "/solucoes/cmms/geolocalizacao",
            labelMessageKey: "links.geolocation",
          },
          {
            href: "/solucoes/cmms/gerenciamento-de-ordens-de-servico",
            labelMessageKey: "links.workOrderManagement",
          },
          {
            href: "/solucoes/cmms/controle-de-estoque",
            labelMessageKey: "links.inventoryControl",
          },
          {
            href: "/cmms/procedimentos-automaticos",
            labelMessageKey: "links.automaticProcedures",
          },
          {
            href: "/solucoes/cmms/aplicativo-movel",
            labelMessageKey: "links.mobileApp",
          },
        ],
      },
      {
        id: "support",
        titleMessageKey: "sections.support",
        links: [
          { href: "/contato", labelMessageKey: "links.contactUs" },
          {
            href: "https://faq.tractian.com/pt-BR/",
            labelMessageKey: "links.helpCenter",
          },
          { href: "/politica/privacidade", labelMessageKey: "links.policies" },
          { href: "/termos-de-uso", labelMessageKey: "links.termsOfUse" },
          {
            href: "https://trust.tractian.com/",
            labelMessageKey: "links.trustCenter",
          },
        ],
      },
      [
        {
          id: "about",
          titleMessageKey: "sections.about",
          links: [
            { href: "/sobre", labelMessageKey: "links.aboutUs" },
            {
              href: "https://careers.tractian.com/",
              labelMessageKey: "links.careers",
            },
            { href: "/casos-de-estudo", labelMessageKey: "links.caseStudies" },
            { href: "/imprensa", labelMessageKey: "links.press" },
            { href: "/comunidade", labelMessageKey: "links.community" },
          ],
        },
        {
          id: "downloadApp",
          titleMessageKey: "sections.downloadApp",
          links: [
            {
              href: "https://apps.apple.com/app/tractian/id1590498655",
              labelMessageKey: "links.appleStore",
              target: "_blank",
            },
            {
              href: "https://play.google.com/store/apps/details?id=com.tractian.app&pli=1",
              labelMessageKey: "links.googlePlayStore",
              target: "_blank",
            },
            {
              href: "https://store.sap.com/dcp/en/product/display-2001016127_live_v1/tractian-ai-machine-intelligence-software",
              labelMessageKey: "links.sapStore",
              target: "_blank",
            },
          ],
        },
      ],
    ],
  },
  es: {
    partnerBadges: PARTNER_BADGES,
    socialLinks: SOCIAL_LINKS_ES,
    phone: "+528009538998",
    address: "Córdoba 23, Cuauhtémoc, 06700, Ciudad de México, CDMX",
    addressHref: "https://maps.app.goo.gl/U72zBvk5H5hbZW4L6",
    sections: [
      {
        id: "sensors",
        titleMessageKey: "sections.sensors",
        links: [
          {
            href: "/es/soluciones/monitoreo-condicion/smart-trac",
            labelMessageKey: "links.overview",
          },
          {
            href: "/es/soluciones/monitoreo-condicion/insights-y-diagnosticos",
            labelMessageKey: "links.insightsAndDiagnostics",
          },
          {
            href: "/es/sensor-de-vibracion-industrial/analisis-de-vibraciones",
            labelMessageKey: "links.vibrationAnalysis",
          },
          {
            href: "/es/soluciones/monitoreo-condicion/activos-monitoreados",
            labelMessageKey: "links.monitoredAssets",
          },
          {
            href: "/es/sensor-de-vibracion-industrial/supervisor",
            labelMessageKey: "links.supervisory",
          },
        ],
      },
      {
        id: "oee",
        titleMessageKey: "sections.oee",
        links: [
          {
            href: "/es/soluciones/oee/lector-plc",
            labelMessageKey: "links.overviewOEE",
          },
          {
            href: "/es/asset-performance-management",
            labelMessageKey: "links.assetPerformanceManagement",
          },
          {
            href: "/es/soluciones/oee/informes-de-energia",
            labelMessageKey: "links.energyReports",
          },
          {
            href: "/es/soluciones/oee/lector-plc",
            labelMessageKey: "links.processMonitoring",
          },
          {
            href: "/es/soluciones/oee/monitoreo-de-corriente",
            labelMessageKey: "links.currentMonitoring",
          },
          {
            href: "/es/soluciones/oee/energy-trac",
            labelMessageKey: "links.energyEfficiency",
          },
          {
            href: "/es/soluciones/oee/supervisor",
            labelMessageKey: "links.supervisoryOEE",
          },
        ],
      },
      {
        id: "cmms",
        titleMessageKey: "sections.cmms",
        links: [
          {
            href: "/es/soluciones/cmms",
            labelMessageKey: "links.overview",
          },
          {
            href: "/es/soluciones/cmms/software-de-planeacion-y-programacion",
            labelMessageKey: "links.planningAndScheduling",
          },
          {
            href: "/es/soluciones/cmms/software-gestion-de-ordenes-de-trabajo",
            labelMessageKey: "links.workOrderManagement",
          },
          {
            href: "/es/cmms/gestion-de-materiales",
            labelMessageKey: "links.materialsManagement",
          },
          {
            href: "/es/cmms/procedimentos-automaticos",
            labelMessageKey: "links.automaticProcedures",
          },
          {
            href: "/es/soluciones/cmms/aplicacion-movil",
            labelMessageKey: "links.mobileApp",
          },
          {
            href: "/es/cmms/tracos/geolocalizacion",
            labelMessageKey: "links.geolocation",
          },
          {
            href: "/es/cmms/tracos/indicadores-dashboards-mantenimiento",
            labelMessageKey: "links.kpisDashboards",
          },
        ],
      },
      {
        id: "support",
        titleMessageKey: "sections.support",
        links: [
          { href: "/es/contacto", labelMessageKey: "links.contactUs" },
          {
            href: "https://faq.tractian.com/es/",
            labelMessageKey: "links.helpCenter",
          },
          { href: "/politica/privacidade", labelMessageKey: "links.policies" },
          {
            href: "https://trust.tractian.com/",
            labelMessageKey: "links.trustCenter",
          },
        ],
      },
      [
        {
          id: "about",
          titleMessageKey: "sections.about",
          links: [
            { href: "/es/sobre", labelMessageKey: "links.aboutUs" },
            {
              href: "https://careers.tractian.com/",
              labelMessageKey: "links.careers",
            },
            {
              href: "/es/casos-de-estudio",
              labelMessageKey: "links.caseStudies",
            },
            { href: "/es/prensa", labelMessageKey: "links.press" },
            { href: "/es/comunidad", labelMessageKey: "links.community" },
          ],
        },
        {
          id: "downloadApp",
          titleMessageKey: "sections.downloadApp",
          links: [
            {
              href: "https://apps.apple.com/app/tractian/id1590498655",
              labelMessageKey: "links.appleStore",
              target: "_blank",
            },
            {
              href: "https://play.google.com/store/apps/details?id=com.tractian.app&pli=1",
              labelMessageKey: "links.googlePlayStore",
              target: "_blank",
            },
            {
              href: "https://store.sap.com/dcp/en/product/display-2001016127_live_v1/tractian-ai-machine-intelligence-software",
              labelMessageKey: "links.sapStore",
              target: "_blank",
            },
          ],
        },
      ],
    ],
  },
} as const;

export function isSectionGroup(
  section: FooterConfig["sections"][number],
): section is FooterSectionGroup {
  return Array.isArray(section);
}

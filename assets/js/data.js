/**
 * Wila CNC India Private Limited — Master Data Model
 * Bengaluru, Karnataka, India
 */

export const COMPANY = {
  name: "Wila CNC India Private Limited",
  tagline: "CNC / industrial machinery & Industrial Manufacturing",
  established: 2004,
  yearsInOperation: "22+",
  proprietor: "Management Team & Works Director",
  gst: "29AAACG1092F1ZK",
  phoneDisplay: "+91 98768 62830",
  phoneRaw: "+919876862830",
  waNumber: "919876862830",
  email: "contact@wilacncindiaprivat.in",
  address: "Bengaluru, Karnataka",
  addressShort: "Bengaluru, Karnataka",
  coordinates: "12.9716\u00b0 N, 77.5946\u00b0 E",
  businessType: "Manufacturer · Supplier · Industrial Services",
  teamSize: "25+",
  compliance: "ISO 9001:2015 Compliant Industrial Facility",
  heroImage: "assets/img/01.jpg",
  aboutImage: "assets/img/05.jpg"
};

export const CATALOG = [
  {
    "id": "wila-cnc-india-private-limited-precision-turned-parts",
    "code": "CNC-01",
    "name": "Precision CNC Turning & VMC Milling Components",
    "category": "Precision Machining",
    "spec": "High-tolerance multi-axis CNC turned and milled components engineered for automotive, industrial hydraulics, and aerospace sub-assemblies.",
    "specsList": [
      {
        "label": "Machining Tolerance",
        "val": "\u00b1 0.005 mm (5 Microns)"
      },
      {
        "label": "Work Envelope",
        "val": "Dia 10 mm to 400 mm \u00d7 800 mm Length"
      },
      {
        "label": "Materials Processed",
        "val": "SS 304/316, Alloy Steel, Brass, Aluminum 6061/7075"
      },
      {
        "label": "Surface Finish",
        "val": "Ra 0.4 \u00b5m Ground / Hard Anodized"
      }
    ],
    "price": "\u20b995,000",
    "priceUnit": "/ production lot"
  },
  {
    "id": "wila-cnc-india-private-limited-jigs-fixtures-tooling",
    "code": "CNC-02",
    "name": "Industrial Production Jigs, Fixtures & Inspection Gauges",
    "category": "Toolroom Engineering",
    "spec": "Custom clamping fixtures, welding jigs, and CMM inspection receiver gauges built to maximize production repeatability.",
    "specsList": [
      {
        "label": "Die Steel Grades",
        "val": "D2 / D3 / H13 Vacuum Hardened (HRC 58-62)"
      },
      {
        "label": "Manufacturing Method",
        "val": "Wire-Cut EDM, Surface Grinding & 4-Axis VMC"
      },
      {
        "label": "Repeatability",
        "val": "< 0.003 mm Clamping Consistency"
      },
      {
        "label": "Inspection",
        "val": "Full 3D CMM Inspection Report Included"
      }
    ],
    "price": "\u20b965,000",
    "priceUnit": "/ unit"
  },
  {
    "id": "wila-cnc-india-private-limited-custom-spares-assemblies",
    "code": "CNC-03",
    "name": "Heavy Industrial Machine Spares, Shafts & Gears",
    "category": "Industrial Spares",
    "spec": "Precision spline shafts, ground spur/helical gears, couplings, and mechanical assemblies built directly from drawings or reverse-engineered samples.",
    "specsList": [
      {
        "label": "Gear Accuracy",
        "val": "DIN Class 6 to Class 8 Tooth Ground"
      },
      {
        "label": "Heat Treatment",
        "val": "Gas Carburized & Quenched / Nitrided"
      },
      {
        "label": "Balancing",
        "val": "Dynamic Balancing to ISO 1940 G2.5"
      },
      {
        "label": "Documentation",
        "val": "Raw Material TC & Heat Code Traceability"
      }
    ],
    "price": "\u20b942,000",
    "priceUnit": "/ assembly"
  }
];

export function getWhatsAppInquiryUrl(machine, customMessage = "") {
  let text = "";
  if (machine) {
    const priceText = machine.price ? ` (listed at ${machine.price})` : "";
    text = `Hello ${COMPANY.name}, I am interested in the ${machine.name}${priceText}. Please share technical catalog and commercial quotation.`;
  } else if (customMessage) {
    text = customMessage;
  } else {
    text = `Hello ${COMPANY.name}, I would like to request an RFQ quotation for your industrial product range.`;
  }
  return `https://wa.me/${COMPANY.waNumber}?text=${encodeURIComponent(text)}`;
}

import { PrinterStatus } from "@/data/fechadoras/types"

type Printer = {
  id: number;
  name: string;
  reference: string;
  status: PrinterStatus;
  incidents: number;
  position: [number, number, number];
};

export const printers: Printer[] = [
  {
    id: 1,
    name: "Trepko - Mesa1",
    reference: "FCH-SOL-01",
    status: "running",
    incidents: 3,
    position: [4.2, 2, -5.4] as [number, number, number],
  },
  {
    id: 2,
    name: "Trepko - Mesa2",
    reference: "FCH-SOL-01",
    status: "running",
    incidents: 3,
    position: [4.2, 2, 0.5] as [number, number, number],
  },
  {
    id: 3,
    name: "Trepko - Display",
    reference: "FCH-SOL-01",
    status: "running",
    incidents: 3,
    position: [4.2, 2, 8.2] as [number, number, number],
  },

  {
    id: 4,
    name: "SIG",
    reference: "FCH-LIQ-01",
    status: "alarm",
    incidents: 7,
    position: [-5.5, 2, 0.3] as [number, number, number],
  },
  {
    id: 5,
    name: "Primo",
    reference: "FCH-LIQ-01",
    status: "alarm",
    incidents: 7,
    position: [14.2, 2, 0.3] as [number, number, number],
  },
  {
    id: 6,
    name: "Solidos industriales",
    reference: "FCH-LIQ-01",
    status: "alarm",
    incidents: 7,
    position: [-15, 2, 8] as [number, number, number],
  },
];


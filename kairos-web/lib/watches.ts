export type Watch = {
  id: string
  brand: string
  model: string
  reference?: string
  caseDiameterMm: number
  lugToLugMm: number
  imageUrl: string
  shape?: "round" | "rectangular"
}

const PLACEHOLDER = "/watches/placeholder.png"

export const watches: Watch[] = [
  {
    id: "rolex-submariner-date-126610ln",
    brand: "Rolex",
    model: "Submariner Date",
    reference: "126610LN",
    caseDiameterMm: 41,
    lugToLugMm: 47.6,
    imageUrl: PLACEHOLDER,
    shape: "round",
  },
  {
    id: "rolex-datejust-41-126334",
    brand: "Rolex",
    model: "Datejust 41",
    reference: "126334",
    caseDiameterMm: 41,
    lugToLugMm: 47.0,
    imageUrl: PLACEHOLDER,
    shape: "round",
  },
  {
    id: "omega-speedmaster-moonwatch-310-30-42-50-01-001",
    brand: "Omega",
    model: "Speedmaster Professional (Moonwatch)",
    reference: "310.30.42.50.01.001",
    caseDiameterMm: 42,
    lugToLugMm: 47.5,
    imageUrl: PLACEHOLDER,
    shape: "round",
  },
  {
    id: "omega-seamaster-diver-300m-210-30-42-20-01-001",
    brand: "Omega",
    model: "Seamaster Diver 300M",
    reference: "210.30.42.20.01.001",
    caseDiameterMm: 42,
    lugToLugMm: 50.0,
    imageUrl: PLACEHOLDER,
    shape: "round",
  },
  {
    id: "cartier-santos-medium-wssa0029",
    brand: "Cartier",
    model: "Santos de Cartier (Medium)",
    reference: "WSSA0029",
    caseDiameterMm: 35.1, // treated as primary size for MVP
    lugToLugMm: 41.9, // placeholder height equivalent for MVP
    imageUrl: PLACEHOLDER,
    shape: "rectangular",
  },
  {
    id: "cartier-tank-must-large",
    brand: "Cartier",
    model: "Tank Must (Large)",
    caseDiameterMm: 33.7, // treated as width for MVP
    lugToLugMm: 41.0, // treated as height for MVP
    imageUrl: PLACEHOLDER,
    shape: "rectangular",
  },
  {
    id: "tudor-black-bay-58-79030n",
    brand: "Tudor",
    model: "Black Bay 58",
    reference: "79030N",
    caseDiameterMm: 39,
    lugToLugMm: 47.0,
    imageUrl: PLACEHOLDER,
    shape: "round",
  },
  {
    id: "tudor-pelagos-42-m25600tn",
    brand: "Tudor",
    model: "Pelagos 42",
    reference: "M25600TN",
    caseDiameterMm: 42,
    lugToLugMm: 50.0,
    imageUrl: PLACEHOLDER,
    shape: "round",
  },
  {
    id: "grand-seiko-snowflake-sbga211",
    brand: "Grand Seiko",
    model: "SBGA211 Snowflake",
    reference: "SBGA211",
    caseDiameterMm: 41,
    lugToLugMm: 49.0,
    imageUrl: PLACEHOLDER,
    shape: "round",
  },
  {
    id: "seiko-prospex-samurai-srpf03",
    brand: "Seiko",
    model: "Prospex Samurai",
    reference: "SRPF03",
    caseDiameterMm: 43.8,
    lugToLugMm: 48.7,
    imageUrl: PLACEHOLDER,
    shape: "round",
  },
]

export function getWatches() {
  return watches
}

export function getWatchById(id: string) {
  return watches.find((w) => w.id === id)
}
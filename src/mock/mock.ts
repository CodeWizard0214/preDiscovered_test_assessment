export const USER_INFO = {
  name: "Esther Howard",
  role: "Admin",
  avatar_path: "/assets/img/user_01.png",
};

export const MATTERS_DATA = [
  {
    id: 1,
    name: "Jacob Jones",
    date: "09/18/2016",
    holds: 1,
    custodians: 2,
    sources: "text",
    status: "Public",
    release: "07/11/2019",
    acknowledgement: "101%",
    lead: "Ralph Edwards",
    type: "text",
  },
  {
    id: 2,
    name: "Ralph Edwards",
    date: "06/19/2014",
    holds: 1,
    custodians: 4,
    sources: "text",
    status: "Public",
    release: "06/19/2014",
    acknowledgement: "88.5%",
    lead: "Dannie Russel",
    type: "text",
  },
  {
    id: 3,
    name: "Floyd Miles",
    date: "07/18/2017",
    holds: 1,
    custodians: 5,
    sources: "text",
    status: "Public",
    release: "04/04/2018",
    acknowledgement: "88.5%",
    lead: "Wade Warren",
    type: "text",
  },
  {
    id: 4,
    name: "Jacob Jones",
    date: "09/18/2016",
    holds: 1,
    custodians: 2,
    sources: "text",
    status: "Public",
    release: "07/11/2019",
    acknowledgement: "101%",
    lead: "Ralph Edwards",
    type: "text",
  },
  {
    id: 5,
    name: "Ralph Edwards",
    date: "06/19/2014",
    holds: 1,
    custodians: 4,
    sources: "text",
    status: "Public",
    release: "06/19/2014",
    acknowledgement: "88.5%",
    lead: "Dannie Russel",
    type: "text",
  },
  {
    id: 6,
    name: "Floyd Miles",
    date: "07/18/2017",
    holds: 1,
    custodians: 5,
    sources: "text",
    status: "Public",
    release: "04/04/2018",
    acknowledgement: "88.5%",
    lead: "Wade Warren",
    type: "text",
  },
  {
    id: 7,
    name: "Jacob Jones",
    date: "09/18/2016",
    holds: 1,
    custodians: 2,
    sources: "text",
    status: "Public",
    release: "07/11/2019",
    acknowledgement: "101%",
    lead: "Ralph Edwards",
    type: "text",
  },
  {
    id: 8,
    name: "Ralph Edwards",
    date: "06/19/2014",
    holds: 1,
    custodians: 4,
    sources: "text",
    status: "Public",
    release: "06/19/2014",
    acknowledgement: "88.5%",
    lead: "Dannie Russel",
    type: "text",
  },
  {
    id: 9,
    name: "Floyd Miles",
    date: "07/18/2017",
    holds: 1,
    custodians: 5,
    sources: "text",
    status: "Public",
    release: "04/04/2018",
    acknowledgement: "88.5%",
    lead: "Wade Warren",
    type: "text",
  },
];

export const FILTER_BY = [
  {
    label: "Matter",
    value: "name",
  },
  {
    label: "Hold",
    value: "holds",
  },
  {
    label: "Custodian",
    value: "custodians",
  },
  {
    label: "Source",
    value: "sources",
  },
];

export const DOUGHNUT_DATA = [
  {
    label: "Litigation",
    value: "25",
  },
  {
    label: "Intellectual Property",
    value: "25",
  },
  {
    label: "Regulatory",
    value: "25",
  },
  {
    label: "Internal Investigation",
    value: "14",
  },
  {
    label: "Employment",
    value: "18",
  }
];

export const HORIZONTAL_CHART_DATA = {
  labels: ['Jacob Jones', 'Ralph Edwards', 'Jacob Jones', 'Floyd Miles', 'Jacob Jones'],
  datasets: [{
    data: [65, 59, 80, 85, 56],
    backgroundColor: "#F6921E",
    borderRadius: 30,
    borderSkipped: false,
  }]
};

export const VERTICAL_CHART_DATA = {
  labels: ['Jacob Jones', 'Ralph Edwards', 'Jacob Jones', 'Floyd Miles', 'Jacob Jones', 'Jacob Jones', 'Ralph Edwards', 'Jacob Jones', 'Floyd Miles'],
  datasets: [{
    data: [210, 120, 280, 190, 250, 320, 200, 200, 200],
    backgroundColor: "#F6921E",
    borderRadius: 30,
    borderSkipped: false,
    barPercentage: 0.5
  }]
};

export const HOLD_OVERVIEW_DATA = [
  {
    bgColor: "bg-secondary bg-opacity-10",
    iconBg: "bg-secondary",
    value: 343,
    desc: "Number of Active Holds",
    imgURL: "/assets/img/activeholds.svg"
  },
  {
    bgColor: "bg-primary-base bg-opacity-10",
    iconBg: "bg-primary-base",
    value: 300,
    desc: "Number of Active Custodians",
    imgURL: "/assets/img/activecustodians.svg"
  },
  {
    bgColor: "bg-secondary bg-opacity-10",
    iconBg: "bg-yellow-green",
    value: 5,
    desc: "Acknowledgement Rate",
    imgURL: "/assets/img/acknowrate.svg"
  },
  {
    bgColor: "bg-deep-violet bg-opacity-10",
    iconBg: "bg-deep-violet",
    value: 8,
    desc: "Number of assets with preservation",
    imgURL: "/assets/img/assetsnumber.svg"
  },
  {
    bgColor: "bg-deep-navy bg-opacity-10",
    iconBg: "bg-deep-navy",
    value: 8,
    desc: "Number of assets",
    imgURL: "/assets/img/assetsnumber.svg"
  }
]
export const delistAddedToRangeCols = [
  // {
  //   field: 'uniqueId',
  //   header: 'Unique ID',
  //   width: '100px',
  // },
  {
    field: "eventName",
    header: "Event Name",
    width: "150px",
  },
  {
    field: "dueDate",
    header: "Due Date",
    width: "150px",
  },
  {
    field: "status",
    header: "Status",
    width: "100px",
  },
  {
    field: "resetType",
    header: "Reset Type",
    width: "150px",
  },
  {
    field: "targetDate",
    header: "Launch Date",
    width: "150px",
  },
  {
    field: "group",
    header: "Group",
    width: "100px",
  },
  {
    field: "category",
    header: "Category",
    width: "150px",
  },
  {
    field: "department",
    header: "Department",
    width: "150px",
  },
  {
    field: "eventId",
    header: "Event ID",
    width: "150px",
  },
  {
    field: "clearancePriceCheck",
    header: "Clearance Price required",
    width: "100px",
  },
  {
    field: "orderStopDateCheck",
    header: "Order Stop Date check Required",
    width: "100px",
  },
  {
    field: "stopOrder",
    header: "Stop Order (Stock Rundown)",
    width: "100px",
  },
  {
    field: "buyer",
    header: "Buyer",
    width: "250px",
  },
  // {
  //   field: "buyerAssistant",
  //   header: "Buying Assistant",
  //   width: "250px",
  // },
  {
    field: "buyingAssistant",
    header: "Buying Assistant",
    width: "250px",
  },
  {
    field: "ownBrandManager",
    header: "Own Brand Manager",
    width: "250px",
  },
  {
    field: "seniorBuyingManager",
    header: "Senior Buying Manager",
    width: "250px",
  },
  {
    field: "merchandiser",
    header: "Merchandiser",
    width: "250px",
  },
  {
    field: "rangeResetManager",
    header: "Range Reset Manager",
    width: "250px",
  },
  {
    field: "categoryDirector",
    header: "Category Director",
    width: "250px",
  },
  {
    field: "supplyChainSplst",
    header: "Supply Chain Splst",
    width: "200px",
  },
];

export const yesOrNo = [
  {
    name: "Y",
    text: "Yes",
  },
  {
    name: "N",
    text: "No",
  },
];

export const supplierCodeOptions = [
  {
    label: "12345",
    text: "12345",
  },
  {
    label: "Supplier",
    text: "Supplier",
  },
  {
    label: "Code",
    text: "Code",
  },
];

export const delistToRangeData = [
  {
    eventName: "Household & Pet Food",
    dueDate: "05-Nov-22",
    status: "Not started",
    resetType: "Full Range Reset",
    targetDate: "3-Jan-22",
    group: "Frozen",
    category: "Frozen Food",
    department: "Frozen Fish",
    eventId: "10001",
    clearancePriceCheck: "Y",
    orderStopDateCheck: "Y",
    stopOrder: "Y",
    buyer: "helen.barker@morrisonsplc.co.uk",
    buyingAssistant: "paul.allman@morrisonsplc.co.uk",
    ownBrandManager: "naomi.anderson@morrisonsplc.co.uk",
    seniorBuyingManager: "sophie.olding@morrisonsplc.co.uk",
    merchandiser: "helen.barker@morrisonsplc.co.uk",
    rangeResetManager: "naomi.anderson@morrisonsplc.co.uk",
    categoryDirector: "sophie.olding@morrisonsplc.co.uk",
    supplyChainSplst: "Cristine Black",
  },
];

export const delistExistingProductsCols = [
  {
    field: "productId",
    header: "Product ID",
    width: "150px",
  },
  {
    field: "storeCode",
    header: "Store Numbers",
    width: "150px",
  },
  {
    field: "supplier",
    header: "Supplier",
    width: "150px",
  },
  {
    field: "supplierSiteNumber",
    header: "Supplier Site Number",
    width: "150px",
  },
  {
    field: "local",
    header: "Local",
    width: "80px",
  },
  {
    field: "pin",
    header: "Pin",
    width: "150px",
  },
  {
    field: "buyingMinIngredients",
    header: "Buying MIN / Ingredients",
    width: "150px",
  },
];

export const actionTypes = [
  { label: "Delist MIN", value: "Delist MIN" },
  { label: "MIN Extension", value: "MIN Extension" },
  { label: "MIN Restriction", value: "MIN Restriction" },
  { label: "Space Extension", value: "Space Extension" },
  { label: "Space Restriction", value: "Space Restriction" },
  { label: "New MIN", value: "New MIN" },
  { label: "New PIN", value: "New PIN" },
  { label: "Delist PIN", value: "Delist PIN" },
  { label: "New Ingredient MIN", value: "New Ingredient MIN" },
  { label: "Delist Ingredient MIN", value: "Delist Ingredient MIN" },
  { label: "Supplier Change", value: "Supplier Change" },
];
// export const actionTypes = [
//   { label: "Delist Product (MIN)", value: "Delist Product (MIN)" },
//   {
//     label: "Product Distribution Increase (MIN)",
//     value: "Product Distribution Increase (MIN)",
//   },
//   {
//     label: "Product Distribution Decrease (MIN)",
//     value: "Product Distribution Decrease (MIN)",
//   },
//   {
//     label: "Product Shelf Space Increase",
//     value: "Product Shelf Space Increase",
//   },
//   {
//     label: "Product Shelf Space Decrease",
//     value: "Product Shelf Space Decrease",
//   },
//   { label: "New Product (MIN)", value: "New Product (MIN)" },
//   { label: "New Outercase Code (PIN)", value: "New Outercase Code (PIN)" },
//   {
//     label: "Delist Outercase Code (PIN)",
//     value: "Delist Outercase Code (PIN)",
//   },
//   { label: "New Ingredient (MIN)", value: "New Ingredient (MIN)" },
//   { label: "Delist Ingredient (MIN)", value: "Delist Ingredient (MIN)" },
//   { label: "Supplier Change", value: "Supplier Change" },
// ];

export const supplierCodes = [
  {
    label: "1001149 - RB UK",
    value: "1001149",
  },
  {
    label: "1002009 - PROFOOT",
    value: "1002009",
  },
  {
    label: "1001100 - G R LANE",
    value: "1001100",
  },
  {
    label: "1002662 - SEVENSEA",
    value: "1002662",
  },
];

export const salesChannels = [
  {
    label: "Online",
    value: "online",
  },
  {
    label: "Retail",
    value: "retail",
  },
  {
    label: "Wholesale",
    value: "wholesale",
  },
];
//Product List

export const productListCols = [
  {
    field: "actionType",
    header: "Action/ Type",
    width: "100px",
  },
  {
    field: "lineStatus",
    header: "Status",
    width: "200px",
  },
  {
    field: "min",
    header: "MIN Number",
    width: "100px",
  },
  {
    field: "pin",
    header: "PIN",
    width: "100px",
  },
  {
    field: "ingredientMin",
    header: "No. of Unique Ingredient MIN",
    width: "100px",
  },
  {
    field: "legacyItemNumbers",
    header: "Legacy Code",
    width: "200px",
  },
  {
    field: "man",
    header: "MAN Number",
    width: "100px",
  },
  {
    field: "description",
    header: "Product Description",
    width: "200px",
  },

  // {
  //   field: 'noOfUniqueIngredientMin',
  //   header: 'No. of Unique Ingredient MIN',
  //   width: '100px',
  // },
  {
    field: "replaceMin",
    header: "Replace MIN/ PIN",
    width: "100px",
  },
  {
    field: "replaceMinDescription",
    header: "Description (Product description of the replacing MIN)",
    width: "200px",
  },
  {
    field: "unitretailInc",
    header: "Unit Retail (Inc VAT)",
    width: "100px",
  },
  {
    field: "unitretailEx",
    header: "Unit Retail (Ex VAT)",
    width: "100px",
  },
  {
    field: "unitcost",
    header: "Unit Cost",
    width: "200px",
  },
  {
    field: "casecost",
    header: "Case Cost",
    width: "200px",
  },
  {
    field: "packquantity",
    header: "Case Size",
    width: "200px",
  },
  {
    field: "supplierId",
    header: "Supplier Name",
    width: "200px",
  },
  {
    field: "supplierSiteNameCode",
    header: "Supplier Site Name & Code",
    width: "200px",
  },
  {
    field: "local",
    header: "Local",
    width: "200px",
  },
  {
    field: "perStorepPerWeek",
    header: "Per Store Per Week",
    width: "200px",
  },
  {
    field: "onlineCFC",
    header: "Online (CFC)",
    width: "200px",
  },
  {
    field: "onlineStorePick",
    header: "Online Store Pick",
    width: "200px",
  },
  {
    field: "wholesale",
    header: "Wholesale",
    width: "200px",
  },
  {
    field: "currentnoofrangedstores",
    header: "Current No. of Ranged Stores",
    width: "200px",
  },
  {
    field: "newnoofrangestores",
    header: "New No. of Range Stores",
    width: "200px",
  },
  // {
  //   field: "numberOfRangeStores",
  //   header: "New Number of Range Stores",
  //   width: "150px",
  // },

  {
    field: "currentVersusNewStores",
    header: "Current Versus New Stores",
    width: "200px",
  },
  {
    field: "storesRangedCurrentVsProposed",
    header: "% stores ranged (current vs proposed)",
    width: "200px",
  },
  {
    field: "currentShelfFill",
    header: "Current Shelf Fill (Units)",
    width: "200px",
  },
  {
    field: "newShelfFill",
    header: "New Shelf Fill (Units)",
    width: "200px",
  },
  {
    field: "currentshelffill_vs_newfill",
    header: "Current Shelf Fill Vs New Fill",
    width: "200px",
  },
  {
    field: "currentshelffill_vs_newfill_percant",
    header: "Current Shelf Fill Vs New Fill %",
    width: "200px",
  },
  {
    field: "ownBrand",
    header: "Own Brand",
    width: "200px",
  },
  {
    field: "includeInClearancePricing",
    header: "Include In Clearance Pricing",
    width: "200px",
  },
  {
    field: "includeInStoreWastage",
    header: "Include In Store Wastage",
    width: "200px",
  },
  {
    field: "clearDepotBy",
    header: "Clear Depot By",
    width: "200px",
  },

  {
    field: "supplierCommitment",
    header: "Supplier Commitment Including Fixed Buys/Seasonal",
    width: "200px",
  },

  {
    field: "finalStopOrderDate",
    header: "Final Stop Order Date",
    width: "200px",
  },
  {
    field: "systemSuggestedStopOrderDate",
    header: "System Suggested Stop Order date",
    width: "200px",
  },
  {
    field: "lastPoDate",
    header: "Last PO Date",
    width: "200px",
  },
  {
    field: "depotShelfLifeMinimum",
    header: "Depot Shelf Life (Minimum guaranteed for self life delivery)",
    width: "200px",
  },
  {
    field: "productShelfLifeInstore",
    header: "Product Shelf Life (Instore self life)",
    width: "200px",
  },
  {
    field: "shelfLifeatManufacture",
    header: "Shelf Life at Manufacture",
    width: "200px",
  },

  {
    field: "totalstock",
    header: "Total Stock",
    width: "200px",
  },
  {
    field: "storeStockUnit",
    header: "Store Stock Unit",
    width: "200px",
  },
  {
    field: "depotStockUnit",
    header: "Depot Stock Unit",
    width: "200px",
  },
  {
    field: "openPos",
    header: "Open POs",
    width: "200px",
  },
  {
    field: "forward_forecast_to_launch",
    header: "Forward Forecast to Launch",
    width: "200px",
  },
  {
    field: "averageWeeklyVolume",
    header: "Average Weekly Volume (units)",
    width: "200px",
  },
  {
    field: "weeksCoveronTotalStockonHandtoResetDate",
    header: "Weeks Cover on Total Stock on Hand to Reset Date",
    width: "200px",
  },
  {
    field: "forcastedWeeksCovertoResetDate",
    header: "Forcasted Weeks Cover to Reset Date",
    width: "200px",
  },
  {
    field: "excessstock",
    header: "Excess stock",
    width: "200px",
  },
  {
    field: "safewaybrandedequivalent",
    header: "Safeway Branded Equivalent",
    width: "200px",
  },
  {
    field: "effectiveDateFrom",
    header: "Effective Date (From)",
    width: "200px",
  },
  {
    field: "effectiveDateTo",
    header: "Effective Date (To)",
    width: "200px",
  },
  {
    field: "existingSupplier",
    header: "Existing Supplier",
    width: "150px",
  },
  {
    field: "existingSupplierSite",
    header: "Existing Supplier Site",
    width: "150px",
  },
  {
    field: "newSupplier",
    header: "New Supplier",
    width: "150px",
  },
  {
    field: "newSupplierSite",
    header: "New Supplier Site",
    width: "150px",
  },
  {
    field: "noOfRecipeMin",
    header: "No. of Recipe MIN",
    width: "200px",
  },
  {
    field: "depotClearbyReservedQtyRetail",
    header: "Depot Clear by, Reserved Qty (Retail)",
    width: "200px",
  },
  {
    field: "depotClearbyReservedQtyWholesale",
    header: "Depot Clear by, Reserved Qty (Wholesale)",
    width: "200px",
  },
  {
    field: "depotClearbyReservedQtyOnline",
    header: "Depot Clear by, Reserved Qty (Online)",
    width: "200px",
  },
  {
    field: "depotClearbyReservedQtyTotal",
    header: "Depot Clear by, Reserved Qty (Total)",
    width: "200px",
  },

  {
    field: "comments",
    header: "Comments",
    width: "200px",
  },
  // {
  //   field: "barcode",
  //   header: "Barcode",
  //   width: "200px",
  // },

  // {
  //   field: "excessstock",
  //   header: "Excess stock",
  //   width: "200px",
  // },

  // {
  //   field: "storeCode",
  //   header: "Store Number",
  //   width: "150px",
  // },
];

export const massActions = [
  {
    value: "Delete",
    label: "Delete",
  },
  {
    value: "Derange",
    label: "Derange",
  },
  {
    value: "Delist",
    label: "Delist",
  },
  {
    value: "Draft",
    label: "Draft",
  },
  {
    value: "Confirmed",
    label: "Confirmed",
  },
  {
    value: "Cancel",
    label: "Cancel",
  },
  {
    value: "Clear Depot By: Week-1",
    label: "Clear Depot By: Week-1",
  },
  {
    value: "Clear Depot By: Week-2",
    label: "Clear Depot By: Week-2",
  },
  {
    value: "Clear Depot By: Week-3",
    label: "Clear Depot By: Week-3",
  },
  {
    value: "Clear Depot By: Week-4",
    label: "Clear Depot By: Week-4",
  },
  {
    value: "Clear Depot By: Week-5",
    label: "Clear Depot By: Week-5",
  },
  {
    value: "Clear Depot By: Week-6",
    label: "Clear Depot By: Week-6",
  },
  {
    value: "Clear Depot By: Week-7",
    label: "Clear Depot By: Week-7",
  },
  {
    value: "Clear Depot By: Week-8",
    label: "Clear Depot By: Week-8",
  },
  {
    value: "EXCLUDE FROM",
    label: "EXCLUDE FROM",
  },
  {
    value: "MARKDOWN PRICING",
    label: "MARKDOWN PRICING",
  },
  {
    value: "INCLUDE IN",
    label: "INCLUDE IN",
  },
];

export const placeholderCols = [
  {
    field: "min",
    header: "MIN",
    width: "100px",
  },
  {
    field: "description",
    header: "Description",
    width: "200px",
  },
  {
    field: "ownBrand",
    header: "Own Brand",
    width: "100px",
  },
  {
    field: "barcode",
    header: "Bar Code",
    width: "200px",
  },
  {
    field: "existingSupplier",
    header: "Supplier Code",
    width: "240px",
  },
  {
    field: "existingSupplierSite",
    header: "Supplier Site Code",
    width: "240px",
  },
  {
    field: "packquantity",
    header: "Case Pack",
    width: "200px",
  },
  {
    field: "newnoofrangestores",
    header: "New No.of Range Stores",
    width: "150px",
  },
  {
    field: "local",
    header: "Local",
    width: "100px",
  },

  {
    field: "onlineCFC",
    header: "Online (CFC)",
    width: "100px",
  },

  {
    field: "onlineStorePick",
    header: "Online Store Pick",
    width: "150px",
  },
  {
    field: "wholesale",
    header: "Wholesale",
    width: "150px",
  },
  {
    field: "comments",
    header: "Comments",
    width: "150px",
  },
];

export const replacementAssociationCols = [
  // {
  //   field: "min",
  //   header: "Delist MIN/PIN",
  //   width: "150px",
  // },
  {
    field: "delist_min_pin",
    header: "Delist MIN/PIN",
    width: "150px",
  },
  {
    field: "replaceMin",
    header: "Replace MIN/PIN",
    width: "200px",
  },
  {
    field: "effectiveDateFrom",
    header: "Effective Date(From)",
    width: "200px",
  },
  {
    field: "effectiveDateTo",
    header: "Effective Date(To)",
    width: "200px",
  },
  {
    field: "comments",
    header: "Comments",
    width: "200px",
  },
];

export const lineStatusOptions = [
  {
    value: "Request For Stock Count",
    label: "Request For Stock Count",
  },
  {
    value: "Draft",
    label: "Draft",
  },
];

export const supplierCode_Supplier = {
  StatusCode: "200",
  StatusMessage: "Success",
  SupplierInfo: [
    {
      stepSupplierId: "S1359705",
      ebsSupplierId: "2000185",
      ebsSupplierNumber: "2022910",
      supplierName: "THE NASDAQ STOCK MARKET",
      supplierType: "VENDOR",
      supplierStatus: "Active",
      dealCustAccNo: "",
      SiteInfo: [
        {
          stepSiteId: "T1361172",
          stepSupplierId: "S1359705",
          ebsSiteId: "1526000",
          ebsSupplierId: "2000185",
          siteName: "pizza",
          mainframeSupplierNo: "8712",
          tsSiteId: "2022910",
          rmsSupplier: "Y",
          primaryPaySite: "Y",
          siteStatus: "Active",
          siteOperatingUnit: "82",
        },
        {
          stepSiteId: "T1361173",
          stepSupplierId: "S1359706",
          ebsSiteId: "1526000",
          ebsSupplierId: "2000186",
          siteName: "pizza",
          mainframeSupplierNo: "8712",
          tsSiteId: "2022910",
          rmsSupplier: "Y",
          primaryPaySite: "Y",
          siteStatus: "Active",
          siteOperatingUnit: "82",
        },
      ],
    },
  ],
};

export const supplierSearchSiteCode_Site = {
  StatusCode: "200",
  StatusMessage: "Success",
  SiteInfo: [
    {
      stepSiteId: "T963891",
      stepSupplierId: "S107926",
      ebsSiteId: "20005",
      ebsSupplierId: "2917",
      siteName: "ASHBY",
      mainframeSupplierNo: "",
      tsSiteId: "1002917",
      toleranceName: "11000",
      SupplierInfo: {
        stepSupplierId: "S107926",
        ebsSupplierNumber: "1002917",
        supplierName: "PLADIS",
        supplierType: "",
        supplierStatus: "Active",
        dealCustAccNo: "",
      },
    },
    {
      stepSiteId: "T963890",
      stepSupplierId: "S107927",
      ebsSiteId: "20006",
      ebsSupplierId: "2916",
      siteName: "ASHBY",
      mainframeSupplierNo: "",
      tsSiteId: "1002917",
      toleranceName: "11000",
      SupplierInfo: {
        stepSupplierId: "S107926",
        ebsSupplierNumber: "1002917",
        supplierName: "PLADIS",
        supplierType: "",
        supplierStatus: "Active",
        dealCustAccNo: "",
      },
    },
  ],
};
export const ingredientTableCols = [
  {
    field: "ingredientMin",
    header: "Ingredient MIN",
    width: "100px",
  },
  {
    field: "ingredientDescription",
    header: "Description",
    width: "200px",
  },
];
export const pinTableCols = [
  {
    field: "packNumber",
    header: "Pin Number",
    width: "100px",
  },
  {
    field: "packQuantity",
    header: "Case Size",
    width: "100px",
  },
];
export const pinTableDummyData = [
  {
    packNumber: "100003047",
    packQuantity: 12,
  },
  {
    packNumber: "100003048",
    packQuantity: 24,
  },
  {
    packNumber: "100005000",
    packQuantity: 36,
  },
];

export const ingredientList = [
  {
    itemNumber: "111043100",
    productName: "ALTOS DE IBERIA BONELESS JAMON SERRANO (2X5KG)",
    productType: "RECIPE",
    counterTicketProductTitle: "Altos De Iberia Boneless Jamon Serrano (2X5KG)",
  },
  {
    itemNumber: "111043140",
    productName: "ALTOS DE IBERIA BONELESS JAMON SERRANO (3X5KG)",
    productType: "RECIPE",
    counterTicketProductTitle: "Altos De Iberia Boneless Jamon Serrano (3X5KG)",
  },
];
// export const rangedStoresTableCols = [
//   {
//     field: "storeNo",
//     header: "Store No.",
//     width: "80px",
//   },
//   {
//     field: "storeName",
//     header: "Store Name",
//     width: "120px",
//   },
//   {
//     field: "currentShelfFill",
//     header: "Current Shelf Fill",
//     width: "80px",
//   },
//   {
//     field: "storeStockUnit",
//     header: "Store Stock Unit",
//     width: "80px",
//   },
//   {
//     field: "LRFToLaunchDate",
//     header: "LRF To Launch Date",
//     width: "80px",
//   },
//   {
//     field: "excessStock",
//     header: "Excess Stock",
//     width: "80px",
//   },
// ];
export const rangedStoresTableData = [
  {
    storeNo: "1",
    storeName: "Chingford",
    currentShelfFill: "25",
    storeStockUnit: "15",
    LRFToLaunchDate: "5",
    excessStock: "2",
  },
  {
    storeNo: "2",
    storeName: "Bradford",
    currentShelfFill: "24",
    storeStockUnit: "16",
    LRFToLaunchDate: "11",
    excessStock: null,
  },
  {
    storeNo: "3",
    storeName: "Keighley",
    currentShelfFill: "23",
    storeStockUnit: "13",
    LRFToLaunchDate: "10",
    excessStock: "5",
  },
];

export const clearancePricingOptions = [
  {
    label: "Include In All Price Actions",
    value: "Include In All Price Actions",
  },
];

// export const depotStockUnitTableCols = [
//   {
//     field: "depot",
//     header: "Depot",
//     width: "80px",
//   },
//   {
//     field: "aggregatedStoreStockUnit",
//     header: "Aggregated Store Stock Unit",
//     width: "80px",
//   },
//   {
//     field: "depotStockUnit",
//     header: "Depot Stock Unit",
//     width: "80px",
//   },
//   {
//     field: "openPos",
//     header: "Open Purchase Orders",
//     width: "80px",
//   },
//   {
//     field: "totalPurchaseOrdersForecast",
//     header: "PO Forcast",
//     width: "80px",
//   },
//   {
//     field: "total3MonthsPOHistory",
//     header: "PO History 3 Months",
//     width: "80px",
//   },
//   {
//     field: "salesForcastToTargetDate",
//     header: "Sales Forcast To Target Date",
//     width: "80px",
//   },
//   {
//     field: "systemAdvisedStopOrderDate",
//     header: "System Advised Stop Order Date",
//     width: "80px",
//   },
//   {
//     field: "depotClearDate",
//     header: "Depot Clear Date",
//     width: "80px",
//   },
//   {
//     field: "reserveQuantityRetail",
//     header: "Reserve Quantity (Retail)",
//     width: "80px",
//   },
//   {
//     field: "reserveQuantityWholesale",
//     header: "Reserve Quantity (Wholesale)",
//     width: "80px",
//   },
//   {
//     field: "reserveQuantityOnline",
//     header: "Reserve Quantity (Online)",
//     width: "80px",
//   },
//   {
//     field: "reserveQuantityTotal",
//     header: "Reserve Quantity (Total)",
//     width: "80px",
//   },
//   {
//     field: "lastPoDate",
//     header: "Last PO Date",
//     width: "80px",
//   },
//   {
//     field: "weeksCoveronTotalStockonHandtoResetDate",
//     header: "Weeks Cover",
//     width: "80px",
//   },
//   {
//     field: "forcastedWeeksCovertoResetDate",
//     header: "Forcasted Weeks Cover",
//     width: "80px",
//   },
// ];

export const depotStockTableData = [
  {
    depot: "76",
    aggregatedStoreStockUnit: "126",
    depotStockUnit: "95",
    openPos: "0",
    totalPurchaseOrdersForecast: "0",
    total3MonthsPOHistory: "0",
    salesForcastToTargetDate: "NA",
    systemAdvisedStopOrderDate: "NA",
    depotClearDate: "02/07/2022",
    reserveQuantityRetail: "0",
    reserveQuantityWholesale: "100",
    reserveQuantityOnline: "50",
    reserveQuantityTotal: "150",
    lastPoDate: "NA",
    weeksCover: "No forcast sales",
    forcastedWeeksCover: "No forcast sales",
  },
];

export const depotStockButtons = [
  "East England",
  "East Midlands",
  "Great London",
  "North East",
  "North West",
  "Scotland",
  "South East",
  "South West",
  "West Midlands",
  "Yorkshire",
];
export const recipeTableCols = [
  {
    field: "itemNumber",
    header: "Recipe MIN",
    width: "100px",
  },
  {
    field: "productName",
    header: "Description",
    width: "200px",
  },
];
export const rangedStoresTableCols = [
  {
    field: "locationId",
    header: "Store No.",
    width: "80px",
  },
  {
    field: "locationName",
    header: "Store Name",
    width: "120px",
  },
  {
    field: "currentShelfFill",
    header: "Current Shelf Fill",
    width: "80px",
  },
  {
    field: "quantity",
    header: "Store Stock Unit",
    width: "80px",
  },
  {
    field: "lrfQuantity",
    header: "LRF To Launch Date",
    width: "100px",
  },
  {
    field: "excessStock",
    header: "Excess Stock",
    width: "80px",
  },
];
export const storeViewDummyRes = {
  storeView: [
    {
      locationId: "96",
      locationName: "Port Talbot - Baglan",
      quantity: "0.0",
      currentShelfFill: "240",
      lrfQuantity: "1.2578799020474882",
      excessStock: "1.2578799020474882",
    },
    {
      locationId: "73",
      locationName: "Tamworth",
      quantity: "0.0",
      currentShelfFill: "240",
      lrfQuantity: "10726.0",
      excessStock: "10726.0",
    },
    {
      locationId: "214",
      locationName: "Penrith",
      quantity: "0.0",
      currentShelfFill: "132",
      lrfQuantity: "0.0",
      excessStock: "0.0",
    },
    {
      locationId: "576",
      locationName: "Croydon",
      quantity: "0.0",
      currentShelfFill: "240",
      lrfQuantity: "0.0",
      excessStock: "0.0",
    },
  ],
};

export const depotStockUnitTableCols = [
  {
    field: "locationId",
    header: "Depot",
    width: "80px",
  },
  {
    field: "aggDptQty",
    header: "Aggregated Store Stock Unit",
    width: "80px",
  },
  {
    field: "qty",
    header: "Depot Stock Unit",
    width: "80px",
  },
  {
    field: "openPOqty",
    header: "Open Purchase Orders",
    width: "80px",
  },
  {
    field: "forecastPOqty",
    header: "PO Forcast",
    width: "80px",
  },
  {
    field: "historyPOqty",
    header: "PO History 3 Months",
    width: "80px",
  },
  {
    field: "salesForecastQuantity",
    header: "Sales Forcast To Target Date",
    width: "80px",
  },
  {
    field: "sysSODate",
    header: "System Advised Stop Order Date",
    width: "80px",
  },
  {
    field: "depotClearDate",
    header: "Depot Clear Date",
    width: "80px",
  },
  {
    field: "retailReserveQuantity",
    header: "Reserve Quantity (Retail)",
    width: "80px",
  },
  {
    field: "wholesaleReserveQuantity",
    header: "Reserve Quantity (Wholesale)",
    width: "80px",
  },
  {
    field: "onlineReserveQuantity",
    header: "Reserve Quantity (Online)",
    width: "80px",
  },
  {
    field: "totalReserverQuantity",
    header: "Reserve Quantity (Total)",
    width: "80px",
  },
  {
    field: "lastPODate",
    header: "Last PO Date",
    width: "80px",
  },
  {
    field: "weeksCover",
    header: "Weeks Cover",
    width: "80px",
  },
  {
    field: "forecastWeeksCover",
    header: "Forcasted Weeks Cover",
    width: "80px",
  },
];

export const depotViewResDummy = {
  depotView: [
    {
      locationId: "781",
      aggDptQty: "0.0",
      qty: "8046.0",
      openPOqty: "1260.0",
      forecastPOqty: "90720.0",
      historyPOqty: "64638.0",
      salesForecastQuantity: "100000.0",
      sysSODate: "2022-10-20",
      depotClearDate: "2023-01-07",
      retailReserveQuantity: "0.0",
      onlineReserveQuantity: "0.0",
      wholesaleReserveQuantity: "0.0",
      totalReserverQuantity: "0.0",
      lastPODate: "2023-01-05",
      weeksCover: null,
      forecastWeeksCover: null,
    },
    {
      locationId: "991",
      aggDptQty: "0.0",
      qty: "3582.0",
      openPOqty: "630.0",
      forecastPOqty: "95760.0",
      historyPOqty: "28206.0",
      salesForecastQuantity: "100000.0",
      sysSODate: "2022-10-20",
      depotClearDate: "2023-01-07",
      retailReserveQuantity: "0.0",
      onlineReserveQuantity: "0.0",
      wholesaleReserveQuantity: "0.0",
      totalReserverQuantity: "0.0",
      lastPODate: "2023-01-04",
      weeksCover: null,
      forecastWeeksCover: null,
    },
  ],
};

export const regionsButtonsDummy = {
  regions: [
    {
      regionName: "Greater London",
      locations: [
        {
          locationId: "1",
          locationName: "Chingford",
        },
        {
          locationId: "92",
          locationName: "Enfield",
        },
        {
          locationId: "113",
          locationName: "Erith",
        },
        {
          locationId: "191",
          locationName: "Canning Town",
        },
        {
          locationId: "205",
          locationName: "Ealing",
        },
        {
          locationId: "309",
          locationName: "Stratford",
        },
        {
          locationId: "318",
          locationName: "Sutton",
        },
        {
          locationId: "316",
          locationName: "Sidcup",
        },
        {
          locationId: "313",
          locationName: "Wood Green",
        },
        {
          locationId: "311",
          locationName: "Thamesmead",
        },
        {
          locationId: "299",
          locationName: "Hatch End",
        },
        {
          locationId: "296",
          locationName: "Becontree Heath",
        },
        {
          locationId: "306",
          locationName: "Peckham",
        },
        {
          locationId: "307",
          locationName: "Queensbury",
        },
        {
          locationId: "304",
          locationName: "Holloway",
        },
        {
          locationId: "305",
          locationName: "Palmers Green",
        },
        {
          locationId: "302",
          locationName: "Acton",
        },
        {
          locationId: "373",
          locationName: "Colindale",
        },
        {
          locationId: "388",
          locationName: "Borehamwood",
        },
        {
          locationId: "527",
          locationName: "Mitcham",
        },
        {
          locationId: "447",
          locationName: "Welling",
        },
        {
          locationId: "410",
          locationName: "Stamford Hill",
        },
        {
          locationId: "549",
          locationName: "Harrow",
        },
        {
          locationId: "576",
          locationName: "Croydon",
        },
      ],
    },
    {
      regionName: "Gibraltar",
      locations: [
        {
          locationId: "452",
          locationName: "Gibraltar",
        },
      ],
    },
    {
      regionName: "South East",
      locations: [
        {
          locationId: "106",
          locationName: "Banbury",
        },
        {
          locationId: "154",
          locationName: "Milton Keynes - Leisure Plaza",
        },
        {
          locationId: "158",
          locationName: "Crowborough",
        },
        {
          locationId: "140",
          locationName: "Strood",
        },
        {
          locationId: "315",
          locationName: "Maidstone",
        },
        {
          locationId: "298",
          locationName: "Gravesend",
        },
        {
          locationId: "297",
          locationName: "Folkestone",
        },
        {
          locationId: "294",
          locationName: "Caterham",
        },
        {
          locationId: "295",
          locationName: "Walderslade",
        },
        {
          locationId: "293",
          locationName: "Canterbury",
        },
        {
          locationId: "353",
          locationName: "Hastings",
        },
        {
          locationId: "354",
          locationName: "Horndean",
        },
        {
          locationId: "359",
          locationName: "Reading",
        },
        {
          locationId: "355",
          locationName: "Isle of Wight - Newport",
        },
        {
          locationId: "356",
          locationName: "Oxted",
        },
        {
          locationId: "364",
          locationName: "Totton",
        },
        {
          locationId: "362",
          locationName: "Seaford",
        },
        {
          locationId: "360",
          locationName: "Reigate",
        },
        {
          locationId: "361",
          locationName: "Isle of Wight - Lake",
        },
        {
          locationId: "404",
          locationName: "Weybridge",
        },
        {
          locationId: "402",
          locationName: "Herne Bay",
        },
        {
          locationId: "367",
          locationName: "Woking",
        },
        {
          locationId: "346",
          locationName: "Bracknell",
        },
        {
          locationId: "345",
          locationName: "Basingstoke",
        },
        {
          locationId: "429",
          locationName: "Fleet",
        },
        {
          locationId: "558",
          locationName: "Sittingbourne",
        },
        {
          locationId: "553",
          locationName: "Aldershot",
        },
        {
          locationId: "441",
          locationName: "Dover",
        },
        {
          locationId: "522",
          locationName: "Portsmouth - Victory Retail Park",
        },
        {
          locationId: "572",
          locationName: "Isle of Sheppey",
        },
        {
          locationId: "546",
          locationName: "Eastbourne",
        },
        {
          locationId: "672",
          locationName: "Carterton",
        },
        {
          locationId: "630",
          locationName: "Littlehampton",
        },
        {
          locationId: "641",
          locationName: "Worthing",
        },
      ],
    },
    {
      regionName: "North West",
      locations: [
        {
          locationId: "37",
          locationName: "Dukinfield",
        },
        {
          locationId: "32",
          locationName: "Heywood",
        },
        {
          locationId: "28",
          locationName: "Eccles",
        },
        {
          locationId: "22",
          locationName: "Manchester - Failsworth",
        },
        {
          locationId: "21",
          locationName: "St Helens - Baxters Lane",
        },
        {
          locationId: "19",
          locationName: "Widnes",
        },
        {
          locationId: "57",
          locationName: "Oldham",
        },
        {
          locationId: "59",
          locationName: "Bolton - Atlas Mills",
        },
        {
          locationId: "53",
          locationName: "Rochdale",
        },
        {
          locationId: "55",
          locationName: "Kendal",
        },
        {
          locationId: "45",
          locationName: "Bolton",
        },
        {
          locationId: "41",
          locationName: "Preston Riversway",
        },
        {
          locationId: "44",
          locationName: "Carlisle",
        },
        {
          locationId: "38",
          locationName: "Blackburn",
        },
        {
          locationId: "71",
          locationName: "Warrington",
        },
        {
          locationId: "74",
          locationName: "Morecambe",
        },
        {
          locationId: "77",
          locationName: "Winsford",
        },
        {
          locationId: "60",
          locationName: "Chorley",
        },
        {
          locationId: "66",
          locationName: "Blackpool",
        },
        {
          locationId: "93",
          locationName: "Denton",
        },
        {
          locationId: "94",
          locationName: "Barrow-in-Furness",
        },
        {
          locationId: "97",
          locationName: "Liverpool - Belle Vale",
        },
        {
          locationId: "104",
          locationName: "Nelson",
        },
        {
          locationId: "105",
          locationName: "St Helens - Boundary Road",
        },
        {
          locationId: "151",
          locationName: "Leyland",
        },
        {
          locationId: "119",
          locationName: "Hyde",
        },
        {
          locationId: "122",
          locationName: "Cheadle Heath",
        },
        {
          locationId: "120",
          locationName: "Crewe",
        },
        {
          locationId: "134",
          locationName: "Southport",
        },
        {
          locationId: "131",
          locationName: "Chester - Liverpool Road",
        },
        {
          locationId: "138",
          locationName: "Liverpool - Speke",
        },
        {
          locationId: "149",
          locationName: "Whitefield",
        },
        {
          locationId: "210",
          locationName: "Ellesmere Port",
        },
        {
          locationId: "216",
          locationName: "Reddish",
        },
        {
          locationId: "217",
          locationName: "Swinton",
        },
        {
          locationId: "214",
          locationName: "Penrith",
        },
        {
          locationId: "215",
          locationName: "Bredbury",
        },
        {
          locationId: "212",
          locationName: "Harwood",
        },
        {
          locationId: "213",
          locationName: "Ormskirk",
        },
        {
          locationId: "255",
          locationName: "Nantwich",
        },
        {
          locationId: "218",
          locationName: "Thornton-Cleveleys",
        },
        {
          locationId: "221",
          locationName: "Whitehaven",
        },
        {
          locationId: "220",
          locationName: "West Kirby",
        },
        {
          locationId: "223",
          locationName: "Workington",
        },
        {
          locationId: "398",
          locationName: "Great Harwood",
        },
        {
          locationId: "391",
          locationName: "Manchester - Openshaw",
        },
        {
          locationId: "508",
          locationName: "Leigh",
        },
        {
          locationId: "509",
          locationName: "New Brighton",
        },
        {
          locationId: "551",
          locationName: "Middlewich",
        },
        {
          locationId: "557",
          locationName: "Preston - Blackpool Road",
        },
        {
          locationId: "484",
          locationName: "Cheadle",
        },
        {
          locationId: "651",
          locationName: "Maghull",
        },
        {
          locationId: "683",
          locationName: "Kirkby",
        },
      ],
    },
    {
      regionName: "East England",
      locations: [
        {
          locationId: "99",
          locationName: "Milton Keynes - Westcroft",
        },
        {
          locationId: "81",
          locationName: "Ipswich",
        },
        {
          locationId: "86",
          locationName: "East Dereham",
        },
        {
          locationId: "85",
          locationName: "Grays",
        },
        {
          locationId: "103",
          locationName: "Kings Lynn",
        },
        {
          locationId: "118",
          locationName: "Cambourne",
        },
        {
          locationId: "115",
          locationName: "Norwich",
        },
        {
          locationId: "126",
          locationName: "Letchworth",
        },
        {
          locationId: "276",
          locationName: "Canvey Island",
        },
        {
          locationId: "277",
          locationName: "Clacton - Little Clacton",
        },
        {
          locationId: "275",
          locationName: "Beccles",
        },
        {
          locationId: "317",
          locationName: "St Albans",
        },
        {
          locationId: "314",
          locationName: "Loughton",
        },
        {
          locationId: "278",
          locationName: "Clacton - Waterglade",
        },
        {
          locationId: "279",
          locationName: "Cromer",
        },
        {
          locationId: "319",
          locationName: "Welwyn Garden City",
        },
        {
          locationId: "280",
          locationName: "Diss",
        },
        {
          locationId: "287",
          locationName: "Maldon",
        },
        {
          locationId: "288",
          locationName: "Peterborough",
        },
        {
          locationId: "286",
          locationName: "Lowestoft",
        },
        {
          locationId: "283",
          locationName: "Felixstowe",
        },
        {
          locationId: "284",
          locationName: "Benfleet",
        },
        {
          locationId: "282",
          locationName: "Fakenham",
        },
        {
          locationId: "290",
          locationName: "Witham",
        },
        {
          locationId: "291",
          locationName: "Aylesbury",
        },
        {
          locationId: "300",
          locationName: "High Wycombe",
        },
        {
          locationId: "301",
          locationName: "Leighton Buzzard",
        },
        {
          locationId: "385",
          locationName: "Catton",
        },
        {
          locationId: "511",
          locationName: "Wisbech",
        },
        {
          locationId: "556",
          locationName: "Lowestoft - North Quay Retail Park",
        },
        {
          locationId: "485",
          locationName: "Chelmsford",
        },
        {
          locationId: "571",
          locationName: "Hoddesdon",
        },
        {
          locationId: "414",
          locationName: "Stanground",
        },
        {
          locationId: "628",
          locationName: "Bedford",
        },
        {
          locationId: "644",
          locationName: "Saint Ives",
        },
        {
          locationId: "586",
          locationName: "Watford",
        },
      ],
    },
    {
      regionName: "Wales",
      locations: [
        {
          locationId: "95",
          locationName: "Ebbw Vale",
        },
        {
          locationId: "96",
          locationName: "Port Talbot - Baglan",
        },
        {
          locationId: "82",
          locationName: "Barry",
        },
        {
          locationId: "87",
          locationName: "Newport - Rogerstone",
        },
        {
          locationId: "157",
          locationName: "Cardiff - Cardiff Bay",
        },
        {
          locationId: "129",
          locationName: "Rhyl",
        },
        {
          locationId: "130",
          locationName: "Swansea",
        },
        {
          locationId: "166",
          locationName: "Cwmbran",
        },
        {
          locationId: "274",
          locationName: "Neath",
        },
        {
          locationId: "273",
          locationName: "Haverfordwest",
        },
        {
          locationId: "270",
          locationName: "Carmarthen",
        },
        {
          locationId: "240",
          locationName: "Aberystwyth",
        },
        {
          locationId: "265",
          locationName: "Bangor",
        },
        {
          locationId: "266",
          locationName: "Brecon",
        },
        {
          locationId: "269",
          locationName: "Cardiff - Ty Glas",
        },
        {
          locationId: "267",
          locationName: "Caernarfon",
        },
        {
          locationId: "268",
          locationName: "Caerphilly",
        },
        {
          locationId: "397",
          locationName: "Newtown",
        },
        {
          locationId: "407",
          locationName: "Newport",
        },
        {
          locationId: "440",
          locationName: "Connahs Quay",
        },
        {
          locationId: "573",
          locationName: "Bargoed",
        },
        {
          locationId: "417",
          locationName: "Wrexham",
        },
        {
          locationId: "425",
          locationName: "Holyhead",
        },
        {
          locationId: "469",
          locationName: "Cardiff - Newport Road",
        },
        {
          locationId: "468",
          locationName: "Abergavenny",
        },
        {
          locationId: "692",
          locationName: "Llanelli",
        },
        {
          locationId: "677",
          locationName: "Saltney",
        },
      ],
    },
    {
      regionName: "Yorkshire",
      locations: [
        {
          locationId: "34",
          locationName: "Wakefield - Ridings Centre",
        },
        {
          locationId: "36",
          locationName: "Leeds - Guiseley",
        },
        {
          locationId: "33",
          locationName: "Wakefield - Dewsbury Road",
        },
        {
          locationId: "29",
          locationName: "Catcliffe",
        },
        {
          locationId: "2",
          locationName: "Bradford - Mayo Avenue",
        },
        {
          locationId: "17",
          locationName: "Leeds - Horsforth",
        },
        {
          locationId: "5",
          locationName: "Keighley",
        },
        {
          locationId: "4",
          locationName: "Bradford - Victoria",
        },
        {
          locationId: "3",
          locationName: "Bradford - Enterprise 5",
        },
        {
          locationId: "8",
          locationName: "Bradford - Thornbury",
        },
        {
          locationId: "7",
          locationName: "Leeds - Yeadon",
        },
        {
          locationId: "51",
          locationName: "Pontefract",
        },
        {
          locationId: "56",
          locationName: "Skipton",
        },
        {
          locationId: "15",
          locationName: "Leeds - Hunslet",
        },
        {
          locationId: "14",
          locationName: "Beverley",
        },
        {
          locationId: "52",
          locationName: "Sheffield - Hillsborough",
        },
        {
          locationId: "11",
          locationName: "Leeds - Morley",
        },
        {
          locationId: "10",
          locationName: "Leeds - Merrion Centre",
        },
        {
          locationId: "42",
          locationName: "Heckmondwike",
        },
        {
          locationId: "39",
          locationName: "Rotherham - Bramley",
        },
        {
          locationId: "70",
          locationName: "Scunthorpe",
        },
        {
          locationId: "72",
          locationName: "Sheffield - Ecclesfield",
        },
        {
          locationId: "79",
          locationName: "Huddersfield",
        },
        {
          locationId: "76",
          locationName: "Scarborough",
        },
        {
          locationId: "61",
          locationName: "Rotherham - Parkgate",
        },
        {
          locationId: "65",
          locationName: "Harrogate - Starbeck",
        },
        {
          locationId: "98",
          locationName: "Barnsley",
        },
        {
          locationId: "89",
          locationName: "Leeds - Kirkstall",
        },
        {
          locationId: "101",
          locationName: "Sheffield - Halfway",
        },
        {
          locationId: "108",
          locationName: "Boroughbridge",
        },
        {
          locationId: "109",
          locationName: "Hull",
        },
        {
          locationId: "107",
          locationName: "Anlaby",
        },
        {
          locationId: "155",
          locationName: "York - Foss Islands Road",
        },
        {
          locationId: "112",
          locationName: "Brampton",
        },
        {
          locationId: "110",
          locationName: "Wetherby",
        },
        {
          locationId: "123",
          locationName: "Doncaster",
        },
        {
          locationId: "133",
          locationName: "Ripon",
        },
        {
          locationId: "137",
          locationName: "Leeds - Bramley Swinnow Road",
        },
        {
          locationId: "144",
          locationName: "Knottingley",
        },
        {
          locationId: "230",
          locationName: "Acomb",
        },
        {
          locationId: "229",
          locationName: "Sheffield - Meadowhead",
        },
        {
          locationId: "228",
          locationName: "Selby",
        },
        {
          locationId: "226",
          locationName: "Malton",
        },
        {
          locationId: "224",
          locationName: "Bridlington",
        },
        {
          locationId: "350",
          locationName: "Goole",
        },
        {
          locationId: "475",
          locationName: "Halifax",
        },
        {
          locationId: "563",
          locationName: "Doncaster - Balby",
        },
        {
          locationId: "533",
          locationName: "Elland",
        },
        {
          locationId: "419",
          locationName: "Leeds - Rothwell",
        },
        {
          locationId: "694",
          locationName: "Leeds - Harehills",
        },
      ],
    },
    {
      regionName: "Scotland",
      locations: [
        {
          locationId: "156",
          locationName: "Johnstone",
        },
        {
          locationId: "152",
          locationName: "Glasgow - Auchinlea",
        },
        {
          locationId: "150",
          locationName: "Livingston",
        },
        {
          locationId: "117",
          locationName: "Kilmarnock",
        },
        {
          locationId: "160",
          locationName: "Aberdeen - King Street",
        },
        {
          locationId: "139",
          locationName: "Paisley - Anchor Mills",
        },
        {
          locationId: "135",
          locationName: "Falkirk",
        },
        {
          locationId: "136",
          locationName: "Glasgow - Cardonald",
        },
        {
          locationId: "145",
          locationName: "Dundee",
        },
        {
          locationId: "148",
          locationName: "Hamilton",
        },
        {
          locationId: "147",
          locationName: "Edinburgh - Granton",
        },
        {
          locationId: "192",
          locationName: "Paisley - Falside Road",
        },
        {
          locationId: "199",
          locationName: "Troon",
        },
        {
          locationId: "197",
          locationName: "Stirling",
        },
        {
          locationId: "198",
          locationName: "Stranraer",
        },
        {
          locationId: "195",
          locationName: "St Andrews",
        },
        {
          locationId: "196",
          locationName: "Stevenston",
        },
        {
          locationId: "193",
          locationName: "Perth",
        },
        {
          locationId: "194",
          locationName: "Peterhead",
        },
        {
          locationId: "167",
          locationName: "Bellshill",
        },
        {
          locationId: "164",
          locationName: "Arbroath",
        },
        {
          locationId: "165",
          locationName: "Ayr",
        },
        {
          locationId: "162",
          locationName: "Alloa",
        },
        {
          locationId: "163",
          locationName: "Alness",
        },
        {
          locationId: "161",
          locationName: "Airdrie",
        },
        {
          locationId: "169",
          locationName: "Dumbarton",
        },
        {
          locationId: "170",
          locationName: "Dumfries",
        },
        {
          locationId: "177",
          locationName: "Edinburgh - Gyle",
        },
        {
          locationId: "178",
          locationName: "Fort William",
        },
        {
          locationId: "175",
          locationName: "Edinburgh - Moredun",
        },
        {
          locationId: "176",
          locationName: "Edinburgh - Portobello Road",
        },
        {
          locationId: "173",
          locationName: "Edinburgh - Ferry Road",
        },
        {
          locationId: "174",
          locationName: "Edinburgh - Hunters Tryst",
        },
        {
          locationId: "171",
          locationName: "East Kilbride - Lindsayfield",
        },
        {
          locationId: "172",
          locationName: "East Kilbride - Stewartfield",
        },
        {
          locationId: "179",
          locationName: "Glasgow - Anniesland",
        },
        {
          locationId: "180",
          locationName: "Glasgow - Baillieston",
        },
        {
          locationId: "181",
          locationName: "Glasgow - Bishopbriggs",
        },
        {
          locationId: "188",
          locationName: "Inverness",
        },
        {
          locationId: "189",
          locationName: "Inverurie",
        },
        {
          locationId: "187",
          locationName: "Hawick",
        },
        {
          locationId: "184",
          locationName: "Glenrothes",
        },
        {
          locationId: "185",
          locationName: "Greenock",
        },
        {
          locationId: "182",
          locationName: "Glasgow - Cambuslang",
        },
        {
          locationId: "183",
          locationName: "Glasgow - Newlands",
        },
        {
          locationId: "409",
          locationName: "Bathgate",
        },
        {
          locationId: "375",
          locationName: "Glasgow - Partick",
        },
        {
          locationId: "379",
          locationName: "Livingston Carmondean",
        },
        {
          locationId: "438",
          locationName: "Erskine",
        },
        {
          locationId: "516",
          locationName: "Glasgow - Gallowgate",
        },
        {
          locationId: "510",
          locationName: "Dalkeith",
        },
        {
          locationId: "693",
          locationName: "Glasgow - Giffnock",
        },
        {
          locationId: "582",
          locationName: "Kirkcaldy",
        },
        {
          locationId: "648",
          locationName: "Amble",
        },
        {
          locationId: "664",
          locationName: "Helensburgh",
        },
      ],
    },
    {
      regionName: "North East",
      locations: [
        {
          locationId: "35",
          locationName: "Killingworth",
        },
        {
          locationId: "26",
          locationName: "Darlington - North Road",
        },
        {
          locationId: "58",
          locationName: "Stockton-on-Tees",
        },
        {
          locationId: "40",
          locationName: "Bishop Auckland",
        },
        {
          locationId: "47",
          locationName: "Seaburn",
        },
        {
          locationId: "64",
          locationName: "Tynemouth",
        },
        {
          locationId: "91",
          locationName: "Newcastle upon Tyne - Byker",
        },
        {
          locationId: "80",
          locationName: "Redcar",
        },
        {
          locationId: "88",
          locationName: "Jarrow",
        },
        {
          locationId: "102",
          locationName: "Sunderland - Doxford Park",
        },
        {
          locationId: "128",
          locationName: "Middlesbrough",
        },
        {
          locationId: "124",
          locationName: "Darlington - Morton Park",
        },
        {
          locationId: "132",
          locationName: "Hartlepool",
        },
        {
          locationId: "146",
          locationName: "Newcastle upon Tyne - West Denton",
        },
        {
          locationId: "207",
          locationName: "Whitley Bay",
        },
        {
          locationId: "206",
          locationName: "Newcastle upon Tyne - Cowgate",
        },
        {
          locationId: "203",
          locationName: "Blyth",
        },
        {
          locationId: "204",
          locationName: "Consett",
        },
        {
          locationId: "168",
          locationName: "Berwick-upon-Tweed",
        },
        {
          locationId: "381",
          locationName: "Morpeth",
        },
        {
          locationId: "389",
          locationName: "South Shields",
        },
        {
          locationId: "474",
          locationName: "Chester-le-Street",
        },
        {
          locationId: "567",
          locationName: "Blaydon",
        },
        {
          locationId: "635",
          locationName: "Guisborough",
        },
        {
          locationId: "668",
          locationName: "Dalton Park",
        },
      ],
    },
    {
      regionName: "West Midlands",
      locations: [
        {
          locationId: "24",
          locationName: "Bilston",
        },
        {
          locationId: "50",
          locationName: "Stoke-on-Trent",
        },
        {
          locationId: "49",
          locationName: "Wellington",
        },
        {
          locationId: "73",
          locationName: "Tamworth",
        },
        {
          locationId: "68",
          locationName: "Shrewsbury",
        },
        {
          locationId: "69",
          locationName: "Coventry - Binley",
        },
        {
          locationId: "63",
          locationName: "Walsall - Wallows Lane",
        },
        {
          locationId: "90",
          locationName: "Birmingham - Small Heath",
        },
        {
          locationId: "153",
          locationName: "Wednesbury",
        },
        {
          locationId: "127",
          locationName: "Newcastle-under-Lyme - Milehouse Lane",
        },
        {
          locationId: "125",
          locationName: "Burton upon Trent",
        },
        {
          locationId: "243",
          locationName: "Burntwood",
        },
        {
          locationId: "244",
          locationName: "Cannock",
        },
        {
          locationId: "241",
          locationName: "Aldridge",
        },
        {
          locationId: "242",
          locationName: "Bromsgrove",
        },
        {
          locationId: "247",
          locationName: "Evesham",
        },
        {
          locationId: "248",
          locationName: "Hereford",
        },
        {
          locationId: "245",
          locationName: "Birmingham - Castle Bromwich",
        },
        {
          locationId: "246",
          locationName: "Coventry - Holyhead Road",
        },
        {
          locationId: "254",
          locationName: "Malvern",
        },
        {
          locationId: "252",
          locationName: "Leominster",
        },
        {
          locationId: "253",
          locationName: "Lichfield",
        },
        {
          locationId: "250",
          locationName: "Kingswinford",
        },
        {
          locationId: "251",
          locationName: "Leek",
        },
        {
          locationId: "258",
          locationName: "Ross-on-Wye",
        },
        {
          locationId: "259",
          locationName: "Birmingham - Rubery",
        },
        {
          locationId: "256",
          locationName: "Newcastle-under-Lyme - Goose Street",
        },
        {
          locationId: "257",
          locationName: "Redditch",
        },
        {
          locationId: "263",
          locationName: "Stratford-upon-Avon",
        },
        {
          locationId: "264",
          locationName: "Walsall - Lichfield Street",
        },
        {
          locationId: "261",
          locationName: "Solihull",
        },
        {
          locationId: "262",
          locationName: "Stone",
        },
        {
          locationId: "395",
          locationName: "Market Drayton",
        },
        {
          locationId: "393",
          locationName: "Droitwich",
        },
        {
          locationId: "401",
          locationName: "Pendeford",
        },
        {
          locationId: "554",
          locationName: "Sheldon",
        },
        {
          locationId: "442",
          locationName: "Willenhall",
        },
        {
          locationId: "561",
          locationName: "Telford - Lawley",
        },
        {
          locationId: "416",
          locationName: "Oswestry",
        },
        {
          locationId: "547",
          locationName: "Leamington Spa",
        },
        {
          locationId: "545",
          locationName: "Edgbaston",
        },
        {
          locationId: "691",
          locationName: "Kidderminster",
        },
        {
          locationId: "658",
          locationName: "Stirchley",
        },
      ],
    },
    {
      regionName: "East Midlands",
      locations: [
        {
          locationId: "31",
          locationName: "Gainsborough",
        },
        {
          locationId: "30",
          locationName: "Grantham",
        },
        {
          locationId: "27",
          locationName: "Staveley",
        },
        {
          locationId: "23",
          locationName: "Mansfield",
        },
        {
          locationId: "54",
          locationName: "Coalville",
        },
        {
          locationId: "46",
          locationName: "Stamford",
        },
        {
          locationId: "48",
          locationName: "Newark",
        },
        {
          locationId: "78",
          locationName: "Derby",
        },
        {
          locationId: "75",
          locationName: "Cleethorpes - Laceby",
        },
        {
          locationId: "62",
          locationName: "Lincoln",
        },
        {
          locationId: "67",
          locationName: "Netherfield",
        },
        {
          locationId: "83",
          locationName: "Spalding - Pinchbeck",
        },
        {
          locationId: "100",
          locationName: "Northampton - Victoria Promenade",
        },
        {
          locationId: "111",
          locationName: "Kettering",
        },
        {
          locationId: "159",
          locationName: "Swadlincote",
        },
        {
          locationId: "116",
          locationName: "Wellingborough",
        },
        {
          locationId: "114",
          locationName: "Retford",
        },
        {
          locationId: "121",
          locationName: "Bulwell",
        },
        {
          locationId: "232",
          locationName: "Corby",
        },
        {
          locationId: "233",
          locationName: "Hinckley",
        },
        {
          locationId: "231",
          locationName: "Belper",
        },
        {
          locationId: "238",
          locationName: "Gamston",
        },
        {
          locationId: "239",
          locationName: "Eastwood",
        },
        {
          locationId: "236",
          locationName: "Melton Mowbray",
        },
        {
          locationId: "237",
          locationName: "Northampton - Kettering Road",
        },
        {
          locationId: "234",
          locationName: "Leicester",
        },
        {
          locationId: "235",
          locationName: "Loughborough",
        },
        {
          locationId: "225",
          locationName: "Chesterfield",
        },
        {
          locationId: "289",
          locationName: "Skegness",
        },
        {
          locationId: "387",
          locationName: "Lutterworth",
        },
        {
          locationId: "472",
          locationName: "Mansfield Woodhouse",
        },
        {
          locationId: "512",
          locationName: "Kirkby-in-Ashfield",
        },
        {
          locationId: "448",
          locationName: "Clifton",
        },
        {
          locationId: "649",
          locationName: "Bolsover",
        },
        {
          locationId: "656",
          locationName: "Glenfield",
        },
        {
          locationId: "674",
          locationName: "Ilkeston",
        },
        {
          locationId: "580",
          locationName: "Worksop",
        },
      ],
    },
    {
      regionName: "South West",
      locations: [
        {
          locationId: "84",
          locationName: "Bristol - Cribbs Causeway",
        },
        {
          locationId: "142",
          locationName: "Gloucester - Abbeydale",
        },
        {
          locationId: "143",
          locationName: "Bristol - Hartcliffe",
        },
        {
          locationId: "320",
          locationName: "Bath",
        },
        {
          locationId: "321",
          locationName: "Bideford",
        },
        {
          locationId: "328",
          locationName: "Liskeard",
        },
        {
          locationId: "329",
          locationName: "Newquay",
        },
        {
          locationId: "326",
          locationName: "Up Hatherley",
        },
        {
          locationId: "327",
          locationName: "Glastonbury",
        },
        {
          locationId: "324",
          locationName: "Bristol - Fishponds",
        },
        {
          locationId: "325",
          locationName: "Bude",
        },
        {
          locationId: "322",
          locationName: "Bodmin",
        },
        {
          locationId: "323",
          locationName: "Bridgwater",
        },
        {
          locationId: "331",
          locationName: "Penzance",
        },
        {
          locationId: "330",
          locationName: "Paignton",
        },
        {
          locationId: "363",
          locationName: "Swindon - Thames Avenue",
        },
        {
          locationId: "366",
          locationName: "Weymouth",
        },
        {
          locationId: "332",
          locationName: "Plymouth",
        },
        {
          locationId: "372",
          locationName: "Minehead",
        },
        {
          locationId: "339",
          locationName: "Totnes",
        },
        {
          locationId: "337",
          locationName: "Tewkesbury",
        },
        {
          locationId: "338",
          locationName: "Tiverton",
        },
        {
          locationId: "335",
          locationName: "Taunton",
        },
        {
          locationId: "336",
          locationName: "Tavistock",
        },
        {
          locationId: "333",
          locationName: "Plymstock",
        },
        {
          locationId: "334",
          locationName: "Redruth",
        },
        {
          locationId: "342",
          locationName: "Wincanton",
        },
        {
          locationId: "343",
          locationName: "Yate",
        },
        {
          locationId: "340",
          locationName: "Warminster",
        },
        {
          locationId: "341",
          locationName: "Weston-super-Mare",
        },
        {
          locationId: "348",
          locationName: "Chippenham",
        },
        {
          locationId: "349",
          locationName: "Devizes",
        },
        {
          locationId: "347",
          locationName: "Bridport",
        },
        {
          locationId: "344",
          locationName: "Yeovil",
        },
        {
          locationId: "559",
          locationName: "Wells",
        },
        {
          locationId: "560",
          locationName: "Teignmouth",
        },
        {
          locationId: "496",
          locationName: "Exeter",
        },
        {
          locationId: "575",
          locationName: "Gloucester - Metz Way",
        },
        {
          locationId: "634",
          locationName: "Swindon - Dorcan Way",
        },
        {
          locationId: "640",
          locationName: "Verwood",
        },
      ],
    },
  ],
};

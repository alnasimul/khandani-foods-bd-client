
export const CalculationsByMonth = orders => {


    //   { totalSalesJanuary, totalSalesFebruary, totalSalesMarch, totalSalesApril, totalSalesMay, totalSalesJune, totalSalesJuly, totalSalesAugust, totalSalesSeptember, totalSalesOctober, totalSalesNovember, totalSalesDecember }
}

// calculation of total sales January


export const getTotalSalesOfJanuary = orders => {
    let totalSalesJanuary = 0;
    const JanuaryOrders = orders.filter(order => order.month === 'January')

    JanuaryOrders.map(order => {
        totalSalesJanuary = totalSalesJanuary + order.totalBill
    })

    return totalSalesJanuary
}



// calculation of total sales February


export const getTotalSalesOfFebruary = orders => {
    let totalSalesFebruary = 0;
    const FebruaryOrders = orders.filter(order => order.month === 'February')

    FebruaryOrders.map(order => {
        totalSalesFebruary = totalSalesFebruary + order.totalBill
    })

    return totalSalesFebruary
}


//totalSalesFebruary = getTotalSalesOfFebruary(orders)

// calculation of total sales March


export const getTotalSalesOfMarch = orders => {
    let totalSalesMarch = 0;
    const MarchOrders = orders.filter(order => order.month === 'March')

    MarchOrders.map(order => {
        totalSalesMarch = totalSalesMarch + order.totalBill
    })

    return totalSalesMarch
}


// totalSalesMarch = getTotalSalesOfMarch(orders)
// calculation of total sales April


export const getTotalSalesOfApril = orders => {
    let totalSalesApril = 0;
    const AprilOrders = orders.filter(order => order.month === 'April')

    AprilOrders.map(order => {
        totalSalesApril = totalSalesApril + order.totalBill
    })

    return totalSalesApril
}


// totalSalesApril = getTotalSalesOfApril(orders)

// calculation of total sales May


export const getTotalSalesOfMay = orders => {
    let totalSalesMay = 0;
    const MayOrders = orders.filter(order => order.month === 'May')

    MayOrders.map(order => {
        totalSalesMay = totalSalesMay + order.totalBill
    })

    return totalSalesMay
}


// totalSalesMay = getTotalSalesOfMay(orders)

// calculation of total sales June


export const getTotalSalesOfJune = orders => {
    let totalSalesJune = 0;
    const JuneOrders = orders.filter(order => order.month === 'June')

    JuneOrders.map(order => {
        totalSalesJune = totalSalesJune + order.totalBill
    })

    return totalSalesJune
}


// totalSalesJune = getTotalSalesOfJune(orders)


// calculation of total sales July


export const getTotalSalesOfJuly = orders => {

    let totalSalesJuly = 0;
    const JulyOrders = orders.filter(order => order.month === 'July')

    JulyOrders.map(order => {
        totalSalesJuly = totalSalesJuly + order.totalBill
    })

    return totalSalesJuly
}





// calculation of total sales august

export const getTotalSalesOfAugust = orders => {

    let totalSalesAugust = 0;
    const augustOrders = orders.filter(order => order.month === 'August')

    augustOrders.map(order => {
        totalSalesAugust = totalSalesAugust + order.totalBill
    })

    return totalSalesAugust
}


// totalSalesAugust = getTotalSalesOfAugust(orders)

//console.log(totalSalesAugust)

// calculation of total sales september


export const getTotalSalesOfSeptember = orders => {
    let totalSalesSeptember = 0;
    const septemberOrders = orders.filter(order => order.month === 'September')

    septemberOrders.map(order => {
        totalSalesSeptember = totalSalesSeptember + order.totalBill
    })

    return totalSalesSeptember
}

// totalSalesSeptember = getTotalSalesOfSeptember(orders)

// calculation of total sales October

export const getTotalSalesOfOctober = orders => {
    let totalSalesOctober = 0;
    const OctoberOrders = orders.filter(order => order.month === 'October')

    OctoberOrders.map(order => {
        totalSalesOctober = totalSalesOctober + order.totalBill
    })

    return totalSalesOctober
}

// totalSalesOctober = getTotalSalesOfOctober(orders)

// calculation of total sales november

export const getTotalSalesOfNovember = orders => {
    let totalSalesNovember = 0;
    const NovemberOrders = orders.filter(order => order.month === 'November')

    NovemberOrders.map(order => {
        totalSalesNovember = totalSalesNovember + order.totalBill
    })

    return totalSalesNovember
}

//  totalSalesNovember = getTotalSalesOfNovember(orders)

// calculation of total sales december


export const getTotalSalesOfDecember = orders => {
    let totalSalesDecember = 0;
    const DecemberOrders = orders.filter(order => order.month === 'December')

    DecemberOrders.map(order => {
        totalSalesDecember = totalSalesDecember + order.totalBill
    })

    return totalSalesDecember
}

  // totalSalesDecember = getTotalSalesOfDecember(orders)



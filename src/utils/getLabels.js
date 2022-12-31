import _ from "lodash";

export const getLabels = (transactions, type) => {
  let sum = _(transactions)
    .groupBy("type")
    .map((objs, key) => {
      if (!type) return _.sumBy(objs, "amount");
      return {
        id: objs[0]._id,
        type: key,
        color: objs[0].color,
        total: _.sumBy(objs, "amount"),
      };
    })
    .value();
  return sum;
};

export const getLabelswithPercent = (transactions) => {
  let amountSum = getLabels(transactions, "type");
  let Total = _.sum(getLabels(transactions));

  let labelswithPercent = _(amountSum)
    .map((objs) => _.assign(objs, { percent: (100 * objs.total) / Total }))
    .value();

  return labelswithPercent;
};

export const Chart_data = (transactions) => {
  let bg = _.map(transactions, (a) => a.color);
  bg = _.uniq(bg);
  let dataValue = getLabels(transactions);
  const config = {
    data: {
      datasets: [
        {
          data: dataValue,
          backgroundColor: bg,
          hoverOffset: 4,
          borderRadius: 30,
          spacing: 10,
        },
      ],
    },
    options: {
      cutout: 115,
    },
  };

  return config;
};

export const getTotal = (transactions) => {
  let sum = _.sumBy(transactions, "amount");
  return sum;
};

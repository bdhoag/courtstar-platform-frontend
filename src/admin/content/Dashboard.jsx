import Counter from "../../components/Counter";
import Chart from 'react-apexcharts';
import moment from 'moment';
import { useEffect, useState } from "react";
import axiosInstance from "../../config/axiosConfig";
import SpinnerLoading from "../../components/SpinnerLoading";
import { useTranslation } from "react-i18next";

const latestDay = Array.from({ length: 10 }, (_, index) =>
  moment().subtract(9 - index, 'days').format("YYYY-MM-DD")
);

const getArrays = (Obj, isMoney) => {
  let arrays = [];
  latestDay.forEach(e => {
    if (Obj[e]) {
      if (isMoney) arrays.push(Obj[e] * 0.05/1000);
      else arrays.push(Obj[e]);
    } else {
      arrays.push(0);
    }
  });
  return arrays;
}

const getRateArrays = (Obj) => {
  let arrays = [];
  for (let index = 0; index < latestDay.length; index++) {
    if (index === 0) {
      arrays.push(0);
      continue;
    }
    const e1 = latestDay[index];
    const e2 = latestDay[index - 1];
    if (Obj[e1] && Obj[e2]) {
      arrays.push((Obj[e1] - Obj[e2])/Obj[e2]);
    } else if(Obj[e2]) {
      arrays.push(-1);
    }
    else {
      arrays.push(0);
    }
  }
  return arrays;
}

const Dashboard = () => {
  const { t } = useTranslation();
  const controller = new AbortController();
  const { signal } = controller;
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState(
    {
      users: [],
      centres: [],
      revenues: [],
      rate: [],
    }
  );

  const load = async () => {
    await axiosInstance.get(`/courtstar/admin/platform`, { signal })
      .then(res => {
        setData(res.data.data)
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(
        () => {
          setLoading(false);
        }
      );
  }

  useEffect(() => {
    load();
  }, [])

  useEffect(() => {
    if (data)
    setChartData(
      ((prev) => ({
        ...prev,
        users: getArrays(data.users),
        centres: getArrays(data.centres),
        revenues: getArrays(data.revenues, true),
        rates: getRateArrays(data.revenues)
      }))
    )
  }, [data])

  const revenueSeries = [
    {
      name: t('revenue'),
      color: '#2B5A50',
      data: chartData.revenues,
      type: "bar",
    },
    {
      name: t('profitGrowth'),
      color: '#dc2626',
      data: chartData.rates,
      type: "line",
    },
  ];

  const revenueOptions = {
    chart: {
      fontFamily: 'Inter',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
            enabled: true,
            delay: 150
        },
        dynamicAnimation: {
            enabled: true,
            speed: 350
        }
      }
    },
    stroke: {
      width: [0, 2],
      curve: ['smooth', 'straight'],
    },
    tooltip: {
      x: {
        show: true,
        formatter: function (val) {
          return moment().subtract(10 - val, 'days').format('MMM DD');
        }
      },
      y: [
        {
          title: {
            formatter: function (val, a) {
              return val + ":"
            }
          },
          formatter: function (val) {
            return val + "K" + " VND"
          }
        },
        {
          title: {
            formatter: function (val, a) {
              return val + ":"
            }
          },
          formatter: function (val) {
            return Math.round(val*100) + "%"
          }
        },
      ]
    },
    xaxis: {
      categories: Array.from({ length: 10 }, (_, index) =>
        moment().subtract(9 - index, 'days').format('MMM DD')
      )
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return Math.round(val);
        },
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '30%'
      }
    },
  };

  const overviewSeries = [
    {
      name: t('userRegistration'),
      color: '#2563eb',
      data: chartData.users,
      type: "line"
    },
    {
      name: t('centreRegistration'),
      color: '#9ca3af',
      data: chartData.centres,
      type: "line"
    },
  ];

  const overviewOptions = {
    chart: {
      fontFamily: 'Inter',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
            enabled: true,
            delay: 150
        },
        dynamicAnimation: {
            enabled: true,
            speed: 350
        }
      }
    },
    stroke: {
      width: [3, 3],
      curve: ['smooth', 'smooth'],
      dashArray: [0, 0]
    },
    tooltip: {
      x: {
        show: true,
        formatter: function (val) {
          return moment().subtract(10 - val, 'days').format('MMM DD');
        }
      },
      y: [
        {
          title: {
            formatter: function (val) {
              return val + ":"
            }
          },
          formatter: function (val) {
            return val
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + ":"
            }
          },
          formatter: function (val) {
            return val
          }
        }
      ]
    },
    xaxis: {
      categories: Array.from({ length: 10 }, (_, index) =>
        moment().subtract(9 - index, 'days').format('MMM DD')
      )
    }
  };


  return (
    <div className="py-5 px-7 flex flex-col gap-5">
      <div className="text-3xl font-semibold">
      {t('dashboard')}
      </div>
      {loading
        ?
        <div className="h-[500px] flex items-center justify-center">
          <SpinnerLoading
            height='80'
            width='80'
            color='#2B5A50'
          />
        </div>
        :
        <>
          <div className="bg-white rounded-2xl py-3 px-5 flex flex-col gap-5">
            <div className="flex justify-between items-center font-semibold">
              <div className="text-lg">
                Overview
              </div>
              <button className="flex gap-2 items-center text-gray-500 py-2 px-4 border rounded-md hover:bg-primary-green hover:text-white transition-all ease-in-out duration-300">
                <svg
                  width="14" height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.25 8.75V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.91671 4.66667L7.00004 1.75L4.08337 4.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 1.75V8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t('Export')}
              </button>
            </div>

            <div className="flex gap-2.5 justify-between text-gray-500">
              <div className="p-4 border rounded-xl text-2xl font-semibold w-full">
                <div className="text-sm font-medium mb-1">
                {t('totalRevenue')}
                </div>
                <Counter
                  endNumber={data?.totalRevenue}
                  duration={1000}
                  postfix=" VND"
                />
              </div>
              <div className="p-4 border rounded-xl text-2xl font-semibold w-full">
                <div className="text-sm font-medium mb-1">
                {t('totalCentre')}
                </div>
                <Counter
                  endNumber={data?.totalCentre}
                  duration={1000}
                />
              </div>
              <div className="p-4 border rounded-xl text-2xl font-semibold w-full">
                <div className="text-sm font-medium mb-1">
                {t('totalUser')}
                </div>
                <Counter
                  endNumber={data?.totalUser}
                  duration={1000}
                />
              </div>
            </div>

            <div className="flex flex-col gap-5 w-full">
              <Chart
                height="350"
                width="100%"
                options={revenueOptions}
                series={revenueSeries}
              />
              <Chart
                height="350"
                width="100%"
                options={overviewOptions}
                series={overviewSeries}
              />
            </div>
          </div>
        </>
      }
    </div>
  );
}

export default Dashboard;

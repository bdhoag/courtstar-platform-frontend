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
      customers: [],
      managers: [],
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
        customers: getArrays(data.customers),
        managers: getArrays(data.managers),
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
      name: t('customerRegistration'),
      color: '#2563eb',
      data: chartData.customers,
      type: "line"
    },
    {
      name: t('partnerRegistration'),
      color: '#9563eb',
      data: chartData.managers,
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
      width: [3, 3, 3],
      curve: ['smooth', 'smooth', 'smooth'],
      dashArray: [0, 0, 0]
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
    <div className="py-6 w-full flex flex-col gap-5">
      <div className="text-3xl font-bold">
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
          <div className='w-full h-[20rem] rounded-lg relative flex justify-between shadow-lg'>
            <div className='absolute w-full h-full overflow-hidden rounded-lg'>
              <img
                src="/images/bg-admin.svg"
                alt="bg-balance"
                className='object-cover object-center w-full h-full'
              />
            </div>
            <div className='z-10 px-20 w-full flex flex-col gap-10 justify-center'>
              <div className='flex justify-between items-center'>
                <div>
                  <div className='text-2xl font-semibold mb-2'>{t('overviewThisWeek')}</div>
                </div>
              </div>

              <div className='flex gap-10'>

                <div className='py-3 px-5 w-full shadow-md rounded-lg bg-white font-semibold'>
                  <div className='flex justify-between items-center mb-2'>
                    <div>{t('revenue')}</div>
                  </div>
                  <div className='text-lg flex gap-0.5 font-bold'>
                    <Counter
                      endNumber={data?.weekRevenue}
                      duration={1000}
                    />
                    <span className='text-[7px]'>VND</span>
                  </div>
                </div>

                <div className='py-3 px-5 w-full shadow-md rounded-lg bg-white font-semibold'>
                  <div className='flex justify-between items-center mb-2'>
                    <div>{t('centreApproved')}</div>
                  </div>
                  <div className='text-lg flex gap-0.5 font-bold'>
                    <Counter
                      endNumber={data?.weekCentre}
                      duration={1000}
                    />
                  </div>
                </div>

                <div className='py-3 px-5 w-full shadow-md rounded-lg bg-white font-semibold'>
                  {t('partnerRegistration')}
                  <div className='text-lg flex gap-0.5 font-bold mt-2'>
                    <Counter
                      endNumber={data?.weekManager}
                      duration={1000}
                    />
                  </div>
                </div>

                <div className='py-3 px-5 w-full shadow-md rounded-lg bg-white font-semibold'>
                  {t('customerRegistration')}
                  <div className='text-lg flex gap-0.5 font-bold mt-2'>
                    <Counter
                      endNumber={data?.weekCustomer}
                      duration={1000}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg flex flex-col gap-5">
            <div className="text-center font-semibold text-white py-1.5 text-2xl bg-primary-green rounded-t-lg">
              {t('revenueGrowthChart')}
            </div>
            <div className="flex flex-col gap-5 w-full py-2 px-5">
              <Chart
                height="350"
                width="100%"
                options={revenueOptions}
                series={revenueSeries}
              />
            </div>

          </div>
          <div className="bg-white rounded-lg flex flex-col gap-5">
            <div className="text-center font-semibold text-white py-1.5 text-2xl bg-primary-green rounded-t-lg">
              {t('accountAndCentreRegistrationChart')}
            </div>
            <div className="flex flex-col gap-5 w-full py-2 px-5">
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

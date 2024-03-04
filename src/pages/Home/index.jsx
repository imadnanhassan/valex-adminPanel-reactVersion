import Earnings from "../../ui/chart/Earnings";
import LineChart from "../../ui/chart/LineChart";

export default function HomePage() {
  return (
    <section className=" px-5 py-10">
      {/* total overview */}
      <div className="grid  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-r from-[#33B1B1] to-[#94D6D6] rounded-lg shadow-md p-4">
          <div className="py-2">
            <h6 className="text-[.75rem] uppercase font-primary leading-3 text-[#fff] font-medium">
              Today Order
            </h6>
          </div>
          <div className="flex justify-between items-center py-2">
            <div>
              <h4 className="text-[1.25rem] font-bold text-white">$5,74.12</h4>
              <p className="opacity-[.7] text-white text-[.75rem]">
                Compared to last week
              </p>
            </div>
            <div className="flex items-center gap-1 text-white">
              <i className="fa-solid fa-circle-up text-white" />
              <h5>+427</h5>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#F94563] to-[#F77086] rounded-lg shadow-md p-4">
          <div className="py-2">
            <h6 className="text-[.75rem] uppercase font-primary leading-3 text-[#fff] font-medium">
              Today Order
            </h6>
          </div>
          <div className="flex justify-between items-center py-2">
            <div>
              <h4 className="text-[1.25rem] font-bold text-white">$5,74.12</h4>
              <p className="opacity-[.7] text-white text-[.75rem]">
                Compared to last week
              </p>
            </div>
            <div className="flex items-center gap-1 text-white">
              <i className="fa-solid fa-circle-up text-white" />
              <h5>+427</h5>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#039767] to-[#46D4A6] rounded-lg shadow-md p-4">
          <div className="py-2">
            <h6 className="text-[.75rem] uppercase font-primary leading-3 text-[#fff] font-medium">
              Today Order
            </h6>
          </div>
          <div className="flex justify-between items-center py-2">
            <div>
              <h4 className="text-[1.25rem] font-bold text-white">$5,74.12</h4>
              <p className="opacity-[.7] text-white text-[.75rem]">
                Compared to last week
              </p>
            </div>
            <div className="flex items-center gap-1 text-white">
              <i className="fa-solid fa-circle-up text-white" />
              <h5>+427</h5>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#F76B2E] to-[#EFA45D] rounded-lg shadow-md p-4">
          <div className="py-2">
            <h6 className="text-[.75rem] uppercase font-primary leading-3 text-[#fff] font-medium">
              Today Order
            </h6>
          </div>
          <div className="flex justify-between items-center py-2">
            <div>
              <h4 className="text-[1.25rem] font-bold text-white">$5,74.12</h4>
              <p className="opacity-[.7] text-white text-[.75rem]">
                Compared to last week
              </p>
            </div>
            <div className="flex items-center gap-1 text-white">
              <i className="fa-solid fa-circle-up text-white" />
              <h5>+427</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5">
        {/* chart */}
        <div className="w-[65%] px-3 bg-white py-5 rounded shadow-lg">
          <LineChart />
        </div>
        {/* earning */}
        <div className="w-[35%]">
          <Earnings />
        </div>
      </div>
    </section>
  );
}

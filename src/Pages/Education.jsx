import React from 'react'
import eduimg from '../assets/edu-img.jpg'
import awareness from '../assets/awareness-2.jpg'

export default function Education() {
  return (
    <div className="w-full max-w-[1500px] px-5 md:px-10 mx-auto pt-10 flex flex-col gap-10">
      <div className="flex gap-10 max-sm:flex-col max-sm:justify-center max-md:flex-col p-10">
        <img src={eduimg} width={400} height={350} alt="" />
        <div className="flex flex-col gap-5 ">
          <h1 className="text-2xl font-bold font-montserrat">
            TAKE BACK & RECYCLING :
          </h1>
          <p className="text-xl font-montserrat text-justify">
            In our commitment to ensuring a greener tomorrow, Havells is
            offering an E-Waste take-back & recycling service that adheres to
            the E-Waste (Management) Rules, 2016 issued by Ministry of
            Environment and Forest, Government of India. When an electronic
            product reaches the end of its useful life, it needs to be disposed
          </p>
          <p className="text-xl font-montserrat text-justify">
            In our commitment to ensuring a greener tomorrow, Havells is
            offering an E-Waste take-back & recycling service that adheres to
            the E-Waste (Management) Rules, 2016 issued by Ministry of
            Environment and Forest, Government of India. When an electronic
            product reaches the end of its useful life, it needs to be disposed
          </p>
          <p className="text-xl font-montserrat text-justify">
            In our commitment to ensuring a greener tomorrow, Havells is
            offering an E-Waste take-back & recycling service that adheres to
            the E-Waste (Management) Rules, 2016 issued by Ministry of
            Environment and Forest, Government of India. When an electronic
            product reaches the end of its useful life, it needs to be disposed
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse gap-10 max-sm:flex-col max-sm:justify-center max-md:flex-col p-10">
        <img src={awareness} width={400} height={350} alt="" />
        <div className="flex flex-col gap-5 ">
          <h1 className="text-2xl font-bold font-montserrat">Effects :</h1>
          <p className="text-xl  text-justify font-montserrat font-medium">
            According to the report, the improper handling of e-waste is
            resulting in a significant loss of scarce and valuable raw
            materials, including such precious metals as neodymium (vital for
            magnets in motors), indium (used in flat panel TVs) and cobalt (for
            batteries). Almost no rare earth minerals are extracted from
            informal recycling; these are polluting to mine.
          </p>
          {/* <p className="text-xl  text-justify font-montserrat font-medium">
            Yet metals in e-waste are difficult to extract; for example, total
            recovery rates for cobalt are only 30% (despite technology existing
            that could recycle 95%). The metal is, however, in great demand for
            laptop, smartphone and electric car batteries. Recycled metals are
            also two to 10 times more energy efficient than metals smelted from
            virgin ore. Furthermore, mining discarded electronics produces 80%
            less emissions of carbon dioxide per unit of gold compared with
            mining it from the ground.
          </p> */}
          <p className="text-xl  text-justify font-montserrat font-medium">
            It is also worth considering the effects electronic goods have on
            climate change. Every device ever produced has a carbon footprint
            and is contributing to human-made global warming. Manufacture a
            tonne of laptops and potentially 10 tonnes of CO2 are emitted. When
            the carbon dioxide released over a device’s lifetime is considered,
            it predominantly occurs during production, before consumers buy a
            product. This makes lower carbon processes and inputs at the
            manufacturing stage (such as use recycled raw materials) and product
            lifetime key determinants of overall environmental impact.
          </p>
        </div>
      </div>
    </div>
  )
}

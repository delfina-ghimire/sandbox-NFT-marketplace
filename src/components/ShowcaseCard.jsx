const ShowcaseCard = ({ img, name, desc, creator, floor, volume }) => (
  <div className='flex justify-between flex-col px-5 py-12 rounded-[20px]  max-w-[338px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card cursor-pointer'>
    <img src={img} alt={name} className='rounded-[10px] object-contain' />

    <div className='flex flex-row'>
      <div className='flex flex-col ml-4 pt-4'>
        <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>
          {name}
        </h4>
        <p className='font-poppins font-normal text-[18px] leading-[24px] text-gradient '>
          by {creator}
        </p>
      </div>
    </div>

    <p className='font-poppins font-normal text-[16px] leading-[20px] text-dimWhite my-3 mx-3'>
      {desc}
    </p>

    <div className='flex flex-row justify-between pt-3'>
      <div className='flex flex-col ml-1 pt-1 px-3'>
        <h4 className='font-poppins font-semibold text-[20px] leading-[16px] text-dimWhite  mb-3 '>
          Floor
        </h4>
        <p className='font-poppins font-normal text-[18px] leading-[16px] text-white '>
          {floor}
        </p>
      </div>

      <div className='w-[1px]  border-t-[50px] border-t-[#3F3E45]' />

      <div className='flex flex-col ml-1 pt-1 px-3'>
        <h4 className='font-poppins font-semibold text-[20px] leading-[16px] text-dimWhite  mb-3'>
          Volume
        </h4>
        <p className='font-poppins font-normal text-[18px] leading-[16px] text-white '>
          {volume}
        </p>
      </div>
    </div>
  </div>
);

export default ShowcaseCard;

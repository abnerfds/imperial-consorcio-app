'use client'
import './stepCard.scss'

const StepCard = ({ stepDescription, stepTitle, stepCount, isSmallScreen, classStyle }: { stepDescription: string, stepTitle: string, stepCount: string, isSmallScreen: boolean, classStyle?: string }) => {

  return (
    <section className={`${isSmallScreen ? 'border-y-2 border-y-solid border-y-[#570DF8] h-56 relative carousel-item w-full flex flex-col justify-center py-5' : 'relative w-56 h-44 text-center flex flex-col justify-between'}`}>
      <section className='mb-12'>
        <span className={`${classStyle} bg-[#570DF8] text-2xl lg:text-lg text-white px-5 py-1 rounded-full`}>
          {stepCount}
        </span>
      </section>
      <section className='flex flex-col'>
        <h4 className='text-[#42B4EE] text-3xl lg:text-xl mb-4'>{stepTitle}</h4>
        <p className='text-2xl lg:text-[1.1rem]'>{stepDescription}</p>
      </section>
    </section>
    // <div className="indicator flex justify-center">
    //   <span className="indicator-item indicator-center badge badge-primary p-4 text-lg">{stepCount}</span>
    //   <section className="md:bg-inherit bg-[#cffafe] rounded-3xl place-items-center text-center flex flex-col justify-end w-[90%] sm:w-[18rem] md:w-[13rem] h-[15rem] md:h-[12.5rem] p-4">
    //     <h4 className="text-[#42B4EE] text-2xl md:text-xl mb-2 h-[20%]">{stepTitle}</h4>
    //     <p className='text-xl md:text-[1.1rem] h-[50%]'>{stepDescription}</p>
    //   </section>
    // </div>
  )
}

export default StepCard
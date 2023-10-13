import './stepCard.scss'

const StepCard = ({ stepDescription, stepTitle, stepCount }: { stepDescription: string, stepTitle: string, stepCount: string }) => {
  return (
    <div className="indicator flex justify-center">
      <span className="indicator-item indicator-center badge badge-primary p-4 text-lg">{stepCount}</span>
      <section className="md:bg-inherit bg-[#cffafe] rounded-3xl place-items-center text-center flex flex-col justify-end w-[90%] sm:w-[18rem] md:w-[13rem] h-[15rem] md:h-[12.5rem] p-4">
        <h4 className="text-[#42B4EE] text-2xl md:text-xl mb-2 h-[20%]">{stepTitle}</h4>
        <p className='text-xl md:text-[1.1rem] h-[50%]'>{stepDescription}</p>
      </section>
    </div>
  )
}

export default StepCard
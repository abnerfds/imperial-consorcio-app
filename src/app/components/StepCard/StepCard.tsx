import './stepCard.scss'

const StepCard = ({ stepDescription }: { stepDescription: string }) => {
  return (
    <li className="step__container step step-neutral">
      <div className='relative md:w-[5px] md:h-[100px] md:bg-[#42B4EE]'></div>
      <section className="flex flex-col justify-center w-[180px] h-[180px]  border-[1px] border-solid border-[#42B4EE] rounded-xl mb-6 md:mb-0 md:mt-6 p-2">
        <h4 className='text-[#6b7280]'>{stepDescription}</h4>
      </section>
    </li>
  )
}

export default StepCard
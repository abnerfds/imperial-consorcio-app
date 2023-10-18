import './reachUs.scss'
import ContactUsForm from "./ContactUsForm/ContactUsForm"
import OtherInfo from "./OtherInfo/OtherInfo"

const ReachUs = () => {
  return (
    <section className='bg-teste-p w-full min-h-screen py-20 flex flex-col justify-around items-center text-white mb-52'>
     
      <section className="w-[95%] relative">
        <h3 className={`text-white text-center sm:text-5xl text-4xl font-bold mb-8 lg:mb-16`}>
          Onde nos alcançar
        </h3>
        {/* min-h-[120vh] lg:min-h-full */}
        <section className='w-full flex flex-col lg:flex-row justify-around lg:justify-center items-center lg:items-start md:gap-12 lg:gap-24 xl:gap-48'>
          <ContactUsForm />
          <OtherInfo />
        </section>
      </section>

    </section>
  )
}

export default ReachUs
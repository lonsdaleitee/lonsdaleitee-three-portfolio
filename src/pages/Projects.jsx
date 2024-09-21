import { Link } from 'react-router-dom';
import { projects } from "../constants";
import { arrow } from "../../assets/icons";
import CTA from '../components/CTA';


const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My {" "}
        <span>
          Projects
        </span>
      </h1>

      <p>
        I've embarked on numerous projects throughout the years, but these are the ones I hold closest to my heart. Many of them are open-source, so if you come across something that piques your interest, feel free to explore the codebase and contribute your ideas for further enhancements. Your collaboration is highly valued!
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((pro) => (
          <div className="lg:w-[400px] w-full" key={pro.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${pro.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={pro.iconUrl} alt='threads' className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {pro.name}
              </h4>

              <p className='mt-2 text-slate-500'>
                {pro.description}
              </p>

              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={pro.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live link
                </Link>

                <img src={arrow} alt="arrow" className='w-4 h-4 object-contain' />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  )
}

export default Projects;
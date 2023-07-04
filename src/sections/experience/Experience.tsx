import { ExperienceCard } from './ExperienceCard';
import gsoc from '../../assets/gsoc.svg';
import karya from '../../assets/karya.svg';

export const Experience = () => {
  return (
    <section className="p-8 md:py-32  bg-[#FDF8BB] dark:bg-[#252326] flex justify-center">
      <div className="max-w-screen-lg">
        <div className=" w-fit">
          <h3
            className="text-3xl font-bold mb-16 relative
                md:after:absolute md:after:top-1/2 md:after:right-[-10rem]
                md:after:w-32 md:after:h-[2px]
                 md:after:bg-[#252326] md:after:dark:bg-white 
                "
          >
            My professional experience{' '}
          </h3>
        </div>

        <ExperienceCard
          organization={
            <p>
              01. At Karya{' '}
              <img
                className="h-8 md:h-24 md:mt-4 inline md:block"
                src={karya}
              />
            </p>
          }
          title="I am currently working as an SDE at Karya Inc"
          desc="At Karya, I am working on the development of the Karya Mobile app where users can do dataset collection and labeling of images, text, audio, and video via a WhatsApp-like chat-based UI. Tasks include annotating, labeling, and classifying images; converting text-to-speech and speech-to-text; collecting the image, audio, and video dataset; etc via phone. "
          tech_stack={[
            'Android',
            'Kotlin',
            'Jetpack Compose',
            'Dagger-Hilt',
            'AndroidX Libraries',
            'KoaJS',
            'PostgreSQL',
          ]}
          duration={'October 2022 - Present'}
        />
        <br />
        <br />
        <ExperienceCard
          organization={
            <p>
              02. At Google Summer of Code{' '}
              <img className="h-8 md:h-24 md:mt-4 inline md:block" src={gsoc} />
            </p>
          }
          title="Last summer, I worked as GSoC contributor at AnkiDroid"
          desc="During my Google Summer of Code journey, I worked on migrating the AnkiDroid android app codebase from AsyncTask(deprecated) to Kotlin Coroutines. My work was extensively around replacing the underlying architecture of Asynchronous operations to use the newer and better Kotlin Coroutines. I also wrote a bash script to automate the set up of the testing environment on Unix Environment, it proved to be a very useful tool for folks around the community as it was really hard for new contributors to set up."
          tech_stack={[
            'Android',
            'Kotlin',
            'Coroutines',
            'AsyncTask',
            'XML',
            'Linux',
            'SQLite',
          ]}
          duration={'October 2022 - Present'}
        />
      </div>
    </section>
  );
};

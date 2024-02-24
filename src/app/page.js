import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import deved from "../public/img2.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Malitha Supun Portfolio</title>
                <meta name="Description" content="Generated by created" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-white px-10 md:px-20 lg:px-40">
                <section className="min-h-screen">
                    <nav className="py-10 mb-12 flex justify-between">
                        <h1 className="text-xl font-burtons">Malitha Supun</h1>
                        <ul className="flex items-center">
                            <li>
                                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
                            </li>
                            <li>
                                <a className="bg-gradient-to-r bg-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Download-CV</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="text-center p-10">
                        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Malitha Supun</h2>
                        <h3 className="text-2xl py-2 md:text-3xl">Full-stack developer</h3>
                        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
                            Freelancer providing services for programming and design content needs. Join me down below and let&apos;s get cracking!
                        </p>
                    </div>
                    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
                        <a href="https://github.com/MalithaSupun"><AiFillGithub /></a>
                        <a href="https://www.linkedin.com/in/malitha-supun-a6145314a/?originalSubdomain=lk"><AiFillLinkedin /></a>
                        <a href="https://www.instagram.com/supun_malitha/?hl=en"><AiFillInstagram /></a>
                    </div>
                    <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
                        <Image src={deved} alt="Developer at work" layout="fill" objectFit="cover" />
                    </div>
                </section>

                <section>
                    <div>
                        <h3 className="text-3xl py-1 mt-10">Services I offer</h3>
                        <p className="text-md py-2 leading-8 text-gray-800">
                            Since the beginning of my journey as a Freelancer developer, I have done remote work for
                            <span className="text-teal-500"> agencies</span>, consulted for <span className="text-teal-500">startups</span>, and collaborated with talented people to create digital products for both business and consumer use.
                        </p>
                        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
                            I offer a wide range of services, including brand design, programming.
                        </p>
                    </div>
                    <div className="lg:flex gap-10">
                        <div className="text-center shadow-lg p-10 rounded-xl my-10 ">
                            <div className="flex flex-col items-center">
                                <Image src={code} alt="Coding" width={100} height={100} className="place-items-center" />
                                <h3 className="text-lg font-medium pt-8 pb-2">Skills</h3>
                                <p className="py-2">
                                    I possess strong coding skills with expertise in web development, database management, and problem-solving.
                                </p>
                                <h4 className="py-4 text-teal-600">Design tools I use</h4>
                                <p className="text-gray-800 py-1">Java</p>
                                <p className="text-gray-800 py-1">React</p>
                                <p className="text-gray-800 py-1">JavaScript</p>
                            </div>
                        </div>

                        <div className="text-center shadow-lg p-10 rounded-xl my-10">
                            <div className="flex flex-col items-center">
                                <Image src={design} alt="Designing" width={100} height={100} className="place-items-center" />
                                <h3 className="text-lg font-medium pt-8 pb-2">Prototypes</h3>
                                <p className="py-2">
                                    I excel in creating prototypes with precision, combining creativity and functionality to deliver seamless user experiences.
                                </p>
                                <h4 className="py-4 text-teal-600">Design tools I use</h4>
                                <p className="text-gray-800 py-1">Figma</p>
                                <p className="text-gray-800 py-1">Adobe XD</p>
                                <p className="text-gray-800 py-1">Drow.io</p>
                            </div>
                        </div>

                        <div className="text-center shadow-lg p-10 rounded-xl my-10">
                            <div className="flex flex-col items-center">
                                <Image src={consulting} alt="Consulting" width={100} height={100} className="place-items-center" />
                                <h3 className="text-lg font-medium pt-8 pb-2">Best projects</h3>
                                <p className="py-2">
                                    Innovative projects demonstrate problem-solving abilities, combining creativity and technology for impactful solutions.
                                </p>
                                <h4 className="py-4 text-teal-600">Design tools I use</h4>
                                <p className="text-gray-800 py-1">Pharmacy project</p>
                                <p className="text-gray-800 py-1">Timetiker</p>
                                <p className="text-gray-800 py-1">Sindustries</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div>
                        <h3 className="text-3xl py-1 mt-10">Portfolio</h3>
                        <p className="text-md py-2 leading-8 text-gray-800">
                            I am currently an undergraduate student at <span className="text-teal-500">SLIIT Academy</span> pursuing a <span className="text-teal-500">B.Sc. (Hons) in Computer Science and Software Engineering</span> from the University of <span className="text-teal-500">Bedfordshire</span>. My passion for technology extends beyond the classroom, as I actively seek opportunities to apply my knowledge in real-world scenarios. I consider myself a quick learner and thrive on challenges, always eager to explore and master new technologies. Whether it's web development, app creation, or Java programming, I approach each project with enthusiasm and a dedication to excellence. My goal is to leverage my skills and education to contribute meaningfully to the ever-evolving field of technology.
                        </p>
                    </div>

                    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                        <div className="basis-1/3 flex-1">
                            <Image src={web1} alt="Web project 1" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image src={web2} alt="Web project 2" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image src={web3} alt="Web project 3" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image src={web4} alt="Web project 4" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image src={web5} alt="Web project 5" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image src={web6} alt="Web project 6" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

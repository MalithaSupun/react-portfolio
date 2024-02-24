import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AIFillTwitterCircle, 
        AiFillLinkedin, 
        AiFillTwitterCircle, 
        AiFillYoutube,
     } from "react-icons/ai";


export default function Home() {
    return (
        <div>
            <Head>
                <title>Malitha Supun Portfolio</title>
                <meta name="Description" content="Genarated by created"></meta>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="bg-white px-10">
                <section className="min-h-screen">
                    <nav className="py-10 mb-12 flex justify-between">
                  <h1 className="text-xl font-burtons">developedbyed</h1>
                  <ul className="flex items-center">
                    <li>
                        <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
                    </li>
                    <li> 
                        <a className="bg-gredient-to-r bg-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resurme</a>
                    </li>
                  </ul>
                  </nav>
                  <div>
                    <h2>Malitha Supun</h2>
                    <h3>Full-stack developer</h3>
                    <p>
                        Freelancer providing services for programming and design content needs.Join me down below and let's get cracking!
                    </p>
                  </div>
                  <div>
                    <AiFillTwitterCircle/>
                    <AiFillLinkedin/>
                    <AiFillYoutube/>

                  </div>
                </section>
            </main>
        </div>
    );
}
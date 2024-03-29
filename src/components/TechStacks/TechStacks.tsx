import React from 'react';
import {BiLogoJavascript,BiLogoTypescript, BiLogoReact,BiLogoNodejs,BiLogoMongodb,BiLogoFirebase,BiLogoRedux, BiLogoTailwindCss,BiLogoPython,BiLogoUnity,
  BiLogoBlender,BiLogoJava} from 'react-icons/bi';
import {TbBrandThreejs, TbBrandCSharp, TbBrandNextjs} from 'react-icons/tb';
import {SiExpress, SiSvelte, SiWebpack,SiVite} from 'react-icons/si';
import {CgAtlasian} from 'react-icons/cg';
import {BsSlack} from 'react-icons/bs';
import Lottie from "lottie-react";
import lottie from '../../assets/lottie_tech.json';

interface TechStacksProps {
}

const TechStacks: React.FC<TechStacksProps> = ({ }) => {

  return (
    <div>
      {/* Mobile */}
      <section id='Skills' className='md:hidden'>
        <div className='flex flex-col justify-between'>
          <div style={{ width: '300px', height: '300px' }} className='mx-auto'>          
            <Lottie  animationData={lottie} loop={true} />
          </div>
          <div className='w-full my-auto'>
          <h2 className='w-full text-3xl font-extrabold text-center px-auto my-10'>What I Do</h2>
            <div className=' flex flex-col mt-6 ml-4'>
              <div className='w-[full] flex justify-center'>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoJavascript style={{color: '#666666', height: 50, width: 50}} />
                  <p className='text-center text-xs'>JavaScript</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoTypescript style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>TypeScript</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <TbBrandThreejs style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>THREEjs</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoTailwindCss style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Tailwind CSS</p>
                </div>
              </div>
              <div className='w-[full] flex justify-center'>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoPython style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Python</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <TbBrandCSharp style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>C#</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoJava style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Java</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoNodejs style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Nodejs</p>
                </div>
              </div>
              <div className='w-[full] flex justify-center'>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoReact style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>React</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoRedux style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Redux</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <TbBrandNextjs style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Next</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <SiSvelte style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Svelte</p>
                </div>
              </div>
              <div className='w-[full] flex justify-center'>
                <div className='flex flex-col mr-4 mb-3'>
                  <SiExpress style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>EXPRESSjs</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <SiVite style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Vite</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoMongodb style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>MongoDB</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoFirebase style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Firebase</p>
                </div>
              </div>
              <div className='w-[full] flex justify-center'>
                <div className='flex flex-col mr-4 mb-3'>
                  <SiWebpack style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Webpack</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BsSlack style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Slack</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoUnity style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Unity</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoBlender style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Blender</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <CgAtlasian style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Atlassian</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* MD */}
      <section id='Skills_md' className='hidden md:block lg:hidden'>
        <div className='flex flex-col justify-between pt-10'>
          <div style={{ width: '300px', height: '300px' }} className='mx-auto'>          
            <Lottie  animationData={lottie} loop={true} />
          </div>
          <div className='w-full my-auto'>
          <h2 className='w-full text-4xl font-extrabold text-center px-auto my-10'>What I Do</h2>
            <div className=' flex flex-col mt-6 ml-4'>
              <div className='w-[full] flex justify-center'>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoJavascript style={{color: '#666666', height: 50, width: 50}} />
                  <p className='text-center text-xs'>JavaScript</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoTypescript style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>TypeScript</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <TbBrandThreejs style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>THREEjs</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoReact style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>React</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoRedux style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Redux</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoTailwindCss style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Tailwind CSS</p>
                </div>
              </div>
              <div className='w-[full] flex justify-center'>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoPython style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Python</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <TbBrandCSharp style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>C#</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoJava style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Java</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoNodejs style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Nodejs</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <TbBrandNextjs style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Next</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <SiSvelte style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Svelte</p>
                </div>
              </div>
              <div className='w-[full] flex justify-center'>
                <div className='flex flex-col mr-4 mb-3'>
                  <SiExpress style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>EXPRESSjs</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <SiVite style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Vite</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoMongodb style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>MongoDB</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoFirebase style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Firebase</p>
                </div>
              </div>
              <div className='w-[full] flex justify-center'>
                <div className='flex flex-col mr-4 mb-3'>
                  <SiWebpack style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Webpack</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BsSlack style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Slack</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoUnity style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Unity</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoBlender style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Blender</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <CgAtlasian style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Atlassian</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* LARGE */}
      <section id='Skills_lg' className='hidden w-[100%] py-10 lg:block'>
        <div className='flex justify-center'>
          <Lottie className='w-[450px]' animationData={lottie} loop={true} />
          <div className='w-[450px] ml-14 my-auto'>
          <h2 className='text-4xl font-extrabold'>What I Do</h2>
            <div className=' flex flex-col mt-6 ml-4'>
              <div className='w-[full] flex'>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoJavascript style={{color: '#666666', height: 50, width: 50}} />
                  <p className='text-center text-xs'>JavaScript</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoTypescript style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>TypeScript</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <TbBrandThreejs style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>THREEjs</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoPython style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Python</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <TbBrandCSharp style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>C#</p>
                </div>
                
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoJava style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Java</p>
                </div>
              </div>
              <div className='w-[full] flex '>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoReact style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>React</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <TbBrandNextjs style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Next</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoRedux style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Redux</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <SiSvelte style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Svelte</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoTailwindCss style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Tailwind CSS</p>
                </div>
              </div>
              <div className='w-[full] flex '>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoNodejs style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Nodejs</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <SiExpress style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>EXPRESSjs</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoMongodb style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>MongoDB</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoFirebase style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Firebase</p>
                </div>
              </div>
              <div className='w-[full] flex '>
                <div className='flex flex-col mr-4 mb-3'>
                  <SiVite style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Vite</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <SiWebpack style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Webpack</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BsSlack style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Slack</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoUnity style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Unity</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <BiLogoBlender style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Blender</p>
                </div>
                <div className='flex flex-col mr-4 mb-3'>
                  <CgAtlasian style={{color: '#666666', height: 50, width: 50 }} />
                  <p className='text-center text-xs'>Atlassian</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechStacks;
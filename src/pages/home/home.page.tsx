import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Header } from 'components/Header';
import { CompanyLogos } from 'components/CompanyLogos';
import { Video } from 'components/shared/VideoPlayer';
import { FAQs } from 'components/FAQs';
import { Footer } from 'components/Footer';
import { HireEasily } from 'components/HireEasily';
import { SwitchButton, EnumServiceItems } from 'components/shared/SwitchButton';
import { HassleFreeProcess } from 'components/HassleFreeProcess';
import { InfiniteLooper, Direction } from 'components/shared/InfiniteLooper';
import { Button } from 'components/shared/Button';
import { useCommonContext } from 'contexts/CommonContext';
import { HireEasilyData } from 'components/HireEasily/HireEasily.content';

const SwitchButtonList: EnumServiceItems = [
  { label: 'Candidates', value: 'candidates' },
  { label: 'Employers', value: 'employers' }
];

const InfiniteLooperContent = [
  {
    speed: 60,
    direction: 'right' as Direction,
    images: [
      {
        url: '/avatar1.jpg'
      },
      {
        url: '/avatar2.jpg'
      },
      {
        url: '/avatar3.jpg'
      },
      {
        url: '/avatar4.jpg'
      }
    ]
  },
  {
    speed: 80,
    direction: 'right' as Direction,
    images: [
      {
        url: '/avatar1.jpg'
      },
      {
        url: '/avatar2.jpg'
      },
      {
        url: '/avatar3.jpg'
      },
      {
        url: '/avatar4.jpg'
      }
    ]
  },
  {
    speed: 70,
    direction: 'right' as Direction,
    images: [
      {
        url: '/avatar1.jpg'
      },
      {
        url: '/avatar2.jpg'
      },
      {
        url: '/avatar3.jpg'
      },
      {
        url: '/avatar4.jpg'
      }
    ]
  }
];

const Home: NextPage = () => {
  const router = useRouter();
  const { selectedRole, setSelectedRole } = useCommonContext();
  const [scrollTop, setScrollTop] = useState(0);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [visibleItemIndex, setVisibleItemIndex] = useState(-1);
  useEffect(() => {
    const handleScroll = (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop);

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              setVisibleItemIndex(index);
            }
          });
        },
        {
          root: null,
          rootMargin: '-40% 0px -40% 0px',
          threshold: 1.0
        }
      );

      const targetElements: Element[] = [];
      HireEasilyData.map(item => {
        const element = document.querySelector(`#hire-easily-${item.id}`);
        if (element) {
          targetElements.push(element);
        }
      });
      if (targetElements.length > 0) {
        targetElements.map(element => {
          observer.observe(element);
        });
      }

      return () => {
        if (targetElements.length > 0) {
          targetElements.map(element => {
            observer.unobserve(element);
          });
        }
      };
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 412) {
        setIsMobileDevice(false);
      } else {
        setIsMobileDevice(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChangeRole = (role: string) => {
    setSelectedRole(role);
  };

  const handleRegister = () => {
    if (selectedRole === 'candidates') {
      router.push('https://candidate.develop.hiretable.com/register');
    } else if (selectedRole === 'employers') {
      router.push('https://employer.develop.hiretable.com/register');
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Header />
      <main className="flex-auto pt-20">
        <div
          className={`${
            selectedRole === 'employers'
              ? 'rounded-none sm:rounded-bl-full sm:rounded-br-full'
              : 'rounded-bl-full rounded-br-full'
          } bg-[#111111] sm:h-[1289px] overflow-hidden ${
            selectedRole === 'employers' ? 'h-[790px]' : 'h-[1045px]'
          }`}
        >
          <div className="flex items-center flex-col max-w-[1200px] m-auto">
            <p className="text-white font-bold text-[28px] sm:text-[44px] leading-[150%] flex-grow-0 text-center pt-16">
              <span className="text-[#FCEA10]">Interview</span> candidates{' '}
              <br />
              with <span className="text-[#FCEA10]">video</span> responses
            </p>
            <div className="flex sm:hidden p-0 flex-col items-center">
              <p className="flex items-center pt-8 px-4 text-center white font-medium sm:text-xl text-base text-[#9E9E9E]">
                HireTable is the #1 platform for restaurant hiring managers to
                post jobs, receive video interview responses, and connect with
                the candidates.
              </p>
            </div>
            <div className="my-12">
              <SwitchButton
                data={SwitchButtonList}
                handleChange={role => handleChangeRole(role)}
                value={selectedRole}
              />
            </div>
          </div>
          <div className="relative w-full mt-5">
            <div
              className={
                selectedRole === 'employers'
                  ? 'flex items-center justify-center gap-[43px] px-4 '
                  : 'hidden'
              }
              id="link1"
            >
              <div className="w-[295px] h-[525px]">
                <Video url="https://media.videoask.com/transcoded/e9bf51a3-56ec-4871-942c-c4949cfef374/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6ImU5YmY1MWEzLTU2ZWMtNDg3MS05NDJjLWM0OTQ5Y2ZlZjM3NCIsImV4cCI6MTY3MTU4MjA4MX0.XjceQxuZolXhM7UYUNVcK4IUIQdr2N8M8oGRlMFIMVUima1sR1kBiw2mzf9NHMMTLNldvt3AthcYCdD61zKB2oYYtcJDahn49O73QTdzsJrCxIQvC3JxA-wohpHDLzHmsOGCe3NVWER8hZz7dTi4WsTqxgsPq9io50W4kfhdcvZdyzrTQPV2XWp0Imn-MWh9IScmx5lQXRjAOTs3hlBC4NHIcvHc7OrqgbOGaTTztuSacjuLQUeq8ZhUwYMgcvhPCVseJ_YdEkmjr11cI7a1dO0RDfCkxTB_gdb6pQsPGongoa-MhISwjWUZJbdcs7M6NtvQhQduWZ7Z3Jk0WDbdnHw0tZ-ErBqu_q6yroG_WNQAkVWoPlOCgciXfPsPdGWNF8Y3o9_8bX4LDohCRZf8vOaDWZFqftQ5b8tmWq4_WaiTCWuR1r5Fx4k0lTXTBsG8hvTsMj4zykynyh1-3Cpkg09kOh90znXpEDu0Vt3KS8dctY9vpqceMJXeNgQ08Fnn6bq-PfNAxjQ93w87SCNTgsU8neefRDnaFqLhYoGgHL3skLTWlIZtFyb7POveVn0lkubUDKpgt7SlVHO73o8mfefxbYtb2k9Jrqdfms2X8X-uxpKTH--Radq_q6GdWByxVWAQCOenuYXgognqulAvNGclbV1MKeSmHB-poKT9xQ8" />
              </div>
              <div className="hidden sm:flex w-[439.35px] h-[312px] gap-16 p-0 flex-col items-center">
                <p className="flex items-center text-center font-medium text-xl text-[#9E9E9E]">
                  HireTable is the #1 platform for restaurant hiring managers to
                  post jobs, receive video interview responses, and connect with
                  the candidates.
                </p>
              </div>
              <div className="w-[295px] h-[525px]">
                <Video url="https://media.videoask.com/transcoded/31197a84-1c24-4c72-82e0-eb8e03aba2f8/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6IjMxMTk3YTg0LTFjMjQtNGM3Mi04MmUwLWViOGUwM2FiYTJmOCIsImV4cCI6MTY3MTU0MTc1Nn0.vLkqYLaw39adEXZvU_t9QuoUktac4NM1dTkdLO_7e5DuAcwVS_6urfZ6EhLCx9WDJT227nFPlmXHVBdxpk9-vnSmBkmLJnGbsMUWvBSjZOJdLjyfcc-QHlvdNIfxIsvfg4lmb0K3Urb1Q6BPRuT1hEMsM-px99IHjfS3_n2Dc-Vzc--V_ENHeexN-PBiEAS3e3Y0jqcxwa8DhwE51h0DOnluq9R5q8GJeAVPbjgzS_m0fOSJQackzmRiOCOPmdIYsxGyUZVutYGLpTVw4IBunRl3RGiX-vrShzyPUWAVaa-JBovYlybwHQUqyE5o8KrFjl2wtqwOeKmP7jq26ekSkkDFFgRYxmilUQ9mAwtxFZQqc5kzQzxHITqN25mwYm8boG2D4WYSzBQHQnp7gQxvyEp41Ika6XJ7ZEsLiY-qIyAjXom7PuizrynH14q38kejGtMexQpp09DucKeU0RZLgS_-YRH-O_e36SwTNPieH7kb-iIUDG1P9NKt1rTbcxNunizV4_s9ZGxhvzZm1K0sNV7qOv15kyjh_05_IB7JCOz4YBJxypo9rPEl6XsnG3YtRiqTN9TYwYBFjRBa0ZpyZNZI1YApAeIJhBajGJ1qEwV9HrCMnjFrn1kF0bmMO_8qEQVailYhGhvrbDoPNIA28a1anGQFyeCRrT9Gn-YMKSY" />
              </div>

              <Image
                src="/Vector.svg"
                width={439.35}
                height={128}
                alt="vector"
                className="hidden sm:block absolute bottom-32 h-12 w-[164.76px] sm:h-32 sm:w-[439.35px]"
              />
            </div>

            <div
              className={`${
                selectedRole === 'candidates' ? 'block relative' : 'hidden'
              }`}
              id="link2"
            >
              <div className="left-gradient"></div>
              {InfiniteLooperContent.map((item, index) => (
                <InfiniteLooper
                  key={`infinite-${index}`}
                  speed={item.speed}
                  direction={item.direction}
                  isShow={selectedRole === 'candidates'}
                >
                  {item.images &&
                    item.images.map((image, idx) => (
                      <div
                        className="contentBlock"
                        key={`infinite-${index}-${idx}`}
                        style={{
                          backgroundImage: `url(${image.url})`
                        }}
                      ></div>
                    ))}
                </InfiniteLooper>
              ))}
              <div className="right-gradient"></div>
              <div className="flex items-center sm:w-[331px] sm:h-[712px] w-[295px] h-[525px] justify-center gap-16 absolute  left-1/2 -top-[12px] -translate-x-1/2">
                <Video url="https://media.videoask.com/transcoded/31197a84-1c24-4c72-82e0-eb8e03aba2f8/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6IjMxMTk3YTg0LTFjMjQtNGM3Mi04MmUwLWViOGUwM2FiYTJmOCIsImV4cCI6MTY3MTU0MTc1Nn0.vLkqYLaw39adEXZvU_t9QuoUktac4NM1dTkdLO_7e5DuAcwVS_6urfZ6EhLCx9WDJT227nFPlmXHVBdxpk9-vnSmBkmLJnGbsMUWvBSjZOJdLjyfcc-QHlvdNIfxIsvfg4lmb0K3Urb1Q6BPRuT1hEMsM-px99IHjfS3_n2Dc-Vzc--V_ENHeexN-PBiEAS3e3Y0jqcxwa8DhwE51h0DOnluq9R5q8GJeAVPbjgzS_m0fOSJQackzmRiOCOPmdIYsxGyUZVutYGLpTVw4IBunRl3RGiX-vrShzyPUWAVaa-JBovYlybwHQUqyE5o8KrFjl2wtqwOeKmP7jq26ekSkkDFFgRYxmilUQ9mAwtxFZQqc5kzQzxHITqN25mwYm8boG2D4WYSzBQHQnp7gQxvyEp41Ika6XJ7ZEsLiY-qIyAjXom7PuizrynH14q38kejGtMexQpp09DucKeU0RZLgS_-YRH-O_e36SwTNPieH7kb-iIUDG1P9NKt1rTbcxNunizV4_s9ZGxhvzZm1K0sNV7qOv15kyjh_05_IB7JCOz4YBJxypo9rPEl6XsnG3YtRiqTN9TYwYBFjRBa0ZpyZNZI1YApAeIJhBajGJ1qEwV9HrCMnjFrn1kF0bmMO_8qEQVailYhGhvrbDoPNIA28a1anGQFyeCRrT9Gn-YMKSY" />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-2">
          <CompanyLogos />
          <HassleFreeProcess />
          <HireEasily visibleItemIndex={visibleItemIndex} />
          <FAQs />
        </div>
        {isMobileDevice && scrollTop >= 400 && (
          <div className="fixed bottom-0 flex flex-col items-center bg-[#111111] z-10 py-4 w-full">
            <p className="text-[#FAFAFA] mb-3">Want to hire elites?</p>
            <Button
              title="Get Started"
              bg="bg-[#5043FF] hover:bg-[#3D31FE]"
              color="text-[#ffffff]"
              size="base"
              classes="max-w-[311px] w-full"
              onClick={() => handleRegister()}
            />
          </div>
        )}
      </main>

      <Footer isCircle={true} />
    </div>
  );
};

export default Home;

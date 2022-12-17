import Head from 'next/head';
import { NextPage } from 'next';
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
import { useTabContext } from 'contexts/TabContentProvider';

const SwitchButtonList: EnumServiceItems = [
  { id: 1, title: 'Candidates' },
  { id: 2, title: 'Employers' }
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
  const { tab } = useTabContext();

  return (
    <div>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Header />
      <main>
        <div className="rounded-bl-full rounded-br-full bg-[#111111] h-[1289px]">
          <div className="flex items-center flex-col ">
            <p className="text-white font-bold text-[56px] leading-[150%] flex-grow-0 text-center">
              <span className="text-[#FCEA10]">Inteview</span> candidates <br />
              with <span className="text-[#FCEA10]">video</span> responses
            </p>
            <div className="mt-16">
              <SwitchButton data={SwitchButtonList} />
            </div>
            <div className="relative w-full mt-5">
              <div
                className={
                  tab === 1
                    ? 'flex items-center justify-center gap-16 '
                    : 'hidden'
                }
                id="link1"
              >
                <Video
                  height={525}
                  width={295}
                  url="https://media.videoask.com/transcoded/e9bf51a3-56ec-4871-942c-c4949cfef374/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6ImU5YmY1MWEzLTU2ZWMtNDg3MS05NDJjLWM0OTQ5Y2ZlZjM3NCIsImV4cCI6MTY3MTU4MjA4MX0.XjceQxuZolXhM7UYUNVcK4IUIQdr2N8M8oGRlMFIMVUima1sR1kBiw2mzf9NHMMTLNldvt3AthcYCdD61zKB2oYYtcJDahn49O73QTdzsJrCxIQvC3JxA-wohpHDLzHmsOGCe3NVWER8hZz7dTi4WsTqxgsPq9io50W4kfhdcvZdyzrTQPV2XWp0Imn-MWh9IScmx5lQXRjAOTs3hlBC4NHIcvHc7OrqgbOGaTTztuSacjuLQUeq8ZhUwYMgcvhPCVseJ_YdEkmjr11cI7a1dO0RDfCkxTB_gdb6pQsPGongoa-MhISwjWUZJbdcs7M6NtvQhQduWZ7Z3Jk0WDbdnHw0tZ-ErBqu_q6yroG_WNQAkVWoPlOCgciXfPsPdGWNF8Y3o9_8bX4LDohCRZf8vOaDWZFqftQ5b8tmWq4_WaiTCWuR1r5Fx4k0lTXTBsG8hvTsMj4zykynyh1-3Cpkg09kOh90znXpEDu0Vt3KS8dctY9vpqceMJXeNgQ08Fnn6bq-PfNAxjQ93w87SCNTgsU8neefRDnaFqLhYoGgHL3skLTWlIZtFyb7POveVn0lkubUDKpgt7SlVHO73o8mfefxbYtb2k9Jrqdfms2X8X-uxpKTH--Radq_q6GdWByxVWAQCOenuYXgognqulAvNGclbV1MKeSmHB-poKT9xQ8"
                />
                <div className="hidden sm:flex w-[439.35px] h-[312px] gap-16 p-0 flex-col items-center">
                  <p className=" flex items-center text-center font-medium text-xl text-[#9E9E9E]">
                    HireTable is the #1 platform for restaurant hiring managers
                    to post jobs, receive video interview responses, and connect
                    with the candidates.
                  </p>
                </div>
                <Video
                  height={525}
                  width={295}
                  url="https://media.videoask.com/transcoded/31197a84-1c24-4c72-82e0-eb8e03aba2f8/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6IjMxMTk3YTg0LTFjMjQtNGM3Mi04MmUwLWViOGUwM2FiYTJmOCIsImV4cCI6MTY3MTU0MTc1Nn0.vLkqYLaw39adEXZvU_t9QuoUktac4NM1dTkdLO_7e5DuAcwVS_6urfZ6EhLCx9WDJT227nFPlmXHVBdxpk9-vnSmBkmLJnGbsMUWvBSjZOJdLjyfcc-QHlvdNIfxIsvfg4lmb0K3Urb1Q6BPRuT1hEMsM-px99IHjfS3_n2Dc-Vzc--V_ENHeexN-PBiEAS3e3Y0jqcxwa8DhwE51h0DOnluq9R5q8GJeAVPbjgzS_m0fOSJQackzmRiOCOPmdIYsxGyUZVutYGLpTVw4IBunRl3RGiX-vrShzyPUWAVaa-JBovYlybwHQUqyE5o8KrFjl2wtqwOeKmP7jq26ekSkkDFFgRYxmilUQ9mAwtxFZQqc5kzQzxHITqN25mwYm8boG2D4WYSzBQHQnp7gQxvyEp41Ika6XJ7ZEsLiY-qIyAjXom7PuizrynH14q38kejGtMexQpp09DucKeU0RZLgS_-YRH-O_e36SwTNPieH7kb-iIUDG1P9NKt1rTbcxNunizV4_s9ZGxhvzZm1K0sNV7qOv15kyjh_05_IB7JCOz4YBJxypo9rPEl6XsnG3YtRiqTN9TYwYBFjRBa0ZpyZNZI1YApAeIJhBajGJ1qEwV9HrCMnjFrn1kF0bmMO_8qEQVailYhGhvrbDoPNIA28a1anGQFyeCRrT9Gn-YMKSY"
                />
                <Image
                  src="/Vector.svg"
                  width={439.35}
                  height={128}
                  alt="vector"
                  className="absolute -bottom-60 sm:bottom-32 h-12 w-[164.76px] sm:h-32 sm:w-[439.35px]"
                />
              </div>

              <div
                className={tab === 2 ? 'block relative mt-5' : 'hidden'}
                id="link2"
              >
                <div className="rounded-bl-full rounded-br-full h-[977px] overflow-hidden">
                  {InfiniteLooperContent.map((item, index) => (
                    <InfiniteLooper
                      key={`infinite-${index}`}
                      speed={item.speed}
                      direction={item.direction}
                      isShow={tab === 2}
                    >
                      {item.images &&
                        item.images.map((image, idx) => (
                          <div
                            className="contentBlock"
                            key={`infinite-${index}-${idx}`}
                          >
                            <Image
                              className="rounded"
                              alt="Avatar"
                              src={image.url}
                              height={192}
                              width={192}
                            />
                          </div>
                        ))}
                    </InfiniteLooper>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-16 absolute left-1/2 -top-[12px] -translate-x-1/2">
                  <Video
                    height={712}
                    width={331}
                    url="https://media.videoask.com/transcoded/31197a84-1c24-4c72-82e0-eb8e03aba2f8/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6IjMxMTk3YTg0LTFjMjQtNGM3Mi04MmUwLWViOGUwM2FiYTJmOCIsImV4cCI6MTY3MTU0MTc1Nn0.vLkqYLaw39adEXZvU_t9QuoUktac4NM1dTkdLO_7e5DuAcwVS_6urfZ6EhLCx9WDJT227nFPlmXHVBdxpk9-vnSmBkmLJnGbsMUWvBSjZOJdLjyfcc-QHlvdNIfxIsvfg4lmb0K3Urb1Q6BPRuT1hEMsM-px99IHjfS3_n2Dc-Vzc--V_ENHeexN-PBiEAS3e3Y0jqcxwa8DhwE51h0DOnluq9R5q8GJeAVPbjgzS_m0fOSJQackzmRiOCOPmdIYsxGyUZVutYGLpTVw4IBunRl3RGiX-vrShzyPUWAVaa-JBovYlybwHQUqyE5o8KrFjl2wtqwOeKmP7jq26ekSkkDFFgRYxmilUQ9mAwtxFZQqc5kzQzxHITqN25mwYm8boG2D4WYSzBQHQnp7gQxvyEp41Ika6XJ7ZEsLiY-qIyAjXom7PuizrynH14q38kejGtMexQpp09DucKeU0RZLgS_-YRH-O_e36SwTNPieH7kb-iIUDG1P9NKt1rTbcxNunizV4_s9ZGxhvzZm1K0sNV7qOv15kyjh_05_IB7JCOz4YBJxypo9rPEl6XsnG3YtRiqTN9TYwYBFjRBa0ZpyZNZI1YApAeIJhBajGJ1qEwV9HrCMnjFrn1kF0bmMO_8qEQVailYhGhvrbDoPNIA28a1anGQFyeCRrT9Gn-YMKSY"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <CompanyLogos />
        <HassleFreeProcess />
        <HireEasily />
        <FAQs />
      </main>

      <Footer isCircle={true} />
    </div>
  );
};

export default Home;

import { NextPage } from 'next';
import Link from 'next/link';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Video } from 'components/shared/VideoPlayer';

const DealMade: NextPage = () => {
  return (
    <div>
      <Header />
      <div className="flex sm:flex-row flex-col items-center justify-evenly px-4 sm:px-20 pb-16 pt-28">
        <div className="flex flex-col justify-start items-center sm:w-[618px] mb-8">
          <p className="font-bold sm:text-[44px] text-[28px] flex-grow-0 text-center sm:text-left">
            You just made a deal!
          </p>
          <p className="font-medium text-xl my-8 text-center">
            One of our sales team representative will reach out to you, in the
            mean time you can explore our more features.
          </p>
          <Link
            href="/pricing"
            className={`text-white mt-5 font-medium sm:font-bold text-base flex justify-center items-center rounded-[64px] w-[280px] h-[45px] bg-[#5043FF] gap-2 px-3 py-1`}
          >
            Go to pricing
          </Link>
        </div>
        <div className="max-w-[340px]">
          <Video url="https://media.videoask.com/transcoded/c2b1ad38-dac7-43d7-878c-ad97b7fd3001/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6ImMyYjFhZDM4LWRhYzctNDNkNy04NzhjLWFkOTdiN2ZkMzAwMSIsImV4cCI6MTY3MTU2NTQzOH0.zyGNKzV0dnNVRj9vBJn5ybjAuSDt_mnHWwsmOJ2kOPzesje_dt760ev6c_9xoT0q3VJRxM5G7LhJvUS0b7feqw8XRiZ0kBAtWfkHDFIzWhu3amxukdI2lqVdKrgknmp0LrW22QO_jTclu06VB35Sl9KNotn3aqtGXAeuP1fJ-6gGFR_apV28JS_vnioxUWAN_L7ms-H4B2pJDQl-tsBeFKcNx8FnmwoGRsN9VrsU_99LpyZhowr80GV7x_Dq78c2RJ9T_eYtoVXGN9nt0Ktxh69eWDNKkwIF2OiCGT9xSJETi6stxNoMjnP6uW39qyqcYJCHntlilQgS9K3ks2gHKWD5HKJt_7DByShw6CFyd-1BtzaES4VA8RDwueZAJznbkympEekTm3LQ_xRg4DfL5nv2u9F5_RXEHRLjc16oL3TpOjVlIKpCFuGQGIC1WEflakhG-cpIFOtjC84HTYikg6F7x-HlqPyaNehIOjZvfAStKlzITvaDLGOhULmrhg6uWrFX4sGxIlJcM_sTq0yds7fIh6V7KsXQ-3lPmqec4iU5txBlUdGDpaDNIc7UpuhHCD_sUgfdXixOKyN7xxrDAPLnpuQ3EaQmL6gyzVaV5Mlj4Qz_K-wSJ6J9M5RxHDAjXOy5JUdj4epSKRXEAhMDoXVwVhKTsSQlaeYSn1llmfU" />
        </div>
      </div>
      <Footer isCircle={false} />
    </div>
  );
};

export default DealMade;

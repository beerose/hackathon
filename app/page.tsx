import { Button } from '@/components/Button'
import Judge from '@/components/Judge'
import Navbar from '@/components/Navbar'
import PrizeCard from '@/components/PrizeCard'
import { classNames } from '@/src/utils'

const timeline = [
  {
    id: 1,
    name: 'Kick off event',
    date: '13/04/2024 9 am PST',
  },
  {
    id: 2,
    name: 'Development days',
    date: '13/04/2024  — 29/04/2024',
  },
  {
    id: 3,
    name: 'Submission deadline',
    date: '29/04/2024 12 am PST',
  },
  {
    id: 4,
    name: 'Voting',
    date: '30/04/2024 — 10/05/2024',
  },
  {
    id: 5,
    name: 'Results announcement',
    date: '10/05/2024',
  },
  {
    id: 6,
    name: 'Summary event',
    date: '12/05/2024',
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 leading-8 relative">
      <div className="fixed z-20 w-full top-0">
        <Navbar isSignedIn={true} />
      </div>
      <div className="flex flex-col items-center md:w-10/12 lg:w-8/12 xl:w-6/12 z-10">
        <div className="mt-[120px] md:mt-[200px] text-textPrimary flex flex-col items-center space-y-2">
          <div className="flex items-center space-x-2">
            <svg
              width="94"
              height="28"
              viewBox="0 0 94 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M79.6184 13.7917C79.6184 20.3318 77.0175 21.504 74.1106 21.504H67.9296V6.07936H74.1106C77.0175 6.07936 79.6184 7.25164 79.6184 13.7917ZM76.4669 13.7924C76.4669 9.22669 75.0899 9.01074 73.101 9.01074H71.1733V18.574H73.101C75.0899 18.574 76.4669 18.3581 76.4669 13.7924ZM43.7254 21.504V6.07936H53.4559V9.01005H46.9689V12.1567H51.8647V15.0565H46.9689V18.5734H53.4559V21.504H43.7254ZM58.7498 28H61.9544V0H58.7498V28ZM86.1046 14.6566V18.5745H88.7973C90.4802 18.5745 90.9086 17.4639 90.9086 16.631C90.9086 15.9831 90.6026 14.6566 88.3077 14.6566H86.1046ZM86.1046 9.01074V11.9414H88.3077C89.5623 11.9414 90.2966 11.3861 90.2966 10.4607C90.2966 9.53518 89.5623 9.01074 88.3077 9.01074H86.1046ZM82.862 6.07936H89.1042C92.3783 6.07936 93.3574 8.39306 93.3574 10.0589C93.3574 11.6014 92.3783 12.712 91.7051 13.0205C93.6634 13.9768 94 15.9203 94 16.9075C94 18.2032 93.3574 21.504 89.1042 21.504H82.862V6.07936ZM25.0915 13.7917C25.0915 20.3318 22.4906 21.504 19.5837 21.504H13.4027V6.07936H19.5837C22.4906 6.07936 25.0915 7.25164 25.0915 13.7917ZM34.6378 18.6981C36.2902 18.6981 37.1469 18.1428 37.4529 17.7726V16.0759H34.8214V13.4229H40.0538V19.5619C39.5948 20.2714 37.0857 21.6597 34.7908 21.6597C31.0271 21.6597 27.8449 20.1789 27.8449 13.6388C27.8449 7.09876 31.0577 5.92649 33.9646 5.92649C38.5239 5.92649 39.656 8.33274 40.0232 10.4613L37.3305 11.0783C37.1775 10.0912 36.3208 8.85718 34.3624 8.85718C32.3735 8.85718 30.9965 9.07312 30.9965 13.6388C30.9965 18.2045 32.4347 18.6981 34.6378 18.6981ZM21.9395 13.7924C21.9395 9.22669 20.5625 9.01074 18.5736 9.01074H16.6459V18.574H18.5736C20.5625 18.574 21.9395 18.3581 21.9395 13.7924ZM0 21.504V6.07936H9.73044V9.01005H3.24348V12.1567H8.1393V15.0565H3.24348V18.5734H9.73044V21.504H0Z"
                fill="#EFE1EC"
              />
            </svg>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.756637 0.756638C1.76549 -0.252213 3.40116 -0.252213 4.41001 0.756638L16 12.3466L27.59 0.756638C28.5988 -0.252213 30.2345 -0.252213 31.2434 0.756638C32.2522 1.76549 32.2522 3.40116 31.2434 4.41001L19.6534 16L31.2434 27.59C32.2522 28.5989 32.2522 30.2345 31.2434 31.2434C30.2345 32.2522 28.5988 32.2522 27.59 31.2434L16 19.6534L4.41001 31.2434C3.40116 32.2522 1.76549 32.2522 0.756637 31.2434C-0.252212 30.2345 -0.252212 28.5988 0.756637 27.59L12.3467 16L0.756637 4.41001C-0.252212 3.40116 -0.252212 1.76549 0.756637 0.756638Z"
                fill="#D92D54"
              />
            </svg>
            <svg
              width="110"
              height="21"
              viewBox="0 0 110 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M54.8755 5.25C50.5801 5.25 47.483 7.6125 47.483 11.1562C47.483 14.7 50.9692 17.0625 55.2646 17.0625C57.8597 17.0625 60.1475 16.1962 61.5637 14.7361L58.5873 13.2858C57.8014 14.0109 56.6069 14.4342 55.2646 14.4342C53.4009 14.4342 51.8173 13.6139 51.2298 12.3014H62.1318C62.2174 11.9339 62.268 11.5533 62.268 11.153C62.268 7.6125 59.1709 5.25 54.8755 5.25ZM51.1948 10.0078C51.6812 8.69859 53.0118 7.875 54.8716 7.875C56.7353 7.875 58.0659 8.69859 58.5484 10.0078H51.1948ZM96.7714 5.25C92.4759 5.25 89.3789 7.6125 89.3789 11.1562C89.3789 14.7 92.865 17.0625 97.1604 17.0625C99.7556 17.0625 102.043 16.1962 103.46 14.7361L100.483 13.2858C99.6972 14.0109 98.5028 14.4342 97.1604 14.4342C95.2968 14.4342 93.7132 13.6139 93.1257 12.3014H104.028C104.113 11.9339 104.164 11.5533 104.164 11.153C104.164 7.6125 101.067 5.25 96.7714 5.25ZM93.0946 10.0078C93.5809 8.69859 94.9116 7.875 96.7714 7.875C98.635 7.875 99.9657 8.69859 100.448 10.0078H93.0946ZM77.9089 11.1562C77.9089 13.125 79.4341 14.4375 81.7997 14.4375C83.4027 14.4375 84.6049 13.8239 85.2235 12.8231L88.2117 14.2767C86.9744 16.0158 84.6555 17.0625 81.7997 17.0625C77.5004 17.0625 74.4072 14.7 74.4072 11.1562C74.4072 7.6125 77.5042 5.25 81.7997 5.25C84.6555 5.25 86.9705 6.29672 88.2117 8.03578L85.2235 9.48937C84.6049 8.48859 83.4027 7.875 81.7997 7.875C79.438 7.875 77.9089 9.1875 77.9089 11.1562ZM110 1.64062V16.7344H106.498V1.64062H110ZM14.3764 0L28.7528 21H0L14.3764 0ZM50.3194 1.64062L39.5381 17.3906L28.7567 1.64062H32.7992L39.5381 11.4844L46.2769 1.64062H50.3194ZM73.24 5.57812V8.75766C72.8509 8.6625 72.4385 8.59688 71.9949 8.59688C69.7344 8.59688 68.1041 9.90938 68.1041 11.8781V16.7344H64.6024V5.57812H68.1041V8.59688C68.1041 6.93 70.4036 5.57812 73.24 5.57812Z"
                fill="#EFE1EC"
              />
            </svg>
          </div>
          <span className="text-4xl md:text-8xl tracking-wider font-bold">
            hackathon
          </span>
        </div>

        <h3 className="text-primary text-2xl font-bold mb-4 mt-6">Judges</h3>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <Judge
            img="https://via.placeholder.com/80"
            name="The judge"
            title="CEO"
          />
          <Judge
            img="https://via.placeholder.com/80"
            name="The Browne"
            title="CEO ping.gg"
          />
          <Judge
            img="https://via.placeholder.com/80"
            name="Guillermo Rauch"
            title="CEO Vercel"
          />
        </div>

        <div className="mt-10">
          <Button
            title="Register / log-in"
            variant="primary"
          />
        </div>
        <p className="hidden md:block text-xl md:text-2xl leading-8 md:leading-10 text-white mt-20 py-10 text-center font-opensans font-normal tracking-wide">
          Join our first Hackathon, an event for developers of all levels to
          create, learn, and connect. Showcase your talents, acquire new skills,
          and meet fellow developers.
        </p>

        <div className="mt-20 flex items-center flex-col">
          <h3 className="text-primary text-5xl font-bold mb-14 text-center">
            Rules
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-7">
              <div className="relative px-6 py-5 border border-textPrimary/20">
                <h4 className="text-primary text-2xl font-bold mb-3">
                  Team size
                </h4>
                <p className="font-opensans text-base text-textBase leading-8">
                  Your team size is up to you, and the prize will be split among
                  all members.
                </p>
              </div>
              <div className="relative px-6 py-5 border border-textPrimary/20">
                <h4 className="text-primary text-2xl font-bold mb-3">
                  Tech stack
                </h4>
                <p className="font-opensans text-base text-textBase leading-8">
                  Use <b>EdgeDB</b> and host your app on <b>Vercel</b>, but the
                  rest of the tech stack is up to you.
                </p>
              </div>
            </div>

            <div className="px-6 py-5 relative border border-textPrimary/20">
              <h4 className="text-primary text-2xl font-bold mb-4">
                Submissions
              </h4>
              <p className="font-opensans text-base text-textBase leading-8">
                You will have <b>two weeks</b> to complete your project and
                submit:
                <ul className="list-disc list-inside">
                  <li>
                    a <span className="text-primary">repo URL</span>,
                  </li>
                  <li>
                    a deployed{' '}
                    <span className="text-primary">Vercel app link</span>,
                  </li>
                  <li>
                    a <span className="text-primary">quick demo video</span>,
                  </li>
                  <li>
                    a <span className="text-primary">brief explanation</span> of
                    how your project uses EdgeDB.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center space-y-8">
          <h3 className="text-primary text-5xl font-bold mb-1">Prizes</h3>
          <div className="w-1/2 px-2">
            <PrizeCard
              prize={5000}
              title="1st prize"
              variant="main"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <PrizeCard
              prize={3000}
              title="2nd prize"
              variant="secondary"
            />
            <PrizeCard
              prize={1000}
              title="3rd prize"
              variant="secondary"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <PrizeCard
              prize={1000}
              title="Special prize"
              variant="special"
              specialTitle="The funniest project"
            />
            <PrizeCard
              prize={1000}
              title="Discord champion"
              variant="special"
              specialTitle="Special nomination"
            />
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-primary text-5xl font-bold mb-14 text-center">
            Timeline
          </h3>
          <ul
            role="list"
            className="space-y-16"
          >
            {timeline.map((activityItem, activityItemIdx) => (
              <li
                key={activityItem.id}
                className="relative flex gap-x-4"
              >
                <div
                  className={classNames(
                    activityItemIdx === timeline.length - 1
                      ? 'h-16'
                      : '-bottom-16',
                    'absolute left-0 top-6 flex w-6 justify-center'
                  )}
                >
                  {activityItemIdx !== timeline.length - 1 && (
                    <div className="w-px h-full bg-gray-500" />
                  )}
                </div>

                <>
                  <div className="relative flex h-6 w-6 flex-none items-center justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary ring-1 ring-primary" />
                  </div>
                  <div className="flex flex-col -my-0.5 leading-5">
                    <span className="text-primary font-semibold text-xl">
                      {activityItem.name}
                    </span>
                    <time
                      dateTime={activityItem.date}
                      className="flex-none py-0.5 leading-5 text-2xl text-textBase"
                    >
                      {activityItem.date}
                    </time>
                  </div>
                </>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 flex items-center flex-col">
          <h3 className="text-primary text-5xl font-bold mb-12 text-center">
            Getting started
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <Button
                title="Join Discord"
                variant="secondary"
              />
              <Button
                title="Read the rules"
                variant="secondary"
              />
            </div>
            <div className="space-y-4">
              <Button
                title="Submit your project"
                variant="secondary"
              />
              <Button
                title="View the prizes"
                variant="secondary"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 flex items-center flex-col p-6">
          <h3 className="text-primary text-5xl mb-12 font-bold text-center">
            Why join?
          </h3>
          <ul className="list-disc list-outside font-opensans text-lg leading-8 text-textBase">
            <li>
              Boost your skills: Take this chance to learn more about building
              Next.js apps with EdgeDB and advance your coding expertise.
            </li>
            <li>
              Network and collaborate: Connect with other coders, share tips,
              and start something new together.
            </li>
            <li>
              Win cool prizes: Challenge yourself for an opportunity to win
              exciting prizes.
            </li>
          </ul>
        </div>

        <div className="mt-20 flex flex-col items-center p-6">
          <h3 className="text-primary text-5xl font-bold mb-12">Need help?</h3>
          <p className="text-lg leading-8 text-textBase font-opensans">
            If you run into any questions or need a hand with your project,
            don&apos;t worry! Join us on Discord. We have a dedicated hackathon
            channel where you can get support, ask questions, and interact with
            other participants and our team.{' '}
            <a
              href="#"
              className="text-primary"
            >
              Ask&nbsp;a&nbsp;question&nbsp;on&nbsp;our&nbsp;Discord.
            </a>
          </p>
        </div>

        <div className="my-20">
          <Button
            title="Register / log-in"
            variant="primary"
          />
        </div>
      </div>
    </main>
  )
}

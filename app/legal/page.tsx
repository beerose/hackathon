export default function Page() {
  return (
    <div className="flex flex-col items-center md:w-10/12 lg:w-8/12 xl:w-6/12 z-10">
      <div className="mt-20 md:mt-32 flex items-center flex-col">
        <h3 className="text-primary text-5xl font-bold mb-12 text-center">
          Legal Info
        </h3>

        <section className="text-lg text-textBase font-sans">
          <h4 className="text-xl font-bold mb-6 text-center">EdgeDB x Vercel Hackathon: OFFICIAL CONTEST RULES</h4>
          <p className="mb-4 text-center">
            Effective as of: 26th of April, 2024
          </p>

          <p className="mb-4">
            NO PURCHASE OR PAYMENT NECESSARY TO ENTER OR WIN. MAKING A PURCHASE FOR ANY EDGEDB SERVICES
            DOES NOT INCREASE YOUR CHANCES OF WINNING. The EdgeDB x Vercel Hackathon (the “Contest”) is
            sponsored by EdgeDB Inc., having an address of "TODO" (“EdgeDB”).
          </p>

          <b>ELIGIBILITY:</b>
          <p className="mb-4">
            Subject to these Official Rules, the Contest is open only to permanent legal U.S. residents physically residing in
            the fifty (50) United States of America and the District of Columbia, who are at least [18] years old as of the
            date of entry. Employees of EdgeDB, [name(s) of entity/entities associated with prize(s)], and their respective
            parents, affiliates, subsidiaries, and advertising and promotion agencies and any other entity involved in the
            development or administration of this Contest, and their immediate family members or household members
            are not eligible to participate in or win the Contest. THIS CONTEST IS VOID WHERE PROHIBITED OR RESTRICTED
            BY LAW, INCLUDING BUT NOT LIMITED TO JURISDICTIONS WITH LAWS THAT WOULD REQUIRE REGISTRATION,
            DISCLOSURE, FILING, TRUST ACCOUNT, OR POSTING OF A BOND, OR ANY OTHER REQUIREMENTS, THAT ARE
            NOT SATISFIED BY THESE TERMS AND CONDITIONS. ALL APPLICABLE FEDERAL, STATE AND LOCAL LAWS APPLY.
          </p>
          <b>ENTRY PERIOD:</b>
          <p className="mb-4">
            The Contest begins at 26th of April 2024 and ends at 26th of May 2024
            (“Entry Period”).
          </p>
          <b>HOW TO ENTER:</b>
          <p className="mb-4">
            No purchase or payment is necessary to participate in the Contest. During the Entry Period, enter the Contest
            through visiting [URL — todo]. Sign up for the EdgeDB x Vercel Hackathon with your GitHub account and submit your project
            through the submission form.
            <br />
            By submitting an entry, you agree that your code and any other information provided by you or collected by
            EdgeDB in connection with your entry to the Contest may be used by EdgeDB in accordance with the applicable
            open-source license associated with your entry.
            <br />
            You hereby confirm that: the entry is your original creation; the entry was not copied (in whole or in part) from
            any other work without appropriate authorization; you have obtained a binding written release from (and
            signed by) every other person or copyright holder whose work forms part of your submission (or can reasonably
            demonstrate use of open source components), as necessary to grant EdgeDB the rights provided herein; the
            entry does not infringe or violate any copyright right, trademark right, publicity right, privacy right or other
            proprietary right of any person or entity (including without limitation, any property owner); and EdgeDB will
            not be obligated to pay any compensation to, or permit any participation by, any third party in connection with
            the use, publication, distribution or exploitation of any entry.
          </p>
          <b>PRIZES:</b>
          <p className="mb-4">
            The following prizes will be awarded:
            <ol className="list-inside">
              <li>
                <strong>Best overall app</strong>
                <ul className="list-disc list-inside">
                  <li>First place: $5,000</li>
                  <li>Second place: $3,000</li>
                  <li>Third place: $1,000</li>
                </ul>
              </li>
              <li>
                <strong>Most Fun App</strong>
                <ul className="list-disc list-inside">
                  <li>First place: $1,000</li>
                </ul>
              </li>
              <li>
                <strong>Discord Champion</strong>
                <ul className="list-disc list-inside">
                  <li>First place: $1,000</li>
                </ul>
              </li>
            </ol>

            Decisions of the EdgeDB are final and binding with respect to all matters related to the Contest. In no event
            shall the EdgeDB be obligated to award any prizes other than the Prizes specified in these Official Rules. The
            Prizes are non-transferable. Winners shall be responsible and liable for all federal, state
            and local taxes on the value of the Prizes, and any related handling charges. To receive a complete
            list of winners or a copy of the Official Rules, [within six (6) months] after the end of the Entry Period, send a
            self-addressed stamped envelope to [Name of Contest Winner’s List], [ADDRESS].
          </p>
          <b>PRIZE SELECTION AND JUDGING CRITERIA:</b>
          <p className="mb-4">
            Judges shall review the eligible submissions and select a winning submission. The Judges shall base their
            decision on the following criteria:

            <ol className="list-inside my-6">
              <li>
                <strong>Judging criteria — “Best overall app” category</strong>
                <ul className="list-inside">
                  <li className="">
                    <strong>Technical criteria</strong>
                    <ol className="list-decimal list-inside">
                      <li>EdgeDB Integration:
                        <ul className="list-disc list-outside ml-10">
                          <li>Depth of Integration: The extent and complexity of EdgeDB's integration within the project. Evaluates how effectively the database is utilized for the application's data management needs.</li>
                          <li>Schema design: The quality of the database schema design, considering efficiency, scalability, and the logical structure that supports the application's requirements.</li>
                        </ul>
                      </li>
                      <li>Vercel hosting:
                        <ul className="list-disc list-outside ml-10">
                          <li>Deployment: Successful deployment on Vercel.</li>
                        </ul>
                      </li>
                      <li>Next.js application development:
                        <ul className="list-disc list-outside ml-10">
                          <li>Implementation quality: Adherence to Next.js best practices and effective use of its features like SSR, SSG, RSC, API routes, etc.</li>
                          <li>Code organization and readability: The clarity, organization, and documentation of the codebase.</li>
                        </ul>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <strong>Functionality and innovation</strong>
                    <ol className="list-decimal list-inside">
                      <li>User experience and interface design:
                        <ul className="list-disc list-outside ml-10">
                          <li>Usability: The application’s ease of use, accessibility, and intuitive design.</li>
                          <li>Aesthetic appeal: The visual design and attractiveness of the application's interface.</li>
                        </ul>
                      </li>
                      <li>Innovation and creativity:
                        <ul className="list-disc list-outside ml-10">
                          <li>Novelty: The uniqueness and originality of the solution or approach.</li>
                          <li>Problem-solving: The effectiveness of the application in addressing a specific problem or need.</li>
                        </ul>
                      </li>
                      <li>Completeness and stability:
                        <ul className="list-disc list-outside ml-10">
                          <li>Feature completion: The extent to which the proposed features have been implemented and are functional.</li>
                          <li>Application stability: The absence of critical bugs and the overall robustness of the application.</li>
                        </ul>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <strong>Documentation and presentation</strong>
                    <ol className="list-decimal list-inside">
                      <li>Project Documentation:
                        <ul className="list-disc list-outside ml-10">
                          <li>Developer documentation: Clear documentation covering how to set up and run the project.</li>
                        </ul>
                      </li>
                      <li>Pitch and presentation:
                        <ul className="list-disc list-outside ml-10">
                          <li>Demonstration: The quality of the project demo showcasing key features and user flows.</li>
                        </ul>
                      </li>
                    </ol>
                  </li>
                </ul>
              </li>
              <li className="mt-6">
                <strong>Judging criteria — "Most Fun App" category</strong>
                <ol className="list-decmal list-inside">
                  <li>
                    <strong>Technical criteria</strong>
                    <ul className="list-disc list-outside ml-10">
                      <li>EdgeDB Integration: This evaluates the extent and complexity of EdgeDB's integration within the project and how effectively the database is utilized for the application's data management needs.</li>
                      <li>Vercel hosting: Successful deployment on Vercel.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Entertainment and Engagement</strong>
                    <ul className="list-disc list-outside ml-10">
                      <li>Enjoyment: The extent to which the application is fun and enjoyable to use.</li>
                      <li>Engagement: The ability of the application to capture and hold the user's attention.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Creativity and Uniqueness</strong>
                    <ul className="list-disc list-outside ml-10">
                      <li>Originality: The uniqueness and novelty of the application's concept or game mechanics.</li>
                      <li>Inventive use of technology: Creative and innovative ways the application uses technology to enhance the fun factor.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Usability and Design</strong>
                    <ul className="list-disc list-outside ml-10">
                      <li>User Experience: The application’s ease of use, accessibility, and intuitive design.</li>
                      <li>Aesthetic appeal: The visual design and attractiveness of the application's interface.</li>
                    </ul>
                  </li>
                </ol>
              </li>
              <li className="mt-6">
                <strong>Judging criteria — "Discord Champion" category</strong>
                <ul className="list-disc list-inside">
                  <li>Helpfulness: The extent to which the individual has been helpful and supportive to others within the Discord community.</li>
                  <li>Engagement: The individual's activity level, participation in discussions, and overall presence during the hackathon.</li>
                  <li>Positive impact: The individual's influence in promoting a positive, inclusive, and collaborative community environment.</li>
                  <li>Knowledge sharing: The individual's efforts to share knowledge, resources, and expertise with others.</li>
                </ul>
              </li>
            </ol>

            The Contest will be conducted under the supervision of the EdgeDB. The decisions of the EdgeDB are final and
            binding in all matters relating to this Contest. Winners will be notified by email; provided, however, that
            EdgeDB reserves the right to determine an alternate method of notification. Winners must claim their Prize
            within 7 days after the date of notification of such Prize. A Contest winner&#39;s failure to respond to the
            Prize notification within the specified 7 days will be considered such Contest winner&#39;s forfeiture of
            the prize and an alternate winner may be selected from the pool of eligible entries. If an entrant is found to be
            ineligible, an alternate winner may also be selected from the pool of eligible entries.
          </p>
          <b>GENERAL CONDITIONS AND RELEASES:</b>
          <p className="mb-4">
            By entering the Contest or accepting a Prize, you agree to conform to all federal, state and local laws and
            regulations. When applicable, the winner may be required to execute and return (and winning may be
            conditioned upon the winner executing and returning) to EdgeDB, within ten (10) business days, an Affidavit of
            Eligibility and a Liability and Publicity Release drafted by EdgeDB to be eligible for the Prize or an alternate
            winner will be selected. Winners may be required in EdgeDB’s sole discretion to complete relevant tax forms as
            a condition to the delivery of the applicable prize. Winner may also be required to furnish proof of identity,
            address and birth date in order to receive a Prize.
            <br />
            Unless prohibited by applicable law, your acceptance of a prize constitutes your permission to use your name,
            photograph, likeness, voice, address (city and state) and testimonials in all media, in perpetuity, in any manner
            EdgeDB deems appropriate for publicity purposes without any compensation to such entrant or any review or
            approval rights, notifications, or permissions; and constitutes your consent to disclose your personally
            identifiable information to third parties (including, without limitation, placing the winner’s name on a winner’s
            list).
            <br />
            An entrant or winner may be disqualified from the Contest if he or she fails to comply with each provision of
            these Official Rules, as determined in the sole discretion of the EdgeDB. Participation in the Contest is at
            entrant’s own risk. EdgeDB shall not be liable for: (1) failed, returned or misdirected notifications based on
            inaccurate information provided by the winner in connection with an entry; (2) entries and responses to winner
            notifications which are lost, late, incomplete, illegible, unintelligible, postage-due, misdirected, damaged or
            otherwise not received by the intended recipient in whole or in part or for computer or technical error of any
            kind; (3) any electronic miscommunications or failures, technical hardware or software failures of any kind, lost
            or unavailable network connections, or failed incomplete, garbled or delayed computer transmissions which
            may limit an entrant&#39;s ability to participate in the Contest; (4) any technical malfunctions of the internet access,
            computer on-line system, computer equipment, software, program malfunctions or other failures, delayed
            computer transactions or network connections that are human, mechanical or technical in nature, or any
            combination thereof, including any injury or damage to entrant&#39;s or any other person&#39;s computer or mobile
            device related to or resulting from downloading any application or otherwise in connection with this Contest;
            or (5) any warranty with respect to any Prize or any component thereof. THE PRIZES ARE AWARDED “AS IS”
            AND EDGEDB DOES NOT MAKE ANY, AND HEREBY DISCLAIMS ANY AND ALL, REPRESENTATIONS OR
            WARRANTIES OF ANY KIND REGARDING THE PRIZES.
            <br />
            NOTWITHSTANDING ANYTHING ELSE HEREIN OR OTHERWISE, EDGEDB AND/OR ITS VENDORS SHALL NOT BE
            LIABLE OR OBLIGATED WITH RESPECT TO ANY SUBJECT MATTER OF THIS AGREEMENT OR UNDER CONTRACT,
            NEGLIGENCE, STRICT LIABILITY OR OTHER LEGAL OR EQUITABLE THEORY FOR (A) ANY SPECIAL, INCIDENTAL,
            CONSEQUENTIAL, OR EXEMPLARY DAMAGES (INCLUDING, WITHOUT LIMITATION, LOSS OF REVENUE,
            GOODWILL, OR ANTICIPATED PROFITS), (B) DATA LOSS OR COST OF PROCUREMENT OF SUBSTITUTE GOODS OR
            SERVICES, AND/OR (C) ANY MATTER BEYOND SUCH PARTIES’ REASONABLE CONTROL.
            You acknowledge and agree that the Contest is in no way sponsored, endorsed or administered by, or
            associated with any third party prize donors. By entering the Contest, you agree to and hereby do release and
            hold harmless EdgeDB and their respective parents, subsidiaries and affiliated entities, directors, officers,
            employees, attorneys, agents, and representatives from any damage, injury, death, loss, claim, action, demand,
            or other liability (collectively, “Claims”) that may arise from your acceptance, possession and/or use of any Prize
            or your participation in this Contest, or from any misuse or malfunction of any Prize awarded, regardless of
            whether such Claims, or knowledge of the facts constituting such Claims, exist at the time of entry or arise at
            any time thereafter. Any person attempting to defraud or in any way tamper with this Contest may be
            prosecuted to the full extent of the law. EdgeDB reserves the right to modify these Official Rules in any way or
            at any time. EdgeDB reserves the right, in its sole discretion, to cancel or suspend this Contest should viruses,
            bugs or other causes beyond their control corrupt the administration, security or proper operation of the
            Contest. In the event of cancellation or suspension, EdgeDB shall promptly post a notice on EdgeDB’s website
            to such effect. This Contest shall be governed by California law, without regard to conflicts of laws provisions.
            By participating in this Contest, you agree that any dispute or litigation arising from or relating to this Contest
            shall be determined by binding arbitration only in San Francisco, California, by and under the Streamlined
            Arbitration Rules and Procedures of JAMS, and judgment on the award rendered by the arbitrator(s) may be
            entered in any court having jurisdiction thereof. Notwithstanding the foregoing, EdgeDB may seek equitable
            relief in any court of competent jurisdiction. If any provision of these rules is held to be illegal or
            unenforceable, such provision shall be limited or eliminated to the minimum extent necessary so that these
            rules otherwise remain in full force and effect and enforceable.
          </p>
        </section>
      </div>
    </div>
  )
}

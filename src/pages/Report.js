import React from "react"

import Header from "../components/Header"
import SEO from "../components/seo"

import "../style/app.css"

const IndexPage = () => (
  <body className="reportPage">
    <Header />
    <SEO title="Map the system AI" />
    <div className="hero">
      <h1 className="hero__title">REPORT</h1>
    </div>
    <div className="report">
      <ExecutiveSummary></ExecutiveSummary>
      <ProblemLandscape></ProblemLandscape>
      <SolutionsLandscape></SolutionsLandscape>
      <GapsLevers></GapsLevers>
      <KeyInsights></KeyInsights>
    </div>
  </body>
)

const ProblemLandscape = () => (
  <div className="report__section">
    <div className="report__header">
      <h1 className="report__title">Problem Landscape</h1>
    </div>
    <div className="report__subSection">
      <h2 className="report__subtitle">Infrastructure </h2>
      <p className="report__paragraph">
        As AI integrates into society, proper infrastructure will be required to
        support it. At the most basic level, infrastructure (i.e. think: roads,
        buildings, cities, transit systems) in its physical forms needs to be
        well-developed. For example, to effectively support autonomous vehicles
        (AVs), we need properly designed road systems to make them viable and
        safe. This could mean having sensors on roads or street signs to send
        signals to other vehicles to help cars navigate city streets. [4]
        Additionally, having exceptional networking systems, such as 5G, will be
        crucial for AVs in the future as it will allow for faster data transfer
        rates between cars and the environment [5]. Faster data transfer will
        enable AVs to send and receive key data to make safe decisions.
      </p>
      <p className="report__paragraph">
        Another area where infrastructure can be optimized is in hospital
        settings. The medical field has made massive advancements with AI, and
        technologies such as medical imaging diagnostics and virtual health
        assistants, [6] but only when hospital rooms are equipped with the space
        and equipment necessary to support these can it be implemented to its
        fullest potential. These applications exist among many others. Without
        proper infrastructure, there is no artificial intelligence.
      </p>
    </div>
    <div className="report__subSection">
      <h2 className="report__subtitle">Environment</h2>
      <p className="report__paragraph">
        AI is most advantageous to us when applied to large, dimensional and
        unstructured datasets [7] – and this is where most data on climate,
        weather and other long and short-term environmental factors are found.
        AI is a relatively new tool in the environmental sector and it’s being
        used to manage the impacts of our own activity on the planet. There are
        many specific areas of application, but the following have been
        identified as particularly pertinent:
      </p>

      <p className="report__paragraph">
        Autonomous Vehicles (AVs) are not only self-driving, but are also
        interconnected, capable of sensing their environments and making
        decisions accordingly [8]. The primary benefit to an AV-lead traffic
        system is a significant decrease in urban CO [9] emissions – according
        to the Institute for Transportation & Development Policy, this could
        reach up to 80% worldwide [10]. A major roadblock in the implementation
        of AVs, and in developing self-driving cars, is the fear of loss of
        control and poor safety, despite the convenience and potential safety
        benefits offered by AVs [11].
      </p>
      <p className="report__paragraph">
        Smart agriculture and food systems have massive potential for slowing
        the environmental repercussions linked directly to producing enough food
        to feed the earth’s population and its increasingly unsustainable
        preferences. AI could automate data collection, provide early detection
        of crop diseases and optimize agricultural inputs [12]. Ultimately, it
        would increase resource efficiency. Sources of resistance to smart
        agriculture are mainly legal and regulatory [13].
      </p>
      <p className="report__paragraph">
        Other areas where AI can be implemented for the betterment of the
        natural environment is in wildlife tracking and therefore preservation,
        in weather and climate prediction leading to smart disaster response,
        and in the creation of intelligent, connected cities that use data to
        manage assets, resources and services efficiently.
      </p>
    </div>
    <div className="report__subSection">
      <h2 className="report__subtitle">Education</h2>
      <p className="report__paragraph">
        Recently the landscape for education has evolved drastically.
        Considering the development in the current compositions of families,
        schooling options, wealth disparities, and the ever-changing economic
        demand for new skilled workers and technology, it is surprising to see
        that there has been minimal change in the way we teach [14]. In a world
        where we are constantly improving, how is it that we haven’t improved
        the way we teach?
      </p>
      <p className="report__paragraph">
        What must be realized is AI is not going to be the new teacher, rather
        an assistant. This can revolutionize education by opening up new
        opportunities to teach anyone, anywhere. AI assistance can fill the gaps
        in learning and teaching by providing customized feedback. AI can
        improve efficiency and streamline administrative tasks such as grading
        homework, assessing written responses, allowing more time for
        teacher-to-student interaction [15].
      </p>
      <p className="report__paragraph">
        Additionally, AI can provide universal access to education for all
        students. An AI tool called Presentation Translator is a free plugin for
        PowerPoint that can create real-time subtitles of what the teacher is
        saying. Duolingo is an excellent example of AI cooperation [16]. This
        app allows 300 million users to enjoy 90 courses in 22 languages. To
        continually improve their product, they use AI to uncover new insights
        on language structures and how people learn.
      </p>
      <p className="report__paragraph">
        A major roadblock in widespread adoption of AI is the fear that it will
        take over. By rejecting AI, we are prolonging inevitable technological
        advances, depriving future generations. We conducted a survey on
        people’s experience with education and AI, to gain insight on how the
        presence of technology in education affects current views on advancing
        technology. The responses were disappointing, with many individuals
        claiming that “[Educational curriculums] teach with content from the
        90s”, “Much of the technology used in the education system was outdated
        and irrelevant.”, and that “I’ve succumbed to learning myself.” These
        sentiments do not reflect the level of technology we’ve developed for
        education - it is clearly being under-utilized.
      </p>
    </div>
    <div className="report__subSection">
      <h2 className="report__subtitle">Socio-Economics</h2>
      <p className="report__paragraph">
        Slowly, as the benefits of smart devices are being recognized, markets
        begin to adapt to new technology. With the digital infrastructure
        currently in place, AI aims to cultivate an efficient lifestyle.
        However, it is the tech companies and businesses that hold the most
        responsibility with AI; they need to produce products and services that
        humans can actually use.
      </p>
      <p className="report__paragraph">
        Specifically, the automation of labor is one area that has a noticeable
        economic impact. AI has the potential to grow GDP by 26% by 2030 and on
        a larger scale, the adoption of AI is capable of bridging the gap among
        developed and developing countries. The main political argument that
        deters adoption of AI is the inevitability of job severance and the risk
        that developing countries will fall behind [17]. However, it is proven
        that an increased demand for handmade products will be a result of
        economic change. There will be more opportunities for work within fields
        such as data privacy and user experience, ensuring the economic cycle
        continues [18].
      </p>
    </div>
    <div className="report__citation">
      <p className="report__citation--para">
        [4] Ben Safran, Tyler Duvall, Eric Hannon, Jared Katseff, and Tyler
        Wallace, “A New Look at Autonomous-Vehicle Infrastructure,” McKinsey &
        Company (McKinsey & Company), May 2019,
        https://www.mckinsey.com/industries/capital-projects-and-infrastructure/our-insights/a-new-look-at-autonomous-vehicle-infrastructure)
        [5] James Sanders, “Why 5G Is a Crucial Technology for Autonomous
        Vehicles,” ZDNet (ZDNet), November 4, 2019,
        https://www.zdnet.com/article/why-5g-is-a-crucial-technology-for-autonomous-vehicles/)
        [6] “Examples of AI Used in Healthcare,” ReferralMD, March 11, 2020,
        https://getreferralmd.com/2019/04/10-powerful-examples-of-ai-used-in-healthcare-today/)
        [7] Alison DeNisco Rayome, “How AI Could Save the Environment,”
        TechRepublic, (TechRepublic), March 2, 2020,
        https://www.techrepublic.com/article/how-ai-could-save-the-environment/.
        [8] “What Is an Autonomous Car? - How Self Driving Cars Work,” Synopsys,
        Accessed March 23, 2020,
        https://www.synopsys.com/automotive/what-is-autonomous-car.html [9]
        “What Is an Autonomous Car? - How Self Driving Cars Work.” Synopsys,
        Accessed March 23, 2020,
        https://www.synopsys.com/automotive/what-is-autonomous-car.html [10]
        “Institute for Transportation and Development Policy,” Institute for
        Transportation and Development Policy, March 9, 2020,
        https://www.itdp.org/. [11] Daniel Howard and Danielle Dai, "Public
        perceptions of self-driving cars: The case of Berkeley, California," In
        Transportation research board 93rd annual meeting, vol. 14, no. 4502,
        pp. 1-16. 2014. [12] Celine Herweijer, “8 Ways AI Can Help Save the
        Planet,” World Economic Forum, Accessed March 10, 2020,
        https://www.weforum.org/agenda/2018/01/8-ways-ai-can-help-save-the-planet/.
        [13] “Smart Farming: The Rise of AgriTech and Its Legal Issues,”
        Dentons, Accessed March 23, 2020,
        https://www.dentons.com/en/insights/articles/2019/january/8/smart-farming-the-rise-of-agritech-and-its-legal-issues
        [14] “Artificial Intelligence in Education,” Center for Curriculum
        Redesign, (Center for Curriculum Redesign), Center for Curriculum
        Redesign, March 2019,
        https://curriculumredesign.org/our-work/artificial-intelligence-in-education/.
        [15] Bernard Marr, “How Is AI Used In Education -- Real World Examples
        Of Today And A Peek Into The Future,” Forbes, (Forbes Magazine), July
        25, 2018,
        https://www.forbes.com/sites/bernardmarr/2018/07/25/how-is-ai-used-in-education-real-world-examples-of-today-and-a-peek-into-the-future/#24ecf031586e.
        [16] “AI in Education: Where Is It Now and What Is the Future?”
        Lexalytics, (Lexalytics), November 18, 2019,
        https://www.lexalytics.com/lexablog/ai-in-education-present-future-ethics.
        [17] Irving Wladawsky-Berger, “The Impact of Artificial Intelligence on
        the World Economy,” The Wall Street Journal, (Dow Jones & Company),
        November 26, 2018.
        https://blogs.wsj.com/cio/2018/11/16/the-impact-of-artificial-intelligence-on-the-world-economy/.
        [18] Brad Plumer, Ezra Klein, David Roberts, Dylan Matthews, Matthew
        Yglesias, and Timothy B. Lee, “Automation Is Making Human Labor More
        Valuable than Ever: The New New Economy,” Vox, Accessed March 23, 2020,
        https://www.vox.com/a/new-economy-future/manual-labor-luxury-good.
      </p>
    </div>
  </div>
)

const ExecutiveSummary = () => (
  <div className="report__section">
    <div className="report__header">
      <h1 className="report__title">Executive Summary</h1>
    </div>

    <div className="report__subSection">
      <p className="report__paragraph">
        AI has been consistently at the forefront of technological innovation.
        With all the recent incidents regarding personal data collection and
        manipulation, we have realized that the majority of infrastructures have
        yet to evolve in order to accomodate a society embedded in the Internet
        of Things (IoT). To ensure a smooth integration on AI, we have decided
        to map out the new generation of IoT in order to research and address
        the fundamental errors that AI will currently face.
      </p>

      <p className="report__paragraph">
        We are a group of students from the University of Waterloo with an
        intense desire to learn about the resistance and adoption of AI in our
        current society. We have collected data on the topic through primary
        research (limited by COVID-19), news & industry articles and academic
        papers. Together, we explored the different ways that AI is being both
        accepted and rejected, and any existing solutions to address the latter
        concern.
      </p>
    </div>
    <div className="report__subSection">
      <h2 className="report__subtitle">What Is Artifical Intelligence?</h2>
      <p className="report__paragraph">
        The world is becoming more technologically advanced at an exponential
        rate. Smartphones, Bluetooth, and the omnipotent Internet of Things have
        connected us in ways never before imaginable, and as a result, the world
        has globalized. The next big leap in human-created technology is to
        utilize the robotic systems that we have crafted in order to serve us as
        efficiently and effectively as possible. Artificial Intelligence (AI) is
        “the ability of a computer program or a machine to think and learn” [1].
        AI enables machines to learn from experience, relying on deep-learning
        and natural language processing [2].
      </p>
    </div>
    <div className="report__subSection">
      <h2 className="report__subtitle">Why Research AI?</h2>
      <p className="report__paragraph">
        AI is central in the discussion in emerging technology and it is one of
        its most intricate applications. However, the question remains, what
        makes AI so important? As of now, all new creations were built upon
        existing infrastructure according to existing rules set by governments.
        However, none of this has been rebuilt which raises the question, how
        can a society that has yet to be changed to accept technological
        advancements adapt to the inevitabilities of evolution?
      </p>
      <p className="report__paragraph">
        Technology separates the logical and emotional/moral point of view of
        thinking [3]. AFor example, logical thinking represents AI and emotional
        thinking represents humanitarian considerations. Most rejections of AI
        are distilled by fear, specifically caused by the lack of knowledge and
        experience with AI. Arising issues like data privacy are forged by the
        unregulated powers of tech companies which is a consequence of the
        government failing to acknowledge and pushing back on the evolution of
        technology. Everyone knows AIs exist but it is not a part of everyday
        life, and for acceptance to be ensued, measures must be taken to address
        these concerns.
      </p>
    </div>
    <div className="report__subSection">
      <h2 className="report__subtitle">Research Methods?</h2>
      <p className="report__paragraph">Our research was compiled through:</p>
      <ul className="report__list">
        <li>Surveying over 20 people across Ontario</li>
        <li>An in depth interview with an industry expert</li>
        <li>
          Academic journals, government documents, data sets, news articles and
          industry articles
        </li>
      </ul>
    </div>
    <div className="report__citation">
      <p className="report__citation--para">
        [1] Jake Frankenfield, “How Artificial Intelligence Works,”
        Investopedia, Accessed March 13, 2020,
        https://www.investopedia.com/terms/a/artificial-intelligence-ai.asp) [2]
        “Artificial Intelligence – What It Is and Why It Matters,” SAS, Accessed
        March 25, 2020,
        https://www.sas.com/en_us/insights/analytics/what-is-artificial-intelligence.html)
        [3] Sukhayl Niyazov, “How AI Will Redefine Economics,” Medium (Towards
        Data Science, November 23, 2019),
        https://towardsdatascience.com/how-ai-will-redefine-economics-ec305e3cb687)
      </p>
    </div>
  </div>
)

const SolutionsLandscape = () => (
  <div className="report__section">
    <div className="report__header">
      <h1 className="report__title">Solutions Landscape</h1>
    </div>
    <div className="report__subSection">
      <p className="report__paragraph">
        As of 2018, there are 4,635 AI companies globally [19] who are paving
        the way for new technologies and industries for which AI can be adopted.
        These companies aim to save consumers money, time, effort, and also to
        educate the public on the benefits of AI through their products. To
        understand the current industry, we highlighted a few companies that are
        focused on the goals mentioned above. It is also important to examine
        the ethical and privacy issues surrounding AI.
      </p>
    </div>
    <div className="report__subSection">
      <h2 className="report__subtitle">Saving Consumers Money</h2>
      <p className="report__paragraph">
        Hopper is a company that leverages AI through machine learning to save
        consumers money. They use large datasets combined with machine learning
        engines to predict the right time to purchase plane tickets [20].
        Airlines have open APIs which companies like Hopper can use to track
        flight-price history. Using these data points they forecast what the
        future price of a current plane ticket will be, and recommend to
        consumers when they should purchase the tickets [21]. Additionally, if a
        consumer is flexible on when they travel, the machine learning model can
        recommend flying on a different day in a similar time window [22].
      </p>
    </div>
    <div className="report__subSection">
      <h2 className="report__subtitle">Saving Consumers Time</h2>
      <p className="report__paragraph">
        Companies like Uber and Lyft use AI to provide consumers ETAs on rides
        and food delivery [23]. These efforts allow the consumer to feel
        confident in the service they are receiving and allow transparency with
        the consumer. The main goal of Ubers efforts is to reduce the need for
        ‘surge pricing’, and to predict rider demand, by implementing machine
        learning [24].
      </p>
      <p className="report__paragraph">
        Additionally, Google Maps and their acquired company Waze, save consumer
        time by providing AI-predicted traffic updates. These predictions allow
        for users to plan their trips days in advance. Google Maps uses
        anonymized location data from smartphones to track traffic speed [25].
        In acquiring Waze, Google gained technology to incorporate
        user-generated data on construction and accidents [26].
      </p>
    </div>
    <div className="report__subSection">
      <h2 className="report__subtitle">Saving Consumers Effort</h2>
      <p className="report__paragraph">
        Wave is an accounting platform for small businesses. They use large
        numbers of transactions to complete mundane tasks, which users normally
        do themselves, by means of machine learning [27]. Categorization is one
        area where they can do this [28]. When new transactions are added to an
        account a user usually must categorize these transactions into different
        areas such as “Meals and Entertainment” or “Office Supplies”. By
        leveraging past transactions, Wave can predict how future transactions
        should be categorized [29]. This saves the user the hassle of logging in
        every time a transaction is added and manually deciding how it should be
        categorized [30].
      </p>
    </div>
    <div className="report__subSection">
      <h2 className="report__subtitle">Privacy and Ethics</h2>
      <p className="report__paragraph">
        The biggest safety risk associated with using data used to power AI and
        Machine Learning [31] is in privacy. Algorithms can now replace human
        insight by using millions of existing data points to predict future ones
        [32]. But where data points come from, and whether or not the algorithms
        are taught to sway their suggestions to benefit corporations, are points
        of contention. Companies like Google are able to use your search history
        to predict your preferences. But what if you wanted to persuade a user
        to buy the new Google Home? You could target prospective buyers and
        strategically place ads to entice them to buy from you. Now re-read the
        last sentence but replace ‘buyer’ with ‘voter’, and ‘buy from’ with
        ‘vote for’, and now you’ve essentially used machine learning to win an
        election [33]. The voters will never know that you’ve had an effect, but
        politicians can essentially buy votes.
      </p>
      <p className="report__paragraph">
        This is what happened in the Cambridge Analytica user privacy data
        breach [34]. If you’re a smaller company, but still want to leverage a
        machine learning model, you will have to buy data from bigger companies,
        or data aggregators. This creates ethical issues of selling data. No one
        should be able to profit from your information, which is a potential
        problem with AI. The method to overcome these concerns are to enforce
        Privacy by Design [35], and new legislation. Privacy by Design
        encourages businesses to take proactive action in regards to privacy,
        building it into their core values. Additionally, encouraging lawmakers
        to improve current regulations (such as PIPPEDA [36], FIPs [37], GDPR
        [38], California Consumer Privacy Act [39] etc.) will enforce businesses
        to have privacy in their minds. The US Congress has a bill known as the
        “Fundamentally Understanding The Usability and Realistic Evolution of
        Artificial Intelligence Act of 2017” which aims to understand and
        prepare for changing times and most importantly, protect the privacy
        rights of individuals [40]. Enforcing these two methods will mitigate
        the fear around privacy and ethics in regards to AI.
      </p>
    </div>
    <div className="report__citation">
      <p className="report__citation--para">
        [19] Shanhong Liu, “Number of AI Companies Worldwide 2018, by Country,”
        Statista (Statista), March 2, 2020,
        https://www.statista.com/statistics/941054/number-of-ai-companies-worldwide-by-country/)
        [20] “AI in Travel, Part 1: Making Travel Recommendations,” Hopper,
        (Medium), April 19, 2018),
        https://medium.com/life-at-hopper/ai-in-travel-part-1-making-travel-recommendations-733a16d9e010)
        [21] Alex Barkin (Software Engineer - Machine Learning, Wave HQ),
        Interviewed by Krystyna Poremba, March 12, 2020. [22] “AI in Travel,
        Part 1: Making Travel Recommendations,” Hopper, (Medium) April 19, 2018,
        https://medium.com/life-at-hopper/ai-in-travel-part-1-making-travel-recommendations-733a16d9e010
        [23] Daniel Faggella, “Everyday Examples of Artificial Intelligence and
        Machine Learning,” Emerj (Emerj, March 10, 2020),
        https://emerj.com/ai-sector-overviews/everyday-examples-of-ai/) [24]
        Aarti Shahani, “Uber Plans To Kill Surge Pricing, Though Drivers Say It
        Makes Job Worth It,” NPR (NPR, May 3, 2016),
        https://www.npr.org/sections/alltechconsidered/2016/05/03/476513775/uber-plans-to-kill-surge-pricing-though-drivers-say-it-makes-job-worth-it)
        [25] Daniel Faggella, “Everyday Examples of Artificial Intelligence and
        Machine Learning,” Emerj, (Emerj), March 10, 2020,
        https://emerj.com/ai-sector-overviews/everyday-examples-of-ai/) [26]
        Daniel Faggella, “Everyday Examples of Artificial Intelligence and
        Machine Learning,” [27] Alex Barkin (Software Engineer - Machine
        Learning, Wave HQ). [28] Erik O., “All about Automatically Categorizing
        Transactions,” Wave (Wave), March 22, 2020,
        https://support.waveapps.com/hc/en-us/articles/360001301666-All-about-automatically-categorizing-transactions)
        [29] Alex Barkin (Software Engineer - Machine Learning, Wave HQ). [30]
        “Introducing Machine Learning,” Wave (Wave), October 12, 2018,
        https://www.waveapps.com/rebrand/machine-learning) [31] Alex Barkin
        (Software Engineer - Machine Learning, Wave HQ). [32] Zoubin Ghahramani,
        “Unsupervised Learning,” SpringerLink (Springer, Berlin, Heidelberg),
        February 2, 2003,
        https://link.springer.com/chapter/10.1007/978-3-540-28650-9_5) [33] J.
        Isaak and M. J. Hanna, "User Data Privacy: Facebook, Cambridge
        Analytica, and Privacy Protection," in Computer, vol. 51, no. 8, pp.
        56-59, August 2018. [34] J. Isaak and M. J. Hanna, "User Data Privacy:
        Facebook, Cambridge Analytica, and Privacy Protection" [35] Ann
        Cavoukian, "Privacy by design: The 7 foundational principles,”
        Information and privacy commissioner of Ontario, (Canada 5), 2009 [36]
        Nikki Swartz, "Canada reviews PIPEDA," Information Management 41, no. 2
        (2007): 8. [37] Yuanxiang Li, Walter Stweart, Jake Zhu, and Anna Ni,
        "Online privacy policy of the thirty Dow Jones corporations: Compliance
        with FTC Fair Information Practice Principles and readability
        assessment," Communications of the IIMA 12, no. 3 (2012): 5. [38] Colin
        Tankard, "What the GDPR means for businesses," Network Security 2016,
        no. 6 (2016): 5-8. [39] “Forbes Insights: Rethinking Privacy For The AI
        Era,” Forbes, (Forbes Magazine), March 27, 2019,
        https://www.forbes.com/sites/insights-intelai/2019/03/27/rethinking-privacy-for-the-ai-era/#1c5746ef7f0)
        [40] “FUTURE of Artificial Intelligence Act of 2017,” U.S. Congress,
        House, S.2217., 115th Cong., 1st sess., Introduced in House December 12,
        2017,
        https://www.congress.gov/bill/115th-congress/senate-bill/2217/text)
      </p>
    </div>
  </div>
)

const GapsLevers = () => (
  <div className="report__section">
    <div className="report__header">
      <h1 className="report__title">Gaps & Levers of Change</h1>
    </div>
    <div className="report__subSection">
      <h2 className="report__subtitle">Gap 1: Lack of Public Knowledge</h2>
      <p className="report__paragraph">
        Much of the resistance to developing AI and its implications stems from
        a lack of exposure and proper relevant education.
      </p>

      <div className="report__levers">
        <h2 className="report__levers--title">Levers</h2>
        <ol className="report__gaps">
          <li className="report__gaps--point">
            Educate from younger ages, integrate AI into learning
            <ul className="report__gaps--subpoint">
              <li>Introduce AI technologies from a young age</li>
              <li>
                While this may not be attainable at home, because of cost or
                lack of accessibility, these technologies should be integrated
                into school systems in order to familiarize as much youth as
                possible
              </li>
              <li>
                This would both spark interest in in AI from a young age and
                also desensitize people to limit the stigmas so often felt today
              </li>
            </ul>
          </li>
          <li className="report__gaps--point">
            Promote widespread coding knowledge
            <ul className="report__gaps--subpoint">
              <li>To avoid a gap between “coders” and “non-coders”</li>
              <li>
                Coding can be a daunting area of technology use, and often feels
                alien to those who are not familiar
              </li>
              <li>
                Teaching very basic coding languages throughout school will, at
                least, familiarize more people with the concept of what coding
                is and what is does, to allow for a better understanding of how
                technology and AI work, empowering people and giving them more
                positive feelings of control
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
    <div className="report__subSection">
      <h2 className="report__subtitle">Gap 2: Fear of Data Collection</h2>
      <p className="report__paragraph">
        Another major source of resistance stems from the public’s fear that
        their data is insecure in the hands of the corporations or otherentities
        that use it to develop AI technology.
      </p>

      <div className="report__levers">
        <h2 className="report__levers--title">Levers</h2>
        <ol className="report__gaps">
          <li className="report__gaps--point">
            More accountability from AI/big tech companies
            <ul className="report__gaps--subpoint">
              <li>
                Currently there are few laws restricting data collection/use,
                therefore big tech companies can use our data in any ways they
                want
              </li>
              <li>
                The world’s most traded commodity is data, companies treet their
                market like currency. This makes consumers not want to provide
                the information that supports this
              </li>
              <li>
                create awareness about what actually happens to our data to
                empower people to choose whether or not to offer it through tech
                use
              </li>
            </ul>
          </li>
          <li className="report__gaps--point">
            Normalize data transparency
            <ul className="report__gaps--subpoint">
              <li>
                Normalization of data transparency pushes and promotes data
                privacy in everyday designs
              </li>
              <li>
                What’s ideal: a shift in ideology among consumers that personal
                data isn’t property that can be bought, sold or solicited
              </li>
              <li>
                Since it has been commodified and assigned value, what’s more
                realistic is promoting data as information that can be utlizied
                to make positive developments in technology, but this requires
                trust that it will not be used against us
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
    <div className="report__citation">
      <p className="report__citation--para">
        [41] Ann Cavoukian, "Privacy by design: The 7 foundational principles",
        Information and privacy commissioner of Ontario, Canada 5 (2009) [42]
        Quora, “How Do Tech Companies Make Money From Our Personal Data?,”
        Forbes (Forbes Magazine, June 27, 2019),
        https://www.forbes.com/sites/quora/2019/06/27/how-do-tech-companies-make-money-from-our-personal-data/#2647664b4788)
      </p>
    </div>
  </div>
)

const KeyInsights = () => (
  <div className="report__section">
    <div className="report__header">
      <h1 className="report__title">Key Insights & Lessons Learned</h1>
    </div>
    <div className="report__subSection">
      <p className="report__paragraph">
        Our team was excited to explore a topic that we’ve never before seen
        articulated in an academic setting. It was interesting to navigate this
        system and approach the project with different perspectives, experiences
        and interests. What we did not anticipate, however, was the sudden onset
        of COVID-19 that has quickly transformed the world and sent it into an
        international pandemic. This pandemic developed quickly throughout our
        process, and halfway through it forced us to leave university and
        practice social distancing. This influenced how we could work on our
        project and how we could collaborate effectively with the task of
        working remotely.
      </p>
      <p className="report__paragraph">
        Luckily, we were able to overcome most challenges by using personal
        computers, virtual meetings, collaborative design softwares and writing
        platforms. Unfortunately, we were unable to conduct certain primary
        research (e.g. in-person surveys, additional interviews) due to the
        distance, but attempted to compensate with online surveys. We
        acknowledge there may be some gaps in our research due to these
        challenges and hope to continue researching them in the future.
      </p>

      <p className="report__paragraph">
        WIth COVID-19 on our minds, it's important to note that although we
        chose not to make the medical field a focus, AI has a significant role.
        The current situation did force us to think about AI as a potential tool
        in helping to slow the spread, treat and possibly cure COVID-19. Perhaps
        the largest challenge in fighting the virus, in Ontario especially, is
        the availability of testing. Many are claiming that the current
        “official” number of cases are far lower than reality, and that there’s
        a “backlog of more than 8,400 tests, with people waiting at least 4 days
        between test and result” [43]. AI, using deep learning algorithms, has
        made huge advancements in the field of diagnostics, making them cheaper,
        faster and ultimately more accessible [44]. Already, AI is being used to
        track the virus using machine learning, use computer vision to detect
        infection, employ robots on the frontlines, and to speed up drug
        research. DeepMind, Google’s AI research lab, “recently declared that it
        has used deep learning to find new information about the structure and
        proteins associated with AI” [45]. This is a process that, without AI,
        would have taken many months to complete.
      </p>
      <p className="report__paragraph">
        This is, of course, just one of many potentially life-changing or
        life-saving applications of AI. But the current state of the world has
        certainly helped us to contextualize AI’s applications. It is our hope
        that, starting with our own generation, humans are able to overcome what
        seems to be an intrinsic resistance to artificial intelligence. We must
        recognize that this technology must be utilized in order for it to reach
        its full potential in benefiting humans, and whatever perceived loss of
        humanity we will incur through AI use will, in time, only reignite the
        arts that we have lost through a world obsessed with efficiency and
        progress.
      </p>
    </div>
    <div className="report__citation">
      <p className="report__citation--para">
        [38] Mike Crawley, “Why Ontario's COVID-19 Testing Underestimates the
        Spread of the Virus | CBC News,” CBCnews (CBC/Radio Canada), March 24,
        2020,
        https://www.cbc.ca/news/canada/toronto/covid19-ontario-coronavirus-positive-tests-cases-1.5507211)
        [39] “Artificial Intelligence in Medicine,” The Top 4 Applications,
        Accessed March 25, 2020,
        https://www.datarevenue.com/en-blog/artificial-intelligence-in-medicine)
        [40] Ben Dickson, “Why AI Might Be the Most Effective Weapon We Have to
        Fight COVID-19,” Neural | The Next Web, March 17, 2020,
        https://thenextweb.com/neural/2020/03/21/why-ai-might-be-the-most-effective-weapon-we-have-to-fight-covid-19/)
      </p>
    </div>
  </div>
)

export default IndexPage

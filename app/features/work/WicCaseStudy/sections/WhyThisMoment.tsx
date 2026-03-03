import MetricsCard from '@components/content-media/MetricsCard'
import PullQuote from '@components/content-media/PullQuote'
import Link from '@components/navigation/Link'

export default function WhyThisMoment() {
  return (
    <section>
      <h2>Why This Moment, Why This Product</h2>
      <p>
        The Women, Infants, and Children program is deceptively complex. Most people think of it as
        a client benefit program, but it operates across three interconnected domains: participant
        case management, vendor authorization, and food package administration. All three have to
        reconcile with each other in real time. A change to an approved food item ripples across
        vendor eligibility, participant benefits, and state compliance reporting simultaneously. It
        is a surprisingly complex system, and the software supporting it hadn't kept pace.
      </p>
      <p>
        Many state WIC agencies were running on legacy platforms over 20 years old. These systems
        were so rigid that routine regulatory updates required full development cycles, sometimes
        taking months. Staff had adapted by building manual workarounds across disconnected tools,
        absorbing the complexity that software should have handled for them.
      </p>
      <p>
        KL&A saw an opportunity. Federal grants for modernization were active, states would soon
        need to spend that money, and no modern commercial WIC MIS existed that could serve multiple
        states without heavy customization. They decided to build one from scratch: the company's
        first commercial product after 30 years of custom development.
      </p>
      <p>
        Early validation came quickly, and from an unexpected source. At the National WIC
        Association conference in Portland, our booth happened to be next to a third-party
        compliance investigator who worked directly with state agencies on vendor investigations. He
        walked through what we had built, asked sharp questions, and then said something that stuck:
        wouldn't it be something if he could log into a system like this out in the field and run
        his investigation directly? He wasn't a potential customer. He had no reason to flatter us.
        He was just describing, unprompted, a capability our product could naturally support. It was
        the kind of validation you can't manufacture.
      </p>
      <p>
        A few months later, a $14.9 million federal grant was awarded{' '}
        <Link href='#ref-1' className='citation-ref'>
          [1]
        </Link>{' '}
        to research modernization pathways for WIC systems nationally. We hadn't known it was
        coming. When the initial findings were published{' '}
        <Link href='#ref-2' className='citation-ref'>
          [2]
        </Link>
        , they described the ideal modern WIC platform as participant-first, human-centered,
        modular, and licensable. Those were the exact principles we had already been building
        around. We hadn't found product-market fit by chasing a funding signal. We had found it by
        listening carefully to the people closest to the problem.
      </p>
      <aside className='aside inline'>
        <div className='asideInner'>
          <MetricsCard
            value='$14.9'
            description='million federal grant was awarded to research modernization pathways for WIC systems nationally'
          />
          <PullQuote quote="We hadn't found product-market fit by chasing a funding signal. We had found it by listening carefully to the people closest to the problem." />
        </div>
      </aside>
    </section>
  )
}

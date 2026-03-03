import ContentImage from "@/components/content-media/ContentImage";

export default function WhereWeChoseToBet() {
  return (
    <section>
      <h2>Where We Chose to Bet</h2>
      <p>
        The original plan was to build vendor management, then food management, and then the clinic.
        Discovery at the Portland and Chicago conferences revealed a gap. The concept of a
        participant-first program was strongly held but not reflected in the software that supported
        it. I advocated pivoting to an external-facing participant portal next. It was a strategic
        detour, and not an obvious one in a company built around delivering only what clients
        specified.
      </p>
      <ContentImage
        src='/images/wic-case-study/participant-intake-workflow.png'
        alt='Mobile-First Participant Portal Intake Workflow'
        caption='Mobile-First Participant Portal Intake Workflow'
        expandable
      />
      <p>
        My aim was to balance risk and speed. We sequenced our engineering investment deliberately,
        building full infrastructure where requirements were well understood and validating new
        concepts quickly before committing to full implementation. This let us move fast without
        overbuilding in the wrong direction.
      </p>
      <p>
        The participant portal was a success. The response in Baltimore confirmed we had identified
        the right direction. The participant-first philosophy became our North Star.
      </p>
      
      <p>
        We invested in configurability as a strategic choice. Rather than custom-coding per state,
        we selectively focused on where states clearly had divergent approaches, such as workflow
        processes, form content in specific areas, and algorithms. This meant we could build a more
        maintainable, scalable product tailored to their programs with less engineering work. Where
        workflows and user needs were consistent, we maintained standard implementations. This
        architectural choice enabled true COTS (commerical-off-the-shelf) scalability. It meant we could spend our engineering
        investment where it mattered most: on the features that made the product worth buying.
      </p>
    </section>
  )
}

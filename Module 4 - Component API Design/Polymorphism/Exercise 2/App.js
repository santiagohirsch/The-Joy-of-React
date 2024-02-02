import React from 'react';

import SectionWithHeading from './SectionWithHeading';

function App() {
  return (
    <SectionWithHeading
      title="George Mouzalon"
      level={1}
    >
      <p>
        George Mouzalon (Greek: Γεώργιος Μουζάλων,
        romanized: Geōrgios Mouzalōn; c. 1220 – 25
        August 1258) was a high official of the
        Empire of Nicaea under Theodore II Laskaris
        (r. 1254–1258).
      </p>
      <p>
        Of humble origin, he became Theodore's
        companion in childhood and was raised to
        high state office upon the latter's
        assumption of power. This caused great
        resentment from the aristocracy, which had
        monopolized high offices and opposed
        Theodore's policies. Shortly before
        Theodore's death in 1258, he was appointed
        regent of Theodore's under-age son John IV
        Laskaris (r. 1258–1261).
      </p>

      <SectionWithHeading
        title="Biography"
        level={2}
      >
        <SectionWithHeading
          title="Early life and service under Theodore II"
          level={3}
        >
          <p>
            The Mouzalon family is first attested
            in the 11th century, but produced few
            notable members until the mid-13th
            century, with exception of Nicholas IV
            Mouzalon, Patriarch of Constantinople
            in 1147–1151.[1][2] George Mouzalon was
            born at Adramyttium on the western
            Anatolian coast in c. 1220.
          </p>
          <p>
            His family was considered as low-born,
            but he and his brothers became the
            childhood friends of the future
            Theodore II Laskaris, being raised with
            him in the palace as his paidopouloi
            (παιδόπουλοι, "pages"). It is assumed
            that they were also educated along with
            Theodore, sharing his classes under the
            scholar Nikephoros Blemmydes.[3][4][5]
            There were also at least two sisters,
            one of whom was later married to a
            member of the Hagiotheodorites
            family.[5]
          </p>
        </SectionWithHeading>
        <SectionWithHeading
          title="Appointment as regent and assassination"
          level={3}
        >
          <p>
            Shortly before Theodore II died on 16
            August 1258, he left George Mouzalon as
            regent and guardian of his
            eight-year-old son John IV. Patriarch
            Arsenios Autoreianos may have shared
            guardianship of John: although the
            later historians Nikephoros Gregoras
            and Makarios Melissenos say the
            Patriarch was named in this context,
            the contemporary historians George
            Pachymeres and George Akropolites name
            only Mouzalon.[16]
          </p>
          <p>
            This appointment further enraged the
            aristocracy, and Mouzalon's position
            became extremely precarious.[4][17][18]
            Mouzalon was also unpopular with the
            clergy because he was associated with
            Theodore's high-handed treatment of the
            Church, and with the people, who feared
            that he would try to usurp the throne.
          </p>
          <p>
            Most importantly, however, he faced the
            hostility of the army, in particular
            the Latin mercenaries, who had
            apparently been denied the usual
            stipends and donatives. In addition,
            they probably resented Theodore's
            intention to raise a "national" army
            composed solely of Byzantine Greeks,
            and Mouzalon is recorded by Pachymeres
            to have taken such measures.
          </p>
        </SectionWithHeading>
      </SectionWithHeading>
    </SectionWithHeading>
  );
}

export default App;
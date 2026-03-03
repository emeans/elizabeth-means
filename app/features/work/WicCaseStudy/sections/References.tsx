import Link from '@/components/navigation/Link'

export default function References() {
  return (
    <section>
      <h2>References</h2>
      <p id="ref-1">
        <sup className="citation-ref">[1]</sup> National WIC Association, "NWA Receives USDA Funding
        to Modernize WIC MIS," September 2024.{' '}
        <Link href="https://www.nwica.org/press-releases/national-wic-association-receives-usda-funding-to-modernize-wic-management-information-systems">
          nwica.org
        </Link>
      </p>
      <p id="ref-2">
        <sup className="citation-ref">[2]</sup> National WIC Association and Nava PBC, "Modernizing
        WIC's MIS: Findings from Year One of Research," 2025.{' '}
        <Link href="https://www.nwica.org/events/info/2025-nwa-technology-innovation-and-vendor-management-conference">
          nwica.org
        </Link>
      </p>
      <p id="ref-3">
        <sup className="citation-ref">[3]</sup> USDA Food and Nutrition Service, "Biden-Harris
        Administration Announces Finalized Science-Driven Updates to Foods Provided Through WIC,"
        April 9, 2024.{' '}
        <Link href="https://www.fns.usda.gov/wic/fr-041824">usda.gov</Link>
      </p>
      <p id="ref-4">
        <sup className="citation-ref">[4]</sup> Jakob Nielsen, "10 Usability Heuristics for User
        Interface Design," Nielsen Norman Group, 1994, updated 2020.{' '}
        <Link href="https://www.nngroup.com/articles/ten-usability-heuristics/">nngroup.com</Link>
      </p>
    </section>
  )
}

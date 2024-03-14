export type CCLicenseTypes =
  | "0"
  | "BY-NC-ND"
  | "BY-ND"
  | "BY-NC-SA"
  | "BY-NC"
  | "BY-SA"
  | "BY"

export function CCLicense({ license = "0" }: { license?: CCLicenseTypes }) {
  return (
    <a
      href={
        license === "0"
          ? "https://creativecommons.org/publicdomain/zero/1.0/"
          : `https://creativecommons.org/licenses/${license.toLowerCase()}/4.0/`
      }
    >
      <img
        src={`${process.env.PUBLIC_URL}/CC-${license}.png`}
        style={{ height: "33px" }}
      />
    </a>
  )
}

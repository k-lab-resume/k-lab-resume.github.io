import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
        <p>Written by Ko</p>
    </div>
  )
}

export default Bio

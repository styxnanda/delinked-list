import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["*://*.linkedin.com/jobs/search/*"],
  all_frames: true
}

const filterPromotedJobs = () => {
  const jobListItems = document.querySelectorAll(
    "li.jobs-search-results__list-item"
  )

  jobListItems.forEach((item) => {
    // Look for the footer item that contains "Promoted"
    const footerItem = item.querySelector(
      "li.job-card-container__footer-item.inline-flex.align-items-center"
    )
    if (footerItem && footerItem.textContent?.trim() === "Promoted") {
      // Remove the entire job card
      item.remove()
    }
  })
}

window.addEventListener("load", filterPromotedJobs)

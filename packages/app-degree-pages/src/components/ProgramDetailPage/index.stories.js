/* eslint-disable react/prop-types */
/* eslint react/jsx-props-no-spreading: "off" */
// @ts-check
import React from "react";

import { ProgramDetailPage } from ".";

// @ts-ignore
import stockVideo from "../../assets/video/stock-video-person-drawing.mp4";

/**
 * @typedef {import('../../core/models/program-detail-types').ProgramDetailPageProps} AppProps
 */

export default {
  component: ProgramDetailPage,
  title: "Program Detail Page",
};

/** @type {AppProps} */
const defaultArgs = {
  dataSource:
    `https://degreesearch-proxy.apps.asu.edu/degreesearch/?method=findDegreeByAcadPlan` +
    // `&acadPlan=LSBISBIS` +
    `&acadPlan=ESBMEMDBSE` + // this does not have required courses
    `&fields=` +
    `marketText,DescrlongExtns,concurrentDegreeMajorMaps,onlineMajorMapURL,ChangeMajor,AsuCritTrackUrl,` +
    // at a glance
    `CollegeDescr100,` +
    `AsuOfficeLoc,CampusStringArray,campusWue,MinMathReq,MathIntensity,` +
    // Example Careers
    "careerDataAlterOnetTitle,careerDataBrightOutlook,careerDataGreen," +
    "careerDataGrowth,careerDataOnetTitle,careerDataSalary," +
    // flexible degree options
    `accelerateDegrees,accelerateDegreeMajorMaps,` +
    `concurrentDegrees,concurrentDegreeMajorMaps,` +
    // career opportunity
    `AsuCareerOpp,` +
    // program contact
    `DepartmentName,EmailAddr,Phone,CollegeDescr100,` +
    // application requirement
    `DescrlongExtn5,gradAdditionalRequirements,TransferAdmission,` +
    `AdmissionsDegRequirements,` +
    // Global opportunity
    `globalExp,` +
    // attend online
    `CurriculumUrl,managedOnlineCampus,` +
    `planCatDescr&init=false`,
  introContent: {
    breadcrumbs: [
      {
        text: "Academic programs",
        url: "#",
      },
      {
        text: "Undergraduate degrees",
        url: "#",
      },
      {
        text: "Degree title",
        isActive: true,
      },
    ],
    image: {
      url: "https://source.unsplash.com/random/1200x750",
      altText:
        "Random image. REPLACE with appropriate alt text for accessibility.",
    },
    // video: {
    //   url: "https://player.vimeo.com/video/110626871",
    //   altText: "Example video",
    // },
    // contents: [
    //   {
    //     text: `Can you imagine yourself hosting successful events and meetings?
    //     Then this program is right for you. Earn a degree that showcases your advanced knowledge of event programming, operations, financial management and marketing.
    //     The instructors work in all aspects of the event industry.`,
    //   },
    // ],
  },
  atAGlance: {
    offeredBy: {
      text: "Herberger Instite for Design and the Arts",
      url: "#",
    },
    locations: [
      {
        text: "Tempe campus",
        url: "#",
      },
      {
        text: "West campus",
        url: "#",
      },
      {
        text: "Online",
        url: "#",
      },
      {
        text: "ASU Local@Los Angeles",
        url: "#",
      },
    ],
    firstRequirementMathCourse: "MAT 142 - College Mathematics",
    mathIntensity: "General",
    timeCommitment: "120 credit hours(about 4 years)",
  },
  careerOutlook: {
    image: {
      url: "https://source.unsplash.com/random/1200x750",
      altText:
        "Random image. REPLACE with appropriate alt text for accessibility.",
    },
  },
  globalOpportunity: {
    image: {
      url: "https://source.unsplash.com/random/1200x750",
      altText:
        "Random image. REPLACE with appropriate alt text for accessibility.",
    },
  },
  attendOnline: {
    image: {
      url: "https://source.unsplash.com/random/1200x750",
      altText:
        "Random image. REPLACE with appropriate alt text for accessibility.",
    },
  },
  programContactInfo: {
    departmentUrl: "#",
    emailUrl: "#",
  },
  nextSteps: {
    cards: [
      {
        icon: "info-circle",
        title: "Lear more about our programs",
        content:
          "Tell us what type of student you are and we'll get you the information you need.",
        buttonLink: {
          label: "Request information",
          ariaLabel: "Request information",
          color: "maroon",
          href: "https://admission.asu.edu/contact/request-info",
        },
      },
      {
        icon: "file-alt",
        title: "Apply to program",
        content:
          "Arizona State University invites freshman, transfer, international, graduate and online students to apply for admission using our online application.",
        buttonLink: {
          label: "Apply now",
          ariaLabel: "Apply now",
          color: "maroon",
          href: "https://admission.asu.edu/apply",
        },
      },
      {
        icon: "map-marker-alt",
        title: "Visit our campus",
        content:
          "An Experience ASU visit includes a presentation on admissions, scholarships and financial aid, student housing, getting involved on campus and much more.You will also go on a student-led walking tour of campus.",
        buttonLink: {
          label: "Schedule a visit",
          ariaLabel: "Schedule a visit",
          color: "maroon",
          href: "https://visit.asu.edu/",
        },
      },
    ],
  },
};

/**
 * @param {AppProps} props
 * @returns {JSX.Element}
 */
const Template = ({
  dataSource,
  introContent,
  atAGlance,
  careerOutlook,
  globalOpportunity,
  programContactInfo,
  attendOnline,
  nextSteps,
}) => (
  <ProgramDetailPage
    dataSource={dataSource}
    introContent={introContent}
    atAGlance={atAGlance}
    careerOutlook={careerOutlook}
    globalOpportunity={globalOpportunity}
    programContactInfo={programContactInfo}
    attendOnline={attendOnline}
    nextSteps={nextSteps}
  />
);

/**
 * @param {AppProps} props
 * @returns {JSX.Element}
 */
export const DefaultPage = Template.bind({});
DefaultPage.args = defaultArgs;

// @ts-check

import { fetchData } from "../utils/fetch-data";

const path = "https://webapp4.asu.edu/programs";

// Descr100,Degree,CollegeUrlJoioint,CollegeUrl,CampusWueInfo:,CampusStringArray,managedOnlineCampus,concurrentDegreeMajorMaps,onlineMajorMapURL,AsuCritTrackUrl,DescrlongExtns,AsuProgramFee,AsuLangReqFlag,additionalMathReqCourse,MinMathReq,MathIntensity,asuAcadpMrfText,
// https://degreesearch-proxy.apps.asu.edu/degreesearch/?init=false&method=findDegreeByFirstLetterMapArray&fields=Descr100,Degree,CollegeUrlJoioint,CollegeUrl,CampusWueInfo:,CampusStringArray,managedOnlineCampus,concurrentDegreeMajorMaps,onlineMajorMapURL,AsuCritTrackUrl,DescrlongExtns,AsuProgramFee,AsuLangReqFlag,additionalMathReqCourse,MinMathReq,MathIntensity,asuAcadpMrfText,&program=undergrad&cert=false
const DEGREE_SEARCH_URL =
  `https://degreesearch-proxy.apps.asu.edu/degreesearch` +
  `/?init=false` +
  `&method=findDegreeByFirstLetterMapArray` +
  `&fields=CollegeUrl,AsuCritTrackUrl,Degree,MinMathReq,DescrlongExtns,MathIntensity,AsuLangReqFlag,CampusStringArray,managedOnlineCampus,asuAcadpMrfText,Descr100,AsuProgramFee,additionalMathReqCourse,CollegeDescr100,AcadPlan,Institution,` +
  `&program=undergrad` +
  `&cert=false`;

/**
 *
 * @param {string} url
 * @returns {Promise}
 */
async function getDegreePrograms(url) {
  return fetchData(url);
}

/**
 *
 * @param {string} institutionCode
 * @param {string} acadPlanCode
 * @param {string} program
 * @param {string} cert
 * @param {string} searchOnline
 * @returns
 */
function majorInfoLink(
  institutionCode,
  acadPlanCode,
  program = "undergrad",
  cert = "false",
  searchOnline = "" // searchOnline
) {
  const url = `${path}/t5/majorinfo/${institutionCode}/${acadPlanCode}/${program}/${cert}`;
  return !searchOnline ? url : `${url}/searchOnline`;
}

function mapTooltipLink(location, program = "undergrad") {
  return `${path}/tooltipcampus?campus=${location}&amp;program=${program}`;
}

function mapTooltipSubPlanMapLink(location, acadPlanCode) {
  return `${path}/tooltipsubplanmajormap/listMajorMaps/ASU00/${acadPlanCode}`;
}

function saveFav(
  institutionCode,
  acadPlanCode,
  program = "undergrad",
  cert = "false"
) {
  const url = `${path}/save?acadPlan=${institutionCode},${acadPlanCode}&program=${program}&cert=${cert}`;
  fetch(url).then();
}

// https://asudev.jira.com/wiki/spaces/eadvisor/pages/887324850/Apply%2BNow%2BButton%2Band%2BModal%2BDisplay%2BLogic
function applyNow() {
  // todo
}

export {
  getDegreePrograms,
  DEGREE_SEARCH_URL,
  majorInfoLink,
  mapTooltipLink,
  mapTooltipSubPlanMapLink,
  saveFav,
  applyNow,
};

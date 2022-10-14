// auto-generated by builder.js
// run "npm run build" to regenerate
// automatically rebuilt on push

import SurveyFactory from "./surveyFactory.jsx"

import demographicsJson from "../surveys/demographics/demographics.json";
import { default as demographicsScoreFunc } from "../surveys/demographics/demographics.score.js";
export const Demographics = SurveyFactory("demographics", demographicsJson, demographicsScoreFunc);

import discussionQualityControlJson from "../surveys/discussionQualityControl/discussionQualityControl.json";
import { default as discussionQualityControlScoreFunc } from "../surveys/discussionQualityControl/discussionQualityControl.score.js";
export const DiscussionQualityControl = SurveyFactory("discussionQualityControl", discussionQualityControlJson, discussionQualityControlScoreFunc);

import exampleSurveyJson from "../surveys/exampleSurvey/exampleSurvey.json";
import { default as exampleSurveyScoreFunc } from "../surveys/exampleSurvey/exampleSurvey.score.js";
export const ExampleSurvey = SurveyFactory("exampleSurvey", exampleSurveyJson, exampleSurveyScoreFunc);

import lonelinessSingleItemJson from "../surveys/lonelinessSingleItem/lonelinessSingleItem.json";
import { default as lonelinessSingleItemScoreFunc } from "../surveys/lonelinessSingleItem/lonelinessSingleItem.score.js";
export const LonelinessSingleItem = SurveyFactory("lonelinessSingleItem", lonelinessSingleItemJson, lonelinessSingleItemScoreFunc);

import teamViabilityJson from "../surveys/teamViability/teamViability.json";
import { default as teamViabilityScoreFunc } from "../surveys/teamViability/teamViability.score.js";
export const TeamViability = SurveyFactory("teamViability", teamViabilityJson, teamViabilityScoreFunc);

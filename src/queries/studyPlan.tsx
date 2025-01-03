import { gql } from "@apollo/client";

export const GET_INTERVIEW_PREP_PROBLEMS = gql`
    query studyPlanProgress($slug: String!) {
        studyPlanV2ProgressDetail(planSlug: $slug) {
            id
            status
            weeklyTaskScheduleResettable
            finishedQuestionNum
            studyPlanDetail {
            questionNum
            planSubGroups {
                slug
                questions {
                titleSlug
                status
                difficulty
                }
            }
            }
        }
    }
`;

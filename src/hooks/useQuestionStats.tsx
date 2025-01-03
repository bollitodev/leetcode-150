import { useQuery } from "@apollo/client";
import { GET_INTERVIEW_PREP_PROBLEMS } from '../queries/studyPlan';


export function useQuestionStats(slug: string){
    const { loading, error, data } = useQuery(GET_INTERVIEW_PREP_PROBLEMS, {
        variables: { slug: slug },
    });

    if (loading) return { loading: true };
    if (error) return { error: true };

    const { studyPlanV2ProgressDetail } = data;

    let solvedEasyQuestions = 0;
    let solvedMediumQuestions = 0;
    let solvedHardQuestions = 0;
    let solvedQuestions = 0;

    if (studyPlanV2ProgressDetail !== null) {
        studyPlanV2ProgressDetail.studyPlanDetail.planSubGroups.forEach((group: { questions: any[]; }) => {
            group.questions.forEach((question) => {
                console.log(question.titleSlug, question.status, question.difficulty);
                if (question.status.includes('SOLVE')) {
                    solvedQuestions++;

                    if (question.difficulty === 'EASY') {
                        solvedEasyQuestions++;
                    } else if (question.difficulty === 'MEDIUM') {
                        solvedMediumQuestions++;
                    }
                    else if (question.difficulty === 'HARD') {
                        solvedHardQuestions++;
                    }
                }
            });
        });
    }
    return {
        solvedQuestions,
        solvedEasyQuestions,
        solvedMediumQuestions,
        solvedHardQuestions,
    };
};
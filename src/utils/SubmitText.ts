export enum SubmitState {
    NotSubmitted, Submitting, Submitted
}

export const submitText = (submitState?: SubmitState) => {
        if (submitState === SubmitState.NotSubmitted) {
            return "Сохранить";
        } else if (submitState === SubmitState.Submitting) {
            return "Сохраняем...";
        } else if (submitState === SubmitState.Submitted) {
            return "Сохранено!";
        }
        return "Сохранить";
    };

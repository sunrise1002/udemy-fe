import udLink from 'utils/ud-link';

// eslint-disable-next-line import/prefer-default-export
export const INSTRUCTOR_VERIFICATION_URL = udLink.to('support', '229234067');

export const COMPLY_FORM_STATUS = Object.freeze({
    BEFORE_HOLD_APPROVED: 'BEFORE_HOLD_APPROVED',
    BEFORE_HOLD_UNDER_REVIEW: 'BEFORE_HOLD_UNDER_REVIEW',
    BEFORE_HOLD_ACTION_REQUIRED: 'BEFORE_HOLD_ACTION_REQUIRED',
    DURING_HOLD_APPROVED: 'DURING_HOLD_APPROVED',
    DURING_HOLD_UNDER_REVIEW: 'DURING_HOLD_UNDER_REVIEW',
    DURING_HOLD_ACTION_REQUIRED: 'DURING_HOLD_ACTION_REQUIRED',
    NEW_INSTRUCTOR_APPROVED: 'NEW_INSTRUCTOR_APPROVED',
    NEW_INSTRUCTOR_UNDER_REVIEW: 'NEW_INSTRUCTOR_UNDER_REVIEW',
    NEW_INSTRUCTOR_ACTION_REQUIRED: 'NEW_INSTRUCTOR_ACTION_REQUIRED',
});

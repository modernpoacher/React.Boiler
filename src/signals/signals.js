export default new Map(Object.entries({
  ALPHA: 'alpha',
  OMEGA: 'omega',

  EMBARK: 'embark',
  DEBARK: 'debark',

  CONFIRM: 'confirm',

  INDEX: 'INDEX',

  /**
   *  ALPHA_STAGE: 'alpha-stage',
   *  OMEGA_STAGE: 'omega-stage',
   *
   *  ALPHA_PATTERN: ':alpha',
   *  OMEGA_PATTERN: ':omega',
   *
   *  ALPHA_ROUTE: '/:alpha',
   *  OMEGA_ROUTE: '/:alpha/:omega',
   *
   *  EMBARK_STAGE: 'embark-stage',
   *  DEBARK_STAGE: 'debark-stage',
   *
   *  EMBARK_PATTERN: ':embark',
   *  DEBARK_PATTERN: ':debark',
   *
   *  EMBARK_ROUTE: '/:embark',
   *  DEBARK_ROUTE: '/:debark',
   */

  ALPHA_PATTERN: '/:alpha',
  OMEGA_PATTERN: '/:alpha/:omega',

  EMBARK_STAGE: 'embark-stage',
  DEBARK_STAGE: 'debark-stage',

  CONFIRM_STAGE: 'confirm-stage',

  EMBARK_PATTERN: '/:embark',
  DEBARK_PATTERN: '/:debark',

  CONFIRM_PATTERN: '/:confirm',

  ENTER_ALPHA: 'ENTER_ALPHA',
  LEAVE_ALPHA: 'LEAVE_ALPHA',

  CHANGE_ALPHA: 'CHANGE_ALPHA',
  REMAIN_ALPHA: 'REMAIN_ALPHA',

  ENTER_OMEGA: 'ENTER_OMEGA',
  LEAVE_OMEGA: 'LEAVE_OMEGA',

  CHANGE_OMEGA: 'CHANGE_OMEGA',
  REMAIN_OMEGA: 'REMAIN_OMEGA',

  ENTER_ALPHA_ENTER_OMEGA: 'ENTER_ALPHA_ENTER_OMEGA',
  LEAVE_ALPHA_LEAVE_OMEGA: 'LEAVE_ALPHA_LEAVE_OMEGA',

  CHANGE_ALPHA_ENTER_OMEGA: 'CHANGE_ALPHA_ENTER_OMEGA',
  CHANGE_ALPHA_LEAVE_OMEGA: 'CHANGE_ALPHA_LEAVE_OMEGA',

  REMAIN_ALPHA_ENTER_OMEGA: 'REMAIN_ALPHA_ENTER_OMEGA',
  REMAIN_ALPHA_LEAVE_OMEGA: 'REMAIN_ALPHA_LEAVE_OMEGA',

  CHANGE_ALPHA_CHANGE_OMEGA: 'CHANGE_ALPHA_CHANGE_OMEGA',
  CHANGE_ALPHA_REMAIN_OMEGA: 'CHANGE_ALPHA_REMAIN_OMEGA',

  REMAIN_ALPHA_CHANGE_OMEGA: 'REMAIN_ALPHA_CHANGE_OMEGA',
  REMAIN_ALPHA_REMAIN_OMEGA: 'REMAIN_ALPHA_REMAIN_OMEGA',

  EXCEPTION: 'EXCEPTION',

  FAILURE: 0,
  SUCCESS: 1,
  IN_PROGRESS: 3,
  UNKNOWN: 4,
  COMPLETE: 5
}))

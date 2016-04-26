import entries from './entries'
import invoicing from './invoicing'
import projects from './projects'

export default {
  common: {
    clearErrors({LocalState}) {
      return LocalState.set('SAVING_ERROR', null);
    }
  },

  entries,
  invoicing,
  projects
};

import { MeetupView } from './MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

export const MeetupPage = {
  name: 'MeetupPage',

  template: `<div>
<meetup-view :meetup="meetup" v-if="meetup"/>
</div>`,

  components: {
    MeetupView,
  },

  data() {
    return {
      meetup: null,
    };
  },

  mounted() {
    this.getMeetupInfo();
  },

  methods: {
    async getMeetupInfo() {
      this.meetup = await fetchMeetup(MEETUP_ID);
    },
  },
};

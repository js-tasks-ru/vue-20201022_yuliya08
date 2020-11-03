export const MeetupCover = {
  template: `<div class="meetup-cover" :style="coverLink">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,

  props: {
    link: String,
    title: String,
  },

  computed: {
    coverLink() {
      if (this.link) {
        return {'--bg-url': `url(${this.link})`};
      }
      return {};
    },
  },
};

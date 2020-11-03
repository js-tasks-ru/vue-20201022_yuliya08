import { agendaItemTitles } from './data.js';
import { agendaItemIcons } from './data.js';

export const MeetupAgendaItem = {
  name: 'MeetupAgendaItem',

  template: `<div class="meetup-agenda__item">
      <div class="meetup-agenda__item-col">
        <img class="icon" alt="icon" :src="itemIcon" />
      </div>
      <div class="meetup-agenda__item-col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="meetup-agenda__item-col">
        <h5 class="meetup-agenda__title">{{ itemTitle }}</h5>
        <p v-if="agendaItem.speaker">
          <span>{{ agendaItem.speaker }}</span>
          <span class="meetup-agenda__dot"></span>
          <span class="meetup-agenda__lang">{{ agendaItem.language }}</span>
        </p>
        <p>{{ agendaItem.description }}</p>
      </div>
    </div>`,

  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
  },

  computed: {
    itemTitle() {
      return this.agendaItem.title
        ? this.agendaItem.title
        : agendaItemTitles[this.agendaItem.type];
    },
    itemIcon() {
      const icon = agendaItemIcons[this.agendaItem.type];
      return `/assets/icons/icon-${icon}.svg`;
    },
  },
};

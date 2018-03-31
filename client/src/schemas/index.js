import { schema } from 'normalizr';

const options = { idAttribute: value => value.id.$oid };

const club = new schema.Entity('clubs', undefined, options);

const author = new schema.Entity('authors', undefined, options);
const validator = new schema.Entity('validators', undefined, options);
const participant = new schema.Entity('participants', undefined, options);
const voter = new schema.Entity('voters', undefined, options);
const rater = new schema.Entity('raters', undefined, options);

const recurrence = new schema.Entity('recurrences', undefined, options);

const enrollment = new schema.Entity('enrollments', { participant }, options);

const vote = new schema.Entity('votes', { voter }, options);

const rate = new schema.Entity('rates', { rater }, options);

const comment = new schema.Entity('comments', { author }, options);

const image = new schema.Entity('images', undefined, options);

const souvenir = new schema.Entity('souvenirs', { author }, options);

const event = new schema.Entity('events', {
  club,
  author,
  validator,
  recurrence,
  enrollment,
  vote,
  rate,
  comment,
  image,
  souvenir
}, options);

export default {
  event,
  events: [event]
};
const users = [
  {
    id: '1',
    name: 'Beata',
    email: 'beata@example.com',
    age: 30,
  },
  {
    id: '2',
    name: 'Bob',
    email: 'bob@example.com',
  },
  {
    id: '3',
    name: 'Emy',
    email: 'emy@example.com',
    age: 50,
  },
];

const posts = [
  {
    id: '1',
    title: 'First Post',
    body:
      'One person has been arrested for arson after a large fire destroyed a building in Vancouver Mount Pleasant neighbourhood on Thursday, the blaze leaving at least one family out of a home and several businesses damaged.',
    published: true,
    author: '2',
  },
  {
    id: '2',
    title: 'Second Post',
    body:
      'One person has been arrested for arson after a large fire destroyed a building in Vancouver Mount Pleasant neighbourhood on Thursday, the blaze leaving at least one family out of a home and several businesses damaged.',
    published: true,
    author: '2',
  },
  {
    id: '3',
    title: 'Third Post',
    body:
      'One person has been arrested for arson after a large fire destroyed a building in Vancouver Mount Pleasant neighbourhood on Thursday, the blaze leaving at least one family out of a home and several businesses damaged.',
    published: false,
    author: '1',
  },
];

const comments = [
  {
    id: '10',
    text:
      'However, parents on a budget have long found ways to torment their children by circumventing societal norms and piecing together Halloween costumes themselves.Such was the case in 1995, when a Midday correspondent demonstrated ',
    author: '1',
    post: '1',
  },
  {
    id: '11',
    text:
      'But why limit the discussion to costumes when so much of Halloween is about the celebrations?  ',
    author: '3',
    post: '3',
  },
  {
    id: '12',
    text:
      'In the segment, party planner Barbara Kirschenblatt also suggests some spooky party games to entertain teens. ',
    author: '3',
    post: '2',
  },
  {
    id: '13',
    text:
      'In the segment, party planner Barbara Kirschenblatt also suggests some spooky party games to entertain teens. ',
    author: '2',
    post: '1',
  },
];

const db = {
  users,
  posts,
  comments,
};

export { db as default };

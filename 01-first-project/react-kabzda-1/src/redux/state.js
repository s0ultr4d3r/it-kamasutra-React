let state = {
  profilePage: {
    posts: [
      { id: "1", message: "Hi, how are you?", likesCount: 0 },
      { id: "2", message: "It's my first post", likesCount: 23 },
    ],
  },

  dialogsPage: {
    dialogs: [
      { id: 1, name: "First" },
      { id: 2, name: "Second" },
      { id: 3, name: "Third" },
      { id: 4, name: "Fourth" },
      { id: 5, name: "Fifth" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How" },
      { id: 3, message: "Yo" },
      { id: 4, message: "Hello" },
      { id: 5, message: "Good morning" },
    ],
  },
  sidebar: {},
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 2,
  };

  state.profilePage.posts.push(newPost);
};

export default state;

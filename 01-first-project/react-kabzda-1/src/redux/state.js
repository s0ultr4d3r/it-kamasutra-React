let store = {
  _state: {
    profilePage: {
      posts: [
        { id: "1", message: "Hi, how are you?", likesCount: 0 },
        { id: "2", message: "It's my first post", likesCount: 23 },
      ],
      newPostText: "newPostText from state",
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
  },
  _callSubscriber() {
    console.log("rerender from state");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 2,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

window.state = store;
export default store;

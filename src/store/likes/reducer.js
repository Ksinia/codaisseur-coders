const initialState = { likedness: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "like/LIKED": {
      // => Ask yourself: what is action.payload?
      return { likedness: true };
    }
    case "liked/DISLIKED": {
      return { likedness: null };
    }
    default: {
      return state;
    }
  }
}

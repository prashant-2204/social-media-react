import { createContext, useReducer } from "react"

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts: () => {},
  addreaction: ()=> {},
});



function PostListreducer(currPostList, action) {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts; }
  
  else if (action.type === "ADD_REACTION") {
    // Find the post in the current list
    const postIndex = currPostList.findIndex(
      (post) => post.id === action.payload.postId
    );

    // Make a copy of the post and update its reactions
    const updatedPost = {
      ...currPostList[postIndex],
      reactions: action.payload.reactions,
    };

    // Update the new post list with the modified post
    newPostList = [
      ...currPostList.slice(0, postIndex),
      updatedPost,
      ...currPostList.slice(postIndex + 1),
    ];
  }
  return newPostList;
}




const PostListProvider=({children})=>
{
  const [postList,dispatchPostList]=useReducer(PostListreducer,[]);
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  }
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  
    const addreaction = (postId,count) => {
      dispatchPostList({
        type: "ADD_REACTION",
        payload: {
          postId,
          reactions : count,
        },
      });

  };
  return <PostList.Provider value={{postList,addPost,deletePost,addInitialPosts,addreaction}}>{children} </PostList.Provider>
};


  
  




export default PostListProvider;
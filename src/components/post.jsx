import { useContext ,useRef, useState} from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/Contextprovider";

const Posts = ({ post }) => {
  const { deletePost ,addreaction} = useContext(PostList);
  const clicks=useRef(0);
  const handleonclick=()=>
  {
    
    // setcount(count+1);
    clicks.current++;
    let click2=clicks.current;
    addreaction(post.id,click2);
  }

  return (
    <div class="card post-card" style={{ width: "30rem" }}>
      <div class="card-body">
        <h5 class="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger del-btn"
            onClick={() => deletePost(post.id)}
          >
            <AiFillDelete />
          </span>
        </h5>
        <p class="card-text">
          {post.body}
        </p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
         <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {post.reactions} people.
        </div>
        <div class="card-footer text-body-secondary">
          Posted by {post.userId}
      </div>
      <div className="react-btn" >
      
      <button type="button" onClick={handleonclick} class="btn btn-outline-warning">Click to React</button>

      </div>
      
      </div>
    </div>
  );
};

export default Posts;

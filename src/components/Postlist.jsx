import Posts from "./post"
import { useContext, useState } from "react";
import { PostList as PostListData } from "../store/Contextprovider";
import Welcomemsg from "./Welcomemsg";



const Postlist =()=>
{
  const {postList,addInitialPosts} = useContext(PostListData);
  const [fetching,setfetching]=useState();
  

  return <>
  {postList.length===0 && <Welcomemsg></Welcomemsg>}
  {postList.map((post)=><Posts key ={post.id} post={post}></Posts>)}
</> 
}
export default Postlist;
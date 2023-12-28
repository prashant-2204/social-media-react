const Sidebar =({selectedtab,setselectedtab})=>
{
  


  return <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{width: "250px"}}>
  <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
    <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
    <span class="fs-4">Social Media</span>
  </a>
  <hr/>
  <ul class="nav nav-pills flex-column mb-auto">
    <li class="nav-item">
      <a href="#" class={` post nav-link text-white ${selectedtab==="POSTS" && "active"}`} onClick={()=>setselectedtab("POSTS")} aria-current="page">
        <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
        POSTS
      </a>
    </li>
    <li>
      <a href="#" class={`nav-link text-white ${selectedtab==="Create-posts" && "active"}`} onClick={()=> setselectedtab("Create-posts")}>
        <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>CREATE-POSTS
      </a>
    </li>
    
  </ul>
  <hr/>
  <center> created by Prashant</center>
</div>
}
export default Sidebar;
import React from 'react'

const Main = () => {
  return (
    <div id='container'>
<div id="nav_bar">

<div id='Logo_nav'>
  <h2 id='Logo_txt'> F I R E</h2>
</div>

     <nav>
      <ul id='list'>
        <li className='item'>Home</li>
        <li className='item'>Posts</li>
        <li className='item'>Pages</li>
      </ul>
     </nav>
 <div id="icon">
 <i class="ri-menu-5-line"></i>
 </div>
</div>
<div id="login">
    <h1>L O G I  N</h1>
    <input className='Username' type="text"  placeholder='ENTER  USERNAME' /> <br />
    <input className='Password' type="password"placeholder='ENTER YOUR PASSWORD' />
    <br />
      <button id='login_btn'>L O G I N</button>
     </div>
      <h2 id='devinfo'> &copy; FAIROZ AHMAD SHEIKH</h2>
    </div>
  )
}

export default Main
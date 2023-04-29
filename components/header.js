class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
          nav {
            height: 60px;
            align-items: center;
    
            background-color:  #0a0a23;
          }
  
          ul {
            position: -webkit-sticky;
            position: sticky;
            top: 0;
            border: 1px solid #757575;
            list-style-type: none;
            background-color: grey;
            /* remove browser default settings */
            margin: 0;
            /* padding: 0; */
            overflow: auto;
            }
        
        li {
            float: right;
            } 
        li a {
            display: block;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            }
            /* Change the link color to #111 (black) on hover */
        li a:hover {
            background-color: #b4bbb1;
            }
        .active {
            background-color: #0daf74;
            }
            @media screen and (max-width: 600px) {
                ul.topnav li.right, 
                ul.topnav li {float: none;}
                }
        </style>
        <header>
        <nav>
            <ul >
                <h3 style="float: left; padding-left: 15px; color: rgb(163, 16, 16);">Jailbird</h3>
                <li><a href="reviews.html">Reviews</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a class="active" href="\">Home</a></li>
        
        
              </ul>
          
       
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);

 
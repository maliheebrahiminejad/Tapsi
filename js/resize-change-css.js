<script type="text/javascript">
      function callme() {
        if(window.matchMedia("(min-width:768px)").matches){
         document.querySelector("#nav-list").classList.add('.list__inline');
        } else {
        document.querySelector("#nav-list").classList.remove(".list__inline");
        }
      }
      // windows load 
    // window.onload = function() {
    //   callme();
    // }
    // window resize 
    window.onresize = function() {
      callme();
    }
    
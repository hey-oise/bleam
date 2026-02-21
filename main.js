
let followers = 50;
const uiFollowers = document.querySelector('.userFollowers');
const followBtn = document.querySelector('.followBtn');
const alertapar = document.querySelector('.alertParent');

followBtn.innerText = 'follow';
followBtn.style.backgroundColor = '#22c55e';
uiFollowers.innerHTML = followers + '<br>followers';

let following = false;

function follow() {
   if (following) {
      followers--;
      following = false;
      console.log(followers);
      followBtn.innerText = 'follow';
      followBtn.style.backgroundColor = '#22c55e';
      alertapar.innerHTML = '<div class="alert">you are no longer a follower</div>';
   } else {
      followers++;
      console.log(followers)
      following = true;
      followBtn.innerText = 'unfollow';
      followBtn.style.backgroundColor = '#746B80';
      alertapar.innerHTML = '<div class="alert">you are now a follower</div>';
   }
   uiFollowers.innerHTML = followers + '<br>followers';
}

const github = new GitHub;
const ui = new UI;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', function(e) {
  const userText = e.target.value;
  
  if(userText !== ""){
   github.getUser(userText).then(data => {
     if(data.profile.message === "Not Found"){
      //SHow alert
      ui.showAlert('user not found', 'alert alert-danger');
     } else {
      //show Profile
      ui.showProfile(data.profile);
      ui.showRepos(data.repos);
     }
   })
  } else {
    ui.clearProfile();
  }
});
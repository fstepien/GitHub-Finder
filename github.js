class GitHub{

constructor(){
  this.client_id = '2104a8f3c8b8762b6579';
  this.client_secret = '43056befdfc12f283075b873500ae2c55180be8c';
  this.repos_count = 5;
  this.repos_sort = 'created: asc';
}

async getUser(user){
  const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
  const profile = await profileResponse.json();
  const repos = await repoResponse.json();
    return {
    profile,
    repos
  }
}

}
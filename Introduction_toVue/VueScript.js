 Vue.component('user-card', {
    props: ['name', 'role', 'avatar'],
    template: `
      <div class="user-card">
        <img :src="avatar" alt="Avatar" class="avatar">
        <div class="user-name">{{ name }}</div>
        <div class="user-role">{{ role }}</div>
      </div>
    `
  });

  new Vue({
    el: '#app'
  });
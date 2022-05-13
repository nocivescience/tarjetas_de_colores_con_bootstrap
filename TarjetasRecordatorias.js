const addBtn = document.querySelector('.btn-primary');
const container = document.getElementById('container');
const classes=[
  'card text-white bg-primary mb-3',
  'card text-white bg-secondary mb-3',
  'card text-white bg-success mb-3',
  'card text-white bg-danger mb-3',
  'card text-white bg-warning mb-3',
  'card text-dark bg-info mb-3',
  'card text-dark bg-light mb-3',
  'card text-white bg-dark mb-3',
];
function createTarget(){
    const target = document.createElement('div');
    target.style.opacity = 1;
    target.innerHTML = `
    <div class='${classes[Math.floor(Math.random() * classes.length)]}'
      style="max-width: 18rem;">
      <div class="card-header">Header
        <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
          <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
        </svg></div>
      </div>
      <div class="card-body">
        <h5 class="card-title">Info card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>`;
    container.appendChild(target);
}
addBtn.addEventListener('click', ()=>{
  createTarget();
});
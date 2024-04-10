const commentsForm = document.forms['comments-form'];
const comments = document.querySelector('#comments');

commentsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const commentBody = getComment();
    const commentTemplate = createComment(commentBody);

    comments.children[0].before(commentTemplate);
})

function getComment() {
    return {
        name: commentsForm['comment-name'].value,
        body: commentsForm['comment-body'].value
    };
}

function createComment(comment) {
    const commentDiv = document.createElement('div');

    commentDiv.classList.add('comments');
    commentDiv.setAttribute('id', 'comment1');
    commentDiv.setAttribute('style', 'display:block');

    commentDiv.innerHTML = `
    <div class="profile">
    <span style="broder: 1px solid grey;background-color: white;height: 50px; display:block;">No image</span>
  </div>
  <div class="comment-content">
    <p class="name">
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">${comment.name}</font>
      </font>
    </p>
    <p>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">${comment.body}</font>
      </font>
    </p>
  </div>
  <div class="clr"></div>
  <div class="comment-status">
  <span>
  <font style="vertical-align: inherit;">
    <font style="vertical-align: inherit;">Curte·comente</font>
  </font>
  <img src="./assets/img/like.png" width="15px" height="15px">
  <font style="vertical-align: inherit;">
    <font style="vertical-align: inherit;">9</font>
  </font>
 
  <small>
  <u>
  <font style="vertical-align: inherit;">Now</font>
  </u>
  </small>
  </font>
  </span>
  </div>
    `
    return commentDiv
}
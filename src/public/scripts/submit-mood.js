$(document).ready(() => {
  function displayRelatedMoods(moods) {
    const li = (mood) => `<li class="list-group-item">${mood.val}</li>`;

    const html = [
      '<p>See what others have been feeling about this weather...</p>',
      `<ul class="list-group">${moods.map(li)}</ul>`,
    ].join('\n');

    $('#dynamic-content').html(html);
  }

  $('#mood-form').submit((e) => {
    e.preventDefault();

    fetch(e.target.action, {
      body: new URLSearchParams(new FormData(e.target)),
      method: 'POST',
    }).then((res) => {
      if (res.status === 200) {
        res.json().then(displayRelatedMoods);
      }

      return res.json().then(console.error);
    });
  });
});

$(document).ready(() => {
  $('#mood-form').submit((e) => {
    e.preventDefault();

    fetch(e.target.action, {
      body: new URLSearchParams(new FormData(e.target)),
      method: 'POST',
    }).then((res) => {
      if (res.status === 200) {
        return alert('Thanks!');
      }

      return res.json().then(console.error);
    });
  });
});

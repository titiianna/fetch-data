(function () {
    const tableBody = document.querySelector('table tbody');

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                const tableRow = document.createElement('tr');
                const idEl = document.createElement('td');
                const userIdEl = document.createElement('td');
                const titleEl = document.createElement('td');
                const bodyEl = document.createElement('td');

                idEl.textContent = data[i].id;
                userIdEl.textContent = data[i].userId;
                titleEl.textContent = data[i].title;
                bodyEl.textContent = data[i].body;

                tableRow.append(idEl, userIdEl, titleEl, bodyEl);
                tableBody.appendChild(tableRow);
            }
        })
        .catch(err => console.error(err));
})();
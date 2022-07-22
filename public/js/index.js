const btnSubmit = document.querySelector('.btn-submit--update');
const form = document.querySelector('.form');
const table = document.querySelector('.table');

btnSubmit?.addEventListener('click', async (e) => {
    try {
        e.preventDefault();

        const id = btnSubmit.dataset.id;
        const formData = Object.fromEntries(new FormData(form).entries());
        const formDataJSON = JSON.stringify(formData);

        const data = await fetch(`http://localhost:7777/api/user/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: formDataJSON,
        });

        const data2 = await data.json();
        console.log(data2);
        alert('Data Updated');
        window.location.href = 'http://localhost:7777/';
    } catch (err) {
        console.error(err);
    }
});

table?.addEventListener('click', async (e) => {
    try {
        const btn = e.target.closest('.btn-tab--delete');
        console.log(btn);
        if (!btn) return;

        const id = btn.dataset.id;

        const userConfirm = confirm('Are you sure want to delete this user ?');

        if (!userConfirm) return;
        await fetch(`/api/user/${id}`, {
            method: 'delete',
        });

        window.location.reload();
    } catch (err) {
        console.error(err);
    }
});
